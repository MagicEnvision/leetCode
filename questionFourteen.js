var longestCommonPrefix = function(strs) {
    let prefix = ""
    for(let x = 0; x < strs[0].length; x++){
        const firstLetter = strs[0][x]
        
        for(let i = 1; i < strs.length; i++){
            if(firstLetter !== strs[i][x]){
                return strs[0].slice(0, x);
                
            }
            
        }
    }
    return strs[0]
    
    
}

const strs = ["dog","dacecar","car"]

longestCommonPrefix(strs)