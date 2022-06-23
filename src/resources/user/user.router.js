import expressRouter from "express";
import { fetchUser, updateUser, createUser } from "./user.controller.js";

const router = new expressRouter.Router();

router.get("/", fetchUser);
router.put("/", updateUser);
router.post("/", createUser);

export default router;
