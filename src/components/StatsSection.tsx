import "../components/styles/stats.scss";

import React from 'react';

const StatsSection = () => {
  return (
    <div className="stats-section" >
      <h2>Aegle v2 Specs</h2>
      <div className="stat">Flight Time: 30 minutes</div>
      <div className="stat">Max Speed: 1000 km/h</div>
      <div className="stat">Battery: big boi</div>
      <div className="stat">Wingspan: 3 meters</div>
    </div>
  );
};

export default StatsSection;
