class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let n = height.length
        let leftHeight = new Array(n)
        let rightHeight =  new Array(n)

        let tappedWater = []

        for(let i=0; i<n; i++){
            let element = i==0 ? height[i] : (leftHeight[i-1] > height[i] ? leftHeight[i-1]  : height[i] )
            leftHeight[i] = element
        }
        for(let i=n-1; i>=0; i--){
            let element = i==n ? height[i] : (rightHeight[i+1] > height[i] ? rightHeight[i+1]  : height[i] )
            rightHeight[i] = element
        }


        for(let i=0; i<n; i++){
            tappedWater.push(Math.min(leftHeight[i], rightHeight[i]) - height[i])
        }   


        let ans = 0

        for(let val of tappedWater){
            ans+=val
        }


        return ans
        
    }
}
