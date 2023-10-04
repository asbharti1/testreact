function romanToNumber(roman) {
    const romanNumerals = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
    };
  
    let result = 0;
  
    for (let i = 0; i < roman.length; i++) {
      const currentChar = roman[i];
      const currentValue = romanNumerals[currentChar];
      const nextChar = roman[i + 1];
      const nextValue = romanNumerals[nextChar];
  
      if (nextValue && currentValue < nextValue) {
        result -= currentValue; // If the next numeral is greater, subtract the current value.
      } else {
        result += currentValue;
      }
    }
  
    return result;
  }
  
  // Example usage:
  const romanNumeral = 'MIV'; // This is 14 in Roman numerals
  const number = romanToNumber(romanNumeral);
  console.log(number); // Output: 1004