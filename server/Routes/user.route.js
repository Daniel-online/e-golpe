import express from "express";
import {updateUserController, getUserController, deleteUserController} from "./../Controllers/user.controller.js";
const router = express.Router();

// update
router.put("/:id", updateUserController)
// delete user
router.delete("/:id", deleteUserController )
// get user
router.get("/:id", getUserController)

export default router;