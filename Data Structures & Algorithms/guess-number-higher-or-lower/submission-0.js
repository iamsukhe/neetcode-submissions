/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * function guess(num) {}
 */

class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    guessNumber(n) {
        let start = 0
        let end = n

        while(start<=end){
            let mid = start + Math.floor((end-start)/2)

            let pick = guess(mid)

            if(pick===1){
                start = mid+1
            }else if (pick===-1){
                end = mid-1
            }else{
                return mid
            }
        }
    }
}
