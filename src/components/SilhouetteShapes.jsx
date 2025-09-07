// src/components/SilhouetteShapes.jsx
import React from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import {
    FaGamepad, FaKeyboard, FaMouse,       // gamer
    FaCode, FaLaptopCode, FaReact,         // web dev
    FaServer, FaNetworkWired, FaWifi       // networking
} from "react-icons/fa"

/**
 * SilhouetteShapes (variants with animated icons)
 * variant: "gamer" | "webdev" | "network" | (fallback: "hero")
 * - Parallax blobs (kalem)
 * - Ikon bertema yang float/rotate halus
 * - Wave divider opsional per variant
 */
export default function SilhouetteShapes({
    variant = "hero",
    intensity = 1,
    wave // kalau undefined, kita atur default per-variant
}) {
    const { scrollYProgress } = useScroll()
    const yA = useTransform(scrollYProgress, [0, 1], [0, -40 * intensity])
    const yB = useTransform(scrollYProgress, [0, 1], [0, -20 * intensity])

    // preset warna/ukuran/posisi blob per-variant
    const presets = {
        hero: {
            a: { size: 520, pos: "-top-24 -left-24", c1: "#60A5FA", c2: "#0f172a", opacity: "opacity-40", shape: "circle" },
            b: { size: 640, pos: "-bottom-32 -right-28", c1: "#34d399", c2: "#0f172a", opacity: "opacity-30", shape: "circle" },
            wave: true, waveOpacity: 0.04,
        },
        gamer: {
            a: { size: 520, pos: "-top-24 -left-24", c1: "#3B82F6", c2: "#0f172a", opacity: "opacity-35", shape: "circle" },
            b: { size: 620, pos: "-bottom-28 -right-24", c1: "#059669", c2: "#0f172a", opacity: "opacity-30", shape: "blob" },
            wave: true, waveOpacity: 0.04,
        },
        webdev: {
            a: { size: 500, pos: "-top-20 left-[45%]", c1: "#A78BFA", c2: "#0f172a", opacity: "opacity-30", shape: "blob" },
            b: { size: 540, pos: "-bottom-24 -left-24", c1: "#22D3EE", c2: "#0f172a", opacity: "opacity-25", shape: "circle" },
            wave: false,
        },
        network: {
            a: { size: 520, pos: "-top-24 -right-24", c1: "#F59E0B", c2: "#0f172a", opacity: "opacity-28", shape: "circle" },
            b: { size: 520, pos: "-bottom-24 -left-24", c1: "#10B981", c2: "#0f172a", opacity: "opacity-28", shape: "blob" },
            wave: true, waveOpacity: 0.03,
        },
    }
    const cfg = presets[variant] ?? presets.hero
    const showWave = typeof wave === "boolean" ? wave : cfg.wave

    const Blob = ({ which = "a" }) => {
        const p = cfg[which]
        const style = which === "a" ? { y: yA } : { y: yB }
        return (
            <motion.div
                style={style}
                aria-hidden
                className={`pointer-events-none absolute ${p.pos} -z-10 ${p.opacity}`}
            >
                <svg width={p.size} height={p.size} viewBox="0 0 640 640">
                    <defs>
                        <radialGradient id={`g-${variant}-${which}`} cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor={p.c1} />
                            <stop offset="100%" stopColor={p.c2} />
                        </radialGradient>
                    </defs>
                    {p.shape === "blob" ? (
                        <path
                            d="M480 140c60 42 104 120 99 189-5 69-57 129-120 164-64 35-140 45-206 23-66-22-122-76-146-144-24-67-16-148 30-203 47-55 130-84 206-82 76 2 136 30 137 53z"
                            fill={`url(#g-${variant}-${which})`}
                            fillOpacity="0.85"
                        />
                    ) : (
                        <circle cx="320" cy="320" r="320" fill={`url(#g-${variant}-${which})`} />
                    )}
                </svg>
            </motion.div>
        )
    }

    // ikon mengambang
    const FloatIcon = ({ children, className = "", delay = 0, dist = 12, dur = 5 }) => (
        <motion.div
            className={`absolute ${className}`}
            initial={{ y: 0, rotate: 0, opacity: 0.9 }}
            animate={{ y: [0, -dist, 0], rotate: [0, 3, 0], opacity: [0.9, 1, 0.9] }}
            transition={{ duration: dur, repeat: Infinity, ease: "easeInOut", delay }}
        >
            {children}
        </motion.div>
    )

    const renderIcons = () => {
        if (variant === "gamer") {
            return (
                <>
                    <FloatIcon className="right-20 top-8 text-white/90 text-3xl md:text-4xl" delay={0.2}><FaGamepad /></FloatIcon>
                    <FloatIcon className="right-44 top-40 text-white/80 text-2xl md:text-3xl" delay={0.6} dist={16}><FaKeyboard /></FloatIcon>
                    <FloatIcon className="right-6 top-56 text-white/80 text-2xl md:text-3xl" delay={1.0} dist={14}><FaMouse /></FloatIcon>
                </>
            )
        }
        if (variant === "webdev") {
            return (
                <>
                    <FloatIcon className="left-10 top-10 text-white/90 text-3xl md:text-4xl" delay={0.1}><FaCode /></FloatIcon>
                    <FloatIcon className="left-1/3 top-28 text-white/85 text-3xl md:text-4xl" delay={0.5} dist={14}><FaLaptopCode /></FloatIcon>
                    <FloatIcon className="left-12 top-56 text-white/85 text-3xl md:text-4xl" delay={0.9} dist={18}><FaReact /></FloatIcon>
                </>
            )
        }
        if (variant === "network") {
            return (
                <>
                    <FloatIcon className="right-12 top-10 text-white/90 text-3xl md:text-4xl" delay={0.15}><FaServer /></FloatIcon>
                    <FloatIcon className="right-1/4 top-32 text-white/85 text-3xl md:text-4xl" delay={0.55} dist={16}><FaNetworkWired /></FloatIcon>
                    <FloatIcon className="right-14 top-60 text-white/85 text-3xl md:text-4xl" delay={0.95} dist={14}><FaWifi /></FloatIcon>
                </>
            )
        }
        return null
    }

    return (
        <>
            <Blob which="a" />
            <Blob which="b" />
            {/* ikon tematik */}
            {renderIcons()}

            {/* wave divider */}
            {showWave && (
                <div aria-hidden className="pointer-events-none absolute inset-x-0 -bottom-px -z-10">
                    <svg viewBox="0 0 1440 120" className="w-full">
                        <path
                            d="M0 40 C240 120, 480 0, 720 60 C960 120, 1200 40, 1440 80 L1440 120 L0 120 Z"
                            fill={`rgba(255,255,255,${cfg.waveOpacity ?? 0.04})`}
                        />
                    </svg>
                </div>
            )}
        </>
    )
}
