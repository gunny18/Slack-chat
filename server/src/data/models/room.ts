import mongoose from "mongoose";

const roomSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    imageURL: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Room = mongoose.model("Room", roomSchema);
