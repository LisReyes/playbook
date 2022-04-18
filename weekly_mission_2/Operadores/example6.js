//Using map to conver all of the names in a Upper Case list

const countries6 = ['Finland','Denmark','Sweden','Norway','Iceland']
const countriesFirstThreeLetters = countries6.map((country) =>
	country.toUpperCase().slice(0,3) //the slice method gets only the marked length of the string
)

console.log("Example 6: Using map to conver all of the names in a Upper case list")
console.log(countriesFirstThreeLetters)
