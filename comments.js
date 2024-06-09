// Create web server
// Create a web server using express
const express = require("express");
const app = express();

// Create a web server using express
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Create a web server using express
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

// Create a web server using express
// Install nodemon
// nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.
// To install nodemon, run the following command:
// npm install -g nodemon
// To run the application, use the following command:
// nodemon comments.js
// Now, you can see the server is running on port 3000. If you change the code, nodemon will restart the server automatically.

// Create a web server using express
// Send HTML content
app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

// Create a web server using express
// Send JSON
app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

// Create a web server using express
// Send a file
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// Create a web server using express
// Use the express.static middleware
app.use(express.static("public"));

// Create a web server using express
// Create a new file named public/index.html with the following content:
// <!DOCTYPE html>
// <html>
// <head>
//     <title>Express</title>
// </head>
// <body>
//     <h1>Hello World!</h1>
// </body>
// </html>

// Create a web server using express
// Create a new file named public/about.html with the following content:
// <!DOCTYPE html>
// <html>
// <head>
//     <title>About</title>
// </head>
// <body>
//     <h1>About</h1>
// </body>
// </html>

// Create a web server using express
// Create a new file named public/contact.html with the following content:
// <!DOCTYPE html>
// <html>
// <head>
//     <title>Contact</title>
// </head>
// <
