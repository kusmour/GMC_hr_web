$(document).ready( function() {
	//alert("hello");
	var width_ = $(document.body).width();
	if (width_ < 1000) {
		$(".main").css("width", 1000 + "px");
		$(".main-column").css("width", 200 + "px");
	} else {
		$(".main").css("width", 100 + "%");
		$(".main-column").css("width", 20 + "%");
	}

	$( window ).resize( function() {
		//alert($(document).width());
		width_ = $(document.body).width();
		if (width_ < 1000) {
			$(".main").css("width", 1000 + "px");
			$(".main-column").css("width", 200 + "px");
		} else {
			$(".main").css("width", 100 + "%");
			$(".main-column").css("width", 20 + "%");
		}
	});
});

$(window).load( function() {
	var $current;
	var $bg;
	$(".main-column").mouseover( function() {
		$(this).find("img").fadeTo(300, 0.4);
		//$(this).find("img").attr("src", "images/bg-gray.png");
		$current = this.id + "_";
		$("#" + $current).fadeIn();
	});
	$(".main-column").mouseleave( function() {
		$(this).find("img").fadeTo(100, 1);
		//$(this).find("img").attr("src", "images/bg-" + this.id + ".png");
		$("#" + $current).fadeOut();
	})
});

$( function() {
	$(".nav-box a").click( function() {
		var target = $(this).attr("href");
		$(".hide").hide("fast");
		$("#" + target).show("normal");
		return false;
	});
});

$( function() {
	$("#qa a").click( function() {
		var target = $(this).attr("href");
		$(".answer").hide("fast");
		$("#" + target).show("normal");
		return false;
	});
});