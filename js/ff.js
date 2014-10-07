$(document).ready(function() {

	var width_ = $(".main").width();
	$(".main-image").css("width", width_ + "px");
	var width_2 = width_ - 200;
	$("#right").css("width", width_2 + "px");

	$( window ).resize( function() {
		var width_ = $(".main").width();
		$(".main-image").css("width", width_ + "px");

		var width_2 = width_ - 200;
		$("#right").css("width", width_2 + "px");
	});


});

$( function() {
	$("#story a").click( function() {
		var target = $(this).attr("href");
		var path = "images/story/ff_" + target + ".png";
		$("#left").attr("src", path);
		//$("#right h2").html("success!");
		if (target == "christ") {
			$("#right h2").html("Christ Yuen");
			$("#right p").html("在大三下学期，我与环球市场结缘，作为校园大使负责校园招聘宣传。到了六月份，GTC招聘开始，在环球认识的一群牛人给我的启发让我热血沸腾。于是我报名想成为一名GTC，最终如愿以偿。两个多月后，公司启动了M2C China项目，我对创业一直有种莫名渴求，这个项目是一个公司内部创业的好机会，有很多挑战和机遇，从那时候起，我和其他八位GTC一起加入了M2C China，作为首批种子一直奋斗到现在。");
		} else if (target == "donna") {
			$("#right h2").html("Danny Deng");
			$("#right p").html("团队，是我深爱环球市场的一个重要的因素，团队生活贯穿着我所有的环球生活。团队中的每一个成员，都是可以互相学习的对象，我总是既惊讶又惊喜的从他们身上发现各种的闪光点。就如2012年的GTC项目，这些还未毕业的大学生身上原来积聚了这么大的能量。这里有很多很多优秀的同事，他们，还都只是大学生。这样的团队，年轻、激情、充满创造力；这样的团队，实现着一个又一个的不可能！");
		} else if (target == "edison") {
			$("#right h2").html("Edison Lee");
			$("#right p").html("非常诚挚的欢迎你们, GTC们，让我们一同打造这新一代的ERP, 她必将大力推动飞飞，这承载满诸多梦想的网购平台的茁壮成长，而我们，也终将因这个美好事业而成就了我们！");
		} else if (target == "panda") {
			$("#right h2").html("Panda Huang");
			$("#right p").html("这是一支年轻的创业团队,激情而富有强大的生命力!在这里,我们边走边学,不断自我总结、分享经验,全力以赴,奋斗不息。当有朋友前来了解M2C中国的时候,我会告诉他:不要因为你认为自己喜欢这样的创业团队而加入,不妨先问问自己,是否认同这样的事业,是否也是你的梦想?如果是,那么无论将来你遇上什么的风波与挫折,你都不会停下脚步,同时会更努力 让团队变得更好!");
		} else if (target == "teddy") {
			$("#right h2").html("Teddy Li");
			$("#right p").html("2012年9月，我加入了一个在我职业生涯开端，为我烙下成长印记的项目——国家队项目。那一年的国家队项目，还是一个初生的婴儿，当时我们几个GTC，各自带着行李包包，在一次誓师后，便奔赴了各自的城市，开始了我们从无到有的创业旅程。从几个人的团队，到几十，到上百。这个过程中，和我们一样的一群大学生，同样怀揣着一个简单的梦想和信念：为了一份事业、为了让自己变得更加独当一面。从Home Office的彻夜讨论、晨会的雄心壮志，到烟尘滚滚的工业区、与厂家高管在会议桌上的商业谈判。虽然是短短的数个月，我们同甘共苦，我们分享成功的喜悦、分享成长的故事。这群人的眼神，在项目的历练中，渐渐褪去了大学生的青涩，而增添了一份职场人颇具老练和坚毅的味道。");
		}
		return false;
	});
});