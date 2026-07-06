import express from "express";
import "dotenv/config";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import { dbConnection } from "./config/config.js";
import taskRoutes from "./routes/tasks.js";
import swaggerDocument from "./docs/index.js";

const app = express();

app.use(cors());
app.use(express.json());

dbConnection();

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/", taskRoutes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en el puerto ${PORT}`);
    console.log(`📄 Documentación disponible en http://localhost:${PORT}/api-docs`);
});