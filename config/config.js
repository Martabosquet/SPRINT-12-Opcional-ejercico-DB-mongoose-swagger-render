import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config({ path: './env/.env' });
console.log('MONGODB_URI:', process.env.MONGODB_URI);

export const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Base de datos conectada con éxito');
    } catch (error) {
        console.error(error);
        throw new Error('Error a la hora de iniciar la base de datos');
    }
};