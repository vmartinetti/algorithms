// 
const maxProfit = (prices) => {
  let maxProfit = 0;
  let minPrice = prices[0];
  for (let i = 1; i < prices.length; i++){
    const currentPrice = prices[i];
    if (currentPrice < minPrice){
      minPrice = currentPrice;
    }
    else if (currentPrice - minPrice > maxProfit){
      maxProfit = currentPrice - minPrice;
    }
  }
  return maxProfit;
}

module.exports = maxProfit;