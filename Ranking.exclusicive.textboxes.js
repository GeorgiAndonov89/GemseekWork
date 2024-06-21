//Endovasular robotics Q15
//Ask all, ranking, min. 3, max. all, but 99 is exclusive, randomize, but keep 98 and 99 at the bottom, 
//if 98 is answered, add additional textboxes, max. 5 textboxes; pay attention to answer codes

$(document).ready(function () {
    var otherQuestion = Confirmit.page.getQuestion('Q15Exc');
    $('#Q15').append($("#Q15Exc"))
    $("#Q15Exc").css('border', 'none');
    $("#Q15Exc").css("padding", "0");
    var thisQuestion = currentQuestion;

    for (var i = 0; i < thisQuestion.answers.length; i++) {
        var tempPrefix = `#${thisQuestion.id}_${thisQuestion.answers[i].code}`
        $(tempPrefix).on('click', function () {
            otherQuestion.clearValues();
        })
    }
    $("#Q15Exc_99").on('click', function () {
        thisQuestion.clearValues();
        currentQuestion.clearValues();
        $(this).children().eq(0).text("X")
    })
});

var hidefrom = 980; // from which open box should we hide onwards
console.log(currentQuestion)
HideThem(hidefrom);
currentQuestion.changeEvent.on(function () {
    for (var k = 1; k < 985; k++) {
        var next = k + 1;
        if ((k > hidefrom - 1)) {

            //console.log(currentQuestion)
            //console.log(currentQuestion.otherValues[k])
            //console.log(k)
            if (currentQuestion.otherValues[k] != "" && currentQuestion.otherValues[k] != undefined) {
                if ($("#" + currentQuestion.id + "_" + next).is(":hidden")) {
                    HideThem(next);
                    break;
                }
            } else {
                if ($("#" + currentQuestion.id + "_" + next).is(":visible")) {
                    HideThem(k);
                    break;
                }
            }
        }
    }
});

function HideThem(from) {
    for (var j = 1; j < 985; j++) {
        if (j <= from) {
            $("#" + currentQuestion.id + "_" + j).show("slow");
        } else {
            $("#" + currentQuestion.id + "_" + j).hide("fast");
            console.log(currentQuestion)
            currentQuestion.setValue(j, null);
            currentQuestion.setOtherValue(j, "");
        }
    }
}

//puted in Question validation tab
if (!(f('Q15').toBoolean()) && !(f('Q15Exc').toBoolean())) {
    RaiseError();
    SetErrorMessage(CurrentLang(), f('errorM')['2'].label())
}
ValidateCountOther('Q15_980_other', 2)
ValidateCountOther('Q15_981_other', 2)
ValidateCountOther('Q15_982_other', 2)
ValidateCountOther('Q15_983_other', 2)
ValidateCountOther('Q15_984_other', 2)