  $(function(){    
                $('.grid1_of_4').mouseenter(function(){    
                    var wValue=1.5 * $(this).width();    
                    var hValue=1.5 * $(this).height();          
                    $(this).stop().animate({width: wValue,    
                                    height: hValue,    
                                    left:("-"+(0.5 * $(this).width())/2),    
                                    top:("-"+(0.5 * $(this).height())/2)}, 1000);    
                }).mouseleave(function(){    
                    $(this).stop().animate({width: "222.56px",    
                                                 height: "170.92px",    
                                                
                                               }, 1000 );    
                });    
            });     