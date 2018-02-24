module.exports = function makeExchange(currency) {
  var obj = {};
  if (currency <= 0) {
    return obj
  }
  if (currency >= 10000) {
    obj.error = "You are rich, my friend! We don't have so much coins for exchange";
    return obj;
  }

  var coins = [50, 25, 10, 5, 1];
  var numOfCoins = [0, 0, 0, 0, 0];
  var currCoinIndex = 0;
  var currCurrency = currency;

  while (currCurrency > 0) {
//    console.log(currCurrency);
    if (currCurrency == 0) {
      break;
    }
    if (currCurrency < coins[currCoinIndex]) {
      currCoinIndex++;
    } else {
      currCurrency -= coins[currCoinIndex];
      numOfCoins[currCoinIndex]++;
    }
  }
  
//  console.log(numOfCoins);
  
  if (numOfCoins[0] > 0) { obj.H = numOfCoins[0] }
  if (numOfCoins[1] > 0) { obj.Q = numOfCoins[1] }  
  if (numOfCoins[2] > 0) { obj.D = numOfCoins[2] }
  if (numOfCoins[3] > 0) { obj.N = numOfCoins[3] }
  if (numOfCoins[4] > 0) { obj.P = numOfCoins[4] }
  
  return obj
}
