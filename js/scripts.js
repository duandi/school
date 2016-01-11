/*
 $(document).ready(function () {
 $(".news_title .notice").mouseover(function(){
 $(".news_main .notice_main").show();
 $(".news_main .log_main").hide();
 $(this).animate({
 opacity:1
 },300);
 $(".news_title .log").animate({
 opacity:0.7
 },300);
 });
 $(".news_title .log").mouseover(function(){
 $(".news_main .log_main").show();
 $(".news_main .notice_main").hide();
 $(this).animate({
 opacity:1
 },300);
 $(".news_title .notice").animate({
 opacity:0.7
 },300);
 });

 });
 */
$(document).ready(function () {
    $(".news_title").children().mouseover(function () {
        for (var i = 0; i < 1; i++) {
            $(this).eq(i).animate({
                opacity: 1
            }, 200);
            $('.news_main').children().eq(i).siblings().hide();
            $(this).siblings().animate({
                opacity: 0.7
            }, 200);
        }
    });
});
