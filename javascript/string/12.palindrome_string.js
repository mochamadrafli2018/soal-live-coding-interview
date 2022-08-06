// How do you check if a given string is a palindrome? 

function main(str) {
    str_split = str.split('')
    str_reverse = str_split.reverse()
    str_reverse = str_reverse.join('')
    if (str == str_reverse) {
        console.log('String is polindrome')
    }
    else {
        console.log('String is not polindrome')
    }
}

main('TACOCAT') // String is polindrome


function main(str) {
    str = str.split('')
    console.log(str)
    str_reverse = str.reverse()
    console.log(str)
    str_reverse = str.join('')
	return str
}

console.log(main('Aku anak anda!'))
/*[ 'A', 'k', 'u', ' ', 'a', 'n', 'a', 'k', ' ', 'a', 'n', 'd', 'a', '!' ]
[ '!', 'a', 'd', 'n', 'a', ' ', 'k', 'a', 'n', 'a', ' ', 'u', 'k', 'A' ]
!adna kana ukA */