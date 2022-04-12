class Logger{
	constructor(name){
		//this es ua variable para referenciar el valor del cotexto local de esta clase
	 	this.name = name //A estas variables se les conoce como atributos
	}
	//metodo
	//this.name es la variable que se guarda e el contexto local
	//message es una variable que se le pasa al ejecutar ese método
	info (message){
		console.log(`[Objeto con nombre: ${this.name}] info: ${message}`)
	}

	//método
	verbose(message){
		console.log(`Objeto con nombre: ${this.name}] verbose: ${message}`)
	}
}

//esta clase se exporta ene ste módulo
module.exports = Logger

