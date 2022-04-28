const trending_topic = {
    nameCategory : "Football Soccer",
    position: 15,
    topic: "Madrid",
    numberOfTweets: 332000,

    getInfo: function(){
        return `This ${this.topic} is in the ${this.position} position in the ${this.nameCategory} category and has ${this.numberOfTweets} retweets`
    }
}
console.log(trending_topic.getInfo())