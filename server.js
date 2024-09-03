import express from "express";
import sequelize from "./database/sequelize.js";
import router from "./routes/router.js";
import setupSwagger from "./swagger.js";

const app = express();
app.use(express.json());

app.use('/api', router);

setupSwagger(app);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}\n`);
    console.log(`Swagger UI is available at http://localhost:${PORT}/api-docs`);
  });
});
