//Example 10: Overrindin methods

class Explorer{
  constructor(name,username,mission){
    this.name = name
    this.username = username
    this.mission = mission	  
  }
  
  getNameAndUsername(){
    return `Explorer ${this.name}, username ${this.username}`
  }	
}

class Traveler extends Explorer{
  constructor (name,username,mission,cycle){
     super(name,username,mission)
     this.cycle = cycle	  
  }
  
   getGeneralInfo(){
    let nameAndUsername = this.getNameAndUsername()//call to father class
    return `${nameAndUsername}, Ciclo ${this.cycle}`
  }	
}

const traveler1 = new Traveler("Lisset","LaunchX","Node JS", "April 2022")
console.log("Example 10: Overrinding methods")
console.log(traveler1)
console.log(traveler1.getNameAndUsername()) //Father's method
console.log(traveler1.getGeneralInfo())//Son's method
