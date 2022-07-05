import { Router } from "express"
import { insertNewUser, loginUser } from "../controllers/authController.js"

const authRouter = Router()

authRouter.post("/sign-up", insertNewUser)
authRouter.post("/sign-in", loginUser)

export default authRouter
