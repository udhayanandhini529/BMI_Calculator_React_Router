import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="page">
      <h1>Welcome to BMI Calculator</h1>
      <Link to="/calculate">
        <button>Go to Calculator</button>
      </Link>
    </div>
  );
};

export default Home;