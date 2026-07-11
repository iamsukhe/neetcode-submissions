class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        if(s.length != t.length){
            return false
        }

        const sCount = {}
        const tCount = {}

        for (let char of s) {
            if(!sCount[char]){
                sCount[char] = 1
            }else{
                sCount[char]++
            }
        }

        for (let char of t) {
            if(!tCount[char]){
                tCount[char] = 1
            }else{
                tCount[char]++
            }
        }

        for (let char of s) {
            if(sCount[char] != tCount[char]){
                return false
            }
        }

        return true
    }
}
