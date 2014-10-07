$(document).ready( function() {
	$("#slider").divas({
		mainImageWidth: "70%",
		start: "auto",
		slideInterval: 3000,
		slideTransitionClass: "divas-slide-transition-left",
		titleTransitionClass: "divas-title-transition-left",
		titleTransitionParameter: "left",
		titleTransitionStartValue: "-999px",
		titleTransitionStopValue: "0px",
		wingsOverlayColor: "rgba(255,255,255,1)"
	});
	//alert("hello");
	var width_ = $(document.body).width();
	if (width_ < 1000) {
		$(".header").css("width", 1000 + "px");
	} else {
		$(".header").css("width", 100 + "%");
	}

	var width_2 = $("#fuli li").width();
	$("#fuli a>img").css("width", width_2 + "px");

	$( window ).resize( function() {
		//alert($(document).width());
		width_ = $(document.body).width();
		if (width_ < 1000) {
			$(".header").css("width", 1000 + "px");
		} else {
			$(".header").css("width", 100 + "%");
		}

		var width_2 = $("#fuli li").width();
		$("#fuli a>img").css("width", width_2 + "px");
	});
});