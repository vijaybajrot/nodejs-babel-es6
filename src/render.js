import path from "path";
import express from "express";

async function render(context) {
  const { app } = context;

  const clientDirPath = path.join(__dirname, "../", "client");
  const buildDirPath = path.join(clientDirPath, "build");
  const staticDirPath = path.join(buildDirPath, "static");

  app.use("/static", express.static(staticDirPath));

  app.get("**", (req, res) => {
    res.sendFile(path.join(buildDirPath, "index.html"));
  });
}

export default render;
