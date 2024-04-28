import mongoose from "mongoose";

const todosSchema = new mongoose.Schema({
  title: String,
  deadline: Date,
  tag: String,
  category: String,
  description: String,
});

const userSchema = new mongoose.Schema(
  {
    id: {
      type: String,
    },
    name: {
      type: String,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    img: {
      type: String,
    },
    todos: [todosSchema],
    tags: [String],
  },
  { timestamps: true }
);

export const User = mongoose.models.User || mongoose.model("User", userSchema);
