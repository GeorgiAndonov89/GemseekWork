//Endovascular robotics Q1
//Holds available combinations of brand + type from Q1


var loopIter = Number(f('loopQ1').value());  // current iteration ( brand )
var combinationsArray = [['1','2','3'],['4','5','6'],['7','8','9'],['10','11','12'],['13','14','15'],['16','17','18'],['19','20','21']];

if(loopIter != 99){
    var currBrandArr = combinationsArray[loopIter - 1];  // array for current iteration ( brand ) 
    for (var i = 0; i < currBrandArr.length; i++) {
        var code = currBrandArr[i];
        var ans = String(i + 1);
        if (f('Q1')[ans].get() > 0) {
            f('AvailableCombinations')[code].set('1');
        }
    }
}
else{
    var currBrandArr = combinationsArray[6];
    for (var i = 0; i < currBrandArr.length; i++) {
        var code = currBrandArr[i];
        var ans = String(i + 1);
        if (f('Q1')[ans].get() > 0) {
            f('AvailableCombinations')[code].set('1');
        }
    }
}


