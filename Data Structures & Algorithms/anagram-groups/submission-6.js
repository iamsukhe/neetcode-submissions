class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const res = {};
        for (let s of strs) {
            const count = new Array(26).fill(0)

            for(let i=0; i<s.length; i++){
                count[s.charCodeAt(i)-'a'.charCodeAt(0)]++
            }

            const key = count.join(",")

            if(!res[key]){
                res[key] = []
            }

            res[key].push(s)
        }
        return Object.values(res);
    }
}