"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  UserPlus, 
  Layers, 
  Users, 
  PlusCircle, 
  Activity, 
  ArrowRight,
  CheckCircle,
  Copy,
  FileText
} from "lucide-react";


export default function HowItWorksInteractive() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 0,
      title: "1. Create Free Account",
      shortTitle: "Sign Up",
      desc: "Register in seconds with zero fees or credit cards. Gain instant access to all premium features right out of the box.",
      icon: UserPlus,
    },
    {
      id: 1,
      title: "2. Launch Your Workspace",
      shortTitle: "Create Workspace",
      desc: "Establish a central hub for your team. Create custom task boards, configure project stages, and customize column names.",
      icon: Layers,
    },
    {
      id: 2,
      title: "3. Invite Team Members",
      shortTitle: "Invite Teammates",
      desc: "Generate secure invitation tokens with a single click. Share workspace access instantly with unlimited teammates.",
      icon: Users,
    },
    {
      id: 3,
      title: "4. Assign Tasks & Checklists",
      shortTitle: "Add & Assign Tasks",
      desc: "Add task items to the board, write detailed checklists, set priority tags, and assign them directly to team members.",
      icon: PlusCircle,
    },
    {
      id: 4,
      title: "5. Track Workspace Updates",
      shortTitle: "Track Progress",
      desc: "Stay aligned with real-time in-app updates. Receive live notification alerts as team members complete milestones.",
      icon: Activity,
    }
  ];

  return (
    <div className="space-y-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        <div className="lg:col-span-5 space-y-4 flex flex-col justify-center">
          {steps.map((step) => {
            const Icon = step.icon;
            const isSelected = activeStep === step.id;
            return (
              <button
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-start gap-4 ${
                  isSelected
                    ? "bg-zinc-950/80 border-primary shadow-[0_0_20px_rgba(255,1,79,0.1)] text-white"
                    : "bg-zinc-950/40 border-zinc-900 hover:border-zinc-800 hover:bg-zinc-950/60 text-zinc-400"
                }`}
              >
                <div className={`p-3 rounded-xl border transition-colors ${
                  isSelected 
                    ? "bg-primary/10 border-primary/30 text-primary" 
                    : "bg-zinc-900 border-zinc-850 text-zinc-500"
                }`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className={`text-base font-bold transition-colors ${isSelected ? "text-primary" : "text-white"}`}>
                    {step.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        <div className="lg:col-span-7 relative flex items-stretch">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent blur-3xl pointer-events-none" />
          <div className="glass-panel-glow rounded-3xl p-8 relative z-10 w-full flex flex-col justify-between min-h-[480px]">
            <div className="flex justify-between items-center border-b border-zinc-800/80 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-600" />
                <span className="w-3 h-3 rounded-full bg-yellow-500" />
                <span className="w-3 h-3 rounded-full bg-emerald-500" />
              </div>
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                Preview: {steps[activeStep].shortTitle}
              </span>
            </div>

            <div className="flex-1 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.25 }}
                  className="w-full"
                >
                  {activeStep === 0 && (
                    <div className="max-w-md mx-auto p-6 rounded-2xl bg-zinc-950/80 border border-zinc-800 shadow-[0_4px_30px_rgba(0,0,0,0.5)] space-y-4">
                      <div className="text-center space-y-1">
                        <h4 className="text-sm font-bold text-white uppercase tracking-wider">Create Account</h4>
                        <p className="text-[10px] text-zinc-500">100% Free Sandbox Access</p>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <label className="block text-[10px] text-zinc-500 uppercase font-bold mb-1">Full Name</label>
                          <input 
                            type="text" 
                            value="Alex Mercer" 
                            disabled 
                            className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-xs text-zinc-400 focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] text-zinc-500 uppercase font-bold mb-1">Email Address</label>
                          <input 
                            type="text" 
                            value="alex@workspace.io" 
                            disabled 
                            className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-xs text-zinc-400 focus:outline-none"
                          />
                        </div>
                      </div>
                      <button disabled className="w-full bg-primary text-white text-xs font-bold py-2.5 rounded-lg opacity-80 shadow-[0_0_15px_rgba(255,1,79,0.3)]">
                        Create Free Workspace
                      </button>
                    </div>
                  )}

                  {activeStep === 1 && (
                    <div className="w-full space-y-4">
                      <div className="flex justify-between items-center bg-zinc-950/80 border border-zinc-800 px-4 py-2.5 rounded-xl">
                        <span className="text-xs font-bold text-white">Engineering Workspace</span>
                        <span className="text-[10px] text-zinc-500 uppercase font-semibold px-2 py-0.5 rounded bg-zinc-900">Task Board</span>
                      </div>
                      <div className="grid grid-cols-3 gap-3">
                        <div className="p-3 rounded-xl bg-zinc-950/60 border border-zinc-900 space-y-2">
                          <span className="text-[9px] font-bold text-zinc-500 uppercase">To Do</span>
                          <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-[10px] text-white">Setup Repo</div>
                        </div>
                        <div className="p-3 rounded-xl bg-zinc-950/60 border border-zinc-900 space-y-2">
                          <span className="text-[9px] font-bold text-primary uppercase">In Progress</span>
                          <div className="p-2 rounded-lg bg-zinc-900 border border-primary/30 text-[10px] text-white shadow-[0_0_10px_rgba(255,1,79,0.1)]">Theme styling</div>
                        </div>
                        <div className="p-3 rounded-xl bg-zinc-950/60 border border-zinc-900 space-y-2">
                          <span className="text-[9px] font-bold text-zinc-500 uppercase">Done</span>
                          <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-[10px] text-zinc-400 line-through">Draft Specs</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeStep === 2 && (
                    <div className="max-w-md mx-auto p-6 rounded-2xl bg-zinc-950/80 border border-zinc-800 space-y-4">
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">Invite Teammates</h4>
                      <p className="text-[10px] text-zinc-500 leading-relaxed">
                        Generate secure tokens for instant team board access.
                      </p>
                      <div className="flex gap-2">
                        <input 
                          type="text" 
                          value="https://flowsync.io/join/c9f381" 
                          disabled 
                          className="flex-1 bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-xs font-mono text-primary focus:outline-none"
                        />
                        <button disabled className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white">
                          <Copy className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="border-t border-zinc-900 pt-3 space-y-2">
                        <div className="text-[9px] font-bold text-zinc-500 uppercase tracking-wider">Pending Invites</div>
                        <div className="flex justify-between items-center text-[10px] text-zinc-400">
                          <span>taylor@team.io</span>
                          <span className="text-amber-500 text-[9px] font-semibold">Pending...</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeStep === 3 && (
                    <div className="max-w-md mx-auto p-6 rounded-2xl bg-zinc-950/80 border border-zinc-800 space-y-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <span className="text-[9px] font-bold text-primary uppercase tracking-wide px-2 py-0.5 rounded bg-primary/10">Active Task</span>
                          <h4 className="text-sm font-bold text-white mt-1">Configure Color Palette</h4>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-[9px] text-primary font-bold">TM</div>
                          <span className="text-[10px] text-zinc-500 font-semibold">Taylor</span>
                        </div>
                      </div>
                      <p className="text-[10px] text-zinc-400 leading-relaxed">
                        Establish the crimson theme variable properties across global utility tokens.
                      </p>
                      <div className="space-y-2 border-t border-zinc-900 pt-3">
                        <div className="text-[9px] font-bold text-zinc-500 uppercase tracking-wider mb-2">Checklist items</div>
                        <div className="flex items-center gap-2 text-[10px] text-zinc-400">
                          <CheckCircle className="w-3.5 h-3.5 text-primary" />
                          <span>Setup CSS global variables</span>
                        </div>
                        <div className="flex items-center gap-2 text-[10px] text-zinc-400">
                          <div className="w-3.5 h-3.5 rounded-full border border-zinc-800" />
                          <span>Build design token utility wrappers</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeStep === 4 && (
                    <div className="max-w-md mx-auto p-5 rounded-2xl bg-zinc-950/80 border border-zinc-800 space-y-3.5">
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                        <Activity className="w-3.5 h-3.5 text-primary animate-pulse" />
                        Activity Stream Alerts
                      </h4>
                      <div className="space-y-2 text-[10px] font-mono leading-relaxed">
                        <div className="p-2.5 rounded-lg bg-zinc-900/60 border border-zinc-900 text-zinc-400 flex items-center gap-1.5">
                          <CheckCircle className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                          <span>
                            <span className="text-primary font-semibold">Taylor</span> marked <span className="text-white">&apos;Setup CSS global variables&apos;</span> as completed <span className="text-zinc-650">(2m ago)</span>
                          </span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-zinc-900/60 border border-zinc-900 text-zinc-400 flex items-center gap-1.5">
                          <Users className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                          <span>
                            <span className="text-primary font-semibold">Taylor</span> joined the workspace via invitation code <span className="text-zinc-650">(15m ago)</span>
                          </span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-zinc-900/60 border border-zinc-900 text-zinc-400 flex items-center gap-1.5">
                          <FileText className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                          <span>
                            <span className="text-primary font-semibold">Alex</span> created task <span className="text-white">&apos;Configure Color Palette&apos;</span> <span className="text-zinc-650">(1h ago)</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="border-t border-zinc-900 mt-6 pt-4 flex justify-between items-center text-xs text-zinc-500">
              <span>Step {activeStep + 1} of 5</span>
              <div className="flex gap-1.5">
                {steps.map((step) => (
                  <button
                    key={step.id}
                    onClick={() => setActiveStep(step.id)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      activeStep === step.id ? "bg-primary w-4" : "bg-zinc-800"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="glass-panel rounded-2xl p-8 text-center space-y-6 max-w-2xl mx-auto">
        <h2 className="text-xl font-bold text-white">Ready to streamline your workspace?</h2>
        <p className="text-zinc-400 text-sm max-w-md mx-auto leading-relaxed">
          Create unlimited workspaces, invite your teammates, and assign tasks with instant notifications—all completely free.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/register"
            className="inline-flex items-center gap-2 text-xs font-bold text-white bg-primary hover:bg-primary-hover px-6 py-3 rounded-lg shadow-[0_0_15px_rgba(255,1,79,0.3)] transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,1,79,0.5)]"
          >
            Get Started Free
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
