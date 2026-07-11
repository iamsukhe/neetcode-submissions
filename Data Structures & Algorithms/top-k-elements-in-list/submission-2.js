class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

        const numsCount = {}

        for(let val of nums){
            if(numsCount[val]){
                numsCount[val]++
            }else{
                numsCount[val] = 1
            }
        }

        console.log(numsCount)

        let ans = []

        for(let i=1; i<=k; i++){
            let key = null
            let count = -1
            for (const property in numsCount) {
                if(count < numsCount[property]){
                    key = property
                    count = numsCount[property]
                }
            }

            ans.push(key)
            delete numsCount[key] 
        }

        return ans


    }
}
