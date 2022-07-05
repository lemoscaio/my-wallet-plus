import { Router } from "express"
import authRouter from "./authRouter.js"
import financialRouter from "./financialRouter.js"

export const mainRouter = Router()

mainRouter.use(authRouter)
mainRouter.use(financialRouter)
