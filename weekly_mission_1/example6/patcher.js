/*Ten en cuenta:
 *    - require ('./logger') te dara el objeto creado
 *    - require ('./logger').Logger te regresara la clase
 *Ene ste caso estamos agregando una funcion ams al objeto instanciado, no a la clase
 **/

require ('./logger').customMessage = function (){
	console.log('This is a new functionality')
}
