const express = require ("express");
const path = require("path")

var PORT = process.env.PORT || 8080;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
// app.use(express.static("public"));
app.use("/public", express.static(("./public")));
// app.use(express.static(__dirname + '/public'));
// app.use(express.static(path.join(__dirname , "../" , "/public")));


// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

// exphbs.registerPartials(path.join(__dirname, "../", "/views/partials"));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burger_controller.js"); ///CATSCONTROLLERS??

app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});