declare class ProductService {
    private productRepository;
    constructor();
    getAll: () => Promise<any>;
    add: (product: any) => Promise<void>;
    deleteProduct: (id: any) => Promise<void>;
    findProductById: (id: any) => Promise<any>;
    updateProductById: (id: any, updateProduct: any) => Promise<void>;
}
declare const _default: ProductService;
export default _default;
