import { Router } from "express";

import { createContext } from "@root/context";

const router = Router();

function createHandler(ctx, handler) {
  return async function (req, res) {
    ctx = createContext({ req, res });
    let response;

    try {
      response = await Promise.resolve(handler.call(null, ctx));
    } catch (err) {
      return res.json({ error: true, errorDescription: err.toString() });
    }

    return response;
  };
}

export default (ctx, { prefix: path, routes }) => {
  routes.forEach((route) => {
    const args = [route.path];
    const fn = router[route.method.toLowerCase()];

    if (route.middlewares && route.middlewares.length > 0) {
      route.middlewares.forEach((middleware) => args.push(middleware));
    }

    args.push(createHandler.call(null, ctx, route.handler));

    fn.apply(router, args);
  });

  ctx.app.use(path, router);
};
