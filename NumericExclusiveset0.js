//There are no beds in my primary facility and then recode it as 0
//S4  23061018 GEHC Taber
//numeric + exlusive when type the code 99 sets 0 s4 input
$(document).ready(function(){
    $("#S4_content").append($("#S4x1_content"));

    $("#S4_1_input").on("input",function(){
        var anotherQ = Confirmit.page.getQuestion('S4x1');
        anotherQ.clearValues();
    });
    $("#S4x1_99").on("click touch", function () {
        currentQuestion.clearValues();
        currentQuestion.setValue('1','0');
    });
})