import type { Icons } from "@/components/icons";
export type Nav = (NavWithItems | NavWithoutItems)[];

type NavWithItems = {
  title: string;
  icon: keyof typeof Icons;
  items: {
    title: string;
    href: string;
    segment: string | null;
  }[];
};

type NavWithoutItems = {
  title: string;
  icon: keyof typeof Icons;
  href: string;
  segment: string | null;
};

export const appConfig = {
  mainNav: [
    {
      title: "Meus pedidos",
      href: "/app/orders",
      icon: "dashboard",
      segment: null,
    },
    {
      title: "Configurações",
      icon: "settings",
      items: [
        {
          title: "Meus pedidos",
          href: "/app/settings/orders",
          segment: "settings",
        },
        {
          title: "Impressora",
          href: "/app/settings/printer",
          segment: "printer",
        },
        {
          title: "Integrações",
          href: "/app/settings/integrations",
          segment: "integrations",
        },
        {
          title: "Cardápio Digital",
          href: "/app/settings/menu",
          segment: "menu",
        },
        {
          title: "Redes Sociais",
          href: "/app/settings/social",
          segment: "social",
        },
        {
          title: "Pedidos balcão (PDV)",
          href: "/app/settings/counter-orders",
          segment: "counter-orders",
        },
        {
          title: "Robô",
          href: "/app/settings/robot",
          segment: "robot",
        },
        {
          title: "Estabelecimento",
          href: "/app/settings/establishment",
          segment: "establishment",
        },
        {
          title: "Aplicativo do Garçon",
          href: "/app/settings/garcon-app",
          segment: "garcon-app",
        },
      ],
    },
  ] satisfies Nav,
};
