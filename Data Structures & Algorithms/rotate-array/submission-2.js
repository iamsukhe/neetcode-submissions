class Solution {

    reverse(nums, start, end){
        while(start<=end){

            [nums[start], nums[end]] = [nums[end], nums[start]]

            start++
            end--
        }
    }
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums, k) {
        // 7-3=4
        let n = nums.length
        let e = n-(k%n)
        this.reverse(nums, 0, e-1)
        this.reverse(nums, e, n-1)
        this.reverse(nums, 0, n-1)
    }
}
