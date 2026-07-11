class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        let numsCount = {}

        for(let val of nums){
            if(numsCount[val]){
                numsCount[val]++
            }else{
                numsCount[val] = 1
            }
        }


        let ans = []

        for(let prop in numsCount){
            if(numsCount[prop] > (nums.length / 3)){
                ans.push(Number(prop))
            }
        }

        return ans
    }
}
