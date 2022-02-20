require("./db/connection");
const express = require("express");
const movieRouter = require("./movies/movieRoutes");
const app = express();
// env var set up for cloud hosting at a later date
const port = process.env.PORT || 5003;

app.use(express.json());

//"static" is our route path, "public is our folder where our static file lives"
// app.use("/static", express.static("public"));

app.use(movieRouter)


// app.use("/books", express.static("public/books.html"));
// app.use("/title", express.static("public/title.html"));
// app.use("/publisher", express.static("public/publisher.html"));


// run the express application with this function
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});