import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function ProtectedRoute() {
  const { user } = (await getServerSession()) || {};

  if (!user) return redirect("/api/auth/signin");

  return <div className="">This protected route</div>;
}
