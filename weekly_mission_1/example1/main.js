let myCar = new Object();
myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1969;

console.log(myCar) //Imprimiendo el objeto

//2. decalraacion de un objeto con variables locales y publicas
const myModule = (() =>{
	//variable de contexto local
	const privateFoo = "Soy un valor privado, solo me uasn dentro de este objeto"
	const privateBar = [1,2,3,4]
	const baz = "Soy un valor que va a ser expuesto"

	// Variable para guardar las varibales locales
	const exported = {
		publicFoo: "Valor public, pueden verme desde donde me llamen",
		publicBar: "Otro valor público",
		publicBaz: baz
	}

	//exposición de variables locales
	return exported
})()

console.log(myModule)
