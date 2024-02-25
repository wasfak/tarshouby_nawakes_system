"use server";
import db from "@/db";
import ExpModel from "@/models/expSchema";
import SearchedCodesModel from "@/models/searchedCodes";

export const getExp = async () => {
  await db.connectDb();
  const items = await ExpModel.find();
  return JSON.parse(JSON.stringify(items));
};

export async function handleSubmit(formData) {
  const code = formData.get("code");
  const name = formData.get("name");
  const company = formData.get("company");
  const maxNeeded = formData.get("maxNeeded");

  await db.connectDb();
  const searchedCode = await SearchedCodesModel.create({
    name,
    code,
    company,
    maxNeeded,
  });
  return { message: "Success!" };

  // Logic to process form data on the server
}
