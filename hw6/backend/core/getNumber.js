let ans = 0;


function getNumber(genAns = true){
	if(genAns){
		ans = Math.floor(Math.random()*100)+1;
	}
	else return ans;
}

export default getNumber