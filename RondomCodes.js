 //Office-based lab (OBL) [IN POLAND SHOW AS “Private medical lab”. IN SAUDI ARABIA SHOW AS “Independent or hospital based laboratory”] 
 //^f('hCountry').any('9') ? 'Private medical lab': f('hCountry').any('10') ? 'Independent or hospital based laboratory' : 'Office-based lab (OBL)'^
 //grid; show actions for which are selected code 1 or code 2 at Q1
 //maskByGrid('Q1', set('1','2'))
 //maskByGrid('Q1', set('1', '2')).diff(f('Q4')) избраните с колона 1 или 2 без тези в Q4
 //f('groomingDevices2')['2'].set('1'); сетване на мулти 2 ред от отговорите
 //Optimal size(^f('Q0').any('1') ? 'ft2':'m2'^)
 //^f('Q0').any('1') ? 'UK':'EUR'^
 //^f('S8_97_other')^
 ///^f('QVP4x1pipe').valueLabel()^
 //^f('finalQuotaAssignment').any('1','2')?'Endovascular Neuro procedures':
 //f('finalQuotaAssignment').any('3')?'Vascular procedures':'Cardiovascular procedures'^
//f('Q3')['7'].an('1','2') ред седми от грида да е отг със код 1 или 2 от колоните в него
//f('hCountry').any('9')?a('Q3').diff(set('6')):a('Q3')ако си държава 9 дай всички отг в Q3 БЕЗ код 6 ако не си дръбава 9 дай всичи отг
//Ask if Q11_3<8 - f('Q11',3)[3].get() < 8 (Q11 is grid and this is a mask at Q12)

//MUST BE LESS THAN OR EQUAL TO RESPONDENT AGE MINUS 18 (YEARS)]
//f('S7x1')['1'].get() > (f('D1').get() - 18)

 //Bayer Segmentation P6 piping set
/*function testText(){
    var returnString ="";

    if(f('P6').any('999')){
        returnString = f('P6_999_other');
        
    }
    else{
        returnString = f('P6');
    }
    return returnString;
}*/

 //if i use Numeric Quotations for terminate-> f('S8xEN').toNumber() && (f('S8xEN').toNumber() < 3 || f('S8xEN').toNumber() > 15)
 //if i use Numeric list Quotations for terminate-> f('S3a').values()[0] < 2
 //if i use loop Quotations ->  var loopIter = Number(f('Q2a').value());
 
 //f('Q0').any('1')?a('Q21').diff(set('5')):a('Q21').diff(set('4'))
 //f('aPRODUCTOWNERSHIP').any('3') ? a('Q10x1NEW') : a('Q10x1NEW').diff(set('16'))
 //f('S1').any('3') ? a('S3').diff(nset(10)) : a('S3')

// auto punch codes
//  if (f('Q2').any('1')){
//     f('Q44').set('1')
//  }

// <sub>2</sub>  101-500 m<sub>2</sub>
// <sup>2</sup>  1,001-5,000 ft<sup>2</sup>

// fill out all rows
// if(f('Q27x1').size() + f('Q27x2').size() < f('Q27x1').domainValues().length){
//     RaiseError();
//     SetErrorMessage(LangIDs.en,'Please fill out all rows.');
// }

// var currentQuestionAnswers = f('Q27x1').domainValues();
// for (var i = 0; i < currentQuestionAnswers.length; i++) {
//     // Check if Q27x1 has a code entered and set Q27x2 coresponding code to null
//     // if (f('Q27x1').any(currentQuestionAnswers[i])){
//     //     f('Q27x2')[currentQuestionAnswers[i]].set(null);
//     // }
//     // else if (f('Q27x2').any(currentQuestionAnswers[i])) {
//     //     f('Q27x1')[currentQuestionAnswers[i]].set(null);
//     // }
//     // check if Q27x1 and Q27x2 have the same code in them, precaution in case JS on the question doesn't work
//     if(f('Q27x1').any(currentQuestionAnswers[i]) && f('Q27x2').any(currentQuestionAnswers[i])){
//         f('Q27x1')[currentQuestionAnswers[i]].set(null);
//         f('Q27x2')[currentQuestionAnswers[i]].set(null);
//         RaiseError();
//         SetErrorMessage(LangIDs.en,'Invalid input');
//     }
// }
// 
// Повдигане на бутона некст
// $(document).ready(function () {
    // $('.questionarea').append($('.nav').parent());
// })

//------------------------------------------------------------

//HB TV
// dont allow auto fill and copy paste
// $('#txtInput').on("cut copy paste",function(e) {
    // e.preventDefault();
//  });
// dont allow auto fill and copy paste + аutocomplete
/*for (var i=1; i<=20; i++) {
    $('#Q9_' + i).on("cut copy paste", function (e) {
        e.preventDefault();
    });

    $('#Q9_' + i).attr("autocomplete", "off");
}*/

//----------------------------------------------------------------
//ALLOW SINGLE RESPONSE IF Q4B = 1, TWO RESPONSES IF Q4B = 2
// 3 RESPONSES IF Q4B = 3, 4 RESPONSES IF Q4B = 4, ALL RESPONSES IF Q4B = 5]
/* $(document).ready(function () {

    var elements = ["#Q18A_1", "#Q18A_2", "#Q18A_3", "#Q18A_4", "#Q18A_5", "#Q18A_6", "#Q18A_97"]
    var parents = [];
    var number = 0;
    for (var i = 0; i < elements.length; i++) {
        parents.push($(elements[i]).parent().attr('id'))
    }
    function countSelected(arr) {
        number = 0;
        for (var i = 0; i < arr.length; i++) {
            if ($("#" + arr[i]).hasClass('selectedcolor')) {
                console.log($("#" + arr[i]));
                number += 1;
            }
        }
    }

    $("#forwardbutton").click(function () {
        countSelected(parents);
        var returnN = 0;
        var q4bcode = "^f('Q4B').get()^";
        if (parseInt(q4bcode) < 5 && number > parseInt(q4bcode)) {
            $('#errM' + parseInt(q4bcode)).css('display', 'block')
            console.log('true')
            returnN = 1;
        }
        else {
            $("#errM" + parseInt(q4bcode)).css('display', 'none');
            console.log('false');
            returnN = 0;
        }
        if (returnN == 1) {
            return false;
        }
    })
})*/

//-------------------------------------------------------

//Показване на страницата като едно цяло
/*<style>
#Q9 {
    border-bottom-color: unset;
    border-bottom-style: unset;
    border-bottom-width: unset;
}

#Q9A {
    border-top-color: unset;
    border-top-style: unset;
    border-top-width: unset;
    transform: translateY(-48px);
}

#Q9A_title {
    display: none;
}
</style>*/

//-------------------------------------------------

// Сетване на отговири с добавяне и махане функция 
/*function q6bMask() {
    var returnSet = new Set();
    returnSet = set(f('Q6new').categories());
    returnSet.remove('12');
    returnSet.add('96')
    returnSet.add('98')
    return returnSet;
}*/

//------------------------------------------------

/*Do not ask if codes 10, 11, 14, 17, 18, 19, 20, 21, 97 @S3a or codes 6, 97@S3b, single answer]
function showS5(){
    var returnVal = false;
    if(f('S3a').toBoolean()){
       if(f('S3a').none('10', '11', '14', '17', '18', '19', '20', '21', '97')){
           returnVal = true
       }
        else{
            returnVal = false;
        }
    }
    else if(f('S3b').toBoolean()){
        if (f('S3b').none('6','97')) {
            returnVal = true
        }
        else {
            returnVal = false;
        }
    }
    return returnVal;
}*/