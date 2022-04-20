//Example 9: Herency between two classes

class Developer {
  constructor(name,mainLang,stack){
     this.name = name
     this.mainLang = mainLang
     this.stack = stack	  
  }

  get getName(){ return this.name}	
}

console.log("Example 9: Herency between two classes")
const lisDev = new Developer("Lis", "JS",["Java","Kotlin","CSS"])
console.log(lisDev)


class LaunchXStudent extends Developer{}

const lisLaunchDev = new LaunchXStudent("Lisset","JS",["Java","Kotlin","CSS"])
console.log(lisLaunchDev)
console.log(lisLaunchDev.getName) //Usamos el getter de la clase padre

