	window.onload=function(){
		var re_a=document.getElementById("return");
		re_a.onclick = function() {
		    var timer = setInterval(function() {
		        window.scrollBy(0, -10);
		        if (document.body.scrollTop == 0){
		            clearInterval(timer);
		        };
		    },5);
		}
		// 窗口滚动检测
		window.onscroll = function() {
		    re_a.style.display = (document.body.scrollTop >=0) ? "block" : "none";
		}
	}