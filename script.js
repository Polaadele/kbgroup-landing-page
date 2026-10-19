/* ==========================================================
   KB GROUP FOR FURNITURE
   Edit the arrays below to add, remove, or change gallery items.
   Images can be local paths (images/your-photo.jpg) or image URLs.
   ========================================================== */

const salonItems = [
  { image: "images/salon-1.jpeg.jpeg", title: "Modern Sofa", description: "A comfortable statement sofa with clean lines and a warm, welcoming finish." },
  { image: "images/salon-2.jpeg.jpeg" , title: "Accent Chair", description: "A sculptural accent chair that brings texture and character to your living room." },
  { image: "images/salon-3.jpeg.jpeg", title: "Coffee Table", description: "A refined centerpiece with natural materials and a timeless silhouette." },
  { image: "images/salon-4.jpeg.jpeg", title: "Living Room Set", description: "A coordinated look designed for relaxed evenings and effortless entertaining." },
  { image: "images/salon-5.jpeg.jpeg", title: "Contemporary Console", description: "Elegant storage and display space for your favorite objects." },
  { image: "images/salon-6.jpeg.jpeg", title: "Warm Neutral Lounge", description: "Soft colors and thoughtful details create a calm, inviting atmosphere." }
];

const kitchenItems = [
  { image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85", title: "Contemporary Kitchen", description: "A balanced mix of practical storage, elegant finishes, and modern lines." },
  { image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=85", title: "Natural Wood Kitchen", description: "Warm wood tones add a timeless, welcoming feel to the heart of the home." },
  { image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85", title: "Minimal Kitchen", description: "Clean surfaces and simple detailing for a beautifully uncluttered space." },
  { image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=85", title: "Kitchen Island", description: "A central gathering point for preparation, conversation, and everyday living." },
  { image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85", title: "Modern Cabinetry", description: "Smart storage and a carefully considered finish keep everything in its place." },
  { image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=85", title: "Elegant Kitchen Details", description: "A thoughtful combination of texture, lighting, and understated hardware." }
];

const bedroomItems = [
  { image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1000&q=85", title: "Upholstered Bed", description: "A soft, inviting focal point designed to make your bedroom feel restful." },
  { image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1000&q=85", title: "Calm Bedroom Set", description: "A harmonious bedroom look with understated tones and practical comfort." },
  { image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=85", title: "Bedside Tables", description: "Useful bedside storage with a neat profile and a timeless finish." },
  { image: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=1000&q=85", title: "Wardrobe & Storage", description: "Keep clothing and essentials organized with clean, considered storage." },
  { image: "https://images.unsplash.com/photo-1617104678098-de229db51175?auto=format&fit=crop&w=1000&q=85", title: "Bedroom Details", description: "Layered materials and soft lighting create a more personal retreat." },
  { image: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=1000&q=85", title: "Modern Bedroom", description: "A simple, elegant setting made for slow mornings and peaceful nights." }
];

const diningItems = [
  { image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1000&q=85", title: "Dining Table Set", description: "A gathering place for family meals, celebrations, and everyday moments." },
  { image: "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?auto=format&fit=crop&w=1000&q=85", title: "Modern Dining Chairs", description: "Comfortable seating with a clean shape and a polished, contemporary look." },
  { image: "https://images.unsplash.com/photo-1615968679312-9b7ed9f5f2e4?auto=format&fit=crop&w=1000&q=85", title: "Wooden Dining Table", description: "Natural wood character brings warmth to a dining room made for gathering." },
  { image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85", title: "Open-Plan Dining", description: "A coordinated dining space that flows beautifully into the rest of the home." },
  { image: "https://images.unsplash.com/photo-1617104678098-de229db51175?auto=format&fit=crop&w=1000&q=85", title: "Dining Room Styling", description: "Thoughtful details help create a welcoming setting for guests and family." },
  { image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85", title: "Elegant Entertaining", description: "A warm, refined atmosphere for dinners, celebrations, and special occasions." }
];

const categories = [
  { key: "salon", file: "salon.html", en: "Salon", ar: "صالون", icon: "S" },
  { key: "kitchen", file: "kitchen.html", en: "Kitchen", ar: "مطبخ", icon: "K" },
  { key: "bedroom", file: "bedroom.html", en: "Bedroom", ar: "نوم", icon: "B" },
  { key: "dining", file: "dining.html", en: "Dining", ar: "سفرة", icon: "D" }
];

const categoryContent = {
  salon: { title: "Salon & Living Room", arabic: "الصالون وغرفة المعيشة", intro: "Comfortable spaces, beautiful textures, and statement pieces made for everyday living.", items: salonItems },
  kitchen: { title: "Kitchen", arabic: "المطبخ", intro: "Thoughtful kitchen designs that bring function, warmth, and style together.", items: kitchenItems },
  bedroom: { title: "Bedroom", arabic: "غرف النوم", intro: "Create a peaceful retreat with considered details and timeless comfort.", items: bedroomItems },
  dining: { title: "Dining Room", arabic: "غرفة السفرة", intro: "Beautiful dining furniture for shared meals, long conversations, and special moments.", items: diningItems }
};

function renderGallery() {
  const gallery = document.querySelector("[data-gallery]");
  if (!gallery) return;
  const key = document.body.dataset.category;
  const content = categoryContent[key];
  if (!content) return;
  document.title = `${content.title} | KB Group for Furniture`;
  const title = document.querySelector("[data-category-title]");
  const arabic = document.querySelector("[data-category-arabic]");
  const intro = document.querySelector("[data-category-intro]");
  if (title) title.textContent = content.title;
  if (arabic) arabic.textContent = content.arabic;
  if (intro) intro.textContent = content.intro;

  gallery.innerHTML = content.items.map((item, index) => `
    <article class="furniture-item">
      <div class="furniture-image-wrap">
        <img src="${escapeAttribute(item.image)}" alt="${escapeAttribute(item.title)}" loading="${index < 3 ? "eager" : "lazy"}">
      </div>
      <div class="furniture-item-copy">
        <span class="item-number">COLLECTION / ${String(index + 1).padStart(2, "0")}</span>
        <h2>${escapeHTML(item.title)}</h2>
        <p>${escapeHTML(item.description)}</p>
      </div>
    </article>`).join("");

  const nav = document.querySelector("[data-category-nav]");
  if (nav) {
    nav.innerHTML = categories.map(category => `
      <a class="nav-circle ${category.key === key ? "active" : ""}" href="${category.file}" ${category.key === key ? 'aria-current="page"' : ""}>
        <span class="nav-icon">${category.icon}</span>
        <span>${category.en}</span>
      </a>`).join("");
  }
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]));
}
function escapeAttribute(value) { return escapeHTML(value); }

function initHomeNavigationAnimation() {
  if (!document.body.classList.contains("home-page")) return;
  const grid = document.querySelector(".home-category-grid");
  const hero = document.querySelector(".home-hero");
  const mark = document.querySelector(".brand-mark");
  if (!grid || !hero || !mark) return;
  grid.querySelectorAll(".category-card").forEach(card => {
    card.addEventListener("click", event => {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
      event.preventDefault();
      if (grid.classList.contains("is-transitioning")) return;
      const destination = card.getAttribute("href");
      grid.classList.add("is-transitioning");
      hero.classList.add("logo-fading");
      grid.querySelectorAll(".category-card").forEach((item, index) => {
        item.classList.add("nav-transform");
        item.style.setProperty("--nav-index", index);
      });
      card.classList.add("selected");
      window.setTimeout(() => { window.location.href = destination; }, 850);
    });
  });
}

function initFeedbackForm() {
  const form = document.getElementById("feedbackForm");
  if (!form) return;
  form.addEventListener("submit", event => {
    event.preventDefault();
    const status = document.getElementById("feedbackStatus");
    const rating = form.querySelector('input[name="rating"]:checked');
    status.textContent = `Thanks, ${form.elements.name.value.trim()}! Your ${rating ? rating.value + "-star " : ""}feedback is ready. This demo does not send or store it yet.`;
    form.reset();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderGallery();
  initHomeNavigationAnimation();
  initFeedbackForm();
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
});

function goBack() {
  if (window.history.length > 1 &&
      document.referrer &&
      new URL(document.referrer).origin === window.location.origin) {
    window.history.back();
  } else {
    window.location.href = "index.html";
  }
}

/* ===== Mobile Navigation Menu ===== */

document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector("#primary-navigation");

  if (!menuButton || !navigation) return;

  function closeMenu() {
    navigation.classList.remove("is-open");
    menuButton.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation menu");
  }

  menuButton.addEventListener("click", function () {
    const isOpen = navigation.classList.toggle("is-open");

    menuButton.classList.toggle("is-open", isOpen);
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute(
      "aria-label",
      isOpen ? "Close navigation menu" : "Open navigation menu"
    );
  });

  navigation.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", closeMenu);
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 760) {
      closeMenu();
    }
  });
});
