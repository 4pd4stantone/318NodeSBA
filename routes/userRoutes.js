import express from 'express';
import users from '../data/users.js';
const router = express.Router();




// Private information
router.get("/api", (req, res) => {
    console.log(`GET /users/api`)
    res.json(users);
});


export default router

