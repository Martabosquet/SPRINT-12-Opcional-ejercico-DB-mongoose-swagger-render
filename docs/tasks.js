const tasks = {
    "/create": {
        post: {
            tags: ["Tasks"],
            summary: "Crear una nueva tarea",
            description: "Crea una tarea nueva a partir de un título.",
            requestBody: {
                required: true,
                content: {
                    "application/json": {
                        schema: { $ref: "#/components/schemas/TaskInput" },
                    },
                },
            },
            responses: {
                201: {
                    description: "Tarea creada correctamente",
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/schemas/Task" },
                        },
                    },
                },
                400: {
                    description: "Falta el campo 'title'",
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/schemas/Error" },
                        },
                    },
                },
                500: {
                    description: "Error del servidor",
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/schemas/Error" },
                        },
                    },
                },
            },
        },
    },

    "/": {
        get: {
            tags: ["Tasks"],
            summary: "Obtener todas las tareas",
            description: "Devuelve un array con todas las tareas almacenadas.",
            responses: {
                200: {
                    description: "Listado de tareas",
                    content: {
                        "application/json": {
                            schema: {
                                type: "array",
                                items: { $ref: "#/components/schemas/Task" },
                            },
                        },
                    },
                },
                500: {
                    description: "Error del servidor",
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/schemas/Error" },
                        },
                    },
                },
            },
        },
    },

    "/id/{_id}": {
        put: {
            tags: ["Tasks"],
            summary: "Actualizar el título de una tarea",
            description:
                "Actualiza únicamente el campo 'title' de la tarea indicada. El campo 'completed' no se puede modificar desde este endpoint, aunque se envíe en el body.",
            parameters: [
                {
                    name: "_id",
                    in: "path",
                    required: true,
                    description: "Identificador de la tarea a actualizar",
                    schema: { type: "string" },
                },
            ],
            requestBody: {
                required: true,
                content: {
                    "application/json": {
                        schema: { $ref: "#/components/schemas/TaskInput" },
                    },
                },
            },
            responses: {
                200: {
                    description: "Tarea actualizada correctamente",
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/schemas/Task" },
                        },
                    },
                },
                400: {
                    description: "Falta el campo 'title'",
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/schemas/Error" },
                        },
                    },
                },
                404: {
                    description: "Tarea no encontrada",
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/schemas/Error" },
                        },
                    },
                },
                500: {
                    description: "Error del servidor",
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/schemas/Error" },
                        },
                    },
                },
            },
        },

        delete: {
            tags: ["Tasks"],
            summary: "Eliminar una tarea",
            description: "Elimina la tarea indicada por su _id.",
            parameters: [
                {
                    name: "_id",
                    in: "path",
                    required: true,
                    description: "Identificador de la tarea a eliminar",
                    schema: { type: "string" },
                },
            ],
            responses: {
                200: {
                    description: "Tarea eliminada correctamente",
                },
                404: {
                    description: "Tarea no encontrada",
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/schemas/Error" },
                        },
                    },
                },
                500: {
                    description: "Error del servidor",
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/schemas/Error" },
                        },
                    },
                },
            },
        },
    },
};

export default tasks;