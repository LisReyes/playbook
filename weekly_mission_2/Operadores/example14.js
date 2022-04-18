//Example 14: Use of some, this method will validate all the elements of the list, and if one meets the indicated validation, it will return true, otherwise it will be false

//elment list
const bools = [true,true,false,true]
//Use Some to see if at least one of the elements is false
const areSomeTrue = bools.some((b) => b === false)

console.log("Example 14: Some of the elements in the array are false: " + areSomeTrue)
