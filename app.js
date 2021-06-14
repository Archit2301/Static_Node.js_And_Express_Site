const express = require('express');

const app = express();

app.use('/static', express.static('public'));       // Using static to access the files in the public folder

app.set('view engine', 'pug');                      // Setting the view engine to pug

// Including route module for projects, index and about page
const mainRoutes = require('./routes');             
const projectRoutes = require('./routes/project');

app.use(mainRoutes);
app.use('/project', projectRoutes);

/**
  * Middleware defined for Error Handling
  * @param (object) req - object to send request to the server
  * @param (object) res - object to send data to the client
  * @param (object) next - this will pass the error to the next middleware
  */

app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// * @param (object) err - object to store the error

app.use((err, req, res, next) => {
    res.locals.error = err;         // locals defined to use the error in the template
    res.status(err.status);
    console.log('Error: Sorry! this page was not found...');
    res.render('error');
});

// Method to run the application on localhost using port number 3000

app.listen(3000, () => {
    console.log('This application is running on localhost:3000');
});
