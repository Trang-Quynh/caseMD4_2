import {Request, Response} from "express";
import userService from "../service/userService";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import {SECRET} from '../middleware/auth'

class UserController {

    private userService;

    constructor() {
        this.userService = userService;
    }


    signup = async (req: Request, res: Response) => {
        let user = req.body
        let userCheck = await this.userService.checkUser(req.body)
        if (userCheck) {
            res.status(200).json('Đã có tài khoản')
        } else if(!user.username || !user.password){
            res.status(200).json('Dien thieu')
        } else {
            user.password = await bcrypt.hash(user.password, 10)
            let newUser = await this.userService.createNewUser(user)
            res.status(201).json(newUser)
        }
    }

    login = async (req: Request, res: Response) => {
        let user = req.body
        console.log(user)
        let userFind = await this.userService.checkUser(user);
        console.log(userFind)
        if (!userFind) {
            res.status(201).json('Username is not exits')
        }else{
            let comparePassword = await bcrypt.compare(req.body.password, userFind.password);
            if(!comparePassword){
                res.status(201).json('Password is wrong')
            }else{
                let payload = {
                    username: userFind.username
                }
                let token = jwt.sign(payload, SECRET, {
                    expiresIn: 36000
                });
                console.log(token)
                res.status(200).json({
                    token: token
                })
            }
        }
    }
}

export default new UserController();