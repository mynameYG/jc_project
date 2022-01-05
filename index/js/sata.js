window.onload = function () {
    var prepageurl = encodeURI(document.referrer),
    pageurl = encodeURI(location.href),
    screenwidth = screen.width,
    screenheight = screen.height;

    var username = document.getElementById("username"),
    userid = document.getElementById("userid"),
    channelno = document.getElementById("channelno"),
    channelname = document.getElementById("channelname");

    username = encodeURI(username ? username.value : "访客");
    userid = encodeURI(userid ? userid.value : "0");
    channelno = encodeURI(channelno ? channelno.value : "");
    channelname = encodeURI(channelname ? channelname.value : "");

    var data = { prepageurl: prepageurl, pageurl: pageurl, screenwidth: screenwidth, screenheight: screenheight, username: username, userid: userid, channelno: channelno, channelname: channelname };
    //$.ajax({
    //    type: 'post',
    //    url: '/sitesata',
    //    data: data,
    //    seccess: function (data) {
    //        console.log(data);
    //    }
    //});
    var content = "prepageurl=" + prepageurl + "&pageurl=" + pageurl + "&screenwidth=" + screenwidth + "&screenheight=" + screenheight + "&username=" + username + "&userid=" + userid + "&channelno=" + channelno + "&channelname=" + channelname;
    var xhr = new XMLHttpRequest();

    xhr.open("post", "/sitesata/index");
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(content);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log(data);
        }
    }
}
