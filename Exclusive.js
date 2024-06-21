var all = "^f('Q27Num').domainValues()^";
var codes = all.split(",");
console.log(currentQuestion);

$("#desktop_Q27Num_1").change(function() {
        console.log($("#desktop_Q27Num_1").val());
});
	setInterval(function(){
			for(var i = 0; i < codes.length; i++) {
				if($('#desktop_Q27NotSure_'+codes[i]+'_control').hasClass('cf-checkbox--selected')) {
                  
                  currentQuestion.innerQuestions[0].setValue(codes[i], ""); 
                  
                  $('#desktop_Q27Num_'+codes[i]).css({'display':'none'});		
				}
				else{
					$('#desktop_Q27Num_'+codes[i]).css({'display':'flex'});
				}

			}
	},200);

	// set up value box array
var valueBoxPrefix = '#desktop_Q27x1_';
var valueBoxArray = []
for(var i =0 ;i < currentQuestion.innerQuestions[0].answers.length;i++){
    var temp = valueBoxPrefix.concat(currentQuestion.innerQuestions[0].answers[i].code);
    valueBoxArray.push(temp);
    $(temp).on('keyup',testFunction);
}
//set up not sure boxes array
var notSureBoxPrefix = '#desktop_Q27x2_';
var notSureBoxArray = [];
for(var i =0; i < currentQuestion.innerQuestions[1].answers.length;i++){
    var temp = notSureBoxPrefix.concat(currentQuestion.innerQuestions[0].answers[i].code);
    notSureBoxArray.push(temp);
    $(temp).on('click', testFuncion2);
}
// keyup function, clear value from corresponding Not Sure box
function testFunction(event){
    var targetId = event.target.id.slice(14);
    currentQuestion.innerQuestions[1].setValue(targetId.toString(),null);
}
// click function for Not Sure boxes, set value to null in size value column to coresponding row
function testFuncion2(event){
    var targetId = event.target.id.slice(14).slice(0,-8);
    currentQuestion.innerQuestions[0].setValue(targetId.toString(),null);
}