class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    mySqrt(x) {
        let start = 0
        let end = x
        let ans = -1

        while(start<=end){
            let mid = start + Math.floor((end-start)/2)

            let root = mid*mid

            if(root<=x){
                ans = mid
                start = mid+1
            }else{
                end = mid -1 
            }
        }

        return ans
    }
}
