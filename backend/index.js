import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import helmet from "helmet";
import path from "path";
import morgan from "morgan";
import multer, { diskStorage } from "multer";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { register } from "module";

const URL = process.env.URL;
const PORT = process.env.PORT || 3001;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(helmet());

app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));

app.use(morgan("common"));

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use("/assets", express.static(path.join(__dirname, "public/assets")));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/assets");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

app.post("/auth/register", upload.single("picture"), register);
//mongodb connect
mongoose
  .connect("mongodb://localhost:27017/socialmedia")
  .then(() => console.log("Mongodb is connected"))
  .catch((err) => console.log("error", err));
app.listen(PORT, () => {
  console.log(`Server started ${PORT}`);
});
