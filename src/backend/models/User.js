import mongoose from 'mongoose';

const emprendimientoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  direccion: { type: String, required: true },
  telefono: { type: String },
  rut: { type: String, required: true, unique: true },
  categoria: { type: String, required: true },
  password: { type: String, required: true }
});



export default mongoose.model('Emprendimiento', emprendimientoSchema);