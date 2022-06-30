import Raport from "../models/RaportModel.js";
import Users from "../models/UserModel.js";
 
export const getAllRaports = async (req, res) => {
    try {
        const Raports = await Raport.findAll();
        res.json(Raports);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const getRaportById = async (req, res) => {
    try {
        const Raports = await Raport.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(Raports[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const createRaport = async (req, res) => {
    try {
        await Raport.create(req.body);
        res.json({
            "message": "Report Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const updateRaport = async (req, res) => {
    try {
        await Raport.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Raport Updated"
        });
    } catch (error) {
        res.json({ message: error.
            message });
    }  
}
 
export const deleteRaport = async (req, res) => {
    try {
        await Raport.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Product Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}