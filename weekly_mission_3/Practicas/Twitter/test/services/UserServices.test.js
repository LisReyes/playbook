const UserService = require('./../../app/services/UserService')

describe("Tests for UserService",() =>{
    test("1. Create a new user using the UserService",() =>{
        const user = UserService.create(1,'lisReyes','Lisset');
        expect(user.username).toBe('lisReyes');
        expect(user.name).toBe('Lisset')
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    });

    test("2. Get all user in a list", () =>{
        const user = UserService.create(1,'lisReyes','Lisset')
        const userInfoInList = UserService.getInfo(user)
        expect(userInfoInList[0]).toBe(1)
        expect(userInfoInList[1]).toBe('lisReyes')
        expect(userInfoInList[2]).toBe('Lisset')
        expect(userInfoInList[3]).toBe('Sin bio')
    });

    test("3. Update username",()=>{
        const user = UserService.create(1,'lisReyes','Lisset')
        UserService.updateUsername(user,'Diana')
        expect(user.username).toBe('Diana')
    });

    test("4. Given a list of users give me the list of username", () =>{
        const user1 = UserService.create(1,'lisReyes1','Lisset')
        const user2 = UserService.create(1,'lisReyes2','Lisset')
        const user3 = UserService.create(1,'lisReyes3','Lisset')
        const usernames = UserService.getAllUsernames([user1,user2,user3])
        expect(usernames).toContain('lisReyes1')
        expect(usernames).toContain('lisReyes2')
        expect(usernames).toContain('lisReyes3')
    });
})