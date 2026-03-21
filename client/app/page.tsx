"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function LandingPage() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Basic subtle fade-up animations for sections, excluding the hero
      const sections = gsap.utils.toArray<HTMLElement>("section:not(:first-of-type)");

      sections.forEach((section) => {
        gsap.fromTo(section, 
          { y: 30, opacity: 0 },
          {
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
            },
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
          }
        );
      });

      // Stagger animation for bento grid items, run per grid
      const grids = gsap.utils.toArray<HTMLElement>(".bento-grid");
      grids.forEach((grid) => {
        const items = grid.querySelectorAll(".bento-item");
        if (items.length > 0) {
          gsap.fromTo(items, 
            { y: 20, opacity: 0 },
            {
              scrollTrigger: {
                trigger: grid,
                start: "top 80%",
              },
              y: 0,
              opacity: 1,
              duration: 0.8,
              stagger: 0.1,
              ease: "power2.out",
            }
          );
        }
      });

      // Terminal text animation
      gsap.fromTo(
        ".terminal-text > div",
        { opacity: 0, y: 10 },
        {
          scrollTrigger: {
            trigger: ".terminal-text",
            start: "top 80%",
          },
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.2,
          ease: "power1.out",
        }
      );
    },
    { scope: container }
  );

  return (
    <div
      ref={container}
      className="bg-surface-container-lowest min-h-screen text-on-surface font-body selection:bg-primary-container selection:text-on-primary"
    >
      {/* NAVIGATION SHELL */}
      <header className="fixed top-0 w-full px-16 z-50 flex justify-between items-center h-16 bg-surface-container-lowest border-b border-outline-variant/30">
        <div className="flex items-center gap-8">
          <Link href="/">
            <span className="text-2xl font-black text-[#00FF41] tracking-widest font-headline uppercase">
              MANAGEX
            </span>
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <div className="flex gap-2">
            <button className="p-2 text-[#00FF41] hover:bg-[#00FF41]/10 transition-all active:scale-95 cursor-crosshair rounded">
              <span className="material-symbols-outlined">terminal</span>
            </button>
            <button className="p-2 text-[#00FF41] hover:bg-[#00FF41]/10 transition-all active:scale-95 cursor-crosshair rounded">
              <span className="material-symbols-outlined">settings</span>
            </button>
          </div>
          <Link href="/dashboard">
            <button className="bg-primary-container text-on-primary px-4 py-2 font-label text-xs font-bold uppercase tracking-widest pulse-glow active:scale-95 transition-all cursor-crosshair rounded-none">
              INITIALIZE_SESSION
            </button>
          </Link>
        </div>
      </header>

      {/* MAIN CANVAS */}
      <main className="relative grid-overlay pt-16">
        {/* HERO SECTION */}
        <section className="min-h-screen flex flex-col justify-center px-8 md:px-24 relative overflow-hidden">
          <div className="max-w-4xl z-10">
            <div className="inline-block border border-outline-variant/30 px-3 py-1 mb-6">
              <span className="font-label text-primary-fixed-dim text-xs tracking-[0.2em] uppercase">
                Status: System_Operational // v1.0.4
              </span>
            </div>
            <h1 className="font-headline text-6xl md:text-8xl font-black text-on-surface leading-[0.9] tracking-tighter uppercase mb-8">
              Automate Your <br />
              <span className="text-primary-container">Business</span> <br />
              Operations
            </h1>
            <p className="font-body text-xl md:text-2xl text-on-surface-variant max-w-2xl mb-12 leading-relaxed">
              Decision-centric AI agents that handle orders, inventory,
              suppliers, and customer service. Built for MSMEs who want to scale
              without the complexity.
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <Link href="/dashboard">
                <button className="bg-primary-container text-on-primary px-8 py-4 font-headline text-sm font-bold uppercase tracking-widest pulse-glow flex items-center justify-center gap-3 cursor-crosshair rounded-none">
                  DEPLOY_AGENTS <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </button>
              </Link>
              <Link href="/events">
                <button className="border border-outline px-8 py-4 font-headline text-sm font-bold uppercase tracking-widest hover:bg-surface-container-high transition-all cursor-crosshair rounded-none text-on-surface">
                  VIEW_CORE_ARCHITECTURE_
                </button>
              </Link>
            </div>
          </div>
          {/* DECORATIVE ASYMMETRY */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-2/3 opacity-20 pointer-events-none hidden lg:block">
            <div className="w-full h-full border-l border-t border-primary-container/30 relative">
              <div className="absolute top-0 right-0 p-4 font-label text-[10px] text-primary-fixed-dim space-y-2">
                <div>0x44 0x45 0x50 0x4C 0x4F 0x59</div>
                <div>LATENCY: 12ms</div>
                <div>UPTIME: 99.999%</div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES SECTION: BENTO GRID */}
        <section className="py-24 px-8 md:px-24 bg-surface-dim">
          <h2 className="font-headline text-4xl font-bold uppercase tracking-tighter mb-16 border-l-4 border-primary-container pl-6 text-on-surface">
            Intelligent Operations at Scale
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-1 bento-grid">
            {/* FEATURE CARDS USING TONAL SHIFTS */}
            <div className="md:col-span-8 bg-surface-container-low p-10 hover:bg-surface-container-high transition-all group bento-item">
              <span className="material-symbols-outlined text-primary-container text-4xl mb-6 block">
                psychology
              </span>
              <h3 className="font-headline text-2xl font-bold uppercase mb-4 text-on-surface">
                AI Customer Service
              </h3>
              <p className="text-on-surface-variant leading-relaxed text-lg">
                Continuous learning neural agents handling multi-channel support
                with 98% resolution accuracy without human intervention.
              </p>
            </div>
            <div className="md:col-span-4 bg-surface-container-low p-10 hover:bg-surface-container-high transition-all group bento-item">
              <span className="material-symbols-outlined text-primary-container text-4xl mb-6 block">
                inventory_2
              </span>
              <h3 className="font-headline text-2xl font-bold uppercase mb-4 text-on-surface">
                Inventory Intelligence
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                Predictive restocking based on trend analysis and seasonal
                velocity.
              </p>
            </div>
            <div className="md:col-span-4 bg-surface-container-low p-10 hover:bg-surface-container-high transition-all group bento-item">
              <span className="material-symbols-outlined text-primary-container text-4xl mb-6 block">
                shopping_cart
              </span>
              <h3 className="font-headline text-2xl font-bold uppercase mb-4 text-on-surface">
                Order Management
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                End-to-end routing from Shopify/WhatsApp to warehouse protocols.
              </p>
            </div>
            <div className="md:col-span-4 bg-surface-container-low p-10 hover:bg-surface-container-high transition-all group bento-item">
              <span className="material-symbols-outlined text-primary-container text-4xl mb-6 block">
                conveyor_belt
              </span>
              <h3 className="font-headline text-2xl font-bold uppercase mb-4 text-on-surface">
                Supplier Coordination
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                Automated PO generation and shipping label validation.
              </p>
            </div>
            <div className="md:col-span-4 bg-surface-container-low p-10 hover:bg-surface-container-high transition-all group bento-item">
              <span className="material-symbols-outlined text-primary-container text-4xl mb-6 block">
                monitoring
              </span>
              <h3 className="font-headline text-2xl font-bold uppercase mb-4 text-on-surface">
                Bottleneck Detection
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                Real-time systemic audit logs identifying operational friction
                points.
              </p>
            </div>
          </div>
        </section>

        {/* AGENTS SECTION: TERMINAL SIMULATION */}
        <section className="py-24 px-8 md:px-24 flex flex-col lg:flex-row gap-16 items-start bg-surface-container-lowest">
          <div className="lg:w-1/2">
            <h2 className="font-headline text-4xl font-bold uppercase tracking-tighter mb-8 text-on-surface">
              Autonomous Agents <br />
              That Actually Work
            </h2>
            <p className="text-on-surface-variant text-lg mb-12 max-w-lg">
              ManageX deploys specialized units trained for specific business
              functions. These aren't simple chatbots; they are operational
              executors with decision authority.
            </p>
            <ul className="space-y-6">
              <li className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-surface-container-high flex items-center justify-center border border-outline-variant/30 group-hover:bg-primary-container group-hover:text-on-primary transition-all">
                  <span className="material-symbols-outlined">person</span>
                </div>
                <div>
                  <span className="font-headline font-bold uppercase text-on-surface">
                    Consumer Agent
                  </span>
                  <p className="text-sm text-on-surface-variant/70 italic">
                    Handles sales, inquiries, and CRM updates.
                  </p>
                </div>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-surface-container-high flex items-center justify-center border border-outline-variant/30 group-hover:bg-primary-container group-hover:text-on-primary transition-all">
                  <span className="material-symbols-outlined">factory</span>
                </div>
                <div>
                  <span className="font-headline font-bold uppercase text-on-surface">
                    Supplier Agent
                  </span>
                  <p className="text-sm text-on-surface-variant/70 italic">
                    Negotiates lead times and confirms shipments.
                  </p>
                </div>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-surface-container-high flex items-center justify-center border border-outline-variant/30 group-hover:bg-primary-container group-hover:text-on-primary transition-all">
                  <span className="material-symbols-outlined">campaign</span>
                </div>
                <div>
                  <span className="font-headline font-bold uppercase text-on-surface">
                    Lead Agent
                  </span>
                  <p className="text-sm text-on-surface-variant/70 italic">
                    Qualifies and routes high-intent business prospects.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          {/* TERMINAL WINDOW */}
          <div className="lg:w-1/2 w-full bg-[#000000] border border-outline-variant p-1 shadow-2xl relative">
            <div className="bg-surface-container-low px-4 py-2 flex justify-between items-center border-b border-outline-variant">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-error/40 rounded-full"></div>
                <div className="w-3 h-3 bg-secondary-container/40 rounded-full"></div>
                <div className="w-3 h-3 bg-primary-container/40 rounded-full"></div>
              </div>
              <span className="font-label text-xs text-on-surface-variant uppercase tracking-widest">
                AGENT_SESSION_ID: AX-772
              </span>
            </div>
            <div className="p-6 font-label text-sm min-h-[400px] leading-relaxed relative overflow-hidden">
              <div className="scanlines absolute inset-0 pointer-events-none opacity-20"></div>
              <div className="space-y-4 relative z-10 terminal-text">
                <div className="text-primary-container font-bold mb-6">
                  [SYSTEM] AGENT_CONSUMER_01 INITIALIZED...
                </div>
                <div className="flex gap-4">
                  <span className="text-outline w-20 shrink-0">14:02:11</span>
                  <span className="text-on-surface">
                    Incoming message from +1 (555) 012-9844...
                  </span>
                </div>
                <div className="flex gap-4">
                  <span className="text-outline w-20 shrink-0">14:02:12</span>
                  <span className="text-tertiary">
                    "I need to place an order for 30 silver anklets for my
                    boutique. Do you have stock?"
                  </span>
                </div>
                <div className="flex gap-4">
                  <span className="text-outline w-20 shrink-0">14:02:14</span>
                  <span className="text-primary-container">
                    AGENT: Querying database [INV_CAT_JEWELRY]...
                  </span>
                </div>
                <div className="flex gap-4">
                  <span className="text-outline w-20 shrink-0">14:02:15</span>
                  <span className="text-primary-container">
                    AGENT: Stock confirmed (42 units). Reserving 30 units...
                  </span>
                </div>
                <div className="flex gap-4">
                  <span className="text-outline w-20 shrink-0">14:02:16</span>
                  <span className="text-primary-container">
                    AGENT: "Confirmed. 30 silver anklets are available. I've
                    sent the Shopify invoice to your email. Should I notify the
                    warehouse for priority shipping?"
                  </span>
                </div>
                <div className="flex gap-3 mt-8">
                  <span className="text-primary-fixed-dim font-bold cursor-block">
                    Waiting for input_
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS: TECHNICAL BREAKDOWN */}
        <section className="py-24 px-8 md:px-24 bg-surface-container-lowest border-t border-outline-variant/30">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-outline-variant/20 bento-grid">
            <div className="p-12 pl-0 md:pl-12 bento-item">
              <span className="font-label text-4xl text-outline-variant/50 font-black mb-6 block">
                01
              </span>
              <h3 className="font-headline text-2xl font-bold uppercase mb-4 text-primary-container">
                SYSTEM_INITIALIZE
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                Connect your operational stack. Native integration with Shopify,
                WhatsApp, and Google Sheets occurs in sub-100ms.
              </p>
            </div>
            <div className="p-12 bento-item">
              <span className="font-label text-4xl text-outline-variant/50 font-black mb-6 block">
                02
              </span>
              <h3 className="font-headline text-2xl font-bold uppercase mb-4 text-primary-container">
                AGENT_DEPLOY
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                Select and configure autonomous units based on business
                requirements. Define decision logic and budget limits.
              </p>
            </div>
            <div className="p-12 pr-0 md:pr-12 bento-item">
              <span className="font-label text-4xl text-outline-variant/50 font-black mb-6 block">
                03
              </span>
              <h3 className="font-headline text-2xl font-bold uppercase mb-4 text-primary-container">
                AUTONOMOUS_SCALE
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                Agents manage operations 24/7. Systemic alerts only trigger if
                human intervention exceeds confidence threshold.
              </p>
            </div>
          </div>
        </section>

        {/* CATEGORIES SECTION */}
        <section className="py-24 px-8 md:px-24 bg-surface-dim">
          <h2 className="font-headline text-4xl font-bold uppercase tracking-tighter mb-16 text-center text-on-surface">
            Multi-Category Inventory
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bento-grid">
            <div className="relative h-96 group overflow-hidden border border-outline-variant bento-item">
              <Image
                alt="Luxury silver jewelry"
                className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBDmRzl61bXVav6rysc8uCEgW_hX_p4_fUBMCI-Ut7AQzwlWhBRCMJm2FrHfDSdKlZIrINOoUJtQkcx-72VoogMxnj97jk7HeJIQ3saTbvCFmT-d3f5hXJAKnZNsgEol1yB91yVOmAc_j7HAaZI0gW_ONldjwEV-eOEG17-F_XBKWf8DYb10csD0kDgRj906VG4q0JLPveDcdk6yoLb5XUC2JgYDhupl_TcAlF-uLd0O_twO-J23_0SVwNHZ1lYJpcu1qS-VBM_1PO"
                fill
              />
              <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent flex flex-col justify-end p-8">
                <span className="font-headline text-2xl font-bold uppercase text-white">
                  Jewelry
                </span>
                <p className="text-xs text-primary-container uppercase tracking-widest mt-2 font-bold">
                  Inventory Sync: 100%
                </p>
              </div>
            </div>
            <div className="relative h-96 group overflow-hidden border border-outline-variant bento-item">
              <Image
                alt="Modern kitchen appliances"
                className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJmA0fFICvpkJNeJbxqbUPVonR_hbm-bXMlt1puvnJ4YruLq9BlidKHekFyPSgiePU5cZR41jo1YfSmFhK5J1o2NZSnVHkYb-FvZP4d6rBkYKjAwXlPgVjAmmkwAk4zrOS9K5s8lX0C8QISTgrTY143MAAkiyyglsPhe2exonWyua2f5mJl9f83phGC7sRxXSuIBCqwaAOnlArosixz5UAs1qiQcfcn3LJPI7AvAni1MiX4x50XyrAIa5rW9JChpdds0qkFmTSxvPk"
                fill
              />
              <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent flex flex-col justify-end p-8">
                <span className="font-headline text-2xl font-bold uppercase text-white">
                  Kitchen Appliances
                </span>
                <p className="text-xs text-primary-container uppercase tracking-widest mt-2 font-bold">
                  Logistics Ready
                </p>
              </div>
            </div>
            <div className="relative h-96 group overflow-hidden border border-outline-variant bento-item">
              <Image
                alt="Premium makeup set"
                className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuADUuBoFMkQ8yHegjEO-qhsManikg2ZKQQtzNAxZsYrChkQRUy3uoj1tnWizPldbwuW6sdrKgw8Ucij_5AUREP35QyiwlibkHqRx6IfM6CaHDhe1X8kN0hFZxrvGi3m3NZGLiU3pkEZUrwOqo4XwjEiEulluyTpFdU8bN7LbyXGcJUer4-mUIp91kixSJ5dm0rxlvFlqN3a7iA8ErWrwY-7IM_crzvofWj6B-RMGADm9Y7YgZF20iUGQvir7oOCqeygykmguX33BdSQ"
                fill
              />
              <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent flex flex-col justify-end p-8">
                <span className="font-headline text-2xl font-bold uppercase text-white">
                  Makeup & Cosmetics
                </span>
                <p className="text-xs text-primary-container uppercase tracking-widest mt-2 font-bold">
                  High Demand Protocol
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FLOATING QR ELEMENT */}
        <div className="fixed bottom-12 right-12 z-40 hidden md:block group">
          <div className="bg-surface-container-high border border-primary-container/30 p-4 shadow-[0_0_20px_rgba(0,255,65,0.1)] hover:shadow-[0_0_30px_rgba(0,255,65,0.2)] transition-all">
            <div className="flex flex-col items-center gap-4 mb-3">
              <div className="w-48 h-48 bg-white p-1 relative">
                <img
                  className="w-full h-full object-contain"
                  src="/qr-twilio.png"
                  width={64}
                  height={64}
                  alt="QR Code"
                />
              </div>
              <div>
                <span className="block font-headline text-xs font-bold text-primary-container leading-none uppercase mb-1">
                  Try via WhatsApp
                </span>
                <span className="block font-label text-[10px] text-on-surface-variant tracking-tighter">
                  DIRECT_LINK_ENCRYPTED
                </span>
              </div>
            </div>
            <Link href="/chat">
              <button className="w-full bg-primary-container text-on-primary py-2 font-label text-[10px] font-bold uppercase tracking-widest hover:brightness-110 cursor-crosshair rounded-none mt-2">
                LAUNCH_SIMULATION
              </button>
            </Link>
          </div>
        </div>
      </main>

      {/* FOOTER SHELL */}
      <footer className="w-full py-12 px-8 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-outline-variant/20 bg-surface-container-lowest font-label text-xs uppercase text-on-surface">
        <div className="col-span-2 md:col-span-1">
          <span className="text-[#00FF41] font-bold block mb-4 text-sm">
            MANAGEX_CORP
          </span>
          <p className="text-[#e5e2e1]/50 normal-case mb-6 leading-relaxed">
            The command layer for autonomous retail operations. Precision
            engineered for scale.
          </p>
          <span className="text-[#e5e2e1]/40 text-[10px]">
            © 2026 MANAGEX_CORP // STATUS: OPERATIONAL
          </span>
        </div>
        <div>
          <span className="text-[#e5e2e1]/60 mb-4 block font-bold">
            SYSTEM_ACCESS
          </span>
          <ul className="space-y-3">
            <li>
              <Link
                href="/dashboard"
                className="text-[#e5e2e1]/40 hover:text-[#00FF41] underline decoration-dotted transition-all cursor-crosshair"
              >
                SYSTEM_LOGS
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="text-[#e5e2e1]/40 hover:text-[#00FF41] underline decoration-dotted transition-all cursor-crosshair"
              >
                API_V1
              </a>
            </li>
          </ul>
        </div>
        <div>
          <span className="text-[#e5e2e1]/60 mb-4 block font-bold">COMPLIANCE</span>
          <ul className="space-y-3">
            <li>
              <a
                href="#"
                className="text-[#e5e2e1]/40 hover:text-[#00FF41] underline decoration-dotted transition-all cursor-crosshair"
              >
                SECURITY_PROTOCOL
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#e5e2e1]/40 hover:text-[#00FF41] underline decoration-dotted transition-all cursor-crosshair"
              >
                LEGAL_DECRYPT
              </a>
            </li>
          </ul>
        </div>
        <div>
          <span className="text-[#e5e2e1]/60 mb-4 block font-bold">CONNECT</span>
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-[#e5e2e1]/40 hover:text-[#00FF41] cursor-crosshair transition-all text-xl">
              hub
            </span>
            <span className="material-symbols-outlined text-[#e5e2e1]/40 hover:text-[#00FF41] cursor-crosshair transition-all text-xl">
              database
            </span>
            <span className="material-symbols-outlined text-[#e5e2e1]/40 hover:text-[#00FF41] cursor-crosshair transition-all text-xl">
              code
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
