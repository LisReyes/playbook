const issue = {
    title: "09 Live 3 Semana 3",
    repositoryNameAssociated: "Playbook",
    status: "open",
    numberOfComments: 20,
    labels: ["Finalizado","Live 3","Semana 3"],
    author: "Lis Reyes",
    dateCreated: "15 days ago",
    lastUpdate: "2 days ago",
    getTitleAndAuthor: function(){
        return `The issue ${this.title} hecho por ${this.author}`
    },
    getGeneralInfo: function(){
        return `This issue ${this.title} has ${this.numberOfComments} comments and it was created ${this.dateCreated} `
    }
}

console.log(issue.getTitleAndAuthor())
console.log(issue.getGeneralInfo())
console.log("Labels: "+issue.labels)