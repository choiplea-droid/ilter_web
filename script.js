// 다국어 번역 (기본: 한국어)
const translations = {
    ko: {
        nav: { subtitle: '공유오피스', home: '홈', about: '소개', services: '업무공간', tenants: '입주업체', gallery: '갤러리', location: '위치', contact: '문의' },
        hero: { title: '초역세권 공유오피스', subtitle: '신촌역 6·7번 출구 도보 1분 거리\n당신의 창의력을 키워줄 공간', contactBtn: '문의하기', galleryBtn: '둘러보기' },
        about: { title: 'ILTER 소개', subtitle: '신촌역 초역세권에서 만나는 창의적인 비즈니스 공간', why: '왜 ILTER인가요?', desc: 'ILTER는 신촌역 6·7번 출구에서 도보 1분 거리의 초역세권 공유오피스입니다. 1·2·3·5인실부터 자유석·고정석까지 다양한 업무 공간을 제공하며, 창의적인 비즈니스 아이디어가 꽃피는 공간입니다.', wifiTitle: '고속 인터넷', wifiDesc: '안정적인 고속 인터넷 환경', spaceTitle: '공용공간', spaceDesc: '커피, 시리얼 제공\n정수기, 냉장고, 전자렌지', printTitle: '프린터', printDesc: '매월 정해진 양의\n프린터 이용 제공' },
        services: { title: '업무 공간', subtitle: '1·2·3·5인실부터 자유석·고정석까지 다양한 옵션', officeTitle: '1·2·3·5인실', officeDesc: '팀 규모에 맞는 최적의 업무 공간', office1: '1인실·2인실·3인실·5인실', office2: '전용 책상과 의자', office3: '사물함(유료)', flexTitle: '자유석 & 고정석', flexDesc: '유연한 업무 스타일에 맞는 선택', flex1: '자유석: 유연한 좌석 선택', flex2: '고정석: 전용 좌석 보장', flex3: '24시간 출입 가능', meetingTitle: '미팅룸', meetingDesc: '프레젠테이션과 회의를 위한 전문 공간', meeting1: '대형 스마트 TV 및 화이트보드', meeting2: '자동 블라인드', meeting3: '6인석 (10인 사용 가능)' },
        tenants: { title: '입주 업체', subtitle: '다양한 분야의 전문가들이 함께하는 창의적인 공간', lawyer: '변호사 사무실', lawyerDesc: '전문적인 법률 서비스', realty: '부동산', realtyDesc: '부동산 중개 및 컨설팅', medical: '의학연구소', medicalDesc: '의학 연구 및 개발', consulting: '컨설팅 업체', consultingDesc: '비즈니스 컨설팅 서비스', youtube: '유튜버', youtubeDesc: '콘텐츠 제작 및 편집', startup: '스타트업', startupDesc: '혁신적인 비즈니스 모델' },
        gallery: { title: '갤러리', subtitle: 'ILTER의 아름다운 공간을 둘러보세요' },
        location: { title: '위치', subtitle: '신촌역 6·7번 출구에서 도보 1분 거리에 위치해 있습니다', name: 'ILTER 공유오피스', address: '서울시 마포구 백범로 8\n우정마샹스 상가 2층 101호', subway: '2호선 신촌역 6·7번 출구 도보 1분', kakao: '카카오톡 상담' },
        contact: { title: '문의하기', subtitle: 'ILTER에 대해 궁금한 점이 있으시면 언제든 연락주세요', addressLabel: '주소', address: '서울시 마포구 백범로 8\n우정마샹스 상가 2층 101호', phoneLabel: '전화', kakaoLabel: '카카오톡', kakaoDesc: '실시간 상담 가능', hoursLabel: '운영시간', hours: '연중무휴 24시간', question: '궁금한 점이 있으신가요?', questionDesc: '카카오톡으로 편리하게 문의하실 수 있습니다.', kakaoBtn: '카카오톡 상담하기', daangnBtn: '당근에서 새로운 소식을 만나보세요!' },
        footer: { tagline: '프리미엄 공유오피스로 여러분의 비즈니스를 성장시키세요.', services: '서비스', office: '개인 오피스', space: '공용 공간', meeting: '미팅룸', contact: '연락처', address: '서울시 마포구 백범로 8\n우정마샹스 상가 2층 101호' }
    },
    en: {
        nav: { subtitle: 'Coworking', home: 'Home', about: 'About', services: 'Workspaces', tenants: 'Tenants', gallery: 'Gallery', location: 'Location', contact: 'Contact' },
        hero: { title: 'Premium Coworking by the Station', subtitle: '1 min walk from Sinchon Station Exit 6·7\nA space that nurtures your creativity', contactBtn: 'Contact', galleryBtn: 'Explore' },
        about: { title: 'About ILTER', subtitle: 'A creative business space in the heart of Sinchon Station', why: 'Why ILTER?', desc: 'ILTER is a prime-location coworking space a 1-minute walk from Sinchon Station Exits 6 and 7. We offer a range of workspaces from 1–2–3–5 person offices to hot desks and dedicated seats, where creative business ideas flourish.', wifiTitle: 'High-Speed Internet', wifiDesc: 'Stable high-speed internet', spaceTitle: 'Common Area', spaceDesc: 'Coffee & cereal\nWater purifier, fridge, microwave', printTitle: 'Printing', printDesc: 'Monthly printing allowance\nincluded', },
        services: { title: 'Workspaces', subtitle: 'From 1–2–3–5 person rooms to hot desks and dedicated seats', officeTitle: '1–2–3–5 Person Rooms', officeDesc: 'Optimal space for your team size', office1: '1, 2, 3, or 5 person rooms', office2: 'Dedicated desk and chair', office3: 'Lockers (paid)', flexTitle: 'Hot Desk & Dedicated Seat', flexDesc: 'Flexible options for your work style', flex1: 'Hot desk: choose your seat freely', flex2: 'Dedicated seat: your own desk', flex3: '24/7 access', meetingTitle: 'Meeting Room', meetingDesc: 'Professional space for presentations and meetings', meeting1: 'Large smart TV and whiteboard', meeting2: 'Auto blinds', meeting3: '6 seats (up to 10 people)' },
        tenants: { title: 'Tenants', subtitle: 'A creative space with professionals from various fields', lawyer: 'Law Office', lawyerDesc: 'Legal services', realty: 'Real Estate', realtyDesc: 'Real estate brokerage & consulting', medical: 'Medical Research', medicalDesc: 'Medical R&D', consulting: 'Consulting', consultingDesc: 'Business consulting', youtube: 'YouTuber', youtubeDesc: 'Content creation & editing', startup: 'Startup', startupDesc: 'Innovative business models' },
        gallery: { title: 'Gallery', subtitle: 'Take a look around ILTER' },
        location: { title: 'Location', subtitle: '1 minute on foot from Sinchon Station Exit 6·7', name: 'ILTER Coworking', address: '8 Baekbeom-ro, Mapo-gu, Seoul\nRoom 101, 2F, Woojeong Mashangs', subway: 'Subway Line 2 Sinchon Station Exit 6·7, 1 min walk', kakao: 'KakaoTalk Chat' },
        contact: { title: 'Contact', subtitle: 'Get in touch anytime with questions about ILTER', addressLabel: 'Address', address: '8 Baekbeom-ro, Mapo-gu, Seoul\nRoom 101, 2F, Woojeong Mashangs', phoneLabel: 'Phone', kakaoLabel: 'KakaoTalk', kakaoDesc: 'Real-time chat support', hoursLabel: 'Hours', hours: '24/7 year-round', question: 'Have questions?', questionDesc: 'Reach us easily via KakaoTalk.', kakaoBtn: 'Chat on KakaoTalk', daangnBtn: 'See our latest on Karrot!' },
        footer: { tagline: 'Grow your business at our premium coworking space.', services: 'Services', office: 'Private Office', space: 'Shared Space', meeting: 'Meeting Room', contact: 'Contact', address: '8 Baekbeom-ro, Mapo-gu, Seoul\nRoom 101, 2F, Woojeong Mashangs' }
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
    document.documentElement.lang = lang === 'en' ? 'en' : 'ko';
    document.title = lang === 'en' ? 'ILTER - Premium Coworking' : 'ILTER - 프리미엄 공유오피스';
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
    const savedLang = (typeof localStorage !== 'undefined' && localStorage.getItem('ilter-lang')) || 'ko';
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
