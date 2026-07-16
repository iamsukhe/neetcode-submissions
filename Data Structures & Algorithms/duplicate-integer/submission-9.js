class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
       const seen = new Set()

       for(let val of nums){
        if(seen.has(val)){
            return true
        }
        seen.add(val)
       }

       return false
    }
}