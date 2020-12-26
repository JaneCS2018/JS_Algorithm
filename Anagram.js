//Check if two strings have the same letters
function Anagram(str1, str2){
    if (str1.length!=str2.length){
        return false
    }
    let res = {}
    for (i=0; i<str1.length; i++){
        let letter = str1[i]
        if (res[letter]>0){
            ++res[letter]
        }else{
            res[letter] =1
        }
    }

    for (i=0; i<str2.length; i++){
        let letter = str2[i]
        if (!res[letter]) {
            return false
        }else{
            res[letter]-=1
        }
    }
    return true  // Put it at the end
}

console.log(Anagram(34, 14))
















