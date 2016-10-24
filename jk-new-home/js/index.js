$(function(){

	//搜索框
	$('.seachLabel').click(function(){
		$('.textInput').focus();
	})
	function destyle(){
		if($('.textInput').val()!==""){
			$('.seachLabel').hide();
		}else{
			$('.seachLabel').show();
		}
	}
	$('.textInput').keyup(function(){
      //当输入框有按键输入同时输入框不为空时，隐藏掉label；有按键输入同时为空时（删除字符），显示label
      destyle();
    });

    //点击搜索按钮搜索框显示
    $('.seach-icon').click(function(){
		$('.seachBox').addClass('seach-box');
		$('.seachBox').css("transform","scale(1, 1)")
    })

	//点击关闭按钮的时候搜索框隐藏
	$('.cloaeIcon').click(function(){
		$('.seachBox').hide();
		$('.seachBox').removeClass('seach-box');
	})

	//切换课程类型
	$('.mode-icon li').click(function(){
		var index = $(this).index();
		  $('.list').eq(index).show().addClass('courseMode-list').siblings().removeClass('courseMode-list').hide();
	})

	$('.mode-icon1').click(function(){
		$('.courseMode').show()
	})



	//课程类型一
	$('.courseMode li').hover(
		function(){
		$(this).find('.courseText').stop().animate({ 
		   	 height: "58px"
		  }, 700);
		$(this).find('.primaryBox').css("display","inline-block");
		$(this).find('.studyNumber').show();
		$(this).find('.clickBtn').fadeIn()
	},function(){
		$(this).find('.courseText').stop().animate({ 
		   	 height: "0px"
		}, 700);
		$(this).find('.primaryBox').css("display","none");
		$(this).find('.studyNumber').hide();
		$(this).find('.clickBtn').fadeOut()
	})
	//课程类型二
	$('.courseMode-list li').hover(
		function(){
			$(this).find('.redioBtn').fadeIn()
			/*$('.redioBtn').fadeIn()*/
		},function(){
			$(this).find('.redioBtn').fadeOut()
		}
	)


	//判断分页输入框的value是否为数字
	function pag(){
	var ex = /^\d+$/;
			var oval= $('.inputPag input').val();
			if(!ex.test(oval)){
				alert('请输入整数')
			}
		}
	$('.inputPag input').keyup(function(){
		pag()
	})
})

