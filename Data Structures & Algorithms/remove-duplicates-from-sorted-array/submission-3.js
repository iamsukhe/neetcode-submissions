class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let l = 0
        let r = 0
        let n = nums.length

        while(r<n){
            nums[l] = nums[r];
            
            while (r < n && nums[r] === nums[l]) {
                r++;
            }
            l++;

            
        }
 
        return l

        
    }
}
