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
  Mail,
  MessageCircle,
  AtSign,
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
  Mail,
  MessageCircle,
  Instagram: AtSign,
};

export function getIcon(name: string): ComponentType<LucideProps> {
  return iconMap[name] ?? Dumbbell;
}
