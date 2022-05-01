const User = require('./../../app/models/user')

describe ("Unit test for User class",() =>{
    
    test('Create an User object',() =>{
        //Aqui invocas el codigo que vas a usar en tu app
        const user = new User(1,"lisReyes","Lisset","Bio");
        //Aqui validamos los resutlados de ese codigo
        //Esta es una comparacion que va a igualar el valor de la izquierda
        //con el valor de la derecha (El esperado)

        expect(user.id).toBe(1);
        expect(user.username).toBe("lisReyes");
        expect(user.name).toBe("Lisset");
        expect(user.bio).toBe("Bio");
        expect(user.dateCreated).not.toBeUndefined()
        expect(user.lastUpdated).not.toBeUndefined()// Verificacomos que el valor sea undefinido        
    });

    test('Add getters', () =>{
        const user = new User(1,"lisReyes","Lisset","Bio");
        expect(user.getUsername).toBe("lisReyes");
        expect(user.getBio).toBe("Bio");
        expect(user.getDateCreated).not.toBeUndefined()
        expect(user.getLastUpdated).not.toBeUndefined()    
    });

    test ('Add setters', () =>{
        const user = new User(1,'lisReyes','Lisset','Bio')
        user.setUsername = 'Diana'
        expect(user.username).toBe('Diana')

        //Procura verificar si esta escrito la primera con mayuscula 
        user.setBio = 'New Bio'
        expect(user.bio).toBe('New Bio')
    });
})  