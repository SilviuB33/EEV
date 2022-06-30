import Service from "../models/ServiceModel.js";
import Users from "../models/UserModel.js";
 
export const getAllServices = async (req, res) => {
    try {
        const Services = await Service.findAll();
        res.json(Services);
    } catch (error) {
        res.json({ message: error.message });
    }  
}

export const getServicesWithNameAndId = async(req, res) => {
    try {
        const services = await Service.findAll({
            attributes:['id','title']
        });
        res.json(services);
    } catch (error) {
        console.log(error);
    }
}
 
export const getServiceById = async (req, res) => {
    try {
        const Service = await Service.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(Service[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const createService = async (req, res) => {
    try {
        await Service.create(req.body);
        res.json({
            "message": "Service Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const updateService = async (req, res) => {
    try {
        await Service.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Service Updated"
        });
    } catch (error) {
        res.json({ message: error.
            message });
    }  
}
 
export const deleteService = async (req, res) => {
    try {
        await Service.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Service Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}

export const addServiceToUser = async (req,res) => {
    try{
        await Users.update(
            {service: parseInt(req.body.service, 0)},
            {
            where: {id: parseInt(req.body.user, 0)}
        });
        res.status(204).json();
    }
    catch (error) {
        res.json({ message: error.message });
    }
}