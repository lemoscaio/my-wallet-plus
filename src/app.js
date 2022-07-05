import cors from "cors"
import express from "express"
import "express-async-errors"

const app = express()
app.use(cors())
app.use(express.json())
app.use(Router)

export default app
