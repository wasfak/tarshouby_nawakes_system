import { Schema, model, models } from "mongoose";

const expSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    code: {
      type: String,
    },
    company: {
      type: String,
    },
    exp: {
      type: String,
    },
    kmya: {
      type: String,
    },
  },
  { timestamps: true }
);

// Create the model from the schema
const ExpModel = models.Exp || model("Exp", expSchema);

export default ExpModel;
