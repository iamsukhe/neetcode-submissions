class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let product = 1

        let zeroCount = 0

        for (let val of nums){
            if(val !== 0){
                product *= val
            }else{
                zeroCount++
            }
        }

        if (zeroCount > 1){
            return Array(nums.length).fill(0)
        }

        let ans = []

        for (let val of nums){
            if(val !== 0 && zeroCount===1){
                ans.push(0)
            }else if (val !== 0 && zeroCount===0){
                ans.push(product/val)
            } else{
                ans.push(product)
            }
        }

        return ans

    }
}
