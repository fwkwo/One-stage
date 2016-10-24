// 动态加载图片
$(window).on('load',function(){
	waterfall();
	var dataInt = { "data":[{"src":'1.jpg'},{"src":'2.jpg'},{"src":'3.jpg'},{"src":'4.jpg'},{"src":'5.jpg'},{"src":'6.jpg'},{"src":'7.jpg'},{"src":'8.jpg'},{"src":'9.jpg'}]}
	
	$(window).on('scroll',function(){
		if(checkscrollslide){
			$.each(dataInt.data, function(key,value) {
				var oBox = $('<div>').addClass('box').appendTo($("#main"));
				var opic = $('<div>').addClass('pic').appendTo($(oBox));
				var oImg = $('<img>').attr('src','img/'+$(value).attr('src')).appendTo($(opic));
			});
			waterfall();
		}
	})
	// 窗口变小时,重新排位置
	$(window).on('resize',function(){
		waterfall()
	})
})



// 图片位置
function waterfall(){
	var $boxs = $("#main>div");    
	var w = $boxs.eq(0).outerWidth();
	var cols =Math.floor($(window).width()/w);
	$("#main").width(w*cols).css('margin','0 auto');
	var harr = [];

	$boxs.each(function(index,value){
		var h = $boxs.eq(index).outerHeight();
		if(index<cols){
			harr[index] = h;
			$(value).css({
				'position':'static',
			})
		}else{

			var minH = Math.min.apply(null,harr);
			var miniHindex = $.inArray(minH,harr);
			$(value).css({
				'position':'absolute',
				'top':minH+'px',
				'left':miniHindex*w+'px'
			})
			harr[miniHindex] += $boxs.eq(index).outerHeight();
		}
		console.log(harr);
	})

}


// 判断是否 滚动
function checkscrollslide (){
	var $lastbox = $('#main>div').last();
	var $lastboxDis = $lastbox.offset().top+Math.floor($lastbox.outerHeight()/2);
	var $scrollTop = $(window).scrollTop();
	var $documentH = $(window).height();
	return($lastboxDis<$scrollTop+$documentH)?true:false;
}
