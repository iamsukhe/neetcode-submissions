class Solution {
    compareNumbers(a, b) {
        return a - b;
    }

    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {
       


        for(let val of nums2){
            nums1[m++] = val
        }
 
        nums1.sort(this.compareNumbers)

    }
}
