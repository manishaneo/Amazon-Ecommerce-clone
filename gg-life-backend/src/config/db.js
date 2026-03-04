import mongoose from "mongoose";

let connection = null;

const connectDB = async () => {
  if (connection) {
    console.log("Using existing database connection");
    return connection;
  }

  try {
    connection = await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB Connected:", connection.connection.host);

    return connection;
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

export default connectDB;