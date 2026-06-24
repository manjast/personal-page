export type ColorToken = 'ink' | 'ink-soft' | 'ink-faint' | 'accent' | 'paper' | 'canvas';

/**
 * Box = one cell in a flow (FiveStep, TwoRowFlow).
 * Default rendering: 2 lines, line1 at y=30, line2 at y=42, font 10px.
 * Overrides available for matching hand-tuned positions.
 */
export interface Box {
  line1: string;
  /** Pass null/undefined for single-line rendering at y=36 (centered). */
  line2?: string | null;
  emphasis?: boolean;
  /** Override line1 y position. Default: 30. */
  line1Y?: number;
  /** Override line2 y position. Default: 42. */
  line2Y?: number;
  /** Override line1 font size. Default: 10. */
  line1Size?: number;
  /** Override line2 font size. Default: 10. */
  line2Size?: number;
}

/**
 * BarData = one bar in a chart (BarChart, Distribution).
 * Default rendering: auto-calculate from `value` (normalized to max value).
 * Overrides available for matching hand-tuned positions.
 */
export interface BarData {
  label: string;
  value: number;
  color: ColorToken;
  xLabel: string;
  emphasis?: boolean;
  /** Override x position. Default: auto-calc from index. */
  x?: number;
  /** Override y position. Default: auto-calc. */
  y?: number;
  /** Override width (horizontal bars). Default: auto-calc. */
  w?: number;
  /** Override height (vertical bars). Default: auto-calc. */
  h?: number;
  /** Override opacity. Default: 0.7 for ink-faint, undefined otherwise. */
  opacity?: number;
  /** Override value-label y position. Default: 6px above bar top. */
  labelY?: number;
}

export interface Annotation {
  label: string;
  position: 'midpoint' | number;
  /** Override arrow start y. Default: bar1.y + 2. */
  arrowYStart?: number;
  /** Override arrow end y. Default: bar2.y + 2. */
  arrowYEnd?: number;
  /** Override annotation label y. Default: arrowYStart - 4. */
  labelY?: number;
}

export interface FiveStepProps {
  steps: Box[];
  caption: string;
  ariaLabel?: string;
}

export interface TwoRowFlowProps {
  topLabel: string;
  topBoxes: Box[];
  cycleText?: string;
  bottomLabel: string;
  bottomBoxes: Box[];
  caption: string;
  ariaLabel?: string;
}

export interface BarChartProps {
  title: string;
  yAxisLabel: string;
  bars: BarData[];
  annotation?: Annotation;
  yMax?: number;
  variant?: 'cost' | 'format';
  caption: string;
  ariaLabel?: string;
}

export interface DistributionProps {
  title: string;
  yAxisLabel: string;
  median: BarData;
  outlier: BarData;
  subAxis?: string;
  caption: string;
  ariaLabel?: string;
}
