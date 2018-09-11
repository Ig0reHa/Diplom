function menu() {
	var burgerBtn = document.getElementsByClassName('burger')[0],
	    burgerMenu = document.getElementsByClassName('burger-menu')[0],
	    body = document.getElementsByTagName('body')[0];

	if (window.matchMedia('(max-width: 768px)').matches) {
		var clicked = 2;
		burgerBtn.onclick = function () {
			if (clicked % 2 == 0) {
				burgerMenu.style.display = 'block';
				clicked++;
			} else if (clicked % 2 != 0) {
				burgerMenu.style.display = 'none';
				clicked++;
			}
		};
	}

	body.onresize = function () {
		if (window.matchMedia('(min-width: 768px)').matches) {
			burgerMenu.style.display = 'none';
		}
	};
}

module.exports = menu;