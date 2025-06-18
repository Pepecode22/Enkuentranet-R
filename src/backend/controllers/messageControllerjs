import Message from '../models/Message.js';

export const saveMessage = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    const newMessage = new Message({ name, email, subject, message });
    await newMessage.save();
    res.status(201).json({ msg: 'Mensaje guardado correctamente' });
  } catch (err) {
    res.status(500).json({ msg: 'Error al guardar el mensaje' });
  }
};