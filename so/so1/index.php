<?php
//禁用错误报告
error_reporting(0);
$t=htmlspecialchars($_POST["t"]);
$q=htmlspecialchars($_POST["q"]);
if ($q==""||$q==null) {
}else{
  if ($t=="b"){
    echo'<script>window.open("//www.baidu.com/s?ie=utf-8&word='.$q.'%20-baijiahao","_blank");</script>';
  }else if($t=="g"){
    echo'<script>window.open("https://www.google.com/search?hl=zh&q='.$q.'","_blank");</script>';
  }else{
    //默认谷歌
    echo'<script>window.open("https://www.google.com/search?hl=zh&q='.$q.'","_blank");</script>';
  }
};
?>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="Cache-Control" content="no-siteapp">
  
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-touch-fullscreen" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black">
  <meta name="full-screen" content="yes"><!--UC强制全屏-->
  <meta name="browsermode" content="application"><!--UC应用模式-->
  <meta name="x5-fullscreen" content="true"><!--QQ强制全屏-->
  <meta name="x5-page-mode" content="app"><!--QQ应用模式-->
  <title>简单搜索</title>
  <link href="style.css?t=<?php echo date("ymdhi"); ?>" rel="stylesheet">
  <link rel="stylesheet" href="//at.alicdn.com/t/font_1230786_gdvd1b4wlz.css">
   <link rel="stylesheet" href="//at.alicdn.com/t/c/font_4879677_qsmgbxy4d8b.css">
  <script src="https://cdnjs.loli.net/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="sou.js?t=<?php echo date("ymdhi"); ?>"></script>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /> 
  <title>AI聚合，聚搜天下！</title> 
  <meta name="keywords" content="简单搜索,聚合搜索,元搜索引擎,磁力搜索网站,BT搜索网站" /> 
  <meta name="description" content="简单搜索，一个高效聚合搜索工具。聚合百度、搜狗、Google、必应等上百个搜索引擎。一键资源搜索、磁力搜索、图片搜索，视频搜索、学术搜索。简单搜索-搜索更加简单！资源达人、工作必备利器！" /> 
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.5" /> 
  <link rel="stylesheet" type="text/css" href="css/style-min.css?20210917" /> 
  <link rel="stylesheet" type="text/css" href="css/font-awesome.min.css" /> 
  <link rel="shortcut icon" href="images/favicon.ico" /> 
  <link rel="ico" href="images/favicon.ico" />
     <link rel="stylesheet" href="css/Fontcss.css" />
</head>

<style type="text/css">
    :root {
      --hue: 220; /* 基础色相值，将由JavaScript随机设置 */
      --saturation: 70%; /* 固定饱和度 */
    }

    body {
      margin: 0;
      padding: 0;
      height: 100vh;
      animation: colorFlow 8s ease-in-out infinite;
      background-color: hsl(var(--hue), var(--saturation), 50%);
    }

    @keyframes colorFlow {
      0% {
        background-color: hsl(var(--hue), var(--saturation), 90%);
      }
      50% {
        background-color: hsl(var(--hue), var(--saturation), 20%);
      }
      100% {
        background-color: hsl(var(--hue), var(--saturation), 90%);
      }
    }
</style>

<script>
    // 随机生成色相值（0-360度）
    document.documentElement.style.setProperty('--hue', Math.floor(Math.random() * 360));
    
    // 可选：每30秒随机更换一次色系（按需开启）
    /*
    setInterval(() => {
        document.documentElement.style.setProperty('--hue', Math.floor(Math.random() * 360));
    }, 30000);
    */
</script>
 

<body>
      <div id="menu" style="color: white;"><i></i>More</div>
    <div class="list closed">
        <ul>
          <!------>
            <li class="title"><i class="iconfont icon-youxiang"></i> 邮箱</li>
            <li><a rel="nofollow" href="https://mail.google.com/mail/u/0/#inbox" target="_blank"><i class="iconfont icon-gmail" style="color: #f03;"></i>Gmail</a></li>
            <li><a rel="nofollow" href="https://outlook.live.com/mail/" target="_blank"><i class="iconfont icon-windows" style="color: #059;"></i>Hotmail</a></li>
            <li><a rel="nofollow" href="https://mail.163.com/" target="_blank"><i class="iconfont icon-wangyi" style="color: #169;"></i>网易邮箱</a></li>
            <li><a rel="nofollow" href="https://mail.sina.com.cn/" target="_blank"><i class="iconfont icon-xinlang" style="color: #e6162d;"></i>新浪邮箱</a></li>
            <li><a rel="nofollow" href="https://mail.qq.com/" target="_blank"><i class="iconfont icon-QQ" style="color: #f05;"></i>QQ邮箱</a></li>
            <li><a rel="nofollow" href="https://qiye.aliyun.com/" target="_blank"><i class="iconfont icon-yunyouxiang" style="color: #f15534;"></i>阿里邮箱</a></li>

          <!------>
            <li class="title"><i class="iconfont icon-msg"></i> 社交</li>
            <li><a rel="nofollow" href="https://www.weibo.com" target="_blank"><i class="iconfont icon-weibo" style="color: #e6162d;"></i>微博</a></li>
            <li><a rel="nofollow" href="https://www.zhihu.com/" target="_blank"><i class="iconfont icon-zhihu" style="color: #0084ff;"></i>知乎</a></li>
            <li><a rel="nofollow" href="https://www.douban.com/" target="_blank"><i class="iconfont icon-douban" style="color: #072;"></i>豆瓣</a></li>
            <li><a rel="nofollow" href="https://www.instagram.com" target="_blank"><i class="iconfont icon-instagram" style="color: #93009f;"></i>Instagram</a></li>
            <li><a rel="nofollow" href="https://www.twitter.com" target="_blank"><i class="iconfont icon-twitter" style="color: #00bcff;"></i>Twitter</a></li>
            <li><a rel="nofollow" href="https://www.facebook.com" target="_blank"><i class="iconfont icon-facebook" style="color: #4267b2;"></i>Facebook</a></li>
          <!------>
            <li class="title"><i class="iconfont icon-shipin"></i> 视频媒体</li>
            <li><a rel="nofollow" href="https://www.youtube.com/" target="_blank"><i class="iconfont icon-youtube" style="color:#f03;"></i>Youtube</a></li>
            <li><a rel="nofollow" href="https://v.qq.com/" target="_blank"><i class="iconfont icon-tengxunshipin" style="color:#2a0;"></i>腾讯视频</a></li>
            <li><a rel="nofollow" href="https://www.youku.com/" target="_blank"><i class="iconfont icon-youku" style="color:#09e;"></i>优酷</a></li>
            <li><a rel="nofollow" href="https://www.iqiyi.com/" target="_blank"><i class="iconfont icon-aiqiyi" style="color:#1d0;"></i>爱奇艺</a></li>
            <li><a rel="nofollow" href="http://www.zmz2019.com/" target="_blank"><i class="iconfont icon-zimu" style="color: #067;"></i>字幕组</a></li>
            <li><a rel="nofollow" href="http://www.acfun.cn/index.html" target="_blank"><i class="iconfont icon-acfun" style="color:#f33;"></i>ACFUN</a></li>
            <li><a rel="nofollow" href="https://www.bilibili.com/" target="_blank"><i class="iconfont icon-bili" style="color:#09e;"></i>哔哩哔哩</a></li>
            <li><a rel="nofollow" href="/movies/" target="_blank"><i class="iconfont icon-yunbo" style="color:#0bf;"></i>影视搜索</a></li>
            <li><a rel="nofollow" href="/tv/" target="_blank"><i class="iconfont icon-dianshi" style="color:#9ae;"></i>直播电视</a></li>
            <li><a rel="nofollow" href="https://music.yyv.me/" target="_blank"><i class="iconfont icon-yinle" style="color:#f4a;"></i>音乐解析</a></li>
          <!------>
            <li class="title"><i class="iconfont icon-gouwuche"></i> 购物</li>
            <li><a rel="nofollow" href="https://www.taobao.com" target="_blank"><i class="iconfont icon-taobao" style="color: #ff6019;"></i>淘宝网</a></li>
            <li><a rel="nofollow" href="https://dyartstyle.com/juhuasuan/" target="_blank"><i class="iconfont icon-juhuasuan" style="color: #E61414;"></i>聚划算</a></li>
            <li><a rel="nofollow" href="https://dyartstyle.com/temai/" target="_blank"><i class="iconfont icon-temai" style="color: #ff6019;"></i>淘宝特卖</a></li>
            <li><a rel="nofollow" href="https://mobile.yangkeduo.com/duo_cms_mall.html?pid=8742514_71211367&cpsSign=CM_190605_8742514_71211367_92fdd9f7fb637fec599bf556f263ed1f&duoduo_type=2&launch_wx=1" title="拼多多手机端专属商城，超低价商品火热抢购中，更有超多大额优惠券持续发放，一键立抢>>" target="_blank"><i class="iconfont icon-99" style="color: #f83e3e;"></i>拼多多</a></li>
            <li><a rel="nofollow" href="https://www.jd.com" target="_blank"><i class="iconfont icon-jingdong" style="color: #e33333;"></i>京东</a></li>
            <li><a rel="nofollow" href="https://www.suning.com/" target="_blank"><i class="iconfont icon-suning" style="color: #f90;"></i>苏宁易购</a></li>
            <li><a rel="nofollow" href="http://you.163.com/" target="_blank"><i class="iconfont icon-yanxuan" style="color: #B4A078;"></i>网易严选</a></li>
            <li><a rel="nofollow" href="https://www.amazon.cn/" target="_blank"><i class="iconfont icon-amazon" style="color: #fc9b18;"></i>亚马逊</a></li>
            <li><a rel="nofollow" href="http://www.dangdang.com/" target="_blank"><i class="iconfont icon-dangdang" style="color: #ff2832;"></i>当当</a></li>
            <li><a rel="nofollow" href="https://wat.dyartstyle.com/" target="_blank"><i class="iconfont icon-wat" style="color: #fe2e52;"></i>吾爱淘</a></li>
          <!------>
            <li class="title"><i class="iconfont icon-sheji"></i> 设计视觉</li>
            <li><a rel="nofollow" href="https://hao.shejidaren.com/" target="_blank"><i class="iconfont icon-daohang1"></i>设计导航</a></li>
            <li><a rel="nofollow" href="https://www.pinterest.com/" target="_blank"><i class="iconfont icon-pinterest" style="color:#e02;"></i>Pinterest</a></li>
            <li><a rel="nofollow" href="https://www.behance.net/" target="_blank"><i class="iconfont icon-behance" style="color:#56f;"></i>Behance</a></li>
            <li><a rel="nofollow" href="https://www.dribbble.com/" target="_blank"><i class="iconfont icon-dribbble" style="color:#e48;"></i>Dribbble</a></li>
            <li><a rel="nofollow" href="https://huaban.com/" target="_blank"><i class="iconfont icon-huaban" style="color:#f06;"></i>花瓣</a></li>
            <li><a rel="nofollow" href="https://www.zcool.com.cn/" target="_blank"><i class="iconfont icon-zhanku" style="color:#f90;"></i>站酷</a></li>
            <li><a rel="nofollow" href="https://www.iconfont.cn/" target="_blank"><i class="iconfont icon-iconfont" style="color: #ff6019;"></i>阿里图标</a></li>
            <li><a rel="nofollow" href="https://www.iconfinder.com/" target="_blank"><i class="iconfont icon-eye"></i>IconFinder</a></li>
            <li><a rel="nofollow" href="https://uiiiuiii.com/" target="_blank"><i class="iconfont icon-jiaocheng" style="color:#0aa;"></i>优设教程</a></li>
            <li><a rel="nofollow" href="https://colorhunt.co/" target="_blank"><i class="iconfont icon-colorhunt" style="color:#f79bc8;"></i>Color Hunt</a></li>
               <li><a rel="nofollow" href="https://www.zhongguose.com/" target="_blank"><i class="iconfont icon-yinghua" style="color:#ed3321;"></i>中国色</a></li>
            <!------>
            <li class="title"><i class="iconfont icon-ai-tool"></i> 工具</li>
            <li><a rel="nofollow" href="/ip/" target="_blank"><i class="iconfont icon-wangluo" style="color: #02f;"></i>IP查询</a></li>
            <li><a rel="nofollow" href="https://translate.google.cn/?hl=zh-CN" target="_blank"><i class="iconfont icon-fanyi" style="color: #02f;"></i>谷歌翻译</a></li>
            <li><a rel="nofollow" href="http://www.slimego.cn/" target="_blank"><i class="iconfont icon-shilaimu" style="color: #0f89c2;"></i>史莱姆</a></li>
            <li><a rel="nofollow" href="https://gugeji.com/" target="_blank"><i class="iconfont icon-google" style="color:#4285f4"></i>镜像</a></li>
            <li><a rel="nofollow" href="https://feedly.com" target="_blank"><i class="iconfont icon-feedly" style="color: #11dd00;"></i>Feedly</a></li>         
            <li><a rel="nofollow" href="https://pan.baidu.com" target="_blank"><i class="iconfont icon-baiduyun" style="color: #148bfe;"></i>百度网盘</a></li>
            <li><a rel="nofollow" href="https://www.baiduwp.com" target="_blank"><i class="iconfont icon-cloud-download" style="color: #148bfe;"></i>网盘解析</a></li>
            <li><a rel="nofollow" href="https://www.mdeditor.com/" target="_blank"><i class="iconfont icon-md" style="color:#09f;"></i>MD编辑器</a></li>
            <li><a rel="nofollow" href="https://miku.tools/" target="_blank"><i class="iconfont icon-ai-tool"></i>Miku工具</a></li>
            <li><a rel="nofollow" href="http://cubic-bezier.com" target="_blank"><i class="iconfont icon-quxian" style="color: #f08;"></i>贝赛尔曲线</a></li>
            <li><a rel="nofollow" href="/base64/" target="_blank"><i class="iconfont icon-base64" style="color:#1d0;"></i>Base64</a></li>
            <li><a rel="nofollow" href="https://javascriptobfuscator.com/Javascript-Obfuscator.aspx" target="_blank"><i class="iconfont icon-jshunxiao" style="color: #48c;"></i>JS混淆器</a></li>
            <li><a rel="nofollow" href="https://ping.pe" target="_blank"><i class="iconfont icon-wangluo1" style="color:#1d0;"></i>Ping.pe</a></li>
            <li><a rel="nofollow" href="https://ping.chinaz.com/" target="_blank"><i class="iconfont icon-pingup" style="color:#2361ad;"></i>站长Ping</a></li>
            <li><a rel="nofollow" href="https://apkdl.in/" target="_blank"><i class="iconfont icon-anzhuo" style="color:#094;"></i>APK下载</a></li>
            <!------>
            <li class="title"><i class="iconfont icon-kongzhitai"></i> 开发</li>
            
            <li><a rel="nofollow" href="https://github.com/" target="_blank"><i class="iconfont icon-github"></i>Github</a></li>
            <li><a rel="nofollow" href="https://codepen.io/" target="_blank"><i class="iconfont icon-codepen"></i>Codepen</a></li>
            <li><a rel="nofollow" href="https://www.52pojie.cn/" target="_blank"><i class="iconfont icon-theater-masks" style="color:#f03;"></i>吾爱破解</a></li>
            <li><a rel="nofollow" href="https://segmentfault.com/" target="_blank"><i class="iconfont icon-msg" style="color:#096;"></i>SF思否</a></li>
            <li><a rel="nofollow" href="https://cdnjs.com/" target="_blank"><i class="iconfont icon-cdnjs" style="color: #e52;"></i>CdnJs</a></li>
            <li><a rel="nofollow" href="https://fontawesome.com/icons?d=gallery&m=free" target="_blank"><i class="iconfont icon-font-awesome" style="color: #4af;"></i>Font A.</a></li>
            <li><a rel="nofollow" href="https://msdn.itellyou.cn/" target="_blank"><i class="iconfont icon-windows" style="color: #48c;"></i>MSDN下载</a></li>
            <li><a rel="nofollow" href="https://dash.cloudflare.com/" target="_blank"><i class="iconfont icon-cloudflare" style="color: #f37f20;"></i>C. flare</a></li>
            <li><a rel="nofollow" href="https://www.swiper.com.cn/" target="_blank"><i class="iconfont icon-S" style="color:#065fe3;"></i>Swiper</a></li>
        </ul>
    </div>
    <div id="tp-weather-widget" class="mywth"></div>
  <script>
    (function(a,h,g,f,e,d,c,b){b=function(){d=h.createElement(g);c=h.getElementsByTagName(g)[0];d.src=e;d.charset="utf-8";d.async=1;c.parentNode.insertBefore(d,c)};a["SeniverseWeatherWidgetObject"]=f;a[f]||(a[f]=function(){(a[f].q=a[f].q||[]).push(arguments)});a[f].l=+new Date();if(a.attachEvent){a.attachEvent("onload",b)}else{a.addEventListener("load",b,false)}}(window,document,"script","SeniverseWeatherWidget","//cdn.sencdn.com/widget2/static/js/bundle.js?t="+parseInt((new Date().getTime() / 100000000).toString(),10)));
    window.SeniverseWeatherWidget('show', {
      flavor: "slim",
      location: "WX4FBXXFKE4F",
      geolocation: true,
      language: "zh-Hans",
      unit: "c",
      theme: "auto",
      token: "fd08684d-bf66-4982-999d-4d0f260c236d",
      hover: "enabled",
      container: "tp-weather-widget"
    })
  </script>
  <body class="mobile "> 
  <div class="header clearfix"> 
   <div class="mywth" id="tp-weather-widget">
     
   </div> 
   <div class="main"> 
    <div class="right-side"> 
     <div class=""> 
      <div class="box-main"> 
      <h6>
       <div  class="shlogo">  </div> 
        聚合搜索</h6>
       <!-- Super Search --> 
       <div id="search" class="s-search"> 
        <div id="search-list" class="hide-type-list"> 
         <div class="s-type">
          <span></span> 
          <div class="s-type-list"> 
           <label for="type-baidu">常用</label> 
           <label for="type-pexels">图片</label> 
            <label for="type-freebiesbug">素材</label> 
           <label for="type-163">音乐</label> 
           <label for="type-cupfox">影视</label> 
           <label for="type-taobao">购物</label> 
           <label for="type-pc6">工具</label> 
           <label for="type-airbnb">旅游</label>
           <label for="type-douban">社区</label> 
           
          </div> 
         </div> 
         <div class="search-group group-a s-current"> 
          <span class="type-text">常用</span> 
          <ul class="search-type"> 
           <li> <input checked="" hidden="" type="radio" name="type" id="type-baidu" value="https://www.baidu.com/s?wd=" data-placeholder="百度一下" /> <label for="type-baidu"><span style="color:#2100E0">百度</span></label> </li> 
           <li> <input type="radio" hidden="" name="type" id="type-google" value="https://www.google-fix.com/search?q=" data-placeholder="谷歌搜索" /> <label for="type-google"><span style="color:#3B83FA">G</span><span style="color:#F3442C">o</span><span style="color:#FFC300">o</span><span style="color:#4696F8">g</span><span style="color:#2CAB4E">l</span><span style="color:#F54231">e</span></label> </li> 
           <li> <input hidden="" type="radio" name="type" id="type-bing" value="https://cn.bing.com/search?q=" data-placeholder="必应搜索" /> <label for="type-bing"><span style="color:#38a994">必应</span></label> </li> 
           <li> <input hidden="" type="radio" name="type" id="type-sogou" value="https://www.sogou.com/web?query=" data-placeholder="搜狗搜索" /> <label for="type-sogou"><span style="color:#ea4369">搜狗</span></label> </li> 
           <li> <input hidden="" type="radio" name="type" id="type-so" value="https://www.so.com/s?q=" data-placeholder="360搜索" /> <label for="type-so"><span style="color:#47c574">360</span></label> </li> 
           <li> <input hidden="" type="radio" name="type" id="type-zhihu" value="https://www.zhihu.com/search?type=content&amp;q=" data-placeholder="知乎搜索" /> <label for="type-zhihu"><span style="color:#4374ff">知乎</span></label> </li> 
           <li> <input hidden="" type="radio" name="type" id="weixin" value="https://weixin.sogou.com/weixin?type=2&query=" data-placeholder="微信搜索" /> <label for="weixin"><span style="color:#6bd06a">微信</span></label> </li> 
           <li> <input hidden="" type="radio" name="type" id="type-weibo" value="https://s.weibo.com/weibo/" data-placeholder="微博搜索" /> <label for="type-weibo"><span style="color:#ffac00">微博</span></label> </li> 
           <li> <input hidden="" type="radio" name="type" id="type-toutiao" value="https://so.toutiao.com/search?dvpf=pc&source=input&keyword=" data-placeholder="头条搜索" /> <label for="type-toutiao"><span style="color:#F04142">头条</span></label> </li> 
           <li> <input hidden="" type="radio" name="type" id="type-magi" value="https://magi.com/search?q=" data-placeholder="Magi搜索" /> <label for="type-magi"><span style="color:#14A2F5">Magi</span></label> </li> 
           <li><input hidden type="radio"name="type"id="type-dribbble"value="https://dribbble.com/search?q="data-placeholder="Dribbble search"><label for="type-dribbble"><span style="color:#EC4989">Dribbble</span></label></li>
           <li><input hidden type="radio"name="type"id="type-behance"value="https://www.behance.net/search?search="data-placeholder="Behance search"><label for="type-behance"><span style="color:#0055FF">Be</span></label></li>
<li><input hidden type="radio"name="type"id="type-easyicon"value="https://www.iconfont.cn/search/index?searchType=icon&q="data-placeholder="图标搜索 (支持中文)"><label for="type-easyicon"><span style="color:#383331">Icon</span></label></li>
<li><input hidden type="radio"name="type"id="type-huaban"value="https://huaban.com/search?q="data-placeholder="搜索花瓣网"><label for="type-huaban"><span style="color:#E35452">花瓣</span></label></li>
<li><input hidden type="radio"name="type"id="type-g"value="https://www.pinterest.com/search/pins/?q="data-placeholder="搜索 Pinterest"><label for="type-g"><span style="color:#bd081c">Pinterest</span></label></li><li><input hidden type="radio"name="type"id="type-freepik"value="http://www.freepik.com/index.php?goto=2&searchform=1&k="data-placeholder="freepik search"><label for="type-freepik"><span style="color:#448CD6">freepik</span></label></li>
<li><input hidden type="radio" name="type" id="type-zcool-web2" value="http://www.zcool.com.cn/search/content?&word=" data-placeholder="站酷"><label  for="type-zcool-web2"><span style="color:#ffac00">站酷</span></label></li>
           
          </ul> 
         </div> 
         <div class="search-group group-b">
          <span class="type-text">图片</span> 
          <ul class="search-type"> 
           <li> <input hidden="" type="radio" name="type" id="type-pexels" value="https://www.pexels.com/zh-tw/search/" data-placeholder="知名度最高的免版权免费图片网站(请用英文关键字搜索)" /> <label for="type-pexels"><span style="color:#05A081">Pexels</span></label> </li>
           <li> <input hidden="" type="radio" name="type" id="type-hellorf" value="http://www.hellorf.com/photo/search/all/" data-placeholder="海洛图库" /> <label for="type-hellorf"><span style="color:#262626">海洛图库</span></label> </li> 
           <li> <input hidden="" type="radio" name="type" id="type-baidu-images" value="http://image.baidu.com/search/index?tn=baiduimage&amp;ps=1&amp;ct=201326592&amp;lm=-1&amp;cl=2&amp;nc=1&amp;ie=utf-8&amp;word=" data-placeholder="百度图片搜索" /> <label for="type-baidu-images"><span style="color:#2100E0">百度</span></label> </li> 
           <li> <input hidden="" type="radio" name="type" id="type-google-images" value="https://www.google.com.hk/search?newwindow=1&amp;safe=strict&amp;biw=1542&amp;bih=956&amp;tbm=isch&amp;sa=1&amp;q=" data-placeholder="谷歌图片搜索" /> <label for="type-google-images"><span style="color:#3B83FA">G</span><span style="color:#F3442C">o</span><span style="color:#FFC300">o</span><span style="color:#4696F8">g</span><span style="color:#2CAB4E">l</span><span style="color:#F54231">e</span></label> </li> 
           <li> <input hidden="" type="radio" name="type" id="type-BING" value="http://cn.bing.com/images/search?q=" data-placeholder="BING图片搜索" /> <label for="type-BING"><span style="color:#00698F">Bing</span></label> </li> 
           <li> <input hidden="" type="radio" name="type" id="type-pixabay" value="https://pixabay.com/zh/images/search/" data-placeholder="Pixabay拥有超过2.4百万张优质图片和视频素材，免费正版高清图片素材库" /> <label for="type-pixabay"><span style="color:#40b3ec">Pixabay</span></label> </li> <li><input hidden type="radio"name="type"id="type-500px"value="https://500px.com/search?q="data-placeholder="500PX 品质摄影社区"><label for="type-500px"><span style="color:#40b3ec">500PX</span></label></li>
           <li> <input hidden="" type="radio" name="type" id="type-unsplash" value="https://unsplash.com/search/" data-placeholder="Unsplash 高清免版权图片" /> <label for="type-unsplash"><span style="color: #966">Unsplash</span></label> </li> 
           <li><input hidden type="radio" name="type" id="type-yandextupian" value="https://yandex.com/images/search?family=yes&text=" data-placeholder="俄罗斯Yandex图片搜索引擎(好多高清图、可以用中文)"><label for="type-yandextupian"><span style="color: #F90">Yandex图片</span></label></li>
           
           <li> <input hidden="" type="radio" name="type" id="type-wallpaper-sc" value="https://www.wallpaper.com/search?q=car" data-placeholder="请用英文搜索「Wallpaper」的壁纸内容" /> <label for="type-wallpaper-sc"><span style="color:#00585f">壁纸</span></label> </li> 
           
           </ul></div><div class="search-group group-c"><span class="type-text">素材</span><ul class="search-type">

<li><input hidden type="radio"name="type"id="type-freebiesbug"value="https://freebiesbug.com/?s="data-placeholder="搜索freebiesbug上的 UI 素材"><label for="type-freebiesbug"><span style="color:#313439">UI</span></label></li>

<li><input hidden type="radio"name="type"id="type-zcool"value="http://www.zcool.com.cn/tosearch.do?page=4&f=hb&world="data-placeholder="站酷素材"><label for="type-zcool"><span style="color:#ffac00">站酷素材</span></label></li>

<li><input hidden type="radio"name="type"id="type-nipic"value="http://soso.nipic.com/?q="data-placeholder="呢图"><label for="type-nipic"><span style="color:#00599e">呢图</span></label></li>

<li><input hidden type="radio"name="type"id="type-iconfont"value="https://www.iconfont.cn/search/index?searchType=icon&q=" data-placeholder="阿里巴巴矢量图标库"><label for="type-iconfont"><span style="color: #6666FF">Iconfont</span></label></li>

<li><input hidden type="radio"name="type"id="type-thenounproject"value="https://thenounproject.com/search/?q="data-placeholder="Noun Project 优质图标库"><label for="type-thenounproject"><span style="color: #CC9900">Noun Project</span></label></li>

<li><input hidden type="radio"name="type"id="type-officeplus"value="http://www.officeplus.cn/List.shtml?cat="data-placeholder="Office Plus"><label for="type-officeplus"><span style="color:#e53d10">PPT</span></label></li>

<li><input hidden type="radio"name="type"id="type-soogif"value="http://soogif.com/search/1/"data-placeholder="Gif"><label for="type-soogif"><span style="color:#00585f">Gif</span></label></li>
<li><input hidden type="radio"name="type"id="type-CSSWINNER"value="https://huaban.com/search?q="data-placeholder="花瓣灵感"><label for="type-CSSWINNER"><span style="color:#e45151">花瓣网</span></label></li>

<li><input hidden type="radio"name="type"id="type-ui-cn"value="http://s.ui.cn/index.html?keywords="data-placeholder="UI中国"><label for="type-ui-cn"><span style="color:#3498db">UI中国</span></label></li>

<li><input hidden type="radio"name="type"id="type-68Design"value="http://www.68design.net/work/?k="data-placeholder="68Design网页设计联盟"><label for="type-68Design"><span style="color: #F39">68Design</span></label></li>

<li><input hidden type="radio"name="type"id="type-uisdc"value="http://so.uisdc.com/cse/search?s=16162430669563244173&q="data-placeholder="优设网"><label for="type-uisdc"><span style="color: #33F">优设</span></label></li>

<li><input hidden type="radio"name="type"id="type-abduzeedo"value="http://abduzeedo.com/search/node?keys="data-placeholder="abduzeedo"><label for="type-abduzeedo"><span style="color: #6CF">abduzeedo</span></label></li>

<li><input hidden type="radio"name="type"id="type-niice"value="https://niice.co/search/"data-placeholder="niice灵感分享站"><label for="type-niice"><span style="color: #63F">niice</span></label></li>           
          </ul> 
         </div> 
         <div class="search-group group-e">
          <span class="type-text">音乐</span> 
          <ul class="search-type"> 
           <li> <input hidden="" type="radio" name="type" id="type-163" value="http://music.163.com/#/search/m/?s=" data-placeholder="网易云音乐" /> <label for="type-163"><span style="color:#c70c0c">云音乐</span></label> </li> 
           <li> <input hidden="" type="radio" name="type" id="type-kugou" value="https://www.kugou.com/yy/html/search.html#searchType=song&searchKeyWord=" data-placeholder="酷狗音乐" /> <label for="type-kugou"><span style="color:#e96b00">酷狗</span></label> </li> 
           <li> <input hidden="" type="radio" name="type" id="type-baidu-music" value="http://music.baidu.com/search?key=" data-placeholder="百度音乐" /> <label for="type-baidu-music"><span style="color:#2100E0">百度音乐</span></label> </li> 
           <li> <input hidden="" type="radio" name="type" id="type-qq-music" value="https://y.qq.com/portal/search.html#searchid=1&amp;remoteplace=txt.yqq.top&amp;t=song&amp;w=" data-placeholder="QQ音乐" /> <label for="type-qq-music"><span style="color:#2eb674">QQ音乐</span></label> </li> 
            <li> <input hidden="" type="radio" name="type" id="type-kuwo" value="http://www.kuwo.cn/search/list?key=" data-placeholder="酷我音乐" /> <label for="type-kuwo"><span style="color:#FF7200">酷我</span></label> </li> 
           <li> <input hidden="" type="radio" name="type" id="type-ape8" value="http://ape8.cn/?s=" data-placeholder="ape8无损音乐" /> <label for="type-ape8"><span style="color:#999">无损音乐</span></label> </li> 
           <li> <input hidden="" type="radio" name="type" id="type-ximalaya" value="https://www.ximalaya.com/search/" data-placeholder="喜马拉雅: 有声小说,听小说,有声书,在线听书,电台FM" /> <label for="type-ximalaya"><span style="color:#FF6439">喜马拉雅</span></label> </li> 
           <li> <input hidden="" type="radio" name="type" id="type-spotify" value="http://www.qupu123.com/Search?keys=" data-placeholder="中国曲谱网" /> <label for="type-spotify"><span style="color:#D16060">曲谱</span></label> </li> 
          </ul> 
         </div> 
         <div class="search-group group-f">
          <span class="type-text">影视</span> 
          <ul class="search-type">
           <li> <input hidden="" type="radio" name="type" id="type-cupfox" value="https://www.cupfox.com/search?key=" data-placeholder="影视资源聚合搜索引擎" /> <label for="type-cupfox"><span style="color:#DB542F">茶杯狐</span></label> </li> 
           <li> <input hidden="" type="radio" name="type" id="type-gaoqing" value="https://www.piaohua.com/plus/search.php?kwtype=0&keyword=" data-placeholder="飘花电影网电影下载站" /> <label for="type-gaoqing"><span style="color:#587FC2">电影下载</span></label> </li> 
           <li> <input hidden="" type="radio" name="type" id="type-douyin" value="https://www.douyin.com/search/" data-placeholder="抖音视频" /> <label for="type-douyin"><span style="color:#88485C">抖音</span></label> </li> 
           <li> <input hidden="" type="radio" name="type" id="type-kuaishou" value="https://www.kuaishou.com/search/video?searchKey=" data-placeholder="快手视频" /> <label for="type-kuaishou"><span style="color:#FF3D13">快手</span></label> </li> 
        <li> <input hidden="" type="radio" name="type" id="type-bilibili" value="https://search.bilibili.com/all?keyword=" data-placeholder="B站搜索" /> <label for="type-bilibili"><span style="color:#448CD6">B站</span></label> </li>
           <li> <input hidden="" type="radio" name="type" id="type-360kan" value="https://so.360kan.com/index.php?kw=" data-placeholder="360影视" /> <label for="type-360kan"><span style="color:#1CB196">360影视</span></label> </li> 
           
           <li> <input hidden="" type="radio" name="type" id="type-cn163" value="http://cn163.net/?s=" data-placeholder="cn163天天美剧" /> <label for="type-cn163"><span style="color:#5E5D5B">天天美剧</span></label> </li> 
           <li> <input hidden="" type="radio" name="type" id="type-dmhy" value="https://www.soman.com/search.html?keyword=" data-placeholder="搜漫 一站式漫画搜索引擎" /> <label for="type-dmhy"><span style="color:#FF6100">搜漫画</span></label> </li> 
          </ul> 
         </div> 
         <div class="search-group group-g">
          <span class="type-text">购物</span> 
          <ul class="search-type"> 
           <li> <input hidden="" type="radio" name="type" id="type-taobao" value="https://s.taobao.com/search?q=" data-placeholder="淘宝" /> <label for="type-taobao"><span style="color:#ff4400">淘宝</span></label> </li> 
           <li> <input hidden="" type="radio" name="type" id="type-tmall" value="https://list.tmall.com/search_product.htm?q=" data-placeholder="天猫" /> <label for="type-tmall"><span style="color:#dd2727">天猫</span></label> </li> 
           <li> <input hidden="" type="radio" name="type" id="type-jd" value="https://search.jd.com/Search?keyword=" data-placeholder="京东" /> <label for="type-jd"><span style="color:#c91623">京东</span></label> </li> 
           <li> <input hidden="" type="radio" name="type" id="type-amazon" value="https://www.amazon.cn/s/ref=nb_sb_noss_1?__mk_zh_CN=亚马逊网站&amp;url=search-alias%3Daps&amp;field-keywords=" data-placeholder="亚马逊" /> <label for="type-amazon"><span style="color:#FF8C00">亚马逊</span></label> </li> 
           <li> <input hidden="" type="radio" name="type" id="type-amazonusa" value="https://www.amazon.com/s?k=" data-placeholder="亚马逊美国站" /> <label for="type-amazonusa"><span style="color:#262626">亚马逊美国</span></label> </li> 
           <li> <input hidden="" type="radio" name="type" id="type-pinduoduo" value="https://mobile.pinduoduo.com/search_result.html?search_key=" data-placeholder="拼多多" /> <label for="type-pinduoduo"><span style="color:#E12A1F">拼多多</span></label> </li> 
            <li> <input hidden="" type="radio" name="type" id="type-dangdang" value="http://search.dangdang.com/?key=" data-placeholder="当当" /> <label for="type-dangdang"><span style="color:#ff3228">当当</span></label> </li> 
           <li> <input hidden="" type="radio" name="type" id="type-meituan" value="http://cd.meituan.com/s/?w=" data-placeholder="美团" /> <label for="type-meituan"><span style="color:#35b7a9">美团</span></label> </li> 
           <li> <input hidden="" type="radio" name="type" id="type-ebay" value="http://www.ebay.com/sch/" data-placeholder="eBay" /> <label for="type-ebay"><span style="color:#e53238">e</span><span style="color:#0064d2">B</span><span style="color:#f5af02">a</span><span style="color:#86b817">y</span></label> </li> 
          </ul> 
         </div> 
         <div class="search-group group-h">
          <span class="type-text">旅游</span> 
          <ul class="search-type"> 
           <li> <input hidden="" type="radio" name="type" id="type-airbnb" value="https://www.airbnb.cn/s/" data-placeholder="Airbnb爱彼迎 - 全球民宿,公寓,短租" /> <label for="type-airbnb"><span style="color:#FF8299">爱彼迎</span></label> </li> 
           <li> <input hidden="" type="radio" name="type" id="type-chanyouji" value="https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&tn=baidu&wd=site%3Awww.xiaohongshu.com%20" data-placeholder="小红书" /> <label for="type-chanyouji"><span style="color:#262626">小红书</span></label> </li> 
           <li> <input hidden="" type="radio" name="type" id="type-qunar" value="http://travel.qunar.com/search/all/" data-placeholder="搜索「去哪儿」旅游攻略" /> <label for="type-qunar"><span style="color:#00a2ac">去哪儿</span></label> </li> 
           <li> <input hidden="" type="radio" name="type" id="type-dianping" value="http://www.dianping.com/search/keyword/1/0_" data-placeholder="大众点评" /> <label for="type-dianping"><span style="color:#fa9c20">大众点评</span></label> </li> 
           <li> <input hidden="" type="radio" name="type" id="type-tripadvisor" value="https://www.tripadvisor.com/Search?q=" data-placeholder="猫途鹰旅行社区" /> <label for="type-tripadvisor"><span style="color:#589442">猫途鹰</span></label> </li> 
           <li> <input hidden="" type="radio" name="type" id="type-qyer" value="http://search.qyer.com/index?wd=" data-placeholder="穷游" /> <label for="type-qyer"><span style="color:#07ae72">穷游</span></label> </li> 
           <li> <input hidden="" type="radio" name="type" id="type-mafengwo" value="https://www.mafengwo.cn/search/q.php?q=" data-placeholder="旅游攻略,自由行,自助游攻略,旅游社交分享网" /> <label for="type-mafengwo"><span style="color:#4abdcc">马蜂窝</span></label> </li> 
           <li> <input hidden="" type="radio" name="type" id="type-tuniu" value="https://s.tuniu.com/search_complex/whole-fz-0-" data-placeholder="途牛旅游网" /> <label for="type-tuniu"><span style="color:#F08300">途牛</span></label> </li> 
           <li> <input hidden="" type="radio" name="type" id="type-ditumap" value="https://map.baidu.com/search/" data-placeholder="百度地图" /> <label for="type-ditumap"><span style="color:#999">地图</span></label> </li> 
          </ul> 
         </div> 
          <div class="search-group group-j">
          <span class="type-text">工具</span> 
          <ul class="search-type"> 
           <li> <input hidden="" type="radio" name="type" id="type-pc6" value="http://s.pc6.com/?k=" data-placeholder="PC6软件下载站" /> <label for="type-pc6"><span style="color:#262626">软件</span></label> </li> 
           <li> <input hidden="" type="radio" name="type" id="type-AAA" value="http://clb6.co/s/" data-placeholder="最佳的资源搜索引擎 - 磁力宝" /> <label for="type-AAA"><span style="color:#262626"> BT下载</span></label> </li> 
           <li> <input hidden="" type="radio" name="type" id="type-ygyhg" value="https://www.pan131.com/yun/" data-placeholder="盘131百度云搜索引擎提供百度网盘资源搜索服务" /> <label for="type-ygyhg"><span style="color: #CC6699">网盘</span></label> </li>
           <li> <input hidden="" type="radio" name="type" id="type-cnzzla" value="http://top.cnzzla.com/index.php?mod=search&type=tags&query=" data-placeholder="站长啦网站搜索" /> <label for="type-cnzzla"><span style="color:#5CC151">网站搜索</span></label> </li> 
           <li> <input hidden="" type="radio" name="type" id="type-kuaidi100" value="https://m.kuaidi100.com/result.jsp?nu=" data-placeholder="请输入快递单号" /> <label for="type-kuaidi100"><span style="color:#262626">查快递</span></label> </li> 
          <li> <input hidden="" type="radio" name="type" id="type-g" value="https://zh.wikihow.com/wikiHowTo?search=" data-placeholder="搜索 wikihow" /> <label for="type-g"><span style="color:#6bd06a">wikihow</span></label> </li> 
           <li> <input hidden="" type="radio" name="type" id="type-translateA" value="https://translate.google.cn/#zh-CN/en/" data-placeholder="中 译 英（Google）" /> <label for="type-translateA"><span style="color: #FF6600">中-&gt;英</span></label> </li> 
           <li> <input hidden="" type="radio" name="type" id="type-translateB" value="https://fanyi.baidu.com/#en/zh/" data-placeholder="英 译 中（百度，支持整站翻译）" /> <label for="type-translateB"><span style="color: #993333">英-&gt;中</span></label> </li> 

           <li> <input hidden="" type="radio" name="type" id="type-youdao" value="http://www.youdao.com/w/" data-placeholder="请输入要翻译的单词或文字" /> <label for="type-youdao"><span style="color:#262626">有道</span></label> </li> 
          </ul> 
         </div> 
         <div class="search-group group-i">
          <span class="type-text">社区</span> 
          <ul class="search-type"> 
           <li> <input hidden="" type="radio" name="type" id="type-douban" value="https://www.douban.com/search?q=" data-placeholder="豆瓣" /> <label for="type-douban"><span style="color:#379b46">豆瓣</span></label> </li> 
           <li> <input hidden="" type="radio" name="type" id="type-weibo" value="http://s.weibo.com/weibo/" data-placeholder="微博" /> <label for="type-weibo"><span style="color:#e6162d">微博</span></label> </li> 
           <li> <input hidden="" type="radio" name="type" id="type-zhihu" value="http://zhihu.sogou.com/zhihu?query=" data-placeholder="知乎" /> <label for="type-zhihu"><span style="color:#0f89eb">知乎</span></label> </li> 
           <li> <input hidden="" type="radio" name="type" id="type-weixin" value="http://weixin.sogou.com/weixin?type=2&amp;query=" data-placeholder="微信" /> <label for="type-weixin"><span style="color:#76d140">微信</span></label> </li> 
           <li> <input hidden="" type="radio" name="type" id="type-baike" value="http://baike.baidu.com/item/" data-placeholder="百度百科" /> <label for="type-baike"><span style="color:#2100E0">百度百科</span></label> </li> 
           <li> <input hidden="" type="radio" name="type" id="type-medium" value="https://medium.com/search?q=" data-placeholder="Medium" /> <label for="type-medium"><span style="color:#262626">Medium</span></label> </li> 
           <li> <input hidden="" type="radio" name="type" id="type-twitter" value="https://twitter.com/search?q=" data-placeholder="Twitter" /> <label for="type-twitter"><span style="color:#1da1f2">Twitter</span></label> </li> 
           <li> <input hidden="" type="radio" name="type" id="type-facebook" value="https://www.facebook.com/search/top/?init=quick&amp;q=" data-placeholder="Facebook" /> <label for="type-facebook"><span style="color:#3b5998">Facebook</span></label> </li> 
          </ul> 
         </div>
        </div> 
        <form action="https://www.baidu.com/s?wd=" method="get" target="_blank" id="super-search-fm"> 
         <input type="text" id="search-text" placeholder="百度一下" style="outline:none" autofocus /> 
         <button type="submit"><i class="fa fa-search"></i></button> 
        </form> 
        <div class="set-check"> 
         <input type="checkbox" id="set-search-blank" class="bubble-3" checked="" required /> 
         <label for="set-search-blank" class="green">新窗口打开搜索结果</label> 
         <div class="box search-hot-text" id="box" style="display: none;"> 
          <ul></ul>
         </div> 
        </div> 
       </div> 
       <script type="text/javascript">
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('!2(){2 g(){h(),i(),j(),k()}2 h(){d.9=s()}2 i(){z a=4.8(\'A[B="7"][5="\'+p()+\'"]\');a&&(a.9=!0,l(a))}2 j(){v(u())}2 k(){w(t())}2 l(a){P(z b=0;b<e.O;b++)e[b].I.1c("s-M");a.F.F.F.I.V("s-M")}2 m(a,b){E.H.S("L"+a,b)}2 n(a){6 E.H.Y("L"+a)}2 o(a){f=a.3,v(u()),w(a.3.5),m("7",a.3.5),c.K(),l(a.3)}2 p(){z b=n("7");6 b||a[0].5}2 q(a){m("J",a.3.9?1:-1),x(a.3.9)}2 r(a){6 a.11(),""==c.5?(c.K(),!1):(w(t()+c.5),x(s()),s()?E.U(b.G,+T X):13.Z=b.G,10 0)}2 s(){z a=n("J");6 a?1==a:!0}2 t(){6 4.8(\'A[B="7"]:9\').5}2 u(){6 4.8(\'A[B="7"]:9\').W("14-N")}2 v(a){c.1e("N",a)}2 w(a){b.G=a}2 x(a){a?b.3="1a":b.16("3")}z y,a=4.R(\'A[B="7"]\'),b=4.8("#18-C-19"),c=4.8("#C-12"),d=4.8("#17-C-15"),e=4.R(".C-1b"),f=a[0];P(g(),y=0;y<a.O;y++)a[y].D("Q",o);d.D("Q",q),b.D("1d",r)}();',62,77,'||function|target|document|value|return|type|querySelector|checked||||||||||||||||||||||||||var|input|name|search|addEventListener|window|parentNode|action|localStorage|classList|newWindow|focus|superSearch|current|placeholder|length|for|change|querySelectorAll|setItem|new|open|add|getAttribute|Date|getItem|href|void|preventDefault|text|location|data|blank|removeAttribute|set|super|fm|_blank|group|remove|submit|setAttribute'.split('|'),0,{}))
</script> 
   

<div class="bd-share"> 
        <div class="share"> 
         <div class="bdsharebuttonbox" data-tag="share_1"> 
         </div> 
        </div> 
     
        <div class="slogan"> 
         <ul> 
          
          <li><span></span> 聚合搜索，聚搜天下！ <span></span></li> 

                  
                  
                <li><span></span> ©CopyRight 2024 Blueink All Rights Reserved. <span></span></li>  </ul> 
                  
        </div> 
</div> 
       <hr /> 
       <div class="site-footer text-center f12"> 
        <div class="row"> 
         <div class="col-md-4 foot-share"> 
         </div> 
         <div class="col-md-4 foot-col-3"> 
          <div> 
           <p class="pull-left" style="margin-right:15px"></p>
           <div class="pull-left"> 
            <h3 style="margin:13px 0;font-weight:normal;text-align:left;"></h3> 
            <p style="font-size:14px;text-align:left;"></p> 
          
  </div>
  <div style="display:none">

</div> 
</body>
</html>