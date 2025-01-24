import mongoose from "mongoose";

const namespaceSchema = new mongoose.Schema(
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
    endpoint: {
      type: String,
      required: true,
    },
    rooms: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Room",
      },
    ],
  },
  { timestamps: true }
);

export const Namespace = mongoose.model("Namespace", namespaceSchema);
