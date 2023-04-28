import {Router} from "express";
import productController from "../controller/productController";
import {auth} from "../middleware/auth";

const productRouter = Router();
productRouter.get('/', productController.findAll);
productRouter.use(auth)
productRouter.post('/', productController.addProduct);
productRouter.delete('/', productController.deleteProductPost)
productRouter.get('/:id', productController.showFormUpdate)
productRouter.put('/:id', productController.updateProduct);
export default productRouter;