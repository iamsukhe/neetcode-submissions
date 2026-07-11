class Solution { 

    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {

        let t = m+n-1
        let i = m-1
        let j = nums2.length-1
 
        

        while(i>=0 && j >= 0 && t>=0){
            if(nums1[i] > nums2[j]){
                nums1[t] = nums1[i]
                i--
            }else if(nums1[i] < nums2[j]){
                nums1[t] = nums2[j]
                j--
            }else{
                nums1[t] = nums2[j]
                j--
            }
            t--
        }


        while(j>=0 && t>=0){
            nums1[t] = nums2[j]
            t--
            j--
        }


    }
}
