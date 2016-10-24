window.onload=function(){


	var btn=document.getElementById('btn');
	//点击计算按钮
	btn.onclick=function(){
		var num01=document.getElementsByClassName('num01')[0].value,
		    num02=document.getElementsByClassName('num02')[0].value,
		    method=document.getElementById('method').value;
		calculate(num01,num02,method);
	}

	//检查输入的是否合理
	function checkNum(num01,num02,method){
		num01=num01.trim();
		num02=num02.trim();

		//判断是不是数字
		if(isNaN(num01) || isNaN(num02)){
			alert('请输入数字');
			return false;
		}
		//判断是否有内容
		 if (!num01 || !num02) {
	        alert('请输入数字');
	        return false;
	    }

		if( method=='except' && parseFloat(num02) === 0){
	    	alert('除数可不能为0啊');
	    	return false;
	    } 
	    return true;
	}

	//执行加减乘除
	function calculate(num01,num02,method){
		if (!checkNum(num01, num02, method)) {
	        return;
	    }
	    num01=parseFloat(num01);
	    num02=parseFloat(num02);

	    switch(method){
	    	case 'add':
	    	result=num01 + num02;
	    	//alert(11)
	    	break;
	    	case 'reduce':
	    	result=num01 - num02;
	    	break;
	    	case 'ride':
	    	result=num01 * num02;
	    	break;
	    	case 'except':
	    	result=num01 / num02;
	    	break;
	    }
	  	document.getElementById('result').innerHTML=result;
	}
}
