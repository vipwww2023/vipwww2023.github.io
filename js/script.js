document.addEventListener('DOMContentLoaded', function () {
    const categories = document.querySelectorAll('.category');
    const iframe = document.getElementById('ai-frame');
    const lightModeBtn = document.getElementById('light-mode-btn');
    const darkModeBtn = document.getElementById('dark-mode-btn');
    const body = document.body;
    const toggleBtn = document.getElementById('toggle-sidebar');
    const sidebar = document.querySelector('.sidebar');

    // 导航栏收起/展开功能
    toggleBtn.addEventListener('click', function () {
        sidebar.classList.toggle('collapsed');
        // 切换按钮图标
        const icon = toggleBtn.querySelector('i');
        if (sidebar.classList.contains('collapsed')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-ellipsis-v'); // 纵向图标
        } else {
            icon.classList.remove('fa-ellipsis-v');
            icon.classList.add('fa-bars'); // 横向图标
        }
    });

    // 分类展开/收缩功能
    Array.from(categories).forEach(category => {
        const header = category.querySelector('.category-header');
        const sites = category.querySelector('.sites');

        if (header && sites) {
            header.addEventListener('click', () => {
                if (sites.style.display === 'block') {
                    sites.style.display = 'none';
                } else {
                    // 先关闭所有其他分类的网站列表
                    Array.from(categories).forEach(cat => {
                        const catSites = cat.querySelector('.sites');
                        if (catSites && catSites !== sites) {
                            catSites.style.display = 'none';
                        }
                    });
                    sites.style.display = 'block';
                }
            });
        }
    });

    // 点击网站名称时处理链接
    const links = document.querySelectorAll('.sites a');
    Array.from(links).forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const url = this.getAttribute('data-url');
            const useIframe = this.hasAttribute('data-iframe');

            if (useIframe && iframe) {
                iframe.setAttribute('src', url);
            } else {
                window.open(url, '_blank');
            }
        });
    });

    // 切换浅色模式
    if (lightModeBtn) {
        lightModeBtn.addEventListener('click', () => {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
        });
    }

    // 切换深色模式
    if (darkModeBtn) {
        darkModeBtn.addEventListener('click', () => {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
        });
    }
});

