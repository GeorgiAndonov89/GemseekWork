f('errMsg').set('1');

RaiseError();

SetQuestionErrorMessage(f('l').get(), f('errMsg').valueLabel())
if(f('Q0x1').any('2') && !f('Q14').toBoolean()){
    RaiseError();
    SetQuestionErrorMessage(CurrentLang(), f('errorM')['2'].label());
   }

   if(f('Q0x1').any('2') && !(f('Q15')[1].toBoolean() && f('Q15')[2].toBoolean() && f('Q15')[3].toBoolean())){
    RaiseError();
    SetQuestionErrorMessage(CurrentLang(), f('errorM')['3'].label());
}