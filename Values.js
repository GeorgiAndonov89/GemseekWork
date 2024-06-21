//Ask all; numeric; min: 0, max: 40 for code 1, min: 0, max: 20 for code 2 or code 3, include validation "Number of ORs dedicated to surgical robotics" or 
//“Number of ORs dedicated to laparoscopic surgery” or their sum should be <=" Total Number of ORs"
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

//Terminate if Total N=0  
f('S7').any('1') && f('S7').values()[0] <= 0 

//-------------------------------------------------------------------------------------------------------
