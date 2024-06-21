//Not Sure Button

var Q30 = Confirmit.page.getQuestion("Q30");

currentQuestion.changeEvent.on(function () {
    //$('.cf-numeric-list-answer__input').click();
    var codesOfEachAnswered = Object.keys(Q30.values);
    for (var k = 0; k < codesOfEachAnswered.length; k++) {
        Q30.setValue(codesOfEachAnswered[k], null);
    }
});

// Put in numeric list before the not sure button
$('input').click(function (e) {
    var target = $(e.target);
    $('.cf-checkbox-answer--selected').click();
    $(target).focus();
});


//terminate if <200 in either box]
f('S13').values()[0] < 200 || (f('S13').any('2') && f('S13').values()[1] < 200)

//------------------------------------
/*None of these grid+single-> Pact Design

if (!(f('C9').toBoolean()) && !(f('C9x1').toBoolean())) {
    RaiseError();
    SetQuestionErrorMessage(9, "Please provide an answer.");
}

if (f('C9').toBoolean() && f('C9x1').toBoolean()) {
    RaiseError();
    SetQuestionErrorMessage(9, "You can not select 'None of these' and any other option.");
}

if (!(f('C9x1').toBoolean()) && (!(f('C9')['1'].toBoolean()) || !(f('C9')['2'].toBoolean()) || !(f('C9')['3'].toBoolean()) || !(f('C9')['4'].toBoolean()) || !(f('C9')['5'].toBoolean()))) {
    RaiseError();
    SetQuestionErrorMessage(9, "Please answer for all images.");
}*/