function q26Mask(){
    var selectedAnswers = f('Q26').categories();    
    var returnSet = new Set();
    for (var i = 0; i < selectedAnswers.length;i++){
        returnSet.add(selectedAnswers[i].toString());
    }
    return returnSet;
}