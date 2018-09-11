function filter() {
	var allWorks = document.getElementsByClassName('all'),
	    portfolioMenu = document.getElementsByClassName('portfolio-menu')[0],
	    noPortfolio = document.getElementsByClassName('portfolio-no')[0];

	allWorks.onclick = function () {
		for (var i = 1; i < allWorks.length; i++) {
			allWorks.style.display = 'block';
		}
	};

	portfolioMenu.onclick = function (event) {
		var nameOfClass = event.target.className;
		activeEl = document.getElementsByClassName(nameOfClass);
		noPortfolio.style.display = 'none';

		for (var i = 1; i < allWorks.length; i++) {
			allWorks[i].style.display = 'none';
		}

		for (var _i = 0; _i < 7; _i++) {
			portfolioMenu.children[_i].classList.remove('active');
		}

		for (var _i2 = 0; _i2 < activeEl.length; _i2++) {
			activeEl[0].classList.add('active');
			activeEl[_i2].style.display = 'block';
			activeEl[_i2].classList.add('animated', 'zoomIn');
			activeEl[0].classList.remove('animated', 'zoomIn');
		}

		if (activeEl.length == 1) {
			noPortfolio.style.display = 'block';
			noPortfolio.classList.add('animated', 'fadeIn');
		} else if (activeEl.length == 0) {
			allWorks[0].classList.add('active');
			for (var _i3 = 1; _i3 < allWorks.length; _i3++) {
				allWorks[_i3].style.display = 'block';
			}
		}
	};
}

module.exports = filter;