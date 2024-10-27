// function handleCheck() {
//     var getMyParentDiv = document.getElementById("con");

//     var createNewEl = document.createElement("p");

//     createNewEl.classList.add("para");

//     var addText = document.createTextNode("grwe");

//     createNewEl.appendChild(addText);

//     getMyParentDiv.appendChild(createNewEl);

// }
function handleCheck(){
    var ParentDiv = document.getElementById("con")
    var img = document.createElement("img");
img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9o7snK2YNEOI8WjKnaytazefXq5Uk4cm7oA&s"

 ParentDiv.appendChild(img)
}
