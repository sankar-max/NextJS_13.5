import client from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  let name;
  try {
    const { username } = await req.json();
    const userDetail = await client.user.findFirst({
      where: {
        userName: username,
      },
    });
    name = userDetail;
    console.log(userDetail);
  } catch (error) {}

  return NextResponse.json({ name });
}
