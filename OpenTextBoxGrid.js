$(document).ready(function () {
    var desktopBoxes = [document.getElementById('desktop_Q13_97_other'), document.getElementById('desktop_Q13_98_other'), document.getElementById('desktop_Q13_100_other')];
    var mobileBoxes = [document.getElementById('mobile_Q13_97_other'), document.getElementById('mobile_Q13_98_other'), document.getElementById('mobile_Q13_100_other')]
    var desktopContainer = [document.getElementById('desktop_Q13_97'), document.getElementById('desktop_Q13_98'), document.getElementById('desktop_Q13_100')]
    var mobileContainer = [document.getElementById('mobile_Q13_97'), document.getElementById('mobile_Q13_98'), document.getElementById('mobile_Q13_100')]
    for (var i = 0; i < mobileBoxes.length; i++) {
        mobileBoxes[i].addEventListener('keyup', showHideMobile);
        
    }
    for (var i = 0; i < desktopBoxes.length; i++) {
        desktopBoxes[i].addEventListener('keyup', showHideDesktop);
        
    }
    function checkIfBoxesEmpty() {
        for (var i = 0; i < desktopBoxes.length; i++) {
            if (desktopBoxes[i].value.length > 0) {
                $(desktopContainer[i]).css('display', '');
                if (i != 0) {
                    desktopContainer[i].parentElement.style.position = 'relative';
                }
            }
        }
        for (var i = 0; i < mobileBoxes.length; i++) {
            if (mobileBoxes[i].value.length > 0) {
                $(mobileContainer[i]).css('display', '');

                if (i != 0) {
                    mobileContainer[i].parentElement.style.position = 'relative';
                }
            }
        }
    }
    function showHideMobile() {
        //Show box 2
        if (mobileBoxes[0].value.length > 0) {
            $(mobileContainer[1]).css('display', '');
        } else if (mobileBoxes[0].value.length < 1 && mobileBoxes[1].value.length !== null) {
            currentQuestion.setOtherValue('98', null);
            $(mobileContainer[1]).css('display', 'none');
            currentQuestion.setOtherValue('98', null);
        }
        // Show Box 3
        if (mobileBoxes[1].value.length > 0) {
            $(mobileContainer[2]).css('display', '');
            mobileContainer[2].parentElement.style.position = 'relative';
        }
        else if (mobileBoxes[1].value.length < 1 && mobileBoxes[2].value.length !== null) {
            currentQuestion.setOtherValue('100', null);
            $(mobileContainer[2]).css('display', 'none');
            currentQuestion.setOtherValue('100', null);
        }
       
    }
    function showHideDesktop() {
        //Show box 2
        if (desktopBoxes[0].value.length > 0) {
            $(desktopContainer[1]).css('display', '');
            desktopContainer[1].parentElement.style.position = 'relative';
        } else if (desktopBoxes[0].value.length < 1 && desktopBoxes[1].value.length !== null) {
            currentQuestion.setOtherValue('98', null);
            $(desktopContainer[1]).css('display', 'none');
            currentQuestion.setOtherValue('98', null);
        }
        // Show Box 3
        if (desktopBoxes[1].value.length > 0) {
            $(desktopContainer[2]).css('display', '');
            desktopContainer[2].parentElement.style.position = 'relative';
        }
        else if (desktopBoxes[1].value.length < 1 && desktopBoxes[2].value.length !== null) {
            currentQuestion.setOtherValue('100', null);
            $(desktopContainer[2]).css('display', 'none');
            currentQuestion.setOtherValue('100', null);
        }
      
    }
    checkIfBoxesEmpty();
    showHideMobile();
    showHideDesktop();
});


