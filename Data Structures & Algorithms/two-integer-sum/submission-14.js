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

        console.log(indices)
        for(let i=0; i<nums.length; i++){
            let diff = target - nums[i]
            console.log(diff)

            if(indices[diff] && indices[diff] !== i){
                return [i, indices[diff]]
            }
        }




    }
}