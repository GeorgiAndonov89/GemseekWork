var sec = 7;
var check = 0;
setTimeout(function () { check = 1; $(".cf-navigation-next").show(); }, 8000);

setInterval(function () {
    if (check == 0) {
        $("#sec").html(sec);
        sec--
    }
    if (check == 1) {
        $("#sec").html("0");
    }
}, 1000);