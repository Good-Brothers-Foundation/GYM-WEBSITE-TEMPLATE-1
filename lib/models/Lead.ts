import mongoose, { Schema, Document } from "mongoose";

export interface ILead extends Document {
  name: string;
  phone: string;
  createdAt: Date;
}

const leadSchema = new Schema<ILead>(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      minlength: [2, "Name must be at least 2 characters"],
    },
    phone: {
      type: String,
      required: [true, "Phone is required"],
      trim: true,
      match: [/^\d{10}$/, "Phone must be 10 digits"],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

// Prevent model re-instantiation in development
const Lead = mongoose.models.Lead || mongoose.model<ILead>("Lead", leadSchema);

export default Lead;
