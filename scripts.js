function newElement(){
    var mytext = document.getElementById("myInput").value;
    let CreateLiElement = document.createElement("li");
    var myULList = document.getElementsByTagName("UL")[0];
    CreateLiElement.textContent = mytext;
    myULList.appendChild(CreateLiElement);
}

window.onload=function(){
    var list = document.querySelector('ul');
    list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }}, false);
}

function RefreshPage() {
    var list = document.getElementsByTagName('LI');
    for (var i = 0; i < list.length; i++) {
        list[i].style.display = 'none'
    }
}