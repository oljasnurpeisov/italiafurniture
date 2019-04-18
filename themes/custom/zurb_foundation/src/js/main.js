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
      $(function () {
        var $document = $(document),
            $window = $(window),
            $body = $('body');

            var placeFotorama = function ($fotorama, time) {
              if ($fotorama.data('open')) {
                $fotorama
                    .stop()
                    .css({marginTop: -30, left: $body.width() / 2 - $fotorama.width() / 2, top: $window.scrollTop() + $window.height() / 2 - $fotorama.height() / 2 - 20})
                    .animate({marginTop: 0, opacity: 1}, time || 0);
              } else {
                $fotorama.css({left: -99999, top: -99999});
              }
            },
        s = function() {
            var a = $body.data("$fotorama");
            a && ($body.removeClass("overflow-hidden").data("$fotorama", null), a.stop().animate({
                marginTop: 30,
                opacity: 0
            }, 300, function() {
                placeFotorama(a.data("open", !1))
            }))
        };

        // take all .fotorama blocks
        $('.thumbs').each(function () {
          var $thumbs = $(this),
          r = $(".fotorama", $thumbs);
          $fotorama = r.clone()
            .addClass('fotorama-lightbox')
            .data("allow-full-screen", "true")
            .data("nav", "dots")
            .data("arrows", "true")
            .data("click", "true")
            .appendTo('body')
            .fadeTo(0, 0)
            .fotorama(),
          fotorama = $fotorama.data("fotorama"), r.fotorama(), placeFotorama($fotorama);
          for (var _i = 0, _l = fotorama.data.length; _i < _l; _i++) {
            // prepare id to use in fotorama.show()
            fotorama.data[_i].id = fotorama.data[_i].img;
          }

          // bind clicks
          $fotorama.on('click', function (e) {
            e.stopPropagation();
          }), $thumbs.on('click', '.fotorama__stage .fotorama__img', function(t) {
            t.preventDefault();
            t.stopPropagation();

            var $this = $(this),
                _$fotorama = $body.data('$fotorama');

            fotorama
                // show needed frame
                .show({index: $this.attr('src'), time: _$fotorama ? 300 : 0, slow: t.altKey, direct: true});

            if (_$fotorama) return;

            $body
                .addClass('overflow-hidden')
                .data('$fotorama', $fotorama);

            $fotorama.css({left: $this.offset().left, top: $this.offset().top});
            placeFotorama($fotorama.data('open', true), 300);
          });

          $window.on('resize', function () {
            placeFotorama($fotorama);
          });

          var closeFotorama = function () {
            var $fotorama = $body.data('$fotorama');

            if (!$fotorama) return;
            $body
                .removeClass('overflow-hidden')
                .data('$fotorama', null);
            $fotorama
                .stop()
                .animate({marginTop: 30, opacity: 0}, 300, function () {
                  placeFotorama($fotorama.data('open', false));
                });
          };

          $document
              .on('click', closeFotorama)
              .on('keydown', function (e) {
                var $fotorama = $body.data('$fotorama');

                if (!$fotorama) return;

                var fotorama = $fotorama.data('fotorama');

                if (e.keyCode === 27) {
                  e.preventDefault();
                  s();
                } else if (e.keyCode === 39) {
                  fotorama.show({index: '>', slow: e.altKey, direct: true});
                } else if (e.keyCode === 37) {
                  e.preventDefault();
                  fotorama.show({index: '<', slow: e.altKey, direct: true});
                }
              });

          $fotorama.on('fotorama:fullscreenenter', function (e, fotorama) {
            fotorama.cancelFullScreen(), s()
          });
        });

      });
    }
  }
})(jQuery, Drupal);
