
(function ($) {
	$(function () {
		nav();
	});
	
	function nav() {
		var $liCur = $(".nav-box>ul>li.cur"),
			curP = $liCur.position().left,
			curW = $liCur.outerWidth(true),
			$slider = $(".nav-line"),
			$targetEle = $(".nav-box>ul>li:not('.last')"),
			$navBox = $(".nav-box");
		$slider.hide();
		$slider.stop(true, true).animate({
			"left" : curP,
			"width" : curW
		});
		$targetEle.mouseenter(function () {
			$slider.show();
			var $_parent = $(this);//.parent(),
			_width = $_parent.outerWidth(true),
			posL = $_parent.position().left;
			if (posL != curP) {
				$slider.stop(true, true).animate({
					"left" : posL,
					"width" : _width
				}, "fast");
			} else {
				$slider.hide();
			}
		});
		$navBox.mouseleave(function (cur, wid) {
			$slider.hide();
		});
	};	
})(jQuery);