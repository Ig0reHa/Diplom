function blockLoad() {
	var StylesImg = document.querySelectorAll('.styles-2'),
	    loadMoreBtn = document.getElementsByClassName('button-styles')[0];

	loadMoreBtn.addEventListener('click', function () {
		for (var i = 0; i < StylesImg.length; i++) {
			StylesImg[i].classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
			StylesImg[i].classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1', 'animated', 'zoomIn');
			loadMoreBtn.remove();
		}
	});
}

module.exports = blockLoad;