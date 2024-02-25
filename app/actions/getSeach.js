"use server";
import db from "@/db";

import SearchedCodesModel from "@/models/searchedCodes";

export const getSearched = async () => {
  await db.connectDb();
  const items = await SearchedCodesModel.find();
  return JSON.parse(JSON.stringify(items));
};
