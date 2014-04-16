# Angular Express Seed

Create amazing web apps using angular v1.2.9 and express 4.0.0.

The seed contains angular and the angular route libraries. Any other libraries will need to be added.

## How to use seed project

Clone the seed repository, run `npm install` to grab the dependencies, and start creating!

### Running the app

Runs like a typical express app:

    node app.js

### Running tests

None yet.

## Directory Layout
    
    app.js              --> app config
    package.json        --> for npm
    public/             --> all of the files to be used in on the client side
      css/              --> css files
        app.css         --> default stylesheet
      img/              --> image files
      js/               --> javascript files
        app.js          --> declare top-level app module
        controllers.js  --> application controllers
        directives.js   --> custom angular directives
        filters.js      --> custom angular filters
        services.js     --> custom angular services
        lib/            --> angular and 3rd party JavaScript libraries
          angular/
            angular.js            --> the latest angular js
            angular.min.js        --> the latest minified angular js
            angular-*.js          --> angular add-on modules
    routes/
      index.js          --> route for serving HTML pages and partials
    views/
      index.html        --> main page for app
      partials/         --> angular view partials (partial)
        partial1.html
        partial2.html



## Contact

For more information on AngularJS please check out http://angularjs.org/
For more on Express http://expressjs.com/

## License
MIT
