const user = {
    name: "Lis Reyes",
    place_lived: "Puebla",
    education: "Computer Science",
    email: "lisrey@launchX",
    gender: "Female",
    dateOfBirth: "December 1996",
    age: 25,
    language: "English", 
    relationship: "Single",
    books: ["Trilogy Percy Jackson and the olympus gods","trilogy percy jackson and the greek gods"],
    getGeneralInfor: function () {
        return `This facebook belongs to ${this.name} who lives in ${this.place_lived}`
    },

    getBooks: function(){
        return `${this.name} has read ${this.books}`
    },

    getAge: function(){
        return `${this.name} has ${this.age} years`
    }    
}

console.log(user.getGeneralInfor())
console.log(user.getBooks())
console.log(user.getAge())