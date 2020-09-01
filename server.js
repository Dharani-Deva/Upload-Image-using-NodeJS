const express = require("express");
const app = express();
const db = require("./app/models");
const initRoutes = require("./app/routes/imageRouter");

global.__basedir = __dirname;

app.use(express.urlencoded({ extended: true }));
initRoutes(app);

// db.sequelize.sync();
db.sequelize.sync({}).then(() => {
    console.log("sync to db");
});

let port = 3000;
app.listen(port, () => {
    console.log(`Server Running on port ${port}`);
});