import express from 'express';
import socials from '../data/socials.js';
const router = express.Router();


router.use(express.urlencoded({ extended: true }));
router.use(express.json());

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

router.post("/addSocials", (req, res) => {
    console.log(req.body)
    if (req.body.name && req.body.dance && req.body.address) {
        if (socials.find((s) => s.name === req.body.name)) {
            res.json({error: "Social already exists"});
            return;
        }

    const social = {
        id: socials[socials.length -1].id + 1,
        name: req.body.name,
        dance: req.body.dance,
        address: req.body.address,
    };

    socials.push(social);
    res.json(socials[socials.length -1]);
    } else {
        res.json({error: "Insufficient Data"})
    }
});

router.patch("/addSocials", (req, res) => {
    console.log(req.body)
    if (req.body.name && req.body.address) {
        const social = socials.find((s) => s.name === req.body.name);

        if (!social) {
            return res.status(404).json({error: "Social not found"})
        }

    social.address = req.body.address;

    res.json({
        message: "Address updated"
    });
    } else {
        res.status(400).json({error: "Insufficient Data"})
    }
});

router.delete("/addSocials", (req, res, next) => {
    console.log(req.body);
    const social = socials.find((u, i) => {
        if (u.id ==)
    })
    if (req.body.name) {
        const social = socials.find((s) => s.name === req.body.name);

        if (!social) {
            return res.status(404).json({error: "Social not found"})
        }

    social.name = req.body.name;

    res.json({
        message: "Address updated"
    });
    } else {
        res.status(400).json({error: "Insufficient Data"})
    }
});


export default router