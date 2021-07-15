import { Router } from "express";
import authMiddleware from "./app/middlewares/authMiddleware";
import UserController from "./app/controllers/UserController";
import AuthController from "./app/controllers/AuthController";
import EmployeersController from "./app/controllers/EmployeersController";
const router = Router();
router.post("/users", UserController.store);
router.get("/users", UserController.getUsers);

router.post("/auth", AuthController.authenticate);
router.get("/users", authMiddleware, UserController.index);
router.post("/funcionarios", EmployeersController.store);
router.get("/funcionarios", EmployeersController.getUsers);
router.get("/funcionarios/:id", EmployeersController.getUser);
router.put("/funcionarios/:id", EmployeersController.updateUser);
router.delete("/funcionarios/:id", EmployeersController.deleteUser);
export default router;
