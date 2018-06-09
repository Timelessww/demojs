
//login。js
// @author :文林

function login() {
		if(NoKong()) {
			if(localStorage.user) {
				arr = eval(localStorage.user); //获取localStorage
				
				var k = 0;
		for(e in arr) {
			if($('#loginusername').val() == arr[e].loginName) {
				if($('#loginpassword1').val() == arr[e].loginPsd) {
					
					localStorage.setItem("indexname",$('#loginusername').val() )
				
					alert('登录成功');
					clear();
					k = 0;
					return;
				} else {
					alert('密码错误');
					clear();
					k = 0;
					return;
				}
			} else {
				k = 1;
			}
		}
		if(k == 1) {
			alert('用户名不存在');
			clear();
		}
		} else {
			alert('用户名不存在');
			clear();
		}
		}
		}

		function clear() {
			$('#loginusername').val('');
			$("#loginpassword1").val('');
		}

		function NoKong() {
			if($('#loginusername').val() == "") {
				alert('用户名不能为空');
				return false;
			} else if($('#loginpassword1').val() == "") {
				alert('密码不能为空');
				return false;
			}
			return true;
		}



function tuichu()

{
	
	localStorage.setItem("indexname","")
	
	  $('#aa').html("");
	  $('#tuichu').html("");
	  
	
	
}

