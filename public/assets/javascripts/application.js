;;

$(function() {
    "use strict";

    $('.js--greet').on('click', function()
    {
        var helloWorld = new HelloWorld();
        alert(helloWorld.greet());
    });
});
