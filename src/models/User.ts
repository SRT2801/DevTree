import moongose from "mongoose";

interface IUser {
  handle: string;
  name: string;
  email: string;
  password: string;
}

const userSchema = new moongose.Schema({
  handle: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
  },

  name: {
    type: String,
    required: true,
    trim: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },

  password: {
    type: String,
    required: true,
    trim: true,
  },
});

const User = moongose.model<IUser>("User", userSchema);
export default User;
