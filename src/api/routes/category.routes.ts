import { Router } from "express";
import { CategoryController } from "../controller/CategoryController";


const router = Router();

const categoryController = new CategoryController();
router.post("/",categoryController.createCategory);
router.put("/:id",categoryController.updateCategory);
router.get("/",categoryController.getCategories);
router.get("/:id",categoryController.getCategoryById);
//router.get("/:roleName",roleController.getRoleByName);
router.delete("/:id",categoryController.deleteCategory);
export default router;