import React from 'react';

const VerticalLine: React.FC = () => {
  const lineStyle: React.CSSProperties = {
    borderLeft: '1px solid black', // Create a 2px wide vertical line
    height: '15px', // Adjust the height as needed
    margin: '0 px', // Optional: Add some space around the line
  };

  return <div style={lineStyle}></div>;
};

export default VerticalLine;