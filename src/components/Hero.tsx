import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

function Bird({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`hero-bird absolute left-0 ${className}`}
      viewBox="0 0 40 20"
      fill="none"
      aria-hidden="true"
    >
      <g className="hero-bird-wing hero-bird-wing--left">
        <path
          d="M20 12 Q12 3 2 9"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>
      <g className="hero-bird-wing hero-bird-wing--right">
        <path
          d="M20 12 Q28 3 38 9"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-svh w-full flex-col overflow-hidden bg-[#FAE01A] text-[#050B06] selection:bg-[#00592D] selection:text-white lg:h-svh"
    >
      {/* Soft clouds, birds & atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
      >
        <svg
          className="absolute h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M120 180 Q130 165 150 165 Q170 165 180 175 Q195 160 215 165 Q230 170 235 185 Q245 185 245 195 Q245 205 230 205 L130 205 Q115 205 115 195 Q115 185 120 180 Z"
            fill="#FFFFFF"
            opacity="0.85"
          />
          <path
            d="M520 120 Q530 108 548 108 Q565 108 575 118 Q590 105 608 110 Q622 115 628 128 Q638 128 638 138 Q638 146 625 146 L530 146 Q515 146 515 138 Q515 128 520 120 Z"
            fill="#FFFFFF"
            opacity="0.8"
          />
          <path
            d="M680 230 Q690 218 705 218 Q720 218 728 226 Q740 214 756 218 Q768 222 773 234 Q782 234 782 242 Q782 250 770 250 L690 250 Q678 250 678 242 Q678 234 680 230 Z"
            fill="#FFFFFF"
            opacity="0.75"
          />
          <path
            d="M1200 150 Q1210 140 1222 140 Q1235 140 1242 147 Q1252 138 1265 141 Q1275 144 1279 154 Q1286 154 1286 160 Q1286 166 1276 166 L1210 166 Q1200 166 1200 160 Z"
            fill="#FFFFFF"
            opacity="0.85"
          />
          <path
            d="M1090 270 Q1100 258 1115 258 Q1130 258 1138 266 Q1150 254 1166 258 Q1178 262 1183 274 Q1192 274 1192 282 Q1192 290 1180 290 L1100 290 Q1088 290 1088 282 Z"
            fill="#FFFFFF"
            opacity="0.8"
          />
        </svg>

        {/* Birds flying left → right */}
        <div className="absolute inset-0 overflow-hidden">
          <Bird className="top-[20%] w-9 text-[#050B06]/50 [animation-delay:-2s] [animation-duration:18s]" />
          <Bird className="top-[29%] w-6 text-[#050B06]/40 [animation-delay:-10s] [animation-duration:24s]" />
          <Bird className="top-[15%] w-5 text-[#050B06]/35 [animation-delay:-16s] [animation-duration:21s]" />
          <Bird className="top-[37%] w-7 text-[#050B06]/35 [animation-delay:-6s] [animation-duration:27s]" />
        </div>
      </div>

      {/* Dark green atmosphere behind the portrait */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-2/3 bg-[radial-gradient(ellipse_at_50%_100%,rgba(0,89,45,0.2),transparent_68%)]"
      />

      <div className="relative z-20">
        <Navbar />
      </div>

      {/* Main hero layout */}
      <div className="relative z-10 mx-auto grid w-full max-w-[1440px] flex-1 grid-cols-1 items-center px-8 pb-6 md:px-16 lg:grid-cols-12 lg:px-20">
        {/* Left column — headline & actions */}
        <div className="order-1 flex flex-col justify-center py-8 lg:col-span-7 lg:py-0 lg:pr-8">
          <h1 className="max-w-3xl font-hero text-[clamp(1.75rem,4vw,3.25rem)] font-normal leading-[1.14] tracking-[-0.04em]">
            UNLOCKING YOUTH
            <br />
            POTENTIAL IN THE
            <br />
            <span className="text-[#00592D]">DIGITAL ERA</span>
          </h1>

          <p className="mt-7 max-w-2xl font-rounded text-base leading-relaxed text-[#050B06]/75 md:text-lg">
            Join the biggest youth technology festival in Aba — a day of digital
            skills, innovation and new connections at Ogbor Youth Tech Fest
            2026.
          </p>

          <div className="mt-9 flex items-center gap-2">
            <Link
              href="/#get-involved"
              className="bg-[#050B06] px-6 py-3 font-rounded text-base font-bold text-white transition-colors duration-200 hover:bg-[#00592D] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00592D]"
            >
              Register now
            </Link>

            <Link
              href="#programme"
              aria-label="Explore the programme"
              className="flex h-12 w-12 items-center justify-center bg-[#050B06] text-white transition-colors duration-200 hover:bg-[#00592D] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00592D]"
            >
              <svg
                className="h-5 w-5 fill-current hover:animate-spin"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
              </svg>
            </Link>
          </div>

          <p className="mt-6 hidden font-rounded text-[10px] font-bold uppercase tracking-[0.22em] text-[#050B06]/50">
            Mon 30 Nov 2026 · Ogbor Hill, Aba
          </p>
        </div>

        {/* Right column — hero portrait */}
        <div className="pointer-events-none mt-22 relative order-2 flex h-[44vh] w-full scale-160 lg:-translate-x-15 items-end justify-center lg:col-span-5 lg:h-[76vh] lg:justify-end">
          <div
            aria-hidden="true"
            className="absolute right-0 bottom-0 h-[78%] w-[78%]"
          />
          <Image
            src="/hero_profile.png"
            alt="A young innovator from Aba, representing the future of Ogbor Youth Tech Fest 2026"
            width={1086}
            height={1448}
            priority
            sizes="(max-width: 1024px) 80vw, 40vw"
            className="relative  z-10 h-full w-auto max-w-full -scale-x-100 object-contain object-bottom "
          />
        </div>
      </div>
    </section>
  );
}
