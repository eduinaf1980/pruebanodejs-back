import Users from "../models/users.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const createUsers = async (req, res) => {
    const {name, email, pass, type} = req.body;
    try{

        let password = bcrypt.hashSync(pass, 10);

        const newUser = await Users.create({
            email,
            name,
            password,
            type
        }).then(newUser => {
            const token = jwt.sign({user: newUser}, "andf1980", {expiresIn: "12h"});

            res.send({
                "ok": true, 
                "message": "Se ha creado el usuario satisfactoriamente",
                "user": newUser,
                "token": token
            });
        });
        
    }catch(error){
        return res.status(500).json({"ok": false, message: error.message});
    }
}

export const loginUsers = async (req, res) => {
    const {email, pass} = req.body;
    try{

        let password = bcrypt.hashSync(pass, 10);

        const user = await Users.findOne({
            where: {
                email: email
            }
        }).then(user => {
            if(!user){
                res.status(404).json({"ok": false, "message": "El usuario no existe"});
            }else{
                if(bcrypt.compareSync(pass, user.password)){
                    let token = jwt.sign({user: user}, "andf1980", {expiresIn: "12h"});
                    res.json({
                        "ok": true,
                        "user": user,
                        "token": token,
                        "message": "Usuario logueado satisfactoriamente"
                    });
                }else{
                    res.status(401).json({"ok": false, "message": "Las contraseña es invalida"});
                }
            }
        })
    }catch(error){
        return res.status(500).json({"ok": false, message: error.message});
    }
}

export const deleteUsers = async (req, res) => {
    const {id} = req.params;
    try{
        await Users.destroy({
            where: {
                id,
            }
        });
        res.json({"ok": true, "message": "usuario borrado satisfactoriamente"});
    }catch(error){
        return res.status(500).json({"ok": false, message: error.message});
    }
}