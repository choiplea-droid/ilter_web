// 다국어 번역 (기본: 한국어)
const translations = {
    ko: {
        nav: { subtitle: '공유오피스', home: '홈', about: '소개', services: '업무공간', tenants: '입주업체', gallery: '갤러리', location: '위치', contact: '문의' },
        hero: { title: '초역세권 공유오피스', subtitle: '신촌역 6·7번 출구 도보 1분 거리\n당신의 창의력을 키워줄 공간', contactBtn: '문의하기', galleryBtn: '둘러보기' },
        about: { title: 'ILTER 소개', subtitle: '신촌역 초역세권에서 만나는 창의적인 비즈니스 공간', why: '왜 ILTER인가요?', desc: 'ILTER는 신촌역 6·7번 출구에서 도보 1분 거리의 초역세권 공유오피스입니다. 1·2·3·5인실부터 자유석·고정석까지 다양한 업무 공간을 제공하며, 창의적인 비즈니스 아이디어가 꽃피는 공간입니다.', wifiTitle: '고속 인터넷', wifiDesc: '안정적인 고속 인터넷 환경', spaceTitle: '공용공간', spaceDesc: '커피, 시리얼 제공\n정수기, 냉장고, 전자렌지', printTitle: '프린터', printDesc: '매월 정해진 양의\n프린터 이용 제공', studyTitle: '스터디 공간', studyDesc: '조용히 집중할 수 있는\n스터디·독서 환경' },
        services: { title: '업무 공간', subtitle: '1·2·3·5인실부터 자유석·고정석까지 다양한 옵션', officeTitle: '1·2·3·5인실', officeDesc: '팀 규모에 맞는 최적의 업무 공간', office1: '1인실·2인실·3인실·5인실', office2: '전용 책상과 의자', office3: '사물함(유료)', flexTitle: '자유석 & 고정석', flexDesc: '유연한 업무 스타일에 맞는 선택', flex1: '자유석: 유연한 좌석 선택', flex2: '고정석: 전용 좌석 보장', flex3: '24시간 출입 가능', meetingTitle: '미팅룸', meetingDesc: '프레젠테이션과 회의를 위한 전문 공간', meeting1: '대형 스마트 TV 및 화이트보드', meeting2: '자동 블라인드', meeting3: '6인석 (10인 사용 가능)' },
        tenants: { title: '입주 업체', subtitle: '다양한 분야의 전문가들이 함께하는 창의적인 공간', lawyer: '변호사 사무실', lawyerDesc: '전문적인 법률 서비스', realty: '부동산', realtyDesc: '부동산 중개 및 컨설팅', medical: '의학연구소', medicalDesc: '의학 연구 및 개발', consulting: '컨설팅 업체', consultingDesc: '비즈니스 컨설팅 서비스', youtube: '유튜버', youtubeDesc: '콘텐츠 제작 및 편집', startup: '스타트업', startupDesc: '혁신적인 비즈니스 모델' },
        gallery: { title: '갤러리', subtitle: 'ILTER의 아름다운 공간을 둘러보세요' },
        location: { title: '위치', subtitle: '신촌역 6·7번 출구에서 도보 1분 거리에 위치해 있습니다', name: 'ILTER 공유오피스', address: '서울시 마포구 백범로 8\n우정마샹스 상가 2층 101호', subway: '2호선 신촌역 6·7번 출구 도보 1분', kakao: '카카오톡 상담' },
        contact: { title: '문의하기', subtitle: 'ILTER에 대해 궁금한 점이 있으시면 언제든 연락주세요', addressLabel: '주소', address: '서울시 마포구 백범로 8\n우정마샹스 상가 2층 101호', phoneLabel: '전화', kakaoLabel: '카카오톡', kakaoDesc: '실시간 상담 가능', hoursLabel: '운영시간', hours: '연중무휴 24시간', question: '궁금한 점이 있으신가요?', questionDesc: '카카오톡으로 편리하게 문의하실 수 있습니다.', kakaoBtn: '카카오톡 상담하기', daangnBtn: '당근에서 새로운 소식을 만나보세요!' },
        footer: { tagline: '프리미엄 공유오피스로 여러분의 비즈니스를 성장시키세요.', services: '서비스', office: '개인 오피스', space: '공용 공간', meeting: '미팅룸', contact: '연락처', address: '서울시 마포구 백범로 8\n우정마샹스 상가 2층 101호' },
        floatingTalk: { label: '카톡 문의' }
    },
    en: {
        nav: { subtitle: 'Coworking', home: 'Home', about: 'About', services: 'Workspaces', tenants: 'Tenants', gallery: 'Gallery', location: 'Location', contact: 'Contact' },
        hero: { title: 'Premium Coworking by the Station', subtitle: '1 min walk from Sinchon Station Exit 6·7\nA space that nurtures your creativity', contactBtn: 'Contact', galleryBtn: 'Explore' },
        about: { title: 'About ILTER', subtitle: 'A creative business space in the heart of Sinchon Station', why: 'Why ILTER?', desc: 'ILTER is a prime-location coworking space a 1-minute walk from Sinchon Station Exits 6 and 7. We offer a range of workspaces from 1–2–3–5 person offices to hot desks and dedicated seats, where creative business ideas flourish.', wifiTitle: 'High-Speed Internet', wifiDesc: 'Stable high-speed internet', spaceTitle: 'Common Area', spaceDesc: 'Coffee & cereal\nWater purifier, fridge, microwave', printTitle: 'Printing', printDesc: 'Monthly printing allowance\nincluded', studyTitle: 'Study Area', studyDesc: 'A quiet place to focus\nfor studying and reading' },
        services: { title: 'Workspaces', subtitle: 'From 1–2–3–5 person rooms to hot desks and dedicated seats', officeTitle: '1–2–3–5 Person Rooms', officeDesc: 'Optimal space for your team size', office1: '1, 2, 3, or 5 person rooms', office2: 'Dedicated desk and chair', office3: 'Lockers (paid)', flexTitle: 'Hot Desk & Dedicated Seat', flexDesc: 'Flexible options for your work style', flex1: 'Hot desk: choose your seat freely', flex2: 'Dedicated seat: your own desk', flex3: '24/7 access', meetingTitle: 'Meeting Room', meetingDesc: 'Professional space for presentations and meetings', meeting1: 'Large smart TV and whiteboard', meeting2: 'Auto blinds', meeting3: '6 seats (up to 10 people)' },
        tenants: { title: 'Tenants', subtitle: 'A creative space with professionals from various fields', lawyer: 'Law Office', lawyerDesc: 'Legal services', realty: 'Real Estate', realtyDesc: 'Real estate brokerage & consulting', medical: 'Medical Research', medicalDesc: 'Medical R&D', consulting: 'Consulting', consultingDesc: 'Business consulting', youtube: 'YouTuber', youtubeDesc: 'Content creation & editing', startup: 'Startup', startupDesc: 'Innovative business models' },
        gallery: { title: 'Gallery', subtitle: 'Take a look around ILTER' },
        location: { title: 'Location', subtitle: '1 minute on foot from Sinchon Station Exit 6·7', name: 'ILTER Coworking', address: '8 Baekbeom-ro, Mapo-gu, Seoul\nRoom 101, 2F, Woojeong Mashangs', subway: 'Subway Line 2 Sinchon Station Exit 6·7, 1 min walk', kakao: 'KakaoTalk Chat' },
        contact: { title: 'Contact', subtitle: 'Get in touch anytime with questions about ILTER', addressLabel: 'Address', address: '8 Baekbeom-ro, Mapo-gu, Seoul\nRoom 101, 2F, Woojeong Mashangs', phoneLabel: 'Phone', kakaoLabel: 'KakaoTalk', kakaoDesc: 'Real-time chat support', hoursLabel: 'Hours', hours: '24/7 year-round', question: 'Have questions?', questionDesc: 'Reach us easily via KakaoTalk.', kakaoBtn: 'Chat on KakaoTalk', daangnBtn: 'See our latest on Karrot!' },
        footer: { tagline: 'Grow your business at our premium coworking space.', services: 'Services', office: 'Private Office', space: 'Shared Space', meeting: 'Meeting Room', contact: 'Contact', address: '8 Baekbeom-ro, Mapo-gu, Seoul\nRoom 101, 2F, Woojeong Mashangs' },
        floatingTalk: { label: 'KakaoTalk' }
    },
    zh: {
        nav: { subtitle: '共享办公', home: '首页', about: '介绍', services: '办公空间', tenants: '入驻企业', gallery: '图集', location: '位置', contact: '咨询' },
        hero: { title: '地铁站旁的共享办公', subtitle: '新村站 6/7 号出口步行 1 分钟\n激发创意的工作空间', contactBtn: '咨询', galleryBtn: '参观' },
        about: { title: '关于 ILTER', subtitle: '在新村站核心地段遇见创意商务空间', why: '为什么选择 ILTER？', desc: 'ILTER 位于新村站 6/7 号出口步行 1 分钟的黄金位置。提供 1/2/3/5 人办公室，以及自由座位与固定座位等多样选择，让创意与业务在此生长。', wifiTitle: '高速网络', wifiDesc: '稳定的高速上网环境', spaceTitle: '公共区域', spaceDesc: '提供咖啡与麦片\n饮水机、冰箱、微波炉', printTitle: '打印', printDesc: '每月提供一定额度的\n打印使用量', studyTitle: '学习空间', studyDesc: '安静可专注的\n学习与阅读环境' },
        services: { title: '办公空间', subtitle: '从 1/2/3/5 人房间到自由座位与固定座位', officeTitle: '1/2/3/5 人办公室', officeDesc: '适合不同团队规模的空间', office1: '1/2/3/5 人办公室', office2: '专属桌椅', office3: '储物柜（付费）', flexTitle: '自由座位 & 固定座位', flexDesc: '适合灵活办公方式的选择', flex1: '自由座位：灵活选择座位', flex2: '固定座位：专属座位保障', flex3: '24 小时出入', meetingTitle: '会议室', meetingDesc: '适合会议与演示的专业空间', meeting1: '大屏智能电视与白板', meeting2: '自动百叶帘', meeting3: '6 人座（最多可 10 人使用）' },
        tenants: { title: '入驻企业', subtitle: '汇聚多领域专业人士的创意空间', lawyer: '律师事务所', lawyerDesc: '专业法律服务', medical: '医学研究所', medicalDesc: '医学研究与开发', consulting: '咨询公司', consultingDesc: '商业咨询服务', youtube: '自媒体创作者', youtubeDesc: '内容制作与剪辑', startup: '创业公司', startupDesc: '创新商业模式' },
        gallery: { title: '图集', subtitle: '一起看看 ILTER 的空间' },
        location: { title: '位置', subtitle: '距离新村站 6/7 号出口步行 1 分钟', name: 'ILTER 共享办公', address: '首尔特别市 麻浦区 白凡路 8\n友谊马尚斯 商街 2层 101号', subway: '地铁 2 号线 新村站 6/7 号出口步行 1 分钟', kakao: 'KakaoTalk 咨询' },
        contact: { title: '咨询', subtitle: '如对 ILTER 有任何疑问，欢迎随时联系', addressLabel: '地址', address: '首尔特别市 麻浦区 白凡路 8\n友谊马尚斯 商街 2层 101号', phoneLabel: '电话', kakaoLabel: 'KakaoTalk', kakaoDesc: '支持实时咨询', hoursLabel: '营业时间', hours: '全年无休 24 小时', question: '有问题想问吗？', questionDesc: '可通过 KakaoTalk 便捷咨询。', kakaoBtn: '在 KakaoTalk 咨询', daangnBtn: '在 Karrot 查看最新动态！' },
        footer: { tagline: '在高品质共享办公空间助力你的事业成长。', services: '服务', office: '独立办公室', space: '共享空间', meeting: '会议室', contact: '联系方式', address: '首尔特别市 麻浦区 白凡路 8\n友谊马尚斯 商街 2层 101号' },
        floatingTalk: { label: 'Kakao咨询' }
    },
    ja: {
        nav: { subtitle: 'コワーキング', home: 'ホーム', about: '紹介', services: 'ワークスペース', tenants: '入居企業', gallery: 'ギャラリー', location: 'アクセス', contact: 'お問い合わせ' },
        hero: { title: '駅チカのコワーキング', subtitle: '新村駅 6・7番出口から徒歩1分\n創造力を育てるワークスペース', contactBtn: '問い合わせ', galleryBtn: '見学する' },
        about: { title: 'ILTERについて', subtitle: '新村駅の好立地で出会うクリエイティブなビジネス空間', why: 'なぜILTER？', desc: 'ILTERは新村駅6・7番出口から徒歩1分の好立地にあるコワーキングスペースです。1・2・3・5人部屋からフリー席・固定席まで、幅広いワークスペースを提供します。', wifiTitle: '高速インターネット', wifiDesc: '安定した高速ネット環境', spaceTitle: '共用スペース', spaceDesc: 'コーヒー・シリアル提供\n浄水器、冷蔵庫、電子レンジ', printTitle: 'プリンター', printDesc: '毎月一定量の\nプリント利用込み', studyTitle: 'スタディスペース', studyDesc: '静かに集中できる\n学習・読書環境' },
        services: { title: 'ワークスペース', subtitle: '1・2・3・5人部屋からフリー席・固定席まで', officeTitle: '1・2・3・5人部屋', officeDesc: 'チーム規模に合わせた最適空間', office1: '1・2・3・5人部屋', office2: '専用デスク＆チェア', office3: 'ロッカー（有料）', flexTitle: 'フリー席 & 固定席', flexDesc: '働き方に合わせた柔軟な選択', flex1: 'フリー席：座席を自由に選択', flex2: '固定席：専用席を確保', flex3: '24時間出入り可能', meetingTitle: 'ミーティングルーム', meetingDesc: '会議やプレゼンに最適な空間', meeting1: '大型スマートTV＆ホワイトボード', meeting2: '自動ブラインド', meeting3: '6席（最大10名利用可）' },
        tenants: { title: '入居企業', subtitle: 'さまざまな分野の専門家が集う創造的な空間', lawyer: '法律事務所', lawyerDesc: '専門的な法務サービス', medical: '医学研究所', medicalDesc: '医学研究・開発', consulting: 'コンサルティング', consultingDesc: 'ビジネスコンサルサービス', youtube: 'YouTuber', youtubeDesc: 'コンテンツ制作・編集', startup: 'スタートアップ', startupDesc: '革新的なビジネスモデル' },
        gallery: { title: 'ギャラリー', subtitle: 'ILTERの空間をご覧ください' },
        location: { title: 'アクセス', subtitle: '新村駅6・7番出口から徒歩1分', name: 'ILTER コワーキング', address: 'ソウル特別市 麻浦区 白凡路8\nウジョンマシャンス商街 2階 101号', subway: '地下鉄2号線 新村駅 6・7番出口 徒歩1分', kakao: 'KakaoTalk 相談' },
        contact: { title: 'お問い合わせ', subtitle: 'ILTERについてのご質問はお気軽にご連絡ください', addressLabel: '住所', address: 'ソウル特別市 麻浦区 白凡路8\nウジョンマシャンス商街 2階 101号', phoneLabel: '電話', kakaoLabel: 'KakaoTalk', kakaoDesc: 'リアルタイム相談可能', hoursLabel: '営業時間', hours: '年中無休24時間', question: 'ご不明点はありますか？', questionDesc: 'KakaoTalkで便利にお問い合わせいただけます。', kakaoBtn: 'KakaoTalkで相談する', daangnBtn: 'Karrotで最新情報を見る！' },
        footer: { tagline: 'プレミアムなコワーキングでビジネスを成長させましょう。', services: 'サービス', office: '個室オフィス', space: '共用スペース', meeting: 'ミーティングルーム', contact: '連絡先', address: 'ソウル特別市 麻浦区 白凡路8\nウジョンマシャンス商街 2階 101号' },
        floatingTalk: { label: 'カカオ相談' }
    }
};

function getNested(obj, path) {
    return path.split('.').reduce((o, k) => (o && o[k] !== undefined ? o[k] : null), obj);
}

function applyLanguage(lang) {
    const t = translations[lang] || translations.ko;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const text = getNested(t, key);
        if (text == null) return;
        if (typeof text === 'string' && text.includes('\n')) {
            el.innerHTML = text.replace(/\n/g, '<br>');
        } else {
            el.textContent = text;
        }
    });
    const htmlLang = lang === 'en' ? 'en' : (lang === 'zh' ? 'zh' : (lang === 'ja' ? 'ja' : 'ko'));
    document.documentElement.lang = htmlLang;
    if (lang === 'en') document.title = 'ILTER - Premium Coworking';
    else if (lang === 'zh') document.title = 'ILTER - 高端共享办公';
    else if (lang === 'ja') document.title = 'ILTER - プレミアムコワーキング';
    else document.title = 'ILTER - 프리미엄 공유오피스';
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
    try { localStorage.setItem('ilter-lang', lang); } catch (e) {}
}

// 추가 보안 기능
(function() {
    // 개발자 도구 추가 감지
    function detectDevTools() {
        const start = performance.now();
        debugger;
        const end = performance.now();
        
        if (end - start > 100) {
            document.body.innerHTML = '<div style="text-align: center; padding: 50px; font-family: Arial, sans-serif;"><h1>보안 경고</h1><p>개발자 도구 사용이 감지되었습니다.</p></div>';
        }
    }
    
    // 주기적으로 감지
    setInterval(detectDevTools, 1000);
})();

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// 언어 버튼 클릭 및 초기 언어 적용 (기본: 한국어)
function initLanguage() {
    const supported = ['ko', 'en', 'zh', 'ja'];
    const savedLangRaw = (typeof localStorage !== 'undefined' && localStorage.getItem('ilter-lang')) || 'ko';
    const savedLang = supported.includes(savedLangRaw) ? savedLangRaw : 'ko';
    applyLanguage(savedLang);
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => applyLanguage(btn.getAttribute('data-lang')));
    });
}
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLanguage);
} else {
    initLanguage();
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.service-card, .gallery-item, .feature, .contact-item');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});



// Gallery image click to enlarge (optional feature)
document.querySelectorAll('.gallery-item img').forEach(img => {
    img.addEventListener('click', () => {
        const overlay = document.createElement('div');
        overlay.className = 'image-overlay';
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.9);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
            cursor: pointer;
        `;
        
        const enlargedImg = document.createElement('img');
        enlargedImg.src = img.src;
        enlargedImg.style.cssText = `
            max-width: 90%;
            max-height: 90%;
            object-fit: contain;
            border-radius: 10px;
        `;
        
        overlay.appendChild(enlargedImg);
        document.body.appendChild(overlay);
        
        overlay.addEventListener('click', () => {
            document.body.removeChild(overlay);
        });
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// Add loading state to body
document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.5s ease';

// Counter animation for statistics (if you want to add statistics section later)
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// Add some interactive hover effects
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Smooth reveal animation for sections
const revealSections = document.querySelectorAll('section');
const revealSection = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('section--visible');
        }
    });
};

const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.15,
});

revealSections.forEach(section => {
    section.classList.add('section--hidden');
    sectionObserver.observe(section);
});

// Add CSS for section animations
const style = document.createElement('style');
style.textContent = `
    .section--hidden {
        opacity: 0;
        transform: translateY(8rem);
        transition: all 1s;
    }
    
    .section--visible {
        opacity: 1;
        transform: translateY(0);
    }
    
    .image-overlay img {
        transition: transform 0.3s ease;
    }
    
    .image-overlay img:hover {
        transform: scale(1.05);
    }
`;
document.head.appendChild(style);
