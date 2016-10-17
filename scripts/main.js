alert("I'm killing myself on the 13th of December");

var header = document.getElementById("header");

header.style = "background:#777; border: 2px solid #eaea10;";

//method one
var title = document.createElement("h1");
title.textContent="Random Quote Generator"
title.style = "padding-left:20px;"
header.appendChild(title);

//method two
var description = document.createElement("p");
description.innerHTML = "This is a description."
description.style = "padding-left:20px;"
header.appendChild(description);