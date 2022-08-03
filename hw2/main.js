
// init
let picSrc = {"London":["./images/1.jpeg", "./images/2.jpeg", "./images/3.jpeg"],
                "Paris":["./images/6.jpeg", "./images/7.jpeg", "./images/8.jpeg"],
                "Tokyo":["./images/9.jpg", "./images/10.jpg", "./images/11.jpg", "./images/12.jpg"]};
// let albumName = "London";
let selectedPreviewToRemove = [];

let tablinks = document.querySelector(".tab").children;
for(var i = 0 ; i < tablinks.length-2 ; i++){
    tablinks[i].addEventListener("click", openAlbum, false);
}
loadDataBasePic(null);

function showViewPic(preview){
    var view = document.querySelector(".sidebody").children[0];
    view.src = preview.src;
    view.style.display = "block";
}


function appendPreview(src){
    if(src != null && src != ""){
        var preview = document.createElement("img");
        var sideBarContent = document.querySelector(".sidebar-content");
        preview.src = src;
        preview.className = "preview-style";
        sideBarContent.appendChild(preview);
        preview.addEventListener("click", ()=>{
            showViewPic(preview);
        })
        preview.addEventListener("dblclick", ()=>{
            preview.style.opacity = 0.5;
            selectedPreviewToRemove.push(preview);
        })
    }
}

function removePreview(preview){
    var albumName = document.querySelector(".sidebar-content").id
    var idx = picSrc[albumName].indexOf(preview.src);
    var sideBarContent = document.querySelector(".sidebar-content");
    console.log(preview.src);
    if(idx > -1){
        
        picSrc[albumName].splice(idx, 1);
        sideBarContent.removeChild(preview);
    }
}

function removeSelectedPreview(){

    for(var i = 0 ; i < selectedPreviewToRemove.length ; i++){
        removePreview(selectedPreviewToRemove[i]);
    }
    selectedPreviewToRemove = [];
}

function flushPrevAlbumPreview(){
    var previewToRemove = document.querySelector(".sidebar-content").children;
    while(previewToRemove.length > 0){
        previewToRemove[0].remove();
    }
}

function loadNetPic(){
    var src = prompt("please enter the picture url");
    picSrc[document.querySelector(".sidebar-content").id].push(src);
    appendPreview(src);
}

function loadDataBasePic(evt){
    // console.log(albumName);
    var albumName = evt === null ? "London" : evt.currentTarget.innerHTML;
    document.querySelector(".sidebar-content").id = albumName;
    if(picSrc[albumName].length === 0) return;
    for(var i = 0; i < picSrc[albumName].length ; i++){
        appendPreview(picSrc[albumName][i]);
    }
    showViewPic(document.querySelector(".sidebar-content").children[0]);
}

function openAlbum(evt){    
    
    flushPrevAlbumPreview();
    loadDataBasePic(evt);
}

function appendAlbum(){
    var albumName = prompt("please enter the new album name");
    var newTablink = document.createElement("button");
    var tab = document.querySelector(".tab");
    document.querySelector(".sidebar-content").id = albumName;
    tab.appendChild(newTablink);
    newTablink.innerHTML = albumName;
    newTablink.className = "tablinks";
    picSrc[albumName] = [];
    flushPrevAlbumPreview();
    newTablink.addEventListener("click", openAlbum, false);
}

function removeAlbum(){
    albumToBeDeleted = prompt("please enter the album name to be deleted");
    var tab = document.querySelector(".tab");
    for(var i = 0 ; i < tab.children.length ; i++){
        if(tab.children[i].innerHTML === albumToBeDeleted){
            tab.children[i].remove();
            break;
        }
    }
    delete picSrc[albumToBeDeleted];
    if(albumToBeDeleted === document.querySelector(".sidebar-content").id){
        flushPrevAlbumPreview();
    }
}



