"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Server, Cpu, Bell, Layers, MessageSquare } from "lucide-react";

export default function SimulatorSection() {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [logs, setLogs] = useState<string[]>([]);
  const [isRunning, setIsRunning] = useState(false);

  const simulateWorkflow = async () => {
    if (isRunning) return;
    setIsRunning(true);
    setLogs([]);

    const steps = [
      { text: "Workspace: Welcome to FlowSync! A premium project workspace built for teams, 100% free.", delay: 1500 },
      { text: "Board Engine: Creating customizable workspaces featuring gorgeous glassmorphism boards.", delay: 1500 },
      { text: "Sync Coordinator: Inviting team members in seconds via secure sharing links.", delay: 1500 },
      { text: "State Pipeline: Tracking tasks and dragging cards with instant live sync across all devices.", delay: 1500 },
      { text: "State Pipeline: Staying aligned with real-time updates, comments, and checklists.", delay: 1500 },
      { text: "Sync Coordinator: Saving project boards with automatic cloud backups to keep data safe.", delay: 1500 },
      { text: "Alerts Engine: Pushing final notifications to empower your team's productivity!", delay: 1500 }
    ];

    for (let i = 0; i < steps.length; i++) {
      setActiveStep(i);
      setLogs(prev => [...prev, steps[i].text]);
      await new Promise(resolve => setTimeout(resolve, steps[i].delay));
    }
    setActiveStep(null);
    setIsRunning(false);
  };

  return (
    <section id="simulator" className="py-24 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs text-primary font-bold tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
            Live Interactive Simulator
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            See Live Workspace Alerts in Action
          </h2>
          <p className="text-zinc-400 text-sm">
            Trigger a mock workspace activity. See how task edits, comments, and project notifications deliver instant alerts to your team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-8 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent blur-3xl pointer-events-none" />
            <div className="glass-panel-glow rounded-2xl p-6 relative z-10 flex flex-col justify-between min-h-[420px] h-full">
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-xs text-zinc-500 font-bold uppercase tracking-wider">Workspace Coordinator</span>
                  <button
                    onClick={simulateWorkflow}
                    disabled={isRunning}
                    className="flex items-center gap-2 bg-primary hover:bg-primary-hover disabled:opacity-50 text-white text-xs font-bold px-4 py-2.5 rounded-lg transition-all duration-300 shadow-[0_0_15px_rgba(255,1,79,0.3)]"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    {isRunning ? "Running Tour..." : "Trigger Team Interaction"}
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative py-4">
                  <div className={`p-4 rounded-xl border transition-all duration-300 text-center ${activeStep === 0 || activeStep === 1
                      ? "border-primary bg-primary/10 shadow-[0_0_20px_rgba(255,1,79,0.15)]"
                      : "border-zinc-800 bg-zinc-950/60"
                    }`}>
                    <Server className={`w-6 h-6 mx-auto mb-2 ${activeStep === 0 || activeStep === 1 ? "text-primary" : "text-zinc-500"}`} />
                    <h3 className={`text-xs font-bold transition-colors duration-300 ${activeStep === 0 || activeStep === 1 ? "text-primary" : "text-white"}`}>Workspace</h3>
                    <p className={`text-[10px] mt-1 transition-colors duration-300 ${activeStep === 0 || activeStep === 1 ? "text-primary/70" : "text-zinc-500"}`}>Board Engine</p>
                    <span className={`inline-block text-[10px] font-semibold mt-2 px-2 py-0.5 rounded transition-all duration-300 ${activeStep === 0 || activeStep === 1
                        ? "bg-primary/20 border-primary text-primary"
                        : "bg-zinc-900 border-zinc-800 text-zinc-400"
                      }`}>
                      Task Board
                    </span>
                  </div>

                  <div className={`p-4 rounded-xl border transition-all duration-300 text-center ${activeStep === 2 || activeStep === 3 || activeStep === 4 || activeStep === 5
                      ? "border-primary bg-primary/10 shadow-[0_0_20px_rgba(255,1,79,0.15)]"
                      : "border-zinc-800 bg-zinc-950/60"
                    }`}>
                    <Cpu className={`w-6 h-6 mx-auto mb-2 ${activeStep === 2 || activeStep === 3 || activeStep === 4 || activeStep === 5 ? "text-primary" : "text-zinc-500"}`} />
                    <h3 className={`text-xs font-bold transition-colors duration-300 ${activeStep === 2 || activeStep === 3 || activeStep === 4 || activeStep === 5 ? "text-primary" : "text-white"}`}>Sync Coordinator</h3>
                    <p className={`text-[10px] mt-1 transition-colors duration-300 ${activeStep === 2 || activeStep === 3 || activeStep === 4 || activeStep === 5 ? "text-primary/70" : "text-zinc-500"}`}>State Pipeline</p>
                    <span className={`inline-block text-[10px] font-semibold mt-2 px-2 py-0.5 rounded transition-all duration-300 ${activeStep === 2 || activeStep === 3 || activeStep === 4 || activeStep === 5
                        ? "bg-primary/20 border-primary text-primary"
                        : "bg-zinc-900 border-zinc-800 text-zinc-400"
                      }`}>
                      Active Sync
                    </span>
                  </div>

                  <div className={`p-4 rounded-xl border transition-all duration-300 text-center ${activeStep === 6
                      ? "border-primary bg-primary/10 shadow-[0_0_20px_rgba(255,1,79,0.15)]"
                      : "border-zinc-800 bg-zinc-950/60"
                    }`}>
                    <Bell className={`w-6 h-6 mx-auto mb-2 ${activeStep === 6 ? "text-primary" : "text-zinc-500"}`} />
                    <h3 className={`text-xs font-bold transition-colors duration-300 ${activeStep === 6 ? "text-primary" : "text-white"}`}>Alerts Engine</h3>
                    <p className={`text-[10px] mt-1 transition-colors duration-300 ${activeStep === 6 ? "text-primary/70" : "text-zinc-500"}`}>Push Broadcaster</p>
                    <span className={`inline-block text-[10px] font-semibold mt-2 px-2 py-0.5 rounded transition-all duration-300 ${activeStep === 6
                        ? "bg-primary/20 border-primary text-primary"
                        : "bg-zinc-900 border-zinc-800 text-zinc-400"
                      }`}>
                      Live Feed
                    </span>
                  </div>
                </div>

                <div className="border border-primary/30 bg-zinc-950/40 p-4 rounded-xl mt-6 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-primary" />
                    <span className="text-xs text-white font-semibold">Active Sync Pipeline:</span>
                  </div>
                  <div className="flex gap-4">
                    <span className={`text-[10px] font-semibold px-2.5 py-1 rounded border transition-colors ${activeStep === 1 || activeStep === 2
                        ? "bg-primary/20 border-primary text-primary shadow-[0_0_15px_rgba(255,1,79,0.2)]"
                        : "bg-zinc-900 border-zinc-800 text-zinc-500"
                      }`}>
                      Board Updated
                    </span>
                    <span className={`text-[10px] font-semibold px-2.5 py-1 rounded border transition-colors ${activeStep === 5 || activeStep === 6
                        ? "bg-primary/20 border-primary text-primary shadow-[0_0_15px_rgba(255,1,79,0.2)]"
                        : "bg-zinc-900 border-zinc-800 text-zinc-500"
                      }`}>
                      Notification Sent
                    </span>
                  </div>
                </div>
              </div>

              <div className="border-t border-zinc-900 mt-6 pt-4 flex justify-between items-center text-xs text-zinc-500">
                <span className="flex items-center gap-1.5">
                  <span className={`w-2 h-2 rounded-full ${isRunning ? "bg-amber-500 animate-pulse" : "bg-emerald-500"}`} />
                  {isRunning ? "Demonstrating workspace..." : "Idle. Awaiting interaction."}
                </span>
                <span>Workspace updates active</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent blur-3xl pointer-events-none" />
            <div className="glass-panel rounded-2xl p-6 relative z-10 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-primary" />
                  Workspace Features Walkthrough
                </h3>
                <div className="h-[280px] overflow-y-auto font-mono text-[10px] space-y-2.5 border border-zinc-900 rounded-lg p-3 bg-zinc-950/80 scrollbar">
                  <AnimatePresence>
                    {logs.length === 0 ? (
                      <p className="text-zinc-600 italic">No features activated yet. Click &quot;Trigger Team Interaction&quot; to start the walkthrough.</p>
                    ) : (
                      logs.map((log, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          className={`leading-relaxed transition-all duration-300 ${idx === logs.length - 1
                              ? "text-primary font-bold text-xs"
                              : "text-zinc-400 text-[11px]"
                            }`}
                        >
                          {log}
                        </motion.div>
                      ))
                    )}
                  </AnimatePresence>
                </div>
              </div>
              <div className="pt-4 border-t border-zinc-900 text-center">
                <span className="text-[10px] text-zinc-500">Interactive workspace preview features.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
