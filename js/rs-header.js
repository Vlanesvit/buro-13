
/* ====================================
Меню
==================================== */
function menuFunction() {
	const menus = document.querySelectorAll('.rs-header__menu');

	// Меню
	function menuInit() {
		menus.forEach(menu => {
			//========================================================================================================================================================

			// Бургер-кнопка
			const menuBurgerBtns = menu.querySelectorAll('.icon-menu');
			const menuBurgerClose = menu.querySelectorAll('.menu__close');
			if (menuBurgerBtns) {
				menuBurgerBtns.forEach(btn => {
					// Открываем меню
					btn.addEventListener("click", function (e) {
						if (document.documentElement.classList.contains("menu-open")) {
							menuClose("menu-open");
						} else {
							menuOpen("menu-open")
						}

						menuItemDropdownsMenu.forEach(menu => {
							_slideUp(menu, 500);
						});
						menuItemDropdowns.forEach(item => {
							item.classList.remove('_open-menu');
						});
					});
				});
			}
			if (menuBurgerClose) {
				menuBurgerClose.forEach(btn => {
					// Открываем меню
					btn.addEventListener("click", function (e) {
						menuClose("menu-open");

						menuItemDropdownsMenu.forEach(menu => {
							_slideUp(menu, 500);
						});
						menuItemDropdowns.forEach(item => {
							item.classList.remove('_open-menu');
						});
					});
				});
			}

			//========================================================================================================================================================

			// Все пункты с выпадающим меню
			const menuItemDropdowns = menu.querySelectorAll('.menu__list .menu__dropdown');
			const menuItemDropdownsMenu = menu.querySelectorAll('.menu__list .menu__dropdown_list');

			// 1-ый уровень
			const menuItemDropdownsFirst = menu.querySelectorAll('.menu__list > .menu__dropdown');
			const menuItemDropdownsMenuFirst = menu.querySelectorAll('.menu__list > .menu__dropdown > .menu__dropdown_list');

			// 2-ой уровень
			const menuItemDropdownsTwo = menu.querySelectorAll('.menu__list > .menu__dropdown > .menu__dropdown_list > .menu__dropdown');
			const menuItemDropdownsMenuTwo = menu.querySelectorAll('.menu__list > .menu__dropdown > .menu__dropdown_list > .menu__dropdown > .menu__dropdown_list');

			// 3-ий уровень
			const menuItemDropdownsThree = menu.querySelectorAll('.menu__list > .menu__dropdown > .menu__dropdown_list > .menu__dropdown > .menu__dropdown_list > .menu__dropdown');
			const menuItemDropdownsMenuThree = menu.querySelectorAll('.menu__list > .menu__dropdown > .menu__dropdown_list > .menu__dropdown > .menu__dropdown_list > .menu__dropdown > .menu__dropdown_list');

			// Добавляем иконки в пункты с выпадающим меню
			menuItemDropdowns.forEach(item => {
				const menuLink = item.querySelector('a');
				let icon = document.createElement('i');
				icon.classList.add('menu__dropdown-arrow')
				menuLink.append(icon);
			});

			/* Один и тот же код для отдельных уровней меню, 
			чтобы открывался только один пункт, а открытые - закрывались, кроме тех, кто выше уровнем */
			function openLvlMenu(li, ul) {
				if (li && ul) {
					li.forEach(item => {
						const menuItemList = item.querySelector('ul');
						const menuItemIcons = item.querySelector('a > i');

						if (menuItemIcons && menuItemList) {
							// Открытие меню при клике на иконку
							menuItemIcons.addEventListener('click', (e) => {
								e.preventDefault();

								_slideToggle(menuItemList, 500);
								ul.forEach(menu => {
									if (!menu.hasAttribute('hidden')) {
										_slideUp(menu, 500);
									}
								});

								// Проходимся по всем пунктам и ищем активные классы, убираем их и добавляем активный класс кликнутому пункту
								if (!menuItemIcons.closest('.menu__dropdown').classList.contains('_open-menu')) {
									li.forEach(itemDrop => {
										if (itemDrop.classList.contains('_open-menu')) {
											itemDrop.classList.remove('_open-menu')
										}
									});
									menuItemIcons.closest('.menu__dropdown').classList.add('_open-menu');
								} else if (menuItemIcons.closest('.menu__dropdown').classList.contains('_open-menu')) {
									menuItemIcons.closest('.menu__dropdown').classList.remove('_open-menu');
								}
							});
						}
					});
				}
			}
			openLvlMenu(menuItemDropdownsFirst, menuItemDropdownsMenuFirst)
			openLvlMenu(menuItemDropdownsTwo, menuItemDropdownsMenuTwo)
			openLvlMenu(menuItemDropdownsThree, menuItemDropdownsMenuThree)

			//========================================================================================================================================================
		});
	}
	menuInit()

	// Функции открытия меню с блокировкой скролла
	function menuOpen(classes) {
		bodyLock();
		document.documentElement.classList.add(classes);
	}
	function menuClose(classes) {
		bodyUnlock();
		document.documentElement.classList.remove(classes);
	}
	function menuToggle(classes) {
		bodyLockToggle();
		document.documentElement.classList.toggle(classes);
	}
}
menuFunction()

/* ====================================
Якорные ссылки
==================================== */
// data-goto - указать ID блока
// data-goto-header - учитывать header
// data-goto-top - недокрутить на указанный размер
// data-goto-speed - скорость (только если используется доп плагин)
let gotoblock_gotoBlock = (targetBlock, noHeader = false, speed = 500, offsetTop = 0) => {
	const targetBlockElement = document.querySelector(targetBlock);
	if (targetBlockElement) {
		let headerItem = "";
		let headerItemHeight = 0;
		if (noHeader) {
			headerItem = ".header";
			const headerElement = document.querySelector(headerItem);
			if (!headerElement.classList.contains("_header-scroll")) {
				headerElement.style.cssText = `transition-duration: 0s;`;
				headerElement.classList.add("_header-scroll");
				headerItemHeight = headerElement.offsetHeight;
				headerElement.classList.remove("_header-scroll");
				setTimeout((() => {
					headerElement.style.cssText = ``;
				}), 0);
			} else headerItemHeight = headerElement.offsetHeight;
		}
		let options = {
			speedAsDuration: true,
			speed,
			header: headerItem,
			offset: offsetTop,
			easing: "linear"
		};
		document.documentElement.classList.contains("menu-open") ? menuClose() : null;
		if ("undefined" !== typeof SmoothScroll) (new SmoothScroll).animateScroll(targetBlockElement, "", options); else {
			let targetBlockElementPosition = targetBlockElement.getBoundingClientRect().top + scrollY;
			targetBlockElementPosition = headerItemHeight ? targetBlockElementPosition - headerItemHeight : targetBlockElementPosition;
			targetBlockElementPosition = offsetTop ? targetBlockElementPosition - offsetTop : targetBlockElementPosition;
			window.scrollTo({
				top: targetBlockElementPosition,
				behavior: "smooth"
			});
		};
	};
}
function pageNavigation() {
	document.addEventListener("click", pageNavigationAction);
	document.addEventListener("watcherCallback", pageNavigationAction);
	function pageNavigationAction(e) {
		if ("click" === e.type) {
			const targetElement = e.target;
			if (targetElement.closest("[data-goto]")) {
				const gotoLink = targetElement.closest("[data-goto]");
				const gotoLinkSelector = gotoLink.dataset.goto ? gotoLink.dataset.goto : "";
				const noHeader = gotoLink.hasAttribute("data-goto-header") ? true : false;
				const gotoSpeed = gotoLink.dataset.gotoSpeed ? gotoLink.dataset.gotoSpeed : 500;
				const offsetTop = gotoLink.dataset.gotoTop ? parseInt(gotoLink.dataset.gotoTop) : 0;
				gotoblock_gotoBlock(gotoLinkSelector, noHeader, gotoSpeed, offsetTop);
				e.preventDefault();
			}
		} else if ("watcherCallback" === e.type && e.detail) {
			const entry = e.detail.entry;
			const targetElement = entry.target;
			if ("navigator" === targetElement.dataset.watch) {
				document.querySelector(`[data-goto]._navigator-active`);
				let navigatorCurrentItem;
				if (targetElement.id && document.querySelector(`[data-goto="#${targetElement.id}"]`)) navigatorCurrentItem = document.querySelector(`[data-goto="#${targetElement.id}"]`); else if (targetElement.classList.length) for (let index = 0; index < targetElement.classList.length; index++) {
					const element = targetElement.classList[index];
					if (document.querySelector(`[data-goto=".${element}"]`)) {
						navigatorCurrentItem = document.querySelector(`[data-goto=".${element}"]`);
						break;
					}
				}
				if (entry.isIntersecting) navigatorCurrentItem ? navigatorCurrentItem.classList.add("_navigator-active") : null; else navigatorCurrentItem ? navigatorCurrentItem.classList.remove("_navigator-active") : null;
			}
		}
	}
}
pageNavigation();

/* ====================================
Header при скролле
==================================== */
function headerScroll() {
	const headerAll = document.querySelectorAll('.rs-header');
	headerAll.forEach(header => {
		const headerShow = header.hasAttribute('data-scroll-show');
		const headerShowTimer = header.dataset.scrollShow ? header.dataset.scrollShow : 500;
		const startPoint = header.dataset.scroll ? header.dataset.scroll : 1;
		let scrollDirection = 0;
		// let timer;
		document.addEventListener("windowScroll", function (e) {
			const scrollTop = window.scrollY;
			// clearTimeout(timer);
			if (scrollTop >= startPoint) {
				!header.classList.contains('_header-scroll') ? header.classList.add('_header-scroll') : null;
				if (headerShow) {
					if (scrollTop > scrollDirection) {
						// downscroll code
						header.classList.contains('_header-show') ? header.classList.remove('_header-show') : null;
					} else {
						// upscroll code
						!header.classList.contains('_header-show') ? header.classList.add('_header-show') : null;
					}
					// timer = setTimeout(() => {
					// 	!header.classList.contains('_header-show') ? header.classList.add('_header-show') : null;
					// }, headerShowTimer);
				}
			} else {
				header.classList.contains('_header-scroll') ? header.classList.remove('_header-scroll') : null;
				if (headerShow) {
					header.classList.contains('_header-show') ? header.classList.remove('_header-show') : null;
				}
			}
			scrollDirection = scrollTop <= 0 ? 0 : scrollTop;
		});
	});
}
headerScroll()

/* ====================================
Поиск
==================================== */
function search() {
	const searchs = document.querySelectorAll('.search');

	searchs.forEach(search => {
		const searchSubmit = search.querySelector('.search__submit')
		const searchClear = search.querySelector('.search__clear');
		const searchInput = search.querySelector('.search__input')
		const searchForm = search.querySelector('.search__form');

		// Отправка формы
		if (searchSubmit) {
			searchSubmit.addEventListener('click', function (e) {
				e.preventDefault();
				if (searchInput.value != '') {
					searchForm.submit();
				}
			})
		}

		// При вводе появляется кнопка отчистки
		if (searchInput) {
			searchInput.addEventListener('input', function (e) {
				searchClear.style.display = "block";
			})
		}

		// Очистить инпут
		if (searchClear) {
			searchClear.addEventListener('click', function (e) {
				searchInput.value = '';
				searchClear.style.display = "none";
				putСursorInInput(searchInput);
			})
		}
	});

	// Вспомогательные функции ========================================================================================================================================================
	// Поставить курсор в инпут после клика
	function putСursorInInput(input) {
		setTimeout(function () {
			input.focus()
		}, 100);
	}
}
search()
