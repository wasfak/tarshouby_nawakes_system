"use client";
import { useState, useRef } from "react";

import { handleSubmit } from "@/app/actions/getExp";
import SubmitButton from "./SubmitButton";

export default function Form() {
  const [message, setMessage] = useState("");
  const ref = useRef(null);
  async function onCreate(formData) {
    const res = await handleSubmit(formData);
    ref.current?.reset();
    setMessage(res.message);
  }

  return (
    <div>
      <form
        ref={ref}
        action={onCreate}
        className="flex flex-col gap-4 bg-white p-6 rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-semibold text-gray-800">Enter Details</h2>

        <label htmlFor="code" className="flex flex-col gap-1">
          <input
            name="code"
            type="text"
            required
            placeholder="Code"
            className="form-input mt-1 block w-full border-gray-300 shadow-sm rounded-md focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>

        <label htmlFor="name" className="flex flex-col gap-1">
          <input
            name="name"
            type="text"
            required
            placeholder="Name"
            className="form-input mt-1 block w-full border-gray-300 shadow-sm rounded-md focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>

        <label htmlFor="company" className="flex flex-col gap-1">
          <input
            name="company"
            type="text"
            required
            placeholder="Company"
            className="form-input mt-1 block w-full border-gray-300 shadow-sm rounded-md focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>

        <label htmlFor="maxNeeded" className="flex flex-col gap-1">
          <input
            name="maxNeeded"
            type="number"
            required
            placeholder="Max Needed"
            className="form-input mt-1 block w-full border-gray-300 shadow-sm rounded-md focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>
        <SubmitButton>Submit</SubmitButton>
        <p>{message}</p>
      </form>
    </div>
  );
}
