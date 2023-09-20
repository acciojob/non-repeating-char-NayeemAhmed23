function firstNonRepeatedChar(str) {
 // Write your code here
	if (str.length === 0) {
    return null;
  }

  // Create an object to store character frequencies
  const charFrequency = {};

  // Populate charFrequency with character frequencies
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    charFrequency[char] = (charFrequency[char] || 0) + 1;
  }

  // Iterate through the string to find the first non-repeated character
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charFrequency[char] === 1) {
      return char;
    }
  }

  // If no non-repeated character is found, return null
  return null;
}
// const input = prompt("Enter a string");
// alert(firstNonRepeatedChar(input)); 
