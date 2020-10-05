import * as controller from "@root/controllers/chat";

import router from "@root/router";

const testMiddleware = async (req, res, next) => {
  console.log("middleware called");
  next();
};

const routes = [
  {
    method: "GET",
    path: "/",
    handler: controller.chat,
    middlewares: [testMiddleware],
  },
];

export default (ctx) => {
  return router(ctx, { prefix: "/chat", routes });
};
