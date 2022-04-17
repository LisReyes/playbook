//example 4: Object with methods

const pet = {
  name: "Jack",
  //this is a Function that is saved as a property
  sayHello: function(){ 
     console.log(`${this.name} te saluda en español!`)
  }
}

console.log("Example 4: Object with methods")
pet.sayHello()
