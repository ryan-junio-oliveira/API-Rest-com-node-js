import express from "express";
import bodyParser from "body-parser";

const port = 3001;
const app = express();

app.use(bodyParser.json());
app.listen(port, () => {
  console.log(`server listen on http://localhost:${port}`);
})

export default app;