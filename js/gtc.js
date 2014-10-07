$(document).ready( function() {
	//alert("hello");
	var width_ = $(".main").width();
	$(".main-image").css("width", width_ + "px");

	var height_ = $("#about-gtc li:eq(2)").height();
	$("#about-gtc li:first-child").css("height", height_ +"px");

	$( window ).resize( function() {
		var width_ = $(".main").width();
		$(".main-image").css("width", width_ + "px");

		var height_ = $("#about-gtc li:eq(2)").height();
		$("#about-gtc li:first-child").css("height", height_ +"px");
	});
});