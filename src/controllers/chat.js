import User from "@root/models/User";
import { sendOk } from "@root/utils/response";

export async function chat() {
  const data = {
    users: await User.findAll(),
  };

  return sendOk({ data, message: "chat working" });
}
