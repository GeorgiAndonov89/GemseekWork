
//рекодиране на мулти от мулти въпрос

ClearForm(f('hidden_brushes'));

if(f('aPRODUCTOWNERSHIP').any('1')){
  f('hidden_brushes')['1'].set('1');//отг с код 1
}
if(f('aPRODUCTOWNERSHIP').any('2')){
  f('hidden_brushes')['2'].set('1');//отг с код 2
}
if(f('aPRODUCTOWNERSHIP').any('3')){
  f('hidden_brushes')['3'].set('1');//отг с код 3
}