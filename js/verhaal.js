/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

var sterren = document.getElementById("sterren");

sterren.addEventListener("click", function () {
    this.children[0].style.color = "#FBDD71";
    this.querySelector('.fas').style.fontSize = '2.1rem';
    this.children[0].style.transition = 'color ease .7s, font-size 0.7s ease-out';
}, false);

sterren.addEventListener("click", function () {
    this.children[1].style.color = "#FBDD71";
    this.querySelector('.fas').style.fontSize = '2.1rem';
    this.children[1].style.transition = 'color ease .7s, font-size 0.7s ease-out';
}, false);

sterren.addEventListener("click", function () {
    this.children[2].style.color = "#FBDD71";
    this.querySelector('.fas').style.fontSize = '2.1rem';
    this.children[2].style.transition = 'color ease .7s, font-size 0.7s ease-out';
}, false);

sterren.addEventListener("click", function () {
    this.children[3].style.color = "#FBDD71";
    this.querySelector('.fas').style.fontSize = '2.1rem';
    this.children[3].style.transition = 'color ease .7s, font-size 0.7s ease-out';
}, false);

sterren.addEventListener("click", function () {
    this.children[4].style.color = "#FBDD71";
    this.querySelector('.fas').style.fontSize = '2rem';
    this.children[4].style.transition = 'color ease .7s, font-size 0.7s ease-out';
}, false);
