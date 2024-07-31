import express from "express"
import { placeOrder,verifyOrder,userOrders, listOrders, updateStatus, placeOrderCOD, markAsPaid } from "../controllers/orderController.js"
import authMiddleware from "../middleware/auth.js"

const orderRouter = express.Router()

orderRouter.post("/place",authMiddleware,placeOrder)
orderRouter.post("/verify",verifyOrder)
orderRouter.post("/userOrders",authMiddleware,userOrders)
orderRouter.get("/list",listOrders)
orderRouter.post("/status",updateStatus)
orderRouter.post("/place-cod",authMiddleware,placeOrderCOD)
orderRouter.post("/mark-as-paid",markAsPaid)

export default orderRouter;