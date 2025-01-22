import mongoose from "mongoose";

export async function connectDb() {
  try {
    const uri = process.env.MONGO_URI;
    if (!uri) throw new Error("Invalid URI");
    await mongoose.connect(uri);
    console.log("Connected to mongo DB");
  } catch (error) {
    console.log(error);
  }
}
