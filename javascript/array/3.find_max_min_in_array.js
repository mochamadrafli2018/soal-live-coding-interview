function main(arr) {
    arr = arr.sort()

    var max = Math.max(...arr)
    var min = Math.min(...arr)
    console.log(min, max)
}

main([1,2,5,1,3,13,8])