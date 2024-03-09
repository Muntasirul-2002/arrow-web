import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import cors from "cors";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";

//Configure env
dotenv.config();

//db config
connectDB();
//rest object
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

//rest api

app.get("/", (req, res) => {
  res.send("Welcome to Arrow Publication pvt. ltd.");
});

const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
