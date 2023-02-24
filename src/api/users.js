import { Router } from "express";
import { createUsers, deleteUsers, loginUsers } from "../controllers/users.js";

const apiUsers = Router();

apiUsers.post('/users', createUsers);
apiUsers.post('/users/login', loginUsers);
apiUsers.delete('/users', deleteUsers);

export default apiUsers;