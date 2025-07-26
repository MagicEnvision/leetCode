var isValid = function(s) {
    checkParentheses(s)
};

let checkParentheses = (x) => {
    for(let i = 0; i < x.length; i++){
        if(x[i] == '{'){
            //check if the next index is closing if not then return false
            if(x[i + 1] !== '}')return false
            return true
        }
        if(x[i] == '['){
            if(x[i + 1] !== ']')return false
            return true
            
        }
        if(x[i] == '('){
            if(x[i + 1] !== ')')return false
            return true
            
        }
    }
}

let x = '()[]{}'

isValid(x)