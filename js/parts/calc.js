function calc() {
	var size = document.querySelector('#size'),
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

	size.addEventListener('change', function () {
		sizeVal = size.value;
		if (size.value != 'Выберите размер картины' && material.value != 'Выберите материал картины' && promoCode.value == 'IWANTPOPART') {
			totalPrice.innerHTML = (+sizeVal + +materialVal + +additionVal) * 0.7;
		} else if (size.value != 'Выберите размер картины' && material.value != 'Выберите материал картины') {
			totalPrice.innerHTML = +sizeVal + +materialVal + +additionVal;
		} else {
			totalPrice.innerHTML = 0;
		}
	});

	material.addEventListener('change', function () {
		materialVal = material.value;
		if (material.value != 'Выберите материал картины' && size.value != 'Выберите размер картины' && promoCode.value == 'IWANTPOPART') {
			totalPrice.innerHTML = (+sizeVal + +materialVal + +additionVal) * 0.7;
		} else if (material.value != 'Выберите материал картины' && size.value != 'Выберите размер картины') {
			totalPrice.innerHTML = +sizeVal + +materialVal + +additionVal;
		} else {
			totalPrice.innerHTML = 0;
		}
	});

	addition.addEventListener('change', function () {
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

	promoCode.addEventListener('change', function () {
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
}

module.exports = calc;