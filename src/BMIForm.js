import React, { useState } from 'react';

function BMIForm({ onSaveData }) {
    const [name, setName] = useState('');
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');

    const submitHandler = (event) => {
        event.preventDefault();

        const bmiData = {
            name: name,
            weight: weight,
            height: height,
            bmi: calculateBMI(weight, height),
        };

        onSaveData(bmiData);

        setName('');
        setWeight('');
        setHeight('');
    };

    const calculateBMI = (weight, height) => {
        const heightInMeters = height / 100;
        return (weight / (heightInMeters * heightInMeters)).toFixed(2);
    };
    

    return (
        <form onSubmit={submitHandler} className="container mt-5 mb-3 mx-auto" style={{maxWidth: '540px'}}>
        <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" id="name" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="mb-3">
            <label htmlFor="weight" className="form-label">Weight (kg)</label>
            <input type="number" id="weight" className="form-control" value={weight} onChange={(e) => setWeight(e.target.value)} />
        </div>
        <div className="mb-3">
            <label htmlFor="height" className="form-label">Height (cm)</label>
            <input type="number" id="height" className="form-control" value={height} onChange={(e) => setHeight(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">Calculate BMI</button>
    </form>
    

    );
}

export default BMIForm;
