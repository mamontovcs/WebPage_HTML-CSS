$(function () {

    /*Fixed header*/
    let header = $("#header");
    let intro = $("#intro");
    let introHeight = intro.innerHeight();
    let scrollPos = $(window).scrollTop();

    checkScroll(introHeight, scrollPos);

    $(window).on("scroll  resize", function () {

        introHeight = intro.innerHeight();

        scrollPos = $(this).scrollTop();

        checkScroll(introHeight, scrollPos);

    });

    function checkScroll(introHeight, scrollPos) {

        if (scrollPos > introHeight) {
            header.addClass("fixed");

        } else {
            header.removeClass("fixed");
        }
    }

    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;

        $("html, body").animate({
            scrollTop: elementOffset - 70
        }, 700);

    })

});
