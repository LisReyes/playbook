//Example 5: Atributs with default values

class PullRequest{
  constructor(repo, title, lines_changed){
     this.repo = repo
     this.title = title
     this.lines_changed
     this.status = "OPEN"
     this.dateCreate = new Date() //This saved the actual date the object was instantiated
  }
  getInfo(){
    return `This PR is in the repo: ${this.repo} (status: ${this.status}) and was created on ${this.dateCreated}`
  }
}

console.log("Example 5: Atributs with default values")
const myPR1 = new PullRequest("Launch X", "Mi primer PR", 100)
console.log(myPR1.getInfo())

//You can instantiate n number of objects of the same class
const myPR2 = new PullRequest("LaunchX", "My second PR",99)
console.log(myPR2.getInfo())
