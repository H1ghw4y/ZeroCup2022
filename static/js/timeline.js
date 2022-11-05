$(function() {
    // 8个结点
    $(".timeline .spot1").hover(function() {
        $("#event div").eq(0).stop().slideToggle();
    })
    $(".timeline .spot2").hover(function() {
        $("#event div").eq(1).stop().slideToggle();
    })
    $(".timeline .spot3").hover(function() {
        $("#event div").eq(2).stop().slideToggle();
    })
    $(".timeline .spot4").hover(function() {
        $("#event div").eq(3).stop().slideToggle();
    })
    $(".timeline .spot5").hover(function() {
        $("#event div").eq(4).stop().slideToggle();
    })
    $(".timeline .spot6").hover(function() {
        $("#event div").eq(5).stop().slideToggle();
    })
    $(".timeline .spot7").hover(function() {
        $("#event div").eq(6).stop().slideToggle();
    })
    $(".timeline .spot8").hover(function() {
        $("#event div").eq(7).stop().slideToggle();
    })

    // 8个年份
    $("#y1992").hover(function() {
        $("#event div").eq(0).stop().slideToggle();
    })
    $("#y2003").hover(function() {
        $("#event div").eq(1).stop().slideToggle();
    })
    $("#y2008").hover(function() {
        $("#event div").eq(2).stop().slideToggle();
    })
    $("#y2013").hover(function() {
        $("#event div").eq(3).stop().slideToggle();
    })
    $("#y2016").hover(function() {
        $("#event div").eq(4).stop().slideToggle();
    })
    $("#y2017").hover(function() {
        $("#event div").eq(5).stop().slideToggle();
    })
    $("#y2020").hover(function() {
        $("#event div").eq(6).stop().slideToggle();
    })
    $("#y2022").hover(function() {
        $("#event div").eq(7).stop().slideToggle();
    })
})


