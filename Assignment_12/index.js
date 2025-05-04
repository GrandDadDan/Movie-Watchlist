import express from 'express';
import movieRoutes from './api/movieRoutes.js';
import userRoutes from './api/userRoutes.js';
import watchlistRoutes from './api/watchlistRoutes.js';
import swaggerDocs from './docs/swagger.js';

const app = express();
app.use(express.json());

app.use('/api', movieRoutes);
app.use('/api', userRoutes);
app.use('/api', watchlistRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
