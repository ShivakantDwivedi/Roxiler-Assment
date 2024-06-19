import mongoose from "mongoose";

// Defining the schema for your data
const transactionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  price: {
    type: Number,
    required: true,
  },
  dateOfSale: {
    type: Date,
    required: true,
  },
});

export const Transaction = mongoose.model("Transaction", transactionSchema);


