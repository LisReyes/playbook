/*Esta es mi prueba de unidad*/
const Spiderman = require('./../app/spiderman')
describe("Unit tests for Spiderman class", () => {
    test('1) Create a spiderman object',() =>{
        //Aqui escribimos el codigo que queremos usar tal cual
        //Quiero poder instanciar un objeto Spiderman con esta información
        const andrewGarfiel = new Spiderman("Spiderman Sony",31,"Andrew Garfield",2,"Sony");

        //Validamos que este codigo funcione de la forma esperada
        expect(andrewGarfiel.name).toBe("Spiderman Sony")
        expect(andrewGarfiel.age).toBe(31)
        expect(andrewGarfiel.actor).toBe("Andrew Garfield")
        expect(andrewGarfiel.movies).toBe(2)
        expect(andrewGarfiel.studio).toBe("Sony")
    });
    test('2) Usando el metodo getInfo()', () =>{
        const Tom = new Spiderman("Spiderman Marve", 25, "Tom Holland",5,"Marvel");
        expect(Tom.getInfo()).toBe("Hey, I'm Tom Holland from Marvel");
    });
})