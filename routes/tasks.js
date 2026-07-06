import express from "express"
const router = express.Router();
import Task from "../models/Task.js";

// POST /create -> crear una tarea
router.post("/create", async (req, res) => {
    try {
        const { title } = req.body;

        if (!title) {
            return res.status(400).json({ message: "El campo 'title' es obligatorio" });
        }

        const newTask = new Task({ title });
        const savedTask = await newTask.save();

        res.status(201).json(savedTask);
    } catch (error) {
        res.status(500).json({ message: "Error al crear la tarea", error: error.message });
    }
});

// GET / -> traer todas las tareas
router.get("/", async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener las tareas", error: error.message });
    }
});

// PUT /id/:_id -> actualizar SOLO el título de la tarea
router.put("/id/:_id", async (req, res) => {
    try {
        const { _id } = req.params;
        const { title } = req.body;

        if (!title) {
            return res.status(400).json({ message: "El campo 'title' es obligatorio" });
        }

        // Solo se permite actualizar 'title'. Aunque llegue 'completed' en el body, se ignora
        // a propósito para que no se pueda cambiar ese campo desde este endpoint.
        const updatedTask = await Task.findByIdAndUpdate(
            _id,
            { title },
            { new: true, runValidators: true }
        );

        if (!updatedTask) {
            return res.status(404).json({ message: "Tarea no encontrada" });
        }

        res.status(200).json(updatedTask);
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar la tarea", error: error.message });
    }
});

// DELETE /id/:_id -> eliminar una tarea
router.delete("/id/:_id", async (req, res) => {
    try {
        const { _id } = req.params;

        const deletedTask = await Task.findByIdAndDelete(_id);

        if (!deletedTask) {
            return res.status(404).json({ message: "Tarea no encontrada" });
        }

        res.status(200).json({ message: "Tarea eliminada correctamente", task: deletedTask });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar la tarea", error: error.message });
    }
});

export default router;