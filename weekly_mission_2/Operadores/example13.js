//Example 13: Use of findIndex, this method returns the position of the first element that meets the validation that you indicate

const names13 = ['Explorer 1','Explorer 2','Explorer 3']
const result = names13.findIndex((name) => name.lenght > 7)

console.log("Example 13: First elemento whose word is greater than 7 is in position: "+ result)
