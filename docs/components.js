const components = {
    schemas: {
        Task: {
            type: "object",
            properties: {
                _id: {
                    type: "string",
                    description: "Identificador único generado por MongoDB",
                    example: "64f1a2b3c4d5e6f7a8b9c0d1",
                },
                title: {
                    type: "string",
                    description: "Título de la tarea",
                    example: "Estudiar Swagger",
                },
                completed: {
                    type: "boolean",
                    description: "Indica si la tarea está completada o no",
                    example: false,
                },
                createdAt: {
                    type: "string",
                    format: "date-time",
                    description: "Fecha de creación de la tarea",
                },
                updatedAt: {
                    type: "string",
                    format: "date-time",
                    description: "Fecha de la última actualización de la tarea",
                },
            },
        },
        TaskInput: {
            type: "object",
            required: ["title"],
            properties: {
                title: {
                    type: "string",
                    description: "Título de la tarea",
                    example: "Estudiar Swagger",
                },
            },
        },
        Error: {
            type: "object",
            properties: {
                message: {
                    type: "string",
                    example: "Mensaje descriptivo del error",
                },
            },
        },
    },
};

export default components;