import React, { useState } from 'react';

const BMICalculator = () => {
 const [weight, setWeight] = useState('');
 const [height, setHeight] = useState('');
 const [bmi, setBmi] = useState(null);
 const [category, setCategory] = useState('');

 const calculateBMI = () => {
   if (!weight || !height) return;
   const h = height / 100;
   const result = (weight / (h * h)).toFixed(2);
   setBmi(result);

   if (result < 18.5) setCategory('Underweight');
   else if (result < 24.9) setCategory('Normal weight');
   else if (result < 29.9) setCategory('Overweight');
   else setCategory('Obesity');
 };

 return (
   <div className="page">
     <h2>BMI Calculator</h2>
     <input
       type="number"
       placeholder="Weight (kg)"
       value={weight}
       onChange={(e) => setWeight(e.target.value)}
     />
     <input
       type="number"
       placeholder="Height (cm)"
       value={height}
       onChange={(e) => setHeight(e.target.value)}
     />
     <button onClick={calculateBMI}>Calculate</button>

     {bmi && (
       <div className="result">
         <p><strong>BMI:</strong> {bmi}</p>
         <p><strong>Category:</strong> {category}</p>
       </div>
     )}
   </div>
 );
};

export default BMICalculator;