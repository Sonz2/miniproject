import React, { useState } from 'react';
import BMIForm from './BMIForm';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [bmiRecords, setBmiRecords] = useState([]);

  const saveDataHandler = (enteredData) => {
    setBmiRecords((prevRecords) => {
      return [enteredData, ...prevRecords];
    });
  };

  const interpretBMI = (bmi) => {
    if (bmi < 18.5) {
      return 'น้ำหนักต่ำกว่าเกณฑ์ (Underweight)';
    } else if (bmi >= 18.5 && bmi < 25) {
      return 'อยู่ในเกณฑ์ปกติ (Normal weight)';
    } else if (bmi >= 25 && bmi < 30) {
      return 'น้ำหนักเกิน (Overweight)';
    } else {
      return 'อ้วน (Obesity) แนะนำให้ออกกำลังกาย และปรับเปลี่ยนอาหารการกิน';
    }
  };

  return (
    <div className='container'>
      <header className="text-center mt-5">
        <h1>BMI Calculator</h1>
      </header>
      <BMIForm onSaveData={saveDataHandler} />
      <section className="mt-5">
        {bmiRecords.map((record, index) => (
          <div key={index} className="card mb-3 mx-auto" style={{maxWidth: '540px'}}>
            <div className="card-body">
              <h5 className="card-title">{record.name}</h5>
              <p className="card-text">Weight: {record.weight} kg</p>
              <p className="card-text">Height: {record.height} cm</p>
              <p className="card-text">BMI: {record.bmi}</p>
              <p className="card-text">Interpretation: {interpretBMI(record.bmi)}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default App;
