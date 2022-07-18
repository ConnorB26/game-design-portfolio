import React from 'react';
import './NotFound.css';

export const NotFound = () => {
  return (
  <div className = "bgd__notfound" style = {{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '25vh'}}>
      <h1 className = "gradient__text-new">Page Not Found</h1>\
  </div>
  )
}

export default NotFound;