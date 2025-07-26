let x = 9998

// var isPalindrome = function(x) {

//     // turn x into string and split each character into a index in an array
//     let stringArr = parseInt(x.toString().split('').reverse().join(''))

//     console.log('String: ', stringArr, '\n x: ', x)

//     if(x == stringArr){
//         return(true)
//     }
//     else{
//         console.log(false)
//     }
// };

var isPalindrome2 = function(x) {
    // Negative numbers or numbers ending in 0 (but not 0 itself) can't be palindrome
    if (x < 0 || (x % 10 === 0 && x !== 0)) return false ;

    let reversed = 0;

    while (x > reversed) {
        reversed = reversed * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    // For even digit numbers, x === reversed
    // For odd digit numbers, x === Math.floor(reversed / 10)
    return x === reversed || x === Math.floor(reversed / 10);

};

isPalindrome2(x)