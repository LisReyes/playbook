const post = {
    username: "El guarroRomantico",
    date: "May 2021",
    description: "Estoy juera",
    media: "RenuncioASerAdulto.jpg",
    reactions: 97000,
    comments: 36000,
    shares: 100000,


    getGeneralInfo: function(){
        return `This user ${this.username} shared a post ${this.description}`
    },

    getUserPost: function(){
        return `The post has ${this.reactions} with ${this.comments} comments and ${this.shares} shares`
    }
}

console.log(post.getGeneralInfo())
console.log(post.getUserPost())