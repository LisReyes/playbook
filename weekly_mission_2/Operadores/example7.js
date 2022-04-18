//Example 7: Usinf filter to filter a element list
const countries7 = ['Finland', 'Denmark','Sweden','Norway','Iceland']
const countriesContainingLand = countries7.filter((country) => //this is a function
	country.includes('land') //indication to only filter elements that include "land"
)
console.log("Example 7: Using filter to filter a element list")
console.log(countriesContainingLand)

const countriesEndsByia = countries7.filter((country) => country.endsWith('ia'))

console.log("Example 7b: Countries ending in i")
console.log(countriesEndsByia)
