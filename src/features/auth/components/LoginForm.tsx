"use client";

import Link from "next/link";
import { useState } from "react";
import { Activity, Mail, Lock, ArrowRight, Shield } from "lucide-react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="relative min-h-screen bg-bg-dark flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute top-[10%] left-[10%] w-[350px] h-[350px] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[10%] w-[350px] h-[350px] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />

      <div className="max-w-md w-full space-y-8 relative z-10">
        <div className="text-center">
          <Link href="/" className="inline-flex items-center gap-2 group justify-center mb-6">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 border border-primary/30">
              <Activity className="w-5 h-5 text-primary" />
            </div>
            <span className="text-xl font-bold tracking-wider text-white">
              FLOW<span className="text-primary">SYNC</span>
            </span>
          </Link>
          <h2 className="text-3xl font-extrabold text-white">Welcome back</h2>
          <p className="mt-2 text-sm text-zinc-400">
            Or{" "}
            <Link href="/register" className="font-semibold text-primary hover:text-primary-hover transition-colors">
              create a new account
            </Link>
          </p>
        </div>

        <div className="glass-panel-glow rounded-2xl p-8 shadow-xl">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full pl-11 pr-4 py-3 rounded-lg glass-input text-sm"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block">
                    Password
                  </label>
                  <a href="#" className="text-xs text-primary hover:underline font-medium">
                    Forgot password?
                  </a>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-11 pr-4 py-3 rounded-lg glass-input text-sm"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-zinc-500">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="rounded bg-zinc-900 border-zinc-800 text-primary focus:ring-primary w-4 h-4"
                />
                <span>Remember this device</span>
              </label>
              <span className="flex items-center gap-1">
                <Shield className="w-3.5 h-3.5 text-zinc-500" />
                Session Encrypted
              </span>
            </div>

            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-3.5 rounded-lg transition-all duration-300 shadow-[0_0_15px_rgba(255,1,79,0.3)] hover:shadow-[0_0_25px_rgba(255,1,79,0.5)] flex items-center justify-center gap-2 group"
            >
              <span>Sign In</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
