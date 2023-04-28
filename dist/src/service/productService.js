"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("../entity/product");
const data_source_1 = require("../data-source");
class ProductService {
    constructor() {
        this.getAll = async () => {
            let products = await this.productRepository.find({
                relations: {
                    category: true,
                },
            });
            return products;
        };
        this.add = async (product) => {
            let productNew = await this.productRepository.save(product);
            return productNew;
        };
        this.deleteProduct = async (id) => {
            await this.productRepository.delete({ id: id });
        };
        this.findProductById = async (id) => {
            let product = await this.productRepository.find({
                relations: {
                    category: true,
                },
                where: {
                    id: id
                }
            });
            return product;
        };
        this.updateProductById = async (id, updateProduct) => {
            await this.productRepository.update({ id: id }, updateProduct);
        };
        this.productRepository = data_source_1.AppDataSource.getRepository(product_1.Product);
    }
}
exports.default = new ProductService();
//# sourceMappingURL=productService.js.map