class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let ans = ''

        let n = 0 

        while(n < word1.length && n < word2.length){
            ans += word1[n]
            ans += word2[n]
            n++
        }

        while(n < word1.length){
            ans += word1[n]
            n++
        }
        
        while(n < word2.length){
            ans += word2[n]
            n++
        }

        return ans
    }
}
