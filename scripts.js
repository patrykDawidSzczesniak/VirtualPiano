
$(document).ready(function () {
    $(document).on('click keydown', checkType).click();
    
    function checkType(event)
    {
        if (event.type === 'click'){
            animation(event.target.id);
            playSound(event.target.id);
            if (event.key === ';'){
                animation('semiColon');
                playSound('semiColon');
            }
        }
        if (event.type === 'keydown'){
            if (event.key === ';'){
                animation('semiColon');
                playSound('semiColon');
            }
            animation(event.key);
            playSound(event.key);
        }
    };

    function playSound(keyPressed){
        var audio = new Audio ('./sounds/' + keyPressed + '.ogg');
        audio.play();
    }

    function animation(input){
        $("#" + input).addClass("keyAnimation");
        setTimeout(function(){
            $("#" + input).removeClass("keyAnimation")
        }, 100);
        console.log(input);
    }
});


