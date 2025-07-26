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
    while(i < romanArr.length ){
         console.log("x: ", i)

        if(romanArr[i] == 'I' && romanArr[++i] == 'V'){
            numberArr[--i] = 4
            ++i
        }
        
        // if(romanArr[i] == 'I' && romanArr[++i] == 'X'){
        //     numberArr[--i] = 9
        // }
        // if(romanArr[i] == 'X' && romanArr[++i] == 'L'){
        //     numberArr[--i] = 40
        // }
        // if(romanArr[i] == 'X' && romanArr[++i] == 'C'){
        //     numberArr[--i] = 90
        // }
        // if(romanArr[i] == 'X' && romanArr[++i] == 'D'){
        //     numberArr[--i] = 400
        // }
        // if(romanArr[i] == 'X' && romanArr[++i] == 'M'){
        //     numberArr[--i] = 900
        // }
        else{
        numberArr[i] = returnValue(romanArr[i])
        }
        i++     
        console.log('x2: ', i)
        
        console.log(numberArr)
          
    }
    console.log(parseInt(numberArr.join('')))
    return parseInt(numberArr.join(''))

      

        // numberArr[i] = romanArr[i])
        // // console.log(numberArr)
        


};

let returnValue = (x) => {
    if(x === 'I') return 1
    if(x === 'V') return 5
    if(x === 'X') return 10
    if(x === 'L') return 50
    if(x === 'C') return 100
    if(x === 'D') return 500
    if(x === 'M') return 1000
    
}

let s = 'IVX'
romanToInt(s)