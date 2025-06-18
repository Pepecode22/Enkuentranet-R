import express from 'express';
import { saveMessage } from '../controllers/messageController.js';
const router = express.Router();

router.post('/', saveMessage);

export default router;