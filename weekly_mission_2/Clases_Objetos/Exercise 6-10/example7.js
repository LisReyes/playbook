//Example 7: Setter for modificate tha attibutes objects

class MissionComander{
  constructor(name,mision){
    this.name = name
    this.mision = mision
    this.students = 0
    this.lives = 0	  
  }

  get getStudent(){
    return this.students	  
  }
  
  get getLives(){
    return this.lives
  }	
   
  set setStudents(students){
    this.students = students
  }	
  
  set setLives(lives){
    this.lives = lives
  }		
}

console.log ("Example 7: Setter for modificate the attributes objects")
const missionCommanderNode = new MissionComander ("Carlo","Node JS")

console.log(missionCommanderNode)
console.log(missionCommanderNode.getStudents)//Zero for default
console.log(missionCommanderNode.getLives)//Zero for default

//Update attributes via setter
missionCommanderNode.setStudents = 100
missionCommanderNode.setLives = 3

console.log(missionCommanderNode.getStudents)//Zero for default
console.log(missionCommanderNode.getLives)
