  
  
  
  //index页面显示用户
  //Author:文林
  
  $(function(){
                var username = localStorage.getItem("indexname");//获取存储的cookie
                $('#aa').html("欢迎："+username);
                if(  $('#aa').html("欢迎："+username)=="")
                
               {$('#tuichu').html("");
              }
               
               else{
               	$('#tuichu').html("退出");
               	
               }
                //打印到页面上
       })