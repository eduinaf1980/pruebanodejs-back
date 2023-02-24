import jwt from "jsonwebtoken";

export const Auth = async (req, res, next) => {

    console.log(req.headers);

    if(!req.headers.authorization){
        res.status(401).json({message: "Acceso no autorizado"});
    }else{
        let token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, "andf1980", (error, dodec) => {
            if(error){
                res.status(500).json({message: "El token no es valido"});
            }else{
                next();
            }
        })
    }
}