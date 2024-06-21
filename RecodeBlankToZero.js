//MMTSM Market Research
//S11
//Recode blank to zero
var available_codes_s11 = f('S11').domainValues();
var selected_codes_s11 = f('S11').categories();

for(var i = 0; i < available_codes_s11.length;i++){
    if(selected_codes_s11.indexOf(available_codes_s11[i]) === -1){
        f('S11').item(available_codes_s11[i]).set(0);
    }
}