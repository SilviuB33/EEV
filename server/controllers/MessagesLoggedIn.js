import MessagesLoggedIn from "../models/MessageLoggedIn.js";
 
export const getAllMessageLoggedIn = async (req, res) => {
    try {
        const messages = await MessagesLoggedIn.findAll();
        res.json(messages);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const getMessageLoggedInById = async (req, res) => {
    try {
        const message = await MessagesLoggedIn.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(message[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const createMessageLoggedIn = async (req, res) => {
    try {
        await MessagesLoggedIn.create(req.body);
        res.json({
            "message": "Message Submitted!"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const deleteMessageLoggedIn = async (req, res) => {
    try {
        await MessagesLoggedIn.destroy({
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