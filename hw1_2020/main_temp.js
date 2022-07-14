// pics array and pics element
pics = [
	{ref: 'https://i.pinimg.com/736x/81/04/93/810493ab323a48ff2bb687251af7a980.jpg',
		alt: 'Makes a small change to CSS'},
	{ref: 'https://pbs.twimg.com/media/EQCQoUPU4AA3WSP.jpg',
		alt: 'Dear santa I want to create a OS using html'},
	{ref: 'https://i.redd.it/bptzx7ur4uj11.jpg',
		alt: 'Add CSS to your website'},
	{ref: 'https://i.redd.it/latsyqzaqnq21.jpg',
		alt: "Let's rewrite the CSS"},
	{ref: 'https://i.redd.it/71dznjo9vpo51.jpg',
		alt: 'Monster under my bed'},
	{ref: 'https://i.redd.it/uodhu7yjqqo51.png',
		alt: 'Thinking vs. writing a new program'},
	{ref: 'https://i.redd.it/bxe3rq3n6qo51.png',
		alt: 'AI Algorithms'},
	{ref: 'https://i.redd.it/8enervg2wjo51.jpg',
		alt: 'Garbage Collection'},
	{ref: 'https://i.redd.it/y8557q7asso51.png',
		alt: 'Not a bug, its a feature'},
	{ref: 'https://ph-files.imgix.net/caf5608a-67ec-4f9f-acb5-db0052c33bed?auto=format',
		alt: 'Party parrot'}
];
let cursor = 0;
let previous_btn = document.getElementById('previous');
let next_btn = document.getElementById('next');

function ShowPic(index){
	let display = document.getElementById('display');
	let display_source = document.getElementById('display_source');

	display.alt = pics[index]['alt'];
	display_source.href = pics[index]['ref'];
	display_source.innerHTML = pics[index]['ref'];

	display.src = pics[index]['ref'];
}

function block_prev(disabled) {
	if(disabled){
		previous_btn.className = 'disabled';
		previous_btn.onclick = undefined;
	}
	else{
		previous_btn.className = '';
		previous_btn.onclick = ShowPrevPic;
	}
}
function block_next(disabled) {
	if(disabled){
		next_btn.className = 'disabled';
		next_btn.onclick = undefined;
	}
	else{
		next_btn.className = '';
		next_btn.onclick = ShowNextPic;
	}
}
function button_check() {
	block_prev(cursor === 0);
	block_next(cursor === (pics.length - 1));
}

function ShowPrevPic() {
	document.getElementById('display').src = './images/loading.gif';
	setTimeout(() => {
		ShowPic(--cursor);
		button_check();
	}, 1);
}
function ShowNextPic() {
	document.getElementById('display').src = './images/loading.gif';
	setTimeout(() => {
		ShowPic(++cursor);
		button_check();
	}, 1);
}

ShowPic(cursor);
button_check();