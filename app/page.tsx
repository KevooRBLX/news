"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bell, Code2, Megaphone, MessageSquare, Radio, Shield, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("all");

  const news = [
    {
      category: "clients",
      title: "BetterDiscord User Banned",
      description: "High-profile user caught using modified client, resulting in permanent account suspension",
      date: "2024-03-21",
      badge: "Breaking",
      badgeColor: "destructive",
    },
    {
      category: "api",
      title: "Discord API v10 Released",
      description: "Major updates to Gateway API including improved rate limits and new endpoints",
      date: "2024-03-20",
      badge: "Update",
      badgeColor: "primary",
    },
    {
      category: "voice",
      title: "Voice SDK Enhancement",
      description: "New noise suppression features and improved audio quality in Voice API",
      date: "2024-03-19",
      badge: "Feature",
      badgeColor: "secondary",
    },
  ];

  const filteredNews = activeTab === "all" ? news : news.filter(item => item.category === activeTab);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <header className="border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Zap className="h-8 w-8 text-primary" />
              <h1 className="text-3xl font-bold">Ascend News</h1>
            </div>
            <nav className="flex gap-4">
              <button
                onClick={() => setActiveTab("all")}
                className={`px-4 py-2 rounded-full transition-colors ${
                  activeTab === "all" ? "bg-primary text-primary-foreground" : "hover:bg-secondary"
                }`}
              >
                All News
              </button>
              <button
                onClick={() => setActiveTab("clients")}
                className={`px-4 py-2 rounded-full transition-colors ${
                  activeTab === "clients" ? "bg-primary text-primary-foreground" : "hover:bg-secondary"
                }`}
              >
                Client Updates
              </button>
              <button
                onClick={() => setActiveTab("api")}
                className={`px-4 py-2 rounded-full transition-colors ${
                  activeTab === "api" ? "bg-primary text-primary-foreground" : "hover:bg-secondary"
                }`}
              >
                API Updates
              </button>
              <button
                onClick={() => setActiveTab("voice")}
                className={`px-4 py-2 rounded-full transition-colors ${
                  activeTab === "voice" ? "bg-primary text-primary-foreground" : "hover:bg-secondary"
                }`}
              >
                Voice Updates
              </button>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNews.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-2">
                    {item.category === "clients" && <Shield className="h-5 w-5 text-blue-500" />}
                    {item.category === "api" && <Code2 className="h-5 w-5 text-green-500" />}
                    {item.category === "voice" && <Radio className="h-5 w-5 text-purple-500" />}
                    <Badge variant={item.badgeColor as any}>{item.badge}</Badge>
                  </div>
                  <span className="text-sm text-muted-foreground">{item.date}</span>
                </div>
                <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Featured Updates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6 bg-primary text-primary-foreground">
              <div className="flex items-center gap-2 mb-4">
                <Megaphone className="h-6 w-6" />
                <h3 className="text-xl font-semibold">Discord Server Discovery</h3>
              </div>
              <p>New algorithm improvements for server discovery featuring AI-powered recommendations</p>
            </Card>
            <Card className="p-6 bg-secondary">
              <div className="flex items-center gap-2 mb-4">
                <MessageSquare className="h-6 w-6" />
                <h3 className="text-xl font-semibold">Message Components</h3>
              </div>
              <p>Enhanced message components with new interactive elements and improved accessibility</p>
            </Card>
          </div>
        </section>

        <section className="mt-12">
          <div className="flex items-center gap-2 mb-6">
            <Bell className="h-6 w-6" />
            <h2 className="text-2xl font-bold">Stay Updated</h2>
          </div>
          <Card className="p-6">
            <p className="text-lg mb-4">Subscribe to our newsletter for the latest Discord updates and API changes</p>
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity">
                Subscribe
              </button>
            </div>
          </Card>
        </section>
      </main>
    </div>
  );
}