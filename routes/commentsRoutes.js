import express from 'express'

const router = express.Router()

import comments from "../data/comments.js"
import socials from '../data/socials.js';

router.use(express.urlencoded({ extended: true }));
router.use(express.json());


// Create GET routes for all data that should be exposed to the client. 5%

router.get("/api/:socialId", (req, res, next) => {
  // console.log(socials.length)
  let socialId = Number(req.params.socialId);
  if(isNaN(socialId) || socialId <=0) {
    return next()
  }
  const comment = comments.filter((c) => c.socialId == req.params.socialId);
  if (comments.length > 0 && socialId <= socials.length) {
    console.log('GET /comments/api/byID')
    res.json(comment);
  } else {
    return next()
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

router.post("/review", (req, res) => {
    console.log(req.body)
    if (req.body.socialId && req.body.rating && req.body.title && req.body.content) {

    const comment = {
        id: comments[comments.length -1].id + 1,
        socialId: Number(req.body.socialId),
        userId: 1,
        rating: Number(req.body.rating),
        title: req.body.title,
        content: req.body.content,
    };

    comments.push(comment);
    res.json(comments[comments.length -1]);
    } else {
        res.json({error: "Insufficient Data"})
    }
});



export default router