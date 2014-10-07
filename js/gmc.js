$(document).ready( function() {
	//alert("hello");
	var width_ = $(".main").width();
	$(".main-image").css("width", width_ + "px");

	$( window ).resize( function() {
		var width_ = $(".main").width();
		$(".main-image").css("width", width_ + "px");
		var angle_top = $("#comment").offset().top - $("#people").offset().top;
		angle_top += $("#comment").outerHeight() - 2;
		$(".angle").css("top", angle_top + "px");
	});

	var angle_top = $("#comment").offset().top - $("#people").offset().top;
	angle_top += $("#comment").outerHeight() - 2;
	$(".angle").css("top", angle_top + "px");
	$("#people a").click( function() {
		var angle_top = $("#comment").offset().top - $("#people").offset().top;
		var left_ = $(this).offset().left;
		angle_top += $("#comment").outerHeight() - 2;
		$(".angle").css("top", angle_top + "px");
		$(".angle").css("left", left_ + 30 + "px");
	});
});

$(window).scroll( function() {
	var $this = $(this);
	var targetTop = $(this).scrollTop();
	if (targetTop >= 237) {
		$("#sub-nav").addClass("fixed-sub-nav");
		$("#sub-nav li").css("background-color", "rgba(51, 102, 204, 0.6)");
	} else {
		$("#sub-nav").removeClass("fixed-sub-nav");
		$("#sub-nav li").css("background-color", "rgba(51, 102, 204, 1)");
	}
});

$( function() {
	$("#sub-nav a").click(function(){
		var target = $(this).attr("href");
		var targetScroll = $(target).offset().top - 40;
		$("html,body").animate({scrollTop:targetScroll},300);
		return false;
	});
});