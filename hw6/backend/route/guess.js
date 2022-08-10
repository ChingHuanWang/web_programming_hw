import express from "express";
import getNumber from "../core/getNumber"

const router = express.Router();

function roughScale(num, base){
	const parsed = parseInt(num, base);
	if(isNaN(parsed)){
		return 0;
	}
	return parsed;
}

router.post("/start", (_, res) => {
	getNumber(true);
	res.send({msg : "The game has started!"});
	
})

router.get("/guess", (req, res) => {
	const ans = getNumber(false);
	const guessed = roughScale(req.query.number, 10);

	if(guessed < 1 || guessed > 100){
		res.send({msg: "!"});
	}
	else if(guessed === ans){
		res.send({msg: "="});
	}
	else if(guessed < ans){
		res.send({msg: "<"});
	}
	else if(guessed > ans){
		res.send({msg: ">"});
	}
	
})

router.post("/restart", (_, res) => {
	getNumber(true);
	res.send({msg: "Game restart!"});
})

export default router;