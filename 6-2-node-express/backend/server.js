import express from "express";
import cors from "cors";
import { getRandomQuote } from "./quotes.js";

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
{/*write code for cors*/}
app.use(cors());

{/*write code to define routes*/}
app.get("/", (req, res) => {
  res.send("Welcome to the Quote Generator API");
});

{/*write code to create server*/}
app.get("/api/quote", (req, res) => {
  const quote = getRandomQuote();
  res.json({ quote });
});