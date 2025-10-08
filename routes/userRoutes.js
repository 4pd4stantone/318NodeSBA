import express from 'express';

const router = express.Router();




router.get("/user/:id", (req, res) => {
    console.log(`GET /user/id`)
    res.send(`<h1>User with id: #${req.params.id}</h1>`)
});

export default router