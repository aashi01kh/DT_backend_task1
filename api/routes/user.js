import express from "express";
import {getUsers , createUser , getUser , deleteUser ,updateUser } from "../controllers/users.js"

const router = express.Router();

router.get("/events",getUsers);
router.post("/events",createUser);
router.get("/events/:id",getUser);
router.delete("/events/:id",deleteUser);
router.put("/events/:id",updateUser);
//router.get("/eventss",letsfind);


export default router