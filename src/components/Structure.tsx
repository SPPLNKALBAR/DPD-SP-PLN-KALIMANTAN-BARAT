import React from 'react';
import { motion } from 'motion/react';
import { User, Users, Shield, Briefcase, Heart, MessageCircle, Factory } from 'lucide-react';
import { cn } from '../lib/utils';

interface Member {
  name: string;
  id?: string;
  role?: string;
}

interface Bureau {
  name: string;
  icon: React.ElementType;
  head: Member;
  members: Member[];
}

const pembina = [
  { name: 'Syarif Usmulyansyah' },
  { name: 'Uray Suryadi', id: '7905067C' },
  { name: 'Hamidah' },
];

const coreLeadership = [
  { role: 'Ketua', name: 'Akhmad Junaidi', id: '7305043C', icon: User },
  { role: 'Sekretaris', name: 'Sy. Ilham Kurniawan Alkadri', id: '83066642', icon: Briefcase },
  { role: 'Bendahara', name: 'Sri Narolita', id: '8005005J', icon: Shield },
];

const deputies = [
  { role: 'Wakil Sekretaris', name: 'Indra Adhitya Eka Putri', id: '921719352Y' },
  { role: 'Wakil Bendahara', name: 'Nadya Intan Milasari', id: '93161870ZY' },
];

const bureaus: Bureau[] = [
  {
    name: 'Biro Organisasi',
    icon: Users,
    head: { name: 'Hery Julianto', id: '8908022C' },
    members: [
      { name: 'R. M. Hadi Kusuma', id: '8307017C' },
      { name: 'Hero Putra Perdana', id: '8808010C' },
      { name: 'Muhammad Tiochinery', id: '9616011AY' },
      { name: 'Budi', id: '9313063CY' },
    ]
  },
  {
    name: 'Biro Advokasi',
    icon: MessageCircle,
    head: { name: 'Asnawi', id: '8509327Z' },
    members: [
      { name: 'Umar Wijaksono', id: '92171202ZY' },
      { name: 'Bimasyah Ramadhana', id: '95189122Y' },
      { name: 'Riyadi Satrio Wicaksono', id: '92141084ZY' },
      { name: 'Tri Fani', id: '90163545ZY' },
    ]
  },
  {
    name: 'Biro Kesejahteraan',
    icon: Heart,
    head: { name: 'Sugiwantoro', id: '7191077C' },
    members: [
      { name: 'Gagah Anugrah Agustina', id: '93171055ZY' },
      { name: 'Budion Rizki Putra Azali', id: '94185312Y' },
      { name: 'Hendri Aditama', id: '8609022C' },
      { name: 'Leonda Legawa', id: '9414097CY' },
    ]
  },
  {
    name: 'Biro Hubungan Masyarakat',
    icon: Users,
    head: { name: 'Agustian Saputra', id: '9313011CY' },
    members: [
      { name: 'Ranu Ardian', id: '8909005C' },
      { name: 'Wahyu Kusuma Maryadi', id: '9715027CY' },
      { name: 'Donny Satriawan', id: '8307010C' },
      { name: 'Sukarno', id: '9413066CY' },
    ]
  },
  {
    name: 'Biro Hubungan Industrial',
    icon: Factory,
    head: { name: 'Harsian', id: '7907010Z' },
    members: [
      { name: 'Charisma Arif Kurniawan', id: '9009018C' },
      { name: 'Mangasa Rahmat Harahap', id: '95141110CY' },
      { name: 'Ficha Meilawaty Choir', id: '9820297ZY' },
      { name: 'Andi Ridwan Maulana', id: '9312011CY' },
    ]
  }
];

export function Structure() {
  return (
    <div className="space-y-8 pb-10">
      <div className="text-center space-y-3">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-serif font-black text-slate-800 italic"
        >
          Struktur Organisasi
        </motion.h2>
        <p className="text-slate-500 font-bold uppercase tracking-[0.2em] text-xs">
          Dewan Pimpinan Daerah SP PLN Kalimantan Barat
        </p>
      </div>

      {/* Pembina Section */}
      <section className="space-y-8">
        <div className="flex flex-col items-center">
          <span className="text-[10px] font-black tracking-[0.3em] text-brand-red uppercase mb-4 bg-brand-red/10 px-4 py-1 rounded-full">Dewan Pembina</span>
          <div className="flex flex-wrap justify-center gap-4">
            {pembina.map((p, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="glass-white p-4 rounded-xl min-w-[160px] text-center card-3d"
              >
                <p className="text-sm font-bold text-slate-800">{p.name}</p>
                {p.id && <p className="text-[10px] text-slate-500 font-mono mt-1">{p.id}</p>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Structure Tree */}
      <section className="flex flex-col items-center relative w-full pt-8">
 
        {/* Ketua */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="glass-white px-8 py-5 rounded-2xl border-2 border-brand-red/40 shadow-xl shadow-black/30 text-center relative z-10 min-w-[220px] mb-12 card-3d"
        >
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-red text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest whitespace-nowrap shadow-lg z-20 flex items-center justify-center">
            KETUA
          </div>
          <h3 className="text-2xl font-black text-slate-900 leading-tight mt-2">{coreLeadership[0].name}</h3>
          <p className="text-sm text-brand-red font-mono font-bold mt-2">{coreLeadership[0].id}</p>
        </motion.div>
 
        {/* Secretary & Treasurer Row */}
        <div className="w-full max-w-6xl relative">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 px-4 relative">
 
            {/* Sekretaris Side */}
            <div className="flex flex-col items-center space-y-4 relative pt-4">
              
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="glass-white w-full p-4 rounded-xl border-l-4 border-brand-red text-center relative z-10 shadow-xl shadow-black/20 card-3d"
              >
                <span className="text-[9px] font-black uppercase tracking-widest text-brand-red">{coreLeadership[1].role}</span>
                <h4 className="text-md font-bold text-slate-900 mt-1">{coreLeadership[1].name}</h4>
                <p className="text-[10px] text-slate-500 font-mono mt-1">{coreLeadership[1].id}</p>
              </motion.div>
              
              {/* Wakil Sekretaris */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="glass-white w-3/4 p-4 rounded-lg border-l-4 border-brand-red/40 text-center scale-95 opacity-90 shadow-sm card-3d"
              >
                <span className="text-[8px] font-black uppercase tracking-widest text-slate-500">{deputies[0].role}</span>
                <h5 className="text-sm font-bold text-slate-800 mt-0.5">{deputies[0].name}</h5>
                <p className="text-[9px] text-slate-400 font-mono">{deputies[0].id}</p>
              </motion.div>
            </div>
 
            {/* Bendahara Side */}
            <div className="flex flex-col items-center space-y-4 relative pt-4">
 
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="glass-white w-full p-4 rounded-xl border-r-4 border-brand-red text-center relative z-10 shadow-xl shadow-black/20 card-3d"
              >
                <span className="text-[9px] font-black uppercase tracking-widest text-brand-red">{coreLeadership[2].role}</span>
                <h4 className="text-md font-bold text-slate-900 mt-1">{coreLeadership[2].name}</h4>
                <p className="text-[10px] text-slate-500 font-mono mt-1">{coreLeadership[2].id}</p>
              </motion.div>
 
              {/* Wakil Bendahara */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="glass-white w-3/4 p-3 rounded-lg border-r-4 border-brand-red/40 text-center scale-95 opacity-90 card-3d"
              >
                <span className="text-[8px] font-black uppercase tracking-widest text-slate-500">{deputies[1].role}</span>
                <h5 className="text-xs font-bold text-slate-800 mt-0.5">{deputies[1].name}</h5>
                <p className="text-[9px] text-slate-400 font-mono">{deputies[1].id}</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
 
      {/* Bureaus Section */}
      <section className="pt-12 border-t border-slate-200">
        <div className="text-center mb-8">
          <span className="text-[10px] font-black tracking-[0.3em] text-brand-red uppercase bg-brand-red/10 px-4 py-1 rounded-full">Biro-Biro Organisasi</span>
        </div>
        
        {/* Horizontal Scroll Container for Mobile, Grid for Desktop */}
        <div className="flex lg:grid lg:grid-cols-5 gap-4 overflow-x-auto pb-8 snap-x no-scrollbar">
          {bureaus.map((biro, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="glass-white rounded-2xl p-4 flex flex-col items-center group hover:-translate-y-1 transition-all duration-300 min-w-[220px] lg:min-w-0 snap-center shrink-0 border border-slate-100 card-3d"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-red/10 flex items-center justify-center mb-4 group-hover:bg-brand-red group-hover:text-white transition-colors">
                  <biro.icon className="w-5 h-5 text-brand-red group-hover:text-white transition-colors" />
                </div>
              
              <h4 className="text-xs font-black text-slate-900 text-center leading-tight mb-4 min-h-[2.5rem] flex items-center uppercase">{biro.name}</h4>
              
              <div className="w-full space-y-3">
                {/* Ketua Biro */}
                <div className="text-center p-2 bg-slate-50 rounded-lg border border-slate-200">
                  <span className="text-[7px] font-black uppercase tracking-widest text-brand-red block mb-0.5">Ketua Biro</span>
                  <p className="text-[10px] font-bold text-slate-900 truncate">{biro.head.name}</p>
                  <p className="text-[8px] text-slate-500 font-mono">{biro.head.id}</p>
                </div>
 
                {/* Anggota Biro */}
                <div className="space-y-1.5">
                  <span className="text-[7px] font-black uppercase tracking-widest text-slate-400 block mb-1 text-center">Anggota</span>
                  {biro.members.map((member, mIdx) => (
                    <div key={mIdx} className="text-center px-2 py-1.5 bg-slate-50/50 rounded-md border border-slate-100">
                      <p className="text-[9px] font-bold text-slate-700 truncate">{member.name}</p>
                      <p className="text-[7px] text-slate-400 font-mono leading-none">{member.id}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
 
      {/* Vision area */}
      <footer className="mt-20 glass-white rounded-[2.5rem] p-12 text-center overflow-hidden relative card-3d">
        <div className="absolute top-0 left-0 w-full h-1 bg-brand-red" />
        <h3 className="text-2xl font-serif italic text-slate-900 font-bold mb-4">Bersatu, Berjuang, Berjaya!</h3>
        <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Solidaritas Tanpa Batas - DPD SP PLN Kalbar</p>
      </footer>
    </div>
  );
}
