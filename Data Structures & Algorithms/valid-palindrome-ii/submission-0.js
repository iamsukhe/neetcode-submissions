class Solution {

    isAlphanumeric(char) {
        return (
            (char >= 'a' && char <= 'z') ||
            (char >= 'A' && char <= 'Z') ||
            (char >= '0' && char <= '9')
        );
    }

    isPalindrome(s, start, end) {
        let str = s.toLowerCase() 
  
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
    
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
        let N = s.length;

        let start = 0;
        let end = N-1;

        while(start<=end){


            if(s[start]==s[end]){
                start++;
                end--;
            }else{

                let partOne = this.isPalindrome(s,start, end-1); // last char remove
                let partTwo = this.isPalindrome(s,start+1, end); // first char remove


                return partOne || partTwo;
            }
        }

        return true;

    }
}
