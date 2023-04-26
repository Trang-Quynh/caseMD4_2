import {Request, Response} from "express";
import userService from "../service/userService";

class UserController {

    private userService;

    constructor() {
        this.userService = userService;
    }


    signup = async (req: Request, res: Response) => {
        let user = req.body
        console.log(req.body)
        let userCheck = await this.userService.checkUserSignup(req.body)
        if (userCheck) {
            res.status(200).json('Đã có tài khoản')
        } else {
            let newUser = await this.userService.createNewUser(user)
            res.status(200).json('Tạo thành công')
        }
    }


    login = async (req: Request, res: Response) => {
        // check user xem da ton tai chua
        let user = await this.userService.checkUserLogin(req.body);
        if (!user) {
            res.status(200).json('Tai khoan khong ton tai')
        } else {
            // req.session['user'] = user;
            if(user.username === 'admin' && user.password === 'admin'){
                res.status(200).json('admin')
            }else{
                res.status(200).json('user')
            }
        }
    }

}

export default new UserController();