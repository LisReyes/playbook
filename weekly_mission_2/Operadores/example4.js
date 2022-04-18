/*Example 4: Using map to iterate through the elements of a list and create a new list
 * Arrow function and explicit return
 * const modifiedArray = arr.map((element, index) => element);
 */
const numbers4 = [1,2,3,4,5]
const numbersSquare = numbers4.map(function(num){return num * num})
//also you can write the function with fat arrow
// const numbersSquare = numbers4.map((num) => return num*num)
console.log("Example 4: Printing the list with elment to square")
console.log(numbersSquare)
