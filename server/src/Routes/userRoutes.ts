import { Router } from "express";
import { UserController } from "../controllers/UserController";
import pool from "../db";
import authenticateJWT from "../middleware/authenticateJWT";

const userController = new UserController(pool);
const router = Router();

//GET
router.get("/users", userController.getUsers);
// @ts-ignore TODO GET RID OF THIS I HATE TYPESCRIPT
router.get("/users/:id", authenticateJWT, userController.getUserById);

//POST
router.post("/users", userController.createUser);
// @ts-ignore TODO GET RID OF THIS I HATE TYPESCRIPT
router.post("/users/login", userController.loginUser);

//PUT
router.put("/users/:id");

//DELETE
router.delete("/users/:id", userController.deleteUserById);

//MOVE THESE TOKEN ROUTES
// @ts-ignore TODO GET RID OF THIS I HATE TYPESCRIPT
router.post("/users/refresh-token", userController.refreshToken);
// @ts-ignore TODO GET RID OF THIS I HATE TYPESCRIPT
router.put("/users/logout", authenticateJWT, userController.logout);

export default router;