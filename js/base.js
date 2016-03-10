$(function(){
	countdown = 60;

	setBoxHeight();
	initIndex();
	initActivityPage();
	initStoreDetailPage();
	
	window.onresize=function(){  
        setBoxHeight();
		initIndex();
		initActivityPage();
		initStoreDetailPage();  
    }  
})

function setBoxHeight(){
	$('.box').css('min-height',document.documentElement.clientHeight-90);
	$('.index-box').css('min-height',document.documentElement.clientHeight-90);
}

function initIndex(){
	$('.J-uninvite-box .J-sumit').click(function(){
		var phone = $('.J-uninvite-box input').val();

		if(!checkPhone(phone)){
			alertInfo('请输入正确的手机号码，谢谢！')
		}
		if(checkPhone(phone)){
			// if 非目标用户
			// alertInfo('对不起，您不是特邀客户，您可关注我公司其他活动，谢谢！');

			// if 目标用户
			hide('.J-uninvite-box');
			show('.J-invite-box');
		}
	})

	$('.J-uninvite-box .J-input').bind('keypress',function(){
		if(event.keyCode == "13"){
			$('.J-uninvite-box .J-sumit').click();
		}
	})
	
	$('.J-invite-box .J-input').bind('keypress',function(){
		if(event.keyCode == "13"){
			$('.J-invite-box .J-sumit').click();
		}
	})

	$('.J-invite-box .J-fetch-code').click(function(){
		settime($(this));
	})

	$('.J-invite-box .J-sumit').click(function(){
		var code = $('.J-invite-box .J-input').val();
		if(!code.length){
			alertInfo('请输入验证码')
		}
		if(code.length){
			// if 验证码成功
			window.location = "activity.html";
		}
	})
}

function initActivityPage(){
	$('.J-search-submit').click(function(){
		var searchInfo = $('.J-search-input').val();
		window.location = "store_detail.html";
	})
}

function initStoreDetailPage(){
	var table_width = $('.store-detail-box').width();
	$('.store-detail-box p').css('width',(table_width/4)+'px');
}

function checkPhone(str){
    var reg = /^1\d{10}$/;
    return reg.test(str);
}

function alertInfo(info){
	$('.alert-box .alertInfo').html(info);

	show('.alert-box');
	setTimeout(function(){
		hide('.alert-box');
	},1500)
}

function settime(val) {
    if (countdown == 0) {
        val.removeAttr("disabled");
        val.val("获取验证");
        countdown = 60;
        return;
    } else {
        val.attr("disabled", true);
        val.val(countdown + "秒后重试");
        countdown--;
    }
    setTimeout(function() {
        settime(val)
    }, 1000)
}

function show(obj){
	$(obj).css('display','block');
}
function hide(obj){
	$(obj).css('display','none');
}
