class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const numsObjs = {}

        for(let i=0; i<nums.length; i++){
            if(!numsObjs[nums[i]]){
                numsObjs[nums[i]] = 1
            }else{
                numsObjs[nums[i]]++;
            }
        }

        console.log(numsObjs)

        for (const property in numsObjs) {
            if(numsObjs[property]>1){
                return true
            }
        }

        return false


    }
}
