$(function () {
    $(".header .menu>li").hover(function () {
        if (!$(this).has("ul").length) {
            return;
        }
        $(".secmenu-bg").addClass("active");
        $(".header").removeClass("line");
    }, function () {
        $(".secmenu-bg").removeClass("active");
        $(".header").addClass("line");
    });
});