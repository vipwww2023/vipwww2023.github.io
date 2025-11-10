// 1. 初始化鼠标跟随元素（新增）
function initMouseEffects() {
    // 创建鼠标跟随背景元素
    const mouseFollower = document.createElement('div');
    mouseFollower.id = 'mouse-follower';
    document.body.appendChild(mouseFollower);
    
    // 创建鼠标眩晕光效元素
    const mouseGlow = document.createElement('div');
    mouseGlow.className = 'mouse-glow';
    document.body.appendChild(mouseGlow);
    
    // 监听鼠标移动，更新跟随元素位置
    document.addEventListener('mousemove', function(e) {
        const follower = document.getElementById('mouse-follower');
        const glow = document.querySelector('.mouse-glow');
        
        // 鼠标跟随背景（延迟跟随，增强流动感）
        if (follower) {
            setTimeout(() => {
                follower.style.transform = `translate(${e.clientX - 150}px, ${e.clientY - 150}px)`;
            }, 30); // 30ms延迟，模拟惯性
        }
        
        // 鼠标眩晕光效（实时跟随）
        if (glow) {
            glow.style.transform = `translate(${e.clientX - 40}px, ${e.clientY - 40}px)`;
        }
    });
    
    // 监听鼠标悬停链接，激活眩晕光效
    const linkElements = document.querySelectorAll(
        '.sidebar-item, .region-filter, .site-card a, .region-filter, button'
    );
    
    linkElements.forEach(link => {
        // 鼠标进入链接，激活光效
        link.addEventListener('mouseenter', function() {
            const glow = document.querySelector('.mouse-glow');
            if (glow) glow.classList.add('active');
        });
        
        // 鼠标离开链接，关闭光效
        link.addEventListener('mouseleave', function() {
            const glow = document.querySelector('.mouse-glow');
            if (glow) glow.classList.remove('active');
        });
    });
}

// 2. 初始化粒子背景与页面功能（保留原逻辑，新增鼠标效果初始化）
window.onload = function() {
    // 初始化鼠标跟随与眩晕光效（新增）
    initMouseEffects();
    
    // 显示默认分类
    showCategory('language');
    
    // 初始化粒子效果（保留原配置）
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particle-bg', {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#6366f1"
                },
                "shape": {
                    "type": "circle"
                },
                "opacity": {
                    "value": 0.3,
                    "random": true
                },
                "size": {
                    "value": 3,
                    "random": true
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#6366f1",
                    "opacity": 0.2,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 1,
                    "direction": "none",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 140,
                        "line_linked": {
                            "opacity": 0.5
                        }
                    },
                    "push": {
                        "particles_nb": 4
                    }
                }
            },
            "retina_detect": true
        });
    }
};

// 3. 分类切换功能（保留原逻辑）
function showCategory(category) {
    document.querySelectorAll('.category-content').forEach(content => {
        content.classList.add('hidden');
        content.style.opacity = '0';
        content.style.transform = 'translateY(10px)';
    });
    
    const targetContent = document.getElementById(`${category}-content`);
    targetContent.classList.remove('hidden');
    setTimeout(() => {
        targetContent.style.opacity = '1';
        targetContent.style.transform = 'translateY(0)';
        targetContent.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    }, 50);
    
    document.querySelectorAll('.sidebar-item').forEach(item => {
        item.classList.remove('active');
    });
    document.querySelectorAll('.sidebar-item').forEach(item => {
        if (item.getAttribute('onclick').includes(category)) {
            item.classList.add('active');
        }
    });
}

// 4. 地区筛选功能（保留原逻辑）
function filterByRegion(region) {
    document.querySelectorAll('.region-filter').forEach(filter => {
        filter.classList.remove('active');
    });
    document.querySelectorAll('.region-filter').forEach(filter => {
        if (filter.getAttribute('onclick').includes(region)) {
            filter.classList.add('active');
        }
    });
    
    document.querySelectorAll('.site-card').forEach(card => {
        card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        card.style.opacity = '0.5';
        card.style.transform = 'scale(0.98)';
        
        setTimeout(() => {
            if (region === 'all' || card.getAttribute('data-region') === region) {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                }, 50);
            } else {
                card.style.display = 'none';
                card.style.opacity = '0';
                card.style.transform = 'scale(0.95)';
            }
        }, 150);
    });
}

// 5. 全局搜索功能（保留原逻辑）
function globalSearch() {
    const searchText = document.getElementById('globalSearch').value.toLowerCase().trim();
    document.querySelectorAll('.site-card').forEach(card => {
        const cardTitle = card.querySelector('h4').textContent.toLowerCase();
        const cardDesc = card.querySelector('p').textContent.toLowerCase();
        const isMatch = cardTitle.includes(searchText) || cardDesc.includes(searchText);
        
        card.style.transition = 'opacity 0.3s ease, box-shadow 0.3s ease';
        if (isMatch) {
            card.style.display = 'block';
            card.style.opacity = '1';
            if (searchText) {
                card.style.boxShadow = '0 0 15px rgba(99, 102, 241, 0.2)';
            } else {
                card.style.boxShadow = 'none';
            }
        } else {
            card.style.display = 'none';
            card.style.opacity = '0';
        }
    });
}

// 6. 窗口 resize 监听（保留原逻辑）
window.addEventListener('resize', function() {
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particle-bg').refresh();
    }
    // 调整鼠标跟随元素大小（适配窗口）
    const follower = document.getElementById('mouse-follower');
    if (follower) {
        const windowWidth = window.innerWidth;
        // 根据窗口宽度调整跟随元素大小
        const size = windowWidth > 768 ? 300 : 200;
        follower.style.width = `${size}px`;
        follower.style.height = `${size}px`;
        follower.style.transform = `translate(${windowWidth/2 - size/2}px, ${window.innerHeight/2 - size/2}px)`;
    }
});

// 7.搜索引擎聚合功能：切换搜索引擎
function switchSearchEngine(engine) {
    const select = document.getElementById('searchEngineSelect');
    // 根据引擎名称设置下拉框选中项
    for (let i = 0; i < select.options.length; i++) {
        if (select.options[i].value === engine) {
            select.selectedIndex = i;
            break;
        }
    }
}

// 搜索引擎聚合功能：执行搜索（跳转对应引擎搜索结果页）
document.addEventListener('DOMContentLoaded', function() {
    const searchBtn = document.getElementById('aggSearchBtn');
    const searchInput = document.getElementById('aggSearchInput');
    const searchSuggest = document.getElementById('searchSuggest');
    const searchEngineSelect = document.getElementById('searchEngineSelect');

    // 搜索按钮点击事件
    searchBtn.addEventListener('click', executeSearch);
    // 输入框回车事件
    searchInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') executeSearch();
    });

    // 输入框聚焦/失焦：显示/隐藏搜索建议
    searchInput.addEventListener('focus', function() {
        searchSuggest.classList.remove('hidden');
    });
    searchInput.addEventListener('blur', function() {
        setTimeout(() => {
            searchSuggest.classList.add('hidden');
        }, 200); // 延迟隐藏，避免点击建议时消失
    });

    // 搜索建议项点击：填充内容并搜索
    searchSuggest.querySelectorAll('div:not(:first-child)').forEach(item => {
        item.addEventListener('click', function() {
            searchInput.value = this.textContent;
            searchSuggest.classList.add('hidden');
            executeSearch();
        });
    });

    // 执行搜索逻辑：根据选中引擎跳转对应搜索页
    function executeSearch() {
        const keyword = searchInput.value.trim();
        if (!keyword) {
            alert('请输入搜索关键词');
            return;
        }
        // 各搜索引擎的搜索URL模板
        const engineUrls = {
            baidu: `https://www.baidu.com/s?wd=${encodeURIComponent(keyword)}+AI工具`,
            google: `https://www.google.com/search?q=${encodeURIComponent(keyword)}+AI工具`,
            bing: `https://www.bing.com/search?q=${encodeURIComponent(keyword)}+AI工具`,
            duckduckgo: `https://duckduckgo.com/?q=${encodeURIComponent(keyword)}+AI工具`,
            'ai专用': `https://ai.search.com/s?query=${encodeURIComponent(keyword)}` // 示例AI专用引擎，可替换为真实链接
        };
        // 获取选中的引擎并跳转
        const selectedEngine = searchEngineSelect.value;
        window.open(engineUrls[selectedEngine], '_blank');
    }
});


// 初始化随机水流动画
function initRandomFlowEffect() {
    const rippleContainer = document.querySelector('.ripple-container');
    if (!rippleContainer) return;
    
    // 创建随机波纹元素
    function createRipple() {
        const ripple = document.createElement('div');
        ripple.className = 'water-ripple';
        
        // 随机位置和大小
        const size = Math.random() * 100 + 50; // 50-150px
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        
        // 设置样式
        ripple.style.width = `${size}px`;
        ripple.style.height = `${size}px`;
        ripple.style.left = `${posX}%`;
        ripple.style.top = `${posY}%`;
        ripple.style.opacity = Math.random() * 0.3 + 0.1; // 0.1-0.4
        
        // 添加到容器
        rippleContainer.appendChild(ripple);
        
        // 动画结束后移除
        setTimeout(() => {
            ripple.remove();
        }, 5000);
    }
    
    // 定期创建随机波纹
    setInterval(createRipple, 800);
    
    // 初始创建几个波纹
    for (let i = 0; i < 3; i++) {
        setTimeout(createRipple, i * 300);
    }
}

// 在页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    // 保留原有初始化代码
    initMouseEffects();
    showCategory('language');
    
    // 初始化随机水流动画
    initRandomFlowEffect();
    
    // 保留其他初始化代码...
});

// 底部社交图标悬停效果
function initFooterSocialEffects() {
    const socialIcons = document.querySelectorAll('.social-icon');
    
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            // 创建涟漪效果
            const ripple = document.createElement('span');
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(255, 255, 255, 0.3)';
            ripple.style.width = '0';
            ripple.style.height = '0';
            ripple.style.top = '50%';
            ripple.style.left = '50%';
            ripple.style.transform = 'translate(-50%, -50%)';
            ripple.style.animation = 'rippleEffect 0.6s ease-out';
            
            // 添加相对定位
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            
            this.appendChild(ripple);
            
            // 动画结束后移除
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

// 添加涟漪动画
const style = document.createElement('style');
style.textContent = `
    @keyframes rippleEffect {
        0% {
            width: 0;
            height: 0;
            opacity: 0.5;
        }
        100% {
            width: 100px;
            height: 100px;
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// 在页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    // 保留原有初始化代码
    initMouseEffects();
    showCategory('language');
    initRandomFlowEffect();
    
    // 初始化底部社交图标效果
    initFooterSocialEffects();
    
    // 保留其他初始化代码...
});