	//所有页面网址 ID

	// var url_all = 'http://192.168.3.12:8088';
	var url_all = 'http://47.101.33.180:8088';

	var tenantId = 'da9476e0b4424ff9a83ec8f2ac603e5e';

	//刷新所有页面
	window.addEventListener("reloadAll", function () {
		var size = localStorage.getItem('size');
		document.getElementsByTagName('html')[0].style.fontSize=size;
	});

//	var size = localStorage.getItem('size');
//	document.getElementsByTagName('html')[0].style.fontSize=size;
//
//	var mask = mui.createMask();//callback为用户点击蒙版时自动执行的回调；
//	
//	mask.show();//显示遮罩
//	mask.close();//关闭遮罩