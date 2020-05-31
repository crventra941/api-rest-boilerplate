// INYECCION DE DEPENDENCIAS
const { createContainer, asClass, asValue, asFunction } = require('awilix');

//CONFIG
const config = require('../config');
const app = require('.')

const container = createContainer();

//SERVICES
const { 
    HomeService,
    UserService,
    CommentService,
    IdeaService } = require('../services');

// CONTROLLERS
const { 
    HomeController,  
    UserController,
    IdeaController,
    CommentController} = require('../controllers');

//ROUTES
const { HomeRoutes, 
        UserRoutes, 
        CommentRoutes, 
        IdeaRoutes } = require('../routes/index.routes');


const Routes = require('../routes');

//MODELS
const { User, Comment, Idea } = require('../models');

//REPOSITORY
const {
    UserRepository,
    IdeaRepository,
    CommentRepository } = require('../repositories');

container.register({
    app: asClass(app).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(config)
}).register({
    HomeService: asClass(HomeService).singleton(),
    UserService: asClass(UserService).singleton(),
    CommentService: asClass(CommentService).singleton(),
    IdeaService: asClass(IdeaService).singleton(),

}).register({
    UserController: asClass(UserController.bind(UserController)).singleton(),
    IdeaController: asClass(IdeaController.bind(IdeaController)).singleton(),
    CommentController: asClass(CommentController.bind(CommentController)).singleton(),
    HomeController: asClass(HomeController.bind(HomeController)).singleton()
}).register({
    HomeRoutes: asFunction(HomeRoutes).singleton(),
    IdeaRoutes: asFunction(IdeaRoutes).singleton(),
    UserRoutes: asFunction(UserRoutes).singleton(),
    CommentRoutes: asFunction(CommentRoutes).singleton(),

}).register({
    User: asValue(User),
    Idea: asValue(Idea),
    Comment: asValue(Comment)
}).register({
    UserRepository: asClass(UserRepository).singleton(),
    IdeaRepository: asClass(IdeaRepository).singleton(),
    CommentRepository: asClass(CommentRepository).singleton()
})

module.exports = container;