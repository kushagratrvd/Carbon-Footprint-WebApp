const EMISSION_FACTORS = {
  "India": {
    "Transportation": 0.14,  // kgCO2/km
    "Electricity": 0.82,     // kgCO2/kWh
    "Diet": 1.25,            // kgCO2/meal
    "Waste": 0.1             // kgCO2/kg
  },
  "United States": {
    "Transportation": 0.24,  // kgCO2/km
    "Electricity": 0.45,     // kgCO2/kWh
    "Diet": 1.10,            // kgCO2/meal
    "Waste": 0.2             // kgCO2/kg
  },
  "China": {
    "Transportation": 0.16,  // kgCO2/km
    "Electricity": 0.60,     // kgCO2/kWh
    "Diet": 1.30,            // kgCO2/meal
    "Waste": 0.15            // kgCO2/kg
  },
  "Germany": {
    "Transportation": 0.18,  // kgCO2/km
    "Electricity": 0.35,     // kgCO2/kWh
    "Diet": 1.00,            // kgCO2/meal
    "Waste": 0.12            // kgCO2/kg
  },
  "Brazil": {
    "Transportation": 0.12,  // kgCO2/km
    "Electricity": 0.20,     // kgCO2/kWh
    "Diet": 1.15,            // kgCO2/meal
    "Waste": 0.08            // kgCO2/kg
  },
  "United Kingdom": {
    "Transportation": 0.19,  // kgCO2/km
    "Electricity": 0.20,     // kgCO2/kWh
    "Diet": 1.05,            // kgCO2/meal
    "Waste": 0.10            // kgCO2/kg
  },
  "France": {
    "Transportation": 0.17,  // kgCO2/km
    "Electricity": 0.10,     // kgCO2/kWh
    "Diet": 1.00,            // kgCO2/meal
    "Waste": 0.09            // kgCO2/kg
  },
  "Japan": {
    "Transportation": 0.22,  // kgCO2/km
    "Electricity": 0.40,     // kgCO2/kWh
    "Diet": 1.20,            // kgCO2/meal
    "Waste": 0.14            // kgCO2/kg
  },
  "Australia": {
    "Transportation": 0.26,  // kgCO2/km
    "Electricity": 0.80,     // kgCO2/kWh
    "Diet": 1.25,            // kgCO2/meal
    "Waste": 0.18            // kgCO2/kg
  },
  "South Africa": {
    "Transportation": 0.20,  // kgCO2/km
    "Electricity": 0.90,     // kgCO2/kWh
    "Diet": 1.35,            // kgCO2/meal
    "Waste": 0.16            // kgCO2/kg
  },
  "Canada": {
    "Transportation": 0.23,  // kgCO2/km
    "Electricity": 0.20,     // kgCO2/kWh
    "Diet": 1.05,            // kgCO2/meal
    "Waste": 0.11            // kgCO2/kg
  }
}
;

function updateValue(id, value) {
  document.getElementById(id).textContent = value;
}

function calculateEmissions() {
  const country = document.getElementById('country-select').value;
  let distance = parseFloat(document.getElementById('distance-input').value);
  let electricity = parseFloat(document.getElementById('electricity-input').value);
  let waste = parseFloat(document.getElementById('waste-input').value);
  let meals = parseInt(document.getElementById('meals-input').value);

  // Normalize inputs to yearly values
  distance = distance > 0 ? distance * 365 : 0;
  electricity = electricity > 0 ? electricity * 12 : 0;
  meals = meals > 0 ? meals * 365 : 0;
  waste = waste > 0 ? waste * 52 : 0;

  // Calculate emissions
  const transportation_emissions = EMISSION_FACTORS[country]["Transportation"] * distance;
  const electricity_emissions = EMISSION_FACTORS[country]["Electricity"] * electricity;
  const diet_emissions = EMISSION_FACTORS[country]["Diet"] * meals;
  const waste_emissions = EMISSION_FACTORS[country]["Waste"] * waste;

  // Convert to tonnes and round off
  const transportationEmissions = (transportation_emissions / 1000).toFixed(2);
  const electricityEmissions = (electricity_emissions / 1000).toFixed(2);
  const dietEmissions = (diet_emissions / 1000).toFixed(2);
  const wasteEmissions = (waste_emissions / 1000).toFixed(2);

  const totalEmissions = (parseFloat(transportationEmissions) + parseFloat(electricityEmissions) + parseFloat(dietEmissions) + parseFloat(wasteEmissions)).toFixed(2);

  // Display results
  document.getElementById('emission-results').innerHTML = `
      <p>🚗 Transportation: ${transportationEmissions} tonnes CO2 per year</p>
      <p>💡 Electricity: ${electricityEmissions} tonnes CO2 per year</p>
      <p>🍽️ Diet: ${dietEmissions} tonnes CO2 per year</p>
      <p>🗑️ Waste: ${wasteEmissions} tonnes CO2 per year</p>
  `;
  document.getElementById('total-emission').innerHTML = `
      <h3>🌍 Your total carbon footprint is: ${totalEmissions} tonnes CO2 per year</h3>
  `;
  document.getElementById('warning').innerHTML = `
      <p>In 2021, CO2 emissions per capita for India was 1.9 tons of CO2 per capita. Between 1972 and 2021, CO2 emissions per capita of India grew substantially from 0.39 to 1.9 tons of CO2 per capita rising at an increasing annual rate that reached a maximum of 9.41</p>
  `;
}
