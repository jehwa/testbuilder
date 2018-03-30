// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  let numLength = cardNumber.length
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  if(numLength === 14 && (cardNumber.startsWith('38') || cardNumber.startsWith('39'))) {
    return `Diner's Club`;
  }
  // The American Express network always starts with a 34 or 37 and is 15 digits long
  if(numLength === 15 && (cardNumber.startsWith('34') || cardNumber.startsWith('37'))) {
    return `American Express`;
  }

  // Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length
  // of 16, 18, or 19.

  var switchPrefix = [4903, 4905, 4911, 4936, 564182, 633110, 6333, 6759];

  for(let i = 0; i < switchPrefix.length; i ++) {
    if(cardNumber.startsWith(String(switchPrefix[i])) &&
    (cardNumber.length === 16 || cardNumber.length === 18 || cardNumber.length === 19)) {
      return 'Switch';
    }
  }

  // Once you've read this, go ahead and try to implement this function, then return to the console.


  if(cardNumber.startsWith('4') && ((numLength === 13 || numLength === 16 || numLength === 19))){
    return `Visa`;
  }
  if(numLength === 16 &&
    (cardNumber.startsWith('51') || cardNumber.startsWith('52') ||
    cardNumber.startsWith('53') || cardNumber.startsWith('54') || cardNumber.startsWith('55'))) {
      return 'MasterCard';
    }
  if((numLength === 16 || numLength === 19) && (cardNumber.startsWith('6011') || cardNumber.startsWith('644') ||
     cardNumber.startsWith('645') || cardNumber.startsWith('646') || cardNumber.startsWith('647') ||
     cardNumber.startsWith('648') || cardNumber.startsWith('649') || cardNumber.startsWith('65'))) {
       return 'Discover';
     }
  if((numLength >= 12 && numLength <= 19) &&
      (cardNumber.startsWith('5018') ||
       cardNumber.startsWith('5020') ||
       cardNumber.startsWith('5038') ||
       cardNumber.startsWith('6304'))) {
       return 'Maestro';
     }

  //China UnionPay
  // China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.

  var chinaPrefix = [];
  for(let i = 622126; i <= 622925; i ++) {
    chinaPrefix.push(i);
  }
  for(let i = 624; i <= 626; i ++) {
    chinaPrefix.push(i);
  }
  for(let i = 6282; i <= 6288; i ++) {
    chinaPrefix.push(i);
  }

  for(let i = 0; i < chinaPrefix.length; i ++) {
    if(cardNumber.startsWith(String(chinaPrefix[i])) && (cardNumber.length >= 16 || cardNumber.length <= 19)) {
      return 'China UnionPay';
    }
  }


//
// Heads up! Switch and Visa seem to have some overlapping card numbers - in any apparent conflict,
// you should choose the network with the longer prefix.

};
