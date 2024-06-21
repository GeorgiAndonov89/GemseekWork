// Intuitive Services VOC Q7
//Client asks if we can autofill zeros when 100 is entered in one of the other fields
$(document).ready(function () {
    $("input[type=number]").on("input", function () {
        if ($(this).val() === "100") {
            var elementCode = $(this).attr('id').split("_")[1];
            $("input[type=number]").not(this).val(0);
            if (elementCode == '1') {
                currentQuestion.setValue('2', 0);
                currentQuestion.setValue('97', 0);
            }
            else if (elementCode == '2') {
                currentQuestion.setValue('1', 0);
                currentQuestion.setValue('97', 0);
            }
            else if (elementCode == '97') {
                currentQuestion.setValue('1', 0);
                currentQuestion.setValue('2', 0);
            }
        }
    });
});

//MMRSM Market 
//S9- Recode blank to zero with 2 answers

$(document).ready(function () {
    $("input[type=number]").on("input", function () {
        if ($(this).val() === "100") {
            var elementCode = $(this).attr('id').split("_")[1];
            $("input[type=number]").not(this).val(0);
            if (elementCode == '1') {
                currentQuestion.setValue('2', 0);
            }
            else  {
                currentQuestion.setValue('1', 0);
            }
        }
    });
});