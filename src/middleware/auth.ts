import jwt from 'jsonwebtoken'


export const SECRET = 'secret'
export const auth = (req, res, next) =>{
    let authorization = req.headers.authorization;
    if(authorization){
        let accessToken = authorization.split(' ')[1];
        if(!accessToken){
            res.status(401).json({
                message: 'You are anonymous 1'
            })
        }else{
            jwt.verify(accessToken, SECRET, (err, data)=>{
                if(err){
                    res.status(401).json({
                        message: 'You are anonymous 2'
                    })
                }else{
                    req.decode = data;
                    console.log(req.decode)
                    next()
                }
            })
        }
    }else{
        res.status(401).json({
            message: 'You are anonymous 3'
        })
    }
}