import axios from "axios";

const Page = async () => {
  const { data } = (await axios.get("/api/register")) || {};

  console.log(data);
  return <div className="">sankars</div>;
};

export default Page;
