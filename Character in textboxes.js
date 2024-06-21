//Ask all, OE, min. 5 characters, after first textbox is filled, add a new one, max. 10 textboxes, 
//but only first one is mandatory, no validation for the number of characters for the additional textboxes]
//Endovasular robotics Q14
if (f('Q14').toBoolean()) {
    var boxValue = f('Q14')['1'].get();
    if (boxValue.Trim().length < 5) {
        RaiseError();
        SetErrorMessage(CurrentLang(), f('errorM')['4'].label());
    }
}
else{
RaiseError();
SetErrorMessage(CurrentLang(), f('errorM')['2'].label());
}