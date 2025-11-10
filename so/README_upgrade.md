# AI风格升级说明

## 文件结构
- `index.html`        ← 新版主页（HTML结构与原PHP一致，仅样式与交互增强）
- `css/style_ai.css`  ← AI风格样式（玻璃态、霓虹光效、动效）
- `js/sou_ai.js`      ← 增强交互（聚焦、悬浮、切换动画）

## 使用方式
1. 将原有 `index.php` 备份为 `index_backup.php`
2. 将 `index.html` 重命名为 `index.php`（或保留HTML静态版本）
3. 将 `css/style_ai.css` 和 `js/sou_ai.js` 放入对应目录
4. 浏览器访问，即可看到AI风格界面

## 保留内容
- 所有搜索引擎（百度、Google、Bing、搜狗、360等）
- 所有分类（常用、图片、音乐、影视、购物、工具）
- 所有搜索跳转逻辑、表单结构、热词推荐
- 所有原有ID/Class命名（确保原有JS逻辑无需改动）

## 新增特性
- 玻璃态（Glassmorphism）搜索框
- 霓虹光效与悬浮动效
- 背景粒子动画
- 分类切换过渡动画
- 热词推荐悬浮高亮
- 搜索引擎图标悬浮放大
- 响应式移动端适配

## 回退方案
如需回退原版，只需：
1. 删除新版文件
2. 恢复备份的 `index_backup.php` 为 `index.php`
3. 删除 `css/style_ai.css` 和 `js/sou_ai.js`

## 兼容性
- 支持现代浏览器（Chrome、Edge、Firefox、Safari）
- 支持移动端（iOS Safari、Android Chrome）
- 不依赖任何第三方框架（纯HTML+CSS+JS）