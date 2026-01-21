/**
 * Main logic for Inna Campo's simplified website.
 */

document.addEventListener('DOMContentLoaded', () => {
    const data = window.APP_DATA;
    if (!data) return;

    // 1. Initialize Lucide Icons
    lucide.createIcons();

    // 2. DNA Loader Initialization
    initDNALoader();

    // 3. Theme Toggle Initialization
    initTheme();

    // 4. Render Profile Data
    renderProfile(data.PROFILE, data.BADGES);

    // 5. Render Dynamic Content
    renderProjects(data.PROJECTS);
    renderTimeline(data.EXPERIENCE);
    renderPatents(data.PATENTS);
    renderPublications(data.PUBLICATIONS);
    renderAcademicCitizenship(data.ACADEMIC_CITIZENSHIP);
    renderAwards(data.AWARDS);

    // 6. Typewriter Status
    initTypewriter();

    // 7. Particle Background
    initParticles();

    // 8. Scroll Reveal
    initScrollReveal();

    // 9. Contact Form
    initContactForm();

    // 10. Hide Loader and Show Content
    setTimeout(() => {
        const loader = document.getElementById('dna-loader');
        const content = document.getElementById('app-content');
        if (loader) loader.style.opacity = '0';
        if (content) {
            content.classList.remove('pointer-events-none');
            content.style.opacity = '1';
        }
        setTimeout(() => {
            if (loader) loader.remove();
        }, 500);
    }, 3000);
});

/* --- Initialization Functions --- */

function initDNALoader() {
    const container = document.getElementById('dna-container');
    if (!container) return;

    const numDots = 20;

    // Base pairs
    const basePairsContainer = document.createElement('div');
    basePairsContainer.className = 'absolute flex flex-col gap-[11.5px]';
    for (let i = 0; i < numDots; i++) {
        const line = document.createElement('div');
        line.className = 'h-[1px] base-pair';
        line.style.width = '32px';
        line.style.background = i % 2 === 0
            ? 'linear-gradient(90deg, #059669 0%, #64748b 100%)'
            : 'linear-gradient(90deg, #64748b 0%, #059669 100%)';
        line.style.animationDelay = `${i * 0.1}s`;
        line.style.opacity = '0.3';
        basePairsContainer.appendChild(line);
    }
    container.appendChild(basePairsContainer);

    // Left Helix
    const leftHelix = document.createElement('div');
    leftHelix.className = 'flex flex-col gap-2 z-10';
    for (let i = 0; i < numDots; i++) {
        const dot = document.createElement('div');
        dot.className = 'w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-500 dot-l';
        dot.style.animationDelay = `${i * 0.1}s`;
        leftHelix.appendChild(dot);
    }
    container.appendChild(leftHelix);

    // Right Helix
    const rightHelix = document.createElement('div');
    rightHelix.className = 'flex flex-col gap-2 z-10';
    for (let i = 0; i < numDots; i++) {
        const dot = document.createElement('div');
        dot.className = 'w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-600 dot-r';
        dot.style.animationDelay = `${i * 0.1}s`;
        rightHelix.appendChild(dot);
    }
    container.appendChild(rightHelix);
}

function initTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;

    // Check saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        htmlElement.classList.add('dark');
    }

    themeToggle.addEventListener('click', () => {
        htmlElement.classList.toggle('dark');
        const theme = htmlElement.classList.contains('dark') ? 'dark' : 'light';
        localStorage.setItem('theme', theme);
    });
}

function renderProfile(profile, badges) {
    document.getElementById('profile-name').textContent = profile.name;
    document.getElementById('profile-role').textContent = profile.role;

    const badgeContainer = document.getElementById('badges-container');
    badges.forEach(badge => {
        const span = document.createElement('span');
        span.className = 'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-100/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 backdrop-blur-sm';
        span.innerHTML = `<i data-lucide="award" class="w-3 h-3 text-amber-500"></i>${badge.label}`;
        badgeContainer.appendChild(span);
    });
    lucide.createIcons({
        attrs: {
            'stroke-width': 2
        },
        nameAttr: 'data-lucide'
    });
}

function renderProjects(projects) {
    const grid = document.getElementById('projects-grid');
    projects.forEach(project => {
        const div = document.createElement('div');
        div.className = 'group relative bg-white dark:bg-slate-900 rounded-3xl p-6 lg:p-8 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/30 dark:hover:border-emerald-400/30 transition-all duration-500 shadow-sm hover:shadow-xl';

        div.innerHTML = `
            <div class="flex flex-col md:flex-row justify-between gap-6">
                <div class="space-y-4 flex-1">
                    <div class="flex items-center gap-3">
                        <div class="p-2 bg-emerald-50 dark:bg-emerald-900/30 rounded-lg text-emerald-600 dark:text-emerald-400">
                            <i data-lucide="zap" class="w-5 h-5"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-800 dark:text-white">${project.title}</h3>
                    </div>
                    <p class="text-slate-600 dark:text-slate-400 leading-relaxed">${project.description}</p>
                    <div class="flex flex-wrap gap-2">
                        ${project.tags.map(tag => `<span class="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-xs font-mono rounded-lg">#${tag}</span>`).join('')}
                    </div>
                </div>
                <div class="flex flex-row md:flex-col gap-3 justify-start items-center md:items-end">
                    ${project.link ? `<a href="${project.link}" target="_blank" class="p-3 bg-emerald-600 text-white rounded-xl hover:bg-emerald-500 transition-all shadow-lg shadow-emerald-600/20"><i data-lucide="external-link" class="w-5 h-5"></i></a>` : ''}
                    ${project.github ? `<a href="${project.github}" target="_blank" class="p-3 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"><i data-lucide="github" class="w-5 h-5"></i></a>` : ''}
                </div>
            </div>
        `;
        grid.appendChild(div);
    });
}

function renderTimeline(experience) {
    const container = document.getElementById('timeline-container');
    experience.forEach((exp, idx) => {
        const div = document.createElement('div');
        div.className = 'relative pl-8 md:pl-0 group';

        let content = `
            <div class="flex flex-col md:flex-row gap-4 md:gap-12 relative">
                <div class="md:w-32 pt-1">
                    <span class="text-xs font-bold font-mono tracking-tighter text-slate-400 dark:text-slate-500 uppercase">${exp.start_date} – ${exp.end_date}</span>
                </div>
                <div class="absolute left-[-25px] md:left-[138px] top-1.5 w-3 h-3 rounded-full border-2 border-emerald-500 bg-white dark:bg-slate-950 z-10 transition-transform group-hover:scale-125"></div>
                ${idx < experience.length - 1 ? `<div class="absolute left-[-19.5px] md:left-[143.5px] top-6 bottom-[-48px] w-[1px] bg-slate-200 dark:bg-slate-800"></div>` : ''}
                
                <div class="flex-1 pb-12">
                    <h3 class="text-lg font-bold text-slate-800 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">${exp.title}</h3>
                    <p class="text-emerald-700 dark:text-emerald-400 font-medium mb-4">${exp.organization}</p>
                    <ul class="space-y-3">
                        ${exp.details ? exp.details.map(item => `
                            <li class="flex items-start gap-3 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500/50 shrink-0"></span>
                                ${item}
                            </li>
                        `).join('') : ''}
                    </ul>
                    ${exp.selected_projects ? `
                        <div class="mt-6 space-y-4">
                            <h4 class="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Selected Engagement</h4>
                            ${exp.selected_projects.map(proj => `
                                <div class="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-200 dark:border-slate-800/50">
                                    <h5 class="font-bold text-slate-700 dark:text-slate-300 text-sm mb-2">${proj.project_name}</h5>
                                    <ul class="space-y-2">
                                        ${proj.details.map(d => `
                                            <li class="text-xs text-slate-500 dark:text-slate-400 flex items-start gap-2">
                                                <span class="font-bold text-emerald-500">·</span> ${d}
                                            </li>
                                        `).join('')}
                                    </ul>
                                </div>
                            `).join('')}
                        </div>
                    ` : ''}
                </div>
            </div>
        `;
        div.innerHTML = content;
        container.appendChild(div);
    });
}

function renderPatents(patents) {
    const grid = document.getElementById('patents-grid');
    patents.forEach(patent => {
        const div = document.createElement('div');
        div.className = 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-lg flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-emerald-300 dark:hover:border-emerald-700 transition-colors';
        div.innerHTML = `
            <div>
                <h3 class="font-semibold text-slate-800 dark:text-slate-200">${patent.title}</h3>
                <p class="text-sm text-slate-500 mt-1">${patent.authors.join(', ')} (${patent.year})</p>
            </div>
            <span class="font-mono text-xs font-bold bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded text-slate-600 dark:text-slate-400 whitespace-nowrap">
                ${patent.patent_number}
            </span>
        `;
        grid.appendChild(div);
    });
}

function renderPublications(publications) {
    const list = document.getElementById('publications-list');
    publications.peer_reviewed_articles.forEach(pub => {
        const div = document.createElement('div');
        div.className = 'group relative bg-white dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-800/50 hover:border-emerald-200 dark:hover:border-emerald-900/50 transition-all';
        div.innerHTML = `
            <div class="flex flex-col gap-2">
                <div class="flex items-start justify-between gap-4">
                    <h3 class="text-base font-bold text-slate-800 dark:text-white group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                        ${pub.title}
                    </h3>
                    <span class="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-[10px] font-bold text-slate-500 dark:text-slate-500 rounded uppercase tracking-wider">
                        ${pub.journal_ranking}
                    </span>
                </div>
                <p class="text-sm text-slate-600 dark:text-slate-400 italic mb-1">
                    ${pub.journal}, ${pub.volume}(${pub.issue || ''}) ${pub.pages}, ${pub.year}
                </p>
                <div class="flex items-center gap-2 text-xs text-slate-400">
                    <span class="font-medium text-slate-500">${pub.authors}</span>
                </div>
            </div>
        `;
        list.appendChild(div);
    });
}

function renderAcademicCitizenship(ac) {
    const container = document.getElementById('academic-citizenship');

    let content = `
        <div>
            <h3 class="text-sm font-bold uppercase tracking-widest text-slate-500 mb-4">Leadership Roles</h3>
            <ul class="space-y-4">
                ${ac.leadership_roles.map(role => `
                    <li class="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-100 dark:border-slate-800/50 pb-2 last:border-0">
                        <div class="font-medium text-slate-700 dark:text-slate-300">
                            ${role.role}
                            <span class="block text-xs font-normal text-slate-500">${role.organization}</span>
                        </div>
                        <span class="text-xs font-mono text-slate-400 mt-1 sm:mt-0">${role.year || role.years}</span>
                    </li>
                `).join('')}
            </ul>
        </div>
        <div>
            <h3 class="text-sm font-bold uppercase tracking-widest text-slate-500 mb-4">Invited Presentations</h3>
            <ul class="space-y-4">
                ${ac.invited_presentations.map(pres => `
                    <li class="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-100 dark:border-slate-800/50 pb-2 last:border-0">
                        <div class="font-medium text-slate-700 dark:text-slate-300">
                            ${pres.link ? `<a href="${pres.link}" target="_blank" class="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors inline-flex items-center gap-1 group">"${pres.title}" <i data-lucide="external-link" class="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity"></i></a>` : `"${pres.title}"`}
                            <span class="block text-xs font-normal text-slate-500">${pres.role} @ ${pres.organization}</span>
                        </div>
                        <span class="text-xs font-mono text-slate-400 mt-1 sm:mt-0">${pres.year}</span>
                    </li>
                `).join('')}
            </ul>
        </div>
    `;
    container.innerHTML = content;
}

function renderAwards(awards) {
    const list = document.getElementById('awards-list');
    awards.forEach(award => {
        const li = document.createElement('li');
        li.className = 'flex items-start gap-2.5 text-slate-700 dark:text-slate-300 text-sm leading-relaxed';
        li.innerHTML = `<span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>${award}`;
        list.appendChild(li);
    });
}

function initTypewriter() {
    const statusLines = [
        "Initializing Agentic AI Pipelines...",
        "Querying Women's Health Knowledge Graphs...",
        "Optimizing Parallel Bio-Clustering Algorithms...",
        "Evaluating RAG Safety Metrics...",
        "Status: Online & Ready to Innovate."
    ];
    let lineIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    const typedTextSpan = document.getElementById('typed-text');

    function type() {
        const currentLine = statusLines[lineIdx];
        if (isDeleting) {
            typedTextSpan.textContent = currentLine.substring(0, charIdx - 1);
            charIdx--;
        } else {
            typedTextSpan.textContent = currentLine.substring(0, charIdx + 1);
            charIdx++;
        }

        let typeSpeed = isDeleting ? 30 : 50;

        if (!isDeleting && charIdx === currentLine.length) {
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIdx === 0) {
            isDeleting = false;
            lineIdx = (lineIdx + 1) % statusLines.length;
            typeSpeed = 500;
        }

        setTimeout(type, typeSpeed);
    }
    type();
}

function initParticles() {
    const canvas = document.getElementById('particle-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let particles = [];

    function resize() {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
    }
    window.addEventListener('resize', resize);
    resize();

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * 0.2;
            this.vy = (Math.random() - 0.5) * 0.2;
            this.radius = Math.random() * 1.5;
        }
        update() {
            this.x += this.vx;
            this.y += this.vy;
            if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
            if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = document.documentElement.classList.contains('dark') ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)';
            ctx.fill();
        }
    }

    for (let i = 0; i < 50; i++) particles.push(new Particle());

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.update();
            p.draw();
        });

        // Connections
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 100) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = document.documentElement.classList.contains('dark') ? `rgba(255,255,255,${0.1 * (1 - dist / 100)})` : `rgba(0,0,0,${0.05 * (1 - dist / 100)})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        }
        requestAnimationFrame(animate);
    }
    animate();
}

function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));
}

function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! This is a demo form.');
        form.reset();
    });
}
