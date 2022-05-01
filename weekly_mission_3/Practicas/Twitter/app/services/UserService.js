const User = require('./../models/user')

class UserService{
    static create(id,username,name){
        return new User(id,username,name,"Sin bio")
    }

    static getInfo(user){ return Object.values(user)}

    static updateUsername(user,username){
        return user.username = username
    }

    static getAllUsernames(usernames){
        return usernames.map((usern) => usern.getUsername)
    }
}

module.exports = UserService