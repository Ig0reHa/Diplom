function sliders() {
	// Верхний слайдер


	function Carousel1(setting) {
		if (document.querySelector(setting.wrap) === null) {
			console.error("Carousel not fount selector " + setting.wrap);
			return;
		}

		var privates = {};

		this.prev_slide = function () {
			--privates.opt.position;

			if (privates.opt.position < 0) {
				privates.sel.wrap.classList.add('s-notransition');
				privates.opt.position = privates.opt.max_position - 1;
			}

			privates.sel.wrap.style["transform"] = "translateY(-" + privates.opt.position + "00%)";
		};

		this.next_slide = function () {
			++privates.opt.position;

			if (privates.opt.position >= privates.opt.max_position) {
				privates.opt.position = 0;
			}

			privates.sel.wrap.style["transform"] = "translateY(-" + privates.opt.position + "00%)";
		};

		setInterval(this.next_slide, 10000);

		privates.setting = setting;

		privates.sel = {
			"main": document.querySelector(privates.setting.main),
			"wrap": document.querySelector(privates.setting.wrap),
			"children": document.querySelector(privates.setting.wrap).children,
			"prev": document.querySelector(privates.setting.prev)
		};

		privates.opt = {
			"position": 0,
			"max_position": document.querySelector(privates.setting.wrap).children.length
		};
	}

	var topCarousel = new Carousel1({
		"main": ".main-slider",
		"wrap": ".main-slider-wrapper"
	});

	// Нижний слайдер


	function Carousel2(setting) {
		var _this = this;

		if (document.querySelector(setting.wrap) === null) {
			console.error("Carousel not fount selector " + setting.wrap);
			return;
		}

		var privates = {};

		this.prev_slide = function () {
			--privates.opt.position;

			if (privates.opt.position < 0) {
				privates.sel.wrap.classList.add('s-notransition');
				privates.opt.position = privates.opt.max_position - 1;
			}

			privates.sel.wrap.style["transform"] = "translateX(-" + privates.opt.position + "00%)";
		};

		this.next_slide = function () {
			++privates.opt.position;

			if (privates.opt.position >= privates.opt.max_position) {
				privates.opt.position = 0;
			}

			privates.sel.wrap.style["transform"] = "translateX(-" + privates.opt.position + "00%)";
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

		if (privates.sel.prev !== null) {
			privates.sel.prev.addEventListener('click', function () {
				_this.prev_slide();
			});
		}

		if (privates.sel.next !== null) {
			privates.sel.next.addEventListener('click', function () {
				_this.next_slide();
			});
		}
	}

	var bottomCarousel = new Carousel2({
		"main": ".feedback-slider",
		"wrap": ".feedback-wrapper",
		"prev": ".main-prev-btn",
		"next": ".main-next-btn"
	});
}

module.exports = sliders;