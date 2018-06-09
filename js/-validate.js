  
  //注册验证
  
	// @author :文林
	
	

	//表单验证规则
	var formValid = $(".add-form").validate({
		rules: {
			"addFormName":{
				"required":true,		//必填字段
				"minlength":2
			},
			
		   	"age":{
				"required":true	,
				
				"age":true
				
				
			},
			"addFormPass1":{
				"required":true	,
				"minlength":6
				
				
			},
			"addFormPass2":{
				"required":true,
				"minlength":6,
				"equalTo": "#password1"		//输入值必须和 #password1 相同
			},
			"addFormPhone":{
				"required":true,
				"mobile":true,		//验证手机号
				"minlength":11		//输入长度最小是 11
			},
			"addemail":{
				"required":true,
				"Email":true
			},
			"inputcode":{
				"required":true
				
				
			}
		},
		messages: {
			"addFormName":{
				"required":"用户名不能为空",
				"minlength":"用户名不能少于两个字符"
			},
			"age":{
				"required":"年龄不能为空！"	,
				
				"age":"请输入合法年龄！！"
			},
			"addFormPass1":{
				"required":"密码不能为空",
				"minlength":"密码不能少于6个字符"
				
			},
			"addFormPass2":{
				"required":"确认密码不能为空",
				"equalTo":"两次输入的密码不一致"
			},
			"addFormPhone":{
				"required":"手机号不能为空",
				"mobile":"请输入正确的手机号",
				"minlength":"手机号格式不正确",
			},
			"addemail":{
				"required":"邮箱地址不能为空",
				"Email":"请输入正确的邮箱地址！"
				
			},
			"inputcode":{
				"required":"验证码不能为空",
				
				
			}
		},
		errorPlacement:function(error,element) {
			error.appendTo(element.siblings(".yf-error-tip"));
		}
	});
	
	//提交前开始验证
	var submitInfo = function(){
		// 手机号码验证
jQuery.validator.addMethod("mobile", function(value, element) {
    var length = value.length;
    var mobile =  /^[1][3578]\d{9}$/;
    return this.optional(element) || (length == 11 && mobile.test(value));
}, "手机号码格式错误");   

		// 年龄验证
jQuery.validator.addMethod("age", function(value, element) {
    var chrnum = /^(1[89]|[2-8]\d|80)$/;
    return this.optional(element) || (chrnum.test(value));
}, "只能输入18到80的数字");

//验证邮箱
jQuery.validator.addMethod("Email", function(value, element) {
    var length = value.length;
    var method1 = this.optional( element ) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test( value );
   return method1 ;
}, "邮箱格式错误"); 



	if($(".add-form").valid()){
		
	  return true;
		 	
		};
	}
	
	
