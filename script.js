document.addEventListener("DOMContentLoaded", () => {
  // Initialize Hero Slider
  const heroSwiper = new Swiper(".hero-slider", {
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".hero__next",
      prevEl: ".hero__prev",
    },
    pagination: {
      el: ".hero__pag",
      clickable: true,
      renderBullet: (index, className) => {
        return `<span class="${className}"><span class="hero__bar"></span></span>`;
      },
    },
  });

  // Initialize Projects Slider
  const projectsSwiper = new Swiper(".projects-slider", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
      nextEl: ".projects__next",
      prevEl: ".projects__prev",
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
    },
  });

  // Initialize Testimonials Slider
  const testimonialsSwiper = new Swiper(".testimonials-slider", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
      nextEl: ".testimonials__next",
      prevEl: ".testimonials__prev",
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
    },
  });

  // Initialize Plyr Video Player

  const player = new Plyr("#player");

  /*const player = new Plyr("#plyr-video", {*/
  /* controls: [
        "play-large",
        "play",
        "progress",
        "current-time",
        "mute",
        "volume",
        "captions",
        "settings",
        "fullscreen",
      ],*/
  /*controls: [
      "play-large",
      "play",
      "progress",
      "current-time",
      "mute",
      "volume",
      "captions",
      "fullscreen",
    ],
    settings: ["captions", "quality", "speed"],
    captions: { active: true, language: "uz", update: true },
  });*/

  // Language Switcher
  const translations = {
    uz: {
      title: "O'ztemiryo'lqurilishmontaj",
      logo: "O'ztemiryo'lqurilishmontaj",
      menu_home: "Bosh sahifa",
      menu_home_history: "Korxona tarixi",
      menu_home_functions: "Funksiya va vazifalar",
      menu_home_leadership: "Rahbariyat",
      menu_home_structure: "Ma’muriy tuzilish",
      menu_home_organizations: "Korxona va tashkilotlar",
      menu_home_stations: "Stansiyalar",
      menu_home_units: "Tarkibiy bo’linmalar",
      menu_about: "Biz haqimizda",
      menu_about_mission: "Bizning missiyamiz",
      menu_about_team: "Jamoamiz",
      menu_about_gallery: "Fotogalareya",
      menu_about_history: "Tariximiz",
      menu_services: "Xizmatlar",
      menu_services_construction: "Qurilish xizmatlari",
      menu_services_management: "Loyiha boshqaruvi",
      menu_services_consulting: "Konsultatsiya",
      menu_news: "Yangiliklar",
      menu_contact: "Aloqa",
      contact_phone_label: "Bizga qo'ng'iroq qiling",
      hero_title: "O'ztemiryo'lqurilishmontaj",
      hero_subtitle: " MCHJ",
      hero_description_1:
        "Biz yuqori sifatli qurilish xizmatlarini taqdim etamiz. Loyihalaringizni professional jamoamiz bilan amalga oshiring.",
      hero_description_2:
        "Bizning tajribali mutaxassislar jamoasi loyihangizni o'z vaqtida va yuqori sifatda bajaradi.",
      hero_description_3:
        "Innovatsion yechimlar va zamonaviy texnologiyalar yordamida qurilishning yangi darajasini kashf eting.",
      btn_learn_more: "Biz haqimizda ko'proq bilib oling",
      btn_request: "So'rov yuborish",
      video_title:
        "Biz O'ztemiryo'lqurilishmontaj MCHJ qurilish kompaniyasimiz",
      video_description:
        "Biz O'zbekistondagi eng yaxshi qurilish kompaniyalaridan biri sifatida tan olinganmiz.",
      about_title: "Biz haqimizda",
      about_description:
        "Biz qurilish sohasida 20 yildan ortiq tajribaga ega yetakchi kompaniyamiz. Bizning maqsadimiz mijozlarimizning umidlaridan oshib ketadigan yuqori sifatli loyihalarni yetkazib berishdir.",
      about_stat_1: "Tajriba yillari",
      about_stat_2: "Bajarilgan loyihalar",
      about_stat_3: "Mamnum mijozlar",
      advantages_title: "Bizning afzalliklarimiz",
      advantages_description:
        "Nima uchun qurilish loyihalari uchun bizni tanlashadi, bilib oling.",
      advantage_1_title: "Sifat kafolati",
      advantage_1_description:
        "Biz har bir loyihada eng yuqori sifat standartlarini ta'minlaymiz.",
      advantage_2_title: "Tajribali jamoa",
      advantage_2_description:
        "Bizning jamoamiz ko'p yillik tajribaga ega yuqori malakali mutaxassislardan iborat.",
      advantage_3_title: "O'z vaqtida yetkazib berish",
      advantage_3_description:
        "Biz loyihalarni har doim o'z vaqtida yetkazib berishga sodiqmiz.",
      services_title: "Bizning xizmatlarimiz",
      services_description:
        "Biz sizning ehtiyojlaringizni qondirish uchun keng ko'lamli qurilish xizmatlarini taklif qilamiz.",
      service_1_title: "Qurilish",
      service_1_description:
        "Turar joy va tijorat loyihalari uchun keng qamrovli qurilish xizmatlari.",
      service_2_title: "Loyiha boshqaruvi",
      service_2_description:
        "Loyihani muammosiz amalga oshirish va yetkazib berishni ta'minlash uchun mutaxassis boshqaruv.",
      service_3_title: "Konsultatsiya",
      service_3_description:
        "Qurilish sayohatingizda sizga yo'l ko'rsatadigan professional konsultatsiya xizmatlari.",
      projects_title: "Bizning loyihalarimiz",
      projects_description:
        "Yaqinda bajarilgan ba'zi loyihalarimiz bilan tanishing.",
      project_1_title: "Turar joy majmuasi",
      project_1_description: "Zamonaviy qulayliklarga ega turar joy majmuasi.",
      project_2_title: "Tijorat binosi",
      project_2_description:
        "Samaradorlik uchun mo'ljallangan ko'p qavatli tijorat binosi.",
      project_3_title: "Sanoat ob'ekti",
      project_3_description:
        "Zamonaviy standartlarga javob beradigan sanoat ob'ekti.",
      testimonials_title: "Mijozlarimizning fikrlari",
      testimonials_description:
        "Biz bilan ishlash haqida mijozlarimiz nima deydi, eshiting.",
      testimonial_1_quote:
        "\"O'ztemiryo'lqurilishmontaj jamoasi loyihamizni o'z vaqtida topshirdi va umidlarimizdan oshib ketdi. Juda tavsiya qilaman!\"",
      testimonial_1_author: "John Doe",
      testimonial_1_position: "ABC Corp direktori",
      testimonial_2_quote:
        '"Ularning tafsilotlarga e\'tibor berishi va professionalligi butun jarayonni muammosiz qildi. Ajoyib ish!"',
      testimonial_2_author: "Jane Smith",
      testimonial_2_position: "XYZ Ltd loyiha menejeri",
      testimonial_3_quote:
        '"Biz ish sifati va muddatlarga rioya qilishdan juda mamnunmiz."',
      testimonial_3_author: "Michael Brown",
      testimonial_3_position: "DEF Inc direktori",
      blog_title: "So'nggi blog maqolalari",
      blog_description:
        "Qurilish sohasidagi so'nggi yangiliklar va maslahatlardan xabardor bo'ling.",
      blog_1_title: "Zamonaviy qurilish texnologiyalari",
      blog_1_date: "20 Apr 2025",
      blog_1_description:
        "So'nggi qurilish texnologiyalari loyihalarni qanday tezlashtiradi va sifatni oshiradi.",
      blog_2_title: "Qurilishda xavfsizlik bo'yicha maslahatlar",
      blog_2_date: "15 Apr 2025",
      blog_2_description:
        "Qurilish maydonchasida xavfsizlikni ta'minlash bo'yicha eng yaxshi amaliyotlar.",
      blog_3_title: "Barqaror qurilishning kelajagi",
      blog_3_date: "10 Apr 2025",
      blog_3_description:
        "Barqaror qurilish usullari qanday qilib sohani o'zgartirmoqda.",
      partners_title: "Bizning hamkorlarimiz",
      footer_description:
        "Biz O'zbekistonda qurilish sohasida yetakchi kompaniyalardan birimiz.",
      footer_quick_links: "Tez havolalar",
      footer_services: "Xizmatlar",
      footer_contact: "Aloqa",
      footer_copyright:
        "© 2025 O'ztemiryo'lqurilishmontaj. Barcha huquqlar himoyalangan.",
    },
    ru: {
      title: "Узтемирйулкурилишмонтаж",
      logo: "Узтемирйулкурилишмонтаж",
      menu_home: "Главная",
      menu_home_history: "История предприятия",
      menu_home_functions: "Функции и задачи",
      menu_home_leadership: "Руководство",
      menu_home_structure: "Административная структура",
      menu_home_organizations: "Предприятия и организации",
      menu_home_stations: "Станции",
      menu_home_units: "Структурные подразделения",
      menu_about: "О нас",
      menu_about_mission: "Наша миссия",
      menu_about_team: "Наша команда",
      menu_about_gallery: "Фотогалерея",
      menu_about_history: "Наша история",
      menu_services: "Услуги",
      menu_services_construction: "Строительные услуги",
      menu_services_management: "Управление проектами",
      menu_services_consulting: "Консультации",
      menu_news: "Новости",
      menu_contact: "Контакты",
      contact_phone_label: "Позвоните нам",
      hero_title: "Узтемирйулкурилишмонтаж",
      hero_subtitle: " МЧЖ",
      hero_description_1:
        "Мы предоставляем высококачественные строительные услуги. Реализуйте свои проекты с нашей профессиональной командой.",
      hero_description_2:
        "Наша команда опытных специалистов выполнит ваш проект вовремя и с высоким качеством.",
      hero_description_3:
        "Откройте новый уровень строительства с инновационными решениями и современными технологиями.",
      btn_learn_more: "Узнайте больше о нас",
      btn_request: "Отправить запрос",
      video_title: "Мы — строительная компания Узтемирйулкурилишмонтаж МЧЖ",
      video_description:
        "Мы признаны одной из лучших строительных компаний в Узбекистане.",
      about_title: "О нас",
      about_description:
        "Мы — ведущая компания с более чем 20-летним опытом в строительной отрасли. Наша цель — поставлять высококачественные проекты, превосходящие ожидания наших клиентов.",
      about_stat_1: "Лет опыта",
      about_stat_2: "Завершенных проектов",
      about_stat_3: "Довольных клиентов",
      advantages_title: "Наши преимущества",
      advantages_description:
        "Узнайте, почему нас выбирают для строительных проектов.",
      advantage_1_title: "Гарантия качества",
      advantage_1_description:
        "Мы обеспечиваем самые высокие стандарты качества в каждом проекте.",
      advantage_2_title: "Опытная команда",
      advantage_2_description:
        "Наша команда состоит из высококвалифицированных специалистов с многолетним опытом.",
      advantage_3_title: "Своевременная сдача",
      advantage_3_description: "Мы всегда сдаем проекты вовремя.",
      services_title: "Наши услуги",
      services_description:
        "Мы предлагаем широкий спектр строительных услуг для удовлетворения ваших потребностей.",
      service_1_title: "Строительство",
      service_1_description:
        "Комплексные строительные услуги для жилых и коммерческих проектов.",
      service_2_title: "Управление проектами",
      service_2_description:
        "Профессиональное управление для бесперебойной реализации и сдачи проекта.",
      service_3_title: "Консультации",
      service_3_description:
        "Профессиональные консультационные услуги, чтобы направить вас в вашем строительном пути.",
      projects_title: "Наши проекты",
      projects_description:
        "Ознакомьтесь с некоторыми из наших недавно завершенных проектов.",
      project_1_title: "Жилой комплекс",
      project_1_description: "Жилой комплекс с современными удобствами.",
      project_2_title: "Коммерческое здание",
      project_2_description:
        "Многоэтажное коммерческое здание, спроектированное для эффективности.",
      project_3_title: "Промышленный объект",
      project_3_description:
        "Промышленный объект, соответствующий современным стандартам.",
      testimonials_title: "Отзывы наших клиентов",
      testimonials_description:
        "Услышьте, что говорят наши клиенты о работе с нами.",
      testimonial_1_quote:
        '"Команда Узтемирйулкурилишмонтаж сдала наш проект вовремя и превзошла наши ожидания. Очень рекомендую!"',
      testimonial_1_author: "Джон Доу",
      testimonial_1_position: "Директор ABC Corp",
      testimonial_2_quote:
        '"Их внимание к деталям и профессионализм сделали весь процесс беспроблемным. Отличная работа!"',
      testimonial_2_author: "Джейн Смит",
      testimonial_2_position: "Менеджер проектов XYZ Ltd",
      testimonial_3_quote:
        '"Мы очень довольны качеством работы и соблюдением сроков."',
      testimonial_3_author: "Майкл Браун",
      testimonial_3_position: "Директор DEF Inc",
      blog_title: "Последние статьи блога",
      blog_description:
        "Будьте в курсе последних новостей и советов в строительной отрасли.",
      blog_1_title: "Современные строительные технологии",
      blog_1_date: "20 Апр 2025",
      blog_1_description:
        "Как новейшие строительные технологии ускоряют проекты и повышают качество.",
      blog_2_title: "Советы по безопасности в строительстве",
      blog_2_date: "15 Апр 2025",
      blog_2_description:
        "Лучшие практики для обеспечения безопасности на строительной площадке.",
      blog_3_title: "Будущее устойчивого строительства",
      blog_3_date: "10 Апр 2025",
      blog_3_description:
        "Как методы устойчивого строительства трансформируют отрасль.",
      partners_title: "Наши партнеры",
      footer_description:
        "Мы — одна из ведущих компаний в строительной отрасли Узбекистана.",
      footer_quick_links: "Быстрые ссылки",
      footer_services: "Услуги",
      footer_contact: "Контакты",
      footer_copyright: "© 2025 Узтемирйулкурилишмонтаж. Все права защищены.",
    },
  };

  const languageButtons = document.querySelectorAll(".language-btn");
  let currentLang = "uz";

  const updateContent = (lang) => {
    document.querySelectorAll("[data-key]").forEach((elem) => {
      const key = elem.getAttribute("data-key");
      if (translations[lang][key]) {
        elem.textContent = translations[lang][key];
      }
    });

    // Update Plyr captions language
    if (player) {
      player.config.captions.language = lang;
      player.config.captions.update = true;
    }

    // Update document title
    document.title = translations[lang].title;

    // Update language buttons state
    languageButtons.forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
      btn.setAttribute("aria-checked", btn.getAttribute("data-lang") === lang);
    });
  };

  languageButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      currentLang = btn.getAttribute("data-lang");
      updateContent(currentLang);
      localStorage.setItem("language", currentLang);
    });
  });

  // Load saved language or default to 'uz'
  const savedLang = localStorage.getItem("language") || "uz";
  currentLang = savedLang;
  updateContent(currentLang);
  //========================//
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  const header = document.getElementById("header");

  if (mobileMenuBtn && mobileMenu) {
    // Переключение основного меню
    mobileMenuBtn.addEventListener("click", () => {
      const expanded = mobileMenuBtn.getAttribute("aria-expanded") === "true";
      header.classList.toggle("active");
      mobileMenuBtn.classList.toggle("active");
      mobileMenu.classList.toggle("active");
      mobileMenuBtn.setAttribute("aria-expanded", String(!expanded));
    });

    // Переключение раскрывающихся пунктов
    document
      .querySelectorAll(".mobile-menu__link--toggle")
      .forEach((toggle) => {
        toggle.addEventListener("click", (e) => {
          e.preventDefault();

          const parent = toggle.parentElement;
          const expanded = toggle.getAttribute("aria-expanded") === "true";

          parent.classList.toggle("active");
          toggle.setAttribute("aria-expanded", String(!expanded));
        });
      });

    // Закрытие меню по клику на пункт подменю (не toggle)
    document
      .querySelectorAll(".mobile-menu__dropdown-link")
      .forEach((subLink) => {
        subLink.addEventListener("click", () => {
          closeMobileMenu();
        });
      });

    // Сброс меню при ресайзе
    window.addEventListener("resize", () => {
      if (window.innerWidth > 991) {
        closeMobileMenu(true);
      }
    });

    // Функция закрытия меню
    function closeMobileMenu(resetSubmenus = false) {
      console.log("close");

      mobileMenuBtn.classList.remove("active");
      mobileMenu.classList.remove("active");
      mobileMenuBtn.setAttribute("aria-expanded", "false");
      header.classList.remove("active");

      if (resetSubmenus) {
        document
          .querySelectorAll(".mobile-menu__item.active")
          .forEach((item) => {
            item.classList.remove("active");
          });
        document
          .querySelectorAll('.mobile-menu__link--toggle[aria-expanded="true"]')
          .forEach((toggle) => {
            toggle.setAttribute("aria-expanded", "false");
          });
      }
    }
  }
  // Gallery
  // Gallery Photos Array (can be expanded in the future)
  const galleryPhotos = [
    "https://picsum.photos/600/400",
    "https://picsum.photos/700/650",
    "https://picsum.photos/800/700",
    "https://picsum.photos/600/500",
    "https://picsum.photos/800/600",
    "https://picsum.photos/900/600",
    "https://picsum.photos/600/800",
    "https://picsum.photos/400/300",
    "https://picsum.photos/600/900",
    "https://picsum.photos/900/900",
    "https://picsum.photos/700/500",
    "https://picsum.photos/1200/800",
    "https://picsum.photos/600/500",
    "https://picsum.photos/400/300",
    "https://picsum.photos/400/300",
    "https://picsum.photos/400/300",
    "https://picsum.photos/400/300",
    "https://picsum.photos/400/300",
    "https://picsum.photos/400/300",
    "https://picsum.photos/400/300",
    "https://picsum.photos/400/300",
    "https://picsum.photos/400/300",
    "https://picsum.photos/400/300",
    "https://picsum.photos/400/300",
    "https://picsum.photos/400/300",
    "https://picsum.photos/400/300",
    "https://picsum.photos/400/300",
    "https://picsum.photos/400/300",
    "https://picsum.photos/400/300",
    "https://loremflickr.com/400/300?random=25", // Extra photos for future expansion
    "https://loremflickr.com/400/300?random=26",
    "https://loremflickr.com/400/300?random=27",
  ];

  // Display only 24 photos initially
  const displayedPhotos = galleryPhotos.slice(0, 12);

  // Populate gallery
  const galleryWrapper = document.getElementById("galleryWrapper");
  displayedPhotos.forEach((photo, index) => {
    const slide = document.createElement("div");
    slide.className = "swiper-slide gallery-slide";
    slide.innerHTML = `<img src="${photo}" alt="Gallery image ${
      index + 1
    }" class="gallery-slide__image" data-index="${index}">`;
    galleryWrapper.appendChild(slide);
  });

  // Initialize Gallery Slider
  const gallerySwiper = new Swiper(".gallery-slider", {
    slidesPerView: 4,
    slidesPerGroup: 4,
    grid: {
      rows: 2,
      fill: "row",
    },
    spaceBetween: 15, // Уменьшено с 20, 15
    navigation: {
      nextEl: ".gallery__next",
      prevEl: ".gallery__prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        grid: {
          rows: 1,
          fill: "row",
        },
        spaceBetween: 8, // Уменьшено с 10
      },
      576: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        grid: {
          rows: 1,
          fill: "row",
        },
        spaceBetween: 10, // Уменьшено с 15
      },
      768: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        grid: {
          rows: 1,
          fill: "row",
        },
        spaceBetween: 10, // Уменьшено с 15
      },
      992: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        grid: {
          rows: 3,
          fill: "row",
        },
        spaceBetween: 10, // Уменьшено с 20
      },
    },
    //on: {
    //init: () => {
    //   gallerySwiper.update();
    //   },
    //  resize: () => {
    //   gallerySwiper.update();
    // },
    // },
  });
  gallerySwiper.on("init", () => {
    gallerySwiper.update();
  });

  gallerySwiper.on("resize", () => {
    gallerySwiper.update();
  });

  // Modal functionality
  const galleryModal = document.getElementById("galleryModal");
  const modalImage = document.getElementById("modalImage");
  const modalClose = document.querySelector(".gallery-modal__close");
  const modalPrev = document.querySelector(".gallery-modal__prev");
  const modalNext = document.querySelector(".gallery-modal__next");
  let currentModalIndex = 0;

  const openModal = (index) => {
    currentModalIndex = index;
    modalImage.src = displayedPhotos[currentModalIndex];
    galleryModal.classList.add("active");
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    galleryModal.classList.remove("active");
    document.body.style.overflow = "";
  };

  const showPrevImage = () => {
    currentModalIndex =
      (currentModalIndex - 1 + displayedPhotos.length) % displayedPhotos.length;
    modalImage.src = displayedPhotos[currentModalIndex];
  };

  const showNextImage = () => {
    currentModalIndex = (currentModalIndex + 1) % displayedPhotos.length;
    modalImage.src = displayedPhotos[currentModalIndex];
  };

  // Event listeners for gallery images
  document.querySelectorAll(".gallery-slide__image").forEach((img) => {
    img.addEventListener("click", () => {
      const index = parseInt(img.getAttribute("data-index"));
      openModal(index);
    });
  });

  modalClose.addEventListener("click", closeModal);
  modalPrev.addEventListener("click", showPrevImage);
  modalNext.addEventListener("click", showNextImage);

  // Close modal on outside click
  galleryModal.addEventListener("click", (e) => {
    if (e.target === galleryModal) {
      closeModal();
    }
  });

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (galleryModal.classList.contains("active")) {
      if (e.key === "ArrowLeft") showPrevImage();
      if (e.key === "ArrowRight") showNextImage();
      if (e.key === "Escape") closeModal();
    }
  });

  // Add translations for gallery
  translations.uz.gallery_title = "Fotogalereya";
  translations.uz.gallery_description =
    "Bizning eng yaxshi loyihalarimizdan olingan suratlarni ko'ring.";
  translations.ru.gallery_title = "Фотогалерея";
  translations.ru.gallery_description =
    "Посмотрите фотографии наших лучших проектов.";

  // News section

  // URL to the JSON file hosted on a cloud service (e.g., Firebase Storage)
  //const newsJsonUrl =
    //"https://firebasestorage.googleapis.com/v0/b/your-project-id.appspot.com/o/news.json?alt=media";
const newsJsonUrl = 'News.json';
  // Variables to manage news display
  let allNews = [];
  let displayedNewsCount = 0;
  const newsPerLoad = 4;

  // Function to fetch news from the cloud JSON file
  const fetchNews = async () => {
    try {
      const response = await fetch(newsJsonUrl);
      if (!response.ok) throw new Error("Failed to fetch news");
      const data = await response.json();

      // Sort news by date in descending order
      return data.sort((a, b) => new Date(b.date) - new Date(a.date));
    } catch (error) {
      console.error("Error fetching news:", error);
      return [];
    }
  };

  // Function to render news
  const renderNews = (newsToRender, lang = "uz") => {
    const newsList = document.getElementById("newsList");
    newsToRender.forEach((news) => {
      const newsCard = document.createElement("article");
      newsCard.className = "blog-card"; // Reusing blog-card styles
      newsCard.innerHTML = `
            <img src="${news.image}" alt="${news.title[lang]}" class="blog-card__image">
            <div class="blog-card__content">
                <h3 class="blog-card__title">${news.title[lang]}</h3>
                <p class="blog-card__date">${news.date}</p>
                <p class="blog-card__descr">${news.description[lang]}</p>
            </div>
        `;
      newsList.appendChild(newsCard);
    });

    // Update displayed news count
    displayedNewsCount += newsToRender.length;

    // Show or hide the "Load More" button
    const loadMoreButton = document.getElementById("loadMoreNews");
    if (displayedNewsCount < allNews.length) {
      loadMoreButton.style.display = "block";
    } else {
      loadMoreButton.style.display = "none";
    }
  };

  // Function to load initial news and set up the section
  const loadInitialNews = async (lang = "uz") => {
    allNews = await fetchNews();
    displayedNewsCount = 0; // Reset count
    document.getElementById("newsList").innerHTML = ""; // Clear existing content
    const initialNews = allNews.slice(0, newsPerLoad);
    renderNews(initialNews, lang);
  };

  // Function to load more news
  const loadMoreNews = (lang = "uz") => {
    const nextNews = allNews.slice(
      displayedNewsCount,
      displayedNewsCount + newsPerLoad
    );
    renderNews(nextNews, lang);
  };

  // Initial load of news
  loadInitialNews(currentLang);

  // Update news when language changes
  const originalUpdateContent = updateContent; // Save the original updateContent function
  updateContent = (lang) => {
    originalUpdateContent(lang); // Call the original function
    loadInitialNews(lang); // Reload news with the new language
  };

  // Event listener for "Load More" button
  document.getElementById("loadMoreNews").addEventListener("click", () => {
    loadMoreNews(currentLang);
  });

  // Add translations for news section
  translations.uz.news_title = "Yangiliklar";
  translations.uz.news_description =
    "Qurilish sohasidagi so'nggi yangiliklardan xabardor bo'ling.";
  translations.uz.load_more = "Yana ko'rsatish";
  translations.ru.news_title = "Новости";
  translations.ru.news_description =
    "Будьте в курсе последних новостей в строительной отрасли.";
  translations.ru.load_more = "Показать еще";
});
