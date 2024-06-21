//Marker Scan OR

if (!f('Q4x1').toBoolean() && !f('Q4x2').toBoolean() && !f('Q4x3').toBoolean()){
    RaiseError();
    SetQuestionErrorMessage(CurrentLang(), f('errorM')['1'].label());
}
var setN = new Set();
setN = f('Q4x1').union(f('Q4x2')).union(f("Q4x3"))
if(setN.size() < f('Q4x1').domainValues().length){
    RaiseError();
    SetQuestionErrorMessage(CurrentLang(), f('errorM')['7'].label());
}

// Most - Least one answer per row 3d grid with grid inside DID Philips
//когато е грид ползваме values не categories
var count = 0;
var Q28Most = f('Q28Most').values();
var Q28Least = f('Q28Least').values();
Response.Write(Q28Most);
Response.Write("<br/>");
Response.Write(Q28Least);
Response.Write("<br/>");

for (var i=0;i<Q28Most.length;i++) {
	var code = Q28Most[i];
	for (var k=0;k<Q28Least.length;k++) {
		var code2 = Q28Least[i];
		if (Q28Most[i] == Q28Least[i]) {
			count = count+1;
		}
	}
}

Response.Write(count);

if (count > 0) {
	RaiseError();
	SetQuestionErrorMessage(LangIDs.en,'Please make sure, that the answers for Most and Least are different.');
}