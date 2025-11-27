import { Router } from "express";
import { CategoryController } from "../controller/CategoryController";
import { ImageController } from "../controller/ImageController";
import { upload } from "../../upload";


const router = Router();

const imageController = new ImageController();
router.post("/", upload.single("file"),  imageController.createImage);
//router.put("/:id",categoryController.updateCategory);
//router.get("/",imageController.getImages);
router.get("/:id",imageController.getImageById);
//router.get("/:roleName",roleController.getRoleByName);
//router.delete("/:id",imageController.deleteImage);
export default router;