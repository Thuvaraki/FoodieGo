import express from "express";
import multer from "multer";
import {
  addFood,
  listFood,
  removeFood,
} from "../controllers/foodController.js";

const foodRouter = express.Router();

//Image Store Engine
const storage = multer.diskStorage({
  destination: "uploads", // specifies the directory where uploaded files will be stored
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`); // specifies the naming convention for the uploaded files,to make it unique using Date
  },
});

const upload = multer({ storage: storage }); //storage object configures where and how uploaded files are stored.

foodRouter.post("/add", upload.single("image"), addFood);
foodRouter.get("/list", listFood);
foodRouter.post("/remove", removeFood);

export default foodRouter;
