function imgHover() {
	var imgBlock = document.getElementsByClassName('sizes-block'),
	    realImg = document.getElementsByClassName('realImg'),
	    sizes = document.getElementsByClassName('sizes')[0];

	if (window.matchMedia('(min-width: 768px)').matches) {
		var _loop = function _loop(i) {
			imgBlock[i].onmouseenter = function () {
				realImg[i].style.display = 'block';
				realImg[i].classList.add('animated', 'fadeIn');
			};
			imgBlock[i].onmouseleave = function () {
				realImg[i].style.display = 'none';
			};
		};

		for (var i = 0; i < imgBlock.length; i++) {
			_loop(i);
		}
	}

	if (window.matchMedia('(max-width: 768px)').matches) {
		var _loop2 = function _loop2(i) {
			imgBlock[i].onclick = function () {
				realImg[i].style.display = 'block';
				realImg[i].classList.add('animated', 'fadeIn');
			};

			sizes.onclick = function (event) {
				if (!isRealImg(event)) {
					for (var _i = 0; _i < realImg.length; _i++) {
						realImg[_i].style.display = 'none';
					}
				}
			};

			function isRealImg(event) {
				for (var _i2 = 0; _i2 < realImg.length; _i2++) {
					if (event.target.tagName == 'IMG' || event.target.tagName == 'P') {
						return true;
					}
				}
				return false;
			}
		};

		for (var i = 0; i < imgBlock.length; i++) {
			_loop2(i);
		}
	}
}

module.exports = imgHover;