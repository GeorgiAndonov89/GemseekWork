//Ask if there is a tie on the highest score at Q1 – e.g., two items coded 10, two items coded 9 and none coded 10, pipe selections only those selections, 
//if no ties on the highest score, autopunch highest score at Q1] 
//Taber Q1-Q1a


function q1aMask(){
    var tempSet = new Set();
    var answersQ1 = f('Q1').categories();
    var highestScore = 0;
    for (var i = 0; i < answersQ1.length; i++) {
        var tempScore = f('Q1')[answersQ1[i]].get();

        if (tempScore > highestScore) {
            highestScore = Number(tempScore);
        }
    }

    for(var i = 0 ; i < answersQ1.length; i++){
        if(f('Q1')[answersQ1[i]].get() == highestScore){
            tempSet.add(answersQ1[i])
        }
    }
    return tempSet;
}