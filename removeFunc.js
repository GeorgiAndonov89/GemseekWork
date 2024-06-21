function removeCode(){
var answer = set('97','98','99')

if(f('Q8x1').any('3','4') || f('Q8x2').any('3','4') || f('Q8x3').any('3','4')){
    answer.remove('99')  
}
return answer;
}

// remove buttons 
/*if(f('Q8x1').any('5')){
    f('Q8x1')['97'].set('1');
    f('Q8x1')['5'].set(null);
  }
  
  if(f('Q8x1').any('3')){
    f('Q8x1')['3'].set(null);
  }*/

