
function newElement(){
    var mytext = document.getElementById("myInput").value;
    let CreateLiElement = document.createElement("li");
    var myULList = document.getElementsByTagName("UL")[0];
    CreateLiElement.textContent = mytext;
    CreateLiElement.className = "checked"
    function DoSomething(){
        console.log("Hi");
    }
    CreateLiElement.onclick = DoSomething();
    myULList.appendChild(CreateLiElement);
   
}


