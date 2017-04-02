$(function(){
	
	
		var tags=$(".little_tags span");
		
		for (var i=0;i<tags.length;i++) {
			tags.on("touchstart",function(){
				$(this).addClass("tags_active").siblings().removeClass("tags_active");
				tagBtn.addClass("submit");
				tiShi.css("display","none")
			})
		}
	
	
	(function load(){
		var clock=null;
		
		clock=setInterval(function(){
			clearInterval(clock);
			var oW=$("#welcome");
			oW.css("opacity",0);
			oW.on("transitionend",function(){
				oW.removeClass("pageShow");
			})
		},4000)
	})();
	
	var mySwiper = new Swiper ('.swiper-container', {
	    direction: 'horizontal',
	    autoplay:3000,
	    speed:500,
	    loop: true,
	    
	    // 如果需要分页器
	    pagination: '.swiper-pagination',
	  })        
	
	//验证是否提交评分
	var tagBtn=$(".tag_btn");
	var tiShi=$(".info");
	
	
	
	tagBtn.on("touchend",function(){
		$("#index").css("z-index","6")
		if($(".submit").length>0){
			fadeOut();
		}else{
			tiShi.css("display","inline-block");
		}
	})
	//谢谢评价页面消失效果
	function fadeOut(){
		var Mask=$("#mask");
		Mask.addClass("pageShow");
		$("#news").addClass("pageShow");
		setInterval(function(){
			Mask.css("opacity","1");
			$("#index").css("-webkit-filter","blur(2px)")
		},14)
		setInterval(function(){
			Mask.css("opacity","0");
			$("#index").css("-webkit-filter","blur(0px)");
			$("#news").css("opacity","1");
		},3000)
	}
	
	var fileBtn=$(".file_btn");
	fileBtn.on("touchstart",function(){
		$("#final").addClass("pageShow");
	})
	
	
})

