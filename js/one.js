			$(document).ready(function(){
          			$(window).scroll(function(){
             			 var top=$(document).scrollTop();
              			 var menu=$("#menu");
              			 var items=$("#content").find(".item");
                         var currentId="";//当前所在的楼层(item) #id
                             items.each(function(){
                                 var m=$(this);
                                 var itemTop=m.offset().top;
                                 if(top>itemTop-200){
                                                  currentId="#"+m.attr("id");
                                                    }else{
                                                  return false;
                                                         }
                                                  });
              var currentLink=menu.find(".current");
              if(currentId&&currentLink.attr("href")!=currentId){
                  currentLink.removeClass("current");
                  menu.find("[href="+currentId+"]").addClass("current");
                                                }
          }); 
       });











            //滚动条发生滚动时，要获取相应的值。
           
            //请补充此处代码，让导航菜单实现在滚动条滚动的时候自动设置焦点


            //给相应楼层的a 设置 current，取消其他链接的current