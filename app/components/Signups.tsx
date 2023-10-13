"use client";

import { FormEvent } from "react";

export default function SignUp() {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const res = await fetch("/api/retrieve", {
      method: "POST",
      body: JSON.stringify({
        username: data.get("username"),
      }),
    });

    console.log(res);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" />
      <button type="submit">submit</button>
    </form>
  );
}
