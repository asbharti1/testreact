import React from 'react';

const MonthDropdown = () => {
  const months = [
    'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
  ];

  const printSelectedMonths = () => {
    // Indices of 2nd, 4th, 6th, and 8th months
    const selectedIndices = [1, 3, 5, 7];

    const selectedMonths = selectedIndices.map(index => months[index]);

    console.log("Selected Months:", selectedMonths);
  };

  return (
    <div>
      <button onClick={printSelectedMonths}>Print Selected Months</button>
    </div>
  );
};

export default MonthDropdown;
