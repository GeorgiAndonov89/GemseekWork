function MaskPREC2() {
	
    var ans = a("PREC2");
    
    ans.remove("11");
    
    if (f("Q0").any("5")) {
    ans.remove("6");
    ans.remove("8");
    ans.remove("10");
    }
    if (f("Q0").any("26","38","27")) {
    ans.remove("4");
    ans.remove("8");
    ans.add("11");
    }
    
    return ans;
    }
    function QSTYLETOOL() {

        var ans = a('QSTYLETOOL');
    
        if (f('aPRODUCTOWNERSHIP').any('1')) {
            ans = ans.diff(set('2', '3', '4', '5', '6', '7'));
        }
        if (f('aPRODUCTOWNERSHIP').any('2')) {
            ans = ans.diff(set('1', '3', '4', '5', '6', '7'));
        }
        if (f('aPRODUCTOWNERSHIP').any('3')) {
            ans = ans.diff(set('1', '2', '4', '5', '6', '7'));
        }
        if (f('aPRODUCTOWNERSHIP').any('4')) {
            ans = ans.diff(set('1', '2', '3', '5', '6', '7'));
        }
        if (f('aPRODUCTOWNERSHIP').any('5')) {
            ans = ans.diff(set('1', '2', '3', '4', '6', '7'));
        }
        if (f('aPRODUCTOWNERSHIP').any('6')) {
            ans = ans.diff(set('1', '2', '3', '4', '5', '7'));
        }
    
        return ans;
    }

    function s3aMask(){
        var returnSet = new Set();
        returnSet = a('S3a');
        if (f('S0').any('1')) {
            returnSet = returnSet.diff(set('2', '3', '15', '16'));
        }
        else if(f('S0').any('2')){
            returnSet = returnSet.diff(set('8','9','12','13','21','17'))
        }
        return returnSet;
    }