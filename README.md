# 318NodeSBA

## Social Dance Review API & Web App

A full-stack Express.js application that allows users to explore, review, and manage NYC-area social dance events. The project demonstrates RESTful API principles, dynamic EJS-rendered views, form handling, and data interaction across three categories: Users, Socials, and Comments.

## Overview

This project combines front-end templates and back-end routes to create an interactive experience for exploring Latin dance socials such as Salsa, Bachata, Merengue, and Chacha events. Users can view all socials, read and post reviews, and manage event listings with full CRUD functionality (Create, Read, Update, Delete).

## Features

Three Data Models: Users, Socials, and Comments

Dynamic EJS Views: Displays socials and reviews using EJS templates

CRUD Routes:

GET – retrieve all or filtered data

POST – add new socials or comments

PATCH – update existing socials

DELETE – remove socials by ID

Query Parameters: Filter and retrieve data dynamically from routes

Middleware Usage:

express.urlencoded() and express.json() for form and API parsing

Custom 404 error page rendering

Regular Expressions: Implemented within practical route paths for filtering validation

RESTful Design: Routes and methods follow REST conventions for maintainability

Static Files: Styled with simple CSS for layout and navigation clarity

## Technologies Used

Node.js

Express.js (v5.1.0)

EJS (v3.1.10)

HTML / CSS (Static assets served via Express)

## Project Structure
/ (root)
│
├── data/
│   ├── users.js        # user data
│   ├── socials.js      # social dance events
│   └── comments.js     # user reviews
│
├── routes/
│   ├── userRoutes.js
│   ├── socialsRoutes.js
│   └── commentsRoutes.js
│
├── views/
│   ├── index.ejs
│   ├── socials.ejs
│   ├── comments.ejs
│   ├── review.ejs
│   └── 404.ejs
│
├── public/
│   └── style.css       # static styling
│
├── index.js            # main server file
├── package.json
├── package-lock.json
└── README.md

## API Routes
Socials
Method	Route	Description
GET	/socials/api	Get all socials
POST	/socials/addSocials	Add a new social
PATCH	/socials/addSocials	Update a social’s address
DELETE	/socials/deleteSocials/:id	Delete a social by ID
Comments
Method	Route	Description
GET	/comments/api	Get all comments
GET	/comments/api/:socialId	Get comments by socialId
POST	/comments/review	Add a new review
GET	/comments/review	Render form for new review submission

## Users
Method	Route	Description
GET	/users/api	Get all users

## Middleware and Error Handling

express.json() and express.urlencoded() – handle request bodies for both forms and APIs.

Custom 404 Route – any unmatched route renders the 404.ejs page.

Static Middleware – serves CSS and images from the /public folder.

## Example Usage

Visit the root page / to access the homepage.

Navigate to /socials to view all registered dance socials.

Submit a new review at /comments/review using the built-in form.

Use API routes via Postman or browser to test CRUD endpoints:

POST /socials/addSocials
PATCH /socials/addSocials
DELETE /socials/deleteSocials/:id

## Installation

Clone this repository:

git clone <repo-url>


Install dependencies:

npm install


Run the app:

node index.js


Open in browser:

http://localhost:3000

## Roadmap

Add authentication for user login and review ownership.

Implement search and filtering by dance style using query parameters.

Include file uploads (event flyers or images).

Improve mobile responsiveness of EJS views.

## Author

Victor Stanton
Software Engineer
Email: Victor.Stanton@gmail.com

## License

MIT License © 2025 Victor Stanton
