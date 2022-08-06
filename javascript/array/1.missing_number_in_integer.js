function main(arr) {
    arr = arr.sort()
    var max = Math.max(...arr)
    var min = Math.min(...arr)
    
    var missing = []
	
    for (var i=min; i<= max; i++) {
        // check value of index i empty or not
        if (arr.indexOf(i) === -1) {
            missing.push(i)
        }
    }
    
    console.log('Missing integer : ', missing.join(','))

}

main([1,2,5,6,7,8,10])