/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

var downloadenKlaar = document.querySelectorAll("article footer>button");

console.log(downloadenKlaar);

for (var i = 0; i < downloadenKlaar.length; i++) {
    downloadenKlaar[i].addEventListener("click", function () {
        var melding = document.querySelector("header nav section")
        melding.classList.toggle("aan");
    })
}
