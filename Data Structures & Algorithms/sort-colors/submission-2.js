class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */

    swap(arr, i, j){  
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }

    sortColors(nums) {
        let start = 0
        let index = 0
        let end = nums.length-1; 

        while(index<=end){ 
            if(nums[index] === 0){
                this.swap(nums, start, index)
                start++
                index++ 
            } else if (nums[index] === 1){
                index++ 
            } else if (nums[index] === 2){
                this.swap(nums, end, index)
                end--
            }
        }
    }
}
