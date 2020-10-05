import chat from "./chat";

const routes = [chat];

export function registerRoutes(ctx) {
  routes.forEach((route) => route.apply(null, [ctx]));
}
