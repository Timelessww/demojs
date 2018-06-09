


window.onload=function(){
    var oBox=document.getElementById('box');    
    var oUl=oBox.children[0];    
    var aLi=oUl.children;    
    //复制一份内容    
    oUl.innerHTML+=oUl.innerHTML;    
    oUl.style.width=aLi.length*aLi[0].offsetWidth+'px';    
    setInterval(function(){    
        var l=oUl.offsetLeft+10;    
        if(l>=0){    
            l=-oUl.offsetWidth/2;    
        }    
        oUl.style.left=l+'px';    
    },100);    
};    