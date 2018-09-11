function forms() {
	// Главная форма

	var message = new Object();
	message.loading = "Загрузка...";
	message.success = "Форма успешно отправлена!";
	message.failure = "Что то пошло не так...";

	var form = document.getElementsByClassName('bottom-form')[0],
	    input = form.getElementsByClassName('consult-form'),
	    statusMessage = document.createElement('div');

	form.addEventListener('submit', function (event) {
		statusMessage.classList.add('status');
		event.preventDefault();
		form.appendChild(statusMessage);

		// AJAX
		var request = new XMLHttpRequest();
		request.open("POST", 'server.php');

		request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

		var formData = new FormData(form);

		request.send(formData);

		request.onreadystatechange = function () {
			if (request.readyState < 4) {
				statusMessage.innerHTML = message.loading;
				setTimeout(function () {
					statusMessage.style.display = 'none';
				}, 5000);
			} else if (request.readyState === 4) {
				if (request.status === 200 && request.status < 300) {
					statusMessage.innerHTML = message.success;
					statusMessage.style.color = '#2ecc71';
					setTimeout(function () {
						statusMessage.style.display = 'none';
					}, 5000);
				}
			} else {
				statusMessage.innerHTML = message.failure;
				statusMessage.style.color = '#e74c3c';
				setTimeout(function () {
					statusMessage.style.display = 'none';
				}, 5000);
			}
		};

		for (var i = 0; i < input.length; i++) {
			input[i].value = "";
			// Очистка полей ввода
		}
	});

	// Форма обратного звонка

	var form1 = document.getElementsByClassName('callForm')[0],
	    input1 = form1.getElementsByClassName('callInput'),
	    statusMessage1 = document.createElement('div');

	form1.addEventListener('submit', function (event) {
		statusMessage1.classList.add('status-small');
		event.preventDefault();
		form1.appendChild(statusMessage1);

		// AJAX
		var request = new XMLHttpRequest();
		request.open("POST", 'server.php');

		request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

		var formData = new FormData(form1);

		request.send(formData);

		request.onreadystatechange = function () {
			if (request.readyState < 4) {
				statusMessage1.innerHTML = message.loading;
				setTimeout(function () {
						statusMessage1.style.display = 'none';
					}, 5000);
			} else if (request.readyState === 4) {
				if (request.status === 200 && request.status < 300) {
					statusMessage1.innerHTML = message.success;
					statusMessage1.style.color = '#2ecc71';
					setTimeout(function () {
						statusMessage1.style.display = 'none';
					}, 5000);
				}
			} else {
				statusMessage1.innerHTML = message.failure;
				statusMessage1.style.color = '#e74c3c';
				setTimeout(function () {
						statusMessage1.style.display = 'none';
					}, 5000);
			}
		};

		for (var i = 0; i < input1.length; i++) {
			input1[i].value = "";
			// Очистка полей ввода
		}
	});

	// Форма заказать дизайн портрета

	var form2 = document.getElementsByClassName('design-form')[0],
	    input2 = form2.getElementsByClassName('design-input'),
	    statusMessage2 = document.createElement('div');

	form2.addEventListener('submit', function (event) {
		statusMessage2.classList.add('status-small');
		event.preventDefault();
		form2.appendChild(statusMessage2);

		// AJAX
		var request = new XMLHttpRequest();
		request.open("POST", 'server.php');

		request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

		var formData = new FormData(form2);

		request.send(formData);

		request.onreadystatechange = function () {
			if (request.readyState < 4) {
				statusMessage2.innerHTML = message.loading;
				setTimeout(function () {
						statusMessage2.style.display = 'none';
					}, 5000);
			} else if (request.readyState === 4) {
				if (request.status === 200 && request.status < 300) {
					statusMessage2.innerHTML = message.success;
					statusMessage2.style.color = '#2ecc71';
					setTimeout(function () {
						statusMessage2.style.display = 'none';
					}, 5000);
				}
			} else {
				statusMessage2.innerHTML = message.failure;
				statusMessage2.style.color = '#e74c3c';
				setTimeout(function () {
						statusMessage2.style.display = 'none';
					}, 5000);
			}
		};

		for (var i = 0; i < input2.length; i++) {
			input2[i].value = "";
			// Очистка полей ввода
		}
	});

	// Маска номера телефона

	function setCursorPosition(pos, elem) {
		elem.focus();
		if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);else if (elem.createTextRange) {
			var range = elem.createTextRange();
			range.collapse(true);
			range.moveEnd("character", pos);
			range.moveStart("character", pos);
			range.select();
		}
	}

	function mask(event) {
		var matrix = "+38-(___)-___-____",
		    i = 0,
		    def = matrix.replace(/\D/g, ""),
		    val = this.value.replace(/\D/g, "");
		if (def.length >= val.length) val = def;
		this.value = matrix.replace(/./g, function (a) {
			return (/[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
			);
		});
		if (event.type == "blur") {
			if (this.value.length == 2) this.value = "";
		} else setCursorPosition(this.value.length, this);
	};

	var phoneMask = document.getElementsByClassName("phone-mask");

	for (var i = 0; i < phoneMask.length; i++) {
		phoneMask[i].addEventListener("input", mask, false);
		phoneMask[i].addEventListener("focus", mask, false);
		phoneMask[i].addEventListener("blur", mask, false);
	}

	// Можно ввести только русские буквы

	var inputRu = document.getElementsByClassName('input-ru');

	var _loop = function _loop(_i) {
		inputRu[_i].addEventListener('keypress', function () {
			setTimeout(function () {
				var res = /[^а-я А-Я ]/g.exec(inputRu[_i].value);
				inputRu[_i].value = inputRu[_i].value.replace(res, '');
			}, 0);
		});
	};

	for (var _i = 0; _i < inputRu.length; _i++) {
		_loop(_i);
	}
}

module.exports = forms;