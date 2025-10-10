import express from "express";

import socialsRoutes from "./routes/socialsRoutes.js";
import usersRoutes from "./routes/userRoutes.js";
import commentsRoutes from "./routes/commentsRoutes.js";
import users from "./data/users.js";

const app = express();
const port = 3000;
app.set('view engine', 'ejs');

// Create and use at least two pieces of custom middleware. 5%

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use("/comments", commentsRoutes);
app.use("/users", usersRoutes);
app.use("/socials", socialsRoutes);


// Create GET routes for all data that should be exposed to the client. 5%
app.get("/", (req, res) => {
    console.log(`GET /`)
    res.render('index');
});

app.post("/", (req, res) => {
    console.log(req.body)
    if (req.body.name && req.body.email && req.body.password) {
        if (users.find((u) => u.email === req.body.email)) {
            res.json({error: "Account already exists"});
            return;
        }

    const user = {
        id: users[users.length -1].id + 1,
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    };

    users.push(user);
    res.json(users[users.length -1]);
    } else {
        res.json({error: "Insufficient Data"})
    }
});

app.use((req, res) => {
    res.status(404).render('404')
})


app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});




// Create and use error-handling middleware. 5%

// Utilize reasonable data structuring practices. 5%



// Create POST routes for data, as appropriate. At least one data category should allow for client creation via a POST request. 5%

// Create PATCH or PUT routes for data, as appropriate. At least one data category should allow for client manipulation via a PATCH or PUT request. 5%

// Create DELETE routes for data, as appropriate. At least one data category should allow for client deletion via a DELETE request. 5%

// Include query parameters for data filtering, where appropriate. At least one data category should allow for additional filtering through the use of query parameters. Note: DO NOT use API keys; this makes it more difficult for instructors to grade finished projects efficiently. 5%

// Utilize route parameters, where appropriate. 5%

// Adhere to the guiding principles of REST. 10%

// Create and render at least one view using a view template and template engine. This can be a custom template engine or a third-party engine. If you are stuck on how to approach this, think about ways you could render the current state of your API's data for easy viewing. 8%

// Use simple CSS to style the rendered views. Note: This is not a test of design; it is a test of serving static files using Express. The CSS can be very simple.2%

// Include a form within a rendered view that allows for interaction with your RESTful API. 3%

// Utilize reasonable code organization practices. 5%

// Ensure that the program runs without errors (comment out things that do not work, and explain your blockers - you can still receive partial credit). 10%

// Commit frequently to the git repository. 5%

// Include a README file that contains a description of your application. 2%

// Level of effort displayed in creativity, presentation, and user experience. 5%

// Bonus Objectives

// Include a practical usage of regular expressions within route paths. Note: A forced, arbitrary usage of this technique will not earn you any bonus credit. This must be practical and sensible in order to be considered for credit. +1%

// Research and effectively use at least one third-party Node package for practical, sensible purposes. This cannot be a package that has been used in examples and lesson materials thus far. Step outside the box and be creative! +1%