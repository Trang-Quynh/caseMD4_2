declare class UserService {
    private userRepository;
    constructor();
    checkUserLogin: (user: any) => Promise<any>;
    createNewUser: (user: any) => Promise<any>;
    checkUserSignup: (user: any) => Promise<any>;
}
declare const _default: UserService;
export default _default;
