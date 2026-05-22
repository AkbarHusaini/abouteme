"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

// Akbar's Developer Stats and configurations for the interactive code block
const DEV_INFO = {
  name: "Akbar Husaini Nurraman",
  role: "Full-Stack Software Engineer & UI/UX Designer",
  location: "Jember, Indonesia",
  focus: "High-Impact Efficacy",
  style: "Elegance & Performance",
  stack: ["Next.js 16", "React 19", "PHP Core", "Tailwind CSS v4"],
  motto: "Code the Edge."
};

const PROJECTS = [
  {
    id: "inari",
    title: "INARI SUKI SHOWCASE",
    role: "Frontend React Developer",
    desc: "Platform reservasi kuliner interaktif yang dibangun menggunakan React JS dengan metodologi Extreme Programming (XP). Memiliki fitur validasi slot meja real-time dan abstraksi komponen modular untuk kecepatan render yang maksimal.",
    tags: ["DESIGN", "INTERACTION", "REACT JS"],
    image: "/inari.png",
    link: "#"
  },
  {
    id: "urban",
    title: "URBAN VANGUARD API",
    role: "Backend & Systems Architect",
    desc: "Sistem backend tangguh berbasis Node.js dan PHP Core. Mengintegrasikan perutean API terstruktur, penanganan query database optimal, dan proteksi penuh pada pipa transaksi data CRUD yang aman.",
    tags: ["BACKEND", "NODE.JS", "REST API"],
    image: "/urban.png",
    link: "#"
  },
  {
    id: "ideokids",
    title: "IDEOKIDS BOOKSTORE PORTAL",
    role: "Full-Stack Developer Intern",
    desc: "Proyek komersial berlisensi nyata di PT Semesta Raya Ideo. Mengembangkan landing page e-commerce buku anak serta dasbor admin komprehensif untuk manajemen inventaris buku, CRUD katalog produk, dan analitik penjualan.",
    tags: ["FULL-STACK", "PHP", "MYSQL"],
    image: "/ideokids.png",
    link: "https://www.figma.com/design/shrAWBQhpVRmNyi1MQUKlf/IdeoKids---Product-Landing-Page?node-id=153-454"
  }
];

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState("light");
  const [terminalTab, setTerminalTab] = useState("profile.js");
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null);

  // Interactive Terminal Contact states
  const [chatLog, setChatLog] = useState([
    { sender: "Sistem", text: "Koneksi terjalin secara aman dengan server DEV_CORE." },
    { sender: "Sistem", text: "Selamat datang di terminal interaktif Akbar Husaini. Hubungi saya di sini!" }
  ]);
  const [chatName, setChatName] = useState("");
  const [chatMessage, setChatMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  // Monitor scroll height to make navbar style changes dynamic
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Theme Sync on Mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Toggle Theme Switcher
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatName.trim() || !chatMessage.trim()) return;

    setIsSending(true);

    const userMsg = { sender: chatName, text: chatMessage };
    setChatLog((prev) => [...prev, userMsg]);

    const lowercaseMessage = chatMessage.toLowerCase();

    // Format pesan teks terstruktur untuk WhatsApp
    const whatsappText = `Halo Akbar! Saya ${chatName}, menghubungi Anda melalui terminal portofolio:\n\n"${chatMessage}"`;
    const whatsappUrl = `https://wa.me/6285850927708?text=${encodeURIComponent(whatsappText)}`;

    // Buka WhatsApp di tab baru secara aman
    if (typeof window !== "undefined") {
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    }

    // Tampilkan balasan konfirmasi pengalihan dari asisten terminal dev
    setTimeout(() => {
      let replyText = `Mengalihkan Anda secara aman ke WhatsApp Akbar Husaini... Terima kasih ${chatName}! Hubungi saya langsung di sana jika chat tidak terbuka otomatis.`;

      if (lowercaseMessage.includes("kerja") || lowercaseMessage.includes("magang") || lowercaseMessage.includes("hire") || lowercaseMessage.includes("proyek") || lowercaseMessage.includes("kolaborasi")) {
        replyText = `Membuka WhatsApp untuk mendiskusikan peluang kolaborasi/proyek bersama Akbar. Terima kasih ${chatName}, mari mengobrol langsung di WA!`;
      } else if (lowercaseMessage.includes("figma") || lowercaseMessage.includes("desain") || lowercaseMessage.includes("ui")) {
        replyText = `Mengarahkan ke WhatsApp untuk mendiskusikan kebutuhan desain UI/UX Anda dengan Akbar. Mari buat karya luar biasa!`;
      }

      setChatLog((prev) => [
        ...prev,
        { sender: "Akbar_Dev", text: replyText }
      ]);
      setIsSending(false);
    }, 1000);

    setChatMessage("");
  };

  return (
    <div className="flex flex-col min-h-screen text-slate-800 dark:text-slate-200 bg-background font-sans transition-colors duration-500 selection:bg-accent selection:text-white">

      {/* Sticky Header Navbar */}
      <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled
          ? "bg-card-bg/85 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-800/50 py-3.5 shadow-sm"
          : "bg-transparent py-5"
        }`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <span className="font-black text-xl tracking-tighter text-slate-900 dark:text-white group-hover:text-accent transition-colors">
              DEV_CORE<span className="text-accent animate-pulse">.</span>
            </span>
          </a>

          {/* Nav links */}
          <nav className="hidden md:flex items-center gap-8">
            {["WORK", "SKILLS", "ABOUT", "CONTACT"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-xs font-bold tracking-widest text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent hover:after:w-full after:transition-all after:duration-300"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Right Header Buttons */}
          <div className="flex items-center gap-3">
            {/* Smooth Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-full border border-slate-300 dark:border-slate-850 flex items-center justify-center text-sm hover:bg-slate-100 dark:hover:bg-slate-850 transition-all duration-300 active:scale-95 cursor-pointer shadow-sm"
              title={theme === "light" ? "Beralih ke Mode Malam (Night Mode)" : "Beralih ke Mode Terang (Light Mode)"}
            >
              {theme === "light" ? "🌙" : "☀️"}
            </button>

            {/* Hire Me Pill */}
            <a
              href="https://wa.me/6285850927708"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent hover:bg-accent-hover text-white text-xs font-bold tracking-widest px-6 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-0.5"
            >
              HIRE ME
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-6 pt-6 pb-20 z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[calc(100vh-80px)]">

        {/* Kolom Kiri: Judul Utama & Slogan (lg:col-span-5) */}
        <section className="lg:col-span-5 flex flex-col gap-6 text-center lg:text-left">
          <div className="inline-flex items-center justify-center lg:justify-start gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-bold tracking-widest text-accent uppercase">
              ENGINEERING EXCELLENCE
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900 dark:text-white leading-[0.95] uppercase">
            CODE THE <br className="hidden lg:block" />
            <span className="accent-text-glow font-black text-accent">EDGE</span>
          </h1>

          <p className="text-base text-slate-500 dark:text-slate-400 leading-relaxed max-w-lg mx-auto lg:mx-0">
            Halo! Saya Akbar Husaini Nurraman, seorang pengembang perangkat lunak dan desainer UI/UX. Saya fokus menciptakan ekosistem web berkinerja tinggi, memadukan arsitektur React/Next.js yang solid dengan visual premium yang memukau.
          </p>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-2">
            <a
              href="https://wa.me/6285850927708"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent hover:bg-accent-hover text-white text-xs font-bold tracking-widest px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-0.5"
            >
              HIRE ME
            </a>

            {/* Download Resume button */}
            <a
              href="/akbarportofolio.pdf"
              download="Akbar_Husaini_CV.pdf"
              className="border border-slate-400 dark:border-slate-800 hover:border-slate-800 dark:hover:border-white text-slate-800 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white text-xs font-bold tracking-widest px-8 py-4 rounded-full transition-all duration-300 hover:-translate-y-0.5"
            >
              CV RESUME
            </a>
          </div>
        </section>

        {/* Kolom Tengah: Foto Akbar Mengambang (lg:col-span-3) */}
        <section className="lg:col-span-3 flex flex-col items-center justify-center py-6">
          <div className="relative w-full max-w-[280px] aspect-[4/5] rounded-3xl premium-card overflow-hidden animate-float">
            <Image
              src="/akbar_v2.png"
              alt="Akbar Husaini Nurraman Portrait"
              fill
              className="object-cover object-center transform hover:scale-105 transition-transform duration-700"
              priority
            />


            {/* Minimalist Overlay Info Banner */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/95 to-transparent p-5 text-white">
              <h3 className="font-extrabold text-sm tracking-tight">{DEV_INFO.name}</h3>
              <p className="text-[10px] text-slate-400 font-mono tracking-widest uppercase mt-0.5">SOFTWARE ENGINEER</p>
            </div>
          </div>
        </section>

        {/* Kolom Kanan: Terminal Kode & Sosial (lg:col-span-4) */}
        <section className="lg:col-span-4 flex flex-col gap-6">

          {/* Visual Terminal Card */}
          <div className="terminal-card rounded-2xl overflow-hidden shadow-2xl transition-all duration-300">
            {/* Header Terminal */}
            <div className="bg-[#0b0f19] px-4 py-3 flex items-center justify-between border-b border-slate-850">
              <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full bg-[#ef4444] inline-block" />
                <span className="w-3 h-3 rounded-full bg-[#f59e0b] inline-block" />
                <span className="w-3 h-3 rounded-full bg-[#10b981] inline-block" />
              </div>
              <div className="flex gap-1.5 font-mono text-[10px]">
                <button
                  onClick={() => setTerminalTab("profile.js")}
                  className={`px-3 py-1 rounded transition-colors cursor-pointer ${terminalTab === "profile.js" ? "text-accent bg-slate-800/80 font-bold" : "text-slate-500 hover:text-slate-300"}`}
                >
                  profile.js
                </button>
                <button
                  onClick={() => setTerminalTab("stack.json")}
                  className={`px-3 py-1 rounded transition-colors cursor-pointer ${terminalTab === "stack.json" ? "text-accent bg-slate-800/80 font-bold" : "text-slate-500 hover:text-slate-300"}`}
                >
                  stack.json
                </button>
              </div>
            </div>

            {/* Isi Kode Terminal */}
            <div className="p-5 font-mono text-xs text-slate-300 leading-relaxed overflow-x-auto min-h-[200px]">
              {terminalTab === "profile.js" ? (
                <div>
                  <span className="text-purple-400">const</span> <span className="text-blue-400">engineer</span> = &#123;
                  <div className="pl-4">
                    name: <span className="text-emerald-400">"{DEV_INFO.name}"</span>,<br />
                    focus: <span className="text-emerald-400">"{DEV_INFO.focus}"</span>,<br />
                    style: <span className="text-emerald-400">"{DEV_INFO.style}"</span>,<br />
                    location: <span className="text-emerald-400">"{DEV_INFO.location}"</span>,<br />
                    motto: <span className="text-emerald-400">"Code the Edge."</span>
                  </div>
                  &#125;;
                  <br />
                  <span className="text-slate-500 mt-2 block">// Menjalankan efisiensi tinggi...</span>
                </div>
              ) : (
                <div>
                  &#123;
                  <div className="pl-4">
                    <span className="text-blue-400">"frontend"</span>: [<span className="text-emerald-400">"React JS"</span>, <span className="text-emerald-400">"Next.js"</span>],<br />
                    <span className="text-blue-400">"backend"</span>: [<span className="text-emerald-400">"Node JS"</span>, <span className="text-emerald-400">"PHP"</span>],<br />
                    <span className="text-blue-400">"database"</span>: [<span className="text-emerald-400">"MySQL"</span>, <span className="text-emerald-400">"SQL Server"</span>],<br />
                    <span className="text-blue-400">"design"</span>: [<span className="text-emerald-400">"Figma"</span>, <span className="text-emerald-400">"Photoshop"</span>]<br />
                  </div>
                  &#125;
                </div>
              )}
            </div>
          </div>

          {/* Social Links Outlines */}
          <div className="flex items-center justify-center lg:justify-start gap-4">
            <span className="text-xs font-bold tracking-widest text-slate-400 dark:text-slate-500 uppercase">HUBUNGI SAYA:</span>
            <div className="flex gap-3">
              {[
                {
                  name: "github",
                  icon: (
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.197 22 16.44 22 12.017 22 6.484 17.522 2 12 2z" />
                    </svg>
                  ),
                  url: "https://github.com/AkbarHusaini",
                  hoverClass: "hover:border-slate-900 dark:hover:border-white hover:bg-slate-900/5 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white"
                },
                {
                  name: "instagram",
                  icon: (
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  ),
                  url: "https://www.instagram.com/akbarhn5046/",
                  hoverClass: "hover:border-[#e1306c] hover:bg-[#e1306c]/5 hover:text-[#e1306c]"
                },
                {
                  name: "whatsapp",
                  icon: (
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-3.57c1.616.96 3.197 1.464 4.821 1.465 5.373 0 9.746-4.373 9.75-9.75.002-2.603-1.01-5.051-2.85-6.892C16.478 3.41 14.032 2.399 11.43 2.4c-5.378 0-9.754 4.374-9.758 9.75-.001 1.761.47 3.479 1.364 5.02L2.008 21.99l4.639-1.217zM16.9 14.125c-.267-.134-1.583-.78-1.827-.869-.243-.088-.42-.133-.596.134-.176.267-.68.868-.832 1.045-.153.177-.306.199-.573.066-.268-.134-1.13-.417-2.153-1.331-.795-.71-1.332-1.587-1.488-1.854-.156-.267-.017-.411.116-.544.12-.12.267-.312.4-.468.134-.156.178-.267.268-.446.088-.178.044-.334-.022-.468-.066-.134-.596-1.435-.817-1.969-.214-.515-.45-.445-.617-.453-.159-.008-.342-.01-.525-.01s-.48.069-.731.346c-.252.278-.962.94-.962 2.291s.982 2.655 1.12 2.833c.137.178 1.932 2.951 4.68 4.14 1.15.497 2.059.8 2.76 1.022.915.29 1.748.249 2.406.151.733-.11 1.583-.647 1.805-1.247.222-.6 2.22-1.378 2.22-1.378s-.088-.11-.267-.22z" />
                    </svg>
                  ),
                  url: "https://wa.me/6285850927708",
                  hoverClass: "hover:border-[#25d366] hover:bg-[#25d366]/5 hover:text-[#25d366]"
                },
                {
                  name: "email",
                  icon: (
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z" />
                    </svg>
                  ),
                  url: "mailto:akbarhusaini02@gmail.com",
                  hoverClass: "hover:border-accent hover:bg-accent/5 hover:text-accent"
                }
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-full border border-slate-300 dark:border-slate-800 flex items-center justify-center text-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-pointer ${social.hoverClass}`}
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}

            </div>
          </div>
        </section>

      </main>

      {/* SKILLS & EXPERTISE SECTION */}
      <section id="skills" className="w-full bg-accent py-20 px-6 relative overflow-hidden transition-colors duration-500">
        {/* Curved Borders for modern premium separation */}
        <div className="absolute top-0 inset-x-0 h-8 bg-background rounded-b-[40px] pointer-events-none transition-colors duration-500" />
        <div className="absolute bottom-0 inset-x-0 h-8 bg-background rounded-t-[40px] pointer-events-none transition-colors duration-500" />

        <div className="max-w-7xl mx-auto z-10 relative">
          <div className="text-center mb-16 text-white">
            <h2 className="text-xs font-extrabold tracking-widest uppercase text-white/80">KEAHLIAN UTAMA</h2>
            <p className="text-4xl md:text-5xl font-black tracking-tight mt-2">SKILLS & EXPERTISE</p>
            <div className="w-12 h-1 bg-white mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Card 1: FRONTEND */}
            <div className="bg-card-bg rounded-3xl p-8 border border-slate-100 dark:border-slate-850 shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center text-2xl text-accent mb-6 font-bold">
                ⚛️
              </div>
              <h3 className="font-black text-xl text-slate-900 dark:text-white tracking-tight mb-4 uppercase">FRONTEND DEVELOPMENT</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
                Membangun antarmuka yang sangat interaktif dan responsif menggunakan kerangka kerja Javascript modern yang berfokus pada performa.
              </p>
              <div className="flex flex-wrap gap-2">
                {["React JS", "Next.js 16", "HTML5", "CSS3", "Tailwind CSS", "TypeScript"].map((chip) => (
                  <span
                    key={chip}
                    className="bg-slate-950 text-white text-[10px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full hover:bg-accent transition-all cursor-default"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            {/* Card 2: BACKEND */}
            <div className="bg-card-bg rounded-3xl p-8 border border-slate-100 dark:border-slate-850 shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center text-2xl text-accent mb-6 font-bold">
                🐘
              </div>
              <h3 className="font-black text-xl text-slate-900 dark:text-white tracking-tight mb-4 uppercase">BACKEND DEVELOPMENT</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
                Merancang arsitektur server, API yang aman, serta manajemen database relasional dengan performa stabil dan andal.
              </p>
              <div className="flex flex-wrap gap-2">
                {["PHP Core", "Node.js", "Express.js", "MySQL", "REST API", "Database CRUD"].map((chip) => (
                  <span
                    key={chip}
                    className="bg-slate-950 text-white text-[10px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full hover:bg-accent transition-all cursor-default"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            {/* Card 3: TOOLS & DESIGN */}
            <div className="bg-card-bg rounded-3xl p-8 border border-slate-100 dark:border-slate-850 shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center text-2xl text-accent mb-6 font-bold">
                🎨
              </div>
              <h3 className="font-black text-xl text-slate-900 dark:text-white tracking-tight mb-4 uppercase">TOOLS & DESIGN</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
                Membuat blueprint desain beresolusi tinggi dan mengatur versi kode secara kolaboratif menggunakan alat industri standar.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Figma", "Photoshop", "Git/GitHub", "VS Code", "UI Blueprint", "Extreme Programming"].map((chip) => (
                  <span
                    key={chip}
                    className="bg-slate-950 text-white text-[10px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full hover:bg-accent transition-all cursor-default"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PORTFOLIO PROJECT GALLERY */}
      <section id="work" className="w-full py-24 px-6 bg-background transition-colors duration-500">
        <div className="max-w-7xl mx-auto">

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <h2 className="text-xs font-extrabold tracking-widest uppercase text-accent">KARYA PILIHAN</h2>
              <p className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white mt-2 uppercase">SELECTED WORK</p>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md">
              Kompilasi proyek riil dan akademis yang mencerminkan pemecahan masalah kreatif dan penyelesaian masalah teknis tingkat lanjut.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PROJECTS.map((proj) => (
              <article
                key={proj.id}
                className="bg-card-bg rounded-3xl overflow-hidden premium-card flex flex-col justify-between group cursor-pointer"
                onClick={() => setSelectedProject(proj)}
              >
                <div>
                  {/* Image container */}
                  <div className="relative w-full aspect-[16/10] bg-slate-100 dark:bg-slate-950 overflow-hidden border-b border-slate-100 dark:border-slate-850">
                    <Image
                      src={proj.image}
                      alt={proj.title}
                      fill
                      className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/0 transition-colors duration-300" />
                  </div>

                  {/* Project info details */}
                  <div className="p-6 pb-2">
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {proj.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-slate-100 dark:bg-slate-850 text-slate-800 dark:text-slate-300 text-[8px] font-bold tracking-widest px-2 py-0.5 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="font-black text-lg text-slate-900 dark:text-white tracking-tight group-hover:text-accent transition-colors duration-300">
                      {proj.title}
                    </h3>
                    <p className="text-[10px] text-accent font-bold font-mono tracking-widest uppercase mt-0.5">
                      {proj.role}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mt-3">
                      {proj.desc}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-4 border-t border-slate-100 dark:border-slate-850">
                  <a
                    href={proj.link}
                    target={proj.link.startsWith("http") ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-widest text-slate-900 dark:text-white hover:text-accent dark:hover:text-accent transition-colors uppercase"
                    onClick={(e) => {
                      if (proj.link === "#") {
                        e.preventDefault();
                        setSelectedProject(proj);
                      }
                    }}
                  >
                    LIHAT PROYEK <span>→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* INTERACTIVE MODAL FOR PROJECT DETAIL */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-card-bg rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800">
            <div className="relative w-full aspect-[16/9] bg-slate-100 dark:bg-slate-950">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-slate-950/80 hover:bg-accent text-white w-8 h-8 rounded-full flex items-center justify-center transition-colors cursor-pointer"
              >
                ✕
              </button>
            </div>
            <div className="p-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.tags.map((tag) => (
                  <span key={tag} className="bg-slate-100 dark:bg-slate-850 text-slate-800 dark:text-slate-300 text-[9px] font-bold tracking-widest px-2.5 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">{selectedProject.title}</h3>
              <p className="text-xs text-accent font-bold font-mono tracking-widest uppercase mt-1">{selectedProject.role}</p>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mt-4">
                {selectedProject.desc}
              </p>

              <div className="mt-8 flex justify-end gap-3">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-2.5 border border-slate-300 dark:border-slate-800 rounded-full text-xs font-bold tracking-widest text-slate-600 dark:text-slate-400 hover:border-slate-850 dark:hover:border-white hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
                >
                  TUTUP
                </button>
                {selectedProject.link !== "#" && (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 bg-accent hover:bg-accent-hover text-white rounded-full text-xs font-bold tracking-widest transition-colors shadow-lg shadow-accent/15 cursor-pointer"
                  >
                    KUNJUNGI TAUTAN
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* INTERACTIVE TERMINAL CHAT & CALL TO ACTION (lg:col-span-12) */}
      <section id="contact" className="w-full py-24 px-6 bg-card-bg border-t border-slate-100 dark:border-slate-850 transition-colors duration-500">
        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left: Call to Action Details */}
            <div className="lg:col-span-6 flex flex-col gap-6 text-center lg:text-left">
              <span className="text-xs font-extrabold tracking-widest text-accent uppercase">
                HUBUNGI SAYA
              </span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white uppercase">
                READY TO EVOLVE?
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Mari buat produk digital luar biasa berikutnya. Saya sangat terbuka untuk kolaborasi magang, pekerjaan penuh waktu, atau proyek lepas kustom. Hubungi saya langsung melalui terminal interaktif di sebelah kanan!
              </p>

              <div className="border-t border-slate-100 dark:border-slate-850 pt-6 mt-2 flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center">
                <div className="text-center sm:text-left">
                  <p className="text-[10px] text-slate-400 dark:text-slate-500 font-mono tracking-widest uppercase">EMAIL RESMI</p>
                  <a href="mailto:akbarhusaini02@gmail.com" className="text-sm font-bold text-slate-900 dark:text-white hover:text-accent dark:hover:text-accent transition-colors">
                    akbarhusaini02@gmail.com
                  </a>
                </div>
                <div className="h-6 w-px bg-slate-200 dark:bg-slate-850 hidden sm:block" />
                <div className="text-center sm:text-left">
                  <p className="text-[10px] text-slate-400 dark:text-slate-500 font-mono tracking-widest uppercase">LOKASI</p>
                  <span className="text-sm font-bold text-slate-900 dark:text-white">
                    Jember, Jawa Timur, Indonesia
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Sleek Interactive Chat Terminal */}
            <div className="lg:col-span-6">
              <div className="terminal-card rounded-3xl overflow-hidden shadow-2xl border border-slate-800">
                {/* Terminal Header */}
                <div className="bg-[#0b0f19] px-6 py-4 flex items-center justify-between border-b border-slate-800">
                  <div className="flex gap-2">
                    <span className="w-3 w-3 h-3 rounded-full bg-[#ef4444] inline-block" />
                    <span className="w-3 w-3 h-3 rounded-full bg-[#f59e0b] inline-block" />
                    <span className="w-3 w-3 h-3 rounded-full bg-[#10b981] inline-block" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                    SECURE LOBBY CHAT v1.0
                  </span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#10b981] animate-pulse" />
                </div>

                {/* Log Screen */}
                <div className="p-6 h-[220px] overflow-y-auto font-mono text-xs text-slate-300 flex flex-col gap-2.5 bg-[#0f172a]/95 border-b border-slate-800">
                  {chatLog.map((log, index) => {
                    const isSystem = log.sender === "Sistem";
                    const isAkbar = log.sender === "Akbar_Dev";
                    return (
                      <div key={index} className="leading-relaxed">
                        {isSystem ? (
                          <span className="text-amber-500 font-semibold">{`> ${log.text}`}</span>
                        ) : (
                          <p>
                            <span className={`font-bold mr-2 ${isAkbar ? "text-accent" : "text-blue-400"}`}>
                              {`[${log.sender}]:`}
                            </span>
                            <span>{log.text}</span>
                          </p>
                        )}
                      </div>
                    );
                  })}
                  {isSending && (
                    <div className="text-slate-400 italic animate-pulse">
                      &gt; Akbar sedang mengetik...
                    </div>
                  )}
                </div>

                {/* Terminal Input Form */}
                <form onSubmit={handleSendMessage} className="p-6 bg-[#0b0f19] flex flex-col gap-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="Nama Anda"
                      required
                      value={chatName}
                      onChange={(e) => setChatName(e.target.value)}
                      className="bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-xs font-mono text-white placeholder-slate-500 focus:outline-none focus:border-accent transition-colors"
                    />
                    <span className="text-[10px] text-slate-500 font-mono flex items-center justify-start sm:justify-end">
                      Ready to transmit.
                    </span>
                  </div>

                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Ketik pesan lobi di sini..."
                      required
                      value={chatMessage}
                      onChange={(e) => setChatMessage(e.target.value)}
                      className="flex-1 bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-xs font-mono text-white placeholder-slate-500 focus:outline-none focus:border-accent transition-colors"
                    />
                    <button
                      type="submit"
                      className="bg-accent hover:bg-accent-hover text-white text-xs font-mono font-bold tracking-widest px-6 py-2.5 rounded-xl transition-all duration-300 active:scale-95 shadow-lg shadow-accent/15 shrink-0 cursor-pointer"
                    >
                      SEND
                    </button>
                  </div>
                </form>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* MINIMALIST FOOTER */}
      <footer className="w-full bg-background border-t border-slate-200/50 dark:border-slate-850 py-10 px-6 transition-colors duration-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center sm:items-start gap-1">
            <span className="font-extrabold text-base tracking-tight text-slate-900 dark:text-white">
              DEV_CORE<span className="text-accent">.</span>
            </span>
            <p className="text-[10px] text-slate-400 dark:text-slate-500 font-mono uppercase tracking-wider">
              ENGINEERED FOR IMPACT
            </p>
          </div>

          <div className="flex gap-8 text-[11px] font-bold tracking-wider text-slate-400">
            <a href="#work" className="hover:text-slate-900 dark:hover:text-white transition-colors">WORK</a>
            <a href="#skills" className="hover:text-slate-900 dark:hover:text-white transition-colors">SKILLS</a>
            <a href="#contact" className="hover:text-slate-900 dark:hover:text-white transition-colors">CONTACT</a>
          </div>

          <p className="text-xs text-slate-400 text-center sm:text-right font-mono">
            © 2026 AKBAR HUSAINI NURRAMAN. HAK CIPTA DILINDUNGI.
          </p>
        </div>
      </footer>

    </div>
  );
}
