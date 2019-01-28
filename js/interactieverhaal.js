/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

var downloadBtn = document.querySelectorAll('main button');


for (var i = 0; i < downloadBtn.length; i++) {
    downloadBtn[i].addEventListener("click", function () {
        this.classList.add("active");
    });
}
