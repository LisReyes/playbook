export default class Explorer{
   constructor(name,username,mission){
	this.name = name
	this.username = username
	this.mission = mission
   }
   
   getNameAndUser(){
	return `Explorer${this.name},username: ${this.username}`
   }
}
