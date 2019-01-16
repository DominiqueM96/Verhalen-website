/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

var downloadBtn = document.querySelectorAll('article>button');

downloadBtn.forEach(function (downloadBtn) {
    downloadBtn.addEventListener("click", function () {
        downloadBtn.classList.toggle('download');
        downloadBtn.classList.toggle('klaar');
    });

});
