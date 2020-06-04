let _authService = null;

class AuthController {
    constructor({ AuthService }) {
        _authService = AuthService;
    }

    async signUp(req, res) {
        const { body } = req;

        const createdUser = await _authService.signUp(body);
        return await res.status(201).send(createdUser);
    }

    async signIn(req, res) {
        const {  body } = req;
        const creds = await _authService.signIn(body);
        return await res.send(creds);
    }
}

module.exports = AuthController;