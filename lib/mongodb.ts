import mongoose from "mongoose";
import "@/lib/types";
import type { Connection } from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  throw new Error("Please define the MONGO_URI environment variable");
}

let cached = (global.mongoose as any);

if (!cached) {
  cached = (global.mongoose as any) = { conn: null, promise: null };
}

async function connectDB(): Promise<Connection> {
  if (cached.conn) {
    console.log("Using cached MongoDB connection");
    return cached.conn;
  }

  if (!cached.promise) {
    console.log("Creating new MongoDB connection");
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose
      .connect(MONGO_URI!, opts)
      .then((mongoose) => {
        console.log("MongoDB connected successfully");
        return mongoose.connection;
      })
      .catch((error) => {
        console.error("MongoDB connection error:", error);
        cached.promise = null;
        throw error;
      });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

export default connectDB;
