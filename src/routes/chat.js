import { Router } from "express";

import * as controller from "@root/controllers/chat";

const router = Router();

router.get("/", controller.chat);

export default (app) => {
  app.use("/chat", router);
};
