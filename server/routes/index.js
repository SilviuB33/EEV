import express from "express";
import { getUsers, Register, AddUserService, Login, Logout, getUsersWithNameAndId, getUsersWithServices } from "../controllers/Users.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";
import { 
    getAllServices,
    createService,
    getServiceById,
    updateService,
    deleteService,
    getServicesWithNameAndId,
    addServiceToUser
} from "../controllers/Services.js";

import { 
    getAllRaports,
    createRaport,
    getRaportById,
    updateRaport,
    deleteRaport
} from "../controllers/Raports.js";

import {
    getAllMessages,
    createMessage,
    getMessageById,
    deleteMessage
} from "../controllers/Messages.js";

import {
    getAllMessageLoggedIn,
    createMessageLoggedIn,
    getMessageLoggedInById,
    deleteMessageLoggedIn
} from "../controllers/MessagesLoggedIn.js";

const router = express.Router();

// Services
router.get('/Services', getAllServices);
router.get('/Services/:id', getServiceById);
router.post('/Services', createService);
router.patch('/Services/:id', updateService);
router.delete('/Services/:id', deleteService);
router.get('/serviceswithnameandid', getServicesWithNameAndId);
router.post('/updateuserservice', addServiceToUser);
//Messages
router.get('/messages', getAllMessages);
router.get('/messages/:id', getMessageById);
router.post('/messages', createMessage);
router.delete('/messages/:id', deleteMessage);
//MessagesLoggedIn
router.get('/messagesloggedin', getAllMessageLoggedIn);
router.get('/messagesloggedin/:id', getMessageLoggedInById);
router.post('/messagesloggedin', createMessageLoggedIn);
router.delete('/messagesloggedin/:id', deleteMessageLoggedIn);
// Raports
router.get('/Raports', getAllRaports);
router.get('/Raports/:id', getRaportById);
router.post('/Raports', createRaport);
router.patch('/Raports/:id', updateRaport);
router.delete('/Raports/:id', deleteRaport);
//USers
router.get('/users', verifyToken, getUsers);
router.get('users', getUsers);
router.get('/userswithnameandid', getUsersWithNameAndId);
router.post('/users', Register);
router.post('/login', Login);
router.patch('/users', AddUserService)
router.get('/token', refreshToken);
router.delete('/logout', Logout);
router.get('/userswithservices', getUsersWithServices);
 
export default router;