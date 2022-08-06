// How do you print duplicate characters from a string?

function main(str) {
    // delete space in string
    str = str.split(' ') // [ 'aku', 'anak', 'anda!' ]
    str = str.join('') // akuanakanda!
    var arr = str.split('') // [ 'a', 'k', 'u', 'a', 'n', 'a', 'k', 'a', 'n', 'd', 'a', '!' ]

    var duplicates = arr.filter((val,i, self) => {
        return self.indexOf(val)!== self.lastIndexOf(val)
    })
    // [ 'a', 'k', ' ', 'a', 'n', 'a', 'k', 'a', 'n', 'a' ]
	
	duplicates = [...new Set(duplicates)] // [ 'a', 'k', 'n' ]
	
	console.log(`Karakter yang sama pada string adalah: ${duplicates.join(',')}`)

}

main('aku anak anda!')