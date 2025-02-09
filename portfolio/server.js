const express = require("express");
const multer = require("multer");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

app.post("/:category", upload.single("file"), (req, res) => {
  const { title, description } = req.body;
  const file = req.file ? `/uploads/${req.file.filename}` : null;

  if (!title || !description || !file) {
    return res.status(400).json({ error: "All fields are required" });
  }

  res.json({ id: Date.now(), title, description, file });
});

app.listen(3001, () => console.log("Server running on port 3001"));
