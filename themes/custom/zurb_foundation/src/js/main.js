$( document ).ready(function() {
    // $(".catalog__wrap").mCustomScrollbar();
});

$( document ).ready(function() {
    $(".news-item").each(function () {
        var item = $(this);
        $('.news-item__more', item).on('click', function () {
            $('.news-item__text', item).addClass('active');
            $('.news-item__more', item).hide();
        })
    });
});

$(document).ready(function () {
    $('.header-menu-btn').on('click', function () {
        $('.mobile-menu').toggleClass('active');
    })
});

$(document).ready(function () {
    $('.design-tabs__item').on('click', function () {
        var i = $(this).index();
        $('.design-tabs__item').removeClass('active');
        $(this).addClass('active');
        $('.design-content').removeClass('active');
        $('.design-content').eq(i).addClass('active');
    })
});


$(document).ready(function(){
    var owl1 = $(".catalog-slider");
    owl1.owlCarousel({
        items: 1,
        loop: true,
        smartSpeed: 1500
    });
    var owl2 = $(".portfolio-slider");
    owl2.owlCarousel({
        items: 1,
        loop: true,
        smartSpeed: 1500
    });
    owl1.on('mousewheel', '.owl-stage', function (e) {
        if (e.deltaY>0) {
            owl1.trigger('next.owl');
        } else {
            owl1.trigger('prev.owl');
        }
        e.preventDefault();
    });
    owl2.on('mousewheel', '.owl-stage', function (e) {
        if (e.deltaY>0) {
            owl2.trigger('next.owl');
        } else {
            owl2.trigger('prev.owl');
        }
        e.preventDefault();
    });
});