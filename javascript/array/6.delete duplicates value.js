//How are duplicates removed from a giv
function main(arr) {
    arr = [...new Set(arr.sort())]
    console.log(arr)
}

main([1,2,4,5,1,4,1,3]) // [ 1, 2, 3, 4, 5 ]