//[Cannot be coded 1 if any other code has been coded 1] GRID

var answers = f('S8').domainValues();
var count = 0;

 

for (var i = 0; i < answers.length; i++) {
    var answer = answers[i];

    if (f('S8')[answer].toBoolean() && f('S8')[answer].any('1') && answer != '96') {
            count++;
    }
}

 

if(count > 0 && f('S8')['96'].any('1')){
    RaiseError();
    SetQuestionErrorMessage(CurrentLang(), f('errorM')['21'].label());
}
//Please select one answer per row. еxcept other
var codes = f('Q3a').domainValues();
for (var k = 0; k < codes.length; k++) {
    if (f('Q3a')[codes[k]].none('1', '2', '3', '4', '5', '6', '7') && codes[k] != 97) {
        RaiseError();
        SetQuestionErrorMessage(CurrentLang(), f('errorM')['9'].label());
    }

}