"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userService_1 = __importDefault(require("../service/userService"));
class UserController {
    constructor() {
        this.signup = async (req, res) => {
            let user = req.body;
            console.log(req.body);
            let userCheck = await this.userService.checkUserSignup(req.body);
            if (userCheck) {
                res.status(200).json('Đã có tài khoản');
            }
            else {
                let newUser = await this.userService.createNewUser(user);
                res.status(200).json('Tạo thành công');
            }
        };
        this.login = async (req, res) => {
            let user = await this.userService.checkUserLogin(req.body);
            if (!user) {
                res.status(200).json('Tai khoan khong ton tai');
            }
            else {
                if (user.username === 'admin' && user.password === 'admin') {
                    res.status(200).json('admin');
                }
                else {
                    res.status(200).json('user');
                }
            }
        };
        this.userService = userService_1.default;
    }
}
exports.default = new UserController();
//# sourceMappingURL=userController.js.map