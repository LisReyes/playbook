//Example 5: Object with methods which receives parameters
const myPet = {
  name: "Woopa",
  sayHellToMyPet: function(yourPet){
     console.log(`${this.name} say's hello to ${yourPet}`)
  }
}
console.log("Example 5: Object with methods which receives parameters")
myPet.sayHelloToMyPet("Jackson")
