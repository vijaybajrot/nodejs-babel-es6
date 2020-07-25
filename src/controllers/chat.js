import User from "@root/models/User";

import { sendOk } from "@root/utils/response";

export async function chat(req, res) {
  const data = {
    users: await User.findAll(),
  };

  return sendOk(res, { data, message: "chat working" });
}
