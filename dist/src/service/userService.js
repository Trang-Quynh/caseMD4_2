"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../entity/user");
const data_source_1 = require("../data-source");
class UserService {
    constructor() {
        this.checkUserLogin = async (user) => {
            let userFind = await this.userRepository.findOneBy({
                username: user.username,
                password: user.password
            });
            return userFind;
        };
        this.createNewUser = async (user) => {
            let newUser = await this.userRepository.save(user);
            return newUser;
        };
        this.checkUserSignup = async (user) => {
            let userFind = await this.userRepository.findOneBy({
                username: user.username
            });
            console.log(userFind);
            return userFind;
        };
        this.userRepository = data_source_1.AppDataSource.getRepository(user_1.User);
    }
}
exports.default = new UserService();
//# sourceMappingURL=userService.js.map