// How do you check if two strings are anagrams of each other?

function main(str1, str2) {
    str1=str1.split('').sort().join('')
    str2=str2.split('').sort().join('')
    if (str1.length == str2.length){
        for (let i=0; i<= str1.length; i++) {
            if (str1[i] !== str2[i]){
                break
            }
            else {
                continue
            }
        }
        console.log('Two strings are anagrams of each other')
    }
    else {
        console.log('Two strings are not anagrams of each other')
    }
}

main('integral','triangle')