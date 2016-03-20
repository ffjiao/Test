$(function() {
    var size=$(".img li").size();
    for(i=1;i<=size;i++) {
        var li="<li>"+i+"</li>";
        $(".num").append(li);
    }
    //手动控制轮播图，默认显示第一张
    $(".img li").eq(0).show();
    $(".num li").eq(0).addClass("active");
    $(".num li").mousemove(function () {
        $(this).addClass("active").siblings().removeClass("active");
        var index = $(this).index();
        i=index;
        //优化stop()
        $(".img li").eq(index).stop().fadeIn(300).siblings().stop().fadeOut();
    });
    //自动轮播
    var i = 0;
    var t = setInterval(move, 1500);
    //向右移动
    function move() {
        i++;
        if (i == size) {
            i = 0;
        }
        $(".num li").eq(i).addClass("active").siblings().removeClass("active");
        $(".img li").eq(i).fadeIn(500).siblings().fadeOut(500);
    }
    //向左移动
    function moveL() {
        i--;
        if (i == -1) {
            i = size-1;
        }
        $(".num li").eq(i).addClass("active").siblings().removeClass("active");
        $(".img li").eq(i).fadeIn(500).siblings().fadeOut(500);
    }
    //向左移动
    $(".out .left").click(function(){
        moveL();
    })
    $(".out .right").click(function(){
        move();
    })
    //定时器开始和结束
    $(".out").hover(function () {
        clearInterval(t);
    }, function () {
        t = setInterval(move, 1500);
    });
})



