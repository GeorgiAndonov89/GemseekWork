//validation Error
var emailBox = f('Q45_Textfield')['1'].get();
var phoneBox = f('Q45_Textfield')['2'].get();
if (!(IsEmail(f('Q45_Textfield')['1'].get())) && !(emailBox == null) ){
    RaiseError();
    SetErrorMessage(LangIDs.en,'Invalid email');
}
if(!(IsNumeric(f('Q45_Textfield')['2'].get())) && !(phoneBox == null)){
    RaiseError();
    SetErrorMessage(LangIDs.en,'Invalid phone number, please use only numbers');
}

