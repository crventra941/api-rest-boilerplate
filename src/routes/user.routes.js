const { Router } = require("express");
const { AuthMiddleware, ParseIntMiddleware, CacheMiddleware: cache } = require("../middlewares");
const { CACHE_TIME } = require('../helpers')

module.exports = function({ UserController }){
    const router = Router();

    router.get('/',[ AuthMiddleware, ParseIntMiddleware],UserController.getAll);
    router.get('/:userId',AuthMiddleware, UserController.get);
    router.patch('/:userId',AuthMiddleware, UserController.update);
    router.delete('/:userId',AuthMiddleware, UserController.delete);

    return router;
}
