var myArray = ['one', 'two', '', 'three'];
var myIndex = myArray.indexOf('');
if (myIndex !== -1) {
    myArray.splice(myIndex, 1);
}
console.log(myArray)