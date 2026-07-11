class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let n = nums.length
        let start = 0
        let end = nums.length-1

        while(start<end){

            let mid = start + Math.floor((end-start)/2)
            console.log(mid)

            if(mid-1 >= 0 && mid+1 < n && nums[mid] < nums[mid+1] && nums[mid] < nums[mid-1]){
                return nums[mid]
            }

            if(nums[mid]>=nums[start] && nums[mid]>nums[end] ){
                start = mid+1
            }else{
                end=mid
            }

        }

        return nums[end]
    }
}
