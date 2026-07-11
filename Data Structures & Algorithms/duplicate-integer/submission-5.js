class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const hash = {}

        for (let val of nums){
            if(hash[val]){
                hash[val]++
            }else{
                hash[val] = 1
            }
            
        }

        console.log(hash)

        for (let val in hash){
            if(hash[val] > 1){
                return true
            }
        }

        return false


    }
}
