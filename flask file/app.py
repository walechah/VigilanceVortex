from flask import Flask, request, jsonify
from joblib import load
import pandas as pd

features = ['murder', 'rape', 'robbery', 'gangrape', 'theft', 'assault murders', 'sexual harassement', 'totarea', 'totalcrime', 'long', 'lat', 'crime/area', 'area']
crime_data = pd.read_csv('C:/Users/VAIBHAV/Desktop/VigilanceVortex/flask file/crime.csv')

# Load model and scaler (replace with actual file paths)
model = load('C:/Users/VAIBHAV/Desktop/VigilanceVortex/models/logistic_regression_model.pkl')
scaler = load('C:/Users/VAIBHAV/Desktop/VigilanceVortex/models/scaler.pkl')

def predict_safety(area_name, crime_data, features, model, scaler=None):
  """
  Predicts safety for a given area name using the model.

  Args:
      area_name: Name of the area to predict (e.g., "CHITRANJAN PARK").
      crime_data: DataFrame containing crime data.
      features: List of feature names used for prediction.
      model: Trained logistic regression model.
      scaler (optional): Scaler object used for preprocessing (if applicable).

  Returns:
      tuple: (str, float): "Safe" or "Unsafe" and a safety score (0.0 to 1.0)
  """

  # Filter data for the specific area
  area_data = crime_data.loc[crime_data["location"] == area_name.upper()]  # Ensure case-insensitive search

  # Check if area exists in data
  if area_data.empty:
      return f"Area '{area_name}' not found in data.", None

  # Extract features for prediction
  area_features = area_data[features]

  # Preprocess data if needed
  if scaler:
      area_scaled = scaler.transform(area_features.values.reshape(1, -1))
  else:
      area_scaled = area_features

  # Make prediction
  prediction = model.predict(area_scaled)

  # Assuming higher prediction value indicates higher risk (modify based on your model)
  safety_score = 1.0 - prediction[0]  # Normalize to 0.0 (safe) - 1.0 (unsafe)

  if prediction == 0:
      return "Safe For Visit", safety_score
  else:
      return "Caution Advised!!!", safety_score

app = Flask(__name__)


@app.route('/safety_score', methods=['GET'])
def get_safety_score():
    location = request.args.get('location', default=None, type=str)

    if location is None:
        return jsonify({'error': 'Location is required'}), 400

    # Preprocess location string (lowercase and strip)
    location = location.lower().strip()

    # Predict safety using the function defined above
    prediction, safety_score = predict_safety(location, crime_data, features, model, scaler)

    # Check if prediction function returned an error message
    if isinstance(prediction, str) and prediction.startswith("Area '"):
        return jsonify({'error': prediction}), 404

    # Return JSON response with safety message and score
    safety_message = prediction.split()[0]  # Extract "Safe" or "Caution"

    return jsonify({'safety_message': safety_message,
                    'LOCATION TARGETTED': location,
                    'Safety Score': safety_score})

if __name__ == '__main__':
    app.run(host='localhost', port=5000, debug=True)
