"use client";

import { type FormEvent, useEffect, useRef, useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import esMessages from "../language/es.json";
import enMessages from "../language/en.json";
import HeroLogo3D from "../components/Logo3D";

type Locale = "es" | "en";

const messages = {
  es: esMessages,
  en: enMessages,
} satisfies Record<Locale, typeof esMessages>;

type IconName =
  | "bolt"
  | "briefcase"
  | "user"
  | "network"
  | "mail"
  | "spark"
  | "copy"
  | "check"
  | "chevron"
  | "arrow-up-right"
  | "badge"
  | "layout"
  | "server"
  | "shield"
  | "puzzle"
  | "discord"
  | "linkedin";

function Icon({
  name,
  className = "icon",
}: {
  name: IconName;
  className?: string;
}) {
  return (
    
    <svg
      className={className}
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
    >
      {name === "bolt" && (
        <path
          d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z"
          fill="currentColor"
        />
      )}

      {name === "briefcase" && (
        <>
          <rect
            x="3"
            y="8"
            width="18"
            height="12"
            rx="2"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path
            d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path
            d="M3 13h18"
            stroke="currentColor"
            strokeWidth="1.8"
          />
        </>
      )}

      {name === "user" && (
        <>
          <circle
            cx="12"
            cy="8"
            r="3.6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path
            d="M5 20c1.2-4 4-6 7-6s5.8 2 7 6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </>
      )}

      {name === "network" && (
        <>
          <circle cx="6" cy="6" r="2.2" fill="currentColor" />
          <circle cx="18" cy="6" r="2.2" fill="currentColor" />
          <circle cx="12" cy="18" r="2.2" fill="currentColor" />
          <path
            d="M7.8 7.2 10.4 16M16.2 7.2 13.6 16M8.2 6h7.6"
            stroke="currentColor"
            strokeWidth="1.6"
          />
        </>
      )}

      {name === "mail" && (
        <>
          <rect
            x="3"
            y="5"
            width="18"
            height="14"
            rx="2"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path
            d="m4 7 8 6 8-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      )}

      {name === "spark" && (
        <path
          d="M12 2c.6 4 3 6.4 7 7-4 .6-6.4 3-7 7-.6-4-3-6.4-7-7 4-.6 6.4-3 7-7Z"
          fill="currentColor"
        />
      )}

      {name === "copy" && (
        <>
          <rect
            x="9"
            y="9"
            width="12"
            height="12"
            rx="2"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path
            d="M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          />
        </>
      )}

      {name === "check" && (
        <path
          d="m4 12 6 6 10-12"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}

      {name === "chevron" && (
        <path
          d="m6 9 6 6 6-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}

      {name === "arrow-up-right" && (
        <path
          d="M7 17 17 7M9 7h8v8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}

      {name === "badge" && (
        <>
          <path
            d="M12 2 4 6v6c0 5 3.4 8.4 8 10 4.6-1.6 8-5 8-10V6l-8-4Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="m9 12 2 2 4-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      )}

      {name === "layout" && (
        <>
          <rect
            x="3"
            y="4"
            width="18"
            height="16"
            rx="2"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
          />
          <path
            d="M3 9h18"
            stroke="currentColor"
            strokeWidth="1.7"
          />
          <path
            d="M8 9v11"
            stroke="currentColor"
            strokeWidth="1.7"
          />
        </>
      )}

      {name === "server" && (
        <>
          <rect
            x="3.5"
            y="4"
            width="17"
            height="6.5"
            rx="1.8"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
          />
          <rect
            x="3.5"
            y="13.5"
            width="17"
            height="6.5"
            rx="1.8"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
          />
          <circle cx="7.3" cy="7.25" r="1" fill="currentColor" />
          <circle cx="7.3" cy="16.75" r="1" fill="currentColor" />
        </>
      )}

      {name === "shield" && (
        <path
          d="M12 2.5 5 5.5v5c0 5.2 3 8.3 7 10 4-1.7 7-4.8 7-10v-5l-7-3Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
      )}

      {name === "puzzle" && (
        <path
          d="M9 4h3.5a1.5 1.5 0 0 1 1.5 1.5v1.7a1.6 1.6 0 0 0 2.6 1.24 1.6 1.6 0 0 1 2.6 1.26v1.6a1.6 1.6 0 0 1-2.6 1.26 1.6 1.6 0 0 0-2.6 1.24V16H12v3.5A1.5 1.5 0 0 1 10.5 21H8a1.5 1.5 0 0 1-1.5-1.5v-2.2a1.6 1.6 0 0 0-2.53-1.3A1.6 1.6 0 0 1 2.5 14.7v-1.9a1.6 1.6 0 0 1 2.47-1.34A1.6 1.6 0 0 0 7.5 10.1V7.5A1.5 1.5 0 0 1 9 6V4Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      )}

      {name === "discord" && (
        <path
          d="M8.5 9c-.5 0-1 .45-1 1s.5 1 1 1 1-.45 1-1-.5-1-1-1Zm7 0c-.5 0-1 .45-1 1s.5 1 1 1 1-.45 1-1-.5-1-1-1ZM8 4.5A16 16 0 0 1 12 4a16 16 0 0 1 4 .5l1.3 2.2c1.4 2.1 2.2 4.5 2.2 7v1.6c-1.4 1.1-3 1.9-4.7 2.3l-.6-1.3c.8-.3 1.6-.7 2.3-1.2-.2-.15-.4-.3-.5-.45a11 11 0 0 1-8 0c-.2.15-.35.3-.55.45.7.5 1.5.9 2.3 1.2l-.6 1.3a12.6 12.6 0 0 1-4.7-2.3v-1.6c0-2.5.8-4.9 2.2-7L8 4.5Z"
          fill="currentColor"
        />
      )}

      {name === "linkedin" && (
        <path
          d="M6.94 8.5H4V20h2.94V8.5ZM5.47 4a1.7 1.7 0 1 0 0 3.4 1.7 1.7 0 0 0 0-3.4ZM20 20h-2.94v-6.06c0-1.44-.03-3.3-2.02-3.3-2.02 0-2.33 1.58-2.33 3.2V20H9.77V8.5h2.82v1.57h.04c.39-.74 1.36-1.53 2.8-1.53 3 0 3.57 1.97 3.57 4.54V20Z"
          fill="currentColor"
        />
      )}
    </svg>
  );
}

// Static structural config: icon, layout order and asset paths only.
// All display text lives in messages/es.json (t) so it can be swapped
// for another locale (e.g. messages/en.json) without touching this file.

type PillarId = keyof typeof esMessages.pillars.items;
type BadgeId = keyof typeof esMessages.badges.items;
type FaqId = keyof typeof esMessages.faq.items;
type TestimonialId = keyof typeof esMessages.testimonials.items;
type TournamentId = keyof typeof esMessages.tournamentsSection.items;
type JobOfferId = keyof typeof esMessages.offersSection.items;

const pillarConfig: {
  id: PillarId;
  number: string;
  icon: IconName;
  featured?: boolean;
}[] = [
  { id: "tournaments", number: "01", icon: "bolt", featured: true },
  { id: "companies", number: "02", icon: "briefcase" },
  { id: "selfPublish", number: "03", icon: "user" },
  { id: "networking", number: "04", icon: "network" },
];

const badgeConfig: { id: BadgeId; icon: IconName; featured?: boolean }[] = [
  { id: "frontend", icon: "layout", featured: true },
  { id: "backend", icon: "server" },
  { id: "security", icon: "shield" },
  { id: "algorithms", icon: "puzzle" },
];

const faqOrder: FaqId[] = ["free", "experience", "howTournaments", "companies"];

const testimonialConfig: { id: TestimonialId; linkedin: string }[] = [
  { id: "frontend", linkedin: "#" },
  { id: "backend", linkedin: "#" },
  { id: "security", linkedin: "#" },
  { id: "data", linkedin: "#" },
  { id: "company", linkedin: "#" },
];

const tournamentConfig: { id: TournamentId; image: string }[] = [
  { id: "frontend", image: "/images/torneofrontend.png" },
  { id: "backend", image: "/images/torneobackend.png" },
  { id: "blueteam", image: "/images/torneoblueteam.png" },
  { id: "solver", image: "/images/torneosolver.png" },
];

const jobOfferConfig: { id: JobOfferId; image: string }[] = [
  { id: "frontend", image: "/images/ofertaFrontend.png" },
  { id: "backend", image: "/images/ofertaBackend.png" },
  { id: "design", image: "/images/ofertaDiseño.png" },
  { id: "data", image: "/images/ofertaDatos.png" },
];

const productLinksConfig: { key: keyof typeof esMessages.footer.columns.product.links; href: string }[] = [
  { key: "whatIsIt", href: "#que-es" },
  { key: "pillars", href: "#pilares" },
  { key: "howItWorks", href: "#como-funciona" },
  { key: "tournaments", href: "#proximo-torneo" },
];

const communityLinksConfig: { key: keyof typeof esMessages.footer.columns.community.links; href: string }[] = [
  { key: "badges", href: "#insignias" },
  { key: "faq", href: "#faq" },
  { key: "testimonials", href: "#testimonios" },
  { key: "newsletter", href: "#newsletter" },
  { key: "github", href: "https://github.com/DRAKEFISTFIRE" },
];

export default function Home() {
  const tournamentRail = useRef<HTMLDivElement>(null);
  const jobRail = useRef<HTMLDivElement>(null);
  const testimonialsRail = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [footerCopied, setFooterCopied] = useState(false);
  const [email, setEmail] = useState("");
  const [locale, setLocale] = useState<Locale>("es");
  const t = messages[locale];
  const [formStatus, setFormStatus] = useState<"idle" | "empty" | "success">("idle");

  const [activeBadge, setActiveBadge] = useState(0);

  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    const storedLocale = window.localStorage.getItem("techtojob-locale");

    if (storedLocale === "es" || storedLocale === "en") {
      setLocale(storedLocale);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    window.localStorage.setItem("techtojob-locale", locale);
  }, [locale]);

  useEffect(() => {
    setYear(new Date().getFullYear());

    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress =
        documentHeight > 0 ? scrollTop / documentHeight : 0;

      document.documentElement.style.setProperty(
        "--scroll-progress",
        `${progress * 100}%`
      );
    };

    updateScrollProgress();

    window.addEventListener("scroll", updateScrollProgress, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
    };
  }, []);

  useEffect(() => {
    const getNextTournamentCountdown = () => {
      const now = new Date();

      const nextMonth = new Date(
        now.getFullYear(),
        now.getMonth() + 1,
        1,
        0,
        0,
        0
      );

      const difference = nextMonth.getTime() - now.getTime();

      const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
      );

      const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
      );

      const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
      );

      const seconds = Math.floor(
        (difference / 1000) % 60
      );

      setCountdown({
        days,
        hours,
        minutes,
        seconds,
      });
    };

    getNextTournamentCountdown();

    const interval = window.setInterval(
      getNextTournamentCountdown,
      1000
    );

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  // Inclinación 3D en tarjetas (pilares, insignias, testimonios y
  // slides de torneos/ofertas). Solo CSS custom properties; el
  // peso real de la transformación vive en css/redesign-polish.css.
  useEffect(() => {
    const cards = document.querySelectorAll<HTMLElement>(
      ".pillar, .badge-mini, .testimonial-card, .wide-slide"
    );

    const handlePointerMove = (event: PointerEvent) => {
      const card = event.currentTarget as HTMLElement;
      const rect = card.getBoundingClientRect();

      if (!rect.width || !rect.height) return;

      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      card.style.setProperty("--tilt-x", `${(-y * 7).toFixed(2)}deg`);
      card.style.setProperty("--tilt-y", `${(x * 9).toFixed(2)}deg`);
    };

    const handlePointerLeave = (event: PointerEvent) => {
      const card = event.currentTarget as HTMLElement;
      card.style.setProperty("--tilt-x", "0deg");
      card.style.setProperty("--tilt-y", "0deg");
    };

    cards.forEach((card) => {
      card.classList.add("tilt-3d");
      card.addEventListener("pointermove", handlePointerMove);
      card.addEventListener("pointerleave", handlePointerLeave);
    });

    return () => {
      cards.forEach((card) => {
        card.removeEventListener("pointermove", handlePointerMove);
        card.removeEventListener("pointerleave", handlePointerLeave);
      });
    };
  }, [locale]);

  const handleCopyInvite = async () => {
    try {
      await navigator.clipboard.writeText(
        "https://discord.gg/W2dhUs3wa"
      );

      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      setCopied(false);
    }
  };

  const handleCopyFooterInvite = async () => {
    try {
      await navigator.clipboard.writeText(
        "https://discord.gg/W2dhUs3wa"
      );

      setFooterCopied(true);

      window.setTimeout(() => {
        setFooterCopied(false);
      }, 2000);
    } catch {
      setFooterCopied(false);
    }
  };

  const handleNewsletterSubmit = (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (!email.trim()) {
      setFormStatus("empty");
      return;
    }

    setFormStatus("success");

    setEmail("");
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleLocale = () => {
    setLocale((previous) => (previous === "es" ? "en" : "es"));
  };

  const moveSlider = (
    rail: { current: HTMLDivElement | null },
    direction: "previous" | "next"
  ) => {
    const element = rail.current;
    if (!element) return;

    const firstSlide = element.firstElementChild as HTMLElement | null;
    const gap = Number.parseFloat(getComputedStyle(element).gap) || 0;
    const slideWidth =
      firstSlide?.getBoundingClientRect().width || element.clientWidth * 0.82;

    element.scrollBy({
      left: (direction === "next" ? 1 : -1) * (slideWidth + gap),
      behavior: "smooth",
    });
  };

  const activeBadgeData = badgeConfig[activeBadge];
  const activeBadgeText = activeBadgeData ? t.badges.items[activeBadgeData.id] : null;

  return (
    <>
      <div
        className="scroll-progress"
        aria-hidden="true"
      />

      <a className="skip-link" href="#main">
        {t.skipLink}
      </a>

      <header
        className="site-header"
        id="site-header"
      >
        <nav
          className="navbar container"
          aria-label={t.nav.ariaLabel}
        >
          <a
            href="#inicio"
            className="brand"
            aria-label={t.nav.brandAlt}
            onClick={closeMenu}
          >
            <Image
              src="/images/logotechtojob.png"
              alt={t.nav.brandAlt}
              className="brand-mark"
              width={260}
              height={52}
              priority
            />
          </a>

          <button
            className="nav-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="nav-menu"
            aria-label={
              menuOpen
                ? t.nav.closeMenu
                : t.nav.openMenu
            }
            onClick={() =>
              setMenuOpen((value) => !value)
            }
          >
            <span />
            <span />
            <span />
          </button>

          <div
            className={`nav-menu ${
              menuOpen ? "is-open" : ""
            }`}
            id="nav-menu"
          >
            <a href="#que-es" onClick={closeMenu}>
              {t.nav.whatIsIt}
            </a>

            <a href="#pilares" onClick={closeMenu}>
              {t.nav.pillars}
            </a>

            <a
              href="#como-funciona"
              onClick={closeMenu}
            >
              {t.nav.howItWorks}
            </a>

            <a
              href="#proximo-torneo"
              onClick={closeMenu}
            >
              {t.nav.tournaments}
            </a>

            <a href="#oportunidades" onClick={closeMenu}>
              {t.nav.offers}
            </a>

            <a href="#faq" onClick={closeMenu}>
              {t.nav.faq}
            </a>

            <a href="#testimonios" onClick={closeMenu}>
              {t.nav.testimonials}
            </a>

            <a
              href="#newsletter"
              onClick={closeMenu}
            >
              {t.nav.newsletter}
            </a>

            <a
              className="nav-cta"
              href="https://discord.gg/W2dhUs3wa"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.nav.joinDiscord}{" "}
              <span aria-hidden="true">↗</span>
            </a>

           <div className="language-control">
          <label
            htmlFor="language-select"
            className="language-control__label"
          >
            {locale === "es" ? "Idioma" : "Language"}
          </label>

          <div className="language-control__wrapper">
            <select
              id="language-select"
              className="language-control__select"
              value={locale}
              onChange={(event) => {
                const newLocale = event.target.value as Locale;
                setLocale(newLocale);
                setMenuOpen(false);
              }}
              aria-label={locale === "es" ? "Seleccionar idioma" : "Select language"}
            >
              <option value="es">Español</option>
              <option value="en">English</option>
            </select>

            <span
              className="language-control__icon"
              aria-hidden="true"
            >
              <Icon name="chevron" />
            </span>
          </div>
        </div>
          </div>
        </nav>
      </header>

      <main id="main">

        <section className="hero container" id="inicio">
              <div className="hero-glow hero-glow--left" aria-hidden="true" />
              <div className="hero-glow hero-glow--right" aria-hidden="true" />

              <Image
                src="/images/favicon.png"
                alt=""
                aria-hidden="true"
                className="hero-watermark"
                width={500}
                height={500}
                priority
              />

              {/* COPY */}
              <div className="hero-copy reveal">
                <div className="hero-eyebrow">
                  <span className="hero-eyebrow__line" aria-hidden="true" />
                  <span className="pulse" aria-hidden="true" />
                  {t.hero.eyebrow}
                </div>

                <h1>
                  <span className="hero-title-main">
                    {t.hero.titleLine1}
                  </span>
                  <span className="hero-title-accent">
                    {t.hero.titleHighlight}
                  </span>
                </h1>

                <p className="hero-text">
                  {t.hero.text}
                </p>

                <div className="hero-actions">
                  <a
                    className="button button-primary hero-main-cta"
                    href="https://discord.gg/W2dhUs3wa"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>{t.hero.ctaPrimary}</span>
                    <span className="hero-cta-arrow" aria-hidden="true">↗</span>
                  </a>

                  <a
                    className="button button-ghost hero-secondary-cta"
                    href="#oportunidades"
                  >
                    <span>{t.hero.ctaSecondary}</span>
                    <span aria-hidden="true">↓</span>
                  </a>
                </div>

                <div className="hero-proof" aria-label={t.nav.brandAlt}>
                  {t.hero.proof.map((item, index) => (
                    <span key={item} className="hero-proof__item">
                      <span className="hero-proof__check" aria-hidden="true">
                        ✓
                      </span>
                      {item}
                      {index < t.hero.proof.length - 1 && (
                        <span className="hero-proof__separator" aria-hidden="true">
                          /
                        </span>
                      )}
                    </span>
                  ))}
                </div>
              </div>

              {/* VISUAL */}
              <div className="hero-visual reveal reveal-delay">
                <div className="hero-grid" aria-hidden="true" />

                <div className="orb orb-one" aria-hidden="true" />
                <div className="orb orb-two" aria-hidden="true" />

                {/* Línea decorativa */}
                <div className="hero-orbit hero-orbit--one" aria-hidden="true" />
                <div className="hero-orbit hero-orbit--two" aria-hidden="true" />

                {/* LOGO 3D PRINCIPAL */}
                <div className="hero-logo-stage">
                  <div className="hero-logo-glow" aria-hidden="true" />

                  <HeroLogo3D />

                  <div className="hero-logo-caption">
                    <span className="hero-logo-caption__line" />
                    <span>TECH TO JOB</span>
                    <span className="hero-logo-caption__line" />
                  </div>
                </div>

                {/* FLOATING TOP */}
                <div
                  className="floating-card float-top"
                  aria-hidden="true"
                >
                  <span className="mini-icon">
                    <Icon name="spark" />
                  </span>

                  <div className="floating-card__content">
                    <small>{t.hero.floatingTop.label}</small>
                    <strong>{t.hero.floatingTop.value}</strong>
                  </div>

                  <span className="floating-card__signal">
                    +
                  </span>
                </div>

                {/* FLOATING BOTTOM */}
                <div
                  className="floating-card float-bottom"
                  aria-hidden="true"
                >
                  <span className="mini-avatar">
                    ↗
                  </span>

                  <div className="floating-card__content">
                    <small>{t.hero.floatingBottom.label}</small>
                    <strong>{t.hero.floatingBottom.value}</strong>
                  </div>

                  <span className="match">
                    {t.hero.floatingBottom.badge}
                  </span>
                </div>

                {/* MINI LABEL */}
                <div className="hero-visual-label" aria-hidden="true">
                  <span>TECH</span>
                  <span>TO</span>
                  <span>JOB</span>
                </div>
              </div>
            </section>
        <section
          className="intro container reveal"
          id="que-es"
          aria-labelledby="intro-title"
        >
          <div className="intro__side">
            <div className="section-kicker">{t.intro.kicker}</div>

            <div className="intro-visual" aria-hidden="true">
              <span className="intro-visual__label">{t.intro.visualLabel}</span>

              <div className="intro-visual__before">
                <div className="intro-visual__before-head">
                  <span>{t.intro.before.fileName}</span>
                  <span>{t.intro.before.version}</span>
                </div>

                <div className="intro-visual__lines">
                  <span className="intro-visual__line intro-visual__line--w1" />
                  <span className="intro-visual__line intro-visual__line--w2" />
                  <span className="intro-visual__line intro-visual__line--w3" />
                  <span className="intro-visual__line intro-visual__line--w2" />
                </div>

                <span className="intro-visual__before-strike" />
              </div>

              <div className="intro-visual__connector">
                <span className="intro-visual__connector-line" />
                <span className="intro-visual__connector-dot">↓</span>
              </div>

              <div className="intro-visual__after">
                <div className="intro-visual__after-top">
                  <i /><i /><i />
                  <b>{t.intro.after.fileName}</b>
                </div>

                <div className="intro-visual__after-body">
                  <span>{t.intro.after.tag}</span>
                  <strong>{t.intro.after.text}</strong>
                </div>

                <span className="intro-visual__badge">
                  <Icon name="check" />
                </span>
              </div>
            </div>

            <div className="intro__side-note">
              <span>01</span>
              <p>{t.intro.sideNote.line1}<br />{t.intro.sideNote.line2}</p>
            </div>
          </div>

          <div className="intro__main">
            <h2 id="intro-title">
              {t.intro.titleLine1}
              <br />
              <span>{t.intro.titleHighlight}</span>
            </h2>

            <p className="intro__lead">
              {t.intro.leadStart}<strong>{t.intro.leadStrong}</strong>{t.intro.leadEnd}
            </p>

            <div className="intro-shift" aria-label={t.intro.shift.ariaLabel}>
              <div className="intro-shift__head" aria-hidden="true">
                <span>{t.intro.shift.before}</span>
                <span>{t.intro.shift.after}</span>
              </div>

              <div className="intro-shift__rows">
                {t.intro.shift.rows.map((row, index) => (
                  <div className="intro-shift__row" key={row.before}>
                    <div className="intro-shift__cell intro-shift__cell--before">
                      <span className="intro-shift__index">{`0${index + 1}`}</span>
                      <p>{row.before}</p>
                    </div>
                    <div className="intro-shift__cell intro-shift__cell--after">
                      <span className="intro-shift__check" aria-hidden="true">✓</span>
                      <p>{row.after}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="intro-ecosystem" aria-label={t.intro.ecosystem.ariaLabel}>
              <div className="intro-ecosystem__copy">
                <span>{t.intro.ecosystem.label}</span>
                <strong>{t.intro.ecosystem.titleLine1}<br />{t.intro.ecosystem.titleLine2}</strong>
              </div>

              <div className="intro-ecosystem__flow">
                {t.intro.ecosystem.flow.map((word, index) => (
                  <span key={word}>
                    {word}
                    {index < t.intro.ecosystem.flow.length - 1 && <i aria-hidden="true">+</i>}
                  </span>
                ))}
                <b aria-hidden="true">→</b>
                <strong>{t.intro.ecosystem.result}</strong>
              </div>
            </div>
          </div>
        </section>

        <section
          className="pillars container"
          id="pilares"
          aria-labelledby="pillars-title"
        >
          <div className="section-heading">
            <div>
              <div className="section-kicker">
                {t.pillars.kicker}
              </div>

              <h2 id="pillars-title">
                {t.pillars.titleLine1}
                <br />
                <span>{t.pillars.titleHighlight}</span>
              </h2>
            </div>

            <p>
              {t.pillars.lead}
            </p>
          </div>

          <div className="pillars-layout">
            <div className="pillars-illustration-wrap">
              <span
                className="pillars-illustration-glow pillars-illustration-glow--one"
                aria-hidden="true"
              />
              <span
                className="pillars-illustration-glow pillars-illustration-glow--two"
                aria-hidden="true"
              />

              <div className="pillars-illustration-frame">
                <Image
                  src="/images/maptechtojob.png"
                  alt=""
                  aria-hidden="true"
                  className="pillars-illustration"
                  width={520}
                  height={520}
                  loading="lazy"
                />

                <span
                  className="pillars-illustration-tag"
                  aria-hidden="true"
                >
                  <i />
                  {t.pillars.mapTag}
                </span>
              </div>
            </div>

            <div className="pillar-grid">
              {pillarConfig.map((pillar) => {
                const pillarText = t.pillars.items[pillar.id];

                return (
                  <article
                    key={pillar.id}
                    className={`pillar reveal ${
                      pillar.featured
                        ? "pillar--featured"
                        : ""
                    }`}
                  >
                    <div className="pillar__top">
                      <span
                        className="pillar-icon"
                        aria-hidden="true"
                      >
                        <Icon
                          name={pillar.icon}
                        />
                      </span>

                      <span
                        className="pillar-number"
                        aria-hidden="true"
                      >
                        {pillar.number}
                      </span>
                    </div>

                    <div className="pillar__body">
                      <h3>{pillarText.title}</h3>

                      <p>
                        {pillarText.description}
                      </p>

                      <span className="pillar-tag">
                        {pillarText.tag}
                      </span>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section
          className="next-tournament reveal"
          id="proximo-torneo"
        >
          <div
            className="next-tournament__glow"
            aria-hidden="true"
          />

          <div className="container next-tournament__inner">
            <div className="next-tournament__copy">
              <div className="section-kicker next-tournament__kicker">
                {t.nextTournament.kicker}
              </div>

              <h2>
                {t.nextTournament.titleLine1}
                <br />
                <span>{t.nextTournament.titleHighlight}</span>
              </h2>

              <p>
                {t.nextTournament.text}
              </p>

              <a
                className="button button-primary"
                href="https://discord.gg/W2dhUs3wa"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.nextTournament.cta}{" "}
                <span aria-hidden="true">
                  ↗
                </span>
              </a>
            </div>

            <div
              className="countdown"
              id="countdown"
              aria-hidden="true"
            >
              <div className="countdown__unit">
                <span className="countdown__value">
                  {String(
                    countdown.days
                  ).padStart(2, "0")}
                </span>

                <span className="countdown__label">
                  {t.nextTournament.countdown.days}
                </span>
              </div>

              <div className="countdown__unit">
                <span className="countdown__value">
                  {String(
                    countdown.hours
                  ).padStart(2, "0")}
                </span>

                <span className="countdown__label">
                  {t.nextTournament.countdown.hours}
                </span>
              </div>

              <div className="countdown__unit">
                <span className="countdown__value">
                  {String(
                    countdown.minutes
                  ).padStart(2, "0")}
                </span>

                <span className="countdown__label">
                  {t.nextTournament.countdown.minutes}
                </span>
              </div>

              <div className="countdown__unit">
                <span className="countdown__value">
                  {String(
                    countdown.seconds
                  ).padStart(2, "0")}
                </span>

                <span className="countdown__label">
                  {t.nextTournament.countdown.seconds}
                </span>
              </div>
            </div>

            <p className="visually-hidden">
              {t.nextTournament.hiddenNote}
            </p>
          </div>
        </section>

        <section
          className="badges-section badges-section--editorial container reveal"
          id="insignias"
          aria-labelledby="badges-title"
        >
          <div className="badges-header">
            <div>
              <div className="section-kicker badges__kicker">{t.badges.kicker}</div>
              <h2 id="badges-title">
                {t.badges.titleLine1}
                <br />
                <span>{t.badges.titleHighlight}</span>
              </h2>
            </div>

            <div className="badges-header__side">
              <span className="eyebrow-number">{t.badges.eyebrowNumber}</span>
              <p>
                {t.badges.leadStart}<strong>{t.badges.leadStrong}</strong>
              </p>
            </div>
          </div>

          <div className="badges-showcase">
            <div className="badges-showcase__main">
              <article className="badge-feature" aria-live="polite">
                <div className="badge-feature__meta">
                  <span>{`0${activeBadge + 1}`}</span>
                  <span>{t.badges.completedLabel}</span>
                </div>

                <div className="badge-feature__emblem" aria-hidden="true">
                  <span><Icon name={activeBadgeData?.icon || "badge"} /></span>
                  <i /><i /><i />
                  <div className="badge-feature__emblem-label">
                    <span>{t.badges.emblemBrand}</span>
                    <strong>{t.badges.emblemVerified}</strong>
                  </div>
                </div>

                <div className="badge-feature__content">
                  <span className="badge-level">{activeBadgeText?.level || t.badges.defaultLevel}</span>
                  <h3>{activeBadgeText?.title || t.badges.defaultLevel}</h3>
                  <p>{activeBadgeText?.text || t.badges.defaultText}</p>
                  <div className="badge-feature__skills">
                    {(activeBadgeText?.skills || []).map((skill) => <span key={skill}>{skill}</span>)}
                  </div>
                </div>

                <div className="badge-feature__verified">
                  <Icon name="check" />
                  <span>{t.badges.verifiedNote}</span>
                </div>
              </article>
            </div>

            <div className="badges-showcase__list" aria-label={t.badges.listAriaLabel}>
              {badgeConfig.map((badge, index) => {
                const badgeText = t.badges.items[badge.id];

                return (
                  <button
                    key={badge.id}
                    type="button"
                    className={`badge-mini ${activeBadge === index ? "badge-mini--active" : ""}`}
                    onClick={() => setActiveBadge(index)}
                    aria-pressed={activeBadge === index}
                  >
                    <span className="badge-mini__number">{`0${index + 1}`}</span>
                    <span className="badge-mini__icon"><Icon name={badge.icon} /></span>
                    <span className="badge-mini__copy">
                      <span>{badgeText.level}</span>
                      <strong>{badgeText.title}</strong>
                    </span>
                    <span className="badge-mini__arrow" aria-hidden="true">↗</span>
                  </button>
                );
              })}

              <div className="badges-showcase__note">
                <span className="note-dot" />
                <div>
                  <strong>{t.badges.note.count}</strong>
                  <span>{t.badges.note.text}</span>
                </div>
                <span className="badges-showcase__note-arrow">→</span>
              </div>
            </div>
          </div>
        </section>

        <section
          className="stats-section stats-section--editorial container reveal"
          aria-labelledby="stats-title"
        >
          <h2 id="stats-title" className="visually-hidden">
            {t.stats.ariaTitle}
          </h2>

          <div className="stats-line">
            {t.stats.items.map((stat) => (
              <div className="stat-item" key={stat.value}>
                <strong>{stat.value}</strong>
                <span>
                  {stat.label.split("\n").map((line, index) => (
                    <span key={line}>
                      {index > 0 && <br />}
                      {line}
                    </span>
                  ))}
                </span>
              </div>
            ))}

            <div className="stat-item stat-item--accent">
              <span className="stat-item__label">{t.stats.accent.label}</span>
              <strong>{t.stats.accent.value}</strong>
              <span className="stat-item__arrow">↗</span>
            </div>
          </div>
        </section>

        <section
          className="process-section container reveal"
          id="como-funciona"
          aria-labelledby="process-title"
        >
          <div className="process-header">
            <div>
              <div className="section-kicker">
                {t.process.kicker}
              </div>

              <h2 id="process-title">
                {t.process.titleLine1}
                <br />
                <span>{t.process.titleHighlight}</span>
              </h2>
            </div>

            <p>
              {t.process.leadStart}
              <strong>{t.process.leadStrong}</strong>
            </p>
          </div>

          <div className="process">
            <div className="process__rail">
              <span className="process__rail-line" />

              {t.process.steps.map((step, index) => (
                <div
                  className={`process__step ${index === 0 ? "process__step--active" : ""}`}
                  key={step}
                >
                  <span>{`0${index + 1}`}</span>
                  <i />
                  <strong>{step}</strong>
                </div>
              ))}
            </div>

            <div className="process__content">
              <article className="process-card process-card--hero">
                <Image
                  src="/images/torneo.png"
                  alt={t.process.hero.imageAlt}
                  className="process-card__image process-card__image--hero"
                  width={1200}
                  height={900}
                />

                <div className="process-card__number">01</div>

                <div className="process-card__copy">
                  <span>{t.process.hero.eyebrow}</span>

                  <h3>
                    {t.process.hero.titleLine1}
                    <br />
                    <em>{t.process.hero.titleHighlight}</em>
                  </h3>

                  <p>
                    {t.process.hero.text}
                  </p>

                  <div className="process-code">
                    <span>{t.process.hero.code.label}</span>
                    <strong>{t.process.hero.code.value}</strong>
                  </div>
                </div>

                <div className="process-visual">
                  <div className="submission-card">
                    <div className="submission-card__head">
                      <span>{t.process.hero.submission.headLabel}</span>
                      <strong>{t.process.hero.submission.headStatus}</strong>
                    </div>
                    <div className="submission-card__body">
                      <span>{t.process.hero.submission.tag}</span>
                      <strong>{t.process.hero.submission.title}</strong>
                      <p>{t.process.hero.submission.text}</p>
                    </div>
                    <div className="submission-card__foot">
                      {t.process.hero.submission.footer.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>

              <div className="process-grid">
                <article className="process-card process-card--small">
                  <span className="process-card__number">02</span>

                  <Image
                    src="/images/perfil.png"
                    alt={t.process.profile.imageAlt}
                    className="process-card__image"
                    width={900}
                    height={560}
                  />

                  <div className="process-small-icon">
                    <Icon name="user" />
                  </div>

                  <h3>{t.process.profile.title}</h3>

                  <p>
                    {t.process.profile.text}
                  </p>

                  <div className="process-tags">
                    {t.process.profile.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </article>

                <article className="process-card process-card--small">
                  <span className="process-card__number">03</span>

                  <Image
                    src="/images/conversaciones.png"
                    alt={t.process.conversations.imageAlt}
                    className="process-card__image"
                    width={900}
                    height={560}
                  />

                  <div className="process-small-icon">
                    <Icon name="briefcase" />
                  </div>

                  <h3>{t.process.conversations.title}</h3>

                  <p>
                    {t.process.conversations.text}
                  </p>

                  <div className="process-status">
                    <i />
                    {t.process.conversations.status}
                  </div>
                </article>

                <article className="process-card process-card--wide">
                  <Image
                    src="/images/comunidad.png"
                    alt={t.process.community.imageAlt}
                    className="process-card__image process-card__image--wide"
                    width={1200}
                    height={600}
                  />

                  <div>
                    <span className="process-card__number">04</span>

                    <h3>
                      {t.process.community.titleLine1}
                      <br />
                      <em>{t.process.community.titleHighlight}</em>
                    </h3>

                    <p>
                      {t.process.community.text}
                    </p>
                  </div>

                  <div className="people-stack" aria-label={t.process.community.stackAriaLabel}>
                    {t.process.community.stack.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section
          className="discord-section container reveal"
          id="discord"
          aria-labelledby="discord-title"
        >
          <div className="discord-section__noise" aria-hidden="true" />

          <div className="discord-section__top">
            <span className="discord-live">
              <i />
              {t.discord.liveLabel}
            </span>

            <span>{t.discord.topRight}</span>
          </div>

          <div className="discord-section__main">
            <div className="discord-copy">
              <span className="section-kicker">
                {t.discord.kicker}
              </span>

              <h2 id="discord-title">
                {t.discord.titleLine1}
                <br />
                <em>{t.discord.titleHighlight}</em>
              </h2>

              <p>
                {t.discord.text}
              </p>

              <a
                className="discord-join"
                href="https://discord.gg/W2dhUs3wa"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>{t.discord.joinLabel}</span>
                <strong>↗</strong>
              </a>

              <div className="invite-copy">
                <code id="invite-link">
                  {t.discord.inviteLink}
                </code>

                <button
                  type="button"
                  className="invite-copy__btn"
                  onClick={handleCopyInvite}
                  aria-label={
                    copied
                      ? t.discord.copyAriaCopied
                      : t.discord.copyAriaCopy
                  }
                >
                  <Icon name="copy" />

                  <span>
                    {copied ? t.discord.copiedLabel : t.discord.copyLabel}
                  </span>
                </button>
              </div>
            </div>

            <div className="discord-community">
              <div className="discord-community__window">
                <div className="discord-community__header">
                  <span className="discord-community__logo">
                    {t.discord.window.logo}
                  </span>

                  <div>
                    <strong>{t.discord.window.title}</strong>
                    <span>{t.discord.window.subtitle}</span>
                  </div>

                  <i />
                </div>

                <div className="discord-community__messages">
                  {t.discord.window.messages.map((message, index) => (
                    <div
                      className={`discord-message ${index === t.discord.window.messages.length - 1 ? "discord-message--highlight" : ""}`}
                      key={message.channel}
                    >
                      <span className={`discord-avatar ${index > 0 ? `discord-avatar--${index === 1 ? "two" : "three"}` : ""}`}>
                        •
                      </span>

                      <div>
                        <strong>{message.channel}</strong>
                        <p>
                          {message.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="discord-community__channels">
                  {t.discord.window.channels.map((channel) => (
                    <span key={channel}>{channel}</span>
                  ))}
                </div>
              </div>

              <span className="floating-tag floating-tag--one">
                {t.discord.floatingTags[0]}
              </span>

              <span className="floating-tag floating-tag--two">
                {t.discord.floatingTags[1]}
              </span>

              <span className="floating-tag floating-tag--three">
                {t.discord.floatingTags[2]}
              </span>
            </div>
          </div>

          <div className="discord-marquee" aria-hidden="true">
            <span>
              {t.discord.marquee}
            </span>
          </div>
        </section>

        <section className="showcase-section showcase-section--editorial reveal" id="oportunidades">
          <div className="showcase-head">
            <div>
              <div className="section-kicker">{t.tournamentsSection.kicker}</div>
              <h2>
                {t.tournamentsSection.titleLine1}
                <br />
                <span>{t.tournamentsSection.titleHighlight}</span>
              </h2>
            </div>
            <p>
              {t.tournamentsSection.text}
            </p>
          </div>

          <div className="wide-slider">
            <div className="wide-slider__topbar">
              <span className="wide-slider__hint">{t.tournamentsSection.sliderHint}</span>
              <div className="slider-controls" aria-label={t.tournamentsSection.controlsAriaLabel}>
                <button type="button" onClick={() => moveSlider(tournamentRail, "previous")} aria-label={t.tournamentsSection.prevAriaLabel}>←</button>
                <button type="button" onClick={() => moveSlider(tournamentRail, "next")} aria-label={t.tournamentsSection.nextAriaLabel}>→</button>
              </div>
            </div>
            <div className="wide-slider__rail" ref={tournamentRail} tabIndex={0} aria-label={t.tournamentsSection.railAriaLabel}>
              {tournamentConfig.map((tournament, index) => {
                const tournamentText = t.tournamentsSection.items[tournament.id];

                return (
                  <article className="wide-slide wide-slide--tournament" key={tournament.id}>
                    <div className="wide-slide__image wide-slide__image--tournament">
                      <Image
                        src={tournament.image}
                        alt={tournamentText.title}
                        fill
                        sizes="(max-width: 900px) 85vw, 520px"
                        className="wide-slide__media"
                      />
                      <div className="wide-slide__image-overlay" aria-hidden="true">
                        <span>{`0${index + 1}`}</span>
                        <small>{t.tournamentsSection.overlayLabel}</small>
                      </div>
                    </div>
                    <div className="wide-slide__content">
                      <div className="wide-slide__meta"><span>{tournamentText.status}</span><b>{tournamentText.type}</b></div>
                      <h3>{tournamentText.title}</h3>
                      <p>{tournamentText.meta}</p>
                      <div className="wide-slide__footer"><span>{tournamentText.prize}</span><a href="#discord">{t.tournamentsSection.viewChallenge}</a></div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="showcase-section showcase-section--jobs showcase-section--editorial reveal" id="ofertas">
          <div className="showcase-head">
            <div>
              <div className="section-kicker">{t.offersSection.kicker}</div>
              <h2>{t.offersSection.titleLine1}<br /><span>{t.offersSection.titleHighlight}</span></h2>
            </div>
            <p>{t.offersSection.text}</p>
          </div>
          <div className="wide-slider">
            <div className="wide-slider__topbar">
              <span className="wide-slider__hint">{t.offersSection.sliderHint}</span>
              <div className="slider-controls" aria-label={t.offersSection.controlsAriaLabel}>
                <button type="button" onClick={() => moveSlider(jobRail, "previous")} aria-label={t.offersSection.prevAriaLabel}>←</button>
                <button type="button" onClick={() => moveSlider(jobRail, "next")} aria-label={t.offersSection.nextAriaLabel}>→</button>
              </div>
            </div>
            <div className="wide-slider__rail" ref={jobRail} tabIndex={0} aria-label={t.offersSection.railAriaLabel}>
              {jobOfferConfig.map((job, index) => {
                const jobText = t.offersSection.items[job.id];

                return (
                  <article className="wide-slide wide-slide--job" key={job.id}>
                    <div className="wide-slide__image wide-slide__image--job">
                      <Image
                        src={job.image}
                        alt={jobText.role}
                        fill
                        sizes="(max-width: 900px) 85vw, 520px"
                        className="wide-slide__media"
                      />
                      <div className="wide-slide__image-overlay" aria-hidden="true">
                        <span>{`0${index + 1}`}</span>
                        <small>{t.offersSection.overlayLabel}</small>
                      </div>
                    </div>
                    <div className="wide-slide__content">
                      <div className="wide-slide__meta"><span>{t.offersSection.metaTag}</span><b>{jobText.company}</b></div>
                      <h3>{jobText.role}</h3><p>{jobText.location}</p>
                      <div className="wide-slide__tags">{jobText.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                      <div className="wide-slide__footer"><span>{jobText.salary}</span><a href="#discord">{t.offersSection.viewOffer}</a></div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section
          className="faq container reveal"
          id="faq"
        >
          <div className="section-heading">
            <div>
              <div className="section-kicker">
                {t.faq.kicker}
              </div>

              <h2>
                {t.faq.titleLine1}
                <br />
                <span>{t.faq.titleHighlight}</span>
              </h2>
            </div>

            <p>
              {t.faq.text}
            </p>
          </div>

          <div className="faq-list">
            {faqOrder.map((id) => {
              const faqText = t.faq.items[id];

              return (
                <details
                  className="faq-item"
                  key={id}
                >
                  <summary>
                    {faqText.question}

                    <Icon
                      name="chevron"
                      className="icon faq-item__chevron"
                    />
                  </summary>

                  <p>{faqText.answer}</p>
                </details>
              );
            })}
          </div>
        </section>

        <section
          className="testimonials-section testimonials-section--editorial container reveal"
          id="testimonios"
          aria-labelledby="testimonials-title"
        >
          <div className="section-heading">
            <div>
              <div className="section-kicker">
                {t.testimonials.kicker}
              </div>

              <h2 id="testimonials-title">
                {t.testimonials.titleLine1}
                <br />
                <span>{t.testimonials.titleHighlight}</span>
              </h2>
            </div>

            <p>
              {t.testimonials.text}
            </p>
          </div>

          <div className="testimonials-slider">
            <div className="testimonials-slider__topbar">
              <span className="testimonials-slider__hint">{t.testimonials.sliderHint}</span>
              <div className="slider-controls" aria-label={t.testimonials.controlsAriaLabel}>
                <button
                  type="button"
                  onClick={() => moveSlider(testimonialsRail, "previous")}
                  aria-label={t.testimonials.prevAriaLabel}
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={() => moveSlider(testimonialsRail, "next")}
                  aria-label={t.testimonials.nextAriaLabel}
                >
                  →
                </button>
              </div>
            </div>

            <div
              className="testimonials-grid"
              ref={testimonialsRail}
              tabIndex={0}
              aria-label={t.testimonials.railAriaLabel}
            >
            {testimonialConfig.map((testimonial) => {
              const testimonialText = t.testimonials.items[testimonial.id];

              return (
                <article
                  className="testimonial-card reveal"
                  key={testimonial.id}
                >
                  <span
                    className="testimonial-card__mark"
                    aria-hidden="true"
                  >
                    "
                  </span>

                  <p className="testimonial-card__quote">
                    {testimonialText.quote}
                  </p>

                  <div className="testimonial-card__person">

                    <div className="testimonial-card__meta">
                      <strong>{testimonialText.name}</strong>
                      <span>{testimonialText.role}</span>
                    </div>

                    <a
                      className="testimonial-linkedin"
                      href={testimonial.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${t.testimonials.linkedinAriaLabel} ${testimonialText.name}`}
                    >
                      <Icon name="linkedin" />
                    </a>
                  </div>
                </article>
              );
            })}
            </div>
          </div>
        </section>

        <section
          className="newsletter reveal"
          id="newsletter"
        >
          <div className="container newsletter-shell">
            <div className="newsletter-visual" aria-hidden="true">
              <div className="newsletter-grid" />
              <div className="newsletter-glow newsletter-glow--one" />
              <div className="newsletter-glow newsletter-glow--two" />

              <div className="newsletter-visual-top">
                <span className="newsletter-status">
                  <span className="newsletter-status-dot" />
                  {t.newsletter.statusLabel}
                </span>
                <span className="newsletter-visual-count">01</span>
              </div>

              <div className="newsletter-art-frame">
                <Image
                  src="/images/newsletter.png"
                  alt=""
                  className="newsletter-illustration"
                  width={720}
                  height={480}
                  loading="lazy"
                />
              </div>

              <div className="newsletter-floating-card newsletter-floating-card--top">
                <span className="newsletter-floating-label">{t.newsletter.floatingTop.label}</span>
                <strong>{t.newsletter.floatingTop.title}</strong>
                <span>{t.newsletter.floatingTop.subtitle}</span>
              </div>

              <div className="newsletter-floating-card newsletter-floating-card--bottom">
                <span className="newsletter-floating-index">02</span>
                <div>
                  <strong>{t.newsletter.floatingBottom.title}</strong>
                  <span>{t.newsletter.floatingBottom.subtitle}</span>
                </div>
              </div>
            </div>

            <div className="newsletter-content">
              <div className="section-kicker">{t.newsletter.kicker}</div>

              <p className="newsletter-eyebrow">
                {t.newsletter.eyebrow}
              </p>

              <h2>
                {t.newsletter.titleLine1}
                <br />
                <span>{t.newsletter.titleHighlight}</span>
              </h2>

              <p className="newsletter-lead">
                {t.newsletter.lead}
              </p>

              <div className="newsletter-proof" aria-label={t.newsletter.kicker}>
                {t.newsletter.proof.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>

              <form
                className="newsletter-form"
                onSubmit={handleNewsletterSubmit}
                noValidate
              >
                <label htmlFor="email">{t.newsletter.form.label}</label>

                <div className="input-wrap">
                  <div className="input-icon" aria-hidden="true">
                    <Icon name="mail" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder={t.newsletter.form.placeholder}
                    required
                    value={email}
                    onChange={(event) =>
                      setEmail(event.target.value)
                    }
                  />
                  <button type="submit">
                    {t.newsletter.form.submit}
                    <span aria-hidden="true">↗</span>
                  </button>
                </div>

                <p
                  className="form-note"
                  id="form-note"
                  role="status"
                >
                  {formStatus === "empty"
                    ? t.newsletter.form.emptyError
                    : formStatus === "success"
                      ? t.newsletter.form.success
                      : t.newsletter.form.consent}
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer footer--premium">
        <div className="container footer-main">
          <div className="footer-brand-col">
          <a
            className="brand"
            href="#inicio"
          >
              <Image
                src="/images/logotechtojob.png"
                alt={t.nav.brandAlt}
                className="brand-mark"
                width={168}
                height={34}
              />
            </a>

            <p>
              {t.footer.description}
            </p>

            <div className="footer-social">
              <a
                className="footer-social__link"
                href="https://discord.gg/W2dhUs3wa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.footer.discordAriaLabel}
              >
                <Icon name="discord" />
              </a>

              <a
                className="footer-social__link"
                href="https://github.com/DRAKEFISTFIRE"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.footer.githubAriaLabel}
              >
                <Icon name="user" />
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>{t.footer.columns.product.title}</h4>

            <ul>
              {productLinksConfig.map((link) => (
                <li key={link.key}>
                  <a href={link.href}>{t.footer.columns.product.links[link.key]}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>{t.footer.columns.community.title}</h4>

            <ul>
              {communityLinksConfig.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    target={
                      link.href.startsWith("http")
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    {t.footer.columns.community.links[link.key]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-cta-col">
            <p>
              {t.footer.cta.text}
            </p>

            <a
              className="button button-primary"
              href="https://discord.gg/W2dhUs3wa"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.footer.cta.join}{" "}
              <span aria-hidden="true">↗</span>
            </a>

            <div className="invite-copy">
              <code>{t.footer.cta.inviteLink}</code>

              <button
                type="button"
                className="invite-copy__btn"
                onClick={handleCopyFooterInvite}
              >
                <Icon name="copy" />

                <span>
                  {footerCopied
                    ? t.footer.cta.copied
                    : t.footer.cta.copy}
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="container footer-bottom">
          <span>
            © {year ?? "2026"} {t.footer.copyright}
          </span>

          <span>
            {t.footer.designedBy}{" "}
            <a
              href="https://drakefistfire.github.io/web/portfolio.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.footer.designerName}
            </a>
          </span>
        </div>
      </footer>
    </>
  );
}