// връща Show only the answers selected in Q16, Randomize list и only if Q8 – codes 3 or 4 not selected in any column]
function maskQ17(){
    var valueArray = f('Q16').categories();
    var returnSet = new Set();
    for(var i = 0; i < valueArray.length;i++){
      returnSet.add(valueArray[i]);
    }
  if (f('Q8x1').none('3','4') && f('Q8x2').none('3','4') && f('Q8x3').none('3','4')){
      returnSet.add('99');
    }
    if(f('Q16').any('98')){
      returnSet.add('98');
    }
    returnSet.add('97');
    return returnSet;
}

//f('Q16').union(set('99','97')) показва отговорите от Q16 + 99 § 97