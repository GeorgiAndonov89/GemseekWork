//в JavaScripta да не може да пишеш числа в other
function preventNumberInput(e) {
    var keyCode = (e.keyCode ? e.keyCode : e.which);
    if (keyCode > 47 && keyCode < 58 || keyCode > 95 && keyCode < 107) {
        e.preventDefault();
    }
}
$(document).ready(function () {
    $('#S9_98_other').keypress(function (e) {
        preventNumberInput(e);
    });
})
//валидация да не можеш числа в оther
var oeInput = f('S9_98_other').get();

   function is_numeric(str) {
       return /^\d+$/.test(str);
   }

   for (var i = 0; i < oeInput.length; i++) {
       if (is_numeric(oeInput[i])) {
           RaiseError();
           SetQuestionErrorMessage(CurrentLang(), 'ne moje chisla')
       }
   }