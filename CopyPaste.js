//абраняване на копи пейст в текст фийлд
$(document).ready(function(){
    $('#txtInput').on("cut copy paste",function(e) {
       e.preventDefault();
    });
 });