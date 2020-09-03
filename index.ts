import express from "express";
import { calculateBmi } from "./bmiCalculator";

const app = express();

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

const PORT = 3002;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
