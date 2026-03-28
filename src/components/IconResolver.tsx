import {
  Target,
  Users,
  Trophy,
  Shield,
  Dumbbell,
  Zap,
  Waves,
  Sparkles,
  MapPin,
  Clock,
  Phone,
  type LucideProps,
} from "lucide-react";
import { type ComponentType } from "react";

const iconMap: Record<string, ComponentType<LucideProps>> = {
  Target,
  Users,
  Trophy,
  Shield,
  Dumbbell,
  Zap,
  Waves,
  Sparkles,
  MapPin,
  Clock,
  Phone,
};

export function getIcon(name: string): ComponentType<LucideProps> {
  return iconMap[name] ?? Dumbbell;
}
