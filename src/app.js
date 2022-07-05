import cors from "cors"
import express from "express"
import "express-async-errors"
import { mainRouter } from "../routers/routes.js"

const app = express()
app.use(cors())
app.use(express.json())
app.use(mainRouter)

export default app
