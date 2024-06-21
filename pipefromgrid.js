/*Q12А DXR
pipe in answers for which columns 2 or 3 selected @ Q12, separate them with a comma in OE*/

function textQ12selected() {
    var ans = [] // правиме масив
    var codes = f('Q12').domainValues(); // всички избрани

    for (var i = 0; i < codes.length; i++) { // въртим по тях
        if (f('Q12')[codes[i]].any('2', '3')) { // ако са от тях за избрани кодове 2,3
            ans.push(f('Q12_' + codes[i]).label()); // pushvame ги в аns масива и после с join ги събираме в текст .label 
        }
    }

    return ans.join(',');
}

//викаме директно функцията във текста ^textQ12selected()^ на въпроса

//уловието за същия въпрос
//Ask if columns 2 and/or 3 selected for 4 or more options @ Q12


function maskQ12() {
    var ans = new Set(); // правиме сет
    var codes = f('Q12').domainValues(); // всички избрани
   
    for (var i = 0; i < codes.length; i++) { //въртиме по тях
        if (f('Q12')[codes[i]].any('2', '3')) { // ако за тях са избрани код 2 и 3 от грида
            ans.add(codes[i]); // добавяме ги в сета
        }
    }

    return ans;
}
//maskQ12().size() >= 4 в Qmask