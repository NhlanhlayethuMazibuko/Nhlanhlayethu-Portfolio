<<<<<<< HEAD
document.addEventListener('DOMContentLoaded', function() {
    const dom = {
        themeToggle: document.getElementById('theme-toggle'),
        body: document.body,
        header: document.getElementById('site-header'),
        sections: document.querySelectorAll('section[id], footer[id]'),
        navLinks: document.querySelectorAll('.nav-links a'),
        hamburger: document.getElementById('hamburger'),
        mobileMenu: document.getElementById('mobile-menu'),
        mobileLinks: document.querySelectorAll('.mobile-link'),
        anchorLinks: document.querySelectorAll('a[href^="#"]'),
        loadMoreBtn: document.getElementById('loadMoreBtn'),
        hiddenProjects: document.querySelectorAll('.hidden-project'),
        revealElements: document.querySelectorAll('.reveal'),
        loadMoreCertBtn: document.getElementById('loadMoreCertBtn'),
        hiddenCerts: document.querySelectorAll('.cert-card.hidden-cert')
    };

    const DEBUG = false;

    function logDebug(message) {
        if (DEBUG) {
            console.log(message);
        }
    }

    // 1. Dark Mode Toggle
    var savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        dom.body.classList.add('dark-mode');
    }

    dom.themeToggle.addEventListener('click', function() {
        dom.body.classList.toggle('dark-mode');
        var isDark = dom.body.classList.contains('dark-mode');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });


    // 2. Sticky Header Shadow
    window.addEventListener('scroll', function() {
        if (window.scrollY > 20) {
            dom.header.classList.add('scrolled');
        } else {
            dom.header.classList.remove('scrolled');
        }
    }, { passive: true });


    // 3. Active Nav Link on Scroll
    var sectionObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                dom.navLinks.forEach(function(link) {
                    link.classList.remove('active');
                });
                var match = document.querySelector('.nav-links a[href="#' + entry.target.id + '"]');
                if (match) {
                    match.classList.add('active');
                }
            }
        });
    }, {
        rootMargin: '-35% 0px -55% 0px'
    });

    dom.sections.forEach(function(section) {
        sectionObserver.observe(section);
    });


    // 4. Mobile Menu (Hamburger)
    dom.hamburger.addEventListener('click', function() {
        var isOpen = dom.hamburger.classList.toggle('open');
        dom.mobileMenu.classList.toggle('open', isOpen);
        dom.hamburger.setAttribute('aria-expanded', isOpen);
        dom.mobileMenu.setAttribute('aria-hidden', !isOpen);
    });

    dom.mobileLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            dom.hamburger.classList.remove('open');
            dom.mobileMenu.classList.remove('open');
            dom.hamburger.setAttribute('aria-expanded', false);
            dom.mobileMenu.setAttribute('aria-hidden', true);
        });
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && dom.mobileMenu.classList.contains('open')) {
            dom.hamburger.classList.remove('open');
            dom.mobileMenu.classList.remove('open');
            dom.hamburger.setAttribute('aria-expanded', false);
            dom.mobileMenu.setAttribute('aria-hidden', true);
        }
    });


    // 5. Smooth Scrolling
    dom.anchorLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            var targetId = this.getAttribute('href');
            if (targetId === '#') return;
            var target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                var navHeight = dom.header.offsetHeight;
                var targetY = target.getBoundingClientRect().top + window.pageYOffset - navHeight - 16;
                window.scrollTo({
                    top: targetY,
                    behavior: 'smooth'
                });
            }
        });
    });


    // 6. Load More Projects
    if (dom.loadMoreBtn && dom.hiddenProjects.length > 0) {
        dom.loadMoreBtn.addEventListener('click', function() {
            dom.hiddenProjects.forEach(function(project, index) {
                project.classList.remove('hidden-project');
                setTimeout(function() {
                    project.classList.add('visible');
                }, index * 100);
            });
            dom.loadMoreBtn.style.display = 'none';
        });
    }


    // 7. Scroll Reveal Animations
    var revealObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12
    });

    dom.revealElements.forEach(function(el) {
        revealObserver.observe(el);
    });


    // 8. Load More Certifications
    if (dom.loadMoreCertBtn && dom.hiddenCerts.length > 0) {
        dom.loadMoreCertBtn.addEventListener('click', function() {
            dom.hiddenCerts.forEach(function(cert, index) {
                cert.classList.remove('hidden-cert');
                setTimeout(function() {
                    cert.classList.add('visible');
                }, index * 100);
            });
            dom.loadMoreCertBtn.style.display = 'none';
        });
    }


    // 9. Console Greeting
    logDebug('Hey there, fellow developer!');
    logDebug('Portfolio - Nhlanhlayethu Mazibuko');
    logDebug('Feel free to reach out -> nhlacks55@gmail.com');

=======
document.addEventListener('DOMContentLoaded', function() {

    // [FIX] Cache all DOM elements at the very top. 
    // This prevents the browser from searching the DOM multiple times, making the script faster and more scalable.
    const dom = {
        themeToggle: document.getElementById('theme-toggle'),
        body: document.body,
        header: document.getElementById('site-header'),
        sections: document.querySelectorAll('section[id], footer[id]'),
        navLinks: document.querySelectorAll('.nav-links a'),
        hamburger: document.getElementById('hamburger'),
        mobileMenu: document.getElementById('mobile-menu'),
        mobileLinks: document.querySelectorAll('.mobile-link'),
        anchorLinks: document.querySelectorAll('a[href^="#"]'),
        loadMoreBtn: document.getElementById('loadMoreBtn'),
        hiddenProjects: document.querySelectorAll('.hidden-project'),
        revealElements: document.querySelectorAll('.reveal'),
        loadMoreCertBtn: document.getElementById('loadMoreCertBtn'),
        hiddenCerts: document.querySelectorAll('.cert-card.hidden-cert')
    };

    // [FIX] Added a Debug switch. When set to false, it will hide all console.logs in production.
    const DEBUG = false;

    // [FIX] Clean console logging helper
    function logDebug(message) {
        if (DEBUG) {
            console.log(message);
        }
    }

    // 1. Dark Mode Toggle
    var savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        dom.body.classList.add('dark-mode');
    }

    dom.themeToggle.addEventListener('click', function() {
        dom.body.classList.toggle('dark-mode');
        var isDark = dom.body.classList.contains('dark-mode');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });


    // 2. Sticky Header Shadow
    window.addEventListener('scroll', function() {
        if (window.scrollY > 20) {
            dom.header.classList.add('scrolled');
        } else {
            dom.header.classList.remove('scrolled');
        }
    }, { passive: true });


    // 3. Active Nav Link on Scroll
    var sectionObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                dom.navLinks.forEach(function(link) {
                    link.classList.remove('active');
                });
                var match = document.querySelector('.nav-links a[href="#' + entry.target.id + '"]');
                if (match) {
                    match.classList.add('active');
                }
            }
        });
    }, {
        rootMargin: '-35% 0px -55% 0px'
    });

    dom.sections.forEach(function(section) {
        sectionObserver.observe(section);
    });


    // 4. Mobile Menu (Hamburger)
    dom.hamburger.addEventListener('click', function() {
        var isOpen = dom.hamburger.classList.toggle('open');
        dom.mobileMenu.classList.toggle('open', isOpen);
        dom.hamburger.setAttribute('aria-expanded', isOpen);
        dom.mobileMenu.setAttribute('aria-hidden', !isOpen);
    });

    dom.mobileLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            dom.hamburger.classList.remove('open');
            dom.mobileMenu.classList.remove('open');
            dom.hamburger.setAttribute('aria-expanded', false);
            dom.mobileMenu.setAttribute('aria-hidden', true);
        });
    });

    // [FIX] Added keyboard support: Pressing the ESC key closes the mobile menu automatically.
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && dom.mobileMenu.classList.contains('open')) {
            dom.hamburger.classList.remove('open');
            dom.mobileMenu.classList.remove('open');
            dom.hamburger.setAttribute('aria-expanded', false);
            dom.mobileMenu.setAttribute('aria-hidden', true);
        }
    });


    // 5. Smooth Scrolling
    dom.anchorLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            var targetId = this.getAttribute('href');
            if (targetId === '#') return;
            var target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                var navHeight = dom.header.offsetHeight;
                var targetY = target.getBoundingClientRect().top + window.pageYOffset - navHeight - 16;
                window.scrollTo({
                    top: targetY,
                    behavior: 'smooth'
                });
            }
        });
    });


    // 6. Load More Projects
    // [FIX] Added safety checks so the code doesn't break if the button is missing.
    if (dom.loadMoreBtn && dom.hiddenProjects.length > 0) {
        dom.loadMoreBtn.addEventListener('click', function() {
            dom.hiddenProjects.forEach(function(project, index) {
                project.classList.remove('hidden-project');
                setTimeout(function() {
                    project.classList.add('visible');
                }, index * 100);
            });
            dom.loadMoreBtn.style.display = 'none';
        });
    }


    // 7. Scroll Reveal Animations
    var revealObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12
    });

    dom.revealElements.forEach(function(el) {
        revealObserver.observe(el);
    });


    // 8. Load More Certifications
    // [FIX] Added safety checks so the code doesn't break if the button is missing.
    if (dom.loadMoreCertBtn && dom.hiddenCerts.length > 0) {
        dom.loadMoreCertBtn.addEventListener('click', function() {
            dom.hiddenCerts.forEach(function(cert, index) {
                cert.classList.remove('hidden-cert');
                setTimeout(function() {
                    cert.classList.add('visible');
                }, index * 100);
            });
            dom.loadMoreCertBtn.style.display = 'none';
        });
    }


    // 9. Console Greeting
    // [FIX] Wrapped console logs in the DEBUG check so they don't show in a production environment
    logDebug('Hey there, fellow developer!');
    logDebug('Portfolio - Nhlanhlayethu Mazibuko');
    logDebug('Feel free to reach out -> nhlacks55@gmail.com');

>>>>>>> 8a54a2c534a5a5b3eca6acd08e21a6c7125e297d
});