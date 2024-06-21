
//Show/hide numeric text boxes NUmeric list-answer
$(document).ready(function () {
     var elementsWithClassArray = $('.cf-numeric-list-answer');
     console.log(elementsWithClassArray);
     for (var i = elementsWithClassArray.length - 4; i <= elementsWithClassArray.length; i++) {
         $(elementsWithClassArray[i]).addClass('hideMe');
     }
     for (var i = 0; i < currentQuestion.answers.length; i++) {
         $("#Q5_" + currentQuestion.answers[i].code + "_input").on('input', showHideNextBox);
     }
     function showHideNextBox() {
         var tempCode = Number($(this).attr('id').split("_")[1]);
         console.log(tempCode)
         if (currentQuestion.values[$(this).attr('id').split("_")[1]] != undefined) {
             var nextCode = Number(tempCode) + 1;
             $("#Q5_" + nextCode).css('display', 'flex')
         } else {
             if (tempCode >= 5) {
                 for (var i = tempCode; i < currentQuestion.answers.length; i++) {
                     $("#Q5_" + (i + 1)).css('display', 'none');
                     currentQuestion.setValue(i + 1, "");
                     currentQuestion.setOtherValue(i + 1, "");
                 }
             }
         }
     }
     $(".hideMe").css('display', 'none');
 });