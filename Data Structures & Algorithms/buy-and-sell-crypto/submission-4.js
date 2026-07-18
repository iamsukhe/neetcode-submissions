class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let n = prices.length
        if(n === 1){
            return 0
        }

        let buy = 0
        let sell = 1

        let profit = 0

        while(buy<sell && sell < n){
            if(prices[buy] > prices[sell]){
                buy = sell
                sell++
            }

            if(prices[buy]<=prices[sell]){
                profit = Math.max(profit,(prices[sell]-prices[buy]))
                sell++
            }
        }

        return profit
    }
}
