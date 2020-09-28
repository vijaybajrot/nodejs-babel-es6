export function sendOk(response, { data, message = "Ok" }) {
  return response.json({ status: true, message, data });
}

export function sum(x = 0, y = 0) {
  return x + y;
}
