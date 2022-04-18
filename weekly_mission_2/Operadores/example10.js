//example 10: The use of every helps us to validate all the elements of a list, if they all comply with the validation that you indicate, it returns true, otherwise false

const names10 = ['Explorer1','Explorer 2', 'Explorer 3','Explorer 4']
const areAllStr = names10.every((name) => typeof name === 'string') //every
console.log("Example 10: Are all of the name string? : " + areAllStr)
