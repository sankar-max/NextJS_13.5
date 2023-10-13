"use client";

import { FormEvent } from "react";

const LoginForm = () => {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    const res = await fetch("/api/register", {
      method: "POST",

      body: JSON.stringify({
        username: data.get("username"),
        password: data.get("password"),
      }),
    });

    console.log({ res });
  };
  return (
    <form onSubmit={handleSubmit} className="">
      <input name="username" type="text" />
      <input name="password" type="text" />

      <button type="submit">submit</button>
    </form>
  );
};

export default LoginForm;
