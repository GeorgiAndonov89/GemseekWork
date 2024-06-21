var hidefrom = 1; // from which open box should we hide onwards
console.log(currentQuestion)
HideThem(hidefrom);
currentQuestion.changeEvent.on(function () {
    for (var k = 1; k < 6; k++) {
        var next = k + 1;
        if ((k > hidefrom - 1)) {

            //console.log(currentQuestion)
            //console.log(currentQuestion.otherValues[k])
            //console.log(k)
            if (currentQuestion.values[k] != "" && currentQuestion.values[k] != undefined) {
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
    for (var j = 1; j < 6; j++) {
        if (j <= from) {
            $("#" + currentQuestion.id + "_" + j).show("slow");
        } else {
            $("#" + currentQuestion.id + "_" + j).hide("fast");
            console.log(currentQuestion)
            currentQuestion.setValue(j, null);
            //currentQuestion.setOtherValue(j, "");
        }
    }
}