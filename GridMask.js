//Ask all; ask for each information type selected as Code 1(Available Inside) or Code 2 (Outside the OR or both) at Q4MultiGrid ; pipe Others for OE Q4a]
// Q5, Q6 Market Scan
function maskQ5() {
    var ans = new Set();
    var codesQ6 = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18'];
    if (f('Q4_97').any('1', '2')) {
        if (f('Q4a_1').toBoolean()) {
            ans.add('97');
        }
        if (f('Q4a_2').toBoolean()) {
            ans.add('98');
        }
        if (f('Q4a_3').toBoolean()) {
            ans.add('99');
        }
    }

    for (var i = 0; i < codesQ6.length; i++) {
        var currCode = codesQ6[i];
        var arrCurrCodeQ4 = f('Q4_' + currCode).categories();
        for (var y = 0; y < arrCurrCodeQ4.length; y++){
            if (arrCurrCodeQ4[y] == 2) {
              ans.add(currCode);
            }
            else if (arrCurrCodeQ4[y] == 1){
                ans.add(currCode);
            }
        }
        
    }

    return ans;
}

