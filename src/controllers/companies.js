import Companies from "../models/companies.js";

export const createCompanies = async (req, res) => {
    const {name, address, nit, phone} = req.body;
    try{
        const newCompany = await Companies.create({
            name,
            address,
            nit,
            phone
        })
        res.send({"ok": true, "message": "Se ha creado la compañia satisfactoriamente"});
    }catch(error){
        return res.status(500).json({"ok": false, message: error.message});
    }
}

export const getCompanies = async (req, res) => {
    try{
        const companies = await Companies.findAll();
        res.json({"ok": true, "message": "Compañia consultada satisfactoriamente", "result": companies});
    }catch(error){
        return res.status(500).json({"ok": false, message: error.message});
    }
}

export const updateCompanies = async (req, res) => {
    const {name, address, nit, phone} = req.body;
    try{
        const comp = await Companies.findByPk(nit);
        comp.name = name;
        comp.address = address;
        comp.phone = phone;
        await comp.save();
        res.json({"ok": true, "message": "Compañia actualizada satisfactoriamente"});
    }catch(error){
        return res.status(500).json({"ok": false, message: error.message});
    }
}

export const deleteCompanies = async (req, res) => {
    const {nit} = req.params;
    try{
        await Companies.destroy({
            where: {
                nit,
            }
        });
        res.json({"ok": true, "message": "Compañia borrada satisfactoriamente"});
    }catch(error){
        return res.status(500).json({"ok": false, message: error.message});
    }
}

export const getCompany = async (req, res) => {
    const {nit} = req.body;
    try{
        const company = await Companies.findByPk(nit);
        res.json({"ok": true, "message": "Compañia consultada satisfactoriamente", "result": company});
    }catch(error){
        return res.status(500).json({"ok": false, message: error.message});
    }
}