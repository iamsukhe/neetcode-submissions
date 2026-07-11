class Solution {

    findMin(nums) {
        let n = nums.length
        let start = 0
        let end = nums.length-1

        while(start<end){

            let mid = start + Math.floor((end-start)/2) 

            if(mid-1 >= 0 && mid+1 < n && nums[mid] < nums[mid+1] && nums[mid] < nums[mid-1]){
                return mid
            }

            if(nums[mid]>=nums[start] && nums[mid]>nums[end] ){
                start = mid+1
            }else{
                end=mid
            }

        }

        return end
    }

    binarySerach(nums, start, end, target){
        

        while(start<=end){
            let mid = start + Math.floor((end-start)/2)
           
                 console.log('mid', mid)

            if(target === nums[mid]){
                return mid
            }

            if(nums[mid] < target){
                start = mid+1
            }else{
                end=mid-1
            }


        }

        return -1
    }

    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {

        let minIndex = this.findMin(nums)

        let start = 0 
        let end = nums.length-1

        let ans = this.binarySerach(nums, start, minIndex-1, target)
 

        if(ans == -1){
            ans = this.binarySerach(nums, minIndex, end, target)
        }

        return ans


    }


}
