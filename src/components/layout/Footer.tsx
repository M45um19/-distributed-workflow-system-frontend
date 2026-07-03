"use client";

import Link from "next/link";
import { Activity } from "lucide-react";

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" {...props}>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" {...props}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const SlackIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" {...props}>
    <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523 2.528 2.528 0 0 1-2.522-2.523 2.528 2.528 0 0 1 2.522-2.52h2.52v2.52zm1.261 0a2.528 2.528 0 0 1 2.52-2.52h5.043a2.528 2.528 0 0 1 2.522 2.52v5.042a2.528 2.528 0 0 1-2.522 2.52H8.823a2.528 2.528 0 0 1-2.52-2.52v-5.042zM8.823 5.043a2.528 2.528 0 0 1-2.52-2.52 2.528 2.528 0 0 1 2.52-2.522 2.528 2.528 0 0 1 2.522 2.522v2.52h-2.522zm0 1.261a2.528 2.528 0 0 1 2.52 2.52v5.043a2.528 2.528 0 0 1-2.52 2.522H3.78a2.528 2.528 0 0 1-2.522-2.522V8.824a2.528 2.528 0 0 1 2.522-2.52h5.043zm10.135 3.761a2.528 2.528 0 0 1 2.52-2.52 2.528 2.528 0 0 1 2.522 2.52 2.528 2.528 0 0 1-2.522 2.52h-2.52v-2.52zm-1.262 0a2.528 2.528 0 0 1-2.52 2.52H10.13a2.528 2.528 0 0 1-2.522-2.52V3.78a2.528 2.528 0 0 1 2.522-2.52h5.043a2.528 2.528 0 0 1 2.52 2.52v5.043zm-3.76 10.136a2.528 2.528 0 0 1 2.52 2.52 2.528 2.528 0 0 1-2.52 2.522 2.528 2.528 0 0 1-2.522-2.522v-2.52h2.522zm0-1.262a2.528 2.528 0 0 1-2.522-2.52v-5.043a2.528 2.528 0 0 1 2.522-2.52h5.042a2.528 2.528 0 0 1 2.522 2.52v5.043a2.528 2.528 0 0 1-2.522 2.52h-5.042z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-bg-dark text-zinc-400 py-16 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 border border-primary/30">
                <Activity className="w-4 h-4 text-primary" />
              </div>
              <span className="text-lg font-bold tracking-wider text-white">
                FLOW<span className="text-primary">SYNC</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-zinc-500">
              FlowSync is a beautiful, intuitive collaboration platform designed for teams to coordinate projects, task boards, and notifications in real-time, completely free.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="hover:text-primary transition-colors duration-300">
                <TwitterIcon />
              </a>
              <a href="#" className="hover:text-primary transition-colors duration-300">
                <GithubIcon />
              </a>
              <a href="#" className="hover:text-primary transition-colors duration-300">
                <LinkedinIcon />
              </a>
              <a href="#" className="hover:text-primary transition-colors duration-300">
                <SlackIcon />
              </a>
            </div>
          </div>

          {/* Solutions Links */}
          <div>
            <h3 className="text-white text-sm font-semibold tracking-wider uppercase mb-4">Product</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/features" className="hover:text-primary transition-colors">Features</Link>
              </li>
              <li>
                <Link href="/integrations" className="hover:text-primary transition-colors">Integrations</Link>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">System Health</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">Team Boards</a>
              </li>
            </ul>
          </div>

          {/* Resource Links */}
          <div>
            <h3 className="text-white text-sm font-semibold tracking-wider uppercase mb-4">Resources</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#" className="hover:text-primary transition-colors">API Docs</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">Platform Guides</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">Status Dashboard</a>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">About Us</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter / Contact */}
          <div className="space-y-4">
            <h3 className="text-white text-sm font-semibold tracking-wider uppercase mb-4">Stay Synchronized</h3>
            <p className="text-sm text-zinc-500">
              Get the latest updates on new features and template releases.
            </p>
            <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2.5 text-sm rounded-lg glass-input focus:outline-none"
                required
              />
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary-hover text-white text-sm font-semibold py-2.5 rounded-lg transition-colors shadow-[0_0_15px_rgba(255,1,79,0.2)] hover:shadow-[0_0_20px_rgba(255,1,79,0.4)]"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-zinc-800/80 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-zinc-600 gap-4">
          <p>&copy; {new Date().getFullYear()} FlowSync. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-zinc-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-zinc-400 transition-colors">Security Rules</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
