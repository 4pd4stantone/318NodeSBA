import express from 'express';
import socials from '../data/socials.js';
const router = express.Router();


router.use(express.urlencoded({ extended: true }));
router.use(express.json());

// Create GET routes for all data that should be exposed to the client. 5%


// Include query parameters for data filtering, where appropriate. At least one data category should allow for additional filtering through the use of query parameters. Note: DO NOT use API keys; this makes it more difficult for instructors to grade finished projects efficiently. 5%

// using "/api/byDance?dance=Bachata" to return all bachata socials
router.get("/api/byDance", (req, res) => {
    let results = socials;
    const { dance } = req.query;

    if (dance) {
        results = results.filter(social => social.dance.toLowerCase().includes(dance.toLowerCase()));

    }
    console.log(`GET /socials/api/byDance`)
    res.json(results);
});


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


// Create POST routes for data, as appropriate. At least one data category should allow for client creation via a POST request. 5%

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


// Create PATCH or PUT routes for data, as appropriate. At least one data category should allow for client manipulation via a PATCH or PUT request. 5%

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

// Create DELETE routes for data, as appropriate. At least one data category should allow for client deletion via a DELETE request. 5%

router.delete("/deleteSocials/:id", (req, res, next) => {
    console.log(req.body);
    let removedSocial = []
    const social = socials.find((u, i) => {
        if (u.id == req.params.id) {
            const deletedSocial = socials.splice(i, 1);
            removedSocial.push(deletedSocial)
            console.log(deletedSocial)
            return true;
        }
    })
    if (social) res.json(removedSocial);
    else next();
});


export default router