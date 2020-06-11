const { UserRepository } = require('../../../src/repositories');
const mockingoose = require('mockingoose').default;
const { User } = require('../../../src');
const jest = require('jest');

let {
    UserModelMock: { users, user}
} =  require('../../mocks');

describe("User Repository Test", ()=> {
    // Hooks
    beforeEach(()=>{
        mockingoose.resetAll();
        jest.clearAllMocks();
    });

    it("should return a user by id",()=>{
        const _user = {...user};
        delete _user.password;
        
    })



})
