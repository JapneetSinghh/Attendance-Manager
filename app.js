// Importing Express
const express = require("express");
const app = express();

// Importing Path
const path = require("path");

// Serving public folder as static 
app.use(express.static(path.join(__dirname,'public')));

// Importing Body Parser
const bodyParse=require('body-parser');
app.use(bodyParse.urlencoded({encoded:false}));

// Setting Template Engine Ejs
app.set('view engine','ejs');
app.set('views','views');

// Adding Home Page Routes
const homePageRoutes = require("./routes/home");
app.use(homePageRoutes.router);

// Adding 404 page
const errorController= require("./controller/error/error");
app.use(errorController.get404)



// Setting Up the port
const port = process.env.PORT || 3000;
// Starting the server
app.listen(port, () => {
    console.log('Listening on port 3000');
})

// 1 npm init
// 2 npm install --save-dev nodemon
// 3 npm install --save express
// 4 npm install --save ejs
// 5 npm install --save body-parser