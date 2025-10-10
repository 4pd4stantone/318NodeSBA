import express from 'express'

const router = express.Router()

import ratings from "../data/ratings.js"



// Create GET routes for all data that should be exposed to the client. 5%

router.get("/api/:socialId", (req, res, next) => {
  const rating = ratings.filter((r) => r.socialId == req.params.socialId);
  if (rating) {
    console.log('GET /rating/api/bySocialID')
    res.json(rating);
  } else {
    next()
  }
});

router.get("/api", (req, res) => {
    console.log(`GET /ratings/api`)
    res.json(ratings);
});


router.get("/", (req, res) => {
    console.log(`GET /ratings`)
    res.render('ratings');
});


export default router