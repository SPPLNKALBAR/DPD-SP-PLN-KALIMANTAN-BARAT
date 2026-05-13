import React, { useState } from 'react';
import { Home, Newspaper, LayoutDashboard, Network, Info, MessageSquare, Search, Menu, Globe, X } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

export type TabType = 'home' | 'news' | 'dashboard' | 'structure' | 'about' | 'aspiration';

interface NavbarProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

const navItems: { icon: any; label: string; id: TabType }[] = [
  { icon: Home, label: 'Beranda', id: 'home' },
  { icon: Network, label: 'Struktur Organisasi', id: 'structure' },
  { icon: Info, label: 'Tentang', id: 'about' },
];

export function Navbar({ activeTab, onTabChange }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleTabChange = (id: TabType) => {
    onTabChange(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 glass-nav h-20 px-6 md:px-12 flex items-center">
        {/* Logo Section - Left Side */}
        <div className="flex-1 flex items-center">
          <div className="flex items-center gap-5 cursor-pointer relative group" onClick={() => handleTabChange('home')}>
            <div className="relative flex items-center justify-center">
              <img 
                src="https://drive.google.com/thumbnail?id=1NcadbSCAmRCiE3RLjXcEy3cEj3_Hul6M&sz=w500" 
                alt="Logo Organisasi" 
                className="object-contain relative z-10 group-hover:scale-110 transition-all duration-700"
                style={{ width: '64px' }}
              />
              <div className="absolute inset-0 bg-brand-red/10 rounded-full blur-2xl group-hover:bg-brand-red/20 transition-all duration-700 -z-10" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-baseline gap-1">
                <span className="font-sans font-black text-2xl md:text-3xl tracking-tighter text-brand-red leading-none pt-0">
                  DPD SP
                </span>
                <span className="font-sans font-black text-2xl md:text-3xl tracking-tighter text-slate-900 leading-none">
                  PLN
                </span>
              </div>
              <span className="text-[11px] font-black uppercase tracking-[0.35em] text-slate-500 mt-2 leading-none">
                Kalimantan Barat
              </span>
            </div>
          </div>
        </div>

        {/* Navigation Items - Center Side */}
        <div className="hidden lg:flex flex-1 justify-center items-center gap-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleTabChange(item.id)}
              className={cn(
                "px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 flex items-center gap-2.5 border border-transparent whitespace-nowrap",
                activeTab === item.id 
                  ? "text-brand-red bg-brand-red/5 border-brand-red/20 shadow-sm" 
                  : "text-slate-600 hover:text-brand-red hover:bg-slate-50 hover:border-slate-200"
              )}
            >
              <item.icon className={cn("w-4 h-4 transition-transform duration-300", activeTab === item.id && "scale-110")} />
              {item.label}
            </button>
          ))}
        </div>

        {/* Right Side - Empty space for balance */}
        <div className="flex-1 hidden lg:flex justify-end items-center gap-4">
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-3 rounded-2xl bg-white/50 text-slate-800 hover:bg-slate-50 hover:text-brand-red transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 left-0 right-0 p-4 z-40 lg:hidden"
          >
            <div className="bg-white/90 backdrop-blur-xl border border-slate-200 rounded-3xl p-4 shadow-2xl flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleTabChange(item.id)}
                  className={cn(
                    "flex items-center gap-3 w-full p-4 rounded-2xl text-left font-bold transition-colors",
                    activeTab === item.id
                      ? "bg-brand-red/10 text-brand-red"
                      : "text-slate-600 hover:bg-slate-50"
                  )}
                >
                  <item.icon className="w-5 h-5" />
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
