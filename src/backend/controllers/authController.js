import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import fs from 'fs';
import path from 'path';

export const register = async (req, res) => {
  const { nombre, direccion, telefono, rut, categoria, password, email } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ msg: 'El usuario ya existe' });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    user = new User({
      nombre,
      direccion,
      telefono,
      rut,
      categoria,
      password: hashedPassword,
      email
    });
    await user.save();

    // Guardar archivo .json con el rut como ID
    if (rut) {
      const userData = { email, rut };
      const dir = path.resolve('users_json');
      if (!fs.existsSync(dir)) fs.mkdirSync(dir);
      fs.writeFileSync(
        path.join(dir, `${rut}.json`),
        JSON.stringify(userData, null, 2)
      );
    }

    res.status(201).json({ msg: 'Usuario registrado correctamente', user: { email, rut, nombre, direccion, telefono, categoria } });
  } catch (err) {
    console.error('Error en registro:', err);
    res.status(500).json({ msg: err.message || 'Error en el servidor' });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: 'Credenciales inválidas' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: 'Credenciales inválidas' });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '2h' });
    res.json({ token, user: { id: user._id, email: user.email } });
  } catch (err) {
    res.status(500).json({ msg: 'Error en el servidor' });
  }
};