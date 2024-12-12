import dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
import mongoose from "mongoose";

import User from "./models/user.js";

import testJWTRouter from "./controllers/test-jwt.js";
import userRouter from "./controllers/user.js";
import profilesRouter from './controllers/profiles.js'

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on("connected", () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

app.use(express.json());
app.use("/test-jwt", testJWTRouter);
app.use("/users", userRouter);
app.use("/profiles", profilesRouter)

// Routes go here

app.listen(3000, () => {
  console.log("The express app is ready!");
});
