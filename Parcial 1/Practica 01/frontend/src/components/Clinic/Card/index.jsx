import React from 'react';

import { Card } from '../../Common/Card';

import './styles.css';

export const ClinicCard = ({ data }) => {
  return (
    <Card>
      <div className="containerClinicCard">
        <div className="containerText">
          <b>Ciudad: </b>
          <p>{data.city}</p>
        </div>
        <div className="containerText">
          <b>Descripción: </b>
          <p> {data.description}</p>
        </div>
      </div>
    </Card>
  );
};
