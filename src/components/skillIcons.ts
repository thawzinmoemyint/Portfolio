import type { ComponentType, CSSProperties } from "react";
import { ChartColumn, Database, ScanEye, TreeDeciduous } from "lucide-react";
import { IoLogoTableau } from "react-icons/io5";
import {
  SiCplusplus,
  SiDart,
  SiDocker,
  SiExpress,
  SiFlutter,
  SiGithub,
  SiHono,
  SiHuggingface,
  SiJavascript,
  SiKaggle,
  SiLinux,
  SiNestjs,
  SiNextdotjs,
  SiNginx,
  SiNumpy,
  SiOpenjdk,
  SiOptuna,
  SiPandas,
  SiPostgresql,
  SiPython,
  SiPytorch,
  SiRailway,
  SiReact,
  SiScikitlearn,
  SiSupabase,
  SiTailwindcss,
  SiTensorflow,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

type Icon = ComponentType<{
  className?: string;
  style?: CSSProperties;
  "aria-hidden"?: boolean;
}>;

export type SkillIcon = {
  Icon: Icon;
  /** brand color on the light theme (omit for neutral) */
  light?: string;
  /** brand color on the dark theme; defaults to `light` */
  dark?: string;
};

/**
 * Logo + brand color per skill name in `skillGroups` (lib/data.ts). Brand
 * logos come from Simple Icons; tools without one get a generic Lucide icon.
 * Some brands get a lighter/darker shade per theme so they stay visible.
 * Skills missing here simply render without an icon.
 */
export const skillIcons: Record<string, SkillIcon> = {
  TypeScript: { Icon: SiTypescript, light: "#3178C6" },
  JavaScript: { Icon: SiJavascript, light: "#C7AC00", dark: "#F7DF1E" },
  Python: { Icon: SiPython, light: "#3776AB", dark: "#4B8BBE" },
  Java: { Icon: SiOpenjdk, light: "#ED8B00" },
  "C++": { Icon: SiCplusplus, light: "#00599C", dark: "#659AD2" },
  SQL: { Icon: Database },
  Dart: { Icon: SiDart, light: "#0175C2", dark: "#40C4FF" },
  "React.js": { Icon: SiReact, light: "#087EA4", dark: "#61DAFB" },
  "Next.js": { Icon: SiNextdotjs },
  NestJS: { Icon: SiNestjs, light: "#E0234E" },
  "Express.js": { Icon: SiExpress },
  Hono: { Icon: SiHono, light: "#E36002" },
  TailwindCSS: { Icon: SiTailwindcss, light: "#0891B2", dark: "#06B6D4" },
  Flutter: { Icon: SiFlutter, light: "#02569B", dark: "#54C5F8" },
  PyTorch: { Icon: SiPytorch, light: "#EE4C2C" },
  TensorFlow: { Icon: SiTensorflow, light: "#FF6F00" },
  XGBoost: { Icon: TreeDeciduous },
  LightGBM: { Icon: TreeDeciduous },
  Optuna: { Icon: SiOptuna, light: "#2C5BB4", dark: "#6B8FE0" },
  "Computer Vision": { Icon: ScanEye },
  Transformers: { Icon: SiHuggingface, light: "#E3A700", dark: "#FFD21E" },
  Pandas: { Icon: SiPandas, light: "#150458", dark: "#E70488" },
  NumPy: { Icon: SiNumpy, light: "#013243", dark: "#4DABCF" },
  "Scikit-learn": { Icon: SiScikitlearn, light: "#F7931E" },
  Tableau: { Icon: IoLogoTableau, light: "#E97627" },
  PowerBI: { Icon: ChartColumn, light: "#C9A400", dark: "#F2C811" },
  Kaggle: { Icon: SiKaggle, light: "#20BEFF" },
  "Git/GitHub": { Icon: SiGithub },
  Docker: { Icon: SiDocker, light: "#2496ED" },
  Nginx: { Icon: SiNginx, light: "#009639" },
  Linux: { Icon: SiLinux, dark: "#FCC624" },
  Vercel: { Icon: SiVercel },
  Railway: { Icon: SiRailway },
  Supabase: { Icon: SiSupabase, light: "#24B47E", dark: "#3FCF8E" },
  PostgreSQL: { Icon: SiPostgresql, light: "#4169E1" },
};
