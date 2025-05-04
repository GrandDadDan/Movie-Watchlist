import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';


// Swagger definition
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Movie Watchlist API',
            version: '1.0.0',
            description: 'API for managing movies, users, and watchlists',
            contact: {
                name: 'Developer',
                email: 'developer@example.com',
            },
        },
    },
    apis: ['./api/movieRoutes.js', './api/userRoutes.js', './api/watchlistRoutes.js'], // List of files to be documented
};

const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app) => {
    // Serve Swagger UI
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

export default swaggerDocs;
