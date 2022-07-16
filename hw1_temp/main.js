var picSrc = [[], [], []];
var picNum = [0, 0, 0];






function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

function openViewPic(evt, cityName){
    var preview = evt.currentTarget;
    var city = document.getElementById(cityName);
    var view = city.children[1].children[0];
    view.src = preview.src;
    view.style.display = "block";
}

function appendPic(cityName){
    var src = prompt("please enter the picture url");
    if(src != null && src != ""){
        var newPic = document.createElement("img");
        var picRegion = document.getElementById(cityName + " sidebar-content");
        newPic.src = src;
        newPic.className = "preview-style";
        newPic.onclick = openViewPic(evt, cityName);
        picRegion.appendChild(newPic);
    }
    else{
        alert("not valid URL");
    }
}

function deletePic(cityName){

}