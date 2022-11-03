const items = document.getElementsByClassName("listing")[0];
const cancelIcon = document.getElementById("xmark");


function createNote(){
    var divParent = document.createElement("div");
    var divChild = document.createElement("div");
    var cancelIcon = document.createElement("i");
    var correctIcon = document.createElement("i");


    divParent.className = "list";

    correctIcon.className = "fa-solid fa-check";
    correctIcon.style.color = "grey";

    divChild.appendChild(correctIcon);

    cancelIcon.className = "fa-solid fa-xmark";
    cancelIcon.style.color = "grey";
    cancelIcon.addEventListener("click", function(){
        divParent.remove();
    })
   

    divChild.appendChild(cancelIcon);

    divParent.appendChild(divChild);

    items.appendChild(divParent);

}