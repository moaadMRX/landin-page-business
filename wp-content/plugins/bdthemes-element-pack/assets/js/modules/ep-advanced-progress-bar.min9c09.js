!function(t,e){"use strict";var n=function(t,e){var n=t.find(".bdt-ep-advanced-progress-bar-item");n.length&&elementorFrontend.waypoint(n,(function(){e(this);var t=e(this).find(" .bdt-ep-advanced-progress-bar-fill");e(window).scrollTop(),e(window).height();t.each((function(){e(this).offset().top,e(this).css("width",(function(){var t=e(this).attr("data-max-value");return 100*e(this).attr("data-width").slice(0,-1)/t+"%"})),e(this).children(".bdt-ep-advanced-progress-bar-parcentage").css({"-webkit-transform":"scale(1)","-moz-transform":"scale(1)","-ms-transform":"scale(1)","-o-transform":"scale(1)",transform:"scale(1)"})}))}),{offset:"90%"})};jQuery(window).on("elementor/frontend/init",(function(){elementorFrontend.hooks.addAction("frontend/element_ready/bdt-advanced-progress-bar.default",n)}))}(jQuery,window.elementorFrontend);