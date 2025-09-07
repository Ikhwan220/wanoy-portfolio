import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FaTiktok, FaInstagram } from "react-icons/fa";
import SilhouetteShapes from "./components/SilhouetteShapes"

const Container = ({ children, className = "" }) => (
  <div className={`mx-auto w-full max-w-6xl px-6 ${className}`}>{children}</div>
)

const Badge = ({ children }) => (
  <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 shadow-soft">
    {children}
  </span>
)

const SectionTitle = ({ title, subtitle }) => (
  <div className="mb-10 text-center">
    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
      <span className="text-gradient">{title}</span>
    </h2>
    {subtitle && <p className="mt-3 text-white/70 max-w-2xl mx-auto">{subtitle}</p>}
  </div>
)

const Navbar = () => {
  const links = [
    { href: "#home", label: "Home" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ]
  return (
    <nav className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 border-b border-white/5">
      <Container className="flex items-center justify-between h-16">
        <a href="#home" className="font-bold tracking-tight text-white">Ikhwanul Hidayat</a>
        <ul className="hidden md:flex items-center gap-6 text-sm text-white/70">
          {links.map(l => (
            <li key={l.href}><a className="hover:text-white transition" href={l.href}>{l.label}</a></li>
          ))}
        </ul>
        <a href="#contact"
          className="text-sm rounded-xl border border-white/10 
              bg-primary-600/20 hover:bg-primary-600/30 
              px-4 py-2 transition">
          Hire me
        </a>
      </Container>
    </nav>
  )
}

const Hero = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], [0, -120])

  return (
    <section id="home" ref={ref} className="relative overflow-hidden isolate">
      <SilhouetteShapes variant="gamer" intensity={1} />
      {/* background parallax */}
      <motion.div style={{ y }} className="pointer-events-none absolute inset-0 -z-10 opacity-40">
        {/* ...gradient svg */}
      </motion.div>

      <Container className="py-24 md:py-40">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* teks kiri */}
          <div>
            <Badge>laravel • react • live streaming </Badge>
            <p className="mt-5 text-white/70 max-w-xl">
              Hi, I’m <span className="font-semibold">Ikhwan</span>. Welcome to my portfolio!
              I’m a passionate developer who loves building clean, modern, and animated web experiences.
              I also have a strong interest in <span className="font-semibold">networking & infrastructure</span>,
              combining my skills in both software and networks to deliver complete solutions.
              Explore my projects and feel free to connect. let’s create something impactful together.
            </p>
          </div>

          {/* foto kanan */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <img
              src="/me.jpg"
              alt="Wanoy"
              className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-primary-600 shadow-soft"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

const Projects = () => {
  return (
    <section id="projects" className="relative py-24 isolate">
      <SilhouetteShapes variant="webdev" intensity={0.6} />
      <Container>
        <SectionTitle
          title="My Projects & Experiences"
          subtitle="Here are the areas I focus on web development, creative content, and networking."
        />

        <div className="space-y-16">

          {/* Web Development */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gradient">Web Development</h3>
            <div className="grid gap-6 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5 }}
                className="rounded-3xl border border-white/10 bg-white/[.03] p-6 shadow-soft"
              >
                <h4 className="text-lg font-semibold">Riau Berbagi</h4>
                <p className="mt-2 text-white/70 text-sm">
                  A donation platform with Midtrans payment integration, analytics, and campaign management.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6 }}
                className="rounded-3xl border border-white/10 bg-white/[.03] p-6 shadow-soft"
              >
                <h4 className="text-lg font-semibold">Monitoring Contract Workflows at PTPN IV Regional III</h4>
                <p className="mt-2 text-white/70 text-sm">
                  Web application for monitoring contract workflows and operational data at PTPN IV Regional III.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Content Creator */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gradient">Content Creator</h3>
            <div className="grid gap-6 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5 }}
                className="rounded-3xl border border-white/10 bg-white/[.03] p-6 shadow-soft"
              >
                <h4 className="text-lg font-semibold">Editing & Design</h4>
                <p className="mt-2 text-white/70 text-sm">
                  Skilled in Adobe Premiere Pro, Photoshop, and CapCut for video editing and visual design.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6 }}
                className="rounded-3xl border border-white/10 bg-white/[.03] p-6 shadow-soft"
              >
                <h4 className="text-lg font-semibold">Live Streaming</h4>
                <p className="mt-2 text-white/70 text-sm">
                  Experienced in OBS & TikTok Studio live streaming setups, audio routing, and on-air production (when time allows).
                </p>
              </motion.div>
            </div>
          </div>

          {/* Networking */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gradient">Networking</h3>
            <div className="grid gap-6 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5 }}
                className="rounded-3xl border border-white/10 bg-white/[.03] p-6 shadow-soft"
              >
                <h4 className="text-lg font-semibold">Iconnet </h4>
                <p className="mt-2 text-white/70 text-sm">
                  Hands-on experience in WiFi installation, troubleshooting, and network maintenance
                  during my work with Iconnet.
                </p>
              </motion.div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  )
}
const Skills = () => {
  return (
    <section id="skills" className="relative py-24 border-y border-white/5 bg-gradient-to-b from-white/[.02] to-transparent isolate">
      <SilhouetteShapes variant="network" intensity={0.5} />
      <Container>
        <SectionTitle title="Skills" subtitle="Technologies and tools I work with" />

        <div className="space-y-12">

          {/* Web Development */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gradient">Web Development</h3>
            <div className="flex gap-4 flex-wrap">
              {["React", "TailwindCSS", "Framer Motion", "Laravel", "Inertia", "MySQL", "Vercel"].map((s, i) => (
                <motion.div
                  key={s}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="rounded-2xl border border-white/10 bg-white/[.04] px-4 py-2 shadow-soft"
                >
                  {s}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Content Creator */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gradient">Content Creator</h3>
            <div className="flex gap-4 flex-wrap">
              {["Adobe Premiere Pro", "Adobe Photoshop", "CapCut", "OBS Studio", "TikTok Live"].map((s, i) => (
                <motion.div
                  key={s}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="rounded-2xl border border-white/10 bg-white/[.04] px-4 py-2 shadow-soft"
                >
                  {s}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Networking */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gradient">Networking</h3>
            <div className="flex gap-4 flex-wrap">
              {["WiFi Installation", "Network Troubleshooting", "LAN/WAN Setup", "Router Configuration", "Iconnet Field Experience"].map((s, i) => (
                <motion.div
                  key={s}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="rounded-2xl border border-white/10 bg-white/[.04] px-4 py-2 shadow-soft"
                >
                  {s}
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </Container>
    </section>
  )
}

const About = () => (
  <section id="about" className="relative py-24 isolate">
    <SilhouetteShapes variant="webdev" intensity={0.4} />
    <Container>
      <SectionTitle title="About Me" subtitle="Who I am and what I can offer" />
      <div className="grid md:grid-cols-2 gap-8 items-start">

        {/* Deskripsi singkat */}
        <div className="rounded-3xl border border-white/10 bg-white/[.03] p-6 shadow-soft">
          <p className="text-white/80 leading-relaxed">
            My name is <span className="font-semibold">Ikhwan</span>, a computer science graduate
            and full-stack developer based in Pekanbaru, Indonesia.
            I specialize in building modern web applications with <span className="font-semibold">React and Laravel</span>,
            and I enjoy turning complex problems into elegant and user-friendly solutions.
          </p>
          <p className="mt-4 text-white/80 leading-relaxed">
            Beyond software, I’m also passionate about <span className="font-semibold">networking & IT infrastructure</span>.
            I believe that combining solid backend systems, intuitive user interfaces, and reliable networks
            creates products that truly deliver value in professional environments.
          </p>
        </div>

        {/* Highlight skill / value */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-white/10 bg-gradient-to-br from-primary-600/10 to-emerald-500/10 p-1"
        >
          <div className="rounded-[20px] bg-slate-900/70 p-6">
            <h3 className="text-lg font-semibold mb-4 text-gradient">Why hire me?</h3>
            <ul className="space-y-3 text-white/80">
              <li>• Solid experience in <span className="font-semibold">React, Laravel, and MySQL</span></li>
              <li>• Understanding of <span className="font-semibold">networking concepts</span> and system deployment</li>
              <li>• Strong focus on <span className="font-semibold">UX, performance, and scalability</span></li>
              <li>• Able to work both independently and in a team environment</li>
              <li>• Eager to learn and adapt to new technologies quickly</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </Container>
  </section>
)

const Contact = () => (
  <section id="contact" className="py-24">
    <Container>
      <SectionTitle title="Contact" subtitle="Let’s connect through my socials" />
      <div className="grid md:grid-cols-2 gap-6">

        {/* Email Card (opsional) */}
        <div className="rounded-3xl border border-white/10 bg-white/[.03] p-6 shadow-soft">
          <p className="text-white/80">Email</p>
          <a className="text-white/90 underline" href="mailto:wanoy@example.com">
            ikhwanulhidayat22@gmail.com
          </a>
        </div>

        {/* Social Media Card */}
        <div className="rounded-3xl border border-white/10 bg-white/[.03] p-6 shadow-soft">
          <p className="text-white/80">Social Media</p>
          <div className="mt-3 flex flex-col gap-4 text-lg">

            <a
              className="flex items-center gap-2 underline hover:text-primary-500 transition"
              href="https://www.tiktok.com/@sibubudibagimana"
              target="_blank"
              rel="noreferrer"
            >
              <FaTiktok className="text-2xl" />
              TikTok
            </a>

            <a
              className="flex items-center gap-2 underline hover:text-primary-500 transition"
              href="https://www.instagram.com/bugudigi_"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram className="text-2xl text-pink-500" />
              Instagram
            </a>
          </div>
        </div>
      </div>
    </Container>
  </section>
);

const Footer = () => (
  <footer className="py-10 border-t border-white/5 text-center text-white/50">
    <Container>
      <p>© {new Date().getFullYear()} ikwhan - All rights reserved.</p>
    </Container>
  </footer>
)

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </>
  )
}
