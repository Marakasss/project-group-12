document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".button-more");
  const hiddenItems = document.querySelectorAll(".hidden-on-mobile");

  const isMobile = () => window.innerWidth <= 767;

  const toggleVisibility = () => {
    hiddenItems.forEach((item) => {
      if (item.classList.contains("hidden-on-mobile")) {
        item.style.display = "block";
        item.style.height = "0";
        item.style.overflow = "hidden";
        item.style.transition = "height 0.3s ease";

        const height = item.scrollHeight;
        requestAnimationFrame(() => {
          item.style.height = height + "px";
        });

        item.addEventListener("transitionend", function handleTransitionEnd() {
          item.style.height = "";
          item.style.overflow = "";
          item.removeEventListener("transitionend", handleTransitionEnd);
        });

        item.classList.remove("hidden-on-mobile");
      } else {
        item.style.height = item.scrollHeight + "px";
        requestAnimationFrame(() => {
          item.style.height = "0";
        });

        item.addEventListener("transitionend", function handleTransitionEnd() {
          item.style.display = "none";
          item.style.height = "";
          item.style.overflow = "";
          item.classList.add("hidden-on-mobile");
          item.removeEventListener("transitionend", handleTransitionEnd);
        });
      }
    });

    // Змінюємо текст кнопки
    if (button.textContent.trim() === "Show more") {
      button.textContent = "Show less";
    } else {
      button.textContent = "Show more";
    }
  };

  const handleButtonClick = () => {
    if (isMobile()) {
      toggleVisibility();
    }
  };

  button.addEventListener("click", handleButtonClick);

  // Опціонально: додаємо слухач для зміни розмірів вікна
  window.addEventListener("resize", () => {
    if (!isMobile()) {
      hiddenItems.forEach((item) => {
        item.style.display = "";
        item.style.height = "";
        item.style.overflow = "";
        item.classList.add("hidden-on-mobile");
      });
      button.textContent = "Show more";
    }
  });
});
