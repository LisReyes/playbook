const user = {
    user: "LisCrunk",
    username: "Lis",
    bio: "Con todo menos miedo 'emoji(Corazon)'",
    dateCreated: "June of 2016",
    followers: 10,
    following: 135,
    tweets: 149,
    media: 15,
    likes: 2710,
    photo: "lis.jpg",

    getGeneralInfo: function(){
        return `${this.username} has ${this.followers} followers and ${this.following} following`
    },

    getMediaAndLikes: function(){
        return `${this.username} has ${this.likes} likes and ${this.tweets} tweets`
    }
}

console.log(user.getGeneralInfo())
console.log(user.getMediaAndLikes())