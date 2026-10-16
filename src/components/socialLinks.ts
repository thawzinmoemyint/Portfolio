import { Mail } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { SiKaggle } from "react-icons/si";
import { socials } from "@/lib/data";

export const socialLinks = [
  { label: "GitHub", href: socials.github, Icon: FiGithub },
  { label: "LinkedIn", href: socials.linkedin, Icon: FiLinkedin },
  { label: "Kaggle", href: socials.kaggle, Icon: SiKaggle },
  { label: "Email", href: socials.email, Icon: Mail },
];
