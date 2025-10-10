import express from 'express'

const router = express.Router()

import comments from "../data/comments.js"
import socials from '../data/socials.js';



// Create GET routes for all data that should be exposed to the client. 5%

router.get("/api/:socialId", (req, res, next) => {
  const comment = comments.filter((c) => c.socialId == req.params.socialId);
  if (comment) {
    console.log('GET /comments/api/byID')
    res.json(comment);
  } else {
    next()
  }
});

router.get("/api", (req, res) => {
    console.log(`GET /comments/api`)
    res.json(comments);
});


router.get("/", (req, res) => {
    console.log(`GET /comments`)
    res.render('comments', {comments, socials});
});

router.get("/review", (req, res) => {
    console.log(`GET /comments/review`)
    res.render('review', {comments, socials});
});



export default router