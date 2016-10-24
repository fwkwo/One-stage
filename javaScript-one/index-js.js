window.onload=function(){
	var oInp = document.getElementById('input1');
		 oInp.focus();
		 oInp.onblur = function(){
		 	if (oInp.value.length==0) {
		 		alert("请输入0-100之间的数字");
		 	}
		 };
		 oInp.onchange = function(){
		 	var sub=oInp.value;
		 	switch(true){
				case sub<=100 && sub>=90:
				alert("1等生");
				break;
				case sub<90 && sub>=80:
				alert("2等生");
				break;
				case sub<80 && sub>=70:
				alert("3等生");
				break;
				case sub<70 && sub>=60:
				alert("4等生");
				break;
				case sub<60 && sub>=50:
				alert("5等生");
				break;
				case sub<50 && sub>=40:
				alert("6等生");
				break;
				case sub<40 && sub>=30:
				alert("7等生");
				break;
				case sub<30 && sub>=20:
				alert("8等生");
				break;
				case sub<20 && sub>=10:
				alert("9等生");
				break;
				case sub<10 && sub>=0:
				alert("10等生");
				break;
				default:
				alert("请输入0-100之间的数字");
				break;
			}
		 }
}