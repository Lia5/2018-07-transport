$(document).ready(function(){function e(){$(".popup-bg").css("height",200+$(window).height())}function t(e,t){e.click(function(e){$(".popup-bg").addClass("active"),$("body").addClass("active"),t.addClass("active"),$("body").addClass("active"),e.preventDefault()}),$(".popup-bg").click(function(){$(this).removeClass("active"),t.removeClass("active"),$("body").removeClass("active")}),$(".popup-close").click(function(){$(".popup-bg").removeClass("active"),t.removeClass("active"),$("body").removeClass("active")}),$(".custom-click").click(function(){$(".customform").removeClass("active")}),t.click(function(e){e.preventDefault(),e.stopPropagation()})}$(window).resize(e()),e(),t($(".global-form"),$(".globalform")),t($(".polit-form"),$(".politform")),t($(".custom-form"),$(".customform")),t($(".popup-sertificate1"),$(".popupsertificate1")),t($(".popup-sertificate2"),$(".popupsertificate2")),t($(".popup-sertificate3"),$(".popupsertificate3")),t($(".popup-sertificate4"),$(".popupsertificate4")),$(".phone").mask("+7 (999) 999-9999"),wow=new WOW({boxClass:"wow",animateClass:"animated",offset:0}),(new WOW).init();var o,a=new Date;function n(){$("*[data-anchor]").each(function(e){var t=$(this).attr("data-anchor");$(this).offset().top-400<=$(window).scrollTop()&&($(".main-menu ul li").removeClass("active"),$('[data-menuAnchor="'+t+'"]').addClass("active"))})}document.getElementById("copy").innerHTML=a.getFullYear(),ymaps.ready(function(){var e=new ymaps.Map("map",{center:[55.729012,37.629215],zoom:15}),t=new ymaps.Placemark([55.729012,37.629215],{balloonContentBody:"Академия Героев",balloonContentFooter:"Москва, ул.Зацепа 41, офис 107",hintContent:"Академия Героев"},{iconImageSize:[66,100]});e.geoObjects.add(t),e.behaviors.disable("scrollZoom")}),$(window).scroll(function(){80<$(window).scrollTop()?$(".header").addClass("fixed-bg"):$("header").removeClass("fixed-bg")}),$(".menu-toggle").on("click",function(){$(this).toggleClass("on"),$(".main-menu").toggleClass("show"),$(".logo-mob").toggleClass("none"),$("body").toggleClass("overfloy")}),(o=jQuery)(function(){o("ul.tabs__caption").on("click","li:not(.active)",function(){o(this).addClass("active").siblings().removeClass("active").closest("div.tabs").find("div.tabs__content").removeClass("active").eq(o(this).index()).addClass("active")})}),$(".main-menu li").on("click",function(e){var t=$(this).attr("data-menuAnchor");e.preventDefault();var o=$('[data-anchor="'+t+'"]');$("html,body").stop().animate({scrollTop:$(o).offset().top-90},1e3)}),n(),$(window).scroll(function(){n()}),$(window).resize(function(){n()}),$(".regions__cont g").mouseover(function(e){$(".map-area.active").removeClass("active"),$(".map-area."+$(this).attr("data-class")).addClass("active"),$("#map-over-text .map-over-text-content").text($(this).attr("data-title")),$("#map-over-procent .map-over-procent-content").text($(this).attr("data-procent"))}).mouseleave(function(e){$(".map-area.active").removeClass("active"),$("#map-over-text .map-over-text-content").empty(),$("#map-over-procent .map-over-procent-content").empty()}),$(".regions__svg").mousemove(function(e){$("#map-over-text").css("left",e.clientX+"px").css("top",e.clientY+"px"),$("#map-over-procent").css("left",e.clientX+"px").css("top",e.clientY+"px")})});