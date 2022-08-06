function reverse(array) {
    var output = [];
    while (array.length) {
      output.push(array.pop());
      console.log(array.length);
    }  
    return output;
}
  
console.log(reverse([1, 2, 3, 4, 5, 6, 7]));