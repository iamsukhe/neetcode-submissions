class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const res = {};
        for(let s of strs){
            let key = new Array(26).fill(0)

            for(let i=0; i<s.length; i++){
                key[s.charCodeAt(i)-'a'.charCodeAt(0)]++
            }

            if(!res[key]){
                res[key] = []
            }

            res[key].push(s)
        }
        return Object.values(res);
    }
}