import express from "express";

import { registerRoutes } from "@root/routes";
import connection from "@root/connection";
import config from "@root/config";

export async function start() {
  const app = express();
  const PORT = process.env.PORT || 3000;
  const mode = process.env.NODE_ENV;

  //Register app routes
  registerRoutes(app);

  //Connect to db
  connection.authenticate();

  app.listen(PORT, () => console.log(`App running on ${PORT}`));
}
