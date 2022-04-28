const pullrequest = {
    title: "Agregando experiencia a mi blog",
    branchName: "main",
    author: "Lis Reyes",
    dateCreated: "18 days ago",
    status: "open",
    repositoryNameAssociated: "LaunchX - Node Js",
    getStatus: function (){
        return `The pullrequest has the status: ${this.status}`
    },
    getTitleAndAuthor: function (){
        return `This ${this.title} was created by ${this.author} since ${this.dateCreated}`
    }
}
console.log(pullrequest.getStatus())
console.log(pullrequest.getTitleAndAuthor())