"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code2, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const ProjectCard = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="w-11/12 md:w-8/12 mx-auto">

        {/* Heading */}
        <section className="mb-5">
          <div className="max-w-4xl">

            <div className="relative mb-3">
              <h2 className="text-white text-4xl lg:text-5xl font-bold tracking-tight">
                Projects
              </h2>
              <div className="h-1.5 w-16 bg-blue-500 mt-2 rounded-full"></div>
            </div>

            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
              Here are some of the projects I've worked on, showcasing my skills in
              various technologies and problem domains.
            </p>
          </div>
        </section>

        {/* Card */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 justify-items-center gap-10">

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              className="max-w-[350px] md:max-w-[400px] rounded-xl overflow-hidden bg-[#0f172a] border border-slate-700"
            >
              <div className="relative h-[180px]">
                <Image
                  src="https://www.hrjohnsonindia.com/assets/images/blog/bathroom-tiles-for-an-aesthetic-and-safe.jpg"
                  alt="Project"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 340px"
                  priority={false}
                />
              </div>

              <div className="p-5">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-white font-semibold text-lg">Tilix</h3>
                  <span className="text-xs px-2 py-1 bg-violet-500/20 text-violet-300 rounded">
                    Featured
                  </span>
                </div>

                <p className="text-sm text-slate-400 mb-4 line-clamp-3">
                  Tilix is a full-stack web app focused on building a clean, intuitive tile discovery experience, where I designed and developed core features end-to-end.
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  <span className="text-[11px] px-3 py-1 rounded-full border border-white/10 text-white/60 bg-white/5">Next.js</span>
                  <span className="text-[11px] px-3 py-1 rounded-full border border-white/10 text-white/60 bg-white/5">DaisyUi</span>
                  <span className="text-[11px] px-3 py-1 rounded-full border border-white/10 text-white/60 bg-white/5">Hero UI</span>
                  <span className="text-[11px] px-3 py-1 rounded-full border border-white/10 text-white/60 bg-white/5">Better Auth</span>
                  <span className="text-[11px] px-3 py-1 rounded-full border border-white/10 text-white/60 bg-white/5">MongoDB</span>
                  <span className="text-[11px] px-3 py-1 rounded-full border border-white/10 text-white/60 bg-white/5">Tailwind CSS</span>
                  <span className="text-[#fff3f35b] text-[12px] py-1">+6</span>
                </div>

                <div className="flex justify-between items-center gap-10">
                  <div className="flex gap-3 text-slate-400">

                    <div className="border px-3 py-1 rounded-sm border-gray-500 bg-[#0a121c] cursor-pointer">
                      <a
                        href="https://tilix-eight.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-violet-400 transition flex items-center gap-2"
                      >
                        <ExternalLink size={16} />
                        <span className="font-medium text-white text-sm">Live</span>
                      </a>
                    </div>

                    <div className="border px-3 py-1 rounded-sm border-gray-500 bg-[#0a121c] cursor-pointer">
                      <a
                        href="https://github.com/alfaazahmed7/tilix"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-violet-400 transition flex items-center gap-2"
                      >
                        <FaGithub />
                        <span className="font-medium text-white text-sm">Github</span>
                      </a>
                    </div>
                  </div>

                  <button className="flex items-center gap-1 text-sm text-violet-400 hover:text-violet-300">
                    View
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              className="max-w-[350px] md:max-w-[400px] rounded-xl overflow-hidden bg-[#0f172a] border border-slate-700"
            >
              <div className="relative h-[180px]">
                <Image
                  src="https://www.boundless.org/wp-content/uploads/2018/11/iStock-147032333-1.jpg"
                  alt="Project"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 340px"
                  priority={false}
                />
              </div>

              <div className="p-5">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-white font-semibold text-lg">KeenKeeper</h3>
                  <span className="text-xs px-2 py-1 bg-violet-500/20 text-violet-300 rounded">
                    Featured
                  </span>
                </div>

                <p className="text-sm text-slate-400 mb-4 line-clamp-3">
                  KeenKeeper helps you stay connected by tracking communication gaps and reminding you to maintain your friendships through a simple, clean interface.
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  <span className="text-[11px] px-3 py-1 rounded-full border border-white/10 text-white/60 bg-white/5">Next.js</span>
                  <span className="text-[11px] px-3 py-1 rounded-full border border-white/10 text-white/60 bg-white/5">DaisyUi</span>
                  <span className="text-[11px] px-3 py-1 rounded-full border border-white/10 text-white/60 bg-white/5">Hero UI</span>
                  <span className="text-[11px] px-3 py-1 rounded-full border border-white/10 text-white/60 bg-white/5">Better Auth</span>
                  <span className="text-[11px] px-3 py-1 rounded-full border border-white/10 text-white/60 bg-white/5">MongoDB</span>
                  <span className="text-[11px] px-3 py-1 rounded-full border border-white/10 text-white/60 bg-white/5">Tailwind CSS</span>
                  <span className="text-[#fff3f35b] text-[12px] py-1">+6</span>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex gap-3 text-slate-400">

                    <div className="border px-3 py-1 rounded-sm border-gray-500 bg-[#0a121c] cursor-pointer">
                      <a
                        href="https://keenkeeper-zeta.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-violet-400 transition flex items-center gap-2"
                      >
                        <ExternalLink size={16} />
                        <span className="font-medium text-white text-sm">Live</span>
                      </a>
                    </div>

                    <div className="border px-3 py-1 rounded-sm border-gray-500 bg-[#0a121c] cursor-pointer">
                      <a
                        href="https://github.com/alfaazahmed7/assignment-07"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-violet-400 transition flex items-center gap-2"
                      >
                        <FaGithub />
                        <span className="font-medium text-white text-sm">Github</span>
                      </a>
                    </div>
                  </div>

                  <button className="flex items-center gap-1 text-sm text-violet-400 hover:text-violet-300">
                    View
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              className="max-w-[350px] md:max-w-[400px] rounded-xl overflow-hidden bg-[#0f172a] border border-slate-700"
            >
              <div className="relative h-[180px]">
                <Image
                  src="https://i.ytimg.com/vi/TrFkfgMZuqc/maxresdefault.jpg"
                  alt="Project"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 340px"
                  priority={false}
                />
              </div>

              <div className="p-5">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-white font-semibold text-lg">Dragon News</h3>
                  <span className="text-xs px-2 py-1 bg-violet-500/20 text-violet-300 rounded">
                    Featured
                  </span>
                </div>

                <p className="text-sm text-slate-400 mb-4 line-clamp-3">
                  Dragon News is a full-stack web app focused on building a clean, intuitive news discovery experience, where I designed and developed core features end-to-end.
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  <span className="text-[11px] px-3 py-1 rounded-full border border-white/10 text-white/60 bg-white/5">Next.js</span>
                  <span className="text-[11px] px-3 py-1 rounded-full border border-white/10 text-white/60 bg-white/5">DaisyUi</span>
                  <span className="text-[11px] px-3 py-1 rounded-full border border-white/10 text-white/60 bg-white/5">Hero UI</span>
                  <span className="text-[11px] px-3 py-1 rounded-full border border-white/10 text-white/60 bg-white/5">Better Auth</span>
                  <span className="text-[11px] px-3 py-1 rounded-full border border-white/10 text-white/60 bg-white/5">MongoDB</span>
                  <span className="text-[11px] px-3 py-1 rounded-full border border-white/10 text-white/60 bg-white/5">Tailwind CSS</span>
                  <span className="text-[#fff3f35b] text-[12px] py-1">+6</span>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex gap-3 text-slate-400">

                    <div className="border px-3 py-1 rounded-sm border-gray-500 bg-[#0a121c] cursor-pointer">
                      <a
                        href="https://tilix-eight.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-violet-400 transition flex items-center gap-2"
                      >
                        <ExternalLink size={16} />
                        <span className="font-medium text-white text-sm">Live</span>
                      </a>
                    </div>

                    <div className="border px-3 py-1 rounded-sm border-gray-500 bg-[#0a121c] cursor-pointer">
                      <a
                        href="https://github.com/alfaazahmed7/dragon-news"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-violet-400 transition flex items-center gap-2"
                      >
                        <FaGithub />
                        <span className="font-medium text-white text-sm">Github</span>
                      </a>
                    </div>
                  </div>

                  <button className="flex items-center gap-1 text-sm text-violet-400 hover:text-violet-300">
                    View
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </div>
  );
}
export default ProjectCard;