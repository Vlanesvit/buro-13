/*
Документация слайдера: https://swiperjs.com/
*/

// Инициализация слайдеров
function initSliders() {
	// Перечень слайдов
	if (document.querySelector('.rs-slider')) {
		const sliderBlocks = document.querySelectorAll('.rs-slider');
		sliderBlocks.forEach(sliderBlock => {
			const sliderImg = sliderBlock.querySelector('.rs-slider__img_slider');
			const paginationImg = sliderBlock.querySelector('.rs-slider__img_pagination');
			const arrowNextImg = sliderBlock.querySelector('.rs-slider__img_button-next');
			const arrowPrevImg = sliderBlock.querySelector('.rs-slider__img_button-prev');
			const sliderContent = sliderBlock.querySelector('.rs-slider__content_slider');
			const paginationContent = sliderBlock.querySelector('.rs-slider__pagination');
			const arrowNextContent = sliderBlock.querySelector('.rs-slider__button-next');
			const arrowPrevContent = sliderBlock.querySelector('.rs-slider__button-prev');

			const sliderSwiperContent = new Swiper(sliderContent, {
				// Автопрокрутка
				autoplay: {
					// Пауза между прокруткой
					delay: 10000,
					// Закончить на последнем слайде
					stopOnLastSlide: false,
					// Отключить после ручного переключения
					disableOnInteraction: false,
				},

				// Обновить свайпер
				// при изменении элементов слайдера
				observer: true,
				// при изменении родительских элементов слайдера
				observeParents: true,
				// при изменении дочерних элементов слайдера
				observeSlideChildren: true,

				// Скорость смены слайдов
				speed: 500,

				// Включение/отключение
				// перетаскивание на ПК
				simulateTouch: true,
				// Чувствительность свайпа
				touchRadio: 1,
				// Угол срабатывания свайпа/перетаскивания
				touchAngle: 45,

				// Цикличность слайдера
				loop: true,

				// Анимация переключения
				effect: 'fade',

				autoHeight: true,

				// Курсор
				grabCursor: true,

				// Пагинация
				pagination: {
					el: paginationContent,
					clickable: true,
					// dynamicBullets: true
				},

				// Стрелки
				navigation: {
					nextEl: arrowNextContent,
					prevEl: arrowPrevContent,
				},

				slidesPerView: 1,
			});

			const sliderSwiperImg = new Swiper(sliderImg, {
				// Автопрокрутка
				autoplay: {
					// Пауза между прокруткой
					delay: 10000,
					// Закончить на последнем слайде
					stopOnLastSlide: false,
					// Отключить после ручного переключения
					disableOnInteraction: false,
				},

				// Обновить свайпер
				// при изменении элементов слайдера
				observer: true,
				// при изменении родительских элементов слайдера
				observeParents: true,
				// при изменении дочерних элементов слайдера
				observeSlideChildren: true,

				// Скорость смены слайдов
				speed: 500,

				// Включение/отключение
				// перетаскивание на ПК
				simulateTouch: true,
				// Чувствительность свайпа
				touchRadio: 1,
				// Угол срабатывания свайпа/перетаскивания
				touchAngle: 45,

				// Цикличность слайдера
				loop: true,

				// Анимация переключения
				// effect: 'fade',

				// Курсор
				grabCursor: true,

				// Пагинация
				pagination: {
					el: paginationImg,
					clickable: true,
					// dynamicBullets: true
				},

				// Стрелки
				navigation: {
					nextEl: arrowNextImg,
					prevEl: arrowPrevImg,
				},

				slidesPerView: 1,
			});

			// "Связка" слайдеров
			sliderSwiperImg.controller.control = sliderSwiperContent;
			sliderSwiperContent.controller.control = sliderSwiperImg;
		});
	}

	if (document.querySelector('.rs-catalog-product')) {
		const sliderBlocks = document.querySelectorAll('.rs-catalog-product');
		sliderBlocks.forEach(sliderBlock => {
			const slider = sliderBlock.querySelector('.rs-catalog-product__slider');
			const pagination = sliderBlock.querySelector('.rs-catalog-product__pagination');
			const arrowNext = sliderBlock.querySelector('.rs-catalog-product__button-next');
			const arrowPrev = sliderBlock.querySelector('.rs-catalog-product__button-prev');

			const sliderSwiper = new Swiper(slider, {
				// Автопрокрутка
				autoplay: {
					// Пауза между прокруткой
					delay: 10000,
					// Закончить на последнем слайде
					stopOnLastSlide: false,
					// Отключить после ручного переключения
					disableOnInteraction: false,
				},

				// Обновить свайпер
				// при изменении элементов слайдера
				observer: true,
				// при изменении родительских элементов слайдера
				observeParents: true,
				// при изменении дочерних элементов слайдера
				observeSlideChildren: true,

				// Скорость смены слайдов
				speed: 500,

				// Включение/отключение
				// перетаскивание на ПК
				simulateTouch: true,
				// Чувствительность свайпа
				touchRadio: 1,
				// Угол срабатывания свайпа/перетаскивания
				touchAngle: 45,

				// Цикличность слайдера
				// loop: true,

				// Анимация переключения
				// effect: 'fade',

				// Курсор
				grabCursor: true,

				// Пагинация
				pagination: {
					el: pagination,
					clickable: true,
					// dynamicBullets: true
				},

				// Стрелки
				navigation: {
					nextEl: arrowNext,
					prevEl: arrowPrev,
				},

				// Брейкпоинты(адаптив)
				// Шрина экрана
				breakpoints: {
					320: {
						slidesPerView: 1,
						spaceBetween: 10,
						centeredSlides: true,
					},
					767.98: {
						slidesPerView: 2,
						spaceBetween: 30,
						centeredSlides: false,
					},
					1169.98: {
						slidesPerView: 3,
						spaceBetween: 30,
						centeredSlides: false,
					},
				},
			});
		});
	}

	if (document.querySelector('.rs-product-slider')) {
		const sliderBlocks = document.querySelectorAll('.rs-product-slider');
		sliderBlocks.forEach(sliderBlock => {
			const slider = sliderBlock.querySelector('.rs-product-slider__slider');
			const pagination = slider.querySelector('.rs-product-slider__pagination');
			const arrowNext = slider.querySelector('.rs-product-slider__button-next');
			const arrowPrev = slider.querySelector('.rs-product-slider__button-prev');

			const sliderSwiper = new Swiper(slider, {
				// Автопрокрутка
				autoplay: {
					// Пауза между прокруткой
					delay: 10000,
					// Закончить на последнем слайде
					stopOnLastSlide: false,
					// Отключить после ручного переключения
					disableOnInteraction: false,
				},

				// Обновить свайпер
				// при изменении элементов слайдера
				observer: true,
				// при изменении родительских элементов слайдера
				observeParents: true,
				// при изменении дочерних элементов слайдера
				observeSlideChildren: true,

				// Скорость смены слайдов
				speed: 500,

				// Включение/отключение
				// перетаскивание на ПК
				simulateTouch: true,
				// Чувствительность свайпа
				touchRadio: 1,
				// Угол срабатывания свайпа/перетаскивания
				touchAngle: 45,

				// Цикличность слайдера
				// loop: true,

				// Анимация переключения
				// effect: 'fade',

				// Курсор
				grabCursor: true,

				// Пагинация
				pagination: {
					el: pagination,
					clickable: true,
					// dynamicBullets: true
				},

				// Стрелки
				navigation: {
					nextEl: arrowNext,
					prevEl: arrowPrev,
				},

				// Брейкпоинты(адаптив)
				// Шрина экрана
				breakpoints: {
					320: {
						slidesPerView: 1,
						spaceBetween: 10,
						centeredSlides: true,
					},
					767.98: {
						slidesPerView: 2,
						spaceBetween: 24,
						centeredSlides: false,
					},
					991.98: {
						slidesPerView: 3,
						spaceBetween: 30,
						centeredSlides: false,
					},
					1439.98: {
						slidesPerView: 4,
						spaceBetween: 30,
						centeredSlides: false,
					},
				},
			});
		});
	}
}

// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	if (document.querySelector('.swiper')) {
		initSliders();
	}
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});