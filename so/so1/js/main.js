/*

  Project: hurq;

  Project URL: http://so.jiandanw.com;

  Designer: jiandanw.com;

  News Style 20210922

*/
(
    function () {
    //当浏览器窗口被调整大小时触发
    window.onresize = function () {
        ShowHideElement("i-link-box", "linkList-item", 845);
    }
    window.onload = function () {
        ShowHideElement("i-link-box", "linkList-item", 845);
    }

    function ShowHideElement(Element1, Element2, Vaule) {
        var Person = document.getElementsByClassName(Element1);
        var BoxHeight = document.getElementsByClassName(Element2);
        var WindowHeight = window.innerHeight || document.body.clientHeight;
        //遍历获取到的元素
        for (var i = 6; i < Person.length; i++) {
            if (WindowHeight <= Vaule && deviceVal === "pc") {
                Person[i].style.display = "none";
                BoxHeight[0].style.marginTop = "5px";
            } else {
                Person[i].style.display = "block";
                BoxHeight[0].style.marginTop = "0px";
            }
        }
    }

    window.ShowHideElement = ShowHideElement;
}());

var now = -1;
var resLength = 0;
var listIndex = -1;
var hotList = 0;
var thisSearch = 'https://www.baidu.com/s?wd=';
var thisSearchIcon = './logo.jpg';
var storage = window.localStorage;
if (!storage.stopHot) {
    storage.stopHot = true
}
storage.stopHot == 'false'
    ? $('#hot-btn').attr(
        'style',
        'background: url(./img/hotg.svg) no-repeat center/cover;'
    )
    : $('#hot-btn').attr(
        'style',
        'background: url(./img/hotk.svg) no-repeat center/cover;'
    );
var ssData = storage.searchEngine;
if (storage.searchEngine != undefined) {
    ssData = ssData.split(',');
    thisSearch = ssData[0];
    $('#search-icon').attr('class', ssData[1])
    $('#search-icon').attr('style', ssData[2])
}

function getHotkeyword(value) {
    $.ajax({
        type: "GET",
        url: "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su",
        async: true,
        data: {
            wd: value
        },
        dataType: "jsonp",
        jsonp: "cb",
        success: function (res) {
            $("#box ul").text("");
            hotList = res.s.length;
            if (hotList) {
                $("#box").css("display", "block");
                for (var i = 0; i < hotList; i++) {
                    $("#box ul").append("<li><span>" + (
                        i + 1
                    ) + "</span>" + res.s[i] + "</li>");
                    $("#box ul li")
                        .eq(i)
                        .click(function () {
                            $('#search-text').val(this.childNodes[1].nodeValue);
                            window.open(thisSearch + this.childNodes[1].nodeValue);
                            $('#box').css('display', 'none')
                        });
                    if (i === 0) {
                        $("#box ul li")
                            .eq(i)
                            .css({"border-top": "none"});
                        $("#box ul span")
                            .eq(i)
                            .css({"color": "#fff", "background": "#f54545"})
                    } else {
                        if (i === 1) {
                            $("#box ul span")
                                .eq(i)
                                .css({"color": "#fff", "background": "#ff8547"})
                        } else {
                            if (i === 2) {
                                $("#box ul span")
                                    .eq(i)
                                    .css({"color": "#fff", "background": "#ffac38"})
                            }
                        }
                    }
                }
            } else {
                $("#box").css("display", "none")
            }
        },
        error: function (res) {
            console.log(res)
        }
    })
}

// 按键松开时执行
$("#search-text").keyup(function (e) {
    if ($(this).val()) {
        if (e.keyCode == 38 || e.keyCode == 40 || storage.stopHot != 'true') {
            return
        }
        $("#search-clear").css("display", "block");
        getHotkeyword($(this).val())
    } else {
        $("#search-clear").css("display", "none");
        $("#box").css("display", "none")
    }
});

$("#search-text").keydown(function (e) {
    if (e.keyCode === 40) {
        listIndex === (hotList - 1)
            ? listIndex = 0
            : listIndex++;
        $("#box ul li")
            .eq(listIndex)
            .addClass("current")
            .siblings()
            .removeClass("current");
        var hotValue = $("#box ul li")
            .eq(listIndex)[0]
            .childNodes[1]
            .nodeValue;
        $("#search-text").val(hotValue)
    }
    if (e.keyCode === 38) {
        if (e.preventDefault) {
            e.preventDefault()
        }
        if (e.returnValue) {
            e.returnValue = false
        }
        listIndex === 0 || listIndex === -1
            ? listIndex = (hotList - 1)
            : listIndex--;
        $("#box ul li")
            .eq(listIndex)
            .addClass("current")
            .siblings()
            .removeClass("current");
        var hotValue = $("#box ul li")
            .eq(listIndex)[0]
            .childNodes[1]
            .nodeValue;
        $("#search-text").val(hotValue)
    }
    if (e.keyCode === 13) {
        window.open(thisSearch + $("#search-text").val());
        $("#box").css("display", "none");
        $("#search-text").blur();
        $("#box ul li").removeClass("current");
        listIndex = -1
    }
});
$("#search-clear").click(function () {
    $('#search-text').val("");
    $('#search-clear').css('display', 'none');
    $("#box").css("display", "none");
});
$(".search-btn").click(function () {
    window.open(thisSearch + $("#search-text").val());
    $("#box").css("display", "none");
    $("#search-text").blur();
    $("#box ul li").removeClass("current");
    listIndex = -1
});
$("#search-text").focus(function () {
    $(".search-box").css("box-shadow", "0 4px 6px #0000001f");
    //$(".search-box").css("border", "1px solid #cecece");
    if ($(this).val() && storage.stopHot == 'true') {
        getHotkeyword($(this).val())
    }
});
$("#search-text").blur(function () {
    $(".search-box").css("box-shadow", "0 2px 3px #0000000f");
    //$(".search-box").css("border", "1px solid #00000026");
    setTimeout(function () {
        $("#box").css("display", "none")
    }, 400)
});

$(document).ready(function () {
    //菜单点击
    $("#menu").click(function (event) {
        $(this).toggleClass('on');
        $(".list").toggleClass('closed');
        $(".mywth").toggleClass('hidden');
    });
    $("#content").click(function (event) {
        $(".on").removeClass('on');
        $(".list").addClass('closed');
        $(".mywth").removeClass('hidden');
    });
});

	(function(a, h, g, f, e, d, c, b) {
				b = function() {
					d = h.createElement(g);
					c = h.getElementsByTagName(g)[0];
					d.src = e;
					d.charset = "utf-8";
					d.async = 1;
					c
						.parentNode
						.insertBefore(d, c)
				};
				a["SeniverseWeatherWidgetObject"] = f;
				a[f] || (a[f] = function() {
					(a[f].q = a[f].q || []).push(arguments)
				});
				a[f].l = +new Date();
				if (a.attachEvent) {
					a.attachEvent("onload", b)
				} else {
					a.addEventListener("load", b, false)
				}
			}(
				window,
				document,
				"script",
				"SeniverseWeatherWidget",
				"//cdn.sencdn.com/widget2/static/js/bundle.js?t=" + parseInt((new Date().getTime() / 100000000).toString(), 10)
			));
			window.SeniverseWeatherWidget('show', {
				flavor: "slim",
				location: "WX4FBXXFKE4F",
				geolocation: true,
				language: "auto",
				unit: "c",
				theme: "light",
				token: "9001d4ec-2be3-43fc-9a16-abf98f1deaf9",
				hover: "enabled",
				container: "tp-weather-widget"
			})
