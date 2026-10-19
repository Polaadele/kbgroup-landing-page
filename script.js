/* ==========================================================
   KB GROUP FOR FURNITURE
   Edit the arrays below to add, remove, or change gallery items.
   Images can be local paths (images/your-photo.jpg) or image URLs.
   ========================================================== */

const salonItems = [
  { image: "images/salon-1.jpeg.jpeg",  },
  { image: "images/salon-2.jpeg.jpeg" ,  },
  { image: "images/salon-3.jpeg.jpeg", },
  { image: "images/salon-4.jpeg.jpeg", },
  { image: "images/salon-5.jpeg.jpeg", },
  { image: "images/salon-6.jpeg.jpeg",  },
  { image: "images/salon-7.jpeg.jpeg",  },
  { image: "images/salon-8.jpeg.jpeg",  },
  { image: "images/salon-9.jpeg.jpeg",  },
  { image: "images/salon-10.jpeg.jpeg",  },
  { image: "images/salon-11.jpeg.jpeg",  },
  { image: "images/salon-12.jpeg.jpeg",  },
  { image: "images/salon-13.jpeg.jpeg",  }


  
  
];

const kitchenItems = [
  { image: "images/kitchen-1.jpeg.jpeg",},
  { image: "images/kitchen-2.jpeg.jpeg",},
  { image: "images/kitchen-3.jpeg.jpeg",},
  { image: "images/kitchen-4.jpeg.jpeg",},
  { image: "images/kitchen-5.jpeg.jpeg",},
  { image: "images/kitchen-6.jpeg.jpeg",},
  { image: "images/kitchen-7.jpeg.jpeg",},
  { image: "images/kitchen-8.jpeg.jpeg",},
  { image: "images/kitchen-9.jpeg.jpeg",},
  { image: "images/kitchen-10.jpeg.jpeg",},

];

const bedroomItems = [
  { image: "images/bed-1.jpeg.jpeg",},
  { image: "images/bed-2.jpeg.jpeg",},
  { image: "images/bed-3.jpeg.jpeg",},
  { image: "images/bed-4.jpeg.jpeg",},
  { image: "images/bed-5.jpeg.jpeg",},
  { image: "images/bed-6.jpeg.jpeg",},
  { image: "images/bed-7.jpeg.jpeg",},
  { image: "images/bed-8.jpeg.jpeg",},
  { image: "images/bed-9.jpeg.jpeg",},
  { image: "images/bed-10.jpeg.jpeg",},
  { image: "images/bed-11.jpeg.jpeg",}

];

const diningItems = [
    { image: "images/dining-1.jpeg.jpeg", },
    { image: "images/dining-2.jpeg.jpeg", },
    { image: "images/dining-3.jpeg.jpeg", },
    { image: "images/dining-4.jpeg.jpeg", },
    
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
        <img src="${escapeAttribute(item.image)}" alt="${escapeAttribute(item.title)}" loading="${index < 3 ? "eager" : "lazy"} decoding="async"">
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
