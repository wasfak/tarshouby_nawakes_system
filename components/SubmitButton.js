"use client";

import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";

export default function SubmitButton() {
  const { pending, response, error } = useFormStatus();

  return (
    <>
      <Button type="submit">{pending ? "loading..." : "Submit"}</Button>
    </>
  );
}
