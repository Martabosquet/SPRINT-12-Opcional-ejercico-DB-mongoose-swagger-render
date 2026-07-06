const basicInfo = {
    openapi: "3.0.0",
    info: {
        title: "API de Tareas",
        version: "1.0.0",
        description:
            "API REST para gestionar tareas (crear, listar, actualizar el título y eliminar), construida con Express y Mongoose.",
        contact: {
            name: "Soporte API de Tareas",
        },
    },
    servers: [
        {
            url: "http://localhost:8080",
            description: "Servidor local",
        },
        {
            url: "https://sprint-12-opcional-ejercico-db-mongoose.onrender.com",
            description: "Servidor en producción (Render)",
        },
    ],
};

export default basicInfo;