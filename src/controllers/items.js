import Companies from "../models/companies.js";
import Items from "../models/items.js";

export const createItems = async (req, res) => {
    const {description, code, companies_id} = req.body;
    try{
        const newItem = await Items.create({
            description,
            code,
            companies_id
        })
        res.send({"ok": true, "message": "Se ha creado el item satisfactoriamente"});
    }catch(error){
        const cad = error.message.split(",\n");
        var resu = "{";
       for(let i = 0; i < cad.length; i++){
            if(cad[i].includes('descripcion')){
                resu += '"descripcion": "' + cad[i] + '",'
            }
            if(cad[i].includes('codigo')){
                resu += '"codigo": "' + cad[i] + '",'
            }
        }
        if(resu.slice(-1) == ',') resu = resu.substr(0, (resu.length - 1))
        resu += "}";
        console.log(resu)
        return res.status(200).json({"ok": false, message: resu});
    }
}

export const getItems = async (req, res) => {
    try{
        const items = await Items.findAll({
            include: [
                {model: Companies, as: 'company'}
            ]
        });
        console.log(items)
        res.json({"ok": true, "message": "Items consultados satisfactoriamente", "result": items});
    }catch(error){
        return res.status(200).json({"ok": false, message: error.message});
    }
}

export const updateItems = async (req, res) => {
    const {id, description, code, companies_id} = req.body;
    try{
        const item = await Items.findByPk(id);
        item.code = code;
        item.description = description;
        item.companies_id = companies_id;
        await item.save();
        res.json({"ok": true, "message": "Item actualizado satisfactoriamente"});
    }catch(error){
        const cad = error.message.split(",\n");
        var resu = "{";
       for(let i = 0; i < cad.length; i++){
            if(cad[i].includes('descripcion')){
                resu += '"descripcion": "' + cad[i] + '",'
            }
            if(cad[i].includes('codigo')){
                resu += '"codigo": "' + cad[i] + '",'
            }
        }
        if(resu.slice(-1) == ',') resu = resu.substr(0, (resu.length - 1))
        resu += "}";
        return res.status(200).json({"ok": false, message: resu});
    }
}

export const deleteItems = async (req, res) => {
    const {id} = req.params;
    try{
        await Items.destroy({
            where: {
                id,
            }
        });
        res.json({"ok": true, "message": "Item borrado satisfactoriamente"});
    }catch(error){
        return res.status(200).json({"ok": false, message: error.message});
    }
}

export const getItem = async (req, res) => {
    const {id} = req.params;
    try{
        const item = await Items.findByPk(id);
        res.json({"ok": true, "message": "Item consultado satisfactoriamente", "result": item});
    }catch(error){
        return res.status(200).json({"ok": false, message: error.message});
    }
}