// How is an integer array sorted in place using the quicksort algorithm?

function bubble(arr) {
    for (var i = 0; i<arr.length; i++) {
        for (var j = 0; j<arr.length - i; j++) {
            if (arr[j] > arr[j+1]) {
                // swap
                var temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

sorted = bubble([1,9,2,3,7,6,4,5,5,1]);

console.log(sorted);