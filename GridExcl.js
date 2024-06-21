/*ROWS
[Show all, Multiple; Randomize, Keep “Other” and “None of the above” at end; Other: minimum 3 characters]
TERMINATE (at end of screener) if only codes 1 (Super high-pressure balloon) to 4 (Scoring Balloon – Scoreflex) are selected
1. Super high-pressure balloon	
2. Cutting Balloon 	
3. Scoring Balloon - EVO 	
4. Scoring Balloon - Scoreflex	
5. Shockwave (Lithotripsy)	
6. Rotablator (Rotational atherectomy)	
7. Orbital atherectomy 	
8. Coronary laser atherectomy 	
97. Other, please specify [Not mandatory] [insert textbox]	TERMINATE (at end of screener) if Other is selected alone 
98. None of the above [Exclusive]	TERMINATE if code 98 (None of the above) is selected
COLUMNS
[Show if selected at least 1 code between 1 (Super high-pressure balloon) and 8 (Coronary laser atherectomy), Single] 
TERMINATE if 1 (Unavailable at my facility) or 2 (Available but I am not using) is selected for all codes: 1, 2, 3, 4, 5, 6, 7, 8*/
function screenS5(){
    var selectedS5 = f('S5').categories();
    var counter = 0;

    for(var i =0 ;i < selectedS5.length;i++){
        if((f('S5')[selectedS5[i]].get() == "1" || f('S5')[selectedS5[i]].get() == "2" ) && selectedS5[i] != 97){
            counter++;
        }
    }   
    if(f('S5').any('97')){
        if (f('S5')['97'].any('1', '2') && counter == 8) {
            return true;
        }
    }
    else{
        if(counter ==8){
            return true;
        }
    }
    return false;
}

/*---------------*/
//// 
function checkS5Selected(){
    var selectedS5 = f('S5').categories();
    var counter = 0;
    for(var i =0;i < selectedS5.length;i++){
        if(f('S5')[selectedS5[i]].get() == "1" || f('S5')[selectedS5[i]].get() == "2"){
            counter++;
        }
    }
    if(counter == 8){
        return true;
    }
    return false;
}
// check if only codes 1-4 are selected with code 3 
function checkCodes1234(){
    var checkSet = new Set();
    var selectedS5 = f('S5').categories();
    for(var i =0;i < selectedS5.length;i++){
        if(f('S5')[selectedS5[i]].get() == "3"){
            checkSet.add(selectedS5[i]);
        }
    } 
    // 1,2,3,4,97 diff (1,2,3,4) = 97 != 0
    if(checkSet.diff(set('1','2','3','4')).size() == 0 && checkSet.size() == 4){
        return true;
    }
    return false;
}
// check if only other is selected with code 3
function checkIfOtherIsOnlyCode(){
    var selectedS5 = f('S5').categories();
    var counter = 0;
    for(var i =0;i < selectedS5.length;i++){
        if(f('S5')[selectedS5[i]].get() == "3"){
            counter++;
        }
    }
    if(f('S5')['97'].get() == "3" && counter == 1){
        return true;
    }
    return false;
}
//Coronary Q8mask
/*Ask if items 1 (Super high-pressure balloon), 2 (Cutting balloon), 
3 (Scoring Balloon - EVO) or 4 (Scoring Balloon – Scoreflex) are coded 3 (Available and I am using it) at S5,  */
function q8Mask(){
    var selectedS5 = f('S5').categories();
    var coutner = 0;
    for(var i =0;i < selectedS5.length;i++){
        if(f('S5')[selectedS5[i]].get() == "3" && selectedS5[i] <= 4){
            coutner++;
        }
    }
    if(coutner > 0){
        return true;
    }
    return false;
}
//Q12 Qmaska
/*SHOW ONLY IF items 1 (Super high-pressure balloon), 2 (Cutting balloon), 3 (Scoring Balloon - EVO) or 
4 (Scoring Balloon – Scoreflex) are coded 3 (Available and I am using it) at S5 */
function q12Mask(){
    var returnSet = new Set();
    returnSet = nset(3)
    
    if (q8Mask()){
        returnSet.add("103")
    }
    returnSet.add("104")
    returnSet.add("97")
    return returnSet;
}