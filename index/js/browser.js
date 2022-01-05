/*
    * 智能机浏览器版本信息:
    *
    */
//var browser = {
//    versions: function () {
//        var u = navigator.userAgent, app = navigator.appVersion;
//        return {//移动终端浏览器版本信息
//            trident: u.indexOf('Trident') > -1, //IE内核
//            presto: u.indexOf('Presto') > -1, //opera内核
//            webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
//            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
//            mobile: !!u.match(/AppleWebKit.*Mobile.*/) || u.indexOf('iPad') > -1, //是否为移动终端
//            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
//            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
//            iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
//            iPad: u.indexOf('iPad') > -1, //是否iPad
//            webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
//        };
//    }(),
//    language: (navigator.browserLanguage || navigator.language).toLowerCase()
//}

//document.writeln("语言版本: " + browser.language + "<br/>");
//document.writeln("是否为移动终端: " + browser.versions.mobile + "<br/>");
//document.writeln("ios终端: " + browser.versions.ios + "<br/>");
//document.writeln("android终端: " + browser.versions.android + "<br/>");
//document.writeln("是否为iPhone: " + browser.versions.iPhone + "<br/>");
//document.writeln("是否iPad: " + browser.versions.iPad + "<br/>");
//document.writeln(navigator.userAgent);

var browsermd = new MobileDetect(window.navigator.userAgent);
//console.log("mobile : " + browsermd.mobile());//移动端
//console.log("phone : " + browsermd.phone());//手机
//console.log("平板型号 : " + browsermd.tablet());
//console.log(browsermd.userAgent());
//console.log("系统 : " + browsermd.os());
//console.log(browsermd.is('iPhone'));
//console.log(browsermd.is('bot'));
//console.log(browsermd.version('Webkit'));
//console.log(browsermd.versionStr('Build'));
//console.log(browsermd.match('playstation|xbox'));