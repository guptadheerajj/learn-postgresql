const { Router } = require("express");
const usersController = require("../controllers/usersController");

const indexRouter = Router();

indexRouter.get("/", usersController.usersListGet);
indexRouter.get("/new", usersController.usersNewGet);
indexRouter.post("/new", usersController.usersNewPost);

module.exports = indexRouter;
