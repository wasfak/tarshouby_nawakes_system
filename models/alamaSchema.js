import { Schema, model, models } from "mongoose";

const alamaSchema = new Schema(
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
    sales: {
      type: String,
    },
    order: {
      type: String,
    },
    stock: {
      type: String,
    },
  },
  { timestamps: true }
);

// Create the model from the schema
const AlamaModel = models.Alama || model("Alama", alamaSchema);

export default AlamaModel;
