import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  image: {
    type: String,
  },
  lastLogin: {
    type: Date,
  },
});

export const User = mongoose.model("User", userSchema);
