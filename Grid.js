//Market Scan OR S8
//[code 96 Cannot be coded 1 if any other code has been coded 1]
var answers = f('S8').domainValues();
var count = 0;

for (var i = 0; i < answers.length; i++) {
    var answer = answers[i];

    if (f('S8')[answer].toBoolean() && f('S8')[answer].any('1') && answer != '96') {
        count++;
    }
}

if (count > 0 && f('S8')['96'].any('1')) {
    RaiseError();
    SetQuestionErrorMessage(CurrentLang(), f('errorM')['8'].label());
}
//[code 96 Cannot be coded 1 if any other code has been coded 1] -- Disapear code 1 on code 96 if any other code has been coded as 1 Must be carousel
setInterval(function () {
    var count = 0;
    for (var k in currentQuestion.values) {
        if (currentQuestion.values[k] == 1) {
            count++;
        }
    }

    if ($('#S8_96_carousel_text').hasClass('cf-carousel__text--current') && count > 0) {
        $('#S8_96_1').css({
            'display': 'none'
        });
    } else {
        $('#S8_96_1').css({
            'display': 'block'
        });
    }
}, 200);

//Трябва да има отговор някакъв за всеки ред/стейтмънт в грида
//ако не си избрал за всеки ред/стейтмънт в грида
for(var i = 0; i < answers.length; i++){
    var answer = answers[i];
    if(!f('Q3')[answer].toBoolean()){
        RaiseError();
        SetQuestionErrorMessage(CurrentLang(), f('errorM')['11'].label());
    }
}
// Ako si izbral pove4e ot 1 стейтмънт/ред v първа колона
var answers = f('Q6').domainValues();
var count = 0;

for (var i = 0; i < answers.length; i++) {
    var answer = answers[i];

    if (f('Q6')[answer].any('1') && f('Q6').toBoolean()) {
        count++;
    }
}

if (count > 1) {
    RaiseError();
    SetQuestionErrorMessage(CurrentLang(), f('errorM')['8'].label());
}
// ako ne si izbral ni6to v nito edna kola
var answers = f('Q6').domainValues();
var code1 = false;
var code2 = false;
var code3 = false;
for (var i = 0; i < answers.length; i++) {
    if (f('Q6')[answers[i]].any('1') && !code1) {
        code1 = true;
    }
    else if (f('Q6')[answers[i]].any('2') && !code2) {
        code2 = true;
    }
    else if (f('Q6')[answers[i]].any('3') && !code3) {
        code3 = true;
    }
}
if (!code1 || !code2 || !code3) {
    RaiseError();
    SetQuestionErrorMessage(CurrentLang(), f('errorM')['7'].label());
}

// 3D grid future health
// max 3 statements per column
if (f('Q33x1').size() > 3 || f('Q33x2').size() > 3 || f('Q33x3').size() > 3) {
    RaiseError();
    SetQuestionErrorMessage(CurrentLang(), f('errorM')['3'].label());
}
//only one statement per row/column
//except code 99 none
var codes = f('Q33x1').domainValues();

for (var i = 0; i < codes.length; i++) {
    var count = 0;
    var code = codes[i];
    if(f('Q33x1')[code].toBoolean() && f('Q33x1').none('99')){
        count++;
    }
    if (f('Q33x2')[code].toBoolean() && f('Q33x2').none('99')){
        count++;
    }
    if (f('Q33x3')[code].toBoolean() && f('Q33x3').none('99')){
        count++;
    }
    if (count > 1 && (f('Q33x1').none('99') || f('Q33x2').none('99') || f('Q33x3').none('99'))){
        RaiseError();
        SetQuestionErrorMessage(CurrentLang(), f('errorM')['6'].label());
 }
 }