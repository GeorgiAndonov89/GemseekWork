
//[Ask for the 2 systems evaluated at Q2. Ask for elements that are satisfactory - coded 6-10 at Q2, Rank up to 3] 
//Q2 grid to Q3ranking
//[Pipe elements that are satisfactory – coded 6-10 at Q2  NPI BALDR
function MaskQ3() {
    var ans = new Set();
    var rows = f('Q2', f('Q3loop').value()).domainValues();
    for (var i = 0; i < rows.length; i++) {
        var loopans = f('Q2', f('Q3loop').value())[rows[i]].get()
        if (loopans == 6 || loopans == 7 || loopans == 8 || loopans == 9 || loopans == 10) {
            ans.add(rows[i])
        }
    }

    return ans;
}