import mongoose from 'mongoose';

const TaskSchema = new mongoose.Schema({
    title: String,
    completed: Boolean,
}, { timestamps: true });

const Task = mongoose.model('Task', TaskSchema);

export default Task;