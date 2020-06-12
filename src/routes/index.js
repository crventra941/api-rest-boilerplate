const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
require("express-async-errors");

const { NotFoundMiddleware, ErrorMiddleware } = require('../middlewares');
const swaggerUI = require('swagger-ui-express');
const { SWAGGER_PATH } = require("../config");
const swaggerDocs = require(SWAGGER_PATH);

module.exports = ({
    HomeRoutes,
    UserRoutes,
    CommentRoutes,
    AuthRoutes,
    IdeaRoutes }) => {

    const router = express.Router();
    const apiRoutes = express.Router();

    apiRoutes
        .use(express.json())
        .use(cors())
        .use(helmet())
        .use(compression());

    apiRoutes.use("/home", HomeRoutes);
    apiRoutes.use("/users", UserRoutes);
    apiRoutes.use("/comments", CommentRoutes);
    apiRoutes.use("/ideas", IdeaRoutes);
    apiRoutes.use("/auth", AuthRoutes);


    router.use("/v1/api", apiRoutes);
    router.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs))

    router.use(NotFoundMiddleware);
    router.use(ErrorMiddleware)

    return router;
}
