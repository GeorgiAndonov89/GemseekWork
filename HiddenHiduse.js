if (f('aGENDER').any('1')) {
 
    if(f('hidden_PURCHASE_GROUP').any('7','8','9') && f('AvHIDUSE').any('13')){
        f('hidden_HIDUSE').set('13');
    } else {
        // Electric foil shaver 1
        if( (f('aDUALUSAGE').any('1') && f('AvHIDUSE').any('1')) ||
            (f('aDUALUSAGE').none('1') && f('aCONSIDERATION')[1].any('1','2') && f('aCONSIDERATION')[2].any('3','4') && f('aCONSIDERATION')[14].any('3','4') && f('aCONSIDERATION')[15].any('3','4') && f('hidden_PURCHASE_GROUP').any('3')) ||
            (f('aDUALUSAGE').none('1') && f('aCONSIDERATION')[1].any('1','2') && f('aCONSIDERATION')[2].any('1','2') && f('aCONSIDERATION')[14].any('1','2') && f('aCONSIDERATION')[15].any('1','2') && f('hidden_PURCHASE_GROUP').any('3') && f('AvHIDUSE').any('1') && f('AvHIDUSE').none('2') && f('AvHIDUSE').none('14') && f('AvHIDUSE').none('15')) ||
            (f('aDUALUSAGE').none('1') && f('aCONSIDERATION')[1].any('1','2') && f('aCONSIDERATION')[2].any('1','2') && f('aCONSIDERATION')[14].any('1','2') && f('aCONSIDERATION')[15].any('3','4') && f('hidden_PURCHASE_GROUP').any('3') && f('AvHIDUSE').any('1') && f('AvHIDUSE').none('2') && f('AvHIDUSE').none('14')) ||
            (f('aDUALUSAGE').none('1') && f('aCONSIDERATION')[1].any('1','2') && f('aCONSIDERATION')[2].any('1','2') && f('aCONSIDERATION')[14].any('3','4') && f('aCONSIDERATION')[15].any('1','2') && f('hidden_PURCHASE_GROUP').any('3') && f('AvHIDUSE').any('1') && f('AvHIDUSE').none('2') && f('AvHIDUSE').none('15')) ||
            (f('aDUALUSAGE').none('1') && f('aCONSIDERATION')[1].any('1','2') && f('aCONSIDERATION')[2].any('3','4') && f('aCONSIDERATION')[14].any('1','2') && f('aCONSIDERATION')[15].any('1','2') && f('hidden_PURCHASE_GROUP').any('3') && f('AvHIDUSE').any('1') && f('AvHIDUSE').none('14') && f('AvHIDUSE').none('15')) ||
            (f('aDUALUSAGE').none('1') && f('aCONSIDERATION')[1].any('1','2') && f('aCONSIDERATION')[2].any('1','2') && f('aCONSIDERATION')[14].any('3','4') && f('aCONSIDERATION')[15].any('3','4') && f('hidden_PURCHASE_GROUP').any('3') && f('AvHIDUSE').any('1') && f('AvHIDUSE').none('2')) ||
            (f('aDUALUSAGE').none('1') && f('aCONSIDERATION')[1].any('1','2') && f('aCONSIDERATION')[2].any('3','4') && f('aCONSIDERATION')[14].any('1','2') && f('aCONSIDERATION')[15].any('3','4') && f('hidden_PURCHASE_GROUP').any('3') && f('AvHIDUSE').any('1') && f('AvHIDUSE').none('14')) ||
            (f('aDUALUSAGE').none('1') && f('aCONSIDERATION')[1].any('1','2') && f('aCONSIDERATION')[2].any('3','4') && f('aCONSIDERATION')[14].any('3','4') && f('aCONSIDERATION')[15].any('1','2') && f('hidden_PURCHASE_GROUP').any('3') && f('AvHIDUSE').any('1') && f('AvHIDUSE').none('15')) ) {
                f('hidden_HIDUSE').set('1');
            }
        //  Electric rotary shaver  2
        if( (f('aDUALUSAGE').any('2') && f('AvHIDUSE').any('2')) ||
            (f('aDUALUSAGE').none('2') && f('aCONSIDERATION')[1].any('3','4') && f('aCONSIDERATION')[2].any('1','2') && f('aCONSIDERATION')[14].any('3','4') && f('aCONSIDERATION')[15].any('3','4') && f('hidden_PURCHASE_GROUP').any('3')) ||
            (f('aDUALUSAGE').none('2') && f('aCONSIDERATION')[1].any('1','2') && f('aCONSIDERATION')[2].any('1','2') && f('aCONSIDERATION')[14].any('1','2') && f('aCONSIDERATION')[15].any('1','2') && f('hidden_PURCHASE_GROUP').any('3') && f('AvHIDUSE').any('2') && f('AvHIDUSE').none('1') && f('AvHIDUSE').none('14') && f('AvHIDUSE').none('15')) ||
            (f('aDUALUSAGE').none('2') && f('aCONSIDERATION')[1].any('1','2') && f('aCONSIDERATION')[2].any('1','2') && f('aCONSIDERATION')[14].any('1','2') && f('aCONSIDERATION')[15].any('3','4') && f('hidden_PURCHASE_GROUP').any('3') && f('AvHIDUSE').any('2') && f('AvHIDUSE').none('1') && f('AvHIDUSE').none('14')) ||
            (f('aDUALUSAGE').none('2') && f('aCONSIDERATION')[1].any('1','2') && f('aCONSIDERATION')[2].any('1','2') && f('aCONSIDERATION')[14].any('3','4') && f('aCONSIDERATION')[15].any('1','2') && f('hidden_PURCHASE_GROUP').any('3') && f('AvHIDUSE').any('2') && f('AvHIDUSE').none('1') && f('AvHIDUSE').none('15')) ||
            (f('aDUALUSAGE').none('2') && f('aCONSIDERATION')[1].any('3','4') && f('aCONSIDERATION')[2].any('1','2') && f('aCONSIDERATION')[14].any('1','2') && f('aCONSIDERATION')[15].any('1','2') && f('hidden_PURCHASE_GROUP').any('3') && f('AvHIDUSE').any('2') && f('AvHIDUSE').none('14') && f('AvHIDUSE').none('15')) ||
            (f('aDUALUSAGE').none('2') && f('aCONSIDERATION')[1].any('1','2') && f('aCONSIDERATION')[2].any('1','2') && f('aCONSIDERATION')[14].any('3','4') && f('aCONSIDERATION')[15].any('3','4') && f('hidden_PURCHASE_GROUP').any('3') && f('AvHIDUSE').any('2') && f('AvHIDUSE').none('1')) ||
            (f('aDUALUSAGE').none('2') && f('aCONSIDERATION')[1].any('3','4') && f('aCONSIDERATION')[2].any('1','2') && f('aCONSIDERATION')[14].any('1','2') && f('aCONSIDERATION')[15].any('3','4') && f('hidden_PURCHASE_GROUP').any('3') && f('AvHIDUSE').any('2') && f('AvHIDUSE').none('14')) ||
            (f('aDUALUSAGE').none('2') && f('aCONSIDERATION')[1].any('3','4') && f('aCONSIDERATION')[2].any('1','2') && f('aCONSIDERATION')[14].any('3','4') && f('aCONSIDERATION')[15].any('1','2') && f('hidden_PURCHASE_GROUP').any('3') && f('AvHIDUSE').any('2') && f('AvHIDUSE').none('15')) ) {
                f('hidden_HIDUSE').set('2');
            }
        //   Electric head shaver 14
		if( (f('aDUALUSAGE').any('14') && f('AvHIDUSE').any('14')) ||
            (f('aDUALUSAGE').none('14') && f('aCONSIDERATION')[1].any('3','4') && f('aCONSIDERATION')[2].any('3','4') && f('aCONSIDERATION')[14].any('1','2') && f('aCONSIDERATION')[15].any('3','4') && f('hidden_PURCHASE_GROUP').any('3')) ||
            (f('aDUALUSAGE').none('14') && f('aCONSIDERATION')[1].any('1','2') && f('aCONSIDERATION')[2].any('1','2') && f('aCONSIDERATION')[14].any('1','2') && f('aCONSIDERATION')[15].any('1','2') && f('hidden_PURCHASE_GROUP').any('3') && f('AvHIDUSE').any('14') && f('AvHIDUSE').none('1') && f('AvHIDUSE').none('2') && f('AvHIDUSE').none('15')) ||
            (f('aDUALUSAGE').none('14') && f('aCONSIDERATION')[1].any('1','2') && f('aCONSIDERATION')[2].any('1','2') && f('aCONSIDERATION')[14].any('1','2') && f('aCONSIDERATION')[15].any('3','4') && f('hidden_PURCHASE_GROUP').any('3') && f('AvHIDUSE').any('14') && f('AvHIDUSE').none('1') && f('AvHIDUSE').none('2')) ||
            (f('aDUALUSAGE').none('14') && f('aCONSIDERATION')[1].any('1','2') && f('aCONSIDERATION')[2].any('3','4') && f('aCONSIDERATION')[14].any('1','2') && f('aCONSIDERATION')[15].any('1','2') && f('hidden_PURCHASE_GROUP').any('3') && f('AvHIDUSE').any('14') && f('AvHIDUSE').none('1') && f('AvHIDUSE').none('15')) ||
            (f('aDUALUSAGE').none('14') && f('aCONSIDERATION')[1].any('3','4') && f('aCONSIDERATION')[2].any('1','2') && f('aCONSIDERATION')[14].any('1','2') && f('aCONSIDERATION')[15].any('1','2') && f('hidden_PURCHASE_GROUP').any('3') && f('AvHIDUSE').any('14') && f('AvHIDUSE').none('2') && f('AvHIDUSE').none('15')) ||
            (f('aDUALUSAGE').none('14') && f('aCONSIDERATION')[1].any('1','2') && f('aCONSIDERATION')[2].any('3','4') && f('aCONSIDERATION')[14].any('1','2') && f('aCONSIDERATION')[15].any('3','4') && f('hidden_PURCHASE_GROUP').any('3') && f('AvHIDUSE').any('14') && f('AvHIDUSE').none('1')) ||
            (f('aDUALUSAGE').none('14') && f('aCONSIDERATION')[1].any('3','4') && f('aCONSIDERATION')[2].any('1','2') && f('aCONSIDERATION')[14].any('1','2') && f('aCONSIDERATION')[15].any('3','4') && f('hidden_PURCHASE_GROUP').any('3') && f('AvHIDUSE').any('14') && f('AvHIDUSE').none('2')) ||
            (f('aDUALUSAGE').none('14') && f('aCONSIDERATION')[1].any('3','4') && f('aCONSIDERATION')[2].any('3','4') && f('aCONSIDERATION')[14].any('1','2') && f('aCONSIDERATION')[15].any('1','2') && f('hidden_PURCHASE_GROUP').any('3') && f('AvHIDUSE').any('14') && f('AvHIDUSE').none('15')) ) {
                f('hidden_HIDUSE').set('14');
            }
		//   Electric portable/on the go shaver 15
		if( (f('aDUALUSAGE').any('15') && f('AvHIDUSE').any('15')) ||
            (f('aDUALUSAGE').none('15') && f('aCONSIDERATION')[1].any('3','4') && f('aCONSIDERATION')[2].any('3','4') && f('aCONSIDERATION')[14].any('3','4') && f('aCONSIDERATION')[15].any('1','2') && f('hidden_PURCHASE_GROUP').any('3')) ||
            (f('aDUALUSAGE').none('15') && f('aCONSIDERATION')[1].any('1','2') && f('aCONSIDERATION')[2].any('1','2') && f('aCONSIDERATION')[14].any('1','2') && f('aCONSIDERATION')[15].any('1','2') && f('hidden_PURCHASE_GROUP').any('3') && f('AvHIDUSE').any('15') && f('AvHIDUSE').none('1') && f('AvHIDUSE').none('2') && f('AvHIDUSE').none('14')) ||
            (f('aDUALUSAGE').none('15') && f('aCONSIDERATION')[1].any('1','2') && f('aCONSIDERATION')[2].any('1','2') && f('aCONSIDERATION')[14].any('3','4') && f('aCONSIDERATION')[15].any('1','2') && f('hidden_PURCHASE_GROUP').any('3') && f('AvHIDUSE').any('15') && f('AvHIDUSE').none('1') && f('AvHIDUSE').none('2')) ||
            (f('aDUALUSAGE').none('15') && f('aCONSIDERATION')[1].any('1','2') && f('aCONSIDERATION')[2].any('3','4') && f('aCONSIDERATION')[14].any('1','2') && f('aCONSIDERATION')[15].any('1','2') && f('hidden_PURCHASE_GROUP').any('3') && f('AvHIDUSE').any('15') && f('AvHIDUSE').none('1') && f('AvHIDUSE').none('14')) ||
            (f('aDUALUSAGE').none('15') && f('aCONSIDERATION')[1].any('3','4') && f('aCONSIDERATION')[2].any('1','2') && f('aCONSIDERATION')[14].any('1','2') && f('aCONSIDERATION')[15].any('1','2') && f('hidden_PURCHASE_GROUP').any('3') && f('AvHIDUSE').any('15') && f('AvHIDUSE').none('2') && f('AvHIDUSE').none('14')) ||
            (f('aDUALUSAGE').none('15') && f('aCONSIDERATION')[1].any('1','2') && f('aCONSIDERATION')[2].any('3','4') && f('aCONSIDERATION')[14].any('3','4') && f('aCONSIDERATION')[15].any('1','2') && f('hidden_PURCHASE_GROUP').any('3') && f('AvHIDUSE').any('15') && f('AvHIDUSE').none('1')) ||
            (f('aDUALUSAGE').none('15') && f('aCONSIDERATION')[1].any('3','4') && f('aCONSIDERATION')[2].any('1','2') && f('aCONSIDERATION')[14].any('3','4') && f('aCONSIDERATION')[15].any('1','2') && f('hidden_PURCHASE_GROUP').any('3') && f('AvHIDUSE').any('15') && f('AvHIDUSE').none('2')) ||
            (f('aDUALUSAGE').none('15') && f('aCONSIDERATION')[1].any('3','4') && f('aCONSIDERATION')[2].any('3','4') && f('aCONSIDERATION')[14].any('1','2') && f('aCONSIDERATION')[15].any('1','2') && f('hidden_PURCHASE_GROUP').any('3') && f('AvHIDUSE').any('15') && f('AvHIDUSE').none('14')) ) {
                f('hidden_HIDUSE').set('15');
            }
		//   Disposable manual blade 3
		if( (f('aDUALUSAGE').any('3') && f('AvHIDUSE').any('3')) ||
            (f('aDUALUSAGE').none('3') && f('aCONSIDERATION')[3].any('1','2') && f('aCONSIDERATION')[4].any('3','4') && f('hidden_PURCHASE_GROUP').any('4')) ||
            (f('aDUALUSAGE').none('3') && f('aCONSIDERATION')[3].any('1','2') && f('aCONSIDERATION')[4].any('1','2') && f('hidden_PURCHASE_GROUP').any('4') && f('AvHIDUSE').any('3') && f('AvHIDUSE').none('4')) ) {
                f('hidden_HIDUSE').set('3');
            }
		//   Manual system blade (with replaceable blades) 4
		if( (f('aDUALUSAGE').any('4') && f('AvHIDUSE').any('4')) ||
            (f('aDUALUSAGE').none('4') && f('aCONSIDERATION')[3].any('3','4') && f('aCONSIDERATION')[4].any('1','2') && f('hidden_PURCHASE_GROUP').any('4')) ||
            (f('aDUALUSAGE').none('4') && f('aCONSIDERATION')[3].any('1','2') && f('aCONSIDERATION')[4].any('1','2') && f('hidden_PURCHASE_GROUP').any('4') && f('AvHIDUSE').any('4') && f('AvHIDUSE').none('3')) ) {
                f('hidden_HIDUSE').set('4');
            }
		
		// Possible LF punch
		if(f('AvHIDUSE').any('1') && f('AvHIDUSE').any('2') && f('AvHIDUSE').any('14') && f('AvHIDUSE').any('15')) {

			var mins = getmins('qPRODUCT','hidden_HIDUSE','AvHIDUSE',,1);

			if (mins != null) {
				if (mins != 0 && mins.length>0) {
					f('hidden_HIDUSE').set(mins[0].code);
				}
			}

		}
		if(f('AvHIDUSE').any('3') && f('AvHIDUSE').any('4')) {

			var mins = getmins('qPRODUCT','hidden_HIDUSE','AvHIDUSE',,1);

			if (mins != null) {
				if (mins != 0 && mins.length>0) {
					f('hidden_HIDUSE').set(mins[0].code);
				}
			}

		}
    }
}

if(f('aGENDER').any('1')){

    var ans = f('AvHIDUSE').domainValues();
    
    for(var j=0; j<ans.length; j++){
    
        var code = ans[j];
        f('hidden_HIDUSE').set(code);
    
        if (qf('qPRODUCT') || qf('qCountry')) {
    
            f('avHIDUSE')[code].set(null);
        
        } else {
    
            f('avHIDUSE')[code].set('1');
        }
    
        f('hidden_HIDUSE').set(null);
    
    }
    
    if(f('hidden_PURCHASE_GROUP').any('1','3','5')){
        f('avHIDUSE')[3].set(null);
        f('avHIDUSE')[4].set(null);
    }
    
    if(f('hidden_PURCHASE_GROUP').any('2','4','6')){
        f('avHIDUSE')[1].set(null);
        f('avHIDUSE')[2].set(null);
          f('avHIDUSE')[14].set(null);
        f('avHIDUSE')[15].set(null);
    }
    
    if(f('hidden_PURCHASE_GROUP').none('7','8','9')){
        f('avHIDUSE')[13].set(null);
    }
    
    }