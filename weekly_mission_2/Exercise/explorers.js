const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
]

/*Ejercicio 1*/
console.log("Ejercicio: Imprime el nomber de cada lista")
explorers.forEach(explorers => console.log("Nombre: "+explorers.name))

/*Ejercicio 2 Imprimer el stack de cada explorer*/
explorers.forEach(explorers => console.log("Stack: "+explorers.stack))

/*Ejercicio 3 Crea una nueva lista con las listas de stack de cada explorer usando MAP*/
const EStack = explorers.map(explorer => explorer.stack)
console.log(EStack)

/* Ejercicio 4 Obten una lista de explorer que tengan en su stack "js", usa filter (para validar un elemento)*/
const JSElement = explorers.filter((explorer) => explorer.stack.includes('js'))
console.log(JSElement)

/* Ejercicio 5 Busca el primer explorer que sea de la CDMX usando FIND**/
const Ecdmx = explorers.find(explorer => explorer.city == 'CDMX')
console.log(Ecdmx)

/*Ejercicio 6 Obten la suma de todos los exercises_completed USA REDUCE*/
const SumEx = explorers.reduce((total,explorer) => total + explorer.exercises_completed,0)
console.log(SumEx)

/* Ejercicio 7 Obten la valdiacion si al menos uno de los explorers usa SOME*/
const Usome = explorers.some(explorer => explorer["missions"]["frontend"].exercisesFinished === true)
console.log(Usome)

/* Ejercicio 8 Obten la validacion si todos los epxlorers tiene la propeidad isFinished uSA every*/
const Fevery= explorers.every(explorer => explorer["missions"]["onboarding"].isFinished === true)
console.log(Fevery)