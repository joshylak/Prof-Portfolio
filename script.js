const techLogos = {
    'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    'Express': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    'Redis': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
    'TensorFlow': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
    'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    'Docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    'AWS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
    'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    'GraphQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg',
    'MySQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
};

const projects = [
    {
        id: 1,
        name: '100 Days of Backend Development',
        description: 'Successfully completed an intensive 100-day challenge building 100 production-ready RESTful APIs, demonstrating consistent delivery and comprehensive backend development expertise across diverse use cases.',
        technologies: ['Node.js', 'PostgreSQL', 'REST API', 'Express'],
        github: '',
        demo: ''
    },
    {
        id: 2,
        name: 'Real Estate Management Platform',
        description: 'Architected and developed a comprehensive backend system for a real estate company, featuring property listings, user management, transaction processing, and advanced search capabilities with optimized database queries.',
        technologies: ['Node.js', 'Express', 'PostgreSQL', 'JWT'],
        github: '',
        demo: ''
    },
    {
        id: 3,
        name: 'Enterprise Point of Sale System',
        description: 'Engineered a full-stack POS solution designed for small to medium businesses, featuring inventory management, sales tracking, and real-time analytics. Built with scalability and performance optimization at its core.',
        technologies: ['Node.js', 'Express', 'PostgreSQL', 'Redis'],
        github: '',
        demo: ''
    },
    {
        id: 4,
        name: 'AI-Powered Identity Verification System',
        description: 'Developed an intelligent API leveraging Google Cloud AI services to detect deepfakes and fraudulent identification documents, enhancing security protocols for identity verification processes.',
        technologies: ['Node.js', 'Express', 'Google Cloud AI', 'TensorFlow'],
        github: '',
        demo: ''
    },
    {
        id: 5,
        name: 'Contact Management API',
        description: 'Built a robust contact management system with RESTful APIs supporting CRUD operations, advanced filtering, bulk operations, and seamless third-party integrations for CRM workflows.',
        technologies: ['Node.js', 'Express', 'PostgreSQL', 'REST API'],
        github: '',
        demo: ''
    }
];

const experiences = [
    {
        id: 1,
        title: 'Backend Engineer',
        company: 'P2vest',
        duration: '2022 - Present',
        responsibilities: [
            'Design, develop, and maintain scalable RESTful APIs serving thousands of concurrent users',
            'Integrate cutting-edge AI/ML services to enhance platform capabilities and user experience',
            'Optimize database queries and implement caching strategies, improving response times by 40%',
            'Collaborate with cross-functional teams to deliver high-quality features within agile sprints'
        ]
    }
];

const achievements = [
    { icon: '🚀', number: '100+', label: 'APIs Built' },
    { icon: '⚡', number: '40%', label: 'Performance Boost' },
    { icon: '🏆', number: '2+', label: 'Years Experience' },
    { icon: '💼', number: '5+', label: 'Projects Delivered' }
];

const certifications = [
    { name: 'AWS Cloud Technical Essentials', issuer: 'Amazon Web Services', year: '2024', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
    { name: 'AWS Fundamentals: Building Serverless Applications', issuer: 'Amazon Web Services', year: '2024', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
    { name: 'Cybersecurity Assessment: CompTIA Security+ & CYSA+', issuer: 'IBM', year: '2024', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg' },
    { name: 'Autodesk Fusion 360 Integrated CAD/CAM/CAE', issuer: 'Autodesk', year: '2024', logo: 'https://seeklogo.com/images/A/autodesk-logo-A7C5F8B0D4-seeklogo.com.png' },
    { name: 'Node.js Backend Basics with Best Practices', issuer: 'Deprecated Guided Projects', year: '2023', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Initiating and Planning Projects', issuer: 'Coursera', year: '2023', logo: 'https://seeklogo.com/images/C/coursera-logo-DF2B96288D-seeklogo.com.png' },
    { name: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', year: '2023', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' }
];

const testimonials = [
    {
        text: 'Outstanding backend engineer who consistently delivers high-quality, scalable solutions. His expertise in Node.js and database optimization has been invaluable to our team.',
        author: 'Senior Tech Lead',
        company: 'P2vest'
    },
    {
        text: 'Exceptional problem-solver with deep knowledge of backend architecture. Always goes above and beyond to ensure optimal performance and code quality.',
        author: 'Project Manager',
        company: 'Tech Solutions Inc.'
    }
];

const proficiencyData = [
    { name: 'Node.js', level: 98 },
    { name: 'Express', level: 100 },
    { name: 'PostgreSQL', level: 100 },
    { name: 'MySQL', level: 100 },
    { name: 'Git', level: 100 },
    { name: 'GraphQL', level: 86 },
    { name: 'Docker', level: 80 },
    { name: 'AWS', level: 75 },
    { name: 'Python', level: 69 }
];

document.addEventListener('DOMContentLoaded', () => {
    let progress = 0;
    const percentText = document.getElementById('load-percent');
    const interval = setInterval(() => {
        progress += 2;
        percentText.textContent = progress + '%';
        if (progress >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                document.getElementById('loader').style.opacity = '0';
                setTimeout(() => {
                    document.getElementById('loader').style.display = 'none';
                }, 500);
            }, 300);
        }
    }, 50);
    
    renderProjects();
    renderExperiences();
    renderAchievements();
    renderProficiency();
    renderCertifications();
    renderTestimonials();
    setupScrollAnimations();
    setupSmoothScroll();
});

function renderProjects() {
    const grid = document.getElementById('projects-grid');
    grid.innerHTML = projects.map(p => `
        <div class="project-card">
            <h3>${p.name}</h3>
            <p>${p.description}</p>
            <div class="project-tech">
                ${p.technologies.map(t => {
                    const logo = techLogos[t];
                    return logo 
                        ? `<img src="${logo}" alt="${t}" title="${t}">` 
                        : `<span>${t}</span>`;
                }).join('')}
            </div>
            <div class="project-links">
                ${p.github ? `<a href="${p.github}" target="_blank">GitHub →</a>` : ''}
                ${p.demo ? `<a href="${p.demo}" target="_blank">Live Demo →</a>` : ''}
            </div>
        </div>
    `).join('');
}

function renderExperiences() {
    const timeline = document.getElementById('experience-timeline');
    timeline.innerHTML = experiences.map(e => `
        <div class="timeline-item">
            <h3>${e.title}</h3>
            <h4>${e.company}</h4>
            <p class="duration">${e.duration}</p>
            <ul>
                ${e.responsibilities.map(r => `<li>${r}</li>`).join('')}
            </ul>
        </div>
    `).join('');
}

function renderAchievements() {
    const grid = document.getElementById('achievements-grid');
    grid.innerHTML = achievements.map(a => `
        <div class="achievement-card">
            <div class="achievement-icon">${a.icon}</div>
            <div class="achievement-number">${a.number}</div>
            <div class="achievement-label">${a.label}</div>
        </div>
    `).join('');
}

function renderCertifications() {
    const list = document.getElementById('certifications-list');
    list.innerHTML = certifications.map(c => `
        <div class="cert-item">
            <div class="cert-logo">
                <img src="${c.logo}" alt="${c.issuer}" title="${c.issuer}">
            </div>
            <div class="cert-details">
                <h4>${c.name}</h4>
                <p>${c.issuer} • ${c.year}</p>
            </div>
        </div>
    `).join('');
}

function renderTestimonials() {
    const container = document.getElementById('testimonials-container');
    container.innerHTML = testimonials.map(t => `
        <div class="testimonial-card">
            <p class="testimonial-text">"${t.text}"</p>
            <div class="testimonial-author">
                <strong>${t.author}</strong>
                <span>${t.company}</span>
            </div>
        </div>
    `).join('');
}

function renderProficiency() {
    const container = document.getElementById('proficiency-bars');
    container.innerHTML = proficiencyData.map(skill => {
        const level = skill.level >= 90 ? 'Expert' : skill.level >= 75 ? 'Advanced' : skill.level >= 60 ? 'Intermediate' : 'Beginner';
        const dots = Math.round(skill.level / 10);
        return `
        <div class="proficiency-item">
            <div class="proficiency-header">
                <span class="proficiency-name">${skill.name}</span>
                <span class="proficiency-level">${level}</span>
            </div>
            <div class="proficiency-meter">
                ${Array(10).fill(0).map((_, i) => 
                    `<div class="meter-dot ${i < dots ? 'active' : ''}"></div>`
                ).join('')}
            </div>
        </div>
    `}).join('');
}

function setupScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.skill-card, .project-card, .timeline-item, .achievement-card, .cert-item, .testimonial-card, .proficiency-item, .education-card, .award-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });
}

function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}
