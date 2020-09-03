import express from "express";
import { calculateBmi, parseArguments } from "./bmiCalculator";

const app = express();

app.get("/hello", (_req, res) => {
  res.send("Hello Full Stack!");
});

app.get("/bmi", (req, res) => {
  try {
    const { height, weight } = req.query;
    const data = calculateBmi(parseArguments([height, weight]));
    res.json({ height, weight, bmi: data });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

const PORT = 3002;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
