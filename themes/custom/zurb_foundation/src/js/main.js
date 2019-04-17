(function ($, Drupal) {
  Drupal.behaviors.customCKEditorConfig = {
    attach: function (context, settings) {
      if (typeof CKEDITOR !== "undefined") {
        CKEDITOR.config.contentsLangDirection = 'rtl';
      }
    }
  }
})(jQuery, Drupal);

(function ($, Drupal) {
  Drupal.behaviors.news_item__more = {
    attach: function (context, settings) {
      {$(".news-item").each(function(){var e=$(this);$(".news-item__more",e).on("click",function(){$(".news-item__text",e).addClass("active"),$(".news-item__more",e).hide()})})}
    }
  }
})(jQuery, Drupal);

(function ($, Drupal) {
  Drupal.behaviors.mobileMenu = {
    attach: function (context, settings) {
      {$(".header-menu-btn").on("click",function(){$(".mobile-menu").toggleClass("active")})}
    }
  }
})(jQuery, Drupal);

(function ($, Drupal) {
  Drupal.behaviors.design_tabs = {
    attach: function (context, settings) {
      {$(".design-tabs__item").on("click",function(){var e=$(this).index();$(".design-tabs__item").removeClass("active"),$(this).addClass("active"),$(".design-content").removeClass("active"),$(".design-content").eq(e).addClass("active")})}
    }
  }
})(jQuery, Drupal);

(function ($, Drupal) {
  Drupal.behaviors.catalogSlider = {
    attach: function (context, settings) {
      {var t=$(".catalog-slider");t.owlCarousel({items:1,loop:!0,smartSpeed:1500});var n=$(".portfolio-slider");n.owlCarousel({items:1,loop:!0,smartSpeed:1500}),t.on("mousewheel",".owl-stage",function(e){0<e.deltaY?t.trigger("next.owl"):t.trigger("prev.owl"),e.preventDefault()}),n.on("mousewheel",".owl-stage",function(e){0<e.deltaY?n.trigger("next.owl"):n.trigger("prev.owl"),e.preventDefault()})}
    }
  }
})(jQuery, Drupal);


(function ($, Drupal) {
  Drupal.behaviors.jsDocRemoveLink = {
    attach: function (context, settings) {
      $('.jsModalClose').on('click', function(){
    		$('.jsModal[data-type=document-view]').removeClass('opened');
    		$('body').removeClass('modal-open');
  	  });
    }
  }
})(jQuery, Drupal);

(function ($, Drupal) {
  Drupal.behaviors.jsDocLink = {
    attach: function (context, settings) {
      $('.jsDocLink').click(function (e) {
      		e.preventDefault();

      		$('.jsModal[data-type=document-view]').addClass('opened');
      		$('body').addClass('modal-open');

      		$('.jsModalFrame').attr('src','https://docs.google.com/viewer?url=' + this.href + '&embedded=true');

      		return false;
      	});
    }
  }
})(jQuery, Drupal);

(function ($, Drupal) {
  Drupal.behaviors.FotoramaLightbox = {
    attach: function (context, settings) {
      function t() {
          $(".fotorama").each(function() {
              var t = $(this).data("fotorama").data;
              $(this).find(".fotorama__stage__frame").each(function(e) {
                  var o = $(this).width();
                  img = t[e].img, 767 > o && t[e].sm && (img = t[e].sm), 510 > o && t[e].xs && (img = t[e].xs), $(this).children("img").attr("src", img)
              })
          })
      }
      $(function () {

        var e = $(window),
            o = $("body"),
            i = function(a, t) {
                a.data("open") ? a.stop().css({
                    marginTop: -30,
                    left: o.width() / 2 - a.width() / 2,
                    top: e.scrollTop() + e.height() / 2 - a.height() / 2 - 20
                }).animate({
                    marginTop: 0,
                    opacity: 1
                }, t || 0) : a.css({
                    left: -99999,
                    top: -99999
                })
            },
            s = function() {
                var a = o.data("$fotorama");
                a && (o.removeClass("overflow-hidden").data("$fotorama", null), a.stop().animate({
                    marginTop: 30,
                    opacity: 0
                }, 300, function() {
                    i(a.data("open", !1))
                }))
            };
        $(".thumbs").each(function() {
            var n = $(this),
                r = $(".fotorama", n);
            $fotorama = r.clone().addClass("fotorama-lightbox").data("allow-full-screen", "true").data("nav", "dots").data("arrows", "true").data("click", "true").appendTo("body").fadeTo(0, 0).fotorama(), fotorama = $fotorama.data("fotorama"), r.fotorama(), i($fotorama);
            for (var l = 0, c = fotorama.data.length; c > l; l++) fotorama.data[l].id = fotorama.data[l].img;
            $fotorama.on("click", function(a) {
                a.stopPropagation()
            }), n.on("click", ".fotorama__stage .fotorama__img", function(t) {
                t.preventDefault(), t.stopPropagation();
                var e = $(this),
                    s = o.data("$fotorama");
                fotorama.show({
                    index: e.attr("src"),
                    time: s ? 300 : 0,
                    slow: t.altKey
                }), fotorama.setOptions({
                    height: "80%",
                    maxwidth: "100%"
                }), s || (o.addClass("overflow-hidden").data("$fotorama", $fotorama), $fotorama.css({
                    left: e.offset().left,
                    top: e.offset().top
                }), i($fotorama.data("open", !0), 300))
            }), t(), e.on("resize", function() {
                i($fotorama), t()
            }), $(document).on("click", s).on("keydown", function(a) {
                var t = o.data("$fotorama");
                if (t) {
                    var e = t.data("fotorama");
                    27 === a.keyCode ? (a.preventDefault(), s()) : 39 === a.keyCode ? e.show({
                        index: ">",
                        slow: a.altKey,
                        direct: !0
                    }) : 37 === a.keyCode && (a.preventDefault(), e.show({
                        index: "<",
                        slow: a.altKey,
                        direct: !0
                    }))
                }
            }), $fotorama.on("fotorama:fullscreenenter", function(a, t) {
                t.cancelFullScreen(), s()
            })
        });

      });
    }
  }
})(jQuery, Drupal);
