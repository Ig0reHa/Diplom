function accordion() {
	var accordionHeading = document.getElementsByClassName('accordion-heading'),
	    accordionBlock = document.getElementsByClassName('accordion-block');

	var _loop = function _loop(i) {
		accordionHeading[i].addEventListener('click', function () {
			if (!this.classList.contains('active')) {
				for (var _i = 0; _i < accordionHeading.length; _i++) {
					accordionHeading[_i].classList.remove('active');
				}
				this.classList.add('active');
				accordionBlock[i].classList.add('animated', 'zoomIn');
			}
		});
	};

	for (var i = 0; i < accordionHeading.length; i++) {
		_loop(i);
	}
}

module.exports = accordion;