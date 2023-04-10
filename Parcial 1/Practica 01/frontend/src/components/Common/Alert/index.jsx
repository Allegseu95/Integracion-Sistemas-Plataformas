import React, { useState, Fragment } from 'react';

import './styles.css';

export const Alert = ({ text, type = 'success' }) => {
  const [showAlert, setShowAlert] = useState(true);

  return (
    <Fragment>
      {showAlert && (
        <div
          onClick={() => setShowAlert(!showAlert)}
          className={'alert'}
          style={{
            backgroundColor:
              type === 'success'
                ? 'green'
                : type === 'error'
                ? 'red'
                : type === 'warning'
                ? '#a8a82f'
                : 'gray',
          }}
        >
          {text}
        </div>
      )}
    </Fragment>
  );
};
