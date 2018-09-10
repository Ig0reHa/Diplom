window.addEventListener('DOMContentLoaded', () => {

	let modalIsOpen = false;

	// GIFT POPUP

	let gift = document.getElementsByClassName('fixed-gift')[0],
		popupGift = document.getElementsByClassName('popup-gift')[0];
		popupGiftClose = document.getElementsByClassName('popup-close')[1];

	gift.addEventListener('click', () => {
		popupGift.classList.remove('fadeOut');
		popupGift.style.display = 'block';
		popupGift.classList.add('animated', 'fadeIn');
		gift.remove();
		modalIsOpen = true;
	});

	popupGiftClose.addEventListener('click', () => {
		popupGift.classList.remove('fadeIn');
		popupGift.classList.add('fadeOut');
		setTimeout( () => {
			popupGift.style.display = 'none';
		}, 700);
		modalIsOpen = false;
	});



	// DESIGN POPUP


	let popupDesign = document.querySelector('.popup-design'),
		orderBtn = document.querySelectorAll('.button-design'),
		popupDesignClose = document.getElementsByClassName('popup-close')[2];

	for (let i = 0; i < orderBtn.length; i++ ) {
		orderBtn[i].addEventListener('click', () => {
			popupDesign.classList.remove('fadeOut');
			popupDesign.style.display = 'block';
			popupDesign.classList.add('animated', 'fadeIn');
			modalIsOpen = true;
		});
	}

	popupDesignClose.addEventListener('click', () => {
		popupDesign.classList.remove('fadeIn');
		popupDesign.classList.add('fadeOut');
		setTimeout( () => {
			popupDesign.style.display = 'none';
		}, 700);
		modalIsOpen = false;
	});


	// CONSULTATION POPUP

	let popupConsultation = document.getElementsByClassName('popup-consultation')[0],
		ConsultationBtn = document.querySelectorAll('.button-consultation');
		popupConsultationClose = document.getElementsByClassName('popup-close')[0];

	for (let i = 0; i < ConsultationBtn.length; i++ ) {
		ConsultationBtn[i].addEventListener('click', () => {
			popupConsultation.classList.remove('fadeOut');
			popupConsultation.style.display = 'block';
			popupConsultation.classList.add('animated', 'fadeIn');
			modalIsOpen = true;
		});
	}

	popupConsultationClose.addEventListener('click', () => {
		popupConsultation.classList.remove('fadeIn');
		popupConsultation.classList.add('fadeOut');
		setTimeout( () => {
			popupConsultation.style.display = 'none';
		}, 700);
		modalIsOpen = false;
	});

	// Если пользователь на странице больше 60 секунд - появится модальное окно (popup-consultation)

	let popupTimeOut = setTimeout( () => {
		if ( modalIsOpen == false ) {
			popupConsultation.classList.remove('fadeOut');
			popupConsultation.style.display = 'block';
			popupConsultation.classList.add('animated', 'fadeIn');
		}
	}, 60000);

	if ( modalIsOpen ) {
		clearTimeout(popupTimeOut);
	}

	

	// При нажатии на подложку popup исчезает

	window.onclick = (event) => {
	    if (event.target == popupGift) {
	        popupGift.classList.remove('fadeIn');
			popupGift.classList.add('fadeOut');
			setTimeout( () => {
				popupGift.style.display = 'none';
			}, 700);
			modalIsOpen = false;
	    }

	    if (event.target == popupDesign) {
	        popupDesign.classList.remove('fadeIn');
			popupDesign.classList.add('fadeOut');
			setTimeout( () => {
				popupDesign.style.display = 'none';
			}, 700);
			modalIsOpen = false;
	    }

	    if (event.target == popupConsultation) {
	        popupConsultation.classList.remove('fadeIn');
			popupConsultation.classList.add('fadeOut');
			setTimeout( () => {
				popupConsultation.style.display = 'none';
			}, 700);
			modalIsOpen = false;
	    }
	}



	// Подгрузка блоков
	
	let StylesImg = document.querySelectorAll('.styles-2'),
		loadMoreBtn = document.getElementsByClassName('button-styles')[0];

	loadMoreBtn.addEventListener('click', () => {
		for (let i = 0; i < StylesImg.length; i++ ) {
			StylesImg[i].classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
			StylesImg[i].classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1', 'animated', 'zoomIn');
			loadMoreBtn.remove();
		}
	});


	// Аккордеон

	let accordionHeading = document.getElementsByClassName('accordion-heading'),
    	accordionBlock = document.getElementsByClassName('accordion-block');


	for (let i = 0; i < accordionHeading.length; i++) {
	    accordionHeading[i].addEventListener('click', function() {
	        if (!(this.classList.contains('active'))) {
	            for(let i = 0; i < accordionHeading.length; i++) {
	                accordionHeading[i].classList.remove('active'); 
	            }
	            this.classList.add('active');
	            accordionBlock[i].classList.add('animated', 'zoomIn');
	        }
	    })
	}




	// Картинки при наведении

	let imgBlock = document.getElementsByClassName('sizes-block'),
		realImg = document.getElementsByClassName('realImg'),
		sizes = document.getElementsByClassName('sizes')[0];

	if(window.matchMedia('(min-width: 768px)').matches) {
	  for(let i = 0; i < imgBlock.length; i++ ) {
			imgBlock[i].onmouseenter = () => {
				realImg[i].style.display = 'block';
				realImg[i].classList.add('animated', 'fadeIn');
			}
			imgBlock[i].onmouseleave = () => {
				realImg[i].style.display = 'none';
			}
		}
	}

	if(window.matchMedia('(max-width: 768px)').matches) {
	  for(let i = 0; i < imgBlock.length; i++ ) {
			imgBlock[i].onclick = () => {
				realImg[i].style.display = 'block';
				realImg[i].classList.add('animated', 'fadeIn');
			}

			sizes.onclick = (event) => {
				if (!isRealImg(event)) {
					for (let i = 0; i < realImg.length; i++) {
						realImg[i].style.display = 'none';
					}
				}
			}

			function isRealImg(event) {
				for (let i = 0; i < realImg.length; i++) {
					if (event.target.tagName == 'IMG' || event.target.tagName == 'P') {
						return true;
					}
				}
				return false;
			}
		}
	}


	// Калькулятор

	let size = document.querySelector('#size'),
		material = document.querySelector('#material'),
		addition = document.querySelector('#options'),
		promoCode = document.getElementsByClassName('promocode')[0],
		totalPrice = document.getElementsByClassName('calc-price')[0],
		sizeVal = 0,
		materialVal = 0,
		additionVal = 0;

	totalPrice.innerHTML = 0;

	if (size.value == 'Выберите размер картины' && material.value == 'Выберите материал картины' || size.value == 'Выберите размер картины' || material.value == 'Выберите материал картины') {
		totalPrice.innerHTML = 0;
	}

	size.addEventListener('change', function() {
		sizeVal = size.value;
		if (size.value != 'Выберите размер картины' && material.value != 'Выберите материал картины' && promoCode.value == 'IWANTPOPART') {
			totalPrice.innerHTML = (+sizeVal + +materialVal + +additionVal) * 0.7;
		} else if (size.value != 'Выберите размер картины' && material.value != 'Выберите материал картины') {
			totalPrice.innerHTML = +sizeVal + +materialVal + +additionVal;
		} else {
			totalPrice.innerHTML = 0;
		}
	});

	material.addEventListener('change', function() {
		materialVal = material.value;
		if (material.value != 'Выберите материал картины' && size.value != 'Выберите размер картины' && promoCode.value == 'IWANTPOPART') {
			totalPrice.innerHTML = (+sizeVal + +materialVal + +additionVal) * 0.7;
		} else if (material.value != 'Выберите материал картины' && size.value != 'Выберите размер картины') {	
			totalPrice.innerHTML = +sizeVal + +materialVal + +additionVal;
		} else {
			totalPrice.innerHTML = 0;
		}
	});

	addition.addEventListener('change', function() {
		additionVal = addition.value;
		if (addition.value != 'Дополнительные услуги' && material.value != 'Выберите материал картины' && size.value != 'Выберите размер картины' && promoCode.value == 'IWANTPOPART') {
			totalPrice.innerHTML = (+sizeVal + +materialVal + +additionVal) * 0.7;
		} else if (addition.value != 'Дополнительные услуги' && material.value != 'Выберите материал картины' && size.value != 'Выберите размер картины') {
			totalPrice.innerHTML = +sizeVal + +materialVal + +additionVal;
		} else if (addition.value == 'Дополнительные услуги' && promoCode.value == 'IWANTPOPART') {
			totalPrice.innerHTML = (+sizeVal + +materialVal) * 0.7;
		} else if (addition.value == 'Дополнительные услуги' && material.value != 'Выберите материал картины' && size.value != 'Выберите размер картины') {
			totalPrice.innerHTML = +sizeVal + +materialVal;
		}
	});

	promoCode.addEventListener('change', function() {
		if (promoCode.value == 'IWANTPOPART' && size.value != 'Выберите размер картины' && material.value != 'Выберите материал картины') {
			totalPrice.innerHTML *= 0.7;
		} else if (addition.value == 'Дополнительные услуги') {
			totalPrice.innerHTML = +sizeVal + +materialVal;
		} else if (size.value == 'Выберите размер картины' || material.value == 'Выберите материал картины') {
			totalPrice.innerHTML = 0;
		} else {
			totalPrice.innerHTML = +sizeVal + +materialVal + +additionVal;
		}
	});




	// Гамбургер-меню

	let burgerBtn = document.getElementsByClassName('burger')[0],
		burgerMenu = document.getElementsByClassName('burger-menu')[0],
		body = document.getElementsByTagName('body')[0];

	if(window.matchMedia('(max-width: 768px)').matches) {
	  let clicked = 2;
	  burgerBtn.onclick = () => {
	  	if (clicked % 2 == 0) {
	  		burgerMenu.style.display = 'block';
	  		clicked++;
	  	} else if (clicked % 2 != 0) {
	  		burgerMenu.style.display = 'none';
	  		clicked++;
	  	}
	  }
	}

	body.onresize = () => {
		if(window.matchMedia('(min-width: 768px)').matches) {
		  burgerMenu.style.display = 'none';
		}
	}




	// Верхний слайдер


	function Carousel1(setting) {
		if(document.querySelector(setting.wrap) === null) {
			console.error(`Carousel not fount selector ${setting.wrap}`);
			return;
		}

		let privates = {};


		this.prev_slide = () => {
			--privates.opt.position;

			if(privates.opt.position < 0) {
				privates.sel.wrap.classList.add('s-notransition');
				privates.opt.position = privates.opt.max_position - 1;
			}

			privates.sel.wrap.style["transform"] = `translateY(-${privates.opt.position}00%)`;
		};



		this.next_slide = () => {
			++privates.opt.position;

			if(privates.opt.position >= privates.opt.max_position) {
				privates.opt.position = 0;
			}

			privates.sel.wrap.style["transform"] = `translateY(-${privates.opt.position}00%)`;
		};

		setInterval(this.next_slide, 10000);


		privates.setting = setting;

		privates.sel = {
			"main": document.querySelector(privates.setting.main),
			"wrap": document.querySelector(privates.setting.wrap),
			"children": document.querySelector(privates.setting.wrap).children,
			"prev": document.querySelector(privates.setting.prev),
		};

		privates.opt = {
			"position": 0,
			"max_position": document.querySelector(privates.setting.wrap).children.length
		};

	}

	let topCarousel = new Carousel1({
		"main": ".main-slider",
		"wrap": ".main-slider-wrapper"
	});






	// Нижний слайдер


	function Carousel2(setting) {
		if(document.querySelector(setting.wrap) === null) {
			console.error(`Carousel not fount selector ${setting.wrap}`);
			return;
		}

		let privates = {};


		this.prev_slide = () => {
			--privates.opt.position;

			if(privates.opt.position < 0) {
				privates.sel.wrap.classList.add('s-notransition');
				privates.opt.position = privates.opt.max_position - 1;
			}

			privates.sel.wrap.style["transform"] = `translateX(-${privates.opt.position}00%)`;
		};



		this.next_slide = () => {
			++privates.opt.position;

			if(privates.opt.position >= privates.opt.max_position) {
				privates.opt.position = 0;
			}

			privates.sel.wrap.style["transform"] = `translateX(-${privates.opt.position}00%)`;
		};

		setInterval(this.next_slide, 10000);


		privates.setting = setting;

		privates.sel = {
			"main": document.querySelector(privates.setting.main),
			"wrap": document.querySelector(privates.setting.wrap),
			"children": document.querySelector(privates.setting.wrap).children,
			"prev": document.querySelector(privates.setting.prev),
			"next": document.querySelector(privates.setting.next)
		};

		privates.opt = {
			"position": 0,
			"max_position": document.querySelector(privates.setting.wrap).children.length
		};

		if(privates.sel.prev !== null) {
			privates.sel.prev.addEventListener('click', () => {
				this.prev_slide();
			});
		}

		if(privates.sel.next !== null) {
			privates.sel.next.addEventListener('click', () => {
				this.next_slide();
			});
		}
	}

	let bottomCarousel = new Carousel2({
		"main": ".feedback-slider",
		"wrap": ".feedback-wrapper",
		"prev": ".main-prev-btn",
		"next": ".main-next-btn"
	});




	// Фильтрация блоков

	let allWorks = document.getElementsByClassName('all'),
		portfolioMenu = document.getElementsByClassName('portfolio-menu')[0],
		noPortfolio = document.getElementsByClassName('portfolio-no')[0];

	allWorks.onclick = () => {
		for (let i = 1; i < allWorks.length; i++) {
			allWorks.style.display = 'block';
		}
	}

	portfolioMenu.onclick = (event) => {
		let nameOfClass = event.target.className;
		activeEl = document.getElementsByClassName(nameOfClass);
		noPortfolio.style.display = 'none';

		for ( let i = 1; i < allWorks.length; i++) {
			allWorks[i].style.display = 'none';
		}

		for ( let i = 0; i < 7; i++) {
			portfolioMenu.children[i].classList.remove('active');
		}
	
		for ( let i = 0; i < activeEl.length; i++ ) {
			activeEl[0].classList.add('active');
			activeEl[i].style.display = 'block';
			activeEl[i].classList.add('animated', 'zoomIn');
			activeEl[0].classList.remove('animated', 'zoomIn');
		}

		if (activeEl.length == 1) {
			noPortfolio.style.display = 'block';
			noPortfolio.classList.add('animated', 'fadeIn');
		} else if (activeEl.length == 0) {
			allWorks[0].classList.add('active');
			for (let i = 1; i < allWorks.length; i++) {
				allWorks[i].style.display = 'block';
			}
		}
	}


});