import Viajero from './viajero.js'

/*Este es un ejemplo de como modularizar clases y usarlas mediante modulos*/

const viajero1 = new Viajero("Lis","LaunchX","Node JS","Abril 2022")
console.log(viajero1)
console.log(viajero1.getNameAndUser())//metodo de la clase padre
console.log(viajero1.getGeneralInfo())
