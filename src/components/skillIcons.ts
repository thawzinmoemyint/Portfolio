import type { ComponentType, CSSProperties } from "react";
import { BrainCircuit, ChartColumn, Database, ScanEye, TreeDeciduous, Zap } from "lucide-react";
import { IoLogoTableau } from "react-icons/io5";
import {
  SiCplusplus,
  SiDart,
  SiDocker,
  SiExpress,
  SiFastapi,
  SiFlutter,
  SiGithub,
  SiGo,
  SiGooglecloud,
  SiHono,
  SiHuggingface,
  SiJavascript,
  SiKaggle,
  SiLinux,
  SiNestjs,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiNumpy,
  SiOpencv,
  SiOpenjdk,
  SiOptuna,
  SiPandas,
  SiPostgresql,
  SiPython,
  SiPytorch,
  SiRailway,
  SiReact,
  SiScikitlearn,
  SiStrapi,
  SiSupabase,
  SiTailwindcss,
  SiTensorflow,
  SiTurborepo,
  SiTypescript,
  SiUltralytics,
  SiVercel,
  SiVite,
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
  Go: { Icon: SiGo, light: "#007D9C", dark: "#00ADD8" },
  "React.js": { Icon: SiReact, light: "#087EA4", dark: "#61DAFB" },
  "Next.js": { Icon: SiNextdotjs },
  NestJS: { Icon: SiNestjs, light: "#E0234E" },
  "Express.js": { Icon: SiExpress },
  Hono: { Icon: SiHono, light: "#E36002" },
  TailwindCSS: { Icon: SiTailwindcss, light: "#0891B2", dark: "#06B6D4" },
  Flutter: { Icon: SiFlutter, light: "#02569B", dark: "#54C5F8" },
  Strapi: { Icon: SiStrapi, light: "#4945FF", dark: "#8C8AFF" },
  FastAPI: { Icon: SiFastapi, light: "#009688", dark: "#05C3B0" },
  "Node.js": { Icon: SiNodedotjs, light: "#417E38", dark: "#5FA04E" },
  Vite: { Icon: SiVite, light: "#646CFF", dark: "#8A90FF" },
  Turborepo: { Icon: SiTurborepo, light: "#EF4444" },
  GoFiber: { Icon: Zap, light: "#007D9C", dark: "#00ACD7" },
  PyTorch: { Icon: SiPytorch, light: "#EE4C2C" },
  TensorFlow: { Icon: SiTensorflow, light: "#FF6F00" },
  XGBoost: { Icon: TreeDeciduous },
  LightGBM: { Icon: TreeDeciduous },
  Optuna: { Icon: SiOptuna, light: "#2C5BB4", dark: "#6B8FE0" },
  "Computer Vision": { Icon: ScanEye },
  Transformers: { Icon: SiHuggingface, light: "#E3A700", dark: "#FFD21E" },
  YOLOv11: { Icon: SiUltralytics, light: "#042AFF", dark: "#6B83FF" },
  OpenCV: { Icon: SiOpencv, light: "#5C3EE8", dark: "#8B78F0" },
  "Agentic RAG": { Icon: BrainCircuit },
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
  "Google Cloud Run": { Icon: SiGooglecloud, light: "#4285F4" },
};
