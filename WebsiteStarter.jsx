import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Sparkles, Shield, Rocket, Mail, Phone, Instagram, Linkedin, CheckCircle2 } from "lucide-react";

export default function WebsiteStarter() {
  const [open, setOpen] = useState(false);

  const nav = [
    { id: "home", label: "Home" },
    { id: "features", label: "Features" },
    { id: "about", label: "About" },
    { id: "pricing", label: "Pricing" },
    { id: "contact", label: "Contact" },
  ];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* Header / Nav */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/70 border-b border-neutral-800">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => scrollTo("home")} className="flex items-center gap-2 group" aria-label="Go to homepage">
            <div className="h-8 w-8 rounded-2xl bg-gradient-to-tr from-yellow-500 to-amber-300 grid place-items-center text-neutral-950 font-extrabold">★</div>
            <span className="font-semibold tracking-tight group-hover:text-amber-300 transition">YourBrand</span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Primary">
            {nav.map((n) => (
              <button key={n.id} onClick={() => scrollTo(n.id)} className="text-sm text-neutral-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 rounded px-1">
                {n.label}
              </button>
            ))}
            <button onClick={() => scrollTo("contact")} className="text-sm font-medium bg-amber-300 text-neutral-950 hover:bg-amber-200 active:bg-amber-400 rounded-xl px-4 py-2 shadow">
              Get Started
            </button>
          </nav>

          {/* Mobile */}
          <button className="md:hidden p-2 rounded-lg border border-neutral-800" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile menu panel */}
        {open && (
          <div className="md:hidden border-t border-neutral-800 bg-neutral-950/95">
            <div className="px-4 py-3 flex flex-col gap-2">
              {nav.map((n) => (
                <button key={n.id} onClick={() => scrollTo(n.id)} className="text-left py-2 px-2 rounded-lg hover:bg-neutral-900">
                  {n.label}
                </button>
              ))}
              <button onClick={() => scrollTo("contact")} className="mt-2 text-left py-2 px-2 rounded-lg bg-amber-300 text-neutral-950 font-medium">
                Get Started
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_-20%,rgba(255,255,255,0.12),rgba(0,0,0,0))]" />
        <div className="mx-auto max-w-7xl px-4 py-24 lg:py-28 grid lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-amber-300/90">
              <Sparkles className="h-4 w-4" /> New • Modern starter
            </span>
            <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold leading-tight">
              Launch a <span className="bg-gradient-to-r from-amber-200 to-yellow-400 bg-clip-text text-transparent">clean, responsive</span> website in minutes
            </h1>
            <p className="mt-4 text-neutral-300 max-w-xl">
              A sleek, accessible template you can customize quickly—ideal for small businesses, creators, and community projects.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button onClick={() => scrollTo("contact")} className="px-5 py-3 rounded-xl bg-amber-300 text-neutral-950 font-semibold shadow hover:bg-amber-200 active:bg-amber-400">
                Book a Call
              </button>
              <button onClick={() => scrollTo("features")} className="px-5 py-3 rounded-xl border border-neutral-700 hover:border-neutral-500">
                Explore Features
              </button>
            </div>
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-neutral-400">
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> Mobile-first</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> SEO-friendly</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> A11y-minded</li>
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="relative">
            <div className="aspect-video w-full rounded-2xl border border-neutral-800 bg-neutral-900 shadow-xl overflow-hidden">
              <div className="h-full w-full grid place-items-center text-neutral-400">
                <div className="text-center px-6">
                  <p className="font-semibold">Drop your hero image here</p>
                  <p className="text-sm">(Replace this card with a product image, collage, or illustration.)</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 hidden sm:block">
              <div className="rounded-2xl border border-neutral-800 bg-neutral-900 px-4 py-3 shadow">
                <p className="text-xs text-neutral-400">Tip: Swap colors by editing Tailwind classes.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="border-t border-neutral-800">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="text-2xl sm:text-3xl font-bold">Everything you need to look pro</h2>
          <p className="mt-2 text-neutral-400 max-w-2xl">Polished defaults plus flexible components you can extend as you grow.</p>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Rocket className="h-6 w-6" />, title: "Fast setup", desc: "Plug in your content and publish." },
              { icon: <Shield className="h-6 w-6" />, title: "Reliable", desc: "Solid, accessible structure out of the box." },
              { icon: <Sparkles className="h-6 w-6" />, title: "Stylish", desc: "Crisp typography and modern layout." },
              { icon: <Mail className="h-6 w-6" />, title: "Lead capture", desc: "Contact form ready to wire up." },
              { icon: <Phone className="h-6 w-6" />, title: "Responsive", desc: "Looks great on phones & desktops." },
              { icon: <Instagram className="h-6 w-6" />, title: "Social-ready", desc: "Add your handles in seconds." },
            ].map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }} className="rounded-2xl border border-neutral-800 bg-neutral-900 p-5">
                <div className="flex items-center justify-center h-10 w-10 rounded-xl bg-neutral-800 mb-3">
                  {f.icon}
                </div>
                <h3 className="font-semibold">{f.title}</h3>
                <p className="mt-1 text-sm text-neutral-400">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-neutral-800 bg-neutral-900/40">
        <div className="mx-auto max-w-7xl px-4 py-16 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">Built for clarity and conversion</h2>
            <p className="mt-3 text-neutral-300">This starter emphasizes readability, contrast, and focused calls-to-action so visitors know exactly what to do next.</p>
            <ul className="mt-4 space-y-2 text-neutral-300 list-disc list-inside">
              <li>Semantic HTML & ARIA where helpful</li>
              <li>Keyboard-friendly navigation</li>
              <li>Easily swappable color theme</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-neutral-800 p-6">
            <blockquote className="text-neutral-200 italic">“We launched our site in a day and started booking clients immediately.”</blockquote>
            <p className="mt-3 text-sm text-neutral-400">— Happy Customer</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="border-t border-neutral-800">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="text-2xl sm:text-3xl font-bold">Simple pricing</h2>
          <p className="mt-2 text-neutral-400">Pick the plan that fits—swap names & details as needed.</p>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {["Starter", "Pro", "Business"].map((tier, i) => (
              <div key={tier} className={`rounded-2xl border ${i===1?"border-amber-400":"border-neutral-800"} bg-neutral-900 p-6 shadow`}> 
                <h3 className="font-semibold flex items-center justify-between">
                  {tier}
                  {i===1 && <span className="text-xs px-2 py-1 rounded-lg bg-amber-300 text-neutral-950">Popular</span>}
                </h3>
                <p className="mt-2 text-3xl font-extrabold">${i===0?"29":i===1?"79":"149"}<span className="text-base font-normal text-neutral-400">/mo</span></p>
                <ul className="mt-4 space-y-2 text-sm text-neutral-300">
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> Beautiful landing page</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> Basic analytics</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> Email support</li>
                </ul>
                <button onClick={() => scrollTo("contact")} className={`mt-5 w-full rounded-xl px-4 py-2 ${i===1?"bg-amber-300 text-neutral-950 hover:bg-amber-200":"border border-neutral-700 hover:border-neutral-500"}`}>
                  Choose {tier}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-neutral-800 bg-neutral-900/40">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="text-2xl sm:text-3xl font-bold">Tell us about your project</h2>
          <p className="mt-2 text-neutral-400">This form is ready for your backend or a service like Formspree.</p>

          <form className="mt-8 grid md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm">Name</label>
              <input id="name" name="name" className="rounded-xl bg-neutral-900 border border-neutral-800 px-4 py-3 outline-none focus:ring-2 focus:ring-amber-300" placeholder="Ada Lovelace" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm">Email</label>
              <input id="email" name="email" type="email" className="rounded-xl bg-neutral-900 border border-neutral-800 px-4 py-3 outline-none focus:ring-2 focus:ring-amber-300" placeholder="you@example.com" />
            </div>
            <div className="md:col-span-2 flex flex-col gap-2">
              <label htmlFor="message" className="text-sm">Message</label>
              <textarea id="message" name="message" rows={5} className="rounded-xl bg-neutral-900 border border-neutral-800 px-4 py-3 outline-none focus:ring-2 focus:ring-amber-300" placeholder="What do you want to build?" />
            </div>
            <div className="md:col-span-2 flex items-center justify-between gap-4">
              <p className="text-sm text-neutral-400">By submitting, you agree to our friendly terms.</p>
              <button className="rounded-xl bg-amber-300 text-neutral-950 font-semibold px-5 py-3 hover:bg-amber-200 active:bg-amber-400" type="submit">Send message</button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-800">
        <div className="mx-auto max-w-7xl px-4 py-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-2xl bg-gradient-to-tr from-yellow-500 to-amber-300 grid place-items-center text-neutral-950 font-extrabold">★</div>
              <span className="font-semibold tracking-tight">YourBrand</span>
            </div>
            <p className="mt-3 text-neutral-400">A tidy starter you can evolve into a full site or product.</p>
          </div>
          <div>
            <h4 className="font-semibold">Company</h4>
            <ul className="mt-2 space-y-2 text-neutral-400">
              <li><button onClick={() => scrollTo("about")} className="hover:text-neutral-200">About</button></li>
              <li><button onClick={() => scrollTo("pricing")} className="hover:text-neutral-200">Pricing</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Resources</h4>
            <ul className="mt-2 space-y-2 text-neutral-400">
              <li><a href="#" className="hover:text-neutral-200">Docs</a></li>
              <li><a href="#" className="hover:text-neutral-200">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Follow</h4>
            <ul className="mt-2 flex gap-4 text-neutral-400">
              <li><a href="#" aria-label="Instagram" className="hover:text-neutral-200"><Instagram className="h-5 w-5" /></a></li>
              <li><a href="#" aria-label="LinkedIn" className="hover:text-neutral-200"><Linkedin className="h-5 w-5" /></a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-neutral-800 py-6 text-center text-xs text-neutral-500">© {new Date().getFullYear()} YourBrand. All rights reserved.</div>
      </footer>
    </div>
  );
}
