//Q4 MultiChoiseGrid Market Scan

//Please select an answer per row
for (var k = 1; k <= 18; k++) {
    if (f('Q4_' + k).none('1', '2', '3')) {
        RaiseError();
        SetQuestionErrorMessage(CurrentLang(), f('errorM')['7'].label());
    }
}

//Option “Other” cannot be marked as “Not currently available”.
if (f('Q4_97').any('3')) {
    RaiseError();
    SetQuestionErrorMessage(CurrentLang(), f('errorM')['10'].label());
}