import express from "express";
import { registrationUser } from "../controllers/user.controller";
const userRouter = express.Router();

userRouter.post('/registration', registrationUser);

userRouter.get('/registration', (req, res, next) => {
    res.json({
        success: true,
        message: "chal toh rha h"
    })
})

export default userRouter;