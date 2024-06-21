/*Ask all; numeric; min: 0, max: 40 for code 1, min: 0, max: 20 for code 2 or code 3, include 
validation "Number of ORs dedicated to surgical robotics" or “Number of ORs dedicated to 
laparscopic surgery”<=" Total Number of ORs";
sum 2 and 3 cannot be higher than column 1 Total Number of ORs

var S7xCode1 = Number(f('S7')[1].get())
var S7xCode2 = Number(f('S7')[2].get())
var S7xCode3 = Number(f('S7')[3].get())

if (S7xCode1 > 40) {
    RaiseError();
    SetQuestionErrorMessage(CurrentLang(), f('errorM')['3'].label())
}

if (S7xCode2 > 20) {
    RaiseError();
    SetQuestionErrorMessage(CurrentLang(), f('errorM')['4'].label())
}

if (S7xCode3 > 20) {
    RaiseError();
    SetQuestionErrorMessage(CurrentLang(), f('errorM')['5'].label())
}

if (S7xCode1 < (S7xCode2 + S7xCode3)) {
    RaiseError();
    SetQuestionErrorMessage(CurrentLang(), f('errorM')['6'].label())
}

Terminate if Total N=0  
f('S7').any('1') && f('S7').values()[0] <= 0 */

//% should sum up to 100% in the column]
var answers = f('Q6').domainValues();
var sum = 0;

for (var i = 0; i < answers.length; i++) {
    if (f('Q6')[f('Q6').domainValues()[i]].toBoolean()) {
        sum += Number(f('Q6')[f('Q6').domainValues()[i]].get());
    }
}

if (sum != 100) {
    RaiseError();
    SetQuestionErrorMessage(CurrentLang(), f('errorM')['3'].label());

}
//% should sum up to 100% in the column exept first column
var answers = f('S2').domainValues();
var sum = 0;

for (var i = 0; i < answers.length; i++) {
    if (f('S2')[f('S2').domainValues()[i]].toBoolean() && f('S2').domainValues()[i] != 1) {
        sum += Number(f('S2')[f('S2').domainValues()[i]].get());
    }
}

if (sum != 100) {
    RaiseError();
    SetQuestionErrorMessage(CurrentLang(), f('errorM')['3'].label());
    
}
//ASK if S9=50/50, SC MMTSM S9b S9 is numeric S9a is single
f('S9').any('1') && f('S9').values()[0] == 50 && f('S9').any('2') && f('S9').values()[1] == 50

//[Ask if CODE 2 “Non-OEM” at @Q7 is not 0] EGS Q8
f('Q7').any('2') && f('Q7').values()[1] != 0 