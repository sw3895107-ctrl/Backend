const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();

app.use(cors());
app.use(express.json());

/* ======================
   DATABASE CONNECTION
====================== */

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

/* ======================
   MODELS
====================== */

const userSchema = new mongoose.Schema({
  username: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, default: "user" }
}, { timestamps: true });

const fixSchema = new mongoose.Schema({
  title: String,
  description: String,
  category: String,
  status: { type: String, default: "pending" },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
}, { timestamps: true });

const User = mongoose.model("User", userSchema);
const Fix = mongoose.model("Fix", fixSchema);

/* ======================
   MIDDLEWARE
====================== */

const protect = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "Not authorized" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id);
    next();
  } catch (err) {
    res.status(401).json({ message: "Token failed" });
  }
};

const adminOnly = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Admin only" });
  }
  next();
};

/* ======================
   AUTH ROUTES
====================== */

// Register (First user becomes admin)
app.post("/api/auth/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const hash = await bcrypt.hash(password, 10);

    const userCount = await User.countDocuments();

    const user = await User.create({
      username,
      email,
      password: hash,
      role: userCount === 0 ? "admin" : "user"
    });

    res.json({
      message: "User created",
      role: user.role
    });

  } catch (err) {
    res.status(400).json({ error: "Email may already exist" });
  }
});

// Login
app.post("/api/auth/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ message: "Invalid credentials" });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(400).json({ message: "Invalid credentials" });

  const token = jwt.sign(
    { id: user._id },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );

  res.json({
    token,
    role: user.role
  });
});

/* ======================
   FIX ROUTES
====================== */

// Submit Fix (Logged in users)
app.post("/api/fixes", protect, async (req, res) => {
  const { title, description, category } = req.body;

  const fix = await Fix.create({
    title,
    description,
    category,
    user: req.user._id
  });

  res.json(fix);
});

// Public Approved Fixes
app.get("/api/fixes", async (req, res) => {
  const fixes = await Fix.find({ status: "approved" })
    .sort({ createdAt: -1 });

  res.json(fixes);
});

// Admin Approve / Reject
app.patch("/api/admin/:id", protect, adminOnly, async (req, res) => {
  const fix = await Fix.findByIdAndUpdate(
    req.params.id,
    { status: req.body.status },
    { new: true }
  );

  res.json(fix);
});

/* ======================
   SERVER
====================== */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
