import type { Icons } from "@/components/icons";
export type Nav = (NavWithItems | NavWithoutItems)[];

type NavWithItems = {
  title: string;
  icon: keyof typeof Icons;
  items: {
    title: string;
    href: string;
  }[];
};

type NavWithoutItems = {
  title: string;
  icon: keyof typeof Icons;
  href: string;
};

export const appConfig = {
  mainNav: [
    {
      title: "Meus pedidos",
      href: "/app/orders",
      icon: "dashboard",
    },
    {
      title: "Configurações",
      icon: "settings",
      items: [
        {
          title: "Meus pedidos",
          href: "/app/settings/orders",
        },
        {
          title: "Impressora",
          href: "/app/settings/printer",
        },
        {
          title: "Integrações",
          href: "/app/settings/integrations",
        },
        {
          title: "Cardápio Digital",
          href: "/app/settings/menu",
        },
        {
          title: "Redes Sociais",
          href: "/app/settings/social",
        },
        {
          title: "Pedidos balcão (PDV)",
          href: "/app/settings/counter-orders",
        },
        {
          title: "Robô",
          href: "/app/settings/robot",
        },
        {
          title: "Estabelecimento",
          href: "/app/settings/establishment",
        },
        {
          title: "Aplicativo do Garçon",
          href: "/app/settings/garcon-app",
        },
      ],
    },
  ] satisfies Nav,
};
