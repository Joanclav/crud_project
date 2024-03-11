import React, { useState, useEffect } from 'react';

const Banner = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div style={{ marginBottom: '-30px', backgroundColor: '#78909c', padding: '10px', position: 'relative' }}>
      <img
        src="https://idealcontrol.cl/wp-content/uploads/2021/07/logo-ideal-control.png"
        alt="Ideal Control" 
        style={{ maxWidth: '300px' }} 
      />

      <div className="text-right" style={{ color: '#fff', position: 'absolute', top: 0, right: 0 }}>
        <p className="mb-0">Fecha actual</p> 
        <p className="mb-0 lead">
          {currentDate.toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default Banner;
