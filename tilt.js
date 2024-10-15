import VanillaTilt from "vanilla-tilt";

VanillaTilt.init(document.querySelector(".titl"), {
    max: 25,
    speed: 400
});

//It also supports NodeList
VanillaTilt.init(document.querySelectorAll(".titl"));