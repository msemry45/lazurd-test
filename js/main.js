// Main JavaScript for Lazurd Services

// Import services data
import { SERVICES, getServicesByCategory, getServiceById, getWhatsAppNumber } from '../data/services.js';

console.log('Services module imported successfully');
console.log('Total services available:', SERVICES.length);

// Global variables
let currentCategory = '';
let currentService = null;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded');
    initializeApp();
});

function initializeApp() {
    console.log('Initializing app...');
    
    // Add smooth scrolling to all links
    addSmoothScrolling();
    
    // Initialize service pages
    initializeServicePages();
    
    // Add FAQ functionality
    initializeFAQ();
    
    // Add WhatsApp functionality
    initializeWhatsApp();
    
    // Initialize theme
    initializeTheme();
    
    // Add animations
    addAnimations();
    
    // Add header scroll effect
    addHeaderScrollEffect();
    
    console.log('App initialization complete');
}

// Add smooth scrolling
function addSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Initialize service pages
function initializeServicePages() {
    const urlParams = new URLSearchParams(window.location.search);
    const serviceId = urlParams.get('service');
    const category = getCategoryFromUrl();
    
    console.log('Initializing service pages...');
    console.log('Service ID from URL:', serviceId);
    console.log('Category from URL:', category);
    
    if (serviceId) {
        loadServiceDetails(serviceId);
    } else if (category) {
        loadCategoryServices(category);
    } else {
        console.log('No service ID or category found in URL');
    }
}

// Get category from URL
function getCategoryFromUrl() {
    const path = window.location.pathname;
    console.log('Current path:', path);
    
    if (path.includes('teachers')) {
        console.log('Detected teachers category');
        return 'teachers';
    }
    if (path.includes('universities')) {
        console.log('Detected universities category');
        return 'universities';
    }
    if (path.includes('design-tech')) {
        console.log('Detected design-tech category');
        return 'design-tech';
    }
    
    console.log('No category detected in URL');
    return null;
}

// Load category services
function loadCategoryServices(category) {
    currentCategory = category;
    const services = getServicesByCategory(category);
    const container = document.getElementById('services-container');
    
    console.log('Loading services for category:', category);
    console.log('Services found:', services.length);
    console.log('Container found:', !!container);
    
    if (container) {
        container.innerHTML = generateServicesGrid(services);
        addServiceCardListeners();
        console.log('Services loaded successfully');
    } else {
        console.error('Services container not found!');
    }
}

// Generate services grid HTML
function generateServicesGrid(services) {
    console.log('Generating services grid for', services.length, 'services');
    const html = `
        <div class="services-grid">
            ${services.map(service => generateServiceCard(service)).join('')}
        </div>
    `;
    console.log('Generated HTML length:', html.length);
    return html;
}

// Generate service card HTML
function generateServiceCard(service) {
    const categoryColors = {
        teachers: 'blue',
        universities: 'indigo',
        'design-tech': 'purple'
    };
    
    const color = categoryColors[service.category] || 'blue';
    
    console.log('Generating card for service:', service.title);
    
    return `
        <div class="service-card bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer" data-service-id="${service.id}">
            <div class="w-16 h-16 bg-${color}-100 rounded-2xl flex items-center justify-center mb-4">
                <svg class="w-8 h-8 text-${color}-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-3">${service.title}</h3>
            <p class="text-gray-600 mb-4">${service.shortDesc}</p>
            <div class="flex justify-between items-center">
                <button class="btn-primary" onclick="viewServiceDetails('${service.id}')">
                    تفاصيل الخدمة
                </button>
                <button class="whatsapp-btn" onclick="contactWhatsApp('${service.whatsappKey}', '${service.title}')">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                    تواصل
                </button>
            </div>
        </div>
    `;
}

// Add service card listeners
function addServiceCardListeners() {
    const cards = document.querySelectorAll('.service-card');
    console.log('Adding listeners to', cards.length, 'service cards');
    cards.forEach(card => {
        card.addEventListener('click', function(e) {
            if (!e.target.closest('button')) {
                const serviceId = this.dataset.serviceId;
                console.log('Card clicked, service ID:', serviceId);
                viewServiceDetails(serviceId);
            }
        });
    });
}

// Load service details
function loadServiceDetails(serviceId) {
    console.log('Loading service details for:', serviceId);
    const service = getServiceById(serviceId);
    if (!service) {
        console.error('Service not found:', serviceId);
        return;
    }
    
    console.log('Service found:', service.title);
    currentService = service;
    const container = document.getElementById('service-details-container');
    
    if (container) {
        container.innerHTML = generateServiceDetailsHTML(service);
        container.classList.remove('hidden'); // Show the details container
        document.getElementById('services').classList.add('hidden'); // Hide services grid
        initializeFAQ();
        console.log('Service details loaded successfully');
    } else {
        console.error('Service details container not found!');
    }
}

// Generate service details HTML
function generateServiceDetailsHTML(service) {
    const categoryNames = {
        teachers: 'خدمات المعلمين',
        universities: 'خدمات الجامعات',
        'design-tech': 'التصميم والتقنية'
    };
    
    return `
        <div class="max-w-4xl mx-auto">
            <!-- Breadcrumb -->
            <div class="breadcrumb mb-8">
                <a href="index.html">الرئيسية</a>
                <span class="separator">/</span>
                <a href="${service.category}.html">${categoryNames[service.category]}</a>
                <span class="separator">/</span>
                <span>${service.title}</span>
            </div>
            
            <!-- Service Header -->
            <div class="service-header bg-white/80 backdrop-blur-md rounded-3xl p-8 mb-8 shadow-xl">
                <div class="flex items-center space-x-4 space-x-reverse mb-6">
                    <div class="w-20 h-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center">
                        <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                    </div>
                    <div>
                        <h1 class="text-4xl font-bold text-gray-800 mb-2">${service.title}</h1>
                        <p class="text-xl text-gray-600">${service.shortDesc}</p>
                    </div>
                </div>
                <button class="whatsapp-btn" onclick="contactWhatsApp('${service.whatsappKey}', '${service.title}')">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                    تواصل معنا عبر واتساب
                </button>
            </div>
            
            <!-- Service Details -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div class="lg:col-span-2">
                    <div class="service-detail">
                        <h3>ماذا ستحصل؟</h3>
                        <p class="text-gray-700 leading-relaxed">${service.details.whatYouGet}</p>
                    </div>
                    
                    <div class="service-detail">
                        <h3>لمن هذه الخدمة؟</h3>
                        <p class="text-gray-700 leading-relaxed">${service.details.forWhom}</p>
                    </div>
                    
                    <div class="service-detail">
                        <h3>خطوات التنفيذ</h3>
                        <ol class="list-decimal list-inside space-y-2 text-gray-700">
                            ${service.details.steps.map((step, index) => `
                                <li class="leading-relaxed">${step}</li>
                            `).join('')}
                        </ol>
                    </div>
                    
                    <div class="service-detail">
                        <h3>المتطلبات من العميل</h3>
                        <p class="text-gray-700 leading-relaxed">${service.details.requirements}</p>
                    </div>
                    
                    <div class="service-detail">
                        <h3>المدة والسعر</h3>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div class="bg-blue-50 p-4 rounded-xl">
                                <h4 class="font-bold text-blue-800 mb-2">المدة الزمنية</h4>
                                <p class="text-blue-700">${service.details.duration}</p>
                            </div>
                            <div class="bg-green-50 p-4 rounded-xl">
                                <h4 class="font-bold text-green-800 mb-2">السعر</h4>
                                <p class="text-green-700">${service.details.price}</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="service-detail">
                        <h3>أسئلة شائعة</h3>
                        <div class="faq-container">
                            <div class="faq-item">
                                <div class="faq-question">
                                    كيف يمكنني طلب هذه الخدمة؟
                                </div>
                                <div class="faq-answer">
                                    يمكنك التواصل معنا عبر واتساب أو الاتصال بنا مباشرة لطلب الخدمة وتحديد التفاصيل.
                                </div>
                            </div>
                            <div class="faq-item">
                                <div class="faq-question">
                                    ما هي المدة المطلوبة لإنجاز الخدمة؟
                                </div>
                                <div class="faq-answer">
                                    المدة تختلف حسب طبيعة الخدمة وتعقيدها، ويمكن تحديدها بدقة عند طلب الخدمة.
                                </div>
                            </div>
                            <div class="faq-item">
                                <div class="faq-question">
                                    هل يمكن تعديل الخدمة حسب احتياجاتي؟
                                </div>
                                <div class="faq-answer">
                                    نعم، نقدم خدمات مخصصة حسب احتياجات كل عميل ويمكن تعديل الخدمة حسب متطلباتك.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Sidebar -->
                <div class="sidebar">
                    <h3 class="text-xl font-bold text-gray-800 mb-4">تواصل معنا</h3>
                    <button class="whatsapp-btn w-full mb-4" onclick="contactWhatsApp('${service.whatsappKey}', '${service.title}')">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                        </svg>
                        طلب الخدمة عبر واتساب
                    </button>
                    
                    <div class="bg-gray-50 p-4 rounded-xl">
                        <h4 class="font-bold text-gray-800 mb-2">معلومات سريعة</h4>
                        <div class="space-y-2 text-sm text-gray-600">
                            <div class="flex justify-between">
                                <span>المدة:</span>
                                <span>${service.details.duration}</span>
                            </div>
                            <div class="flex justify-between">
                                <span>السعر:</span>
                                <span>${service.details.price}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Initialize FAQ functionality
function initializeFAQ() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const isActive = answer.classList.contains('active');
            
            // Close all other answers
            document.querySelectorAll('.faq-answer').forEach(ans => {
                ans.classList.remove('active');
            });
            
            // Toggle current answer
            if (!isActive) {
                answer.classList.add('active');
            }
        });
    });
}

// Initialize WhatsApp functionality
function initializeWhatsApp() {
    // WhatsApp buttons are handled by onclick events
}

// Theme management
function initializeTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');
    
    // Get saved theme from localStorage
    const savedTheme = localStorage.getItem('theme') || 'light';
    
    // Apply saved theme
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        if (sunIcon) sunIcon.classList.remove('hidden');
        if (moonIcon) moonIcon.classList.add('hidden');
    } else {
        document.body.classList.remove('dark-mode');
        if (sunIcon) sunIcon.classList.add('hidden');
        if (moonIcon) moonIcon.classList.remove('hidden');
    }
    
    // Theme toggle functionality
    if (themeToggle) {
        themeToggle.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Check current theme from localStorage instead of DOM
            const currentTheme = localStorage.getItem('theme') || 'light';
            const isDark = currentTheme === 'dark';
            
            if (isDark) {
                // Switch to light mode
                document.body.classList.remove('dark-mode');
                if (sunIcon) sunIcon.classList.add('hidden');
                if (moonIcon) moonIcon.classList.remove('hidden');
                localStorage.setItem('theme', 'light');
            } else {
                // Switch to dark mode
                document.body.classList.add('dark-mode');
                if (sunIcon) sunIcon.classList.remove('hidden');
                if (moonIcon) moonIcon.classList.add('hidden');
                localStorage.setItem('theme', 'dark');
            }
        });
    }
}

// Contact WhatsApp function
function contactWhatsApp(key, serviceTitle) {
    const number = getWhatsAppNumber(key);
    const message = encodeURIComponent(`مرحبا، مهتم بـ ${serviceTitle}`);
    const url = `https://wa.me/${number}?text=${message}`;
    
    // Track WhatsApp click event
    if (typeof gtag !== 'undefined') {
        gtag('event', 'whatsapp_click', {
            'event_category': key,
            'event_label': serviceTitle,
            'value': 1
        });
    }
    
    window.open(url, '_blank');
}

// View service details function
function viewServiceDetails(serviceId) {
    console.log('Viewing service details for:', serviceId);
    
    // Track service view event
    if (typeof gtag !== 'undefined') {
        gtag('event', 'service_view', {
            'event_category': 'service_details',
            'event_label': serviceId,
            'value': 1
        });
    }
    
    const url = new URL(window.location);
    url.searchParams.set('service', serviceId);
    window.location.href = url.toString();
}

// Add animations
function addAnimations() {
    // Add fade-in animation to elements
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);
    
    // Observe all cards and sections
    const elements = document.querySelectorAll('.service-card, .service-detail, .card');
    elements.forEach(el => observer.observe(el));
}

// Add header scroll effect
function addHeaderScrollEffect() {
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.style.background = 'rgba(255, 255, 255, 0.98)';
                header.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.15)';
            } else {
                header.style.background = 'rgba(255, 255, 255, 0.95)';
                header.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
            }
        });
    }
}

// Export functions for global use
window.contactWhatsApp = contactWhatsApp;
window.viewServiceDetails = viewServiceDetails;
