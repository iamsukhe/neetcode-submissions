class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    isAlphanumeric(char) {
        return (
            (char >= 'a' && char <= 'z') ||
            (char >= 'A' && char <= 'Z') ||
            (char >= '0' && char <= '9')
        );
    }

    isPalindrome(s) {
        let str = s.toLowerCase()

        let start = 0
        let end = str.length-1

        console.log(str)
  
        while(start < end){

            while (start < end && !this.isAlphanumeric(str[start])) {
                start++;
            }
            while (end > start && !this.isAlphanumeric(str[end])) {
                end--;
            } 

            if(str[start] !== str[end]){
                return false
            }

            start++
            end--
        }

        return true
    }
}
