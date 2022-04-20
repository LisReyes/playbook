//Example 4: Methods in the objects


class Repository {
  constructor(name, author, language, stars){
    this.name = name
    this.author = author
    this.language = language
    this.stars = stars
  }

  getInfo(){ //this fuction will execute any instantiated object of this class
    return `Repository ${this.name} has ${this.stars} stars`
  }
}

console.log("Example 4: Methods in the objects")
const myR = new Repository("LaunchX", "LisReyes","JS", 100)
console.log(myR.getInfo())

