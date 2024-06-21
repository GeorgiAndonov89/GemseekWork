//show only the answers that are higher than the one selected in Q7B, e.g. if code 3 selected, show only codes 4-11; 
//if code 4 selected, show only codes 5-11, etc.] 
function q7cMask(){
    var selectedCode = f('Q7b').get();
    selectedCode = Number(selectedCode) + 1;
    var tempSet = new Set();
    tempSet = nnset(selectedCode, 11);

    return tempSet;
}