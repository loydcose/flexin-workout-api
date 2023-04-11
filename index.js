import express from "express"
import selectWorkouts from "./workouts.js"

const app = express()

app.get("/workouts", (req, res) => {
  const { part, difficulty } = req.query
  const workouts = selectWorkouts(part, difficulty)
  res.json(workouts)
})

const port = process.env.port || 5000

app.listen(port, () => {
  console.log("Server started")
})
