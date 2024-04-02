import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const convertToCelsius = (f) => {
    const c = (f - 32) * 5 / 9;
    return c.toFixed(2);
  };

  const convertToFahrenheit = (c) => {
    const f = c * 9 / 5 + 32;
    return f.toFixed(2);
  };

  const handleCelsiusChange = (event) => {
    const value = event.target.value;
    setCelsius(value);
    setFahrenheit(convertToFahrenheit(value));
  };

  const handleFahrenheitChange = (event) => {
    const value = event.target.value;
    setFahrenheit(value);
    setCelsius(convertToCelsius(value));
  };

  return (
    <div>
      <TextField
        label="Celsius"
        value={celsius}
        onChange={handleCelsiusChange}
      />
      <TextField
        label="Fahrenheit"
        value={fahrenheit}
        onChange={handleFahrenheitChange}
      />
      <Button variant="contained" onClick={() => { setCelsius(''); setFahrenheit(''); }}>
        Clear
      </Button>
    </div>
  );
};

export default TemperatureConverter;
