import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

/* =========================
   DATABASE CONNECTION
========================= */

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("Mongo Error:", err));

/* =========================
   MODELS
========================= */

const userSchema = new mongoose.Schema({
  username: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, default: "user" }
}, { timestamps: true });

const fixSchema = new mongoose.Schema({
  code: String,
  vehicle: String,
  symptoms: String,
  solution: String,
  costSaved: Number,
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  status: { type: String, default: "pending" }
}, { timestamps: true });

const User = mongoose.model("User", userSchema);
const Fix = mongoose.model("Fix", fixSchema);

/* =========================
   AUTH MIDDLEWARE
========================= */

const protect = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "No token" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch {
    res.status(401).json({ message: "Invalid token" });
  }
};

const adminOnly = (req, res, next) => {
  if (req.user.role !== "admin")
    return res.status(403).json({ message: "Admin only" });
  next();
};

/* =========================
   AUTH ROUTES
========================= */

app.post("/api/auth/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hash = await bcrypt.hash(password, 10);

    const user = await User.create({
      username,
      email,
      password: hash
    });

    res.json({ message: "User created" });
  } catch (err) {
    res.status(400).json({ error: "Email may already exist" });
  }
});

app.post("/api/auth/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ message: "User not found" });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(400).json({ message: "Invalid password" });

  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET
  );

  res.json({ token });
});

/* =========================
   FIX ROUTES
========================= */

// Get approved fixes (search optional)
app.get("/api/fixes", async (req, res) => {
  const q = req.query.q;

  const filter = q
    ? {
        status: "approved",
        $or: [
          { code: { $regex: q, $options: "i" } },
          { symptoms: { $regex: q, $options: "i" } }
        ]
      }
    : {};

  const fixes = await Fix.find(filter).sort({ createdAt: -1 });
  res.json(fixes);
});

// Submit fix (must be logged in)
app.post("/api/fixes", protect, async (req, res) => {
  const fix = await Fix.create({
    ...req.body,
    author: req.user.id
  });

  res.json({ message: "Fix submitted for approval" });
});

/* =========================
   ADMIN ROUTES
========================= */

// View pending fixes
app.get("/api/admin/pending", protect, adminOnly, async (req, res) => {
  const fixes = await Fix.find({ status: "pending" });
  res.json(fixes);
});

// Approve or reject fix
app.patch("/api/admin/:id", protect, adminOnly, async (req, res) => {
  const fix = await Fix.findByIdAndUpdate(
    req.params.id,
    { status: req.body.status },
    { new: true }
  );

  res.json(fix);
});

/* =========================
   ROOT CHECK
========================= */

app.get("/", (req, res) => {
  res.send("Garage Wisdom API Running");
});

/* =========================
   START SERVER
========================= */

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server running on port " + PORT));
