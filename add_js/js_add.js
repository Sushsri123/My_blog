var tag1 = document.createElement("h1");
var text1 = document.createTextNode("Transition");
tag1.appendChild(text1);

var tag2 = document.createElement("p");
var text2 = document.createTextNode("Hover over red region to make transition");
tag2.appendChild(text2);

var div = document.createElement("div");
div.style.width = "100px";
div.style.height = "100px";
div.style.background = "red";
div.style.transition = "width 2s"
div.onmouseover = function() {
    this.style.width = "300px";
}


document.body.appendChild(tag1);
document.body.appendChild(tag2);
document.body.appendChild(div);