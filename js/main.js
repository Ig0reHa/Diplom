window.addEventListener('DOMContentLoaded', function() {

	let modalIsOpen = false;
		modalWasOpened = false;

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
		modalWasOpened = true;
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
			modalWasOpened = true;
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
			modalWasOpened = true;
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
			modalWasOpened = true;
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




	// Модальное окно при пролистывании
	
	body.onscroll = () => {
		if ( modalWasOpened == false && document.body.scrollHeight == window.pageYOffset + window.innerHeight ) {
			popupGift.classList.remove('fadeOut');
			popupGift.style.display = 'block';
			popupGift.classList.add('animated', 'fadeIn');
			gift.remove();
			modalWasOpened = true;
		}
	}




	// Главная форма

	let message = new Object();
	message.loading = "Загрузка...";
	message.success = "Форма успешно отправлена!";
	message.failure = "Что то пошло не так...";

	let form = document.getElementsByClassName('bottom-form')[0],
		input = form.getElementsByClassName('consult-form'),
		statusMessage = document.createElement('div');
	

	form.addEventListener('submit', function(event) {
		statusMessage.classList.add('status');
		event.preventDefault();
		form.appendChild(statusMessage);

		// AJAX
		let request = new XMLHttpRequest();
		request.open("POST", 'server.php');

		request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		
		let formData = new FormData(form);

		request.send(formData);

		request.onreadystatechange = function() {
			if (request.readyState < 4) {
				statusMessage.innerHTML = message.loading;
			} else if (request.readyState === 4) {
				if (request.status === 200 && request.status < 300) {
					statusMessage.innerHTML = message.success;
					statusMessage.style.color = '#2ecc71';
				}
			} else {
				statusMessage.innerHTML = message.failure;
				statusMessage.style.color = '#e74c3c';
			}
		}

		for ( let i = 0; i < input.length; i++) {
			input[i].value = "";
			// Очистка полей ввода
		}
	});


	


	// Форма обратного звонка

	let form1 = document.getElementsByClassName('callForm')[0],
		input1 = form1.getElementsByClassName('callInput'),
		statusMessage1 = document.createElement('div');
	

	form1.addEventListener('submit', function(event) {
		statusMessage1.classList.add('status-small');
		event.preventDefault();
		form1.appendChild(statusMessage1);

		// AJAX
		let request = new XMLHttpRequest();
		request.open("POST", 'server.php');

		request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	
		let formData = new FormData(form1);

		request.send(formData);

		request.onreadystatechange = function() {
			if (request.readyState < 4) {
				statusMessage1.innerHTML = message.loading;
			} else if (request.readyState === 4) {
				if (request.status === 200 && request.status < 300) {
					statusMessage1.innerHTML = message.success;
					statusMessage1.style.color = '#2ecc71';
				}
			} else {
				statusMessage1.innerHTML = message.failure;
				statusMessage1.style.color = '#e74c3c';
			}
		}

		for ( let i = 0; i < input1.length; i++) {
			input1[i].value = "";
			// Очистка полей ввода
		}
	});



	// Форма заказать дизайн портрета

	let form2 = document.getElementsByClassName('design-form')[0],
		input2 = form2.getElementsByClassName('design-input'),
		statusMessage2 = document.createElement('div');
	

	form2.addEventListener('submit', function(event) {
		statusMessage2.classList.add('status-small');
		event.preventDefault();
		form2.appendChild(statusMessage2);

		// AJAX
		let request = new XMLHttpRequest();
		request.open("POST", 'server.php');

		request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	
		let formData = new FormData(form2);

		request.send(formData);

		request.onreadystatechange = function() {
			if (request.readyState < 4) {
				statusMessage2.innerHTML = message.loading;
			} else if (request.readyState === 4) {
				if (request.status === 200 && request.status < 300) {
					statusMessage2.innerHTML = message.success;
					statusMessage2.style.color = '#2ecc71';
				}
			} else {
				statusMessage2.innerHTML = message.failure;
				statusMessage2.style.color = '#e74c3c';
			}
		}

		for ( let i = 0; i < input2.length; i++) {
			input2[i].value = "";
			// Очистка полей ввода
		}
	});



    // Маска номера телефона

	function setCursorPosition(pos, elem) {
	    elem.focus();
	    if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
	    else if (elem.createTextRange) {
	        let range = elem.createTextRange();
	        range.collapse(true);
	        range.moveEnd("character", pos);
	        range.moveStart("character", pos);
	        range.select()
	    }
	}

	function mask(event) {
	    let matrix = "+38-(___)-___-____",
	        i = 0,
	        def = matrix.replace(/\D/g, ""),
	        val = this.value.replace(/\D/g, "");
	    if (def.length >= val.length) val = def;
	    this.value = matrix.replace(/./g, function(a) {
	        return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
	    });
	    if (event.type == "blur") {
	        if (this.value.length == 2) this.value = ""
	    } else setCursorPosition(this.value.length, this)
	};

    let phoneMask = document.getElementsByClassName("phone-mask");

    for ( let i = 0; i < phoneMask.length; i++) {
    	phoneMask[i].addEventListener("input", mask, false);
    	phoneMask[i].addEventListener("focus", mask, false);
    	phoneMask[i].addEventListener("blur", mask, false);
    }
    

    // Можно ввести только русские буквы

    let inputRu = document.getElementsByClassName('input-ru');

    for ( let i = 0; i < inputRu.length; i++) {
	    inputRu[i].addEventListener('keypress', () => {
			setTimeout(function() {
		        var res = /[^а-я А-Я ]/g.exec(inputRu[i].value);
		        inputRu[i].value = inputRu[i].value.replace(res, '');
		    }, 0);
		});
	}


});