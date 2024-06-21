//Ask there is a tie on the highest score at Q1 – e.g., two items coded 10, two items coded 9 and none coded 10, pipe selections only those selections, 
//single choice; if no ties on the highest score,


//from grid to single selection NPI BALDR Q1 -Q1a
function MaskQ1a() {
    var ans = new Set();
    var rows = f('Q1').domainValues();
    var highest = 0;
    for (var i = 0; i < rows.length; i++) {
        if (f('Q1')[rows[i]].toBoolean()) {
            var rate = Number(f('Q1')[rows[i]].get())      
            if (rate > highest) {
                ans = new Set()
                ans.add(rows[i])
                highest = rate
            } else if (rate === highest) {
                ans.add(rows[i])
            }
        }
    }
    return ans;
}