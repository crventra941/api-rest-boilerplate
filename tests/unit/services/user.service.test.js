const { UserService } = require("../../../src/services");
const { UserRepository } = require('../../mocks');

const { UserModelMock: {
  user, users }
} = require('../../mocks');

describe('Testing services', () => {
  // Hkc
  beforeEach(() => {
    jest.clearAllMocks()
  });

  it('Shoud fin a user by id', async () => {
    const _userRepository = UserRepository;
    _userRepository.get.mockReturnValue(user);

    const _userService = new UserService({ UserRepository });
    const expected = await _userService.get(user._id);

    expect(expected).toMatchObject(user);

  });

  it('Shoud find a user by username', async () => {
    const _userRepository = UserRepository;
    _userRepository.getUserByUserName.mockReturnValue(user);

    const _userService = new UserService({ UserRepository });
    const expected = await _userService.getUserByUserName(user.username);
    expect(expected).toMatchObject(user);
  });

  it('Should get all users', async () => {
    const _userRepository = UserRepository;
    _userRepository.getAll.mockReturnValue(user);

    const _userService = new UserService({ UserRepository });
    const expected = await _userService.getAll();
    expect(expected).toMatchObject(user);
  });


  it('Should update an user by id', async () => {
    const _userRepository = UserRepository;
    _userRepository.update.mockReturnValue(user);

    const _userService = new UserService({ UserRepository });
    const expected = await _userService.update(user._id, {
      name: 'Christian'
    });

    expect(expected).toMatchObject(user);
  });


  it('Should delete an user by id', async () => {
    const _userRepository = UserRepository;
    _userRepository.delete.mockReturnValue(true);

    const _userService = new UserService({ UserRepository });
    const expected = await _userService.delete(user._id);

    expect(expected).toEqual(true);
  });
});
