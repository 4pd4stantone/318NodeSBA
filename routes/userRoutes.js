import express from 'express';
import users from '../data/users.js';
const router = express.Router();


// Create GET routes for all data that should be exposed to the client. 5%

// Private information
router.get("/api", (req, res) => {
    console.log(`GET /users/api`)
    res.json(users);
});


export default router

