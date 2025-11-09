"use client";

import { useState } from "react";
import { Cpu, MemoryStick, HardDrive, Check, MailCheck, Gauge, Network, Database, MailPlus, HelpCircle, Infinity, Globe, Hourglass, HandHelping, LaptopMinimalCheck, Shield, HeartHandshake, Users, UserCheck, PlusSquare, Lock } from "lucide-react";
import { pricingTabs, pricingPlans } from "@/lib/pricing-constants";

function Pricing() {
  const [activeTab, setActiveTab] = useState('monthly');

  const showPricingTab = (tab: string) => {
    setActiveTab(tab);
  };

  const iconMap = {
    cpu: Cpu,
    'memory-stick': MemoryStick,
    'hard-drive': HardDrive,
    check: Check,
    'mail-check': MailCheck,
    gauge: Gauge,
    network: Network,
    database: Database,
    'mail-plus': MailPlus,
    'help-circle': HelpCircle,
    infinity: Infinity,
    globe: Globe,
    hourglass: Hourglass,
    'hand-helping': HandHelping,
    'laptop-minimal-check': LaptopMinimalCheck,
    shield: Shield,
    'heart-handshake': HeartHandshake,
    users: Users,
    'user-check': UserCheck,
    'plus-square': PlusSquare,
    lock: Lock,
  };

  return (
    <div className="max-w-6xl mx-auto text-center backdrop-blur-md bg-black/20">
      <h2 className="font-extrabold text-4xl mb-8 md:text-5xl">
        Our <span className="gradient-text-hosting">Pricing</span> Plans
      </h2>

      <div className="flex justify-center mb-12 gap-4 flex-wrap">
        {pricingTabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab-button ${activeTab === tab.id ? 'active' : ''} backdrop-blur-md bg-white/10 border border-white/20 rounded-full px-6 py-3 text-white font-semibold transition-all duration-300 hover:bg-white/20`}
            onClick={() => showPricingTab(tab.id)}
            id={`${tab.id}-tab`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <p className="text-gray-400 mb-12 text-sm">
        (All prices are in AUD)
      </p>

      <div className="gap-8 grid grid-cols-1 md:grid-cols-3" id="all-plans">
        {pricingPlans[activeTab as keyof typeof pricingPlans].map((plan, index) => (
          <div
            key={`${activeTab}-${plan.name}-${index}`}
            className={`relative flex items-center flex-col p-8 pricing-card rounded-lg shadow-xl backdrop-blur-md bg-white/5 border border-white/20 ${plan.featured ? 'featured' : ''} ${plan.badge === 'Most Popular' ? 'border-2 border-yellow-400' : ''}`}
            data-plan-type={activeTab}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            {plan.badge && (
              <span className="text-white text-xs absolute font-bold popular-badge tracking-wide uppercase">
                {plan.badge}
              </span>
            )}
            <h3 className="font-bold mb-4 text-2xl mt-8">{plan.name}</h3>
            <p className="text-gray-400 mb-6">{plan.description}</p>
            <div className="mb-6 font-extrabold text-5xl">
              ${plan.price}<span className="text-gray-400 text-lg">/{plan.period}</span>
            </div>
            <ul className="w-full text-gray-300 text-left mb-8 space-y-3">
              {plan.features.map((feature, featureIndex) => {
                const IconComponent = iconMap[feature.icon as keyof typeof iconMap];
                return (
                  <li
                    key={featureIndex}
                    className={`flex items-center ${feature.opacity ? 'opacity-50' : ''}`}
                  >
                    <IconComponent className={`h-5 mr-2 w-5 ${feature.color}`} />
                    {feature.text}
                    {feature.badges && feature.badges.map((badge, badgeIndex) => (
                      <span
                        key={badgeIndex}
                        className={`text-white rounded-full font-semibold px-2 py-0.5 text-xs ${badge.class} ml-2`}
                      >
                        {badge.text}
                      </span>
                    ))}
                  </li>
                );
              })}
            </ul>
            <button
              className="w-full btn-gradient duration-300 font-semibold px-8 py-3 rounded-full text-white transition-all"
              onClick={() => window.open(plan.buttonUrl, '_blank')}
            >
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export { Pricing };