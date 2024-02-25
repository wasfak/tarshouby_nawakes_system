"use server";
import db from "@/db";
import AlamaModel from "@/models/alamaSchema";

export const getAlama = async () => {
  await db.connectDb();
  const items = await AlamaModel.find();
  return JSON.parse(JSON.stringify(items));
};
