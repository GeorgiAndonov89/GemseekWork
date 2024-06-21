f('l').set('9');
if (f('Q1').any('1')) { f('l').set('9'); }
if (f('Q1').any('2')) { f('l').set('7'); }
if (f('Q1').any('3')) { f('l').set('19'); }
if (f('Q1').any('4')) { f('l').set('12'); }
if (f('Q1').any('5')) { f('l').set('29'); }


if(!IsInRdgMode()){
Redirect(GetRespondentUrl('Introduction')+"&l="+f('l'),true);
}