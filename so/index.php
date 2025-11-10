<?php
error_reporting(0);
$t = isset($_POST["t"]) ? htmlspecialchars($_POST["t"]) : '';
$q = isset($_POST["q"]) ? htmlspecialchars($_POST["q"]) : '';
if ($q !== '' && $q !== null) {
    switch ($t) {
        case 'b':
            $target = '//www.baidu.com/s?ie=utf-8&word=' . $q . '%20-baijiahao';
            break;
        case 'g':
            $target = 'https://www.google.com/search?hl=zh&q=' . $q;
            break;
        default:
            $target = 'https://www.google.com/search?hl=zh&q=' . $q;
    }
    echo '<script>window.open("' . $target . '", "_blank");</script>';
}
?>
<!doctype html>
<html lang="zh-CN" data-theme="light">
<head>
<meta charset="UTF-8">
<title>AI聚合搜索 - 聚搜天下</title>
<meta name="keywords" content="简单搜索,聚合搜索,元搜索引擎,磁力搜索网站,BT搜索网站">
<meta name="description" content="简单搜索，一个高效聚合搜索工具。聚合百度、搜狗、Google、必应等上百个搜索引擎。">
<link rel="stylesheet" href="css/style_ai.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
</head>
<body>
<div class="bg-animation" id="bgAnimation"></div>

<div class="bg-animation" id="bgAnimation"></div>

<!-- 顶部右侧按钮 -->
<header class="top-bar">
  <div class="mode-toggle" id="modeToggle" title="日/夜切换">
    <i class="fas fa-sun"></i>
  </div>
</header>



<!-- Google 式居中容器 -->
<main class="google-center">
  <div class="logo-line">
    <img src="logo.png" alt="Logo" class="logo-img">
    <span class="logo-text">Ai 聚合搜索</span>
  </div>

<main class="main">
  <section class="search-section">

    <!-- 分类导航 -->
    <nav class="cat-nav">
      <button class="cat-btn active" data-cat="a">常用</button>
      <button class="cat-btn" data-cat="b">图片</button>
      <button class="cat-btn" data-cat="c">素材</button>
      <button class="cat-btn" data-cat="e">音乐</button>
      <button class="cat-btn" data-cat="f">影视</button>
      <button class="cat-btn" data-cat="g">购物</button>
      <button class="cat-btn" data-cat="j">工具</button>
      <button class="cat-btn" data-cat="h">旅游</button>
      <button class="cat-btn" data-cat="i">社区</button>
    </nav>

    <!-- 搜索框 -->
    <div class="search-box-container">
      <form action="https://www.baidu.com/s" method="get" target="_blank" id="super-search-fm">
        <div class="search-box">
          <input type="text" name="wd" id="search-text" class="search-input" placeholder="百度一下" autofocus>
          <button type="submit" class="search-button"><i class="fa fa-search"></i></button>
        </div>
      </form>
    </div>

    <!-- 横排引擎展示区 -->
    <div class="engine-row" id="engineRow"></div>

    <!-- 热词 -->
    <div class="search-hot-text" id="box" style="display:none;"><ul></ul></div>
  </section>
</main>

<!-- 右侧抽屉 -->
<div id="drawer" class="drawer">
  <div class="drawer-head">
    <span>更多导航</span>
    <i id="closeDrawer" class="iconfont icon-close"></i>
  </div>
  <div class="drawer-body">
    <!-- 邮箱 -->
    <div class="drawer-group">
      <h3><i class="iconfont icon-youxiang"></i>邮箱</h3>
      <ul>
        <li><a rel="nofollow" href="https://mail.google.com" target="_blank"><i class="iconfont icon-gmail" style="color:#f03;"></i>Gmail</a></li>
        <li><a rel="nofollow" href="https://outlook.live.com" target="_blank"><i class="iconfont icon-windows" style="color:#059;"></i>Hotmail</a></li>
        <li><a rel="nofollow" href="https://mail.163.com" target="_blank"><i class="iconfont icon-wangyi" style="color:#169;"></i>网易邮箱</a></li>
        <li><a rel="nofollow" href="https://mail.sina.com.cn" target="_blank"><i class="iconfont icon-xinlang" style="color:#e6162d;"></i>新浪邮箱</a></li>
        <li><a rel="nofollow" href="https://mail.qq.com" target="_blank"><i class="iconfont icon-QQ" style="color:#f05;"></i>QQ邮箱</a></li>
        <li><a rel="nofollow" href="https://qiye.aliyun.com" target="_blank"><i class="iconfont icon-yunyouxiang" style="color:#f15534;"></i>阿里邮箱</a></li>
      </ul>
    </div>

    <!-- 社交 -->
    <div class="drawer-group">
      <h3><i class="iconfont icon-msg"></i>社交</h3>
      <ul>
        <li><a rel="nofollow" href="https://www.weibo.com" target="_blank"><i class="iconfont icon-weibo" style="color:#e6162d;"></i>微博</a></li>
        <li><a rel="nofollow" href="https://www.zhihu.com" target="_blank"><i class="iconfont icon-zhihu" style="color:#0084ff;"></i>知乎</a></li>
        <li><a rel="nofollow" href="https://www.douban.com" target="_blank"><i class="iconfont icon-douban" style="color:#072;"></i>豆瓣</a></li>
        <li><a rel="nofollow" href="https://www.instagram.com" target="_blank"><i class="iconfont icon-instagram" style="color:#93009f;"></i>Instagram</a></li>
        <li><a rel="nofollow" href="https://twitter.com" target="_blank"><i class="iconfont icon-twitter" style="color:#00bcff;"></i>Twitter</a></li>
        <li><a rel="nofollow" href="https://www.facebook.com" target="_blank"><i class="iconfont icon-facebook" style="color:#4267b2;"></i>Facebook</a></li>
      </ul>
    </div>

    <!-- 视频媒体 -->
    <div class="drawer-group">
      <h3><i class="iconfont icon-shipin"></i>视频媒体</h3>
      <ul>
        <li><a rel="nofollow" href="https://www.youtube.com" target="_blank"><i class="iconfont icon-youtube" style="color:#f03;"></i>Youtube</a></li>
        <li><a rel="nofollow" href="https://v.qq.com" target="_blank"><i class="iconfont icon-tengxunshipin" style="color:#2a0;"></i>腾讯视频</a></li>
        <li><a rel="nofollow" href="https://www.youku.com" target="_blank"><i class="iconfont icon-youku" style="color:#09e;"></i>优酷</a></li>
        <li><a rel="nofollow" href="https://www.iqiyi.com" target="_blank"><i class="iconfont icon-aiqiyi" style="color:#1d0;"></i>爱奇艺</a></li>
        <li><a rel="nofollow" href="https://www.bilibili.com" target="_blank"><i class="iconfont icon-bili" style="color:#09e;"></i>哔哩哔哩</a></li>
      </ul>
    </div>

    <!-- 购物 -->
    <div class="drawer-group">
      <h3><i class="iconfont icon-gouwuche"></i>购物</h3>
      <ul>
        <li><a rel="nofollow" href="https://www.taobao.com" target="_blank"><i class="iconfont icon-taobao" style="color:#ff6019;"></i>淘宝网</a></li>
        <li><a rel="nofollow" href="https://www.jd.com" target="_blank"><i class="iconfont icon-jingdong" style="color:#e33333;"></i>京东</a></li>
        <li><a rel="nofollow" href="https://mobile.pinduoduo.com" target="_blank"><i class="iconfont icon-99" style="color:#f83e3e;"></i>拼多多</a></li>
      </ul>
    </div>

    <!-- 设计视觉 -->
    <div class="drawer-group">
      <h3><i class="iconfont icon-sheji"></i>设计视觉</h3>
      <ul>
        <li><a rel="nofollow" href="https://www.pinterest.com" target="_blank"><i class="iconfont icon-pinterest" style="color:#e02;"></i>Pinterest</a></li>
        <li><a rel="nofollow" href="https://www.behance.net" target="_blank"><i class="iconfont icon-behance" style="color:#56f;"></i>Behance</a></li>
        <li><a rel="nofollow" href="https://www.dribbble.com" target="_blank"><i class="iconfont icon-dribbble" style="color:#e48;"></i>Dribbble</a></li>
        <li><a rel="nofollow" href="https://huaban.com" target="_blank"><i class="iconfont icon-huaban" style="color:#f06;"></i>花瓣</a></li>
        <li><a rel="nofollow" href="https://www.zcool.com.cn" target="_blank"><i class="iconfont icon-zhanku" style="color:#f90;"></i>站酷</a></li>
      </ul>
    </div>

    <!-- 工具 -->
    <div class="drawer-group">
      <h3><i class="iconfont icon-ai-tool"></i>工具</h3>
      <ul>
        <li><a rel="nofollow" href="https://translate.google.cn" target="_blank"><i class="iconfont icon-fanyi" style="color:#02f;"></i>谷歌翻译</a></li>
        <li><a rel="nofollow" href="https://www.baiduwp.com" target="_blank"><i class="iconfont icon-cloud-download" style="color:#148bfe;"></i>网盘解析</a></li>
        <li><a rel="nofollow" href="https://ping.chinaz.com" target="_blank"><i class="iconfont icon-pingup" style="color:#2361ad;"></i>站长Ping</a></li>
      </ul>
    </div>

  </div><!-- /.drawer-body -->
</div><!-- /#drawer -->
<div id="drawerMask" class="drawer-mask"></div>

<div id="menu" style="color: white; cursor: pointer;"><i></i>More</div>

<footer class="footer">
  <p>&copy; 2024@Blueink  AI聚合搜索. All rights reserved.</p>
</footer>
<script src="js/mode.js"></script>
<script src="https://cdnjs.loli.net/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="js/sou_ai.js"></script>
</body>
</html>