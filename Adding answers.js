function QSTYLETOOL() {

    var ans = new Set();
    ans = ans.union(nnset(8, 14));
    // ans.add("8");
    // ans.add("9");
    // ans.add("10");
    // ans.add("11");
    // ans.add("12");
    // ans.add("13");
    // ans.add("14");
    ans.add("96");

    if (f('aPRODUCTOWNERSHIP').any('1')) {
        ans.add("1");
    }
    if (f('aPRODUCTOWNERSHIP').any('2')) {
        ans.add("2");
    }
    if (f('aPRODUCTOWNERSHIP').any('3')) {
        ans.add("3");
    }
    if (f('aPRODUCTOWNERSHIP').any('4')) {
        ans.add("4");
    }
    if (f('aPRODUCTOWNERSHIP').any('5')) {
        ans.add("5");
    }
    if (f('aPRODUCTOWNERSHIP').any('6')) {
        ans.add("6");
    }
    if (f('aPRODUCTOWNERSHIP').any('7')) {
        ans.add("7");
    }
    
    return ans;
}
//Endovascular robotics Q6
function maskQ6(){
    var answers = set('20');
    // f('Q6')['20'].set(0)

    if (f('finalQuotaAssignment').any('4')){
        answers = answers.union(nnset(1,4));
        // f('Q6')['1'].set(0)
        // f('Q6')['2'].set(0)
        // f('Q6')['3'].set(0)
        // f('Q6')['4'].set(0)
    }
    if (f('finalQuotaAssignment').any('3')) {
        answers = answers.union(nnset(5, 11));
        // f('Q6')['5'].set(0)
        // f('Q6')['6'].set(0)
        // f('Q6')['7'].set(0)
        // f('Q6')['8'].set(0)
        // f('Q6')['9'].set(0)
        // f('Q6')['10'].set(0)
        // f('Q6')['11'].set(0)
    }
    if (f('finalQuotaAssignment').any('1','2')) {
        answers.add(10);
        answers = answers.union(nnset(12, 17));
        // f('Q6')['10'].set(0)
        // f('Q6')['12'].set(0)
        // f('Q6')['13'].set(0)
        // f('Q6')['14'].set(0)
        // f('Q6')['15'].set(0)
        // f('Q6')['16'].set(0)
        // f('Q6')['17'].set(0)
    }
    if(f('S1').any('1','6')){
        answers = answers.union(nnset(18, 19));
        // f('Q6')['18'].set(0)
        // f('Q6')['19'].set(0)
    }

    return answers;
}
function maskS6() {

    var ans = a("S6");

    if (f("S2").any('16')) {
        ans.remove("8");
    }
    if (f("S2").any('17')) {
        ans.remove("1");
        ans.remove("2");
        ans.remove("3");
        ans.remove("4");
        ans.remove("5");
        ans.remove("6");
        ans.remove("7");
    }
	if (f("S2").any('18')) {
        ans.remove("1");
        ans.remove("2");
        ans.remove("3");
        ans.remove("4");
        ans.remove("5");
		ans.remove("8");
    }
   

    return ans;
}