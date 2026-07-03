"use client";

import { motion } from "framer-motion";
import { Key, Briefcase, Clock, MessageSquare, Lock, RefreshCw } from "lucide-react";

export default function FeaturesList() {
  const features = [
    {
      icon: Key,
      service: "Secure Authentication",
      title: "Resilient Session Management",
      desc: "Secure login and session handling protecting your team's project workspaces. Built-in security best practices to keep your task data private.",
      details: ["Secure token-based session handling", "Session state verification", "Sandboxed workspace environments"]
    },
    {
      icon: Briefcase,
      service: "Workspace Management",
      title: "High-Performance Workspaces",
      desc: "View, organize, and transition tasks dynamically across multiple workspaces. Add details, comments, and statuses in seconds.",
      details: ["Interactive drag-and-drop task boards", "Status tracking and transitions", "Nested comment threads"]
    },
    {
      icon: Clock,
      service: "Team Sharing",
      title: "Durable Invite Workflows",
      desc: "Invite team members to collaborate on your boards via direct email links. Easily manage active members and pending invites.",
      details: ["Single-click invitation links", "Real-time status indicators", "Revoke or re-send invites easily"]
    },
    {
      icon: MessageSquare,
      service: "Live Alerts",
      title: "Real-Time Notifications",
      desc: "Direct browser delivery of toast notifications and status badges as soon as changes occur on the board.",
      details: ["Instant visual cues", "Activity logs and history", "Custom alert preferences"]
    }
  ];

  return (
    <div className="space-y-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((feat, index) => {
          const Icon = feat.icon;
          return (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel-glow rounded-2xl p-8 hover:border-primary/40 transition-all duration-300 relative group flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] uppercase tracking-widest text-primary font-bold bg-primary/5 px-3 py-1 rounded-full border border-primary/20">
                    {feat.service}
                  </span>
                  <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-primary group-hover:border-primary/50 transition-colors duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                    {feat.title}
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>

                <ul className="space-y-2 pt-2 border-t border-zinc-900">
                  {feat.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-zinc-500">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="glass-panel rounded-2xl p-8 md:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Behind the Scenes: Live Notifications Engine
            </h2>
            <p className="text-sm text-zinc-400 leading-relaxed">
              When teammates work together, FlowSync uses our live notifications pipeline to deliver status updates and chat logs instantly, keeping delays under a second. Heaviest operations are processed asynchronously in the cloud to ensure a butter-smooth user interface.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-zinc-800/80">
              <div className="flex gap-3">
                <div className="p-2 rounded-lg bg-zinc-900 text-primary h-fit">
                  <Lock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Secure Encryption</h4>
                  <p className="text-[11px] text-zinc-500 mt-1">End-to-end encryption keeping your projects safe.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="p-2 rounded-lg bg-zinc-900 text-primary h-fit">
                  <RefreshCw className="w-4 h-4 animate-spin-slow" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Cloud Alerts</h4>
                  <p className="text-[11px] text-zinc-500 mt-1">Workspaces synchronized continuously.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-850 font-mono text-xs text-zinc-400 space-y-4">
              <div className="flex justify-between items-center border-b border-zinc-900 pb-2">
                <span className="text-[10px] text-zinc-500">live_notifications.json</span>
                <span className="text-[9px] text-primary bg-primary/10 px-2 py-0.5 rounded border border-primary/20">JSON Payload</span>
              </div>
              <pre className="text-[11px] leading-relaxed overflow-x-auto text-zinc-500">
{`{
  "event": "workspace.notification",
  "timestamp": "2026-07-03T17:40:06Z",
  "payload": {
    "workspaceId": "ws_dev_sprint_2",
    "updatedBy": "Alex Rivera",
    "task": {
      "id": "task_104",
      "title": "Design Interactive Flowcharts",
      "status": "COMPLETED"
    }
  }
}`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
