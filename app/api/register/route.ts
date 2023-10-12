export async function GET(req: Request, res: Response) {
  const { method } = req || {};

  if (req.method === "POST") return Response.json("");
  const user = {
    name: "sankar",
  };
  return Response.json({ data: user, status: 200 });
}
