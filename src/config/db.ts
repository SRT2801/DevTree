import mongoose from "mongoose";
import colors from "colors";

export const connectDB = async () => {
  try {
    const MONGO_URI = process.env.MONGO_URI;
    const { connection } = await mongoose.connect(MONGO_URI);
    const url = `${connection.host}:${connection.port}`;
    console.log(colors.bgCyan.underline.bold(`MongoDB connected: ${url}`));
  } catch (error) {
    console.log(colors.bgRed.bold(error.message));
    process.exit(1);
  }
};
