


$(document).ready(function() {
    $(document).foundation();

    $('.carousel').slick({
        dots: true,
        infinite: true,
        speed: 500,
        arrows:false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true
    });


    $(window).resize(fixSizing);


    $('.top-bar a').click(smoothScroll);
    $('.contain-to-grid, .top-bar').css({
        "background":"#3399FF",
            "opacity": ".9"
    });
    $('.title h1').mouseover(function() {
        $(this).animate({"font-size": "700%"}, "slow");
    });

    $('.title h1').mouseout(function(){
        $(this).animate({"font-size": "500%"}, "slow");
    });


});




function smoothScroll(event){
    event.preventDefault();
    var target = this.hash;
    var padding = 0;
    if (target === "#menu" || target ==="")
        return;
    else if (target==="#home")
        padding = 0;
    else
        padding = 50;

    $('html, body').animate({
        scrollTop: $(this.hash).position().top - padding
    }, 1000);
}

function fixSizing(event){
    var landSection = $('.landing-page');
    var landImg = $('.landing-page img');
    var winHeight = $(window).height();

    if(landImg.height() > winHeight)
        landSection.css("height",winHeight);
    else
        landSection.css("height",landImg.height());
}