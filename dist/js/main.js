$(document).ready(function() {

	//BEGIN popup global
	function popupbg() {
		$('.popup-bg').css('height', 200 + $(window).height());
	}

	$(window).resize(popupbg());

	popupbg();

	function popups(elem, popup) {

		elem.click(function(e) {
			$('.popup-bg').addClass('active');
			$('body').addClass('active');
			popup.addClass('active');
			$('body').addClass('active');

			e.preventDefault();

		})

		$('.popup-bg').click(function() {
			$(this).removeClass('active');
			popup.removeClass('active');
			$('body').removeClass('active');
		})

		$('.popup-close').click(function() {
			$('.popup-bg').removeClass('active');
			popup.removeClass('active');
			$('body').removeClass('active');
		})
		$('.custom-click').click(function() {
			$('.customform').removeClass('active');
		})
			// popup.click(function(e) {
			// 	e.preventDefault();
			// 	e.stopPropagation();
			// });

		
	}

	popups($('.custom-form'), $('.customform'));
	//popups(elem, popup);
	//END popup global
	// $(".popup--form").submit(function() { //Change
	// 	var th = $(this);
	// 	$.ajax({
	// 	  type: "POST",
	// 	  url: "../mail.php", //Change
	// 	  data: th.serialize()
	// 	}).done(function() {
	// 	  alert("Thank you!");
	// 	  setTimeout(function() {
	// 		// Done Functions
	// 		th.trigger("reset");
	// 	  }, 1000);

	// 	});

	// 	return false;
	//   });
	//BEGIN phone input
	$(".phone").mask("+7 (999) 999-9999");
	
	//END phone input


	//BEGIN animation
	wow = new WOW({
		boxClass: 'wow',
		animateClass: 'animated',
		offset: 0
	})
	new WOW().init();
	
	//END animation

	//BEGIN copyright
	var copyYear = new Date();
	document.getElementById('copy').innerHTML = copyYear.getFullYear()
	//END copyright

  // MAP
    
	function init () {
    /**
     * Создаем мультимаршрут.
     * Первым аргументом передаем модель либо объект описания модели.
     * Вторым аргументом передаем опции отображения мультимаршрута.
     * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/multiRouter.MultiRoute.xml
     * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/multiRouter.MultiRouteModel.xml
     */
    var multiRoute = new ymaps.multiRouter.MultiRoute({
        // Описание опорных точек мультимаршрута.
        referencePoints: [
            [55.734876, 37.59308],
            "Москва, ул. Мясницкая"
        ],
        // Параметры маршрутизации.
        params: {
            // Ограничение на максимальное количество маршрутов, возвращаемое маршрутизатором.
            results: 2
        }
    }, {
        // Автоматически устанавливать границы карты так, чтобы маршрут был виден целиком.
        boundsAutoApply: true
    });

    // Создаем кнопки для управления мультимаршрутом.
    var trafficButton = new ymaps.control.Button({
            data: { content: "Учитывать пробки" },
            options: { selectOnClick: true }
        }),
        viaPointButton = new ymaps.control.Button({
            data: { content: "Добавить транзитную точку" },
            options: { selectOnClick: true }
        });

    // Объявляем обработчики для кнопок.
    trafficButton.events.add('select', function () {
        /**
         * Задаем параметры маршрутизации для модели мультимаршрута.
         * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/multiRouter.MultiRouteModel.xml#setParams
         */
        multiRoute.model.setParams({ avoidTrafficJams: true }, true);
    });

    trafficButton.events.add('deselect', function () {
        multiRoute.model.setParams({ avoidTrafficJams: false }, true);
    });

    viaPointButton.events.add('select', function () {
        var referencePoints = multiRoute.model.getReferencePoints();
        referencePoints.splice(1, 0, "Москва, ул. Солянка, 7");
        /**
         * Добавляем транзитную точку в модель мультимаршрута.
         * Обратите внимание, что транзитные точки могут находится только
         * между двумя путевыми точками, т.е. не могут быть крайними точками маршрута.
         * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/multiRouter.MultiRouteModel.xml#setReferencePoints
         */
        multiRoute.model.setReferencePoints(referencePoints, [1]);
    });

    viaPointButton.events.add('deselect', function () {
        var referencePoints = multiRoute.model.getReferencePoints();
        referencePoints.splice(1, 1);
        multiRoute.model.setReferencePoints(referencePoints, []);
    });

    // Создаем карту с добавленными на нее кнопками.
    var myMap = new ymaps.Map('map', {
        center: [55.750625, 37.626],
        zoom: 7,
        controls: [trafficButton, viaPointButton]
    }, {
        buttonMaxWidth: 300
    });

    // Добавляем мультимаршрут на карту.
	myMap.geoObjects.add(multiRoute);
	myMap.behaviors.disable('scrollZoom'); 
	myMap.controls.add('zoomControl');
}

ymaps.ready(init);



//BEGIN fixed-bg

$(window).scroll(function() {
	var height = $(window).scrollTop();
	 /*Если сделали скролл на 100px задаём новый класс для header*/
	if(height > 80){
	$('.header').addClass('fixed-bg');
	} else{
			 /*Если меньше 100px удаляем класс для header*/
	$('header').removeClass('fixed-bg');
	}
});
//END fixed-bg

	//menu
	$(".menu-toggle").on('click', function() {
		$(this).toggleClass("on");
		$('.main-menu').toggleClass("show");
		$('.logo-mob').toggleClass("none");
		$('body').toggleClass('overfloy');
	});
	jQuery(window).width() <= 1240 && $(".menu-items li").on('click', function() {
		$('.menu-toggle').removeClass("on");
		$('.main-menu').removeClass("show");
		$('.logo-mob').removeClass("none");
		$('body').removeClass('overfloy');
	});
	//tabs
	(function($) {
		$(function() {
			$('ul.tabs__caption').on('click', 'li:not(.active)', function() {
				$(this)
					.addClass('active').siblings().removeClass('active')
					.closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
			});
		 
		});
		})(jQuery);
  
    //E-mail Ajax Send
    $(".question--form").submit(function() { //Change
		var th = $(this);
		$.ajax({
		  type: "POST",
		  url: "../mail.php", //Change
		  data: th.serialize()
		}).done(function() {
		  alert("Thank you!");
		  setTimeout(function() {
			// Done Functions
			th.trigger("reset");
		  }, 1000);
		});
		return false;
	  });
	$(".popup--form").submit(function() { //Change
		var th = $(this);
		$.ajax({
		  type: "POST",
		  url: "../mail.php", //Change
		  data: th.serialize()
		}).done(function() {
		  alert("Thank you!");
		  setTimeout(function() {
			// Done Functions
			th.trigger("reset");
		  }, 1000);
		});
		return false;
	  });

	//BEGIN Anchor menu
	//li.anchor(data-menuAnchor="#section")
	//section(data-anchor="#section")

	$('.main-menu li').on('click', function(e){
		var dataName = $(this).attr('data-menuAnchor');
		e.preventDefault();
		var id = $('[data-anchor="'+ dataName + '"]');
		$('html,body').stop().animate({ scrollTop: $(id).offset().top-90 }, 1000);
	});

	function AnchorActive() {
		$('*[data-anchor]').each(function(e) {
			var dataName = $(this).attr('data-anchor');
			var posit = $(this).offset().top - 400;

			var windowPostition = $(window).scrollTop();

			if (windowPostition >= posit) {
				$('.main-menu ul li').removeClass('active');
				$('[data-menuAnchor="'+ dataName + '"]').addClass('active');
			}
		});
	};

	AnchorActive();
	$(window).scroll(function() {
		AnchorActive();
	});

	$(window).resize(function() {
		AnchorActive();
	});
	//END Anchor menu

	
	//BEGIN fixed-mouse
	//$('body').mCustomScrollbar();
	
	//END fixed-mouse

	//BEGIN loader
	//window.onload = function() {
		//document.querySelector('.loader').style.display = "none"
	//}
	//END loader
// $('#map-reg').mouseover(function() {
// 	$('.all').css({'stroke':'red;'});
// }); 
// $('#map-reg').mouseover(function() {
// 	$('.regions__name').remove().appendTo('svg');
// });


});//End Ready



