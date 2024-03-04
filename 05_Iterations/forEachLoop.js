// For Each Loop
// Mostly for Ecah loop is Applied on the Array and Widly Used
// Array Declaration
let langauge = ["Java", "JabaScrit", "Cpp", "DotNet"]
// For Ecah Loop
// Simple function
langauge.forEach( function (ArrayValues) {
    // console.log(ArrayValues);
} )

// Now we Can use the Arrow Function
langauge.forEach( (item) => {
    // console.log(item);
} )

// Another Way to Print the Value
// Function Declaration
function printMe(CodingLangauge) {
    // console.log(CodingLangauge);
}
langauge.forEach(printMe)

// FroEach loop can have More methods eg => index arr
langauge.forEach( (i, index, arr) => {
    // console.log(i, " : ", index," : ", arr);
} )

// Now Looking for the Interestng thing 
// Array Contain One or more Objects
const myCoding = [
    {
        langaugeName : "Javascript",
        langaugeFile : "js"
    },
    {
        langaugeName : "Java",
        langaugeFile : "java"
    },
    {
        langaugeName : "Python",
        langaugeFile : "py"
    },
]
// Applying for Each Loop
myCoding.forEach( (items) => {
    console.log(`Langauge ${items.langaugeName} and It's Extension ${items.langaugeFile}`)
} )