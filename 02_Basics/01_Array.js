//Array
//Array is Resizble
//Array is not Associative
//Array is Zero-Base Indexed

//Array Declaration
//Array declaration Method 1 
const myArray = [1, 2 ,3, 4, 5, "Hello"]
// console.log(myArray[5]);  //Accessing the Element 

//Array declaration Method 2 
const newArray = new Array(25, 98, 68, "Ketan")
// console.log(newArray);

//Array Methods
// console.log(newArray.length);
//Push Method => Add the element at the last of array
newArray.push(100)
// console.log(newArray);
//Pop Method => Remove the last element from the array (You can't pass the argument to the pop Method)
newArray.pop()
// console.log(newArray);
//Unshift Method => Add the Element at the first of the array
newArray.unshift("Jai shree ram")
// console.log(newArray);
//Shift Method => Remove the first element of the array
newArray.shift()
// console.log(newArray);
//Include meyhod => to check the value is present or not in array
// console.log(myArray.includes(2));
//indexOf Method => to return the index of that element
// console.log(myArray.includes(5));

//join operation
//It return the array in string format and Bind together
const joinArray = newArray.join()
console.log(newArray);
console.log(`String Fromat Array : ${joinArray}`);