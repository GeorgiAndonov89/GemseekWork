//MMTSM Market Research
//S13
//if any respondent whose % of time is <20% in total;
function checkS13(){
    let selected = f('S13').categories();
    let sum = 0;
    for(let i = 0; i < selected.length;i++){
        sum += Number(f('S13').item(selected[i]).get());
    }
    if(sum < 20){
        return true;
    }
    return false;
}