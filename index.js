import passport from "./config/passport.js";
import userController from "./controllers/users.js";
import express from "express";
const app = express();
import router from "./routes/index.js";

app.use(passport.initialize());
app.use('/users', userController);

app.use(express.json());
app.use(router);

app.listen(3000, () => console.log("I hear you sneaking around on Port 3000"));
