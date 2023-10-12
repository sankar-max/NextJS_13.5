import { getServerSession } from "next-auth";
import User from "./user";

export default async function ServerActionPage() {
  const who = async () => {
    "use server";

    const { user } = (await getServerSession()) || {};
    return user?.name || "not logged in";
  };

  return;

  <div>
    <User ServerActionPage={who} />
  </div>;
}
