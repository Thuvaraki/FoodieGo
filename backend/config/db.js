import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://FoodieGo:n4FiSNAJfdSkkfgN@cluster0.wyocwfe.mongodb.net/FoodieGo?retryWrites=true&w=majority&appName=Cluster0"
    )
    .then(() => console.log("DB connected"));
};
