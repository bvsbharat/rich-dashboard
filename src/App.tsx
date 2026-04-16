/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bell, 
  Settings, 
  User, 
  ChevronDown, 
  ChevronUp, 
  MoreVertical, 
  Play, 
  Pause, 
  History,
  ArrowUpRight,
  CheckCircle2,
  Circle,
  Monitor,
  Briefcase,
  Users,
  LayoutGrid,
  Calendar as CalendarIcon,
  MessageSquare,
  CreditCard,
  Target,
  Search,
  Plus
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  ResponsiveContainer, 
  Cell 
} from 'recharts';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Helper for Tailwind classes
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Mock Data
const progressData = [
  { day: 'S', hours: 2, active: false },
  { day: 'M', hours: 5, active: false },
  { day: 'T', hours: 3, active: false },
  { day: 'W', hours: 4, active: false },
  { day: 'T', hours: 3.5, active: false },
  { day: 'F', hours: 6, active: true },
  { day: 'S', hours: 1, active: false },
];

const onboardingTasks = [
  { id: 1, title: 'Interview', time: 'Sep 13, 08:30', completed: true, icon: Monitor },
  { id: 2, title: 'Team Meeting', time: 'Sep 13, 10:30', completed: true, icon: Users },
  { id: 3, title: 'Project Update', time: 'Sep 13, 13:00', completed: false, icon: MessageSquare },
  { id: 4, title: 'Discuss Q3 Goals', time: 'Sep 14, 14:45', completed: false, icon: Target },
  { id: 5, title: 'HR Policy Review', time: 'Sep 13, 16:30', completed: false, icon: CreditCard },
];

export default function App() {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [pensionOpen, setPensionOpen] = useState(false);
  const [devicesOpen, setDevicesOpen] = useState(true);

  return (
    <div className="min-h-screen bg-[#f9f9f5] font-sans">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-full flex flex-col relative"
      >
        {/* Header/Top Nav */}
        <header className="px-10 py-8 flex items-center justify-between">
          <div className="flex items-center gap-12">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center font-bold text-xl">C</div>
              <span className="text-2xl font-semibold tracking-tight">Crextio</span>
            </div>
            
            <nav className="hidden xl:flex items-center gap-1">
              {[
                'Dashboard', 'People', 'Hiring', 'Devices', 'Apps', 'Salary', 'Calendar', 'Reviews'
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveTab(item)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                    activeTab === item 
                      ? "bg-brand-dark text-white" 
                      : "text-gray-500 hover:bg-gray-100"
                  )}
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-100 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-all">
              <Settings size={18} className="text-gray-500" />
              <span>Setting</span>
            </button>
            <button className="p-2.5 bg-brand-yellow/30 text-brand-dark rounded-full hover:bg-brand-yellow/50 transition-all border border-brand-yellow/20 relative">
              <Bell size={18} />
              <span className="absolute top-2 right-2.5 w-1.5 h-1.5 bg-red-500 rounded-full"></span>
            </button>
            <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden border border-white shadow-sm cursor-pointer hover:scale-105 transition-transform">
              <img 
                src="https://picsum.photos/seed/user123/100/100" 
                alt="Profile" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </header>

        <main className="flex-1 px-10 pb-10 grid grid-cols-12 gap-6">
          {/* Welcome Area */}
          <section className="col-span-12 mb-2">
            <h1 className="text-5xl font-medium tracking-tight mb-8">Welcome in, Nixtio</h1>
            
            <div className="flex flex-wrap items-end gap-12">
              <StatItem label="Interviews" value="15%" subValue="15%" color="bg-brand-dark" textColor="text-white" />
              <StatItem label="Hired" value="15%" subValue="15%" color="bg-brand-yellow" />
              <StatItem label="Project time" value="60%" subValue="60%" color="bg-gray-200" striped />
              <StatItem label="Output" value="10%" subValue="10%" color="bg-gray-100" border />
              
              <div className="flex-1 flex gap-12 justify-end pr-8">
                <SimpleStat label="Employe" value="78" icon={<Users size={20} className="text-gray-400" />} />
                <SimpleStat label="Hirings" value="56" icon={<Briefcase size={20} className="text-gray-400" />} />
                <SimpleStat label="Projects" value="203" icon={<LayoutGrid size={20} className="text-gray-400" />} />
              </div>
            </div>
          </section>

          {/* Left Column Area */}
          <div className="col-span-12 lg:col-span-3 flex flex-col gap-6">
            {/* User Profile Card */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="relative aspect-[3/4] rounded-[32px] overflow-hidden shadow-lg group"
            >
              <img 
                src="https://picsum.photos/seed/lora/400/600" 
                alt="Lora Piterson" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6">
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-0.5">Lora Piterson</h3>
                    <p className="text-gray-300 text-sm">UX/UI Designer</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full text-white font-medium border border-white/30">
                    $1,200
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Sidebar Accordion Area */}
            <div className="flex flex-col gap-2">
              <AccordionItem 
                title="Pension contributions" 
                isOpen={pensionOpen} 
                onClick={() => setPensionOpen(!pensionOpen)}
              />
              <AccordionItem 
                title="Devices" 
                isOpen={devicesOpen} 
                onClick={() => setDevicesOpen(!devicesOpen)}
              >
                <div className="mt-4 flex items-center gap-4 bg-white p-3 rounded-2xl border border-gray-100">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden p-1">
                    <img src="https://picsum.photos/seed/macbook/100/100" alt="MacBook" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm">MacBook Air</h4>
                    <p className="text-xs text-gray-500">Version M1</p>
                  </div>
                  <MoreVertical size={16} className="text-gray-400 cursor-pointer" />
                </div>
              </AccordionItem>
              <AccordionItem title="Compensation Summary" />
              <AccordionItem title="Employee Benefits" />
            </div>
          </div>

          {/* Middle Content Area */}
          <div className="col-span-12 lg:col-span-6 flex flex-col gap-6">
            <div className="grid grid-cols-2 gap-6">
              {/* Progress Card */}
              <DashboardCard title="Progress" icon={<ArrowUpRight size={18} />}>
                <div className="flex flex-col h-full justify-between pt-2">
                  <div className="mb-4">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-semibold tracking-tight">6.1 h</span>
                      <span className="text-xs text-gray-400 font-medium">Work Time this week</span>
                    </div>
                  </div>
                  <div className="h-32 w-full mt-auto relative">
                    {/* Floating Tooltip Label */}
                    <div className="absolute top-[-30px] right-[55px] z-10">
                      <motion.div 
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-brand-yellow px-2 py-1 rounded-full text-[10px] font-bold shadow-sm"
                      >
                        5h 23m
                      </motion.div>
                      <div className="w-0.5 h-6 bg-brand-yellow/30 mx-auto mt-0.5" />
                    </div>
                    
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={progressData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                        <Bar 
                          dataKey="hours" 
                          radius={[6, 6, 6, 6]} 
                          barSize={12}
                        >
                          {progressData.map((entry, index) => (
                            <Cell 
                              key={`cell-${index}`} 
                              fill={entry.active ? '#fdd866' : '#1a1a1a'} 
                              className={cn(entry.active ? "opacity-100" : "opacity-10 transition-opacity hover:opacity-20")}
                            />
                          ))}
                        </Bar>
                        <XAxis 
                          dataKey="day" 
                          axisLine={false} 
                          tickLine={false} 
                          tick={{ fontSize: 10, fill: '#9ca3af', fontWeight: 600 }}
                          interval={0}
                          padding={{ left: 10, right: 10 }}
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </DashboardCard>

              {/* Time Tracker Card */}
              <DashboardCard title="Time tracker" icon={<ArrowUpRight size={18} />}>
                <div className="flex flex-col items-center justify-center h-full pt-4">
                  <div className="relative w-36 h-36">
                    {/* SVG Progress Circle */}
                    <svg className="w-full h-full transform -rotate-90">
                      <circle
                        cx="72"
                        cy="72"
                        r="64"
                        stroke="#f3f4f6"
                        strokeWidth="8"
                        fill="transparent"
                        strokeDasharray="402"
                        strokeDashoffset="0"
                        strokeLinecap="round"
                      />
                      <circle
                        cx="72"
                        cy="72"
                        r="64"
                        stroke="#fdd866"
                        strokeWidth="8"
                        fill="transparent"
                        strokeDasharray="402"
                        strokeDashoffset="120"
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center rotate-90">
                      <span className="text-3xl font-bold font-mono">02:35</span>
                      <span className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">Work Time</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mt-6">
                    <button className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center hover:bg-white hover:shadow-sm transition-all text-gray-400">
                      <Play size={14} />
                    </button>
                    <button className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center bg-white shadow-sm text-brand-dark">
                      <Pause size={14} fill="currentColor" />
                    </button>
                    <button className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center hover:bg-white hover:shadow-sm transition-all text-gray-400">
                      <History size={14} />
                    </button>
                  </div>
                </div>
              </DashboardCard>
            </div>

            {/* Calendar/Schedule View */}
            <DashboardCard className="flex-1 min-h-[400px]">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-sm font-semibold text-gray-400 uppercase tracking-widest">August</span>
                  <div className="text-center">
                    <h3 className="text-xl font-semibold">September 2024</h3>
                  </div>
                  <span className="text-sm font-semibold text-gray-400 uppercase tracking-widest">October</span>
                </div>

                <div className="grid grid-cols-6 gap-2 mb-6">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, i) => (
                    <div key={day} className="text-center">
                      <div className="text-xs text-gray-400 mb-2">{day}</div>
                      <div className={cn(
                        "text-sm font-bold h-8 flex items-center justify-center rounded-xl",
                        i === 2 ? "bg-white text-brand-dark shadow-sm border border-gray-100" : "text-gray-400"
                      )}>{22 + i}</div>
                    </div>
                  ))}
                </div>

                <div className="relative flex-1 space-y-4 pt-4 border-t border-gray-100">
                  <div className="flex gap-4 items-start">
                    <span className="text-xs font-medium text-gray-400 w-16 pt-1">8:00 am</span>
                    <div className="flex-1" />
                  </div>
                  <div className="flex gap-4 items-start">
                    <span className="text-xs font-medium text-gray-400 w-16 pt-1">9:00 am</span>
                    <div className="flex-1 relative">
                       <motion.div 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-brand-dark text-white p-4 rounded-3xl flex flex-col gap-2 relative z-10 shadow-lg -mt-4 w-full max-w-[400px]"
                       >
                         <div className="flex items-center justify-between">
                            <span className="text-sm font-semibold">Weekly Team Sync</span>
                            <div className="flex -space-x-2">
                              {[1,2,3].map(i => (
                                <img key={i} src={`https://picsum.photos/seed/user${i}/40/40`} className="w-6 h-6 rounded-full border-2 border-brand-dark" referrerPolicy="no-referrer" />
                              ))}
                            </div>
                         </div>
                         <p className="text-[10px] text-gray-400">Discuss progress on projects</p>
                       </motion.div>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <span className="text-xs font-medium text-gray-400 w-16 pt-1">10:00 am</span>
                    <div className="flex-1" />
                  </div>
                  <div className="flex gap-4 items-start">
                    <span className="text-xs font-medium text-gray-400 w-16 pt-1">11:00 am</span>
                    <div className="flex-1 bg-white p-4 rounded-3xl border border-gray-100 flex items-center justify-between shadow-sm">
                      <div className="flex flex-col gap-1">
                        <span className="text-sm font-semibold">Onboarding Session</span>
                        <span className="text-[10px] text-gray-400">Introduction for new hires</span>
                      </div>
                      <div className="flex -space-x-2">
                        {[4,5].map(i => (
                           <img key={i} src={`https://picsum.photos/seed/user${i}/40/40`} className="w-6 h-6 rounded-full border-2 border-white" referrerPolicy="no-referrer" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </DashboardCard>
          </div>

          {/* Right Column Area */}
          <div className="col-span-12 lg:col-span-3 flex flex-col gap-6">
            {/* Onboarding Summary Card */}
            <DashboardCard className="bg-[#fefce8] border-none shadow-none relative overflow-hidden group">
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-brand-yellow/10 rounded-full blur-2xl group-hover:bg-brand-yellow/20 transition-all duration-700" />
              <div className="flex items-start justify-between mb-6">
                <h3 className="text-2xl font-semibold">Onboarding</h3>
                <span className="text-4xl font-bold tracking-tighter">18%</span>
              </div>
              
              <div className="grid grid-cols-3 gap-2 mb-3">
                <span className="text-[10px] text-gray-400 font-bold tracking-wider">30%</span>
                <span className="text-[10px] text-gray-400 font-bold ml-1 tracking-wider">25%</span>
                <span className="text-[10px] text-gray-400 font-bold ml-2 tracking-wider">0%</span>
              </div>
              
              <div className="h-12 flex gap-1.5 items-stretch">
                <div className="flex-[0.6] bg-brand-yellow rounded-2xl flex items-center px-4 shadow-sm border border-brand-yellow/20">
                  <span className="text-xs font-bold uppercase tracking-widest">Task</span>
                </div>
                <div className="flex-[0.4] bg-brand-dark rounded-2xl shadow-sm" />
                <div className="flex-[0.2] bg-gray-200 rounded-2xl" />
              </div>
            </DashboardCard>

            {/* Onboarding Tasks Detail */}
            <div className="flex-1 bg-brand-dark rounded-[40px] p-8 flex flex-col gap-8 text-white">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium">Onboarding Task</h3>
                <span className="text-3xl font-bold">2/8</span>
              </div>

              <div className="flex flex-col gap-6">
                {onboardingTasks.map((task, i) => (
                  <motion.div 
                    key={task.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className={cn(
                      "w-10 h-10 rounded-2xl flex items-center justify-center transition-all",
                      task.completed ? "bg-white/10" : "bg-white"
                    )}>
                      <task.icon size={18} className={task.completed ? "text-white" : "text-brand-dark"} />
                    </div>
                    <div className="flex-1">
                      <h4 className={cn("text-sm font-medium", task.completed && "text-gray-500 line-through")}>{task.title}</h4>
                      <p className="text-[10px] text-gray-500">{task.time}</p>
                    </div>
                    {task.completed ? (
                      <CheckCircle2 size={18} className="text-brand-yellow" fill="currentColor" />
                    ) : (
                      <Circle size={18} className="text-gray-700" />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </motion.div>
    </div>
  );
}

// Sub-components
function StatItem({ 
  label, 
  value, 
  subValue, 
  color = "bg-brand-dark", 
  textColor = "text-brand-dark",
  striped = false,
  border = false
}: { 
  label: string; 
  value: string; 
  subValue: string; 
  color?: string; 
  textColor?: string;
  striped?: boolean;
  border?: boolean;
}) {
  return (
    <div className="flex flex-col gap-4">
      <span className="text-xs font-semibold text-gray-400 capitalize">{label}</span>
      <div className={cn(
        "relative h-12 min-w-[120px] rounded-full flex items-center px-4 overflow-hidden",
        border && "border border-gray-100",
        color.includes('bg-') && !striped ? color : "bg-brand-muted"
      )}>
        {striped && (
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_transparent_0%,_currentColor_100%)] bg-[length:20px_20px]" 
            style={{ 
              backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 50%)',
              backgroundSize: '8px 8px'
            }} 
          />
        )}
        <span className={cn("text-xs font-bold relative z-10", textColor)}>{value}</span>
      </div>
    </div>
  );
}

function SimpleStat({ label, value, icon }: { label: string; value: string; icon: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center">
        {icon}
      </div>
      <div className="flex flex-col">
        <span className="text-4xl font-semibold tracking-tight leading-none">{value}</span>
        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">{label}</span>
      </div>
    </div>
  );
}

function DashboardCard({ 
  title, 
  children, 
  icon, 
  className 
}: { 
  title?: string; 
  children: React.ReactNode; 
  icon?: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn(
      "bg-white rounded-[32px] p-8 flex flex-col border border-white/50 shadow-sm transition-all hover:shadow-md",
      className
    )}>
      {title && (
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:text-brand-dark transition-colors">
            {icon}
          </button>
        </div>
      )}
      <div className="flex-1">
        {children}
      </div>
    </section>
  );
}

function AccordionItem({ 
  title, 
  isOpen = false, 
  onClick, 
  children 
}: { 
  title: string; 
  isOpen?: boolean; 
  onClick?: () => void; 
  children?: React.ReactNode;
}) {
  return (
    <div className="border-b border-gray-100 py-3 last:border-none">
      <button 
        onClick={onClick}
        className="w-full flex items-center justify-between group transition-all"
      >
        <span className={cn(
          "text-sm font-semibold transition-colors",
          isOpen ? "text-brand-dark" : "text-gray-400 group-hover:text-brand-dark"
        )}>
          {title}
        </span>
        {onClick && (isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />)}
      </button>
      <AnimatePresence>
        {isOpen && children && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
