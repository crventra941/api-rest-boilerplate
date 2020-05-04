// INYECCION DE DEPENDENCIAS
const { createContainer, asClass, asValue, asFunction } = require('awilix');

//CONFIG
const config = require('../config');
const app = require('.')

//SERVICES
const { HomeService } = require('../services');
const container = createContainer();

// CONTROLLERS
const { HomeController } = require('../controllers');

//ROUTES
const { HomeRoutes } = require('../routes/index.routes');
const Routes = require('../routes');

//MODELS
const { User, Comment, Idea } = require('../models');

container.register({
    app: asClass(app).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(config)
}).register({
    HomeService: asClass(HomeService).singleton()
}).register({
    HomeController: asClass(HomeController.bind(HomeController)).singleton()
}).register({
    HomeRoutes: asFunction(HomeRoutes).singleton()
}).register({
    User: asValue(User),
    Idea: asValue(Idea),
    Comment: asValue(Comment)
})

module.exports = container;