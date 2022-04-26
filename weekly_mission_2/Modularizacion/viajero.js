import Explorer from './explorer.js'

export default class Viajero extends Explorer{
    constructor(name,username,mission,cycle){
        super(name,username,mission,cycle)
        this.cycle = cycle
    }

getGeneralInfo(){
    let nameAndUsername = this.getGeneralInfo()
    return `${nameAndUsername}, Ciclo ${this.cycle}`
}
}