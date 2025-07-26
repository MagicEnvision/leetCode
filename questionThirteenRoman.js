// For example, 2 is written as II in Roman numeral, just two ones added together. 
// 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// Roman numerals are usually written largest to smallest from left to right. However, 
// the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before 
// the five we subtract it making four. The same principle applies to the number nine, which is written as IX. 
// There are six instances where subtraction is used:

//     I can be placed before V (5) and X (10) to make 4 and 9. 
//     X can be placed before L (50) and C (100) to make 40 and 90. 
//     C can be placed before D (500) and M (1000) to make 400 and 900.

// Given a roman numeral, convert it to an integer.

// Example 1:

// Input: s = "III"
// Output: 3
// Explanation: III = 3.

// Example 2:

// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.

// Example 3:

// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

 

// Constraints:

//     1 <= s.length <= 15
//     s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
//     It is guaranteed that s is a valid roman numeral in the range [1, 3999].



var romanToInt = function(s) {

    //break s into array and split each char
    let romanArr = s.split('')
    let i = 0;
    let numberArr = []
    //     I can be placed before V (5) and X (10) to make 4 and 9. 
//     X can be placed before L (50) and C (100) to make 40 and 90. 
//     C can be placed before D (500) and M (1000) to make 400 and 900.

    while(i < romanArr.length ){
         console.log("x: ", i)
         let j = i + 1;

         if(returnValue(romanArr[i]) != -1){
            numberArr[i] = returnValue(romanArr[i])
            
         }
         //here we check if I is followed by V to return the value 4
         if(romanArr[i] === 'I' && romanArr[j] === 'V'){
            numberArr[i] = 4
            i++
            console.log(numberArr)
         }
         if(romanArr[i] === 'I' && romanArr[j] === 'X'){
            numberArr[i] = 9
            i++
         }
         if(romanArr[i] ===  'X' && romanArr[j] === 'L'){
            numberArr[i] = 40
            i++
         }
         if(romanArr[i] === 'X' && romanArr[j] === 'C'){
            numberArr[i] = 90
            i++
         }
         if(romanArr[i] ===  'C' && romanArr[j] === 'D'){
            numberArr[i] = 400
            i++
         }
         if(romanArr[i] === 'C' && romanArr[j] === 'M'){
            numberArr[i] = 900
            i++
         }
         i++     
    }
    console.log(parseInt(numberArr.join('')))
    return parseInt(numberArr.join(''))

};

let returnValue = (x) => {
    if(x === 'I') return 1
    if(x === 'V') return 5
    if(x === 'X') return 10
    if(x === 'L') return 50
    if(x === 'C') return 100
    if(x === 'D') return 500
    if(x === 'M') return 1000
    return -1
    
}

let s = 'III'
romanToInt(s)