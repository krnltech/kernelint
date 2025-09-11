import { LucideIcon } from "lucide-react";

export interface Statistic {
  number: string;
  label: string;
  delay?: string;
}

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  delay?: string;
}

export interface CoreValue {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}

export interface ClientCategory {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}

export interface ContactInfo {
  icon: LucideIcon;
  title: string;
  content: string;
}

export interface TeamMember {
  name: string;
  position: string;
}

export interface TrustedOrganization {
  name: string;
}

export interface ExpertiseCategory {
  title: string;
  icon: LucideIcon;
  items: string[];
}