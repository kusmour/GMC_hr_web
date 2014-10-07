$(document).ready( function() {
	//alert("hello");
	var width_ = $(".main").width();
	$(".main-image").css("width", width_ + "px");

	var angle_top = $("#comment").offset().top - $("#people").offset().top + $("#comment").outerHeight() - 2;
	$(".angle").css("top", angle_top + "px");

	$( window ).resize( function() {
		var width_ = $(".main").width();
		$(".main-image").css("width", width_ + "px");
		var angle_top = $("#comment").offset().top - $("#people").offset().top + $("#comment").outerHeight() - 2;
		$(".angle").css("top", angle_top + "px");
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

$( function() {
	$("#people a").click( function() {
		
		var target = $(this).attr("href");
		//$("#comment p").html("success!");
		if (target == "feilipu") {
			$("#comment span").html("菲利普·科特勒");
			$("#comment p").html("我预测，中国有了‘GMC制造’，将可以和‘德国制造’、‘日本制造’平起平坐！如果多年之后回顾历史的话，到时候我们会说，GMC为中国的世界形象作出了巨大的贡献！");
		} else if (target == "quanguoshan") {
			$("#comment span").html("全国珊");
			$("#comment p").html("只要是GMC认证出来的厂家，我就有信心！");
		} else if (target == "ailisi") {
			$("#comment span").html("艾·里斯");
			$("#comment p").html("如果中国制造要学德国的话，我们要做到两点：第一，有GMC这样的群体品牌，把大家团结起来，通过权威认证向世界推出中国高品质的制造商。第二、建立强有力的自主品牌。这两点缺一不可");
		} else if (target == "yushiwei") {
			$("#comment span").html("余世维");
			$("#comment p").html("金融海啸没什么不好，它让市场重新洗牌，实现优胜劣汰。中国的制造企业在痛苦转型，加入一个优质的群体品牌，可以让你从同质化的竞争中脱颖而出。GMC是一个平台，它不会帮你增加产量但是上了这个平台就会给你增加价值，把群体品牌的价值变成自己的价值。");
		} else if (target == "grb") {
			$("#comment span").html("Gareth Richard Bullock");
			$("#comment p").html("GMC代表了中国优质制造，通过GMC认证的制造商将获得全球买家的信任。环球市场的员工致力于帮助中国的优质制造商获得成功，这点让我深受鼓舞。");
		} else if (target == "xiaoyongqiang") {
			$("#comment span").html("萧永强");
			$("#comment p").html("环球市场集团通过GMC让世界认识到了一个全新的中国制造。在让中国制造成为优质标志的路上，具有非常重要的战略意义。");
		} else if (target == "wangjing") {
			$("#comment span").html("王京");
			$("#comment p").html("我欣赏环球市场集团员工工作勤奋，致力创新，追求卓越的精神，中国优质制造商走向世界有GMC同行，真好！");
		}


		var angle_top = $("#comment").offset().top - $("#people").offset().top + $("#comment").outerHeight() - 2;
		var left_ = $(this).offset().left + 30;
		$(".angle").css({ "top":angle_top + "px", "left":left_ + "px"});

		return false;
	});
});

