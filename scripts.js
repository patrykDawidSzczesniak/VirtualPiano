
$(document).ready(function () {
    $(document).on('click keydown', checkType).click();
    
    function checkType(event)
    {
        if (event.type === 'click'){
            animationId(event.target.id);
            playSound(event.target.id);
        }
        if (event.type === 'keydown'){
            animationId(event.key);
            playSound(event.key);
        }
    };

    function playSound(keyPressed){
        var audio = new Audio ('./sounds/' + keyPressed + '.ogg');
        audio.play();
    }

    function animationId(input){
        $("#" + input).addClass("keyAnimation");
        setTimeout(function(){
            $("#" + input).removeClass("keyAnimation")
        }, 100);
    }
});


