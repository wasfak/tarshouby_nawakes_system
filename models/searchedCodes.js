import { Schema, model, models } from "mongoose";

const searchedCodesSchema = new Schema(
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
    maxNeeded: {
      type: String,
    },
  },
  { timestamps: true }
);

// Create the model from the schema
const SearchedCodesModel =
  models.Search || model("Search", searchedCodesSchema);

export default SearchedCodesModel;
