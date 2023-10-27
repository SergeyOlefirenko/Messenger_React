import React, { useState, useEffect } from 'react';
import './Loader.css';
import { useNavigate } from 'react-router-dom';
const Loader = () => {
  const [isLoading, setLoading] = useState(true);
  const navigate = useNavigate();
  // Имитация задержки загрузки
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      navigate("/home");
    }, 2200); // Имитация двух секунд загрузки
   
  }, []);
  return isLoading ? (
    <div className="loader">
      <div className="loading">
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
      </div>
    </div>
  ) : null;
};

export default Loader;



