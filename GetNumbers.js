//Less than 10,000	Screen out
//10,000 to 19,000	Continue
//19,000 to 40,000	Continue
//40,000 and more	Continue

var answer = Number(f('SC03').get());

if(answer < 10000){
    f('hSC03').set('1');
}
else if(answer >= 10000 && answer < 19000){
    f('hSC03').set('2');
}
else if (answer >= 19000 && answer < 40000) {
    f('hSC03').set('3');
}
else if(answer >= 40000){
    f('hSC03').set('4');
}