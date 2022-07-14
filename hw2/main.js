
var pics = [["https://memeprod.sgp1.digitaloceanspaces.com/user-wtf/1657773706020.jpg"], 
            ["https://memeprod.sgp1.digitaloceanspaces.com/user-wtf/1657696457103.jpg"], 
            ["https://memeprod.sgp1.digitaloceanspaces.com/user-wtf/1657739036623.jpg"]]






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