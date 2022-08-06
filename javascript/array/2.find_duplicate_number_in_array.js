function main(arr) {
    var diff = arr.filter((x, i, arr) => {
        return arr.indexOf(x) !== arr.lastIndexOf(x)
    })
    console.log(diff) // [1, 3, 1, 3]
    
    diff = [...new Set(diff)]
    console.log('Duplicate integer is: ', diff.join(','))
}

main([1,2,3,4,5,1,6,7,3])

// Duplicate integer is: 1,3