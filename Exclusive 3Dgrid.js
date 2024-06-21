//Market Scan OR

var all = "^f('Q4x1').domainValues()^";
var alls = "^f('Q4x2').domainValues()^";
var codes = all.split(",");
var codez = alls.split(",");

setInterval(function () {
    for (var i = 0; i < codes.length; i++) {
        if ($('#desktop_Q4x3_' + codes[i] + '_control').hasClass('cf-checkbox--selected')) {

            currentQuestion.innerQuestions[0].setValue(codes[i], "");
            $('#desktop_Q4x1_' + codes[i]).css({ 'display': 'none' });
        }
        else {
            $('#desktop_Q4x1_' + codes[i]).css({ 'display': 'flex' });
        }

        
        
    }
}, 200);

setInterval(function () {
    for (var i = 0; i < codez.length; i++) {
        if ($('#desktop_Q4x3_' + codez[i] + '_control').hasClass('cf-checkbox--selected')) {

            currentQuestion.innerQuestions[0].setValue(codez[i], "");
            $('#desktop_Q4x2_' + codez[i]).css({ 'display': 'none' });
        }
        else {
            $('#desktop_Q4x2_' + codez[i]).css({ 'display': 'flex' });
        }
        
        

    }
}, 200);

