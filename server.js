import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

/* DATABASE */

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error(err))

/* MODELS */

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String
}, { timestamps: true })

const fixSchema = new mongoose.Schema({
  code: String,
  vehicle: String,
  symptoms: String,
  solution: String,
  costSaved: Number,
  approved: { type: Boolean, default: true }
}, { timestamps: true })

const User = mongoose.model("User", userSchema)
const Fix = mongoose.model("Fix", fixSchema)

/* AUTH */

const protect = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]
  if (!token) return res.status(401).json({ message: "No token" })

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user = decoded
    next()
  } catch {
    res.status(401).json({ message: "Invalid token" })
  }
}

/* ROUTES */

app.get("/", (req, res) => {
  res.send("Garage Wisdom API Running")
})

app.post("/api/register", async (req, res) => {
  const { name, email, password } = req.body
  const hash = await bcrypt.hash(password, 10)
  const user = await User.create({ name, email, password: hash })
  res.json(user)
})

app.post("/api/login", async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })
  if (!user) return res.status(400).json({ message: "Invalid credentials" })

  const match = await bcrypt.compare(password, user.password)
  if (!match) return res.status(400).json({ message: "Invalid credentials" })

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" })
  res.json({ token })
})

app.get("/api/fixes", async (req, res) => {
  const fixes = await Fix.find({ approved: true })
  res.json(fixes)
})

app.post("/api/fixes", protect, async (req, res) => {
  const fix = await Fix.create(req.body)
  res.json(fix)
})

/* START */

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log("Server running on port " + PORT))
