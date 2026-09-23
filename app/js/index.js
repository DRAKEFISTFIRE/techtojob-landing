(() => {
  "use strict";

  /* ===================================================================
     UTILIDADES
     =================================================================== */

  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  const canHover = window.matchMedia(
    "(hover: hover) and (pointer: fine)"
  ).matches;

  /* ===================================================================
     NAVEGACIÓN MÓVIL
     =================================================================== */

  const navToggle = $(".nav-toggle");
  const navMenu = $(".nav-menu");
  let navOpen = false;

  const setNavigation = (open) => {
    navOpen = open;

    navMenu?.classList.toggle("is-open", open);

    if (navToggle) {
      navToggle.setAttribute("aria-expanded", String(open));
      navToggle.setAttribute(
        "aria-label",
        open ? "Cerrar menú" : "Abrir menú"
      );
    }
  };

  navToggle?.addEventListener("click", () => {
    setNavigation(!navOpen);
  });

  $$(".nav-menu a").forEach((link) => {
    link.addEventListener("click", () => {
      if (navOpen) setNavigation(false);
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && navOpen) {
      setNavigation(false);
    }
  });

  /* ===================================================================
     REVEAL AL HACER SCROLL
     =================================================================== */

  const revealElements = $$(".reveal");

  if (revealElements.length) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -5% 0px",
      }
    );

    revealElements.forEach((element) => {
      revealObserver.observe(element);
    });
  }

  /* ===================================================================
     COUNTDOWN AL PRÓXIMO TORNEO
     Día 1 del mes siguiente.
     =================================================================== */

  const countdownEl = $("#countdown");

  if (countdownEl) {
    const daysEl = $("#cd-days");
    const hoursEl = $("#cd-hours");
    const minutesEl = $("#cd-minutes");
    const secondsEl = $("#cd-seconds");

    const pad = (value) => String(value).padStart(2, "0");

    const getNextTournamentDate = () => {
      const now = new Date();

      return new Date(
        now.getFullYear(),
        now.getMonth() + 1,
        1,
        0,
        0,
        0,
        0
      );
    };

    const nextTournament = getNextTournamentDate();

    const setCountdownValue = (element, value) => {
      if (!element) return;

      const formatted = pad(value);

      if (element.textContent === formatted) return;

      element.textContent = formatted;

      if (!prefersReducedMotion) {
        element.classList.add("is-tick");

        window.setTimeout(() => {
          element.classList.remove("is-tick");
        }, 180);
      }
    };

    const updateCountdown = () => {
      const diff = nextTournament.getTime() - Date.now();

      if (diff <= 0) {
        setCountdownValue(daysEl, 0);
        setCountdownValue(hoursEl, 0);
        setCountdownValue(minutesEl, 0);
        setCountdownValue(secondsEl, 0);
        return;
      }

      const totalSeconds = Math.floor(diff / 1000);

      const days = Math.floor(totalSeconds / 86400);
      const hours = Math.floor((totalSeconds % 86400) / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;

      setCountdownValue(daysEl, days);
      setCountdownValue(hoursEl, hours);
      setCountdownValue(minutesEl, minutes);
      setCountdownValue(secondsEl, seconds);
    };

    updateCountdown();

    const countdownTimer = window.setInterval(updateCountdown, 1000);

    window.addEventListener(
      "pagehide",
      () => window.clearInterval(countdownTimer),
      { once: true }
    );
  }

  /* ===================================================================
     CONTADORES DE STATS
     =================================================================== */

  const countElements = $$("[data-count-to]");

  const animateCount = (element) => {
    const target = Number(element.dataset.countTo);
    const suffix = element.dataset.suffix || "";

    if (Number.isNaN(target)) return;

    if (prefersReducedMotion) {
      element.textContent = `${target}${suffix}`;
      return;
    }

    const duration = 900;
    const start = performance.now();

    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      element.textContent = `${Math.round(target * eased)}${suffix}`;

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  };

  if (countElements.length) {
    const countObserver = new IntersectionObserver(
      (entries, observer) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;

          animateCount(entry.target);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.6,
      }
    );

    countElements.forEach((element) => {
      countObserver.observe(element);
    });
  }

  /* ===================================================================
     COPIAR ENLACE DE INVITACIÓN
     =================================================================== */

  const copyBtn = $("#copy-invite-btn");
  const inviteLink = $("#invite-link");

  copyBtn?.addEventListener("click", async () => {
    const text = inviteLink?.textContent?.trim() || "";

    if (!text) return;

    const doneLabel = copyBtn.dataset.labelDone || "Copiado";
    const defaultLabel = copyBtn.dataset.labelDefault || "Copiar";
    const label = $("span", copyBtn);

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        const helper = document.createElement("textarea");

        helper.value = text;
        helper.setAttribute("readonly", "");
        helper.style.position = "fixed";
        helper.style.left = "-9999px";
        helper.style.top = "0";

        document.body.appendChild(helper);
        helper.select();

        const copied = document.execCommand("copy");

        helper.remove();

        if (!copied) {
          throw new Error("Clipboard fallback failed");
        }
      }

      copyBtn.classList.add("is-done");

      if (label) {
        label.textContent = doneLabel;
      }

      window.setTimeout(() => {
        copyBtn.classList.remove("is-done");

        if (label) {
          label.textContent = defaultLabel;
        }
      }, 2000);
    } catch {
      // El enlace sigue visible aunque la copia falle.
    }
  });

  /* ===================================================================
     NEWSLETTER
     Validación visual. No requiere backend.
     =================================================================== */

  const newsletterForm = $("#newsletter-form");
  const emailInput = $("#email");
  const formNote = $("#form-note");

  newsletterForm?.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!emailInput || !formNote) return;

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
     AÑO DINÁMICO DEL FOOTER
     =================================================================== */

  const yearEl = $("#year");

  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  /* ===================================================================
     NAVBAR + BARRA DE PROGRESO

     OPTIMIZADO:
     - No se lee scrollHeight en cada scroll.
     - La altura desplazable se mide cuando hace falta.
     - El scroll solo utiliza window.scrollY.
     =================================================================== */

  const header = $("#site-header");
  const progressBar = $("#scroll-progress");

  let ticking = false;
  let documentScrollableHeight = 0;

  const measureScrollMetrics = () => {
    documentScrollableHeight = Math.max(
      0,
      document.documentElement.scrollHeight - window.innerHeight
    );
  };

  const updateScrollUI = () => {
    const scrollY = window.scrollY;

    if (header) {
      header.classList.toggle("is-scrolled", scrollY > 20);
    }

    if (progressBar) {
      const progress =
        documentScrollableHeight > 0
          ? scrollY / documentScrollableHeight
          : 0;

      progressBar.style.transform =
        `scaleX(${Math.min(Math.max(progress, 0), 1)})`;
    }

    ticking = false;
  };

  const requestScrollUpdate = () => {
    if (ticking) return;

    ticking = true;
    window.requestAnimationFrame(updateScrollUI);
  };

  const handleResize = () => {
    measureScrollMetrics();
    requestScrollUpdate();
  };

  window.addEventListener("scroll", requestScrollUpdate, {
    passive: true,
  });

  window.addEventListener("resize", handleResize, {
    passive: true,
  });

  /*
   * Detecta cambios de tamaño del documento provocados por:
   * imágenes, fuentes o contenido dinámico.
   */
  if (window.ResizeObserver) {
    const documentResizeObserver = new ResizeObserver(() => {
      measureScrollMetrics();
    });

    documentResizeObserver.observe(document.documentElement);
  }

  measureScrollMetrics();
  updateScrollUI();

  /* ===================================================================
     EFECTOS DE HOVER
     Solo dispositivos con ratón/puntero preciso.

     OPTIMIZADO:
     - getBoundingClientRect() no se ejecuta en cada mousemove.
     - Las coordenadas se guardan.
     - requestAnimationFrame limita las actualizaciones.
     =================================================================== */

  if (canHover && !prefersReducedMotion) {

    /* ---------------------------------------------------------------
       CODE CARD
       --------------------------------------------------------------- */

    const codeCard = $("#code-card");

    if (codeCard) {
      let codeCardRect = null;
      let codeCardFrame = 0;
      let codeCardX = 0;
      let codeCardY = 0;

      const measureCodeCard = () => {
        codeCardRect = codeCard.getBoundingClientRect();
      };

      const resetCodeCard = () => {
        if (codeCardFrame) {
          cancelAnimationFrame(codeCardFrame);
          codeCardFrame = 0;
        }

        codeCard.style.transform =
          "perspective(1000px) rotateY(-6deg) rotateX(2deg)";
      };

      const updateCodeCard = () => {
        codeCardFrame = 0;

        if (!codeCardRect) {
          measureCodeCard();
        }

        const rect = codeCardRect;

        if (!rect || rect.width === 0 || rect.height === 0) {
          return;
        }

        const x = (codeCardX - rect.left) / rect.width;
        const y = (codeCardY - rect.top) / rect.height;

        const rotateY = (x - 0.5) * 10;
        const rotateX = (0.5 - y) * 8;

        codeCard.style.transform =
          `perspective(1000px) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
      };

      codeCard.addEventListener(
        "mousemove",
        (event) => {
          codeCardX = event.clientX;
          codeCardY = event.clientY;

          if (!codeCardFrame) {
            codeCardFrame =
              requestAnimationFrame(updateCodeCard);
          }
        },
        { passive: true }
      );

      codeCard.addEventListener(
        "mouseenter",
        () => {
          measureCodeCard();
        },
        { passive: true }
      );

      codeCard.addEventListener(
        "mouseleave",
        resetCodeCard,
        { passive: true }
      );

      window.addEventListener(
        "resize",
        measureCodeCard,
        { passive: true }
      );
    }

    /* ---------------------------------------------------------------
       HERO ORBS
       --------------------------------------------------------------- */

    const heroSection = $(".hero");
    const orbOne = $(".orb-one");
    const orbTwo = $(".orb-two");

    if (heroSection && orbOne && orbTwo) {
      let heroRect = null;
      let heroFrame = 0;
      let heroX = 0;
      let heroY = 0;

      const measureHero = () => {
        heroRect = heroSection.getBoundingClientRect();
      };

      const resetHeroOrbs = () => {
        if (heroFrame) {
          cancelAnimationFrame(heroFrame);
          heroFrame = 0;
        }

        orbOne.style.transform =
          "translate3d(0, 0, 0)";

        orbTwo.style.transform =
          "translate3d(0, 0, 0)";
      };

      const updateHeroOrbs = () => {
        heroFrame = 0;

        if (!heroRect) {
          measureHero();
        }

        const rect = heroRect;

        if (!rect || rect.width === 0 || rect.height === 0) {
          return;
        }

        const x =
          (heroX - rect.left) / rect.width - 0.5;

        const y =
          (heroY - rect.top) / rect.height - 0.5;

        orbOne.style.transform =
          `translate3d(${x * 24}px, ${y * 24}px, 0)`;

        orbTwo.style.transform =
          `translate3d(${x * -18}px, ${y * -18}px, 0)`;
      };

      heroSection.addEventListener(
        "mousemove",
        (event) => {
          heroX = event.clientX;
          heroY = event.clientY;

          if (!heroFrame) {
            heroFrame =
              requestAnimationFrame(updateHeroOrbs);
          }
        },
        { passive: true }
      );

      heroSection.addEventListener(
        "mouseenter",
        () => {
          measureHero();
        },
        { passive: true }
      );

      heroSection.addEventListener(
        "mouseleave",
        resetHeroOrbs,
        { passive: true }
      );

      window.addEventListener(
        "resize",
        measureHero,
        { passive: true }
      );
    }
  }
})();

