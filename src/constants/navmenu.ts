interface Navigation {
  name: string;
  href: string;
  current: boolean;
}

export const navigation: Navigation[] = [
  { name: "Services", href: "#", current: true },
  { name: "Pricing", href: "#", current: false },
  { name: "FAQs", href: "#", current: false },
];
