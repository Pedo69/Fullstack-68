function isAnagram(str1, str2) {
    let s1 = str1.replace(/\s/g,'').split('').sort((a,b)=> a.localeCompare(b)).join('')
    let s2 = str2.replace(/\s/g,'').split('').sort((a,b)=> a.localeCompare(b)).join('')
    if (s1 === s2) {
        return true
    }
    else {
        return false
    }
}

console.log(isAnagram("listen", "silent"))
console.log(isAnagram("Dormitory", "Dirty room"))
console.log(isAnagram("hello", "world"))