function main(array, num) {
    pair = [];
    for (let i=0; i<=array.length; i++) {
        for (let j=0; j<=array.length; j++) {
            if (i+j === num) {
                pair.push(i,j)
            }
        }
    }

    // menampilkan output
    console.log('Pair of integer : ')
    for (let i=0; i<=pair.length; i++) {
        console.log(pair[i],',',pair[i+1])
        i = i+2;
    }
}

main([1,2,3,4,5,6,7,8,9],10)