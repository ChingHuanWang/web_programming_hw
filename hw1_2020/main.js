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

function showLoadingGif(state){
    let pic = document.getElementById("display");
    if(state){
        pic.src = "./images/loading.gif";
    }
    else{
        return;
    }
    
}

function showPic(idx){
    let pic = document.getElementById("display");
    let ref = document.getElementById("ref");
    showLoadingGif(true);
    pic.onload = function(){
        showLoadingGif(false);
    }
    pic.src = pics[idx]["ref"];
    ref.href = pics[idx]["ref"];
    ref.innerHTML = pics[idx]["ref"];
}

function backButton(disabled){
    if(disabled){
        document.getElementById("back").className = "disabled";
    }
    else{
        document.getElementById("back").className = "image-viewer__button"
    }
}

function nextButton(disabled){
    if(disabled){
        document.getElementById("next").className = "disabled";
    }
    else{
        document.getElementById("next").className = "image-viewer__button";
    }
}

function buttonStyle(){
    backButton(cursor === 0);
    nextButton(cursor === (pics.length-1));
}


function showNextPic(){
    buttonStyle();
    if(cursor === pics.length-1){
        return 
    }
    else{
        cursor++;
        showPic(cursor)
    }
    buttonStyle();
}

function showBackPic(){
    buttonStyle();
    if(cursor === 0){
        return 
    }
    else{
        cursor--;
        showPic(cursor);
    }
    buttonStyle();
}