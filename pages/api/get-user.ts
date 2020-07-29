import { NowRequest, NowResponse } from "@vercel/node";
import axios from "axios";

export default async (req: NowRequest, res: NowResponse) => {
  res.setHeader("Cache-Control", "s-maxage=86400");
  const repos = await axios.get("https://api.github.com/users/LeoPeres/repos");
  res.json(repos.data);
};
