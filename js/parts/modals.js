function modal() {
	var modalIsOpen = false;
	var	modalWasOpened = false;
	var body = document.getElementsByTagName('body')[0];

	// GIFT POPUP

	var gift = document.getElementsByClassName('fixed-gift')[0],
	    popupGift = document.getElementsByClassName('popup-gift')[0];
	popupGiftClose = document.getElementsByClassName('popup-close')[1];

	gift.addEventListener('click', function () {
		popupGift.classList.remove('fadeOut');
		popupGift.style.display = 'block';
		popupGift.classList.add('animated', 'fadeIn');
		gift.remove();
		modalIsOpen = true;
		modalWasOpened = true;
	});

	popupGiftClose.addEventListener('click', function () {
		popupGift.classList.remove('fadeIn');
		popupGift.classList.add('fadeOut');
		setTimeout(function () {
			popupGift.style.display = 'none';
		}, 700);
		modalIsOpen = false;
	});

	// DESIGN POPUP


	var popupDesign = document.querySelector('.popup-design'),
	    orderBtn = document.querySelectorAll('.button-design'),
	    popupDesignClose = document.getElementsByClassName('popup-close')[2];

	for (var i = 0; i < orderBtn.length; i++) {
		orderBtn[i].addEventListener('click', function () {
			popupDesign.classList.remove('fadeOut');
			popupDesign.style.display = 'block';
			popupDesign.classList.add('animated', 'fadeIn');
			modalIsOpen = true;
			modalWasOpened = true;
		});
	}

	popupDesignClose.addEventListener('click', function () {
		popupDesign.classList.remove('fadeIn');
		popupDesign.classList.add('fadeOut');
		setTimeout(function () {
			popupDesign.style.display = 'none';
		}, 700);
		modalIsOpen = false;
	});

	// CONSULTATION POPUP

	var popupConsultation = document.getElementsByClassName('popup-consultation')[0],
	    ConsultationBtn = document.querySelectorAll('.button-consultation');
	popupConsultationClose = document.getElementsByClassName('popup-close')[0];

	for (var _i = 0; _i < ConsultationBtn.length; _i++) {
		ConsultationBtn[_i].addEventListener('click', function () {
			popupConsultation.classList.remove('fadeOut');
			popupConsultation.style.display = 'block';
			popupConsultation.classList.add('animated', 'fadeIn');
			modalIsOpen = true;
			modalWasOpened = true;
		});
	}

	popupConsultationClose.addEventListener('click', function () {
		popupConsultation.classList.remove('fadeIn');
		popupConsultation.classList.add('fadeOut');
		setTimeout(function () {
			popupConsultation.style.display = 'none';
		}, 700);
		modalIsOpen = false;
	});

	// Если пользователь на странице больше 60 секунд - появится модальное окно (popup-consultation)

	var popupTimeOut = setTimeout(function () {
		if (modalIsOpen == false) {
			popupConsultation.classList.remove('fadeOut');
			popupConsultation.style.display = 'block';
			popupConsultation.classList.add('animated', 'fadeIn');
			modalWasOpened = true;
		}
	}, 60000);

	if (modalIsOpen) {
		clearTimeout(popupTimeOut);
	}

	// При нажатии на подложку popup исчезает

	window.onclick = function (event) {
		if (event.target == popupGift) {
			popupGift.classList.remove('fadeIn');
			popupGift.classList.add('fadeOut');
			setTimeout(function () {
				popupGift.style.display = 'none';
			}, 700);
			modalIsOpen = false;
		}

		if (event.target == popupDesign) {
			popupDesign.classList.remove('fadeIn');
			popupDesign.classList.add('fadeOut');
			setTimeout(function () {
				popupDesign.style.display = 'none';
			}, 700);
			modalIsOpen = false;
		}

		if (event.target == popupConsultation) {
			popupConsultation.classList.remove('fadeIn');
			popupConsultation.classList.add('fadeOut');
			setTimeout(function () {
				popupConsultation.style.display = 'none';
			}, 700);
			modalIsOpen = false;
		}
	};

	body.onscroll = function () {
		if (modalWasOpened == false && document.body.scrollHeight == window.pageYOffset + window.innerHeight) {
			popupGift.classList.remove('fadeOut');
			popupGift.style.display = 'block';
			popupGift.classList.add('animated', 'fadeIn');
			gift.remove();
			modalWasOpened = true;
		}
	};
}

module.exports = modal;