const { UserRepository } = require('../../../src/repositories');
const mockingoose = require('mockingoose').default;
const { User } = require('../../../src/models');

let {
    UserModelMock: { users, user }
} = require('../../mocks');

describe("User", () => {
    describe('Testing repository', () => {

        // Hooks & Suit de testing para el metodo Get
        beforeEach(() => {
            mockingoose.resetAll();
            jest.clearAllMocks();
        });

        it("should return an user by id", async () => {
            const _user = { ...user };
            delete _user.password;
            mockingoose(User).toReturn(user, "findOne");

            const _userRepository = new UserRepository({ User });
            const expected = await _userRepository.get(_user._id);

            expect(JSON.parse(JSON.stringify(expected))).toMatchObject(_user);
        });

        it("should return an user by username", async () => {
            const _user = { ...user };
            delete _user.password;
            mockingoose(User).toReturn(user, "findOne");

            const _userRepository = new UserRepository({ User });
            const expected = await _userRepository.getUserByUserName(_user.username);

            expect(JSON.parse(JSON.stringify(expected))).toMatchObject(_user);
        });

        it("should return all users", async () => {
            const _user = { ...user };
            delete _user.password;
            mockingoose(User).toReturn(user, "find");

            const _userRepository = new UserRepository({ User });
            const expected = await _userRepository.getAll();

            expect(JSON.parse(JSON.stringify(expected))).toMatchObject(_user);
        });

        it("should update an user by id", async () => {
            const _user = { ...user };
            delete _user.password;
            mockingoose(User).toReturn(user, "findOneAndUpdate");

            const _userRepository = new UserRepository({ User });
            const expected = await _userRepository.update(_user._id,{
                name: "jorge"
            });

            expect(JSON.parse(JSON.stringify(expected))).toMatchObject(_user);
        });

        it("should delete an user by id", async () => {
            const _user = { ...user };
            delete _user.password;
            mockingoose(User).toReturn(user, "findOneAndDelete");

            const _userRepository = new UserRepository({ User });
            const expected = await _userRepository.delete(_user._id);

            expect(JSON.parse(JSON.stringify(expected))).toEqual(true)
        });
    })

})
