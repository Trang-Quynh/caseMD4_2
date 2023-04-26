"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const productService_1 = __importDefault(require("../service/productService"));
const CategoryService_1 = __importDefault(require("../service/CategoryService"));
class ProductController {
    constructor() {
        this.findAll = async (req, res) => {
            let listProduct = await this.productService.getAll();
            res.status(200).json(listProduct);
        };
        this.addProduct = async (req, res) => {
            if (!req.body.name) {
                res.status(400).json({
                    message: 'name missing'
                });
            }
            else {
                await this.productService.add(req.body);
                res.status(201).json({ message: 'OK' });
            }
        };
        this.deleteProductPost = async (req, res) => {
            let id = req.body.idDelete;
            console.log(req.body);
            await this.productService.deleteProduct(id);
            res.status(200).json({ message: 'delete success' });
        };
        this.showFormUpdate = async (req, res) => {
            let id = req.params.id;
            let product = await this.productService.findProductById(id);
            res.status(200).json(product);
        };
        this.updateProduct = async (req, res) => {
            let id = req.params.id;
            console.log(id);
            let updateProduct = req.body;
            console.log(req.body);
            await this.productService.updateProductById(id, updateProduct);
            res.status(200).json({ message: 'update success' });
        };
        this.productService = productService_1.default;
        this.categoryService = CategoryService_1.default;
    }
}
exports.default = new ProductController();
//# sourceMappingURL=productController.js.map