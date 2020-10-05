import context from "@root/context";

export function sendOk({ data, message = "Ok" }) {
  const { res } = context;
  return res.json({ status: true, message, data });
}
