"use client";

import { Users, Zap, ShieldCheck, Send } from "lucide-react";

export default function BottomGrid() {
  return (
    <>
      <section className="py-24 border-t border-zinc-900 bg-zinc-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Designed For Easy Team Collaboration
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Every detail is designed with productivity in mind. From instant sharing link creation to beautiful real-time alerts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl glass-panel hover:border-primary/20 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-6 group-hover:border-primary transition-all duration-300">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Workspace Sharing</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Invite teammates to collaborate on your projects with secure invitation links. Get notifications when they join.
              </p>
            </div>

            <div className="p-8 rounded-2xl glass-panel hover:border-primary/20 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-6 group-hover:border-primary transition-all duration-300">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Interactive Board Updates</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                All changes to boards and task lists trigger instant updates. Keep track of status shifts and checklist updates instantly.
              </p>
            </div>

            <div className="p-8 rounded-2xl glass-panel hover:border-primary/20 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-6 group-hover:border-primary transition-all duration-300">
                <ShieldCheck className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Live Alerts Center</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Stay up-to-date with instant toast notifications whenever teammates update a card or assign a task.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-zinc-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel-glow rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl pointer-events-none" />

            <div className="max-w-xl mx-auto text-center space-y-4 mb-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Get in Touch</h2>
              <p className="text-zinc-400 text-sm">
                Have questions about features, feedback, or custom integrations? Send us a message directly.
              </p>
            </div>

            <form className="space-y-6 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 text-sm rounded-lg glass-input"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 text-sm rounded-lg glass-input"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Message</label>
                <textarea
                  rows={4}
                  placeholder="How can we help you coordinate your work?"
                  className="w-full px-4 py-3 text-sm rounded-lg glass-input resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-3.5 rounded-lg transition-all duration-300 shadow-[0_0_15px_rgba(255,1,79,0.3)] hover:shadow-[0_0_25px_rgba(255,1,79,0.5)] flex items-center justify-center gap-2 group"
              >
                <span>Send message</span>
                <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
