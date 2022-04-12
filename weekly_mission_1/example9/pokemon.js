class Pokemon{
   constructor (name){ 
     this.name = name
   }

   sayHello(){
      console.log(`Hola, soy ${this.name}`)
   }
   
   sayMessage(){
      console.log(`${this.name} esta diciendo: ${message} que emocion`);
   }
}

module.exports = Pokemon;
