const logger = require ('./logger')

//ya se puede usar directamente el objeto instanciado en el modulo logger
logger.log('This is an informational message')

/*
 * Tambien puedes instanciar uno nuevo de esta menra:
   const customLogger = new logger.constructor('CUSTOM')
   customLogger.log('This is an informational message')
*/
