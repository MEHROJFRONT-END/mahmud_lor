// REVEAL SCROLL ANIMATION

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll(){
  const windowHeight = window.innerHeight;

  revealElements.forEach(el=>{
    const elementTop = el.getBoundingClientRect().top;

    if(elementTop < windowHeight - 100){
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);


// LUCIDE ICONS

lucide.createIcons();


// FLOATING CALL BUTTON SHOW AFTER WHY TRUST

const floatingBtn = document.getElementById("floatingCall");
const whySection = document.querySelector(".why-trust");

window.addEventListener("scroll", ()=>{

  const trigger = whySection.offsetTop - 300;

  if(window.scrollY > trigger){
    floatingBtn.style.display="flex";
  } else {
    floatingBtn.style.display="none";
  }

});
lucide.createIcons();


const counters = document.querySelectorAll('.stat-number');

const startCount = (counter) => {
  const target = +counter.getAttribute('data-target');
  let count = 0;

  const duration = 2000; // 2 сония (метавонед 3000 кунед → боз сусттар)
  const frameRate = 60;
  const totalFrames = Math.round(duration / (1000 / frameRate));
  const increment = target / totalFrames;

  const update = () => {
    count += increment;

    if (count < target) {
      counter.innerText = Math.floor(count);
      requestAnimationFrame(update);
    } else {
      counter.innerText = target + "+";
    }
  };

  update();
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      startCount(entry.target);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

counters.forEach(counter => observer.observe(counter));


// FAQ accordion
document.querySelectorAll('.faq-question').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const item = btn.parentElement
    item.classList.toggle('active')
  })
})


// MODAL open
const modal = document.getElementById('contactModal')
document.getElementById('openModal').onclick = ()=> modal.style.display='flex'
document.getElementById('closeModal').onclick = ()=> modal.style.display='none'

// SEND TO WHATSAPP
document.getElementById('sendWhatsapp').onclick = ()=>{

  const name = document.getElementById('name').value
  const phone = document.getElementById('phone').value
  const question = document.getElementById('question').value

  const message =
  `Patient request:%0A%0AName: ${name}%0APhone: ${phone}%0AQuestion: ${question}`

  window.open(`https://wa.me/992907603538?text=${message}`, '_blank')
}


// Smooth hover micro animations
document.querySelectorAll(".info-card").forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.boxShadow = "0 25px 50px rgba(0,0,0,0.12)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.boxShadow = "0 15px 35px rgba(0,0,0,0.06)";
  });
});






function detectUserLanguage() {
  const savedLang = localStorage.getItem("lang");
  if (savedLang) return savedLang;

  const browserLang = navigator.language.toLowerCase();

  if (browserLang.includes("ru")) return "ru";
  if (browserLang.includes("tg") || browserLang.includes("tj")) return "tj";

  return "en";
}









const translations = {

  en: {
    nav_home: "Home",
    nav_services: "Services",
    nav_about: "About Doctor",
    nav_contact: "Contact",
    hero_badge: "24/7 Availability",
    hero_title: "Professional ENT Care You Can Trust",
    hero_text: "3 years of clinical experience in treating ear, nose, and throat conditions.",
    hero_btn_book: "Book Appointment",
    hero_btn_online: "Online Consultation",
    doctor_name: "Nazarov Mahmudjon",
    doctor_spec: "ENT Specialist",
    doctor_exp: "3 Years Clinical Experience",
    stat_experience: "Years Experience",
    stat_patients: "Patients",
    stat_services: "Services",
    trust_title: "Why Trust Me",
    trust_exp_title: "3 Years Experience",
    trust_exp_desc: "Extensive experience in treating ENT diseases",
    trust_modern_title: "Modern Equipment",
    trust_modern_desc: "Advanced diagnostic and treatment technologies", 
    trust_individual_title: "Individual Approach",
    trust_individual_desc: "Personalized treatment plan for each patient",
    trust_clinic_title: "MedLife Clinic",
    trust_clinic_title_desc: "Partnership with modern medical center",
    services_title: "Services",
    services_sub: "Comprehensive ENT care with modern diagnostic and treatment methods",
    srv1: "Sinusitis Treatment",
    srv2: "Otitis Treatment",
    srv3: "Adenoids Treatment",
    srv4: "Ear Cleaning",
    srv5: "Endoscopy",
    srv6: "Audiology",
    srv7: "Nose & Throat Diseases",
    srv8: "Consultation for Children & Adults",
    srv9: "Preventive ENT Diagnostics",
    services_btn: "Book a Service",
    choose_title: "Why Choose Me",
choose_sub: "Patient-centered approach with proven results and modern medical standards",

choose1_title: "Accurate Diagnosis",
choose1_desc: "Modern equipment for timely and accurate diagnosis",

choose2_title: "Individual Approach",
choose2_desc: "Personalized treatment plan for every patient",

choose3_title: "Modern Methods",
choose3_desc: "Using latest technologies and treatment methods",

choose4_title: "Quick Treatment",
choose4_desc: "Effective and timely treatment",

choose5_title: "Patient Trust",
choose5_desc: "Many satisfied patients and high ratings",

choose6_title: "Working with Children",
choose6_desc: "Special experience in treating children",
equip_title: "Modern Equipment & Proven Methods",
equip_text: "At MedLife Clinic, we use state-of-the-art diagnostic equipment to ensure accurate diagnosis and effective treatment. Every patient receives personalized care tailored to their specific condition.",

equip_li1: "Advanced endoscopic equipment for precise diagnosis",
equip_li2: "Comprehensive audiological testing facilities",
equip_li3: "Sterile and comfortable treatment environment",
book_title: "Book Appointment",
book_sub: "Contact us for appointment or online consultation",

book_whatsapp: "WhatsApp",
book_call: "Call Now",
book_instagram: "Instagram",

book_online: "Online consultation available",
book_phone_label: "Phone / WhatsApp",
book_inst_label: "Instagram",

book_time: "Available for consultation: Monday - Saturday, 9:00 - 18:00",
reviews_title: "Patient Reviews",
reviews_sub: "What our patients say about their experience",

review1_text: "Professional doctor! Sinusitis treatment was very successful. Thank you!",
review2_text: "The doctor helped my child. Very grateful!",
review3_text: "Accurate diagnosis and effective treatment. Highly recommend!",

review_city: "Dushanbe",

stat_success: "Success Rate",
faq_title: "Frequently Asked Questions",

faq_q1: "Is online consultation available?",
faq_a1: "Yes, we offer online consultations via WhatsApp and Instagram. Contact us to schedule.",

faq_q2: "How can I book an appointment?",
faq_a2: "You can book by phone, WhatsApp, or Instagram.",

faq_q3: "Do you work with children?",
faq_a3: "Yes, we treat both children and adults. We have experience in pediatric ENT care.",

faq_q4: "Where is the clinic located?",
faq_a4: "Tajikistan, Dushanbe, Vodonasos, opposite Selkhoz Institute.",

faq_contact_title: "Still have questions?",
faq_contact_text: "Contact us directly for personalized answers",
faq_contact_btn: "Contact Us",
modal_title: "Ask your question",
modal_name: "Full Name",
modal_phone: "Phone number",
modal_question: "Write your question...",
modal_btn: "Send request",
loc_title: "Our Location",
loc_address: "Address",
loc_address_text: "Tajikistan, Dushanbe, Vodonasos, opposite Selkhoz Institute, near KFC",
loc_clinic: "MedLife Clinic",

loc_phone: "Phone",
loc_whatsapp: "WhatsApp available",

loc_hours: "Working Hours",
loc_time: "Monday - Saturday: 9:00 - 18:00",
loc_sunday: "Sunday: Closed",

loc_get: "Get Directions",
loc_near: "Near KFC, opposite Selkhoz Institute",
loc_btn: "Open in Maps",
footer_spec: "ENT Specialist",
footer_desc: "Professional ENT care with modern equipment and individual approach to every patient.",

footer_services: "Services",
footer_contact: "Contact",
footer_follow: "Follow Us",

footer_address: "Dushanbe, Vodonasos, opposite Selkhoz Institute",
footer_clinic: "MedLife Clinic",

footer_emergency: "Emergency Contact",

footer_copy: "© 2026 ENT Doctor Nazarov Mahmudjon. All rights reserved.",
footer_note: "Website designed for patient care and online consultations",
footer_name_doctor: "Dr. Mahmud",
float_btn: "Book Now"
  },

  ru: {
    nav_home: "Главная",
    nav_services: "Услуги",
    nav_about: "О враче",
    nav_contact: "Контакты",
    hero_badge: "Доступно 24/7",
    hero_title: "Лечение заболеваний уха, носа и горла.",
    hero_text: "3 года клинического опыта в оториноларингологии.",
    hero_btn_book: "Записаться",
    hero_btn_online: "Онлайн - консультация",
    doctor_name: "Назаров Махмуджон",
    doctor_spec: "ЛОР-врач",
    doctor_exp: "3 года клинического опыта",
    stat_experience: "Года опыта",
    stat_patients: "Довольные пациенты",
    stat_services: "Услуги",
    trust_title: "Почему мне доверяют",
    trust_exp_title: "3 года опыта",
    trust_exp_desc: "Большой опыт лечения ЛОР заболеваний",
    trust_modern_title: "Современное оборудование",
    trust_modern_desc: "Современные технологии диагностики и лечения",
    trust_individual_title: "Индивидуальный подход",
    trust_individual_desc: "Индивидуальный план лечения для каждого пациента",
    trust_clinic_title: "Клиника MedLife",
    trust_clinic_title_desc: "Сотрудничество с современной клиникой",
    services_title: "Услуги",
    services_sub: "Комплексное лечение ЛОР заболеваний с использованием современных методов",
    srv1: "Лечение синусита",
    srv2: "Лечение отита",
    srv3: "Лечение аденоидов",
    srv4: "Чистка ушей",
    srv5: "Эндоскопия",
    srv6: "Аудиология",
    srv7: "Заболевания носа и горла",
    srv8: "Консультация для детей и взрослых",
    srv9: "Профилактическая ЛОР диагностика",
    services_btn: "Записаться на услугу",
    choose_title: "Почему выбирают меня",
choose_sub: "Ориентированный на пациента подход и современные медицинские стандарты",

choose1_title: "Точная диагностика",
choose1_desc: "Современное оборудование для точной диагностики",

choose2_title: "Индивидуальный подход",
choose2_desc: "Персональный план лечения для каждого пациента",

choose3_title: "Современные методы",
choose3_desc: "Использование новейших технологий лечения",

choose4_title: "Быстрое лечение",
choose4_desc: "Эффективное и своевременное лечение",

choose5_title: "Доверие пациентов",
choose5_desc: "Множество довольных пациентов и высокие оценки",

choose6_title: "Работа с детьми",
choose6_desc: "Опыт лечения детей",
equip_title: "Современное оборудование и проверенные методы",
equip_text: "В клинике MedLife мы используем современное диагностическое оборудование для точной диагностики и эффективного лечения. Каждый пациент получает индивидуальный подход.",

equip_li1: "Современное эндоскопическое оборудование для точной диагностики",
equip_li2: "Полное аудиологическое обследование слуха",
equip_li3: "Стерильная и комфортная среда лечения",
book_title: "Запись на приём",
book_sub: "Свяжитесь с нами для записи или онлайн консультации",

book_whatsapp: "WhatsApp",
book_call: "Позвонить",
book_instagram: "Instagram",

book_online: "Доступна онлайн консультация",
book_phone_label: "Телефон / WhatsApp",
book_inst_label: "Instagram",

book_time: "Время консультации: Понедельник - Суббота, 9:00 - 18:00",
book_title: "Запись на приём",
book_sub: "Свяжитесь с нами для записи или онлайн консультации",

book_whatsapp: "WhatsApp",
book_call: "Позвонить",
book_instagram: "Instagram",

book_online: "Доступна онлайн консультация",
book_phone_label: "Телефон / WhatsApp",
book_inst_label: "Instagram",

book_time: "Время консультации: Понедельник - Суббота, 9:00 - 18:00",
reviews_title: "Отзывы пациентов",
reviews_sub: "Что говорят наши пациенты",

review1_text: "Профессиональный врач! Лечение синусита прошло успешно. Спасибо!",
review2_text: "Доктор помог моему ребёнку. Очень благодарны!",
review3_text: "Точный диагноз и эффективное лечение. Рекомендую!",

review_city: "Душанбе",

stat_success: "Успешность лечения",
faq_title: "Часто задаваемые вопросы",

faq_q1: "Доступна ли онлайн консультация?",
faq_a1: "Да, мы проводим онлайн консультации через WhatsApp и Instagram.",

faq_q2: "Как записаться на приём?",
faq_a2: "Вы можете записаться по телефону, WhatsApp или Instagram.",

faq_q3: "Вы работаете с детьми?",
faq_a3: "Да, мы лечим как детей, так и взрослых.",

faq_q4: "Где находится клиника?",
faq_a4: "Таджикистан, Душанбе, Водонасос, напротив Сельхоз института.",

faq_contact_title: "Остались вопросы?",
faq_contact_text: "Свяжитесь с нами для персональной консультации",
faq_contact_btn: "Связаться",
modal_title: "Задать вопрос",
modal_name: "Ваше имя",
modal_phone: "Номер телефона",
modal_question: "Напишите ваш вопрос...",
modal_btn: "Отправить",
loc_title: "Наш адрес",
loc_address: "Адрес",
loc_address_text: "Таджикистан, Душанбе, Водонасос, напротив Сельхоз института, рядом KFC",
loc_clinic: "Клиника MedLife",

loc_phone: "Телефон",
loc_whatsapp: "Доступен WhatsApp",

loc_hours: "Рабочие часы",
loc_time: "Понедельник - Суббота: 9:00 - 18:00",
loc_sunday: "Воскресенье: выходной",

loc_get: "Как добраться",
loc_near: "Рядом KFC, напротив Сельхоз института",
loc_btn: "Открыть карту",
footer_spec: "ЛОР-врач",
footer_desc: "Профессиональное лечение ЛОР заболеваний с современным оборудованием и индивидуальным подходом.",

footer_services: "Услуги",
footer_contact: "Контакты",
footer_follow: "Мы в соцсетях",

footer_address: "Душанбе, Водонасос, напротив Сельхоз института",
footer_clinic: "Клиника MedLife",

footer_emergency: "Экстренный контакт",

footer_copy: "© 2026 ЛОР врач Назаров Махмуджон. Все права защищены.",
footer_note: "Сайт создан для записи пациентов и онлайн консультаций",
footer_name_doctor: "Др. Махмуд",
float_btn: "Записаться"
  },

  tj: {
    nav_home: "Асосӣ",
    nav_services: "Хизматрасониҳо",
    nav_about: "Дар бораи духтур",
    nav_contact: "Тамос",
    hero_badge: "Дастрас 24/7",
    hero_title: "ТАБОБАТИ ГУШ, ГУЛУ ВА БИНИ",
    hero_text: "3 сол таҷрибаи клиникӣ дар табобати Оториноларингологи.",
    hero_btn_book: "Номнавис шудан",
    hero_btn_online: "Онлайн - консултатсия",
    doctor_name: "Назаров Маҳмудҷон",
    doctor_spec: "Духтури ЛОР",
    doctor_exp: "3 сол таҷрибаи клиникӣ",
    stat_experience: "Сол таҷрибаи корӣ",
    stat_patients: "Беморони қаноатманд",
    stat_services: "Хизматрасониҳо",
    trust_title: "Чаро ба ман бовар мекунанд",
    trust_exp_title: "3 сол таҷрибаи корӣ",
    trust_exp_desc: "Таҷрибаи калон дар табобати бемориҳои гӯш, гулу ва бинӣ",
    trust_modern_title: "Таҷҳизоти муосир",
    trust_modern_desc: "Технологияҳои муосир барои ташхис ва табобат",
    trust_individual_title: "Муносибати инфиродӣ",
    trust_individual_desc: "Нақшаи табобати инфиродӣ барои ҳар бемор",
    trust_clinic_title: "Маркази муосири тиббии MedLife",
    trust_clinic_title_desc: "Ҳамкорӣ бо маркази муосири тиббӣ",
    services_title: "Хизматрасониҳо",
    services_sub: "Табобати пурраи бемориҳои ЛОР бо истифода аз усулҳои муосир",
    srv1: "Табобати синусит",
    srv2: "Табобати отит",
    srv3: "Табобати аденоид",
    srv4: "Тозакунии гӯш",
    srv5: "Эндоскопия",
    srv6: "Аудиология",
    srv7: "Бемориҳои бинӣ ва гулу",
    srv8: "Машварат барои кӯдакон ва калонсолон",
    srv9: "Ташхиси пешгирикунандаи ЛОР",
    services_btn: "Номнавис шудан",
    choose_title: "Чаро маро интихоб мекунанд",
choose_sub: "Муносибати ба бемор равонашуда ва стандартҳои муосири тиббӣ",

choose1_title: "Ташхиси дақиқ",
choose1_desc: "Таҷҳизоти муосир барои ташхиси саривақтӣ",

choose2_title: "Табобати инфиродӣ",
choose2_desc: "Нақшаи табобати инфиродӣ барои ҳар бемор",

choose3_title: "Усулҳои муосир",
choose3_desc: "Истифодаи технологияҳои навтарин барои табобат",

choose4_title: "Табобати зуд",
choose4_desc: "Табобати самаранок ва саривақтӣ",

choose5_title: "Боварии беморон",
choose5_desc: "Бисёр беморони қаноатманд ва баҳогузории баланд",

choose6_title: "Кор бо кӯдакон",
choose6_desc: "Таҷрибаи махсус дар табобати кӯдакон",
equip_title: "Таҷҳизоти муосир ва усулҳои санҷидашуда",
equip_text: "Дар клиникаи MedLife мо аз таҷҳизоти муосири ташхисӣ истифода мебарем, то ташхиси дақиқ ва табобати самаранок таъмин карда шавад. Ҳар як бемор нигоҳубини инфиродӣ мегирад.",

equip_li1: "Таҷҳизоти муосири эндоскопӣ барои ташхиси дақиқ",
equip_li2: "Санҷишҳои пурраи шунавоӣ ва аудиология",
equip_li3: "Муҳити стерилӣ ва бароҳат барои табобат",
book_title: "Номнавис ба қабули духтур",
book_sub: "Барои қабули духтур ё онлайн консультация бо мо тамос гиред",

book_whatsapp: "WhatsApp",
book_call: "Занг задан",
book_instagram: "Instagram",

book_online: "Онлайн консультация дастрас аст",
book_phone_label: "Телефон / WhatsApp",
book_inst_label: "Instagram",

book_time: "Вақти корӣ: Душанбе - Шанбе, 9:00 - 18:00",
reviews_title: "Фикру мулоҳизаи беморон",
reviews_sub: "Андешаи беморон дар бораи табобат",

review1_text: "Духтури касбӣ! Табобати синусит хеле хуб гузашт. Ташаккур!",
review2_text: "Духтур ба фарзанди ман кӯмак кард. Бисёр миннатдорем!",
review3_text: "Ташхиси дақиқ ва табобати самаранок. Тавсия медиҳам!",

review_city: "Душанбе",

stat_success: "Натиҷаи муваффақ",
faq_title: "Саволҳои маъмул",

faq_q1: "Оё онлайн консультация ҳаст?",
faq_a1: "Бале, мо онлайн консультация тавассути WhatsApp ва Instagram дорем.",

faq_q2: "Чӣ гуна ба қабули духтур номнавис шавам?",
faq_a2: "Шумо метавонед тавассути телефон, WhatsApp ё Instagram номнавис шавед.",

faq_q3: "Оё бо кӯдакон кор мекунед?",
faq_a3: "Бале, мо ҳам кӯдакон ва ҳам калонсолонро табобат мекунем.",

faq_q4: "Клиника дар куҷо ҷойгир аст?",
faq_a4: "Тоҷикистон, Душанбе, Воданасос, рӯ ба рӯи Селхоз институт.",

faq_contact_title: "Саволи иловагӣ доред?",
faq_contact_text: "Барои ҷавоби шахсӣ бо мо тамос гиред",
faq_contact_btn: "Тамос гирифтан",
modal_title: "Саволи худро нависед",
modal_name: "Ному насаб",
modal_phone: "Рақами телефон",
modal_question: "Саволи худро нависед...",
modal_btn: "Фиристодан",
loc_title: "Суроғаи мо",
loc_address: "Суроға",
loc_address_text: "Тоҷикистон, шаҳри Душанбе, Воданасос, рӯ ба рӯи Селхоз институт, назди KFC",
loc_clinic: "Маркази MedLife",

loc_phone: "Телефон",
loc_whatsapp: "WhatsApp дастрас аст",

loc_hours: "Соатҳои корӣ",
loc_time: "Душанбе - Шанбе: 9:00 - 18:00",
loc_sunday: "Якшанбе: Рузи кори нест !",

loc_get: "Суроғаро гирифтан",
loc_near: "Назди KFC, рӯ ба рӯи Селхоз институт",
loc_btn: "Кушодани харита",
footer_spec: "Мутахассиси ЛОР",
footer_desc: "Табобати касбии гӯш, гулу ва бинӣ бо таҷҳизоти муосир ва муносибати инфиродӣ.",

footer_services: "Хизматрасониҳо",
footer_contact: "Тамос",
footer_follow: "Моро пайгирӣ кунед",

footer_address: "Душанбе, Воданасос, рӯ ба рӯи Селхоз институт",
footer_clinic: "Маркази MedLife",

footer_emergency: "Тамоси фаврӣ",

footer_copy: "© 2026 Духтури ЛОР Назаров Маҳмудҷон. Ҳама ҳуқуқҳо ҳифз шудаанд.",
footer_note: "Сайт барои қабули беморон ва онлайн консультация сохта шудааст",
footer_name_doctor: "Др. Махмуд",
float_btn: "Номнавис шудан"
  }

};




const buttons = document.querySelectorAll("[data-lang]");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {

    const lang = btn.getAttribute("data-lang");

    document.querySelectorAll("[data-key]").forEach(el => {
      el.textContent = translations[lang][el.dataset.key];
    });

    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

  });
});







const langButtons = document.querySelectorAll(".lang-switch button");

// load saved language
let currentLang = detectUserLanguage();

setLanguage(currentLang);

langButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const lang = btn.textContent.toLowerCase();

    setLanguage(lang);
    localStorage.setItem("lang", lang);

    langButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  });
});

function setLanguage(lang) {
  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.getAttribute("data-key");

    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  // PLACEHOLDER TRANSLATE 🔥
  document.querySelectorAll("[data-key-placeholder]").forEach(el=>{
    const key = el.getAttribute("data-key-placeholder");

    if (translations[lang] && translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });

  // active button auto
  langButtons.forEach(b=>{
    b.classList.remove("active");
    if(b.textContent.toLowerCase()===lang){
      b.classList.add("active");
    }
  });
}























