// Array DEclaration
const marvel_Heros = ["Thor", "SpiderMan", "IronMan"]
const dc_Heros = ["Superman", "Flash", "Batman"]

// Not good method to merge the 1 array to another array
// marvel_Heros.push(dc_Heros)
// console.log(marvel_Heros[1][2]);

// You can concatinate the two Array (May be Good Method)
const AllHeros = marvel_Heros.concat(dc_Heros)
// console.log(AllHeros);
// console.log(`In String Fromat : ${AllHeros.join()}`);

// New method to combine the indivisual array 
const allNewHeros = [...marvel_Heros, ...dc_Heros]      //=>Best Method to Combine the array 
// console.log(allNewHeros);

// Flat array method => Display the array into one single array
const flatArrayMethod = [1, 2, 3, [8, 9, 6,], 7, [5, 6, 9, [7, 89,25, 36]]]
// Applying the Array method
const real_array_method = flatArrayMethod.flat(Infinity)
// console.log(real_array_method);

// isArray Method
console.log(Array.isArray("Ketan"));
// From method => to convert object/value into array
console.log(Array.from("KetanKhot"));     //=> Is array or Not
console.log(Array.from("Ketan")[3]);        //=> [3] Getting the element of that index

// Now Different value you can add into the array Ex=> Var, Array
let a1 = 100,  a2 = 200, a3 = 300
console.log(Array.of(a1, a2, a3));

// End of the Array_02