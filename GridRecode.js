//Recode into hidden all codes whois >5 at the grid
//Taber Q2
ClearForm(f('hQ2'))

var answersQ2 = f('Q2').categories();
var tempSet = new Set();

for (var x = 0; x < answersQ2.length; x++) {
    if (f('Q2')[answersQ2[x]].get() > 5) {
        f('hQ2')[answersQ2[x]].set('1');
    }
}

//оr use Q14 loop in taber project
//hQ14x-hiddens 
//lQ14-loop
//Q14 question
var prefix = "hQ14x" + f('lQ14').get();

f(prefix)['1'].set(f('Q14')['1'].get())
f(prefix)['2'].set(f('Q14')['2'].get())
f(prefix)['3'].set(f('Q14')['3'].get())