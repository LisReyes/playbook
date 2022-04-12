const Logger = require ('./logger') //Invocamos el modulo que contiene la clase

//creación de un objeto
const dbLogger = new Logger('DB')//Creamos un objeto nuevo, esto llama por default el constructor de la clase
//invocacion del metodo
dbLogger.info('This is an informatical message')

//creacion de otro objeto
const accessLogger = new Logger('ACCESS')
accessLogger.verbose('This is a verbose message')
