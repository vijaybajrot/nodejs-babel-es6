import chat from "./chat";

const routes = [chat];

export function registerRoutes(app) {
  routes.forEach((route) => route.apply(null, [app]));
}
