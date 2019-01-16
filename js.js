var genre = document.querySelector('main form:first-of-type input:first-of-type');
var form = document.querySelector('main form:first-of-type');



function formSubmit() {
    form.submit();
    form.action('populair.html');
}

genre.addEventListener('click', formSubmit);
