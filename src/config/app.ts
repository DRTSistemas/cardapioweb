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
          href: "/app/orders",
        },
        {
          title: "Impressora",
          href: "/app/printer",
        },
        {
          title: "Integrações",
          href: "/app/integrations",
        },
        {
          title: "Cardápio Digital",
          href: "/app/menu",
        },
        {
          title: "Redes Sociais",
          href: "/app/social",
        },
        {
          title: "Pedidos balcão (PDV)",
          href: "/app/counter-orders",
        },
        {
          title: "Robô",
          href: "/app/robot",
        },
        {
          title: "Estabelecimento",
          href: "/app/establishment",
        },
        {
          title: "Aplicativo do Garçon",
          href: "/app/garcon-app",
        },
      ],
    },
  ] satisfies Nav,
};
