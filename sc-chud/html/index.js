$(document).ready(function(){
    window.addEventListener("message", function(event){
        if(event.data.display == true){
            $('.container').fadeIn();
            $('.speed').text(event.data.speed);
            $('.hours').text(event.data.hours);
            $('.minutes').text(event.data.minutes);
            $('.street').text(event.data.street);
            $('.speed2').css("width", (event.data.speed) * 3 + "");
        } else {
            $('.container').fadeOut();
        }

        if (event.data.display == true ){
            if (event.data.speed >= 60 && event.data.speed <= 129) {
                $('.speed2').css('background-color', '#378959');
            } else if (event.data.speed >= 130 && event.data.speed <= 179) {
                $('.speed2').css('background-color', '#e9e895');
            } else if (event.data.speed >= 180) {
                $('.speed2').css('background-color', '#c84528');
            }
            else {
                $('.speed2').css('background-color', '#ffffff');
            };
        };

        if (event.data.display == true) {
            if (event.data.gasoline <= 10) {
                $('.gasoline').text("0" + event.data.gasoline);
            } else {
                $('.gasoline').text(event.data.gasoline);
            }
        }

    });
});
