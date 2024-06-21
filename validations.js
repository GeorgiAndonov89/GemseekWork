ValidateCountOther('S4_99_other', 5) //min 5 characters for Other
ValidateCountOther('S4A_99_other', 2)
//ValidateCountOther('M5b', 3) валидация за 3 чарактера ??
//Еndovascular Q7 OE
//countWC('Q7', 1, 2)

//[Single, Ask all, Other: min 5 characters] Coronary
/*if (f('S3').any('97')) {
    var txt = f('S3_97_other').toString();

    if (txt.Trim().length < 5) {
        RaiseError();
        SetErrorMessage(CurrentLang(), f('errorM')['3'].label())
    }
}*/


/*ValidateCountOther('Q29Bx1', 5)

for (var k = 1; k <= f('Q29Bx1').domainValues().length; k++) {
    if (f('Q29Bx1')[k].toBoolean() && !f('Q29Bx2')[k].toBoolean() && !f('Q29Bx3')[k].toBoolean() && !f('Q29Bx4')[k].toBoolean() && !f('Q29Bx5')[k].toBoolean() && !f('Q29Bx6')[k].toBoolean()) {
      RaiseError();
      SetQuestionErrorMessage(CurrentLang(), f('errorM')['5'].label());
      //Please make sure to select at least one answer for each clinical question or examination you write
    }
    if (!f('Q29Bx1')[k].toBoolean() && (f('Q29Bx2')[k].toBoolean() || f('Q29Bx3')[k].toBoolean() || f('Q29Bx4')[k].toBoolean() || f('Q29Bx5')[k].toBoolean() || f('Q29Bx6')[k].toBoolean())) {
      RaiseError();
      SetQuestionErrorMessage(CurrentLang(), f('errorM')['7'].label());
      //Please make sure to write in the box since you selected an answer
    }
  }
  
  if (!f('Q29Bx1').toBoolean() && !f('Q29BEXCL').toBoolean()) {
      RaiseError();
      SetQuestionErrorMessage(CurrentLang(), f('errorM')['6'].label());
      //Please make sure to write in at least one box or select the exclusive option
  }*/


  /*var text1 = f('Q9')[1].get();
  if(f('CountryBG').any('3')){
	if (f('Q22').toBoolean() && text1.length < 2) {
		f('errMsg').set('1'); //set the error message
		RaiseError();
		SetQuestionErrorMessage(f('l').get(), f('errMsg').valueLabel());
	}
}*/

/*var text = f('Q33').get();

if (text.length < 2) {
    RaiseError();
    SetQuestionErrorMessage(f('l').get(), f('errMsg').domainLabels()[0]);
}*/
/******************************** */
/*var codes = f('Q3a').domainValues();
for (var k = 0; k < codes.length; k++) {
    if (f('Q3a')[codes[k]].none('1', '2', '3', '4', '5', '6', '7') && codes[k] != 97) {
        RaiseError();
        SetQuestionErrorMessage(CurrentLang(), f('errorM')['9'].label());
        Please select an answer for each statement
    }

}*/
//Please select one answer per row. еxcept other

var answers = f('Q17').domainValues();
for (var i = 0; i < answers.length; i++) {
    var answer = answers[i];
    if (!f('Q17')[answer].toBoolean() && (!f('Q17')['98'])) {
        RaiseError();
        SetQuestionErrorMessage(CurrentLang(), f('errorM')['11'].label());
    }
}

// Показване на оther полето на мобил
$(document).ready(function () {
  var lastColArr = currentQuestion.innerQuestions[1].answers;
  var prefix = "#desktop_Q4x_";
  var prefix2 = "#mobile_Q4x_";
  var boxArray = [];
  var optionArray = [];
  var boxArray2 = [];
  var optionArray2 = [];
  for (var i = 0; i < lastColArr.length; i++) {
      $("#desktop_Q4Other_" + (lastColArr[i].code).toString()).css('display', 'none');
      $(prefix + lastColArr[i].code).on('change', NqkvoIme);
      $("#mobile_Q4Other_" + (lastColArr[i].code).toString()).css('display', 'none');
      $(prefix2 + lastColArr[i].code + "_input").on('change', NqkvoIme);
      optionArray.push($(prefix + lastColArr[i].code));
      boxArray.push($("#desktop_Q4Other_" + lastColArr[i].code));
      optionArray2.push($(prefix2 + lastColArr[i].code + "_input"));
      boxArray2.push($("#mobile_Q4Other_" + lastColArr[i].code));
  }
  function NqkvoIme() {
      if ($(this).val() == "98") {
          var tempid = $(this).attr('id');
          var tempCode = tempid.split('_')[2];
          $("#desktop_Q4Other_" + tempCode).css('display', 'block');
          $("#mobile_Q4Other_" + tempCode).css('display', 'block');
      } else {
          var tempid = $(this).attr('id');
          var tempCode = tempid.split('_')[2];
          $("#desktop_Q4Other_" + tempCode).css('display', 'none');
          $("#mobile_Q4Other_" + tempCode).css('display', 'none');
          currentQuestion.innerQuestions[1].setValue(tempCode, '');
      }
  } 
  function checkIfBoxHasValue() {
      for (var i = 0; i < boxArray.length; i++) {
          if (boxArray[i].val() != undefined && boxArray[i].val().length > 0) {
              boxArray[i].css('display', 'block');
          }
          if (optionArray[i].val() == '98') {
              boxArray[i].css('display', 'block');
          } else if (optionArray[i].val != '98') {
              boxArray[i].css('display', 'none');
          }
      }
      for (var i = 0; i < boxArray2.length; i++) {
          if (boxArray2[i].val() != undefined && boxArray2[i].val().length > 0) {
              boxArray2[i].css('display', 'block');
          }
          if (optionArray2[i].val() == '98') {
              boxArray2[i].css('display', 'block');
          } else if (optionArray2[i].val != '98') {
              boxArray2[i].css('display', 'none');
          }
      }
  }
  checkIfBoxHasValue();
})
// ako не си отг с нищо на нито една колона
if (f('Q22x2').size() == 0 && f('Q22x3').size() == 0 && f('Q22x4').size() == 0) {
    RaiseError();
    SetQuestionErrorMessage(CurrentLang(), f('errorM')['2'].label());
}

//3D грид + numeric inside 
// ako си отг на оther да трябва да напишеш нещо и в нумерик колоните
if (String(f('Q22A_98_other')).Trim().length > 0) {
    if (f('hSetUserNonUser').none('1') && (!f('Q22Ax2')['98'].toBoolean() || !f('Q22Ax3')['98'].toBoolean())) { // 2 columns show
        RaiseError();
        SetQuestionErrorMessage(CurrentLang(), f('errorM')['11'].label());
    }
    if (f('hSetUserNonUser').any('1') && (!f('Q22Ax2')['98'].toBoolean() || !f('Q22Ax3')['98'].toBoolean() || !f('Q22Ax4')['98'].toBoolean())) { // all 3 columns show
        RaiseError();
        SetQuestionErrorMessage(CurrentLang(), f('errorM')['11'].label());
    }
}