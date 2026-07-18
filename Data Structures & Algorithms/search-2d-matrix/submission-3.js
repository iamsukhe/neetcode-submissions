class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let rowSize = matrix.length
        let colSize = matrix[0].length

        let s=0
        let e=(colSize * rowSize)-1

        

        while(s<=e){
            let mid = s + Math.floor((e - s) / 2)

            let r = Math.floor(mid/colSize)
            let c = mid%colSize

            if(matrix[r][c] === target) {
                return true
            }

            if(matrix[r][c] > target){
                e=e-1
            }else{
                s=s+1
            }
        }

        return false
    }
}
