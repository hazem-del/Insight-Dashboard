import { LucideIcon } from 'lucide-react';

export interface ChartDataPoint {
  name: string;
  revenue: number;
  spend: number;
}

export interface MiniChartPoint {
  v: number;
}

export interface GeoDataPoint {
  name: string;
  cvr: number;
  color: string;
}

export interface ProductStat {
  label: string;
  value: string;
  color: string;
}

export interface ProductDataPoint {
  name: string;
  sales: number;
  stock: number;
  status: 'High' | 'Low' | 'Out';
  stats: ProductStat[];
  performanceNote: string;
  revenueShare: string;
  description: string;
}

export interface TrafficSource {
  name: string;
  value: number;
  color: string;
  icon: LucideIcon;
}

export interface TabConfig {
  id: string;
  label: string;
  icon: LucideIcon;
}

export interface FunnelStep {
  label: string;
  value: string;
  percentage: number;
  color: string;
  icon: LucideIcon;
  subLabel: string;
}

export interface UgcScript {
  title: string;
  hook: string;
  scene?: string;
  dialogue: string;
  notes: string;
  screenText: string[];
}

export interface KlaviyoStep {
  time: string;
  title: string;
  desc: string;
}

export interface StrategyTool {
  name: string;
  desc: string;
  impact: 'Extreme' | 'Critical' | 'High' | 'Medium';
}

export interface StrategyAngle {
  title: string;
  desc: string;
}

export interface RoadmapItem {
  day: string;
  task: string;
  active: boolean;
}

export interface GrowthOpportunity {
  name: string;
  growth: string;
  desc: string;
}

export interface FunnelStat {
  label: string;
  value: string;
  subLabel: string;
  percentage?: number;
  color: string;
  icon?: LucideIcon;
}

export interface SystemHealthItem {
  name: string;
  value: string;
  percentage: number;
  color: string;
}

export interface RetentionData {
  currentLtv: { value: string; label: string; percentage: number };
  targetLtv: { value: string; label: string; percentage: number };
  quote: string;
  retentionRate: string;
}

export interface ScalePhase {
  title: string;
  color: string;
  tasks: string[];
}

export interface ScaleData {
  hormoziEquation: {
    numerator: { title: string; items: string[] };
    denominator: { title: string; items: string[] };
  };
  phases: ScalePhase[];
}

export interface UgcInstructions {
  duration: string;
  dimensions: string;
  dos: string[];
  donts: string[];
}

export interface KlaviyoStats {
  recoveryRate: string;
  extraOrders: string;
  extraRevenue: string;
}

export interface ActivityItem {
  id: number;
  type: string;
  user: string;
  product: string;
  time: string;
  amount: string;
  icon: any;
  color: string;
}

export interface DashboardData {
  header: {
    searchPlaceholder: string;
    liveOrderPrefix: string;
    liveOrderValue: string;
    verifiedDataLabel: string;
    version: string;
  };
  statsLabels: {
    totalSales: string;
    roas: string;
    netProfit: string;
    cpa: string;
    orders: string;
  };
  ui: {
    aiRecommendationTitle: string;
    executeNowButton: string;
    bestSellerBadge: string;
    recommendationPrefix: string;
    strategicWarningTitle: string;
    growthOpportunitiesTitle: string;
    organicGrowthDetected: string;
    mobileTrafficNote: string;
    checkoutCompletionGoal: string;
    revenueLeakTitle: string;
    retentionTitle: string;
    retentionSubTitle: string;
    ltvCurrentLabel: string;
    ltvTargetLabel: string;
    geoDistributionTitle: string;
    geoDistributionSubTitle: string;
    trafficSourcesTitle: string;
    trafficSourcesSubTitle: string;
    roadmapTitle: string;
    roadmapSubTitle: string;
    checklistTitle: string;
    checklistSubTitle: string;
    strategyTitle: string;
    strategySubTitle: string;
    atcRecoveryTitle: string;
    scaleSubTitle: string;
    checklistExecutionTitle: string;
    ugcTitle: string;
    ugcSubTitle: string;
    klaviyoTitle: string;
    klaviyoSubTitle: string;
    expectedNumbersTitle: string;
    extraRevenueLabel: string;
  };
  charts: {
    revenueVsSpend: {
      title: string;
      subTitle: string;
      revenueLabel: string;
      spendLabel: string;
    };
  };
  overviewChart: ChartDataPoint[];
  aiRecommendation: string;
  systemHealth: SystemHealthItem[];
  activities: ActivityItem[];
  funnel: FunnelStep[];
  funnelAnalysis: {
    title: string;
    description: string;
  };
  funnelStats: {
    mobileTraffic: string;
    checkoutCompletion: number;
    revenueLeak: string;
    revenueLeakNote: string;
  };
  growthOpportunities: GrowthOpportunity[];
  geoDistribution: GeoDataPoint[];
  topProducts: ProductDataPoint[];
  trafficSources: TrafficSource[];
  ugcScripts: {
    eternalLove: UgcScript[];
    keychain: UgcScript[];
  };
  ugcInstructions: UgcInstructions;
  klaviyoFlow: KlaviyoStep[];
  klaviyoStats: KlaviyoStats;
  strategy: {
    tools: StrategyTool[];
    eternalLoveAngles: StrategyAngle[];
    keychainAngles: StrategyAngle[];
    retargetingAngles: StrategyAngle[];
    atcRecoveryAngles: StrategyAngle[];
    atcRecoveryDescription: string;
  };
  retention: RetentionData;
  scale: ScaleData;
  roadmap: RoadmapItem[];
  checklist: string[];
  stats: {
    totalSales: string;
    totalSalesTrend: string;
    roas: string;
    roasTrend: string;
    netProfit: string;
    netProfitTrend: string;
    cpa: string;
    orders: string;
  };
  correctionBanner: {
    title: string;
    description: string;
  };
  footerQuote: string;
}
