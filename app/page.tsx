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


const orbitalCopy = {
  es: {
    kicker: "02 / CONEXIÓN",
    title: "La unificación",
    highlight: "de dos mundos",
    text: "Talento y empresas se acercan hasta encontrar el punto exacto donde encajan.",
    left: "TALENTO",
    right: "OPORTUNIDAD",
    center: "MATCH",
    scroll: "SCROLL PARA CONECTAR",
  },
  en: {
    kicker: "02 / CONNECTION",
    title: "The unifitación",
    highlight: "of two worlds",
    text: "Talent and companies move closer until they find the exact point where they fit.",
    left: "TALENT",
    right: "OPPORTUNITY",
    center: "MATCH",
    scroll: "SCROLL TO CONNECT",
  },
} as const;

function OrbitalConvergence({ locale }: { locale: Locale }) {
  const rootRef = useRef<HTMLElement | null>(null);
  const triggeredRef = useRef(false);
  const progressRef = useRef(0);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let ticking = false;
    let raf = 0;

    const clamp = (value: number, min = 0, max = 1) =>
      Math.min(max, Math.max(min, value));

    const render = () => {
      ticking = false;
      const rect = root.getBoundingClientRect();
      const travel = Math.max(root.offsetHeight - window.innerHeight, 1);
      const raw = clamp(-rect.top / travel);
      const p = reduce ? 1 : raw;
      progressRef.current = p;

      // Same cinematic curve as desktop. The only mobile adaptation is the
      // physical size of the starting doorway in CSS; the timing/curve is
      // deliberately identical so the motion feels like the desktop version.
      const approach = clamp((p - 0.18) / 0.64);
      const rush = clamp((p - 0.68) / 0.29);
      const door = clamp((p - 0.10) / 0.86);
      const light = clamp((p - 0.54) / 0.42);
      const darkness = 1 - clamp((p - 0.70) / 0.24);
      const text = 1 - clamp((p - 0.22) / 0.24);

      const ease = approach * approach * (3 - 2 * approach);
      const rushEase = rush * rush * rush * (rush * (rush * 6 - 15) + 10);
      const camera = ease * 0.56 + rushEase * 1.55;
      const imageScale = 1 + camera * 0.72;
      const imageY = camera * 7.5;
      const imageBlur = rush * 0.8;
      const doorScale = 1 + door * 5.2 + rushEase * 5.5;
      const doorGlow = 0.18 + light * 1.2 + rushEase * 2.4;
      const flare = clamp((p - 0.88) / 0.11);
      const portalOpacity = 1 - clamp((p - 0.91) / 0.07);

      root.style.setProperty("--cave-progress", p.toFixed(4));
      root.style.setProperty("--cave-camera", camera.toFixed(4));
      root.style.setProperty("--cave-image-scale", imageScale.toFixed(4));
      root.style.setProperty("--cave-image-y", `${imageY.toFixed(2)}%`);
      root.style.setProperty("--cave-image-blur", `${imageBlur.toFixed(2)}px`);
      root.style.setProperty("--cave-door-scale", doorScale.toFixed(4));
      root.style.setProperty("--cave-door-glow", doorGlow.toFixed(4));
      root.style.setProperty("--cave-darkness", darkness.toFixed(4));
      root.style.setProperty("--cave-text", text.toFixed(4));
      root.style.setProperty("--cave-flare", flare.toFixed(4));
      root.style.setProperty("--cave-portal-opacity", portalOpacity.toFixed(4));

      if (!reduce && p > 0.975 && !triggeredRef.current) {
        triggeredRef.current = true;
        root.classList.add("is-crossing");
        // Keep the desktop crossing. On mobile use an immediate handoff only
        // after the light has filled the viewport, preventing the black jump.
        window.setTimeout(() => {
          document.getElementById("inicio")?.scrollIntoView({ behavior: "auto", block: "start" });
        }, 70);
      }

      if (p < 0.82 && triggeredRef.current) {
        triggeredRef.current = false;
        root.classList.remove("is-crossing");
      }
    };

    const schedule = () => {
      if (ticking) return;
      ticking = true;
      raf = window.requestAnimationFrame(render);
    };

    render();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      window.cancelAnimationFrame(raf);
    };
  }, []);

  const copy = locale === "es"
    ? {
        kicker: "ENTRADA / 01",
        title: "BUSCA TU PROPIA",
        highlight: "SALIDA.",
        subtitle: "No esperes a que aparezca. Acércate.",
        scroll: "DESLIZA PARA AVANZAR",
      }
    : {
        kicker: "ENTRY / 01",
        title: "FIND YOUR OWN",
        highlight: "WAY OUT.",
        subtitle: "Don't wait for it to appear. Move closer.",
        scroll: "SCROLL TO MOVE FORWARD",
      };

  return (
    <section
      className="orbital-convergence cave-portal"
      id="conexion"
      ref={rootRef}
      aria-labelledby="cave-portal-title"
    >
      <div className="cave-portal__sticky">
        <div className="cave-portal__image" aria-hidden="true" />
        <div className="cave-portal__image-shade" aria-hidden="true" />
        <div className="cave-portal__rock-depth cave-portal__rock-depth--left" aria-hidden="true" />
        <div className="cave-portal__rock-depth cave-portal__rock-depth--right" aria-hidden="true" />

        <div className="cave-portal__door" aria-hidden="true">
          <span className="cave-portal__door-shadow" />
          <span className="cave-portal__door-core" />
          <span className="cave-portal__door-haze" />
        </div>

        <div className="cave-portal__shadow-waves" aria-hidden="true">
          <svg className="cave-shadow-svg" viewBox="0 0 1600 900" preserveAspectRatio="none">
            <defs>
              <filter id="caveInkWarp" x="-25%" y="-25%" width="150%" height="150%">
                <feTurbulence type="fractalNoise" baseFrequency="0.008 0.022" numOctaves="3" seed="19" result="noise" />
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="92" xChannelSelector="R" yChannelSelector="G" />
                <feGaussianBlur stdDeviation="1.2" />
              </filter>
              <filter id="caveInkSoft" x="-30%" y="-30%" width="160%" height="160%">
                <feTurbulence type="fractalNoise" baseFrequency="0.012 0.028" numOctaves="2" seed="7" result="noise" />
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="58" />
                <feGaussianBlur stdDeviation="7" />
              </filter>
              <radialGradient id="caveInkFade">
                <stop offset="0" stopColor="#000" stopOpacity=".88" />
                <stop offset=".52" stopColor="#000" stopOpacity=".52" />
                <stop offset="1" stopColor="#000" stopOpacity="0" />
              </radialGradient>
            </defs>
            <g className="cave-ink-ribbons" filter="url(#caveInkWarp)">
              <path className="cave-ink-ribbon cave-ink-ribbon--1" d="M-120 110 C120 18 250 92 360 210 C438 294 520 314 605 278 C642 262 662 242 682 214" />
              <path className="cave-ink-ribbon cave-ink-ribbon--1b" d="M1720 125 C1490 30 1360 98 1248 220 C1170 304 1082 320 996 282 C956 264 936 242 916 212" />
              <path className="cave-ink-ribbon cave-ink-ribbon--2" d="M-150 640 C110 500 260 528 382 628 C474 704 550 720 622 676 C652 658 676 636 700 604" />
              <path className="cave-ink-ribbon cave-ink-ribbon--2b" d="M1750 650 C1500 508 1342 534 1224 630 C1130 706 1050 718 978 674 C948 656 924 632 900 602" />
              <path className="cave-ink-ribbon cave-ink-ribbon--3" d="M20 900 C210 770 330 770 430 824 C500 862 558 854 612 810 C638 788 656 764 676 738" />
              <path className="cave-ink-ribbon cave-ink-ribbon--3b" d="M1580 900 C1390 770 1270 770 1170 824 C1100 862 1042 854 988 810 C962 788 944 764 924 738" />
            </g>
            <g className="cave-ink-clouds" filter="url(#caveInkSoft)">
              <ellipse cx="150" cy="245" rx="360" ry="220" fill="url(#caveInkFade)" />
              <ellipse cx="1450" cy="265" rx="390" ry="245" fill="url(#caveInkFade)" />
              <ellipse cx="260" cy="700" rx="430" ry="210" fill="url(#caveInkFade)" />
              <ellipse cx="1370" cy="710" rx="440" ry="225" fill="url(#caveInkFade)" />
            </g>
          </svg>
          <span className="cave-shadow-wave cave-shadow-wave--1" />
          <span className="cave-shadow-wave cave-shadow-wave--2" />
          <span className="cave-shadow-wave cave-shadow-wave--3" />
          <span className="cave-shadow-wave cave-shadow-wave--4" />
          <span className="cave-shadow-wave cave-shadow-wave--5" />
          <span className="cave-shadow-wave cave-shadow-wave--6" />
          <span className="cave-shadow-wave cave-shadow-wave--7" />
          <span className="cave-shadow-wave cave-shadow-wave--8" />
          <span className="cave-shadow-ribbon cave-shadow-ribbon--1" />
          <span className="cave-shadow-ribbon cave-shadow-ribbon--2" />
          <span className="cave-shadow-ribbon cave-shadow-ribbon--3" />
          <span className="cave-shadow-ribbon cave-shadow-ribbon--4" />
          <span className="cave-shadow-ribbon cave-shadow-ribbon--5" />
          <span className="cave-shadow-tendril cave-shadow-tendril--1" />
          <span className="cave-shadow-tendril cave-shadow-tendril--2" />
          <span className="cave-shadow-tendril cave-shadow-tendril--3" />
          <span className="cave-shadow-tendril cave-shadow-tendril--4" />
          <span className="cave-shadow-wave cave-shadow-wave--9" />
          <span className="cave-shadow-wave cave-shadow-wave--10" />
          <span className="cave-shadow-wave cave-shadow-wave--11" />
          <span className="cave-shadow-wave cave-shadow-wave--12" />
          <span className="cave-shadow-wave cave-shadow-wave--13" />
          <span className="cave-shadow-wave cave-shadow-wave--14" />
          <span className="cave-shadow-wave cave-shadow-wave--15" />
          <span className="cave-shadow-wave cave-shadow-wave--16" />
          <span className="cave-shadow-ribbon cave-shadow-ribbon--6" />
          <span className="cave-shadow-ribbon cave-shadow-ribbon--7" />
          <span className="cave-shadow-ribbon cave-shadow-ribbon--8" />
          <span className="cave-shadow-ribbon cave-shadow-ribbon--9" />
        </div>

        <div className="cave-portal__light-beams" aria-hidden="true">
          <span className="cave-light-beam cave-light-beam--1" />
          <span className="cave-light-beam cave-light-beam--2" />
          <span className="cave-light-beam cave-light-beam--3" />
          <span className="cave-light-speck cave-light-speck--1" />
          <span className="cave-light-speck cave-light-speck--2" />
          <span className="cave-light-speck cave-light-speck--3" />
          <span className="cave-light-speck cave-light-speck--4" />
        </div>

        <div className="cave-portal__bounce cave-portal__bounce--floor" aria-hidden="true" />
        <div className="cave-portal__bounce cave-portal__bounce--left" aria-hidden="true" />
        <div className="cave-portal__bounce cave-portal__bounce--right" aria-hidden="true" />

        <div className="cave-portal__cosmic" aria-hidden="true">
          <svg viewBox="0 0 1600 900" preserveAspectRatio="none">
            <defs>
              <linearGradient id="caveLightFlow" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor="#4df7e8" stopOpacity="0" />
                <stop offset=".48" stopColor="#5deaff" stopOpacity=".52" />
                <stop offset=".52" stopColor="#ffffff" stopOpacity=".92" />
                <stop offset=".62" stopColor="#76bfff" stopOpacity=".42" />
                <stop offset="1" stopColor="#5aaaff" stopOpacity="0" />
              </linearGradient>
              <filter id="caveLightGlow" x="-30%" y="-100%" width="160%" height="300%">
                <feGaussianBlur stdDeviation="2.5" result="b" />
                <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
            </defs>
            <g filter="url(#caveLightGlow)">
              <path className="cave-light-line cave-light-line--1" d="M -30 270 C 430 220, 650 510, 970 445 C 1170 405, 1390 235, 1640 275" fill="none" stroke="url(#caveLightFlow)" />
              <path className="cave-light-line cave-light-line--2" d="M -30 650 C 330 560, 570 350, 875 430 C 1140 500, 1350 650, 1640 570" fill="none" stroke="url(#caveLightFlow)" />
              <path className="cave-light-line cave-light-line--3" d="M 70 120 C 360 190, 570 300, 810 420 C 1060 545, 1290 510, 1570 330" fill="none" stroke="url(#caveLightFlow)" />
            </g>
          </svg>
          <i className="cave-light-particle cave-light-particle--1" />
          <i className="cave-light-particle cave-light-particle--2" />
          <i className="cave-light-particle cave-light-particle--3" />
          <i className="cave-light-particle cave-light-particle--4" />
          <i className="cave-light-particle cave-light-particle--5" />
          <i className="cave-light-particle cave-light-particle--6" />
        </div>

        <div className="cave-portal__grain" aria-hidden="true" />
        <div className="cave-portal__flare" aria-hidden="true" />

        <div className="cave-portal__copy">
          <span className="cave-portal__kicker">{copy.kicker}</span>
          <h1 id="cave-portal-title">
            {copy.title} <em>{copy.highlight}</em>
          </h1>
          <p>{copy.subtitle}</p>
        </div>

        <div className="cave-portal__scroll">
          <span>{copy.scroll}</span>
          <i />
        </div>
      </div>
    </section>
  );
}


function DarkFlow({
  variant = "left",
  intensity = "soft",
}: {
  variant?: "left" | "right" | "bottom" | "top";
  intensity?: "soft" | "strong";
}) {
  return (
    <div
      className={`dark-flow dark-flow--${variant} dark-flow--${intensity}`}
      aria-hidden="true"
    >
      <span className="dark-flow__mass dark-flow__mass--one" />
      <span className="dark-flow__mass dark-flow__mass--two" />
      <span className="dark-flow__ribbon dark-flow__ribbon--one" />
      <span className="dark-flow__ribbon dark-flow__ribbon--two" />
      <span className="dark-flow__core" />
    </div>
  );
}

function CosmicPageField() {
  const streams = Array.from({ length: 22 }, (_, index) => {
    const side = index % 2 === 0 ? -1 : 1;
    const y = 13 + ((index * 17) % 74);
    const bend = 70 + ((index * 23) % 150);
    return {
      id: index,
      side,
      y,
      bend,
      duration: 7 + (index % 8) * 0.8,
      delay: -(index % 9) * 0.75,
    };
  });

  const particles = Array.from({ length: 70 }, (_, index) => ({
    id: index,
    left: 3 + ((index * 43) % 94),
    top: 7 + ((index * 29) % 86),
    size: 1 + (index % 3) * 0.55,
    duration: 4 + (index % 7) * 0.8,
    delay: -(index % 10) * 0.6,
  }));

  return (
    <div className="cosmic-page-field" aria-hidden="true">
      <div className="cosmic-page-field__atmosphere" />
      <svg className="cosmic-page-field__flow" viewBox="0 0 1600 900" preserveAspectRatio="none">
        <defs>
          <linearGradient id="globalFlowGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#54f7e8" stopOpacity="0" />
            <stop offset=".42" stopColor="#59e9ff" stopOpacity=".55" />
            <stop offset=".5" stopColor="#ffffff" stopOpacity=".9" />
            <stop offset=".6" stopColor="#73baff" stopOpacity=".55" />
            <stop offset="1" stopColor="#5aaaff" stopOpacity="0" />
          </linearGradient>
          <filter id="globalFlowGlow" x="-30%" y="-100%" width="160%" height="300%">
            <feGaussianBlur stdDeviation="2.8" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        <g filter="url(#globalFlowGlow)">
          {streams.map((stream) => {
            const startX = stream.side < 0 ? 0 : 1600;
            const endX = stream.side < 0 ? 1600 : 0;
            const c1 = stream.side < 0 ? 430 : 1170;
            const c2 = stream.side < 0 ? 700 : 900;
            const y1 = stream.y * 9;
            const y2 = 450 + (stream.y - 50) * 2.8;
            return (
              <path
                key={stream.id}
                d={`M ${startX} ${y1} C ${c1} ${y1 + stream.bend * stream.side}, ${c2} ${y2}, ${endX} ${900 - y1}`}
                fill="none"
                stroke="url(#globalFlowGradient)"
                strokeWidth="0.8"
                strokeLinecap="round"
                strokeDasharray="75 210"
                style={{
                  "--global-flow-duration": `${stream.duration}s`,
                  "--global-flow-delay": `${stream.delay}s`,
                } as React.CSSProperties}
              />
            );
          })}
        </g>
      </svg>
      <div className="cosmic-page-field__particles">
        {particles.map((particle) => (
          <i
            key={particle.id}
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              "--global-particle-duration": `${particle.duration}s`,
              "--global-particle-delay": `${particle.delay}s`,
            } as React.CSSProperties}
          />
        ))}
      </div>
      <div className="cosmic-page-field__vignette" />
    </div>
  );
}


function CustomCursor() {
  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!finePointer) return;

    const cursor = document.createElement("div");
    cursor.className = "site-cursor";
    cursor.innerHTML = '<span class="site-cursor__dot"></span><span class="site-cursor__label">VIEW</span><span class="site-cursor__ring"></span>';
    document.body.appendChild(cursor);

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let tx = x;
    let ty = y;
    let raf = 0;

    const updateSurface = (clientX: number, clientY: number) => {
      const target = document.elementFromPoint(clientX, clientY) as HTMLElement | null;
      const section = target?.closest("section");
      const dark = Boolean(section?.classList.contains("section-dark") || section?.classList.contains("orbital-convergence"));
      cursor.classList.toggle("is-dark", dark);

      const interactive = target?.closest("a, button, [role=button], input, textarea, select");
      cursor.classList.toggle("is-hovering", Boolean(interactive));
      const label = cursor.querySelector(".site-cursor__label");
      if (label) label.textContent = interactive ? (interactive.tagName === "BUTTON" ? "GO" : "OPEN") : "VIEW";
    };

    const render = () => {
      x += (tx - x) * 0.16;
      y += (ty - y) * 0.16;
      cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      raf = window.requestAnimationFrame(render);
    };

    const onMove = (event: PointerEvent) => {
      tx = event.clientX;
      ty = event.clientY;
      cursor.classList.add("is-visible");
      updateSurface(event.clientX, event.clientY);
    };

    const onLeave = () => cursor.classList.remove("is-visible");

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerleave", onLeave);
    raf = window.requestAnimationFrame(render);

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
      window.cancelAnimationFrame(raf);
      cursor.remove();
    };
  }, []);

  return null;
}


export default function Home() {
  const tournamentRail = useRef<HTMLDivElement>(null);
  const jobRail = useRef<HTMLDivElement>(null);
  const testimonialsRail = useRef<HTMLDivElement>(null);
  const heroVisual = useRef<HTMLDivElement>(null);
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

    const root = document.documentElement;
    root.dataset.flowTheme = "light";
    root.style.setProperty("--page-darkness", "0.18");

    let frame = 0;

    const updateScrollProgress = () => {
      window.cancelAnimationFrame(frame);

      frame = window.requestAnimationFrame(() => {
        const scrollTop = window.scrollY;
        const documentHeight =
          document.documentElement.scrollHeight - window.innerHeight;

        const progress =
          documentHeight > 0 ? scrollTop / documentHeight : 0;

        root.style.setProperty(
          "--scroll-progress",
          `${progress * 100}%`
        );
        root.style.setProperty("--cosmic-progress", progress.toFixed(4));
        root.style.setProperty("--cosmic-shift", `${((progress - 0.5) * -34).toFixed(2)}px`);

        const hero = heroVisual.current;
        if (hero) {
          const rect = hero.getBoundingClientRect();
          const vh = Math.max(window.innerHeight, 1);
          const heroProgress = Math.max(-1, Math.min(1, (vh * 0.72 - rect.top) / Math.max(vh * 1.15, 1)));
          hero.style.setProperty("--hero-scroll-y", `${(heroProgress * -38).toFixed(2)}px`);
          hero.style.setProperty("--hero-scroll-rotate", `${(heroProgress * -2.6).toFixed(2)}deg`);
          hero.style.setProperty("--hero-scroll-scale", `${(1 - Math.abs(heroProgress) * 0.025).toFixed(4)}`);
        }
      });
    };

    updateScrollProgress();

    window.addEventListener("scroll", updateScrollProgress, { passive: true });
    window.addEventListener("resize", updateScrollProgress);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateScrollProgress);
      window.removeEventListener("resize", updateScrollProgress);
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
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

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

  // La profundidad del hero responde al cursor sin crear renders de React.
  // En táctil y cuando el usuario reduce movimiento no se activa.
  useEffect(() => {
    const visual = heroVisual.current;
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!visual || !finePointer.matches || reducedMotion.matches) return;

    let frame = 0;

    const reset = () => {
      visual.style.setProperty("--hero-x", "0px");
      visual.style.setProperty("--hero-y", "0px");
      visual.style.setProperty("--hero-rotate-x", "0deg");
      visual.style.setProperty("--hero-rotate-y", "0deg");
    };

    const handleMove = (event: PointerEvent) => {
      const rect = visual.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        visual.style.setProperty("--hero-x", `${(x * 34).toFixed(2)}px`);
        visual.style.setProperty("--hero-y", `${(y * 34).toFixed(2)}px`);
        visual.style.setProperty("--hero-rotate-x", `${(-y * 6).toFixed(2)}deg`);
        visual.style.setProperty("--hero-rotate-y", `${(x * 8).toFixed(2)}deg`);
      });
    };

    visual.addEventListener("pointermove", handleMove);
    visual.addEventListener("pointerleave", reset);

    return () => {
      window.cancelAnimationFrame(frame);
      visual.removeEventListener("pointermove", handleMove);
      visual.removeEventListener("pointerleave", reset);
    };
  }, []);

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

  useEffect(() => {
    const header = document.getElementById("site-header");
    if (!header) return;

    let raf = 0;

    const updateHeaderTone = () => {
      raf = 0;

      const probeY = Math.min(
        window.innerHeight - 24,
        Math.max(92, window.innerHeight * 0.22)
      );

      // The fixed navbar sits above the page, so temporarily let the probe
      // pass through it. This makes the tone follow the actual section
      // underneath instead of accidentally reading the navbar itself.
      const previousPointerEvents = header.style.pointerEvents;
      header.style.pointerEvents = "none";
      const element = document.elementFromPoint(window.innerWidth / 2, probeY);
      header.style.pointerEvents = previousPointerEvents;

      const section = element?.closest(
        "section, footer, .section-dark, .dark-section, .cave-portal"
      );

      const isDark = Boolean(
        section?.classList.contains("section-dark") ||
        section?.classList.contains("dark-section") ||
        section?.classList.contains("cave-portal") ||
        section?.getAttribute("data-theme") === "dark"
      );

      header.classList.toggle("is-dark", isDark);
    };

    const scheduleHeaderTone = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(updateHeaderTone);
    };

    updateHeaderTone();
    window.addEventListener("scroll", scheduleHeaderTone, { passive: true });
    window.addEventListener("resize", scheduleHeaderTone);

    return () => {
      window.removeEventListener("scroll", scheduleHeaderTone);
      window.removeEventListener("resize", scheduleHeaderTone);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Mobile menu: lock the page, close on Escape, and close when tapping outside.
  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    const onPointerDown = (event: PointerEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const menu = document.getElementById("nav-menu");
      const toggle = document.querySelector<HTMLButtonElement>(".site-header .nav-toggle");

      if (menu && !menu.contains(target) && toggle && !toggle.contains(target)) {
        setMenuOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [menuOpen]);

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

    // Advance one complete viewport of cards:
    // 4 cards on desktop, 3/2/1 on narrower layouts.
    const visibleCards =
      element.clientWidth >= 1250 ? 4 :
      element.clientWidth >= 900 ? 3 :
      element.clientWidth >= 600 ? 2 : 1;

    const step = (slideWidth + gap) * visibleCards;

    element.scrollBy({
      left: (direction === "next" ? 1 : -1) * step,
      behavior: "smooth",
    });
  };

  const activeBadgeData = badgeConfig[activeBadge];
  const activeBadgeText = activeBadgeData ? t.badges.items[activeBadgeData.id] : null;

  return (
    <>
      <CosmicPageField />
      <div className="ambient-page-light ambient-page-light--one" aria-hidden="true" />
      <div className="ambient-page-light ambient-page-light--two" aria-hidden="true" />
      <CustomCursor />

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
              className="language-control__select language-control__select--flow"
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

        <OrbitalConvergence locale={locale} />

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
              <div className="hero-visual reveal reveal-delay" ref={heroVisual}>
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
              className="intro-v2 section-dark container reveal"
              id="que-es"
              aria-labelledby="intro-title"
            >
              <div className="section-shadow-field section-shadow-field--dark section-shadow-field--intro" aria-hidden="true">
                <span className="section-shadow-wave section-shadow-wave--a" />
                <span className="section-shadow-wave section-shadow-wave--b" />
                <span className="section-shadow-wave section-shadow-wave--c" />
              </div>
              {/* HEADER */}
              <div className="intro-v2__header">
                <div className="intro-v2__index">
                  <span>01</span>
                  <i />
                  <span>{t.intro.kicker}</span>
                </div>

                <p className="intro-v2__microcopy">
                  {t.intro.sideNote.line1} {t.intro.sideNote.line2}
                </p>
              </div>

              {/* MAIN STATEMENT */}
              <div className="intro-v2__statement">
                <div className="intro-v2__statement-number" aria-hidden="true">
                  01
                </div>

                <div className="intro-v2__statement-content">
                  <h2 id="intro-title">
                    {t.intro.titleLine1}
                    <span>{t.intro.titleHighlight}</span>
                  </h2>

                  <p>
                    {t.intro.leadStart}
                    <strong>{t.intro.leadStrong}</strong>
                    {t.intro.leadEnd}
                  </p>
                </div>

                <div className="intro-v2__signal" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
              </div>

              {/* TRANSFORMATION */}
              <div
                className="intro-v2__transformation"
                aria-label={t.intro.shift.ariaLabel}
              >
                <div className="intro-v2__transformation-label">
                  <span>THE SHIFT</span>
                  <i />
                </div>

                <div className="intro-v2__flow">
                  <div className="intro-v2__source">
                    <small>{t.intro.shift.before}</small>

                    <div className="intro-v2__source-lines">
                      {t.intro.shift.rows.map((row, index) => (
                        <div key={row.before} className="intro-v2__source-row">
                          <span>0{index + 1}</span>
                          <p>{row.before}</p>
                        </div>
                      ))}
                    </div>

                    <div className="intro-v2__source-stamp">
                      <span>OLD MODEL</span>
                    </div>
                  </div>

                  <div className="intro-v2__bridge" aria-hidden="true">
                    <div className="intro-v2__bridge-line" />
                    <div className="intro-v2__bridge-core">
                      <span>→</span>
                    </div>
                    <small>TRANSFORM</small>
                  </div>

                  <div className="intro-v2__destination">
                    <div className="intro-v2__destination-head">
                      <small>{t.intro.shift.after}</small>
                      <span>✓</span>
                    </div>

                    <div className="intro-v2__destination-content">
                      {t.intro.shift.rows.map((row) => (
                        <div key={row.after}>
                          <i />
                          <p>{row.after}</p>
                        </div>
                      ))}
                    </div>

                    <div className="intro-v2__destination-footer">
                      <span>NEW MODEL</span>
                      <b>READY</b>
                    </div>
                  </div>
                </div>
              </div>

              {/* BOTTOM PRINCIPLES */}
              <div
                className="intro-v2__principles"
                aria-label={t.intro.ecosystem.ariaLabel}
              >
                <div className="intro-v2__principles-intro">
                  <span>{t.intro.ecosystem.label}</span>

                  <h3>
                    {t.intro.ecosystem.titleLine1}
                    <br />
                    {t.intro.ecosystem.titleLine2}
                  </h3>
                </div>

                <div className="intro-v2__principle">
                  <span>01</span>
                  <strong>{t.intro.ecosystem.flow[0]}</strong>
                  <p>Skills</p>
                </div>

                <div className="intro-v2__principle">
                  <span>02</span>
                  <strong>{t.intro.ecosystem.flow[1]}</strong>
                  <p>Practice</p>
                </div>

                <div className="intro-v2__principle intro-v2__principle--result">
                  <span>03</span>
                  <strong>{t.intro.ecosystem.result}</strong>
                  <p>Outcome</p>
                </div>
              </div>
            </section>



        <section
          className="pillars section-light container recurring-shadow-section reveal"
          id="pilares"
          aria-labelledby="pillars-title"
        >
          <div className="section-shadow-field section-shadow-field--light section-shadow-field--recurring" aria-hidden="true">
  <span className="section-shadow-wave section-shadow-wave--a" />
  <span className="section-shadow-wave section-shadow-wave--b" />
  <span className="section-shadow-wave section-shadow-wave--c" />
  <DarkFlow variant="left" intensity="soft" />
</div>
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
          className="next-tournament section-dark reveal"
          id="proximo-torneo"
        >
          <div
            className="next-tournament__glow"
            aria-hidden="true"
          />
          <DarkFlow variant="right" intensity="strong" />

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
                className="button button-primary next-tournament__cta next-tournament__discord"
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
              aria-label={t.nextTournament.hiddenNote}
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
          className="badges-section badges-section--editorial section-light container reveal recurring-shadow-section"
          id="insignias"
          aria-labelledby="badges-title"
        >
          <div className="section-shadow-field section-shadow-field--light section-shadow-field--recurring" aria-hidden="true">
  <span className="section-shadow-wave section-shadow-wave--a" />
  <span className="section-shadow-wave section-shadow-wave--b" />
  <span className="section-shadow-wave section-shadow-wave--c" />
  <DarkFlow variant="left" intensity="soft" />
</div>
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
          className="stats-section stats-section--editorial section-dark container reveal"
          aria-labelledby="stats-title"
        >
          <div className="section-shadow-field section-shadow-field--dark section-shadow-field--stats" aria-hidden="true">
            <span className="section-shadow-wave section-shadow-wave--a" />
            <span className="section-shadow-wave section-shadow-wave--b" />
            <DarkFlow variant="left" intensity="strong" />
          </div>
          <h2 id="stats-title" className="visually-hidden">
            {t.stats.ariaTitle}
          </h2>

          <div className="stats-intro">
            <div>
              <span className="stats-intro__kicker">TECHTOJOB / SIGNAL</span>
              <p>{t.stats.ariaTitle}</p>
            </div>
            <span className="stats-intro__index">03 — 08</span>
          </div>

          <div className="stats-dashboard">
            <div className="stats-dashboard__metrics">
              {t.stats.items.map((stat, index) => (
                <article className="stat-card" key={stat.value}>
                  <div className="stat-card__top">
                    <span>{`0${index + 1}`}</span>
                    <i />
                  </div>
                  <strong>{stat.value}</strong>
                  <span className="stat-card__label">
                    {stat.label.split("\n").map((line, lineIndex) => (
                      <span key={`${stat.value}-${line}`}>
                        {lineIndex > 0 && <br />}
                        {line}
                      </span>
                    ))}
                  </span>
                  <div className="stat-card__meter" aria-hidden="true"><span /></div>
                </article>
              ))}
            </div>

            <article className="stats-dashboard__feature">
              <div className="stats-dashboard__feature-top">
                <span>{t.stats.accent.label}</span>
                <span>↗</span>
              </div>
              <strong>{t.stats.accent.value}</strong>
              <div className="stats-dashboard__feature-grid" aria-hidden="true">
                <span /><span /><span /><span /><span /><span /><span /><span /><span />
              </div>
            </article>
          </div>
        </section>

        <section
          className="process-section section-light container reveal"
          id="como-funciona"
          aria-labelledby="process-title"
        >
          <div className="section-shadow-field section-shadow-field--light section-shadow-field--process" aria-hidden="true">
            <span className="section-shadow-wave section-shadow-wave--a" />
            <span className="section-shadow-wave section-shadow-wave--b" />
            <span className="section-shadow-wave section-shadow-wave--c" />
            <DarkFlow variant="left" intensity="soft" />
          </div>
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
          className="discord-section section-dark container reveal"
          id="discord"
          aria-labelledby="discord-title"
        >
          <div className="section-shadow-field section-shadow-field--dark section-shadow-field--discord" aria-hidden="true">
            <span className="section-shadow-wave section-shadow-wave--a" />
            <span className="section-shadow-wave section-shadow-wave--b" />
            <span className="section-shadow-wave section-shadow-wave--c" />
            <DarkFlow variant="right" intensity="strong" />
          </div>
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

        <section className="showcase-section showcase-section--editorial section-light reveal recurring-shadow-section" id="oportunidades">
          <div className="section-shadow-field section-shadow-field--light section-shadow-field--showcase" aria-hidden="true">
            <span className="section-shadow-wave section-shadow-wave--a" />
            <span className="section-shadow-wave section-shadow-wave--b" />
          </div>
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

        <section className="showcase-section showcase-section--jobs showcase-section--editorial section-dark reveal" id="ofertas">
          <div className="section-shadow-field section-shadow-field--dark section-shadow-field--showcase-jobs" aria-hidden="true">
            <span className="section-shadow-wave section-shadow-wave--a" />
            <span className="section-shadow-wave section-shadow-wave--b" />
            <span className="section-shadow-wave section-shadow-wave--c" />
            <DarkFlow variant="right" intensity="strong" />
          </div>
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
          className="faq section-light container reveal"
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
          className="testimonials-section testimonials-section--editorial section-dark container reveal"
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
          className="newsletter section-light reveal recurring-shadow-section"
          id="newsletter"
        >
          <div className="section-shadow-field section-shadow-field--light section-shadow-field--recurring" aria-hidden="true">
  <span className="section-shadow-wave section-shadow-wave--a" />
  <span className="section-shadow-wave section-shadow-wave--b" />
  <span className="section-shadow-wave section-shadow-wave--c" />
  <DarkFlow variant="left" intensity="soft" />
</div>
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