$(document).ready(function(){function e(){$(".popup-bg").css("height",200+$(window).height())}var o,t;$(window).resize(e()),e(),o=$(".custom-form"),t=$(".customform"),o.click(function(e){$(".popup-bg").addClass("active"),$("body").addClass("active"),t.addClass("active"),$("body").addClass("active"),e.preventDefault()}),$(".popup-bg").click(function(){$(this).removeClass("active"),t.removeClass("active"),$("body").removeClass("active")}),$(".popup-close").click(function(){$(".popup-bg").removeClass("active"),t.removeClass("active"),$("body").removeClass("active")}),$(".custom-click").click(function(){$(".customform").removeClass("active")}),t.click(function(e){e.preventDefault(),e.stopPropagation()}),$(".popup--form").submit(function(){var e=$(this);return $.ajax({type:"POST",url:"../mail2.php",data:e.serialize()}).done(function(){alert("Thank you!"),setTimeout(function(){e.trigger("reset")},1e3)}),!1}),$(".phone").mask("+7 (999) 999-9999"),wow=new WOW({boxClass:"wow",animateClass:"animated",offset:0}),(new WOW).init();var n,a=new Date;function s(){$("*[data-anchor]").each(function(e){var o=$(this).attr("data-anchor");$(this).offset().top-400<=$(window).scrollTop()&&($(".main-menu ul li").removeClass("active"),$('[data-menuAnchor="'+o+'"]').addClass("active"))})}document.getElementById("copy").innerHTML=a.getFullYear(),ymaps.ready(function(){var o=new ymaps.multiRouter.MultiRoute({referencePoints:[[55.734876,37.59308],"Москва, ул. Мясницкая"],params:{results:2}},{boundsAutoApply:!0}),e=new ymaps.control.Button({data:{content:"Учитывать пробки"},options:{selectOnClick:!0}}),t=new ymaps.control.Button({data:{content:"Добавить транзитную точку"},options:{selectOnClick:!0}});e.events.add("select",function(){o.model.setParams({avoidTrafficJams:!0},!0)}),e.events.add("deselect",function(){o.model.setParams({avoidTrafficJams:!1},!0)}),t.events.add("select",function(){var e=o.model.getReferencePoints();e.splice(1,0,"Москва, ул. Солянка, 7"),o.model.setReferencePoints(e,[1])}),t.events.add("deselect",function(){var e=o.model.getReferencePoints();e.splice(1,1),o.model.setReferencePoints(e,[])});var n=new ymaps.Map("map",{center:[55.750625,37.626],zoom:7,controls:[e,t]},{buttonMaxWidth:300});n.geoObjects.add(o),n.behaviors.disable("scrollZoom"),n.controls.add("zoomControl")}),$(window).scroll(function(){80<$(window).scrollTop()?$(".header").addClass("fixed-bg"):$("header").removeClass("fixed-bg")}),$(".menu-toggle").on("click",function(){$(this).toggleClass("on"),$(".main-menu").toggleClass("show"),$(".logo-mob").toggleClass("none"),$("body").toggleClass("overfloy")}),jQuery(window).width()<=1240&&$(".menu-items li").on("click",function(){$(".menu-toggle").removeClass("on"),$(".main-menu").removeClass("show"),$(".logo-mob").removeClass("none"),$("body").removeClass("overfloy")}),(n=jQuery)(function(){n("ul.tabs__caption").on("click","li:not(.active)",function(){n(this).addClass("active").siblings().removeClass("active").closest("div.tabs").find("div.tabs__content").removeClass("active").eq(n(this).index()).addClass("active")})}),$(".question--form").submit(function(){var e=$(this);return $.ajax({type:"POST",url:"../mail.php",data:e.serialize()}).done(function(){alert("Thank you!"),setTimeout(function(){e.trigger("reset")},1e3)}),!1}),$(".popup--form").submit(function(){var e=$(this);return $.ajax({type:"POST",url:"../mail.php",data:e.serialize()}).done(function(){alert("Thank you!"),setTimeout(function(){e.trigger("reset")},1e3)}),!1}),$(".main-menu li").on("click",function(e){var o=$(this).attr("data-menuAnchor");e.preventDefault();var t=$('[data-anchor="'+o+'"]');$("html,body").stop().animate({scrollTop:$(t).offset().top-90},1e3)}),s(),$(window).scroll(function(){s()}),$(window).resize(function(){s()})});