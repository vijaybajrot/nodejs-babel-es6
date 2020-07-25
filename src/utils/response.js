export function sendOk(response, { data, message = "Ok" }) {
  return response.json({ status: true, message, data });
}
