/* ========= 粒子背景 ========= */
function createParticles() {
  const bg = document.getElementById('bgAnimation');
  for (let i = 0; i < 60; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.left = Math.random() * 100 + '%';
    p.style.animationDelay = Math.random() * 15 + 's';
    p.style.animationDuration = (Math.random() * 10 + 10) + 's';
    bg.appendChild(p);
  }
}

/* ========= 热词 ========= */
const searchInput = document.getElementById('search-text');
const hotBox      = document.getElementById('box');

searchInput.addEventListener('focus', function () {
  if (this.value.trim() === '') {
    hotBox.style.display = 'block';
    hotBox.querySelector('ul').innerHTML = `
      <li>AI人工智能</li><li>ChatGPT</li><li>深度学习</li>
      <li>搜索引擎优化</li><li>玻璃态设计</li>`;
  }
});
searchInput.addEventListener('blur', () => setTimeout(()=>hotBox.style.display='none',200));

hotBox.addEventListener('click', e => {
  if (e.target.tagName === 'LI') {
    searchInput.value = e.target.textContent;
    hotBox.style.display = 'none';
    document.getElementById('super-search-fm').submit();
  }
});

/* ========= 分类+横排引擎 ========= */
const catMap = {
  a:[ /* 常用 */
    {n:'百度',v:'https://www.baidu.com/s?wd=',c:'#2100E0',p:'百度一下'},
    {n:'Google',v:'https://www.google-fix.com/search?q=',c:'#3B83FA',p:'谷歌搜索'},
    {n:'必应',v:'https://cn.bing.com/search?q=',c:'#38a994',p:'必应搜索'},
    {n:'搜狗',v:'https://www.sogou.com/web?query=',c:'#ea4369',p:'搜狗搜索'},
    {n:'360',v:'https://www.so.com/s?q=',c:'#47c574',p:'360搜索'},
    {n:'知乎',v:'https://www.zhihu.com/search?type=content&q=',c:'#4374ff',p:'知乎搜索'},
    {n:'微信',v:'https://weixin.sogou.com/weixin?type=2&query=',c:'#6bd06a',p:'微信搜索'},
    {n:'微博',v:'https://s.weibo.com/weibo/',c:'#ffac00',p:'微博搜索'},
    {n:'头条',v:'https://so.toutiao.com/search?dvpf=pc&source=input&keyword=',c:'#F04142',p:'头条搜索'},
    {n:'Magi',v:'https://magi.com/search?q=',c:'#14A2F5',p:'Magi搜索'},
    {n:'Dribbble',v:'https://dribbble.com/search?q=',c:'#EC4989',p:'Dribbble search'},
    {n:'Be',v:'https://www.behance.net/search?search=',c:'#0055FF',p:'Behance search'},
    {n:'Icon',v:'https://www.iconfont.cn/search/index?searchType=icon&q=',c:'#383331',p:'图标搜索'},
    {n:'花瓣',v:'https://huaban.com/search?q=',c:'#E35452',p:'搜索花瓣网'},
    {n:'Pinterest',v:'https://www.pinterest.com/search/pins/?q=',c:'#bd081c',p:'搜索 Pinterest'},
    {n:'freepik',v:'http://www.freepik.com/index.php?goto=2&searchform=1&k=',c:'#448CD6',p:'freepik search'},
    {n:'站酷',v:'http://www.zcool.com.cn/search/content?&word=',c:'#ffac00',p:'站酷'}
  ],
  b:[ /* 图片 */  {n:'Pexels',v:'https://www.pexels.com/zh-tw/search/',c:'#05A081'},  {n:'百度图片',v:'http://image.baidu.com/search/index?tn=baiduimage&word=',c:'#2100E0'},  {n:'Google图片',v:'https://www.google.com.hk/search?tbm=isch&q=',c:'#3B83FA'},  {n:'Bing图片',v:'http://cn.bing.com/images/search?q=',c:'#00698F'},  {n:'Pixabay',v:'https://pixabay.com/zh/images/search/',c:'#40b3ec'},  {n:'Unsplash',v:'https://unsplash.com/search/',c:'#966'},  {n:'500PX',v:'https://500px.com/search?q=',c:'#40b3ec'},  {n:'Yandex图片',v:'https://yandex.com/images/search?text=',c:'#F90'} ],
  c:[ /* 素材 */  {n:'站酷素材',v:'http://www.zcool.com.cn/tosearch.do?page=4&f=hb&world=',c:'#ffac00'},  {n:'呢图',v:'http://soso.nipic.com/?q=',c:'#00599e'},  {n:'Iconfont',v:'https://www.iconfont.cn/search/index?searchType=icon&q=',c:'#6666FF'},  {n:'Noun Project',v:'https://thenounproject.com/search/?q=',c:'#CC9900'},  {n:'PPT',v:'http://www.officeplus.cn/List.shtml?cat=',c:'#e53d10'},  {n:'Gif',v:'http://soogif.com/search/1/',c:'#00585f'},  {n:'花瓣网',v:'https://huaban.com/search?q=',c:'#e45151'},  {n:'UI中国',v:'http://s.ui.cn/index.html?keywords=',c:'#3498db'} ],
  e:[ /* 音乐 */  {n:'网易云',v:'http://music.163.com/#/search/m/?s=',c:'#c70c0c'},  {n:'酷狗',v:'https://www.kugou.com/yy/html/search.html#searchType=song&searchKeyWord=',c:'#e96b00'},  {n:'QQ音乐',v:'https://y.qq.com/portal/search.html#searchid=1&remoteplace=txt.yqq.top&t=song&w=',c:'#2eb674'},  {n:'酷我',v:'http://www.kuwo.cn/search/list?key=',c:'#FF7200'},  {n:'喜马拉雅',v:'https://www.ximalaya.com/search/',c:'#FF6439'},  {n:'曲谱',v:'http://www.qupu123.com/Search?keys=',c:'#D16060'} ],
  f:[ /* 影视 */  {n:'茶杯狐',v:'https://www.cupfox.com/search?key=',c:'#DB542F'},  {n:'电影下载',v:'https://www.piaohua.com/plus/search.php?kwtype=0&keyword=',c:'#587FC2'},  {n:'B站',v:'https://search.bilibili.com/all?keyword=',c:'#448CD6'},  {n:'抖音',v:'https://www.douyin.com/search/',c:'#88485C'},  {n:'快手',v:'https://www.kuaishou.com/search/video?searchKey=',c:'#FF3D13'},  {n:'360影视',v:'https://so.360kan.com/index.php?kw=',c:'#1CB196'} ],
  g:[ /* 购物 */  {n:'淘宝',v:'https://s.taobao.com/search?q=',c:'#ff4400'},  {n:'天猫',v:'https://list.tmall.com/search_product.htm?q=',c:'#dd2727'},  {n:'京东',v:'https://search.jd.com/Search?keyword=',c:'#c91623'},  {n:'拼多多',v:'https://mobile.pinduoduo.com/search_result.html?search_key=',c:'#E12A1F'},  {n:'亚马逊',v:'https://www.amazon.cn/s/ref=nb_sb_noss_1?__mk_zh_CN=亚马逊网站&field-keywords=',c:'#FF8C00'},  {n:'eBay',v:'http://www.ebay.com/sch/',c:'#e53238'} ],
  j:[ /* 工具 */  {n:'软件',v:'http://s.pc6.com/?k=',c:'#262626'},  {n:'BT下载',v:'http://clb6.co/s/',c:'#262626'},  {n:'网盘',v:'https://www.pan131.com/yun/',c:'#CC6699'},  {n:'查快递',v:'https://m.kuaidi100.com/result.jsp?nu=',c:'#262626'},  {n:'wikihow',v:'https://zh.wikihow.com/wikiHowTo?search=',c:'#6bd06a'},  {n:'中→英',v:'https://translate.google.cn/#zh-CN/en/',c:'#FF6600'},  {n:'英→中',v:'https://fanyi.baidu.com/#en/zh/',c:'#993333'} ],
  h:[ /* 旅游 */  {n:'爱彼迎',v:'https://www.airbnb.cn/s/',c:'#FF8299'},  {n:'小红书',v:'https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&tn=baidu&wd=site%3Awww.xiaohongshu.com%20',c:'#262626'},  {n:'去哪儿',v:'http://travel.qunar.com/search/all/',c:'#00a2ac'},  {n:'大众点评',v:'http://www.dianping.com/search/keyword/1/0_',c:'#fa9c20'},  {n:'马蜂窝',v:'https://www.mafengwo.cn/search/q.php?q=',c:'#4abdcc'},  {n:'途牛',v:'https://s.tuniu.com/search_complex/whole-fz-0-',c:'#F08300'} ],
  i:[ /* 社区 */  {n:'豆瓣',v:'https://www.douban.com/search?q=',c:'#379b46'},  {n:'微博',v:'http://s.weibo.com/weibo/',c:'#e6162d'},  {n:'知乎',v:'http://zhihu.sogou.com/zhihu?query=',c:'#0f89eb'},  {n:'微信',v:'http://weixin.sogou.com/weixin?type=2&query=',c:'#76d140'},  {n:'百度百科',v:'http://baike.baidu.com/item/',c:'#2100E0'},  {n:'Twitter',v:'https://twitter.com/search?q=',c:'#1da1f2'},  {n:'Facebook',v:'https://www.facebook.com/search/top/?init=quick&q=',c:'#3b5998'} ]
};

const catNav   = document.querySelector('.cat-nav');
const engineRow= document.getElementById('engineRow');

renderCat('a');               // 首屏渲染“常用”

catNav.addEventListener('click', e => {
  if (!e.target.classList.contains('cat-btn')) return;
  document.querySelectorAll('.cat-btn').forEach(b=>b.classList.remove('active'));
  e.target.classList.add('active');
  renderCat(e.target.dataset.cat);
});

function renderCat(cat){
  const list = catMap[cat] || [];
  engineRow.innerHTML = list.map((it,idx)=>
    `<label style="color:${it.c}" data-url="${it.v}" data-placeholder="${it.p||it.n+'搜索'}">
       <input type="radio" name="engine" ${idx===0?'checked':''}>
       ${it.n}
     </label>`).join('');

  const firstLabel = engineRow.querySelector('label');
  if (firstLabel) {
    document.getElementById('super-search-fm').action = firstLabel.dataset.url;
    document.getElementById('search-text').placeholder = firstLabel.dataset.placeholder;
  }

  engineRow.onchange = () => {
    const chk = engineRow.querySelector('input:checked').parentElement;
    document.getElementById('super-search-fm').action = chk.dataset.url;
    document.getElementById('search-text').placeholder = chk.dataset.placeholder;
  };
}

/* ========= 初始化 ========= */
createParticles();

$(function(){
  var $drawer = $('#drawer');
  var $mask   = $('#drawerMask');
  var $menu   = $('#menu');          // 原「More」按钮
  var $close  = $('#closeDrawer');

  // 打开
  $menu.on('click', function(){
    $drawer.addClass('show');
    $mask.addClass('show');
  });

  // 关闭（点关闭图标或遮罩）
  $close.add($mask).on('click', function(){
    $drawer.removeClass('show');
    $mask.removeClass('show');
  });
});