function Companies() {
    var portalSet = new Set();
    // set that contains all codes for potal links, numbers from 20 to 42
    var totalPortalSet = new Set();
    totalPortalSet = nnset(1, 42);
   var answer = set('97','98','99')
    if (f('Q0').any('1')) {
        portalSet = nnset(14, 24).add('1');
        portalSet = portalSet.add('6')
        
    } else if(f('Q0').any('2')){
        portalSet = nnset(7,13).add('1')
     
    } else if(f('Q0').any('3')){
        portalSet = nnset(34,42).add('1')

    } else if(f('Q0').any('4')){
        portalSet = nnset(1,6)

    } else if(f('Q0').any('5')){
        portalSet = nnset(25,33).add('1')
    }
  if(f('Q8x1').any('3','4') || f('Q8x2').any('3','4') || f('Q8x3').any('3','4')){
    answer.remove('99')  
     
 }


    
    // FullSet - set that contains all the answer codes from Q12
    var fullSet = a('Q16');
    // customSet - a set that holds all the answer codes excluding the country portal codes, numbers from 20 to 42
    var customSet = fullSet.diff(totalPortalSet).union(portalSet);
    // return the union of the above set with the portal codes for the selected country 
    return customSet;
}

// working
function maskQ16()
{
  var countries = [1,2,3,4,5];
  
  var countriesCodes = [["6","15","16","19","20","21","22","23","24"],["7","8","9","10","11","12","13"],["34","35","36","38","39","40","41","42"],["2","3","4","5","6"],["25","26","27","28","29","30","31","32","33"]]
  var currArr = [];
  var answer = set('1',"98","99","97");

  for(var i = 0; i < countriesCodes.length; i++)
  {
	currArr = countriesCodes[i];
	for(var j = 0; j < currArr.length; j++)
	{
		if(f("Q0").any(countries[i].toString()))
		{
			answer.add(currArr[j]);
		}
	}
  }
  
   if(f("Q8x1").any("3","4") || f("Q8x2").any("3","4") || f("Q8x3").any("3","4"))
  {
     answer.remove("99");
  }
  
  
  return answer;
}

//Ask all; rotator; single answer per row; pipe in rows selected @ Q1 and text entered @ Q2, unless code 99 selected @ Q2
function Q3Mask() {
  var ans = new Set();
  var Q3codes = [971, 972, 973, 974, 975, 976, 977];

  for (var k = 0; k < Q3codes.length; k++) {
      if (f('Q2')[Q3codes[k]].toBoolean()) {
          ans.add(Q3codes[k].toString());
      }
  }

  for (var k = 0; k < f('Q1').categories().length; k++) {
      if (f('Q1').any(f('Q1').categories()[k])) {
          ans.add(f('Q1').categories()[k].toString());
      }
  }

  return ans;
}

//Show to mums with babies aged 5+ [S6] months or code 1 at S6x1e
function maskQ4() {
    var mask = set('1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '13', '14', '15', '98');//кодове на въпроса

    var codes = f('hid_ageOfChildren').domainValues();//държи age 
    for (var i = 0; i < codes.length; i++) {
        var code = codes[i];
        if ((f('hid_ageOfChildren')[code].toBoolean() && (f('hid_ageOfChildren')[code] > 5)) || f('S6x1e', f('hid_selectedChild')).any('1')) {
            mask.add('12');
        }

    }

    return mask;
}