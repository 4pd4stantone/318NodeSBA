import express from 'express';
import socials from '../data/socials.js';
const router = express.Router();


// Create GET routes for all data that should be exposed to the client. 5%

router.get("/api", (req, res) => {
    console.log(`GET /socials/api`)
    res.json(socials);
});

router.get("/", (req, res) => {
    console.log(`GET /socials`)
    res.render('socials', {socials});
});

router.get("/addSocials", (req, res) => {
    console.log(`GET /socials/addSocials`)
    res.render('addSocials', {socials});
});


export default router