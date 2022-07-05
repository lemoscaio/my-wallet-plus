import { Router } from "express"
import {
  insertNewFinancialEvent,
  getFinancialEventByUserId,
  getSummedFinancialEventByUserId,
} from "../controllers/financialController.js"
import { validateToken } from "../middlewares/validateToken.js"

const financialRouter = Router()

financialRouter.post(
  "/financial-events",
  validateToken,
  insertNewFinancialEvent,
)
financialRouter.get(
  "/financial-events",
  validateToken,
  getFinancialEventByUserId,
)
financialRouter.get(
  "/financial-events/sum",
  validateToken,
  getSummedFinancialEventByUserId,
)

export default financialRouter
