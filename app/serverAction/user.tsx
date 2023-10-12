import { useState } from "react";
import ServerActionPage from "./page";

export default function User({
  ServerActionPage,
}: {
  ServerActionPage: () => Promise<string>;
}) {
  const [name, setName] = useState("");
  return (
    <div className="">
      <button
        onClick={async () => {
          await ServerActionPage();
        }}
      >
        Who Am I?
      </button>

      {name && <h1>You are{name}</h1>}
    </div>
  );
}
