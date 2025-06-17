### Estructura del Proyecto

```
my-app/
│
├── package.json
├── server.js
├── .env
├── config/
│   └── db.js
├── models/
│   └── User.js
├── routes/
│   └── auth.js
└── middleware/
    └── auth.js
```

### Paso 1: Inicializar el Proyecto

1. Crea una carpeta para tu proyecto y navega a ella:

   ```bash
   mkdir my-app
   cd my-app
   ```

2. Inicializa un nuevo proyecto de Node.js:

   ```bash
   npm init -y
   ```

3. Instala las dependencias necesarias:

   ```bash
   npm install express mongoose bcryptjs jsonwebtoken dotenv
   ```

### Paso 2: Configurar el Servidor

Crea un archivo `server.js` en la raíz del proyecto:

```javascript
// server.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');

dotenv.config();

const app = express();
app.use(express.json());

// Conectar a MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB conectado'))
    .catch(err => console.error('Error al conectar a MongoDB:', err));

// Rutas
app.use('/api/auth', authRoutes);

// Iniciar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
```

### Paso 3: Configurar la Conexión a MongoDB

Crea un archivo `config/db.js` para manejar la conexión a la base de datos:

```javascript
// config/db.js
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB conectado');
    } catch (error) {
        console.error('Error al conectar a MongoDB:', error);
        process.exit(1);
    }
};

module.exports = connectDB;
```

### Paso 4: Crear el Modelo de Usuario

Crea un archivo `models/User.js` para definir el esquema del usuario:

```javascript
// models/User.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('User', UserSchema);
```

### Paso 5: Crear las Rutas de Autenticación

Crea un archivo `routes/auth.js` para manejar el registro y el login:

```javascript
// routes/auth.js
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

// Registro de usuario
router.post('/register', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Verificar si el usuario ya existe
        let user = await User.findOne({ username });
        if (user) {
            return res.status(400).json({ msg: 'Usuario ya existe' });
        }

        user = new User({ username, password });

        // Hash de la contraseña
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        await user.save();

        res.status(201).json({ msg: 'Usuario registrado con éxito' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error en el servidor' });
    }
});

// Login de usuario
router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ msg: 'Credenciales inválidas' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Credenciales inválidas' });
        }

        // Generar token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error en el servidor' });
    }
});

module.exports = router;
```

### Paso 6: Configurar Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto y agrega tus variables de entorno:

```
MONGODB_URI=mongodb://<usuario>:<contraseña>@localhost:27017/mi_base_de_datos
JWT_SECRET=mi_secreto
PORT=5000
```

### Paso 7: Ejecutar el Servidor

Ahora puedes ejecutar tu servidor:

```bash
node server.js
```

### Probar el API

Puedes usar herramientas como Postman o Insomnia para probar las rutas de registro y login:

- **Registro**: `POST http://localhost:5000/api/auth/register` con el cuerpo JSON:

```json
{
    "username": "usuario1",
    "password": "contraseña123"
}
```

- **Login**: `POST http://localhost:5000/api/auth/login` con el cuerpo JSON:

```json
{
    "username": "usuario1",
    "password": "contraseña123"
}
```

### Conclusión

Con esto, tienes un back-end básico funcional para el registro y login de usuarios utilizando Node.js y Express.js, y está preparado para integrarse con MongoDB usando Mongoose en el futuro. Puedes expandir este proyecto según tus necesidades, añadiendo más características y funcionalidades.