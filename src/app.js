import express from "express";

import connection from "@root/connection";
import config from "@root/config";
import renderApp from "@root/render";
import { registerRoutes } from "@root/routes";
import { createContext } from "@root/context";

export async function start() {
  const app = express();
  const PORT = config.port;
  const context = createContext({ app, config });

  //Register app routes
  registerRoutes(context);

  //Connect to db
  connection.authenticate();

  //Render app
  renderApp(context);

  app.listen(PORT, () => console.log(`App running on ${PORT}.`));
}
