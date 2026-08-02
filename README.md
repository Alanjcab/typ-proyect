# Sistema de Gestión para Estudio Jurídico

Aplicación Full Stack desarrollada para mejorar la presencia digital y la gestión de consultas de un estudio jurídico.

El sistema incluye un sitio institucional público, formulario de contacto, autenticación de administradores, rutas protegidas y un panel interno para visualizar y administrar las consultas recibidas.

## Demo

🌐 Frontend publicado en Vercel:  
[Ver aplicación](https://typ-proyect.vercel.app)

> El backend y la base de datos todavía se encuentran pendientes de despliegue en la nube.

## Funcionalidades

### Sitio público

- Página principal institucional.
- Presentación del estudio jurídico.
- Sección de servicios.
- Información sobre las áreas de práctica.
- Formulario de contacto.
- Botón flotante de WhatsApp.
- Navegación mediante React Router.
- Diseño adaptable a dispositivos móviles.

### Panel administrativo

- Inicio de sesión para administradores.
- Autenticación mediante token.
- Rutas privadas protegidas.
- Dashboard administrativo.
- Listado de consultas recibidas.
- Visualización detallada de cada consulta.
- Gestión del estado de las consultas.

## Tecnologías utilizadas

### Frontend

- React
- JavaScript
- React Router DOM
- HTML5
- CSS3
- Vite

### Backend

- Node.js
- Express.js
- API REST
- JWT
- Middleware de autenticación

### Base de datos

- MySQL

### Herramientas y despliegue

- Git
- GitHub
- Vercel
- Visual Studio Code

## Arquitectura

```text
Usuario
   │
   ▼
Frontend desarrollado en React
   │
   ▼
Servicios de comunicación con la API
   │
   ▼
API REST con Node.js y Express
   │
   ├── Rutas
   ├── Controladores
   ├── Middleware de autenticación
   └── Configuración
   │
   ▼
Base de datos MySQL
```

## Estructura del proyecto

```text
estudio-juridico-fullstack/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   └── routes/
│   ├── server.js
│   ├── app.js
│   ├── createAdmin.js
│   └── package.json
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── admin/
│   │   ├── footer.jsx
│   │   ├── hero.jsx
│   │   ├── navbar.jsx
│   │   ├── nosotros.jsx
│   │   ├── porQueElegirnos.jsx
│   │   ├── protectedRoutes.jsx
│   │   ├── scrollTop.jsx
│   │   └── servicios.jsx
│   │
│   ├── pages/
│   │   ├── admin.jsx
│   │   ├── contacto.jsx
│   │   ├── home.jsx
│   │   └── login.jsx
│   │
│   ├── services/
│   │   ├── api.js
│   │   ├── authService.js
│   │   └── consultasService.js
│   │
│   ├── styles/
│   ├── utils/
│   ├── App.jsx
│   └── main.jsx
│
├── .gitignore
├── package.json
├── vercel.json
└── vite.config.js
```

## Instalación local

### 1. Clonar el repositorio

```bash
git clone https://github.com/Alanjcab/estudio-juridico-fullstack.git
cd estudio-juridico-fullstack
```

### 2. Instalar las dependencias del frontend

```bash
npm install
```

### 3. Instalar las dependencias del backend

```bash
cd backend
npm install
```

### 4. Configurar las variables de entorno

Crear un archivo `.env` dentro de la carpeta `backend`:

```env
PORT=

DB_HOST=
DB_PORT=
DB_NAME=
DB_USER=
DB_PASSWORD=

JWT_SECRET=
```

### 5. Ejecutar el backend

Desde la carpeta `backend`:

```bash
npm run dev
```

### 6. Ejecutar el frontend

Desde la carpeta principal:

```bash
npm run dev
```

## Seguridad

- Las credenciales y claves privadas se almacenan mediante variables de entorno.
- El archivo `.env` no debe subirse al repositorio.
- Las rutas administrativas están protegidas mediante autenticación.
- Las contraseñas no deben almacenarse en texto plano.

## Próximas mejoras

- Desplegar el backend en la nube.
- Migrar la base de datos MySQL a un servicio online.
- Incorporar recuperación de contraseña.
- Mejorar la gestión de usuarios administradores.
- Agregar filtros y búsqueda de consultas.
- Incorporar métricas al dashboard.
- Automatizar notificaciones por correo o WhatsApp.
- Integrar IA para clasificar consultas según el área jurídica.
- Agregar pruebas automatizadas.

## Estado del proyecto

🚧 En desarrollo.

El frontend se encuentra publicado. El backend y la base de datos todavía deben desplegarse para completar el funcionamiento en producción.

## Autor

**Alan Julián Cabrera**

- GitHub: [Alanjcab](https://github.com/Alanjcab)
- LinkedIn: [Alan Julián Cabrera](https://www.linkedin.com/in/alan-julian-cabrera-567273228)
