//Example 6: Getters to access object attributes

class Ajolonauta{
  constructor (name,age,stack){
   this.name = name
   this.age = age 
   this.stack = stack
   this.exercises_completed = 0
   this.exercises_all = 99	
}

//We can access the attributes of this class

get getExercisesCompleted(){
  return this.exercises_all
}
}
console.log ("Example 6: Getters to access object attributes")
const woopa = new Ajolonauta ("LisReyes",1,[])
console.log(woopa.getExercisesCompleted)
