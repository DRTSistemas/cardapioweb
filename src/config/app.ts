import type { Icons } from "@/components/icons";
export type Nav = (NavWithItems | NavWithoutItems | NavDivider)[];

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

type NavDivider = {
  title: string;
};

export const appConfig = {
  mainNav: [
    {
      title: "Seu dia a dia",
    },
    {
      title: "Meus pedidos",
      href: "/app",
      icon: "dashboard",
      segment: "undefined",
    },
    {
      title: "Pedidos balcão (PDV)",
      href: "/app/counter-orders",
      icon: "filepenline",
      segment: "counter-orders",
    },
    {
      title: "Pedidos mesa",
      href: "/app/table-orders",
      icon: "cuboid",
      segment: "table-order",
    },
    {
      title: "Pedidos agendados",
      href: "/app/scheduled-orders",
      icon: "scheduled",
      segment: "scheduled-orders",
    },
    {
      title: "Gestor de cardápio",
      icon: "server",
      items: [
        {
          title: "Gestor",
          href: "/app/manager/(manager)",
          segment: "(manager)",
        },
        {
          title: "Images do cardárpio",
          href: "/app/manager/images-menu",
          segment: "images-menu",
        },
        {
          title: "Edição em massa",
          href: "/app/manager/edit-all",
          segment: "edit-all",
        },
        {
          title: "Edição em massa",
          href: "/app/manager/power-menu",
          segment: "power-menu",
        },
        {
          title: "Importação inteligente do cardápio",
          href: "/app/manager/import-inte-menu",
          segment: "import-inte-menu",
        },
        {
          title: "Importação de cardápio iFood",
          href: "/app/manager/import-inte-menu",
          segment: "import-ifood-menu",
        },
      ],
    },
    {
      title: "Meu Desempenho",
      href: "/app/my-performance",
      icon: "linechart",
      segment: "my-performance",
    },
    {
      title: "Cozinha (KDS)",
      href: "/app/chicken",
      icon: "chefhat",
      segment: "chicken",
    },
    {
      title: "Robô",
      icon: "bot",
      items: [
        {
          title: "Chamado atendentes",
          href: "/app/robot/(call)",
          segment: "(call)",
        },
        {
          title: "Feedback de clientes",
          href: "/app/robot/customers-feedback",
          segment: "customers-feedback",
        },
        {
          title: "Personalizar mensagens",
          href: "/app/robot/edit-messages",
          segment: "edit-messages",
        },
        {
          title: "Configurações",
          href: "/app/robot/settings",
          segment: "settings",
        },
      ],
    },
    {
      title: "Venda mais",
    },
    {
      title: "Cupom",
      href: "/app/coupon",
      icon: "coupon",
      segment: "coupon",
    },
    {
      title: "Configurações",
    },
    {
      title: "Configurações",
      icon: "settings",
      items: [
        {
          title: "Meus pedidos",
          href: "/app/settings/orders",
          segment: "orders",
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
          href: "/app/settings/menu-web",
          segment: "menu-web",
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
