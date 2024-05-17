import type { Icons } from "@/components/icons";
export type Nav = (NavWithItems | NavWithoutItems | NavDivider)[];

type NavWithItems = {
  title: string;
  icon: keyof typeof Icons;
  items: {
    title: string;
    href: string;
    segment: string | null;
    disabled: boolean;
  }[];
};

type NavWithoutItems = {
  title: string;
  icon: keyof typeof Icons;
  href: string;
  segment: string | null;
  disabled: boolean;
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
      disabled: false,
    },
    {
      title: "Pedidos balcão (PDV)",
      href: "/app/counter-orders",
      icon: "filepenline",
      segment: "counter-orders",
      disabled: true,
    },
    {
      title: "Pedidos mesa",
      href: "/app/table-orders",
      icon: "cuboid",
      segment: "table-order",
      disabled: true,
    },
    {
      title: "Pedidos agendados",
      href: "/app/scheduled-orders",
      icon: "scheduled",
      segment: "scheduled-orders",
      disabled: true,
    },
    {
      title: "Gestor de cardápio",
      icon: "server",
      items: [
        {
          title: "Gestor",
          href: "/app/menu-manager",
          segment: "menu-manager",
          disabled: false,
        },
        {
          title: "Images do cardárpio",
          href: "/app/menu-manager/menu-images",
          segment: "menu-images",
          disabled: false,
        },
        {
          title: "Edição em massa",
          href: "/app/menu-manager/edit-all",
          segment: "edit-all",
          disabled: false,
        },
        {
          title: "Edição em massa",
          href: "/app/menu-manager/power-menu",
          segment: "power-menu",
          disabled: false,
        },
        {
          title: "Importação inteligente do cardápio",
          href: "/app/menu-manager/import-inte-menu",
          segment: "import-inte-menu",
          disabled: false,
        },
        {
          title: "Importação de cardápio iFood",
          href: "/app/menu-manager/import-inte-menu",
          segment: "import-ifood-menu",
          disabled: false,
        },
      ],
    },
    {
      title: "Meu Desempenho",
      href: "/app/my-performance",
      icon: "linechart",
      segment: "my-performance",
      disabled: true,
    },
    {
      title: "Cozinha (KDS)",
      href: "/app/chicken",
      icon: "chefhat",
      segment: "chicken",
      disabled: true,
    },
    {
      title: "Robô",
      icon: "bot",
      items: [
        {
          title: "Chamado atendentes",
          href: "/app/robot/(call)",
          segment: "(call)",
          disabled: true,
        },
        {
          title: "Feedback de clientes",
          href: "/app/robot/customers-feedback",
          segment: "customers-feedback",
          disabled: true,
        },
        {
          title: "Personalizar mensagens",
          href: "/app/robot/edit-messages",
          segment: "edit-messages",
          disabled: true,
        },
        {
          title: "Configurações",
          href: "/app/robot/settings",
          segment: "settings",
          disabled: true,
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
      disabled: true,
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
          disabled: false,
        },
        {
          title: "Impressora",
          href: "/app/settings/printer",
          segment: "printer",
          disabled: false,
        },
        {
          title: "Integrações",
          href: "/app/settings/integrations",
          segment: "integrations",
          disabled: false,
        },
        {
          title: "Cardápio Digital",
          href: "/app/settings/menu-web",
          segment: "menu-web",
          disabled: false,
        },
        {
          title: "Redes Sociais",
          href: "/app/settings/social",
          segment: "social",
          disabled: false,
        },
        {
          title: "Pedidos balcão (PDV)",
          href: "/app/settings/counter-orders",
          segment: "counter-orders",
          disabled: false,
        },
        {
          title: "Robô",
          href: "/app/settings/robot",
          segment: "robot",
          disabled: false,
        },
        {
          title: "Estabelecimento",
          href: "/app/settings/establishment",
          segment: "establishment",
          disabled: false,
        },
        {
          title: "Aplicativo do Garçon",
          href: "/app/settings/garcon-app",
          segment: "garcon-app",
          disabled: false,
        },
      ],
    },
  ] satisfies Nav,
};
