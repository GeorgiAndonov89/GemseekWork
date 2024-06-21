// Not Mandatory code 97 Grid Question Q3a Market Scan
var codes = f('Q3a').domainValues();
for (var k = 0; k < codes.length; k++) {
    if (f('Q3a')[codes[k]].none('1', '2', '3', '4', '5', '6', '7') && codes[k] != 97) {
        RaiseError();
        SetQuestionErrorMessage(CurrentLang(), f('errorM')['9'].label());
    }

}