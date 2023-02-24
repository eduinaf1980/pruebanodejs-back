import { Router } from "express";
import { createItems, getItems, getItem, updateItems, deleteItems } from "../controllers/items.js";

import { Auth } from "../middlewares/auth.js"

const apiItems = Router();

apiItems.post('/items', Auth, createItems);
apiItems.get('/items', Auth, getItems);
apiItems.get('/items/:id', Auth, getItem);
apiItems.put('/items', Auth, updateItems);
apiItems.delete('/items/:id', Auth, deleteItems);

export default apiItems;