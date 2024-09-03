import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API RESTful com Node.js e SQLite',
      version: '1.0.0',
      description: 'Uma API RESTful simples criada com Node.js, Express, Sequelize e SQLite.',
    },
    servers: [
      {
        url: 'http://localhost:3000/api',
      },
    ],
  },
  apis: ['./routes/*.js', './models/*.js'], // Localização das rotas e modelos para documentar
};

const swaggerSpec = swaggerJSDoc(options);

function setupSwagger(app) {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}

export default setupSwagger;
