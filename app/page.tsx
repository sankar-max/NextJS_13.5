import Image from "next/image";
import axios from "axios";
import { Metadata } from "next";
import Link from "next/link";
import { getServerSession } from "next-auth";

export const metadata: Metadata = {
  title: "sankar",
};
export default async function Home() {
  const { user } = (await getServerSession()) || {};
  return (
    <div className="">
      getServerSession
      {user ? <h1>{user?.name} Logged</h1> : <h1>not logged yet</h1>}
      <Image
        alt="img"
        src={user?.image ?? ""}
        width={140}
        height={140}
        className="rounded-full"
      />
    </div>
  );
}
