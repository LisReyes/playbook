//Example 8: Static methods help us write methods in a class that we can use without instantiating any objects

class Toolbox{
   static getMostUsefulTools(){
     return ["Command line", "git","Text Editor"]
   }
}

console.log("Example 8: Static Methods")
//We can call the static method directly with the class name

console.log(Toolbox.getMostUsefulTools())
