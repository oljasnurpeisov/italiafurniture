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
