import Message from "../models/MessageModel.js";
 
export const getAllMessages = async (req, res) => {
    try {
        const messages = await Message.findAll();
        res.json(messages);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const getMessageById = async (req, res) => {
    try {
        const message = await Message.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(message[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const createMessage = async (req, res) => {
    try {
        await Message.create(req.body);
        res.json({
            "message": "Message Submited!"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const deleteMessage = async (req, res) => {
    try {
        await Message.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Message Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}