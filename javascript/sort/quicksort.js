// How is an integer array sorted in place using the quicksort algorithm?

function quicksort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    var pivot = arr[0]
    var left = [];
    var right = [];
    
    for (var i=1; i<arr.length; i++) {
        arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
    }
    return quicksort(left).concat(pivot, quicksort(right));
};

var unsorted = [23, 45, 16, 16, 37, 3, 99, 22];
var sorted = quicksort(unsorted);

console.log(sorted);