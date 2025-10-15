import {Router } from 'express'
import { ProductController } from '../controller/ProductController';

const router = Router();
const productController = new ProductController();
router.get("/:id",productController.getProduct);
router.post("/", productController.createProduct);
router.get("/", productController.getProducts);
router.put("/:id", productController.updateProduct);
router.delete("/:id",productController.deleteProduct);
export default router;