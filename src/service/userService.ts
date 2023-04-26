import {User} from "../entity/user";
import {AppDataSource} from "../data-source";


class UserService {
    private userRepository;
    constructor() {
        this.userRepository = AppDataSource.getRepository(User)
    }




    checkUserLogin = async (user) => {
        let userFind = await this.userRepository.findOneBy({
            username: user.username,
            password: user.password
        })
        return userFind;
    }

    createNewUser = async(user) =>{
        let newUser = await this.userRepository.save(user)
        return newUser
    }
    checkUserSignup = async (user) => {
        let userFind = await this.userRepository.findOneBy({
            username: user.username
        })
        console.log(userFind)
        return userFind;
    }



}

export default new UserService();