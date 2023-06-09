"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userService_1 = __importDefault(require("../service/userService"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth_1 = require("../middleware/auth");
class UserController {
    constructor() {
        this.signup = async (req, res) => {
            let user = req.body;
            let userCheck = await this.userService.checkUser(req.body);
            if (userCheck) {
                res.status(200).json('Đã có tài khoản');
            }
            else if (!user.username || !user.password) {
                res.status(200).json('Dien thieu');
            }
            else {
                user.password = await bcrypt_1.default.hash(user.password, 10);
                let newUser = await this.userService.createNewUser(user);
                res.status(201).json(newUser);
            }
        };
        this.login = async (req, res) => {
            let user = req.body;
            console.log(user);
            let userFind = await this.userService.checkUser(user);
            console.log(userFind);
            if (!userFind) {
                res.status(201).json('Username is not exits');
            }
            else {
                let comparePassword = await bcrypt_1.default.compare(req.body.password, userFind.password);
                if (!comparePassword) {
                    res.status(201).json('Password is wrong');
                }
                else {
                    let payload = {
                        username: userFind.username
                    };
                    let token = jsonwebtoken_1.default.sign(payload, auth_1.SECRET, {
                        expiresIn: 36000
                    });
                    res.status(200).json({
                        token: token,
                        role: userFind.role
                    });
                }
            }
        };
        this.userService = userService_1.default;
    }
}
exports.default = new UserController();
//# sourceMappingURL=userController.js.map