class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let ans = []
        let ansIndex = 0

        for(let i=0; i<nums.length; i++){
            if(ansIndex === 0){
                ans.push(nums[i])
                ansIndex++
            }else if ( ans[ansIndex-1] !== nums[i]){
                ans.push(nums[i])
                ansIndex++
            }
        }

        console.log(ans)

        for(let i=0; i<ans.length; i++){
            nums[i] = ans[i]
        }

        return ans.length
    }
}
