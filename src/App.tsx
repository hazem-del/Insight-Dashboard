/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  TrendingUp, 
  TrendingDown, 
  AlertCircle, 
  CheckCircle2, 
  ShoppingCart, 
  CreditCard, 
  Package, 
  DollarSign,
  Target,
  Zap,
  ShieldCheck,
  Clock,
  LayoutDashboard,
  BarChart3,
  ListChecks,
  Users,
  MapPin,
  Smartphone,
  MousePointer2,
  ArrowUpRight,
  Info,
  Menu,
  X,
  ChevronRight,
  Activity
} from "lucide-react";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  Cell,
  PieChart,
  Pie,
  AreaChart,
  Area,
  LineChart,
  Line
} from 'recharts';
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { dashboardData, tabs } from "./data";

// Utility for tailwind classes
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Components ---

const BentoCard = ({ children, className, title, icon: Icon, delay = 0 }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ y: -4, transition: { duration: 0.2 } }}
    transition={{ delay, duration: 0.5 }}
    className={cn(
      "bento-card group relative overflow-hidden",
      "hover:border-indigo-500/30 hover:shadow-[0_0_30px_rgba(99,102,241,0.05)] transition-colors duration-300",
      className
    )}
  >
    {/* Subtle scanline effect on hover */}
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/[0.02] to-transparent -translate-y-full group-hover:translate-y-full transition-transform duration-1000 pointer-events-none" />
    
    {title && (
      <div className="flex items-center justify-between mb-6 relative z-10">
        <div className="flex items-center gap-3">
          {Icon && (
            <div className="p-2 bg-indigo-500/10 rounded-xl border border-indigo-500/20 group-hover:scale-110 transition-transform duration-300">
              <Icon className="w-4 h-4 text-indigo-400" />
            </div>
          )}
          <h3 className="text-sm font-bold tracking-tight text-slate-300 group-hover:text-white transition-colors">{title}</h3>
        </div>
        <div className="w-2 h-2 rounded-full bg-indigo-500/40 animate-pulse" />
      </div>
    )}
    <div className="relative z-10">
      {children}
    </div>
  </motion.div>
);

const MiniChart = ({ data, color }: any) => (
  <div className="h-12 w-24">
    <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
      <LineChart data={data}>
        <Line 
          type="monotone" 
          dataKey="v" 
          stroke={color} 
          strokeWidth={2} 
          dot={false} 
          isAnimationActive={true}
        />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

const StatBento = ({ title, value, subValue, trend, icon: Icon, color, chartData }: any) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className="h-full"
  >
    <BentoCard className="flex flex-col justify-between h-full cursor-pointer">
      <div className="flex justify-between items-start">
        <div className="p-3 bg-white/5 rounded-2xl border border-white/10 group-hover:border-indigo-500/40 transition-colors">
          <Icon className={cn("w-5 h-5", color)} />
        </div>
        {chartData && <MiniChart data={chartData} color={color === 'text-indigo-400' ? '#6366f1' : '#06b6d4'} />}
      </div>
      <div className="mt-8 space-y-1">
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 group-hover:text-slate-400 transition-colors">{title}</p>
        <div className="flex items-baseline gap-2">
          <h2 className={cn("text-3xl font-black tracking-tighter transition-all duration-300 group-hover:scale-105 origin-right", color.replace('text-', 'text-glow-'))}>{value}</h2>
          {trend && (
            <span className={cn("text-[10px] font-bold px-2 py-0.5 rounded-full", trend > 0 ? "bg-emerald-500/10 text-emerald-400" : "bg-rose-500/10 text-rose-400")}>
              {trend > 0 ? "+" : ""}{trend}%
            </span>
          )}
        </div>
        <p className="text-[10px] text-slate-400 font-medium">{subValue}</p>
      </div>
    </BentoCard>
  </motion.div>
);

const SidebarItem = ({ id, label, icon: Icon, active, onClick }: any) => (
  <motion.button
    whileHover={{ x: -4 }}
    whileTap={{ scale: 0.97 }}
    onClick={() => onClick(id)}
    className={cn(
      "w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all duration-300 group relative overflow-hidden",
      active 
        ? "bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 shadow-[0_0_20px_rgba(99,102,241,0.1)]" 
        : "text-slate-500 hover:text-slate-300 hover:bg-white/5"
    )}
  >
    {active && (
      <motion.div 
        layoutId="sidebar-active"
        className="absolute left-0 w-1 h-6 bg-indigo-500 rounded-r-full shadow-[0_0_10px_rgba(99,102,241,0.8)]"
      />
    )}
    <Icon className={cn("w-5 h-5 transition-all duration-300", active ? "text-indigo-400 scale-110" : "text-slate-500 group-hover:text-slate-300")} />
    <span className={cn("text-sm font-bold tracking-tight transition-colors", active ? "text-white" : "")}>{label}</span>
    {active && (
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        className="ml-auto"
      >
        <ChevronRight className="w-4 h-4 opacity-50" />
      </motion.div>
    )}
  </motion.button>
);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const FunnelStep = ({ label, value, percentage, color, icon: Icon, subLabel }: any) => (
  <motion.div variants={itemVariants} className="relative">
    <div className="flex items-center justify-between mb-2">
      <div className="flex items-center gap-3">
        <div className={cn("p-2 rounded-xl border", color)}>
          <Icon className="w-4 h-4" />
        </div>
        <div>
          <p className="text-sm font-black">{label}</p>
          <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest">{subLabel}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-lg font-black text-white">{value}</p>
        <p className="text-[10px] text-slate-500 font-bold">{percentage}%</p>
      </div>
    </div>
    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: `${percentage}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
        className={cn("h-full", color.split(' ')[1].replace('text-', 'bg-'))}
      />
    </div>
  </motion.div>
);

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl">
        <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-3">{label}</p>
        <div className="space-y-2">
          {payload.map((entry: any, index: number) => (
            <div key={index} className="flex items-center justify-between gap-8">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: entry.color }} />
                <span className="text-xs font-bold text-slate-300">{entry.name}</span>
              </div>
              <span className="text-xs font-mono font-black text-white">
                {entry.value.toLocaleString()} ج
              </span>
            </div>
          ))}
        </div>
        <div className="mt-3 pt-3 border-t border-white/5">
          <div className="flex items-center justify-between gap-4">
            <span className="text-[10px] font-bold text-indigo-400 uppercase">ROAS</span>
            <span className="text-[10px] font-mono font-black text-white">
              {(payload[0].value / payload[1].value).toFixed(2)}x
            </span>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

const TimeRangeSelector = () => {
  const [range, setRange] = useState("12d");
  const ranges = [
    { id: "24h", label: "24H" },
    { id: "7d", label: "7D" },
    { id: "12d", label: "12D" },
    { id: "30d", label: "30D" },
  ];

  return (
    <div className="flex bg-white/5 p-1 rounded-xl border border-white/5">
      {ranges.map((r) => (
        <motion.button
          key={r.id}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setRange(r.id)}
          className={cn(
            "px-3 py-1 rounded-lg text-[10px] font-black transition-all duration-300",
            range === r.id 
              ? "bg-indigo-500 text-white shadow-lg shadow-indigo-500/20" 
              : "text-slate-500 hover:text-slate-300"
          )}
        >
          {r.label}
        </motion.button>
      ))}
    </div>
  );
};

const LiveActivityFeed = () => {
  const iconMap: any = {
    ShoppingCart,
    CreditCard,
    Zap,
    Users
  };

  return (
    <div className="space-y-4">
      {dashboardData.activities.map((activity, idx) => {
        const Icon = iconMap[activity.icon] || Activity;
        return (
          <motion.div
            key={activity.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="flex items-center gap-4 p-3 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors cursor-pointer group"
          >
            <div className={cn("p-2 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform", activity.color)}>
              <Icon className="w-4 h-4" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-start">
                <p className="text-xs font-black text-white truncate">{activity.user}</p>
                <span className="text-[8px] font-bold text-slate-500 uppercase">{activity.time}</span>
              </div>
              <p className="text-[10px] text-slate-400 truncate">{activity.product}</p>
            </div>
            <div className="text-right">
              <p className="text-xs font-black text-white">{activity.amount}</p>
              <div className="flex gap-0.5 justify-end mt-1">
                {[1, 2, 3].map(i => (
                  <div key={i} className={cn("w-1 h-1 rounded-full", i === 1 ? activity.color.replace('text-', 'bg-') : "bg-white/10")} />
                ))}
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [activeTab, setActiveTab] = useState("overview");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [checkedItems, setCheckedItems] = useState<number[]>([]);

  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 2000);
  };

  const toggleCheck = (idx: number) => {
    setCheckedItems(prev => 
      prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]
    );
  };

  const miniChartData = [
    { v: 30 }, { v: 45 }, { v: 35 }, { v: 60 }, { v: 55 }, { v: 80 }, { v: 70 }
  ];

  const liveActivities = [
    { id: 1, type: 'order', user: 'أحمد م.', product: 'Eternal Love', time: 'منذ دقيقتين', amount: '580 ج', icon: ShoppingCart, color: 'text-indigo-400' },
    { id: 2, type: 'checkout', user: 'سارة ع.', product: 'Keychain', time: 'منذ 5 دقائق', amount: '84 ج', icon: CreditCard, color: 'text-cyan-400' },
    { id: 3, type: 'high_value', user: 'محمد خ.', product: 'Bundle Offer', time: 'منذ 12 دقيقة', amount: '950 ج', icon: Zap, color: 'text-emerald-400' },
    { id: 4, type: 'return', user: 'هاني س.', product: 'Eternal Love', time: 'منذ 18 دقيقة', amount: '580 ج', icon: Users, color: 'text-purple-400' },
  ];

  return (
    <div className="min-h-screen bg-[#030303] text-slate-200 font-sans selection:bg-indigo-500/30 flex" dir="rtl">
      {/* Sidebar */}
      <motion.aside 
        initial={false}
        animate={{ width: sidebarOpen ? 280 : 80 }}
        className="fixed top-0 right-0 h-screen bg-[#050505] border-l border-white/5 z-50 hidden lg:flex flex-col p-4"
      >
        <div className="flex items-center gap-3 mb-12 px-2">
          <div className="w-10 h-10 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
            <Activity className="w-6 h-6 text-white" />
          </div>
          {sidebarOpen && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <h1 className="text-lg font-black tracking-tighter leading-none">LASER AFANDI</h1>
              <p className="text-[8px] text-slate-500 uppercase tracking-[0.3em] font-black mt-1">Command Center</p>
            </motion.div>
          )}
        </div>

        <nav className="flex-1 space-y-2">
          {tabs.map((tab) => (
            <SidebarItem 
              key={tab.id}
              {...tab}
              active={activeTab === tab.id}
              onClick={setActiveTab}
            />
          ))}
        </nav>

        <div className="mt-auto p-4 bg-white/5 rounded-2xl border border-white/5">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400">System Live</span>
          </div>
        </div>
      </motion.aside>

      {/* Main Content */}
      <main className={cn(
        "flex-1 transition-all duration-500 pb-12",
        sidebarOpen ? "lg:mr-[280px]" : "lg:mr-[80px]"
      )}>
        {/* Top Header */}
        <header className="h-20 border-b border-white/5 flex items-center justify-between px-8 sticky top-0 bg-[#030303]/80 backdrop-blur-xl z-40">
          <div className="flex items-center gap-4 flex-1">
            <motion.button 
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setSidebarOpen(!sidebarOpen)} 
              className="p-2 hover:bg-white/5 rounded-xl transition-colors"
            >
              <Menu className="w-5 h-5 text-slate-400" />
            </motion.button>
            <div className="h-6 w-px bg-white/10" />
            
            {/* Command Palette Search */}
            <div className="relative max-w-md w-full hidden md:block group">
              <MousePointer2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-indigo-400 transition-colors" />
              <input 
                type="text" 
                placeholder={dashboardData.header.searchPlaceholder} 
                className="w-full bg-white/5 border border-white/5 rounded-2xl py-2.5 pl-11 pr-4 text-xs font-bold focus:outline-none focus:border-indigo-500/30 focus:bg-white/10 transition-all"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleRefresh}
              className="p-2.5 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 transition-colors relative group"
            >
              <motion.div
                animate={isRefreshing ? { rotate: 360 } : {}}
                transition={{ duration: 1, repeat: isRefreshing ? Infinity : 0, ease: "linear" }}
              >
                <Activity className={cn("w-4 h-4", isRefreshing ? "text-indigo-400" : "text-slate-500")} />
              </motion.div>
              {isRefreshing && (
                <motion.div 
                  layoutId="refresh-glow"
                  className="absolute inset-0 bg-indigo-500/20 blur-xl rounded-full"
                />
              )}
            </motion.button>
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden lg:flex items-center gap-3 px-4 py-2 bg-emerald-500/5 border border-emerald-500/10 rounded-xl">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest">{dashboardData.header.liveOrderPrefix}{dashboardData.header.liveOrderValue}</span>
            </div>
            <div className="hidden sm:flex flex-col items-end">
              <div className="flex items-center gap-2">
                <motion.div 
                  animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" 
                />
                <span className="text-[10px] text-indigo-400 font-black uppercase tracking-widest">{dashboardData.header.verifiedDataLabel}</span>
              </div>
              <span className="text-xs font-mono text-slate-500">{dashboardData.header.version}</span>
            </div>
            <motion.div 
              whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.1)" }}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center cursor-pointer transition-colors"
            >
              <Users className="w-4 h-4 text-slate-400" />
            </motion.div>
          </div>
        </header>

        <div className="p-8 max-w-7xl mx-auto space-y-8">
          <AnimatePresence mode="wait">
          {activeTab === "overview" && (
            <motion.div 
              key="overview"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[180px]"
            >
              {/* Main Stats Row */}
              <StatBento 
                title={dashboardData.statsLabels.totalSales} 
                value={dashboardData.stats.totalSales} 
                trend={dashboardData.stats.totalSalesTrend}
                icon={DollarSign}
                color="text-indigo-400"
                className="md:col-span-2"
              />
              <StatBento 
                title={dashboardData.statsLabels.roas} 
                value={dashboardData.stats.roas} 
                trend={dashboardData.stats.roasTrend}
                icon={TrendingUp}
                color="text-cyan-400"
              />
              <StatBento 
                title={dashboardData.statsLabels.netProfit} 
                value={dashboardData.stats.netProfit} 
                trend={dashboardData.stats.netProfitTrend}
                icon={Zap}
                color="text-emerald-400"
              />

              {/* Chart Section */}
              <BentoCard className="md:col-span-3 md:row-span-2">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h3 className="text-lg font-bold">{dashboardData.charts.revenueVsSpend.title}</h3>
                    <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest mt-1">{dashboardData.charts.revenueVsSpend.subTitle}</p>
                  </div>
                  <div className="flex items-center gap-6">
                    <TimeRangeSelector />
                    <div className="flex gap-4">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-indigo-500" />
                        <span className="text-[10px] font-bold text-slate-400">{dashboardData.charts.revenueVsSpend.revenueLabel}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-cyan-500" />
                        <span className="text-[10px] font-bold text-slate-400">{dashboardData.charts.revenueVsSpend.spendLabel}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-[280px] w-full">
                  <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
                    <AreaChart data={dashboardData.overviewChart}>
                      <defs>
                        <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="colorSpend" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.1}/>
                          <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
                      <XAxis dataKey="name" stroke="#444" fontSize={10} tickLine={false} axisLine={false} />
                      <YAxis stroke="#444" fontSize={10} tickLine={false} axisLine={false} tickFormatter={(v) => `${v/1000}k`} />
                      <Tooltip content={<CustomTooltip />} />
                      <Area 
                        type="monotone" 
                        dataKey="revenue" 
                        name="Revenue"
                        stroke="#6366f1" 
                        fillOpacity={1} 
                        fill="url(#colorRev)" 
                        strokeWidth={3} 
                        activeDot={{ r: 6, strokeWidth: 0, fill: '#6366f1' }}
                      />
                      <Area 
                        type="monotone" 
                        dataKey="spend" 
                        name="Spend"
                        stroke="#06b6d4" 
                        fillOpacity={1}
                        fill="url(#colorSpend)"
                        strokeWidth={2} 
                        strokeDasharray="4 4" 
                        activeDot={{ r: 4, strokeWidth: 0, fill: '#06b6d4' }}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </BentoCard>

              {/* Side Info Cards */}
              <BentoCard className="md:col-span-1 md:row-span-1 bg-indigo-600/10 border-indigo-500/20">
                <div className="flex flex-col h-full justify-between">
                  <div className="p-2 bg-indigo-500/20 rounded-xl w-fit">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-1">{dashboardData.statsLabels.cpa}</h4>
                    <p className="text-2xl font-black text-white">{dashboardData.stats.cpa}</p>
                    <p className="text-[10px] text-indigo-400/60 mt-1">Optimized & Stable</p>
                  </div>
                </div>
              </BentoCard>

              <BentoCard className="md:col-span-1 md:row-span-1 bg-emerald-600/10 border-emerald-500/20">
                <div className="flex flex-col h-full justify-between">
                  <div className="p-2 bg-emerald-500/20 rounded-xl w-fit">
                    <TrendingUp className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-1">{dashboardData.statsLabels.orders}</h4>
                    <p className="text-2xl font-black text-white">{dashboardData.stats.orders}</p>
                    <p className="text-[10px] text-emerald-400/60 mt-1">Verified Shopify Orders</p>
                  </div>
                </div>
              </BentoCard>

              {/* Correction Banner Bento Style */}
              <BentoCard className="md:col-span-3 bg-emerald-500/5 border-emerald-500/10 flex items-center gap-6">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-2xl flex items-center justify-center shrink-0">
                  <Activity className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-sm font-black text-emerald-400 uppercase tracking-widest">{dashboardData.correctionBanner.title}</h4>
                  <p className="text-xs text-slate-400 mt-1">{dashboardData.correctionBanner.description}</p>
                </div>
              </BentoCard>

              {/* Live Activity Feed */}
              <BentoCard className="md:col-span-1 md:row-span-2" title="Live Activity" icon={Activity}>
                <LiveActivityFeed />
              </BentoCard>

              {/* System Health */}
              <BentoCard className="md:col-span-1 md:row-span-1" title="System Health" icon={ShieldCheck}>
                <div className="space-y-4">
                  {dashboardData.systemHealth.map((item, i) => (
                    <React.Fragment key={i}>
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold text-slate-500 uppercase">{item.name}</span>
                        <span className={cn("text-[10px] font-black", item.color.replace('bg-', 'text-'))}>{item.value}</span>
                      </div>
                      <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                        <div className={cn("h-full", item.color)} style={{ width: `${item.percentage}%` }} />
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              </BentoCard>

              <BentoCard className="md:col-span-2 md:row-span-1 bg-indigo-600/5 border-indigo-500/20">
                <div className="flex items-center justify-between h-full">
                  <div className="space-y-2">
                    <h4 className="text-xs font-black text-indigo-400 uppercase tracking-widest">{dashboardData.ui.aiRecommendationTitle}</h4>
                    <p className="text-sm font-bold text-white leading-relaxed">
                      "{dashboardData.aiRecommendation}"
                    </p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-indigo-500 text-white rounded-2xl text-xs font-black shadow-lg shadow-indigo-500/20 shrink-0"
                  >
                    {dashboardData.ui.executeNowButton}
                  </motion.button>
                </div>
              </BentoCard>
            </motion.div>
          )}

          {activeTab === "products" && (
            <motion.div 
              key="products"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]"
            >
              <BentoCard className="md:col-span-2 md:row-span-2 overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-indigo-500" />
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-0.5 bg-indigo-500/20 text-indigo-400 text-[8px] font-black uppercase tracking-widest rounded">{dashboardData.ui.bestSellerBadge}</span>
                      <h3 className="text-xl font-black">{dashboardData.topProducts[0].name}</h3>
                    </div>
                    <p className="text-xs text-slate-500">{dashboardData.topProducts[0].description} ({dashboardData.topProducts[0].revenueShare})</p>
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest">Revenue</p>
                    <p className="text-2xl font-black text-white">{dashboardData.topProducts[0].sales.toLocaleString()} ج</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {dashboardData.topProducts[0].stats.map((stat, i) => (
                    <div key={i} className="p-4 bg-white/5 rounded-2xl border border-white/5">
                      <p className="text-[8px] text-slate-500 uppercase font-black tracking-widest mb-1">{stat.label}</p>
                      <p className={cn("text-sm font-black", stat.color)}>{stat.value}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-indigo-500/5 rounded-2xl border border-indigo-500/10">
                  <p className="text-xs text-indigo-400/80 leading-relaxed">
                    <span className="font-black">{dashboardData.ui.recommendationPrefix}</span> {dashboardData.topProducts[0].performanceNote}
                  </p>
                </div>
              </BentoCard>

              <BentoCard className="md:col-span-1 md:row-span-2 bg-slate-900/50">
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <h3 className="text-lg font-black mb-1">{dashboardData.topProducts[1].name}</h3>
                    <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest">{dashboardData.topProducts[1].description} ({dashboardData.topProducts[1].revenueShare})</p>
                  </div>
                  
                  <div className="space-y-4 flex-1">
                    {dashboardData.topProducts[1].stats.map((stat, i) => (
                      <div key={i} className={cn(
                        "flex justify-between items-center p-3 rounded-xl",
                        stat.color.includes("red") ? "bg-red-500/10 border border-red-500/20" : "bg-white/5"
                      )}>
                        <span className={cn("text-xs", stat.color.includes("red") ? "text-red-400" : "text-slate-400")}>{stat.label}</span>
                        <span className={cn("text-sm font-black", stat.color.includes("red") ? "text-red-400" : "text-white")}>{stat.value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-6 border-t border-white/5">
                    <div className="flex items-center gap-2 text-amber-400 mb-2">
                      <AlertCircle className="w-4 h-4" />
                      <span className="text-[10px] font-black uppercase tracking-widest">{dashboardData.ui.strategicWarningTitle}</span>
                    </div>
                    <p className="text-[11px] text-slate-500 leading-relaxed">
                      {dashboardData.topProducts[1].performanceNote}
                    </p>
                  </div>
                </div>
              </BentoCard>

              <BentoCard className="md:col-span-3 md:row-span-1">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-black uppercase tracking-[0.2em] text-indigo-400">{dashboardData.ui.growthOpportunitiesTitle}</h3>
                  <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                    <span className="text-[10px] text-slate-500 font-bold">{dashboardData.ui.organicGrowthDetected}</span>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {dashboardData.growthOpportunities.map((p, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-indigo-500/30 transition-colors cursor-pointer group">
                      <div>
                        <p className="text-sm font-black group-hover:text-indigo-400 transition-colors">{p.name}</p>
                        <p className="text-[10px] text-slate-500 mt-1">{p.desc}</p>
                      </div>
                      <span className="text-lg font-black text-emerald-400 text-glow-emerald">{p.growth}</span>
                    </div>
                  ))}
                </div>
              </BentoCard>
            </motion.div>
          )}

          {activeTab === "funnel" && (
            <motion.div 
              key="funnel"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[180px]"
            >
              <BentoCard className="md:col-span-2 md:row-span-3">
                <div className="flex justify-between items-center mb-10">
                  <div>
                    <h3 className="text-xl font-black">{dashboardData.funnelAnalysis.title}</h3>
                    <p className="text-xs text-slate-500 mt-1">{dashboardData.funnelAnalysis.description}</p>
                  </div>
                  <div className="p-3 bg-indigo-500/10 rounded-2xl">
                    <Activity className="w-6 h-6 text-indigo-400" />
                  </div>
                </div>
                
                <div className="space-y-10">
                  {dashboardData.funnel.map((step, idx) => (
                    <FunnelStep key={idx} {...step} />
                  ))}
                </div>
              </BentoCard>

              <BentoCard className="md:col-span-1 md:row-span-1 bg-indigo-600/10 border-indigo-500/20 flex flex-col justify-center items-center text-center">
                <Smartphone className="w-8 h-8 text-indigo-400 mb-4" />
                <h4 className="text-3xl font-black text-white">{dashboardData.funnelStats.mobileTraffic}</h4>
                <p className="text-[10px] text-indigo-400 uppercase font-black tracking-widest mt-1">Mobile Traffic</p>
                <p className="text-[11px] text-slate-500 mt-3 px-4">{dashboardData.ui.mobileTrafficNote}</p>
              </BentoCard>

              <BentoCard className="md:col-span-1 md:row-span-1 bg-amber-600/10 border-amber-500/20 flex flex-col justify-center items-center text-center">
                <div className="flex items-center gap-2 mb-2">
                  <AlertCircle className="w-4 h-4 text-amber-400" />
                  <h4 className="text-xs font-black text-amber-400 uppercase tracking-widest">Checkout Completion</h4>
                </div>
                <p className="text-3xl font-black text-white">{dashboardData.funnelStats.checkoutCompletion}%</p>
                <div className="mt-4 w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${dashboardData.funnelStats.checkoutCompletion}%` }}
                    className="h-full bg-amber-500"
                  />
                </div>
                <p className="text-[10px] text-slate-500 mt-2">{dashboardData.ui.checkoutCompletionGoal}</p>
              </BentoCard>

              <BentoCard className="md:col-span-1 md:row-span-1 bg-red-600/10 border-red-500/20 flex flex-col justify-center items-center text-center">
                <h4 className="text-xs font-black text-red-400 uppercase tracking-widest mb-2">{dashboardData.ui.revenueLeakTitle}</h4>
                <p className="text-3xl font-black text-white">{dashboardData.funnelStats.revenueLeak}</p>
                <p className="text-[11px] text-slate-500 mt-2 px-4">{dashboardData.funnelStats.revenueLeakNote}</p>
              </BentoCard>
            </motion.div>
          )}

          {activeTab === "retention" && (
            <motion.div 
              key="retention"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]"
            >
              <BentoCard className="md:col-span-2 md:row-span-2">
                <div className="flex justify-between items-start mb-10">
                   <div>
                    <h3 className="text-xl font-black">{dashboardData.ui.retentionTitle}</h3>
                    <p className="text-xs text-slate-500 mt-1">{dashboardData.ui.retentionSubTitle}</p>
                  </div>
                  <div className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-[8px] font-black tracking-widest uppercase">{dashboardData.retention.retentionRate}</div>
                </div>
                
                <div className="space-y-8">
                  <div className="space-y-3">
                    <div className="flex justify-between items-end">
                      <p className="text-xs text-slate-400 font-black uppercase tracking-widest">{dashboardData.retention.currentLtv.label}</p>
                      <p className="text-xl font-black">{dashboardData.retention.currentLtv.value}</p>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${dashboardData.retention.currentLtv.percentage}%` }}
                        className="h-full bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.4)]" 
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-end">
                      <p className="text-xs text-indigo-400 font-black uppercase tracking-widest">{dashboardData.retention.targetLtv.label}</p>
                      <p className="text-xl font-black text-indigo-400">{dashboardData.retention.targetLtv.value}</p>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${dashboardData.retention.targetLtv.percentage}%` }}
                        className="h-full bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.4)]" 
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-10 p-5 bg-indigo-500/5 border border-indigo-500/10 rounded-2xl relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500" />
                  <p className="text-xs text-slate-400 leading-relaxed italic">
                    {dashboardData.retention.quote}
                  </p>
                </div>
              </BentoCard>

              <BentoCard className="md:col-span-1 md:row-span-2">
                <h3 className="text-lg font-black mb-6 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-indigo-400" /> التوزيع الجغرافي (CVR)
                </h3>
                <div className="h-[240px] w-full">
                  <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
                    <BarChart data={dashboardData.geoDistribution} layout="vertical">
                      <XAxis type="number" hide />
                      <YAxis dataKey="name" type="category" stroke="#444" fontSize={10} tickLine={false} axisLine={false} width={70} />
                      <Tooltip cursor={{ fill: '#ffffff05' }} contentStyle={{ backgroundColor: '#0a0a0a', border: '1px solid #222', borderRadius: '12px' }} />
                      <Bar dataKey="cvr" radius={[0, 4, 4, 0]} barSize={16}>
                        {dashboardData.geoDistribution.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-6 space-y-3">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/5 flex justify-between items-center">
                    <span className="text-[10px] text-slate-500 font-black uppercase tracking-widest">أعلى تحويل</span>
                    <span className="text-xs font-black text-emerald-400">المنصورة (9.2%)</span>
                  </div>
                  <div className="p-3 bg-white/5 rounded-xl border border-white/5 flex justify-between items-center">
                    <span className="text-[10px] text-slate-500 font-black uppercase tracking-widest">فرصة نمو</span>
                    <span className="text-xs font-black text-indigo-400">الإسكندرية (7.2%)</span>
                  </div>
                </div>
              </BentoCard>

              <BentoCard className="md:col-span-3 md:row-span-1">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-sm font-black uppercase tracking-[0.2em] text-indigo-400">مصادر الزيارات (Traffic Sources)</h3>
                  <div className="flex gap-4">
                    {dashboardData.trafficSources.map((t, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: t.color }} />
                        <span className="text-[10px] font-bold text-slate-500">{t.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {dashboardData.trafficSources.map((t, idx) => (
                    <div key={idx} className="p-4 bg-white/5 rounded-2xl border border-white/5 flex flex-col justify-between">
                      <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">{t.name}</p>
                      <div className="flex items-end justify-between mt-2">
                        <p className="text-2xl font-black text-white">{t.value}%</p>
                        <div className="w-12 h-1 bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full" style={{ width: `${t.value}%`, backgroundColor: t.color }} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </BentoCard>
            </motion.div>
          )}

          {activeTab === "strategy" && (
            <motion.div 
              key="strategy"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="space-y-8"
            >
              {/* Top Strategy Header */}
              <BentoCard className="bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 border-emerald-500/30">
                <div className="flex items-center gap-6">
                  <div className="p-4 bg-emerald-500/20 rounded-3xl">
                    <Target className="w-10 h-10 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-black tracking-tighter text-white">استراتيجية التوسع (Scale Strategy)</h3>
                    <p className="text-xs text-emerald-400 uppercase font-black tracking-[0.3em] mt-1">تحويل البيانات إلى أرباح حقيقية</p>
                  </div>
                </div>
              </BentoCard>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* 1. Shopify Tools */}
                <BentoCard title="أفضل الأدوات لزيادة المبيعات" icon={Zap} className="lg:col-span-1">
                  <div className="space-y-4">
                    {dashboardData.strategy.tools.map((tool, i) => (
                      <div key={i} className="p-3 bg-white/5 rounded-xl border border-white/5 hover:border-indigo-500/30 transition-all">
                        <div className="flex justify-between items-center mb-1">
                          <p className="text-xs font-black text-white">{tool.name}</p>
                          <span className={cn(
                            "text-[8px] px-2 py-0.5 rounded font-black uppercase",
                            tool.impact === "Extreme" ? "bg-red-500/20 text-red-400" : 
                            tool.impact === "Critical" ? "bg-amber-500/20 text-amber-400" : "bg-emerald-500/20 text-emerald-400"
                          )}>{tool.impact}</span>
                        </div>
                        <p className="text-[10px] text-slate-500">{tool.desc}</p>
                      </div>
                    ))}
                  </div>
                </BentoCard>

                {/* 2. ATC/Checkout Recovery */}
                <BentoCard title="خطة استعادة الـ 176 عميل ضائع" icon={Activity} className="lg:col-span-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-4">
                      <h4 className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">Retargeting Angles (Meta)</h4>
                      {dashboardData.strategy.retargetingAngles.map((angle, i) => (
                        <div key={i} className="p-4 bg-indigo-500/5 border border-indigo-500/10 rounded-2xl">
                          <p className="text-xs font-black text-white mb-1">{angle.title}</p>
                          <p className="text-[10px] text-slate-400 leading-relaxed">{angle.desc}</p>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-4">
                      <h4 className="text-[10px] font-black text-emerald-400 uppercase tracking-widest">WhatsApp/Email Recovery</h4>
                      <div className="p-4 bg-emerald-500/5 border border-emerald-500/10 rounded-2xl space-y-3">
                        <p className="text-[10px] text-slate-300 font-bold italic">"يا [اسم العميل]، لسه لوحتك مستنية تنور أوضتك! استخدم كود OFF10 عشان تكمل طلبك دلوقتي."</p>
                        <div className="flex items-center gap-2 pt-2 border-t border-white/5">
                          <div className="w-2 h-2 rounded-full bg-emerald-500" />
                          <p className="text-[9px] text-slate-500">معدل فتح الواتساب في مصر يتخطى 90%.</p>
                        </div>
                      </div>
                      <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                        <p className="text-xs font-black text-white mb-1">تحليل الـ Drop-off</p>
                        <p className="text-[10px] text-slate-400">الـ 176 شخص دول وصلوا لمرحلة الدفع. غالباً المشكلة في (سعر الشحن) أو (عدم وجود فودافون كاش/انستا باي) بشكل واضح.</p>
                      </div>
                    </div>
                  </div>
                </BentoCard>

                {/* 3. Creative UGC Angles (Beyond Gifts) */}
                <BentoCard title="أفكار إبداعية (Creative Angles) للـ UGC" icon={MousePointer2} className="lg:col-span-3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Eternal Love Light */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-indigo-500" />
                        <h5 className="text-sm font-black text-white">Eternal Love Light (زوايا جديدة)</h5>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {dashboardData.strategy.eternalLoveAngles.map((angle, i) => (
                          <div key={i} className="p-3 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                            <p className="text-xs font-black text-indigo-400 mb-1">{angle.title}</p>
                            <p className="text-[10px] text-slate-400 leading-tight">{angle.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* ONE & ONE Keychain */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-cyan-500" />
                        <h5 className="text-sm font-black text-white">ONE & ONE Keychain (زوايا جديدة)</h5>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {dashboardData.strategy.keychainAngles.map((angle, i) => (
                          <div key={i} className="p-3 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                            <p className="text-xs font-black text-cyan-400 mb-1">{angle.title}</p>
                            <p className="text-[10px] text-slate-400 leading-tight">{angle.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </BentoCard>

                {/* 4. Retargeting Specific Angles */}
                <BentoCard title="زوايا استهداف الـ ATC & Checkout" icon={TrendingUp} className="lg:col-span-3 bg-indigo-600/5 border-indigo-500/20">
                  <div className="flex flex-col md:flex-row gap-6 items-center">
                    <div className="flex-1 space-y-4">
                      <h4 className="text-lg font-black text-white">إزاي ترجع اللي ساب الكارت؟</h4>
                      <p className="text-xs text-slate-400 leading-relaxed">{dashboardData.strategy.atcRecoveryDescription}</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-indigo-500/20 rounded-full text-[10px] font-black text-indigo-400 border border-indigo-500/20">FOMO Angle</span>
                        <span className="px-3 py-1 bg-cyan-500/20 rounded-full text-[10px] font-black text-cyan-400 border border-cyan-500/20">Trust Angle</span>
                        <span className="px-3 py-1 bg-emerald-500/20 rounded-full text-[10px] font-black text-emerald-400 border border-emerald-500/20">Value Angle</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 flex-[2]">
                      {dashboardData.strategy.atcRecoveryAngles.map((angle, i) => (
                        <div key={i} className="p-4 bg-black/40 rounded-2xl border border-white/5">
                          <p className="text-xs font-black text-white mb-2">{angle.title}</p>
                          <p className="text-[10px] text-slate-500">{angle.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </BentoCard>
              </div>
            </motion.div>
          )}
          {activeTab === "ugc" && (
            <motion.div 
              key="ugc"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="space-y-8"
            >
              {/* UGC Header */}
              <BentoCard className="bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-cyan-600/20 border-indigo-500/30">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-6">
                    <div className="p-4 bg-indigo-500/20 rounded-3xl shadow-[0_0_20px_rgba(99,102,241,0.3)]">
                      <MousePointer2 className="w-10 h-10 text-indigo-400" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-black tracking-tighter text-white">سكريبتات UGC — Laser Afandi</h3>
                      <p className="text-xs text-indigo-400 uppercase font-black tracking-[0.3em] mt-1">Content Strategy & Automation Hub</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="px-4 py-2 bg-white/5 rounded-xl border border-white/10 text-[10px] font-black uppercase tracking-widest text-slate-400">
                      7 Scripts Ready
                    </div>
                    <div className="px-4 py-2 bg-emerald-500/10 rounded-xl border border-emerald-500/20 text-[10px] font-black uppercase tracking-widest text-emerald-400">
                      High Conversion Focus
                    </div>
                  </div>
                </div>
              </BentoCard>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Eternal Love Light Section */}
                <div className="lg:col-span-2 space-y-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Zap className="w-5 h-5 text-indigo-400" />
                    <h4 className="text-lg font-black tracking-tight text-white">ETERNAL LOVE LIGHT (لوحة أكريليك)</h4>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {dashboardData.ugcScripts.eternalLove.map((s, i) => (
                      <BentoCard key={i} className="bg-white/[0.02] border-white/5 hover:border-indigo-500/20">
                        <div className="flex justify-between items-start mb-4">
                          <h5 className="text-xs font-black text-indigo-400">{s.title}</h5>
                          <span className="text-[8px] px-2 py-0.5 bg-indigo-500/10 rounded text-indigo-300 uppercase font-black tracking-widest">{s.hook}</span>
                        </div>
                        <div className="space-y-4">
                          {s.scene && (
                            <div className="p-3 bg-black/40 rounded-xl border border-white/5">
                              <p className="text-[9px] text-slate-500 uppercase font-black tracking-widest mb-1">السيناريو (Scene)</p>
                              <p className="text-[10px] text-slate-300 leading-relaxed">{s.scene}</p>
                            </div>
                          )}
                          <div className="p-3 bg-indigo-500/5 rounded-xl border border-indigo-500/10">
                            <p className="text-[9px] text-indigo-400 uppercase font-black tracking-widest mb-1">الكلام (Dialogue)</p>
                            <p className="text-xs font-bold text-white italic leading-relaxed">"{s.dialogue}"</p>
                          </div>
                          <div className="flex items-center justify-between pt-2">
                            <div className="flex items-center gap-2">
                              <Info className="w-3 h-3 text-slate-500" />
                              <p className="text-[9px] text-slate-500 italic">{s.notes}</p>
                            </div>
                          </div>
                          <div className="pt-2 border-t border-white/5">
                            <p className="text-[9px] font-black text-emerald-400 uppercase tracking-widest mb-2">Text on Screen:</p>
                            <div className="flex flex-wrap gap-2">
                              {s.screenText.map((text, idx) => (
                                <span key={idx} className="px-2 py-1 bg-emerald-500/10 rounded text-[9px] font-bold text-emerald-400 border border-emerald-500/20">
                                  {text}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </BentoCard>
                    ))}
                  </div>

                  {/* Keychain Section */}
                  <div className="flex items-center gap-3 mt-10 mb-2">
                    <Zap className="w-5 h-5 text-cyan-400" />
                    <h4 className="text-lg font-black tracking-tight text-white">ONE & ONE KEYCHAIN (كيتشين مزدوج)</h4>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {dashboardData.ugcScripts.keychain.map((s, i) => (
                      <BentoCard key={i} className="bg-white/[0.02] border-white/5 hover:border-cyan-500/20">
                        <h5 className="text-xs font-black text-cyan-400 mb-2">{s.title}</h5>
                        <p className="text-[8px] text-slate-500 uppercase font-black tracking-widest mb-4">{s.hook}</p>
                        <p className="text-xs font-bold text-white italic mb-4 leading-relaxed">"{s.dialogue}"</p>
                        <div className="space-y-2 mb-4">
                          {s.screenText.map((text, idx) => (
                            <div key={idx} className="px-2 py-1 bg-cyan-500/10 rounded text-[8px] font-bold text-cyan-400 border border-cyan-500/20 inline-block mr-2">
                              {text}
                            </div>
                          ))}
                        </div>
                        <p className="text-[9px] text-slate-500 border-t border-white/5 pt-3 italic">{s.notes}</p>
                      </BentoCard>
                    ))}
                  </div>
                </div>

                {/* Sidebar: Instructions & Klaviyo */}
                <div className="space-y-6">
                  {/* General Instructions */}
                  <BentoCard title="تعليمات الـ Creators" icon={ListChecks} className="bg-slate-900/50">
                    <div className="space-y-6">
                      <div className="grid grid-cols-2 gap-2">
                        <div className="p-3 bg-white/5 rounded-xl border border-white/5 text-center">
                          <p className="text-[8px] text-slate-500 font-black uppercase mb-1">المدة</p>
                          <p className="text-xs font-black text-white">{dashboardData.ugcInstructions.duration}</p>
                        </div>
                        <div className="p-3 bg-white/5 rounded-xl border border-white/5 text-center">
                          <p className="text-[8px] text-slate-500 font-black uppercase mb-1">الأبعاد</p>
                          <p className="text-xs font-black text-white">{dashboardData.ugcInstructions.dimensions}</p>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="p-4 bg-emerald-500/5 border border-emerald-500/10 rounded-2xl">
                          <h5 className="text-[10px] font-black text-emerald-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                            <CheckCircle2 className="w-3 h-3" /> افعل (Do)
                          </h5>
                          <ul className="text-[10px] text-slate-400 space-y-2">
                            {dashboardData.ugcInstructions.dos.map((item, i) => (
                              <li key={i} className="flex items-start gap-2"><span>•</span> {item}</li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="p-4 bg-red-500/5 border border-red-500/10 rounded-2xl">
                          <h5 className="text-[10px] font-black text-red-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                            <X className="w-3 h-3" /> لا تفعل (Don't)
                          </h5>
                          <ul className="text-[10px] text-slate-400 space-y-2">
                            {dashboardData.ugcInstructions.donts.map((item, i) => (
                              <li key={i} className="flex items-start gap-2"><span>•</span> {item}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </BentoCard>

                  {/* Klaviyo Strategy */}
                  <BentoCard title="Klaviyo Automation" icon={Zap} className="bg-purple-600/5 border-purple-500/20">
                    <div className="space-y-6">
                      <div className="space-y-3">
                        <p className="text-[10px] font-black text-purple-400 uppercase tracking-widest">Abandoned Checkout Flow</p>
                        {dashboardData.klaviyoFlow.map((step, i) => (
                          <div key={i} className="relative pl-6 border-l border-purple-500/20 pb-4 last:pb-0">
                            <div className="absolute left-[-4.5px] top-0 w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
                            <p className="text-[8px] text-slate-500 font-black uppercase">{step.time}</p>
                            <p className="text-xs font-black text-white">{step.title}</p>
                            <p className="text-[10px] text-slate-500">{step.desc}</p>
                          </div>
                        ))}
                      </div>

                      <div className="p-4 bg-black/40 rounded-2xl border border-white/5">
                        <h5 className="text-[10px] font-black text-emerald-400 uppercase tracking-widest mb-3">الأرقام المتوقعة (شهرياً)</h5>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-[10px] text-slate-500">Recovery Rate</span>
                            <span className="text-xs font-black text-white">{dashboardData.klaviyoStats.recoveryRate}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-[10px] text-slate-500">Extra Orders</span>
                            <span className="text-xs font-black text-white">{dashboardData.klaviyoStats.extraOrders}</span>
                          </div>
                          <div className="pt-2 border-t border-white/5 flex justify-between items-center">
                            <span className="text-[10px] text-emerald-400 font-black">إيراد إضافي</span>
                            <span className="text-sm font-black text-emerald-400">{dashboardData.klaviyoStats.extraRevenue}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </BentoCard>

                  {/* Priority Roadmap */}
                  <BentoCard title="خطة التنفيذ بالأولوية" icon={Clock}>
                    <div className="space-y-4">
                      {dashboardData.roadmap.map((item, i) => (
                        <div key={i} className={cn(
                          "p-3 rounded-xl border transition-all",
                          item.active ? "bg-indigo-500/10 border-indigo-500/20" : "bg-white/5 border-white/5 opacity-50"
                        )}>
                          <p className="text-[8px] font-black uppercase tracking-widest text-indigo-400 mb-1">{item.day}</p>
                          <p className="text-[10px] font-bold text-white">{item.task}</p>
                        </div>
                      ))}
                    </div>
                  </BentoCard>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "scale" && (
            <motion.div 
              key="scale"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[180px]"
            >
              <BentoCard className="md:col-span-3 md:row-span-2 bg-gradient-to-br from-indigo-600/20 to-cyan-600/20 border-indigo-500/20">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-indigo-500/20 rounded-2xl">
                    <Target className="w-8 h-8 text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black tracking-tight">Hormozi Value Equation Strategy</h3>
                    <p className="text-[10px] text-indigo-400 uppercase font-black tracking-widest mt-1">{dashboardData.ui.scaleSubTitle}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 bg-black/40 rounded-3xl border border-white/5 space-y-4">
                    <h4 className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.2em]">{dashboardData.scale.hormoziEquation.numerator.title}</h4>
                    <ul className="space-y-3 text-xs font-bold">
                      {dashboardData.scale.hormoziEquation.numerator.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-6 bg-black/40 rounded-3xl border border-white/5 space-y-4">
                    <h4 className="text-[10px] font-black text-cyan-400 uppercase tracking-[0.2em]">{dashboardData.scale.hormoziEquation.denominator.title}</h4>
                    <ul className="space-y-3 text-xs font-bold">
                      {dashboardData.scale.hormoziEquation.denominator.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </BentoCard>

              {dashboardData.scale.phases.map((phase, i) => (
                <BentoCard key={i} className="md:col-span-1 md:row-span-1">
                  <h4 className="text-xs font-black uppercase tracking-widest mb-4" style={{ color: `var(--${phase.color}-400)` }}>{phase.title}</h4>
                  <div className="space-y-2">
                    {phase.tasks.map((task, j) => (
                      <div key={j} className="p-3 bg-white/5 rounded-xl border border-white/5 text-[11px] font-bold">
                        {task}
                      </div>
                    ))}
                  </div>
                </BentoCard>
              ))}

              <BentoCard className="md:col-span-3 md:row-span-2">
                <h3 className="text-lg font-black mb-8 flex items-center gap-2">
                  <ListChecks className="w-6 h-6 text-indigo-400" /> {dashboardData.ui.checklistExecutionTitle}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {dashboardData.checklist.map((item, idx) => (
                    <motion.button 
                      key={idx}
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => toggleCheck(idx)}
                      className={cn(
                        "flex items-center gap-4 p-5 rounded-2xl border transition-all duration-300 text-right",
                        checkedItems.includes(idx) 
                          ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400" 
                          : "bg-white/5 border-white/5 hover:border-indigo-500/30"
                      )}
                    >
                      <div className={cn(
                        "w-6 h-6 rounded-full border flex items-center justify-center transition-colors shrink-0",
                        checkedItems.includes(idx) 
                          ? "bg-emerald-500 border-emerald-500 text-black" 
                          : "border-white/20 text-white/40"
                      )}>
                        {checkedItems.includes(idx) ? <CheckCircle2 className="w-4 h-4" /> : <span className="text-[10px] font-bold">{idx+1}</span>}
                      </div>
                      <span className={cn("text-sm font-bold", checkedItems.includes(idx) ? "line-through opacity-40" : "")}>{item.label}</span>
                    </motion.button>
                  ))}
                </div>
              </BentoCard>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer */}
        <footer className="mt-20 pt-12 border-t border-white/5 text-center space-y-6">
          <div className="inline-block p-8 bg-indigo-600/5 border border-indigo-500/10 rounded-[2rem] max-w-3xl">
            <p className="text-xl font-serif italic text-slate-300 leading-relaxed">
              {dashboardData.footerQuote}
            </p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-[10px] text-slate-600 uppercase tracking-[0.4em] font-black">
              LASER AFANDI INTELLIGENCE • COMMAND CENTER v2.0
            </p>
            <div className="flex gap-4">
              <div className="w-1 h-1 rounded-full bg-indigo-500" />
              <div className="w-1 h-1 rounded-full bg-cyan-500" />
              <div className="w-1 h-1 rounded-full bg-emerald-500" />
            </div>
          </div>
        </footer>
      </div>
    </main>
  </div>
);
}
