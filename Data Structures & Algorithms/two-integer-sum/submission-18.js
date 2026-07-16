class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const indices = {}; // val -> index


        for(let i=0; i<nums.length; i++){
            indices[nums[i]] = i
        }

        for(let i=0; i<nums.length; i++){
            const diff = target - nums[i]

            if(i !== indices[diff] && indices[diff]){
                return [i,indices[diff]]
            }
        }




    }
}