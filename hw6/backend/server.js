import express from "express";
import guessRoute from "./route/guess";
import cors from "cors";

const app = express();

app.use(cors());
app.use("/api/guess", guessRoute);

const port = process.env.PORT || 4000;

app.listen(port, () => {
	console.log(`Server is listening port ${port}.`);
})