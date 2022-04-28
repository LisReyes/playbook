const biography = {
    username: "Lis Reyes",
    friends: 777,
    picture: "profile.jpg",
    cover_picture: "jackson.jpg",
    followers: 266,
    bio: "Don't be a Drag just be a Queen. 'emoji'",

    getFriends: function(){
        return `This user ${this.username}  has ${this.friends} friends and ${this.followers} followers`
    },

    getPictures: function(){
        return `The user ${this.username} has ${this.cover_picture} cover picture and her biography says ${this.bio}`
    }
}

console.log(biography.getFriends())
console.log(biography.getPictures())