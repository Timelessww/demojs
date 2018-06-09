//已排除
//注册。js
//@author :文林

    
        function ZhuCe(){  
        if(NoKong()){  
            var arr = [];  
            if(localStorage.user){  
            arr = eval(localStorage.user);  
                for(e in arr){  
                    if($('#uname').val()==arr[e].loginName){  
                        alert('该账号已被注册');  
                        clear();  
                        return;  
                    }  
                }  
            }  
            var user = {'loginName':$("#uname").val(),'loginPsd':$("#password1").val(),'age':$("#age1"),
            'phone':$("#mphone"),'email':$("#addemail")};
            arr.push(user);  
            localStorage.user=JSON.stringify(arr);  
            alert('注册成功');  
          
           
            }  
        }  
      
        function NoKong(){  
            if($('#uname').val()==""){  
                alert('用户名不能为空');  
                return false;  
            }else if($('#password1').val()==""){  
                alert('密码不能为空');  
                return false;  
            }  
           else if($('#password2').val()==""){  
                alert('确认密码不能为空');  
                return false;  
            }  
            else if($('#age1').val()==""){  
                alert('年龄不能为空');  
                return false;  
            }  
            else if($('#mphone').val()==""){  
                alert('手机号不能为空');  
                return false;  
            }  
            else if($('#addemail').val()==""){  
                alert('邮箱不能为空');  
                return false;  
            }  
             else if($('#inputcode').val()==""){  
                alert('验证码不能为空');  
                return false;  
            }  
           
            return true;  
        }  