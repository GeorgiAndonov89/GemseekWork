//Q16a Market Scan
//if selected, show follow-up OE question and textbox, min 5 characters
var text1other = "<div id='Q16a_1_addLabel'>" + "^f('pipe_Q16a').domainLabels()[0]^" + "</div>"
var text2other = "<div id='Q16a_2_addLabel'>" + "^f('pipe_Q16a').domainLabels()[1]^" + "</div>"
$("#Q16a_1_other").hide();
$("#Q16a_2_other").hide();

$("#Q16a_1_other").before(text1other);
$("#Q16a_2_other").before(text2other);

currentQuestion.changeEvent.on(function () {
    console.log(currentQuestion);
    if (currentQuestion.value == 1) {
        $("#Q16a_1_other").show();
    } else {
        $("#Q16a_1_other").hide();
    }
    if (currentQuestion.value == 2) {
        $("#Q16a_2_other").show();
    } else {
        $("#Q16a_2_other").hide();
    }
});