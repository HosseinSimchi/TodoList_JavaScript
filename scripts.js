let array = [];
function newElement(){
    randomNumber = Math.floor((Math.random() * 100) + 1);
    array.push(randomNumber);
    var mytext = document.getElementById("myInput").value;
    localStorage.setItem("myinput" + randomNumber, mytext)
    var getmytext = localStorage.getItem("myinput" + randomNumber);
    let CreateLiElement = document.createElement("li");
    var myULList = document.getElementsByTagName("UL")[0];
    CreateLiElement.textContent = getmytext;
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
