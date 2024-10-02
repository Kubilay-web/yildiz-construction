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
    path.join(__dirname, "public", "Index-En", "Index", "index.html")
  );
});

app.get("/projects", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index-En", "Projects", "index.html")
  );
});

app.get("/who-we-are", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index-En", "Who-we-are", "index.html")
  );
});

app.get("/capabilities", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index-En", "capabilities", "index.html")
  );
});

app.get("/news", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index-En", "news", "index.html")
  );
});

app.get("/videos", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index-En", "videos", "index.html")
  );
});

app.get("/contact", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index-En", "contact", "index.html")
  );
});

app.get("/trade-partners", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index-En", "trade-partners", "index.html")
  );
});

app.get("/careers", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index-En", "careers", "index.html")
  );
});

app.get("/plan-room", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index-En", "plan-room", "index.html")
  );
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
