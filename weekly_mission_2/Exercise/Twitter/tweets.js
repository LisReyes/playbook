const tweets = {
    userName: "RuPaul's Drag Race",
    user: "@RuPaulsDragRace",
    bio: "Welcome to the OFFICIAL account of @RuPaul's #DragRace! 🌈  Everybody say love! 💗 BLACK LIVES MATTER",
    position: "FRIDAYS at 8/7c on VH1! ",
    url_view: "paramountplus.com/shows/rupauls-…",
    dateCreated: "September of 2009",
    followers: 1.2,
    following: 2865,
    tweets: 67800,

    getGeneralInfo: function(){
        return `This ${this.user} has the ${this.userName} user name with the ${this.bio} biography you can see every chapter on ${this.url_view} in the ${this.position} schedule`    
    },

    getTweetInfo: function(){
        return `The username ${this.userName} was ${this.dateCreated} created and has ${this.followers} followers and ${this.following} followings and ${this.tweets} Tweets`
    }
}

console.log(tweets.getGeneralInfo())
console.log(tweets.getTweetInfo())