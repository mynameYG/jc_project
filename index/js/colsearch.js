$(function () {
    var lionclick = true;
    var colSelect = {
        init: function () {
            var that = this;
            this.index = 0;
            this.selectAll = $(".selectType");
            this.selectAll.on("click", function (e) {//监听 下拉
                $(document).one("click", function () {
                    that.selectAll.removeClass("active");
                });
                that.selectCurrent = $(this);
                that.listenToggle();
                e.stopPropagation();
            });
            this.renderAll();
        },
        listenToggle: function () {//监听 下拉
            this.isshow = this.selectCurrent.hasClass("active");
            this.choseval = this.selectCurrent.find(".choseVal");
            if (this.isshow) {//隐藏
                this.selectCurrent.removeClass("active");
            } else {//显示
                this.selectCurrent.addClass("active");
                var innerul = this.selectCurrent.find("ul");
                var that = this;
                //if (lionclick) {
                    //lionclick = false;
                    innerul.one("click", "li", function () {//监听 下拉内容点击
                        that.listeninnerli(this);
                    });
                //}
            }
        },
        listeninnerli: function (obj) {//监听 下拉内容点击
            this.index = $(obj).index();
            this.renderChose(this.index);
            $(document).unbind("click");
        },
        renderChose: function (index) {
            this.val = $(this.selectCurrent.find("li")[index]).data("value");
            this.text = $(this.selectCurrent.find("li")[index]).data("text");
            this.choseval.html(this.text);
            this.choseval.data("value", this.val);
            this.choseval.val(this.val);
            this.selectCurrent.find("li").removeClass("active");
            $(this.selectCurrent.find("li")[index]).addClass("active");
        },
        renderAll: function () {
            this.selectAll.each(function (index, item) {
                $(item).find(".choseVal").html($($(item).find("ul .active")).data("text"));
                $(item).find(".choseVal").attr("data-value", $($(item).find("ul .active")).data("value"));
                $(item).find(".choseVal").val($($(item).find("ul .active")).data("value"));
                //$($(item).find("li")[0]).addClass("active");
            });
        }
    };
    colSelect.init();
});