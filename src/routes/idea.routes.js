const { Router } = require("express");
const { AuthMiddleware, ParseIntMiddleware } = require("../middlewares");

module.exports = function({ IdeaController }){
    const router = Router();

    router.get('/',[ AuthMiddleware, ParseIntMiddleware ], IdeaController.getAll);
    router.get('/:ideaId', AuthMiddleware ,IdeaController.get);
    router.get('/:userId/all', AuthMiddleware ,IdeaController.getUserIdeas);
    router.post('/', IdeaController.create);
    router.patch('/:ideaId', IdeaController.update);
    router.delete('/:ideaId', IdeaController.delete);
    router.post('/:ideaId/upvote', IdeaController.upvoteIdea);
    router.post('/:ideaId/downvote', IdeaController.downvoteIdea);

    return router;
}
