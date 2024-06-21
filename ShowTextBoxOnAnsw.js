//[if selected, show follow-up OE question and textbox, min 5 characters] Q16a Market Scar or R6a Olympus ICT research
function maskQ16a() {

    var ans = new Set();

    var currcompetitors = [];
    var currcompetitors2 = [];
   //var country = set(1);
    var competitors = ['1', '2', '3', '4', '5', '6'];

    for (var k = 0; k < competitors.length; k++) {
        currcompetitors = competitors[k];
        for (var j = 0; j < currcompetitors.length; j++) {
            currcompetitors2 = currcompetitors[j];
        
                ans.add(currcompetitors2.toString());
            
        }
    }

    ans.add('97');
    ans.add('98');

    return ans;
}
//in JavaScript box at the question
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