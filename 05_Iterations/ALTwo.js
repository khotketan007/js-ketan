// Apply loop on Object
const myObject = {
    js : 'JavaScript',
    py : 'Python',
    cpp : 'C++'
}

// To iterate the object you can apply the forIn Loop
for (const key in myObject) {
    // console.log(`${key} : ${myObject[key]}`);
}

const programming = ["js", "ruby", "java"]
for (const key in programming) {
    console.log(`Key : ${key} and Value : ${programming[key]}`);
}