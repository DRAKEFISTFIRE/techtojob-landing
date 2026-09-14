(() => {
  "use strict";

  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;


  /* ===================================================================
     NAVEGACIÓN MÓVIL
     =================================================================== */

  const navToggle = $(".nav-toggle");
  const navMenu = $(".nav-menu");
  let navOpen = false;

  const setNavigation = (open) => {
    navOpen = open;
    navMenu?.classList.toggle("is-open", open);
    navToggle?.setAttribute("aria-expanded", String(open));
    navToggle?.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
  };

  navToggle?.addEventListener("click", () => setNavigation(!navOpen));

  $$(".nav-menu a").forEach((link) => {
    link.addEventListener("click", () => setNavigation(false));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setNavigation(false);
  });


  /* ===================================================================
     REVEAL AL HACER SCROLL
     =================================================================== */

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12 }
  );

  $$(".reveal").forEach((element) => revealObserver.observe(element));


  /* ===================================================================
     CONTADOR HASTA EL PRÓXIMO TORNEO (día 1 del mes siguiente)
     =================================================================== */

  const countdownEl = $("#countdown");

  if (countdownEl) {
    const daysEl = $("#cd-days");
    const hoursEl = $("#cd-hours");
    const minutesEl = $("#cd-minutes");
    const secondsEl = $("#cd-seconds");
    const pad = (n) => String(n).padStart(2, "0");

    function getNextTournamentDate() {
      const now = new Date();
      return new Date(now.getFullYear(), now.getMonth() + 1, 1, 0, 0, 0);
    }

    function setValue(el, value) {
      const formatted = pad(value);
      if (el.textContent === formatted) return;

      el.textContent = formatted;

      if (!prefersReducedMotion) {
        el.classList.add("is-tick");
        el.addEventListener("transitionend", () => el.classList.remove("is-tick"), { once: true });
      }
    }

    function updateCountdown() {
      const diff = getNextTournamentDate() - new Date();

      if (diff <= 0) {
        [daysEl, hoursEl, minutesEl, secondsEl].forEach((el) => setValue(el, 0));
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setValue(daysEl, days);
      setValue(hoursEl, hours);
      setValue(minutesEl, minutes);
      setValue(secondsEl, seconds);
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
  }


  /* ===================================================================
     CONTADOR ANIMADO EN LAS STATS
     =================================================================== */

  const countElements = $$("[data-count-to]");

  function animateCount(element) {
    const target = Number(element.dataset.countTo);
    const suffix = element.dataset.suffix || "";

    if (prefersReducedMotion || Number.isNaN(target)) {
      element.textContent = `${target}${suffix}`;
      return;
    }

    const duration = 1200;
    const start = performance.now();

    function step(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      element.textContent = `${Math.round(target * eased)}${suffix}`;
      if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  }

  const countObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        animateCount(entry.target);
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.6 }
  );

  countElements.forEach((element) => countObserver.observe(element));


  /* ===================================================================
     COPIAR ENLACE DE INVITACIÓN
     =================================================================== */

  const copyBtn = $("#copy-invite-btn");
  const inviteLink = $("#invite-link");

  copyBtn?.addEventListener("click", async () => {
    const text = inviteLink?.textContent.trim() || "";
    const doneLabel = copyBtn.dataset.labelDone;
    const defaultLabel = copyBtn.dataset.labelDefault;
    const label = $("span", copyBtn);

    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(text);
      } else {
        const helper = document.createElement("textarea");
        helper.value = text;
        helper.style.position = "fixed";
        helper.style.opacity = "0";
        document.body.appendChild(helper);
        helper.select();
        document.execCommand("copy");
        document.body.removeChild(helper);
      }

      copyBtn.classList.add("is-done");
      if (label) label.textContent = doneLabel;

      setTimeout(() => {
        copyBtn.classList.remove("is-done");
        if (label) label.textContent = defaultLabel;
      }, 2000);
    } catch {
      // Si falla la copia, no rompemos nada: el enlace ya está visible en texto.
    }
  });


  /* ===================================================================
     NEWSLETTER (validación visual — el reto no exige backend)
     =================================================================== */

  const newsletterForm = $("#newsletter-form");
  const emailInput = $("#email");
  const formNote = $("#form-note");

  newsletterForm?.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = emailInput.value.trim();
    formNote.classList.remove("success", "error");

    if (!email || !emailInput.checkValidity()) {
      formNote.textContent = "Introduce un email válido para continuar.";
      formNote.classList.add("error");
      emailInput.focus();
      return;
    }

    formNote.textContent = "¡Listo! Te has apuntado a la newsletter.";
    formNote.classList.add("success");
    newsletterForm.reset();
  });


  /* ===================================================================
     AÑO DINÁMICO EN EL FOOTER
     =================================================================== */

  const yearEl = $("#year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();


  /* ===================================================================
     NAVBAR + BARRA DE PROGRESO
     =================================================================== */

  const header = $("#site-header");
  const progressBar = $("#scroll-progress");
  let ticking = false;

  const updateOnScroll = () => {
    header?.classList.toggle("is-scrolled", window.scrollY > 20);

    if (progressBar) {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
      progressBar.style.transform = `scaleX(${Math.min(progress, 1)})`;
    }

    ticking = false;
  };

  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        window.requestAnimationFrame(updateOnScroll);
        ticking = true;
      }
    },
    { passive: true }
  );

  updateOnScroll();


  /* ===================================================================
     INTERACCIONES SOLO PARA DISPOSITIVOS CON HOVER REAL
     =================================================================== */

  const canHover = window.matchMedia("(hover: hover)").matches;
  const codeCard = $("#code-card");
  const heroSection = $(".hero");
  const orbOne = $(".orb-one");
  const orbTwo = $(".orb-two");

  if (canHover && codeCard) {
    codeCard.addEventListener("mousemove", (event) => {
      const rect = codeCard.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;

      const rotateY = (x - 0.5) * 10;
      const rotateX = (0.5 - y) * 8;

      codeCard.style.transform = `perspective(1000px) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
    });

    codeCard.addEventListener("mouseleave", () => {
      codeCard.style.transform = "perspective(1000px) rotateY(-6deg) rotateX(2deg)";
    });
  }

  if (canHover && heroSection && orbOne && orbTwo) {
    heroSection.addEventListener("mousemove", (event) => {
      const rect = heroSection.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      orbOne.style.transform = `translate(${x * 24}px, ${y * 24}px)`;
      orbTwo.style.transform = `translate(${x * -18}px, ${y * -18}px)`;
    });

    heroSection.addEventListener("mouseleave", () => {
      orbOne.style.transform = "translate(0, 0)";
      orbTwo.style.transform = "translate(0, 0)";
    });
  }
})();