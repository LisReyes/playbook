//Example 3: Instance an objet with atributs

class Student{
  constructor (name, age, subjects){
     this.name = name
     this.age = age  
     this.subjects = subjects
  }
}

const LisStudent = new Student("Lisset",25,["Java","HTML","CSS","Node Js"])
console.log("Example 3: Instance an object with atributs")
console.log(LisStudent)
