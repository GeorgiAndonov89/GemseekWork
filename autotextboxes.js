//[Ask all, OE, but add a pre-defined option “No, there are no other factors”, 
//if this option is selected, no text should be entered in the textbox; start with 1 textbox (start with code 981) 
//with min. 5 characters; add more textboxes automatically, but only first one is mandatory; max 7 textboxes]

/*$('input').click(function (e) {
    var target = $(e.target);
    $('.cf-checkbox-answer--selected').click();
    $(target).focus();
});

var hidefrom = 981; // from which open box should we hide onwards
console.log(currentQuestion)
HideThem(hidefrom);
currentQuestion.changeEvent.on(function () {
    for (var k = 981; k < 988; k++) {
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
    for (var j = 981; j < 988; j++) {
        if (j <= from) {
            $("#" + currentQuestion.id + "_" + j).show("slow");
        } else {
            $("#" + currentQuestion.id + "_" + j).hide("fast");
            console.log(currentQuestion)
            currentQuestion.setValue(j, null);
            //currentQuestion.setOtherValue(j, "");
        }
    }
}*/

//------------------------------------------------------------------------------------------



/*var Q5 = Confirmit.page.getQuestion("Q5");

currentQuestion.changeEvent.on(function () {
    //$('.cf-numeric-list-answer__input').click();
    var codesOfEachAnswered = Object.keys(Q5.values);
    for (var k = 0; k < codesOfEachAnswered.length; k++) {
        Q5.setValue(codesOfEachAnswered[k], null);
    }
});*/


//-----------------------------------------------//

//Ask all, grid, rows are open textboxes, min. 5 characters, start with one row, then add additional ones, 
//max 5 rows with textboxes, only first one is mandatory; multiple answers per row, but Will disappear is exclusive; 
//randomize columns, but keep order of Other and Will disappear; add option “I don’t think there are any clinical questions or examinations that will move to other modalities 
//or disappear” without columns, if this option is selected, respondents don’t have to fill in any textboxes

/*$(document).ready(function () {

    var hidefrom = 1; // from which open box should we hide onwards

    for (var j = 1; j < 6; j++) {
        for (var i = 0; i < 7; i++) {
            if (currentQuestion.innerQuestions[i].values[j] != "" && currentQuestion.innerQuestions[i].values[j] != undefined && currentQuestion.innerQuestions[i].values[j] != null) {
                hidefrom++;
                break;
            }
        }
    }

    HideThem(hidefrom);


    var Q29EXCL = Confirmit.page.getQuestion("Q29EXCL");


    currentQuestion.changeEvent.on(function () {

        hidefrom = 1;

        for (var j = 1; j < 6; j++) {
            for (var i = 0; i < 7; i++) {
                if (currentQuestion.innerQuestions[i].values[j] != "" && currentQuestion.innerQuestions[i].values[j] != undefined && currentQuestion.innerQuestions[i].values[j] != null) {
                    hidefrom++;
                    break;
                }
            }
        }

        HideThem(hidefrom);

        //clear global exclusive if button/text is entered/selected
        for (var i = 1; i < 7; i++) {

            for (var g = 1; g < 6; g++) {

                if (currentQuestion.innerQuestions[i - 1].values[g] != "" || currentQuestion.innerQuestions[i - 1].values[g] != undefined || currentQuestion.innerQuestions[i].values[g] != null) {

                    Q29EXCL.setValue(99, null);

                }
            }
        }

        //clear the boxes when the exclusive column is selected
        for (var z = 0; z < 5; z++) {

            var currentValue = currentQuestion.innerQuestions[6].values[z]

            if (currentValue != undefined) {

                currentQuestion.innerQuestions[1].setValue(currentValue, null); //clear the first multi box
                currentQuestion.innerQuestions[2].setValue(currentValue, null); //clear the second multi box
                currentQuestion.innerQuestions[3].setValue(currentValue, null); //clear the third multi box
                currentQuestion.innerQuestions[4].setValue(currentValue, null); //clear the forth multi box
                currentQuestion.innerQuestions[5].setValue(currentValue, null); //clear the fifth multi box           
            }
        }

        for (var k = 1; k < 6; k++) {

            var next = k + 1;

            if ((k > hidefrom - 1)) {

                var textField = currentQuestion.innerQuestions[0].values[k]; // the question with the text input field

                if (textField != "" && textField != undefined) {

                    if ($('.cf-table-layout__row').eq(next).is(":hidden")) {
                        HideThem(next);
                        break;
                    }
                } else {
                    if ($('.cf-table-layout__row').eq(next).is(":visible")) {
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
                $('.cf-table-layout__row').eq(j).show("slow");
            } else {
                $('.cf-table-layout__row').eq(j).hide("fast");
                currentQuestion.innerQuestions[0].setValue(j, null); //clear the text field
                currentQuestion.innerQuestions[1].setValue(j, null); //clear the first multi box
                currentQuestion.innerQuestions[2].setValue(j, null); //clear the second multi box
                currentQuestion.innerQuestions[3].setValue(j, null); //clear the third multi box
                currentQuestion.innerQuestions[4].setValue(j, null); //clear the forth multi box
                currentQuestion.innerQuestions[5].setValue(j, null); //clear the fifth multi box
                currentQuestion.innerQuestions[6].setValue(j, null); //clear the last single box

            }
        }
    }

});*/

 /* Slider grid for Other 
$(".cf-slider__no-value").append("<span class='SlVal' style='display:none;'></span>");

setInterval(function () {
    $(".cf-slider__track-area").each(function (index) {
        var handl = $(this).find(".cf-slider__handle")
        var value1 = Number(handl.attr('aria-valuenow')) * 5;
        if (value1 > -1) {
            var curVal = handl.parent().find('.SlVal')
            curVal.html(value1)
            curVal.show()
        }
    });
}, 100);

$(".cf-slider__handle").on('mouseleave mouseenter mousedown click',
    function () {
        var value = Number($(this).attr('aria-valuenow')) * 5;
        if (value > -1) {
            var curVal = $(this).parent().find('.SlVal')
            curVal.html(value)
            console.log(value)
            curVal.show()
        }
    }
)

var hidefrom = 95; // from which open box should we hide onwards
console.log(currentQuestion)
HideThem(hidefrom);
currentQuestion.changeEvent.on(function () {
    for (var k = 1; k < 99; k++) {
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
    for (var j = 1; j < 99; j++) {
        if (j <= from) {
            $("#" + currentQuestion.id + "_" + j).show("slow");
        } else {
            $("#" + currentQuestion.id + "_" + j).hide("fast");
            console.log(currentQuestion)
            currentQuestion.setValue(j, null);
            currentQuestion.setOtherValue(j, "");
        }
    }
}*/


//---------------------------


//Normal grid Other
/*var hidefrom = 95; // from which open box should we hide onwards
console.log(currentQuestion)
HideThem(hidefrom);
currentQuestion.changeEvent.on(function () {
    for (var k = 1; k < 99; k++) {
        var next = k + 1;
        if ((k > hidefrom - 1)) {

            //console.log(currentQuestion)
            //console.log(currentQuestion.otherValues[k])
            //console.log(k)
            if (currentQuestion.otherValues[k] != "" && currentQuestion.otherValues[k] != undefined) {
                if ($("#desktop_" + currentQuestion.id + "_" + next).is(":hidden") && $("#mobile_" + currentQuestion.id + "_" + next).is(":hidden")) {
                    HideThem(next);
                    break;
                }
            } else {
                if ($("#desktop_" + currentQuestion.id + "_" + next).is(":visible") || $("#mobile_" + currentQuestion.id + "_" + next).is(":visible")) {
                    HideThem(k);
                    break;
                }
            }
        }
    }
});

function HideThem(from) {
    for (var j = 95; j < 99; j++) {
        if (j <= from) {
            $("#desktop_" + currentQuestion.id + "_" + j).show("slow");
          	$("#mobile_" + currentQuestion.id + "_" + j).show("slow");
        } else {
            $("#desktop_" + currentQuestion.id + "_" + j).hide("fast");
          	$("#mobile_" + currentQuestion.id + "_" + j).hide("fast");
            console.log(currentQuestion)
            currentQuestion.setValue(j, null);
            currentQuestion.setOtherValue(j, "");
        }
    }
}*/


var hidefrom = 1; // from which open box should we hide onwards

HideThem(hidefrom);
currentQuestion.changeEvent.on(function () {
    for (var k = 1; k < currentQuestion.answers.length + 1; k++) {
        var next = k + 1;
        if ((k > hidefrom - 1)) {
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
    for (var j = 1; j < currentQuestion.answers.length + 1; j++) {
        if (j <= from) {
            $("#" + currentQuestion.id + "_" + j).show("slow");
        } else {
          	currentQuestion.setValue(j, null);
            $("#" + currentQuestion.id + "_" + j).hide("fast");
        }
    }
}


