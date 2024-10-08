const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();
const port = 3001;

app.use(
  cors({
    origin: "*",
  })
);

app.use((req, res, next) => {
  // Temiz URL oluştur
  const cleanUrl = req.protocol + "://" + req.get("host") + req.path;

  // Eğer sorgu parametreleri varsa yönlendir
  if (req.query && Object.keys(req.query).length > 0) {
    return res.redirect(cleanUrl);
  }

  next(); // İleriye devam et
});

app.use(express.static(path.join(__dirname, "/public")));
app.use("/public", express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index-Ger", "Index", "index.html")
  );
});

app.get("/projects", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index-Ger", "Projects", "index.html")
  );
});

app.get("/who-we-are", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index-Ger", "Who-we-are", "index.html")
  );
});

app.get("/capabilities", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index-Ger", "capabilities", "index.html")
  );
});

app.get("/news", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index-Ger", "news", "index.html")
  );
});

app.get("/videos", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index-Ger", "videos", "index.html")
  );
});

app.get("/contact", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index-Ger", "contact", "index.html")
  );
});

app.get("/trade-partners", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index-Ger", "trade-partners", "index.html")
  );
});

app.get("/careers", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index-Ger", "careers", "index.html")
  );
});

app.get("/plan-room", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index-Ger", "plan-room", "index.html")
  );
});

app.get("/static/css/glider.6f8873f.css", (req, res) => {
  res.setHeader("Content-Type", "text/css");
  res.sendFile(
    path.join(__dirname, "public", "static", "css", "glider.6f8873f.css")
  );
});

app.get("/static/css/projects.aba1ea5.css", (req, res) => {
  res.setHeader("Content-Type", "text/css");
  res.sendFile(
    path.join(__dirname, "public", "static", "css", "projects.aba1ea5.css")
  );
});

app.get("/static/js/polyfills.pro~gli.e3f7486.js", (req, res) => {
  res.setHeader("Content-Type", "application/javascript");
  res.sendFile(
    path.join(
      __dirname,
      "public",
      "static",
      "js",
      "polyfills.pro~gli.e3f7486.js"
    )
  );
});

app.get("/static/js/parallax.7a2e277.js", (req, res) => {
  res.setHeader("Content-Type", "application/javascript");
  res.sendFile(
    path.join(__dirname, "public", "static", "js", "parallax.7a2e277.js")
  );
});

app.get("/static/js/vendors.pro~gli.fb47926.js", (req, res) => {
  res.setHeader("Content-Type", "application/javascript");
  res.sendFile(
    path.join(__dirname, "public", "static", "js", "vendors.pro~gli.fb47926.js")
  );
});

app.get("/static/js/projects.037d52b.js", (req, res) => {
  res.setHeader("Content-Type", "application/javascript");
  res.sendFile(
    path.join(__dirname, "public", "static", "js", "projects.037d52b.js")
  );
});

app.get("/static/js/glider.3a6232b.js", (req, res) => {
  res.setHeader("Content-Type", "application/javascript");
  res.sendFile(
    path.join(__dirname, "public", "static", "js", "glider.3a6232b.js")
  );
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
