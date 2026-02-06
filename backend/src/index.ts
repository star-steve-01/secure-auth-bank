import app from "./app.js";

const PORT  = parseInt(process.env.PORT!);
const HOST = process.env.HOST!;

app.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT} ...`);
});