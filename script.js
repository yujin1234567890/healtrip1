script.js
// Mobile Menu Toggle
function toggleMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const menuToggle = document.querySelector('.menu-toggle');
    
    mobileMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');
}

function closeMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const menuToggle = document.querySelector('.menu-toggle');
    
    mobileMenu.classList.remove('active');
    menuToggle.classList.remove('active');
}

// Packages Data
const packages = [
    {
        id: 1,
        title: '제주도 힐링 3박 4일',
        location: '제주도',
        duration: '3박 4일',
        people: '12명',
        price: '680,000',
        rating: 4.9,
        image: 'https://images.unsplash.com/photo-1759067397647-4d8e3b0920cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWFjZWZ1bCUyMGJlYWNoJTIwcmVzb3J0fGVufDF8fHx8MTc2NTcxNTM0OXww&ixlib=rb-4.1.0&q=80&w=1080',
        highlights: ['천천히 즐기는 올레길', '프리미엄 리조트 숙박', '건강식 제공']
    },
    {
        id: 2,
        title: '설악산 단풍 여행 2박 3일',
        location: '강원도',
        duration: '2박 3일',
        people: '15명',
        price: '490,000',
        rating: 4.8,
        image: 'https://images.unsplash.com/photo-1724167934723-6ca990cb8a15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMHdlbGxuZXNzJTIwcmV0cmVhdHxlbnwxfHx8fDE3NjU3MTUzNDl8MA&ixlib=rb-4.1.0&q=80&w=1080',
        highlights: ['케이블카 이용', '온천 힐링', '여유로운 일정']
    },
    {
        id: 3,
        title: '경주 역사 문화 탐방',
        location: '경주',
        duration: '2박 3일',
        people: '10명',
        price: '520,000',
        rating: 4.9,
        image: 'https://images.unsplash.com/photo-1696857674757-185edd346e7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdWx0dXJhbCUyMGhlcml0YWdlJTIwdGVtcGxlfGVufDF8fHx8MTc2NTYxMTkwOHww&ixlib=rb-4.1.0&q=80&w=1080',
        highlights: ['문화 해설사 동행', '편안한 도보 코스', '한옥 스테이']
    },
    {
        id: 4,
        title: '부산 온천 & 휴양',
        location: '부산',
        duration: '3박 4일',
        people: '12명',
        price: '720,000',
        rating: 5.0,
        image: 'https://images.unsplash.com/photo-1761470575018-135c213340eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzcGElMjB3ZWxsbmVzc3xlbnwxfHx8fDE3NjU3MDA5MjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
        highlights: ['스파 & 온천', '해운대 산책', '신선한 해산물']
    }
];

// Testimonials Data
const testimonials = [
    {
        id: 1,
        name: '김영희',
        age: 68,
        location: '서울',
        rating: 5,
        text: '제주도 여행이 정말 편안하고 좋았습니다. 무리하지 않는 일정으로 천천히 구경할 수 있어서 좋았어요. 간호사님도 함께 해주셔서 안심이 되었습니다.',
        trip: '제주도 힐링 3박 4일'
    },
    {
        id: 2,
        name: '박철수',
        age: 72,
        location: '부산',
        rating: 5,
        text: '단풍 구경하러 설악산에 다녀왔는데 케이블카를 타고 편하게 구경했습니다. 온천도 좋았고, 식사도 맛있었어요. 다음엔 부인과 함께 또 가고 싶습니다.',
        trip: '설악산 단풍 여행 2박 3일'
    },
    {
        id: 3,
        name: '이순자',
        age: 65,
        location: '대구',
        rating: 5,
        text: '경주 역사 여행에서 문화 해설사님의 설명을 들으며 새로운 것들을 많이 배웠습니다. 한옥에서의 하룻밤도 특별한 경험이었어요.',
        trip: '경주 역사 문화 탐방'
    }
];

// SVG Icons
const icons = {
    mapPin: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>',
    calendar: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>',
    users: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>',
    star: '<svg class="star-icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>',
    quote: '<svg class="quote-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path></svg>'
};

// Render Packages
function renderPackages() {
    const packagesGrid = document.getElementById('packagesGrid');
    
    packagesGrid.innerHTML = packages.map(pkg => `
        <div class="package-card">
            <div class="package-image">
                <img src="${pkg.image}" alt="${pkg.title}" loading="lazy">
                <div class="package-rating">
                    ${icons.star}
                    <span>${pkg.rating}</span>
                </div>
            </div>
            
            <div class="package-content">
                <h3 class="package-title">${pkg.title}</h3>
                
                <div class="package-meta">
                    <div class="package-meta-item">
                        ${icons.mapPin}
                        <span>${pkg.location}</span>
                    </div>
                    <div class="package-meta-item">
                        ${icons.calendar}
                        <span>${pkg.duration}</span>
                    </div>
                    <div class="package-meta-item">
                        ${icons.users}
                        <span>정원 ${pkg.people}</span>
                    </div>
                </div>
                
                <div class="package-highlights">
                    ${pkg.highlights.map(highlight => `
                        <div class="highlight-item">
                            <div class="highlight-dot"></div>
                            <span>${highlight}</span>
                        </div>
                    `).join('')}
                </div>
                
                <div class="package-footer">
                    <div class="package-price-section">
                        <div>
                            <div class="price-label">1인 기준</div>
                            <div class="package-price">${pkg.price}원</div>
                        </div>
                    </div>
                    <button class="btn btn-primary package-button">자세히 보기</button>
                </div>
            </div>
        </div>
    `).join('');
}

// Render Testimonials
function renderTestimonials() {
    const testimonialsGrid = document.getElementById('testimonialsGrid');
    
    testimonialsGrid.innerHTML = testimonials.map(testimonial => `
        <div class="testimonial-card">
            ${icons.quote}
            
            <div class="testimonial-rating">
                ${Array(testimonial.rating).fill(icons.star).join('')}
            </div>
            
            <p class="testimonial-text">"${testimonial.text}"</p>
            
            <div class="testimonial-author">
                <div class="author-name">${testimonial.name} (${testimonial.age}세)</div>
                <div class="author-location">${testimonial.location}</div>
                <div class="author-trip">${testimonial.trip}</div>
            </div>
        </div>
    `).join('');
}

// Form Submit Handler
function handleSubmit(event) {
    event.preventDefault();
    alert('상담 신청이 완료되었습니다. 빠른 시일 내에 연락드리겠습니다.');
    event.target.reset();
}

// Smooth Scroll
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

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    renderPackages();
    renderTestimonials();
});