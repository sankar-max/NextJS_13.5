import client from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { username, password } = await req.json();
    console.log({ username, password });

    const createUser = await client.user.create({
      data: {
        userName: username,
        hasedPassword: password,
      },
    });
  } catch (error) {
    console.log(error);
  }
  return NextResponse.json({ message: "successfully send" });
}
