import express from 'express';
import UserService from '../services/UserService.js';

const router = express.Router();
const userService = new UserService();
/**
 * @swagger
 * /api/users/authenticate:
 *   post:
 *     summary: Authenticate a user
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: User authenticated
 *       401:
 *         description: Invalid credentials
 */
router.post('/users/authenticate', async (req, res) => {
    try {
        const user = await userService.authenticateUser(req.body.email, req.body.password);
        res.json(user);
    } catch (err) {
        res.status(401).json({ message: err.message });
    }
});

export default router;
