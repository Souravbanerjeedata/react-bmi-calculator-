import { useState } from "react";

const App = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState("");

  function calculateBMI() {
    if (!height || !weight) {
      setResult("Please enter the information!");
      return;
    }

    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);

    let category;
    if (bmi < 18.5) category = "Underweight";
    else if (bmi < 25) category = "Normal Weight";
    else if (bmi < 30) category = "Overweight";
    else {
      category = "Obese";
    }

    setResult(`Your BMI is ${bmi}. You are ${category}`);
  }

  return (
    <div className="container">
      <h1>BMI Calculator</h1>
      <label htmlFor="height">Height (cm)</label>
      <input
        type="text"
        placeholder="e.g. 170"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />
      <label htmlFor="weight">Weight (kg)</label>
      <input
        type="text"
        placeholder="e.g. 65"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      <button onClick={calculateBMI}>Calculate</button>
      <p className="result">{result}</p>
    </div>
  );
};

export default App;
