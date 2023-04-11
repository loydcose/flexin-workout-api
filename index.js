import express from "express"
import selectWorkouts from "./workouts.js"

const app = express()

app.get("/workouts", (req, res) => {
  const { part, difficulty } = req.query
  const workouts = selectWorkouts(part, difficulty)
  res.json(workouts)
})

app.listen(5000, () => {
  console.log("Server started")
})
