const UserService = require('../services/UserService')

class UserView {
    static createUser (payload){
        if(!payload)return{
             error: 'payload NO EXISTE'
        }
        if(payload.id === null | payload.username === null | payload.name === null)return{
            error:'necesitan tener un valor válido'
        }
        if(payload.id === undefined | payload.username === undefined | payload.name === undefined)return{
            error:'necesitan tener un valor válido'
        }
        return UserService.create(payload.id,payload.username,payload.name);
    }
    
}
module.exports = UserView