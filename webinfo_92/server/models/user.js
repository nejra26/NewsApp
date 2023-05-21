import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: { type: String, required:  true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  id: { type: String },
  role: { type: String, default: "guest", enum:["guest", "user", "admin"]}
});

export default mongoose.model("User", userSchema);