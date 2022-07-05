import { Router } from "express";
import authRouter from "./authRouter.js";
import financialRouter from "./financialRouter.js";

const Router = Router()

Router.use(authRouter)
Router.use(financialRouter)

export default Router