class Solution {

    swap(arr, i, j){
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s) {
        let start = 0
        let end = s.length-1

        while(start<=end){
            this.swap(s,start,end)
            start++
            end--
        }


        return s

    }
}
