import { useState, useEffect } from 'react';

import { Alert } from './components/Common/Alert';
import { ClinicCard } from './components/Clinic/Card';

import './App.css';

export const App = () => {
  const [clinics, setClinics] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [alert, setAlert] = useState({
    text: '',
    type: '',
  });

  const getData = async () => {
    try {
      const response = await fetch('http://localhost:3000');
      const message = await response.json();
      console.log('init Data', message);

      const res = await fetch('http://localhost:3000/clinics');
      const data = await res.json();
      setAlert({ text: 'Operation OK', type: 'success' });
      setClinics(data.clinics);
    } catch (error) {
      console.log('error', error);
      setAlert({ text: 'Operation Failed', type: 'error' });
    } finally {
      setShowAlert(true);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {showAlert && <Alert text={alert.text} type={alert.type} />}
      <h2>Newborn App</h2>

      {clinics.map((item, index) => (
        <ClinicCard key={index} data={item} />
      ))}
    </div>
  );
};
