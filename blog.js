// Blog Posts Array (can be expanded dynamically)
const blogPosts = [
  {
    image: "https://via.placeholder.com/400x300?text=Blog+1",
    titleKey: "blog_1_title",
    dateKey: "blog_1_date",
    descriptionKey: "blog_1_description",
  },
  {
    image: "https://via.placeholder.com/400x300?text=Blog+2",
    titleKey: "blog_2_title",
    dateKey: "blog_2_date",
    descriptionKey: "blog_2_description",
  },
  {
    image: "https://via.placeholder.com/400x300?text=Blog+3",
    titleKey: "blog_3_title",
    dateKey: "blog_3_date",
    descriptionKey: "blog_3_description",
  },
];

// Function to render blog posts
const renderBlogPosts = (lang = "uz") => {
  const blogList = document.getElementById("blogList");
  blogList.innerHTML = ""; // Clear existing content

  blogPosts.forEach((post) => {
    const blogCard = document.createElement("article");
    blogCard.className = "blog-card";
    blogCard.innerHTML = `<img src="${post.image}" alt="${
      translations[lang][post.titleKey]
    }" class="blog-card__image"><div class="blog-card__content"><h3 class="blog-card__title">${
      translations[lang][post.titleKey]
    }</h3><p class="blog-card__date">${translations[lang][post.dateKey]}</p><p class="blog-card__descr">${
      translations[lang][post.descriptionKey]
    }</p></div>`;
    blogList.appendChild(blogCard);
  });
};

// Function to add a new blog post
const addBlogPost = (image, title, date, description) => {
  const newPostKey = `blog_${blogPosts.length + 1}`;
  blogPosts.push({
    image: image,
    titleKey: `${newPostKey}_title`,
    dateKey: `${newPostKey}_date`,
    descriptionKey: `${newPostKey}_description`,
  });

  // Add translations for the new post
  translations.uz[`${newPostKey}_title`] = title.uz;
  translations.uz[`${newPostKey}_date`] = date.uz;
  translations.uz[`${newPostKey}_description`] = description.uz;
  translations.ru[`${newPostKey}_title`] = title.ru;
  translations.ru[`${newPostKey}_date`] = date.ru;
  translations.ru[`${newPostKey}_description`] = description.ru;

  // Re-render blog posts with the current language
  renderBlogPosts(currentLang);
};

// Initial render of blog posts
renderBlogPosts(currentLang);

// Update blog posts when language changes
const originalUpdateContent = updateContent; // Save the original updateContent function
updateContent = (lang) => {
  originalUpdateContent(lang); // Call the original function
  renderBlogPosts(lang); // Re-render blog posts with the new language
};

// Example: Add a new blog post (you can call this function to add new posts)
// addBlogPost(
//     'https://via.placeholder.com/400x300?text=Blog+4', // Image URL
//     { uz: "Yangi blog post", ru: "Новый пост в блоге" }, // Title
//     { uz: "25 Apr 2025", ru: "25 Апр 2025" }, // Date
//     { uz: "Bu yangi blog postining qisqacha tavsifi.", ru: "Это краткое описание нового поста в блоге." } // Description
// );
