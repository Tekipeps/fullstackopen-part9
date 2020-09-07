import express from "express";
import { calculateBmi } from "./bmiCalculator";
import { calculateExercises } from "./exerciseCalculator";

interface exerciseBody {
  daily_exercises: Array<number>;
  target: number;
}

const app = express();
app.use(express.json());

app.get("/hello", (_req, res) => {
  res.send("Hello Full Stack!");
});

app.get("/bmi", (req, res) => {
  const { height, weight } = req.query;
  const isValid: boolean = !isNaN(Number(height)) && !isNaN(Number(weight));
  if (isValid) {
    const bmi = calculateBmi({
      height: Number(height),
      weight: Number(weight),
    });
    return res.json({ height, weight, bmi });
  } else {
    return res.status(400).json({ error: "malformatted parameters" });
  }
});

app.get("/exercises", (req, res) => {
  const { daily_exercises, target }: exerciseBody = req.body as exerciseBody;
  const isValid: boolean =
    Array.isArray(daily_exercises) &&
    daily_exercises.every((n) => isNaN(Number(n)) === false) &&
    isNaN(Number(target)) === false
      ? true
      : false;
  if (isValid) {
    const data = calculateExercises(daily_exercises, target);
    return res.json(data);
  }
  return res.status(400).json({ error: "malformatted parameters" });
});

const PORT = 3002;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
