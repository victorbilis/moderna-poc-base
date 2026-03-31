# Implementação — `@poc/base-ui`

Guia para integrar a biblioteca em uma aplicação React, com **ícones via [Lucide React](https://lucide.dev/)** (recomendado pelo time de produto).

## 1. Dependências

### Peer dependencies (obrigatórias)

A biblioteca espera que o app já forneça:

| Pacote | Uso |
|--------|-----|
| `react`, `react-dom` | Runtime |
| `@mui/material` | Componentes de layout e `ThemeProvider` |
| `@emotion/react`, `@emotion/styled` | Estilo do MUI v7 |

### No projeto consumidor

Instale também o Lucide (ícones da sidebar e demais telas):

```bash
npm install lucide-react
```

> **Nota:** `lucide-react` não é dependência do `@poc/base-ui`; fica à cargo do app para manter a lib leve e permitir trocar a família de ícones se necessário.

## 2. Estilos globais

Importe o CSS da biblioteca **uma vez** no entry do app (por exemplo `main.tsx` ou `App.tsx`), **antes** dos seus estilos:

```ts
import "@poc/base-ui/styles.css";
```

Esse arquivo inclui Tailwind (camadas compatíveis com MUI), fonte **Nunito Variable** e resets alinhados ao tema base.

## 3. Provedor de tema

Envolva a árvore da aplicação com `BaseThemeProvider` para aplicar paleta, tipografia e `CssBaseline` do MUI.

```tsx
import { BaseThemeProvider } from "@poc/base-ui";
import { createRoot } from "react-dom/client";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <BaseThemeProvider>
    <App />
  </BaseThemeProvider>,
);
```

### Tema padrão (referência)

- **Primária:** `#3D637D`
- **Fundo geral (MUI `background.default`):** `#f8fafc`
- **Papel / superfícies:** `#ffffff`

Para customizar, passe um tema criado com `createTheme` do MUI mesclando o base:

```tsx
import { createTheme } from "@mui/material/styles";
import { BaseThemeProvider, createBaseTheme } from "@poc/base-ui";

const theme = createTheme({
  ...createBaseTheme(),
  // overrides aqui
});

<BaseThemeProvider theme={theme}>...</BaseThemeProvider>;
```

## 4. Layout principal (`AppLayout`)

`AppLayout` monta **navbar** + **sidebar** + área **main** onde entram os `children`.

### Cores de layout (comportamento atual)

| Área | Cor de fundo |
|------|----------------|
| Barra superior (`Navbar`) | Branco |
| Sidebar | Branco |
| Conteúdo principal (`children`) | `#F6FAFF` |
| Item da sidebar **selecionado** | `#8ACEFE` |
| Item da sidebar **hover** | Cinza bem claro (`slate-100`) |

### Exemplo mínimo

```tsx
import { AppLayout } from "@poc/base-ui";

export function Shell() {
  return (
    <AppLayout>
      <h1 className="text-xl font-semibold">Conteúdo</h1>
    </AppLayout>
  );
}
```

### Props úteis

| Prop | Descrição |
|------|-----------|
| `navbarProps` | Repassa para `Navbar` (marca, logo, ações, etc.) |
| `sidebarProps` | Repassa para `Sidebar` (`items`, `className`, etc.) |
| `contentClassName` | Classes extras na `<main>` (área dos `children`) |
| `className` | Classes no container raiz do layout |

Tipagens: `AppLayoutProps`, `NavbarProps`, `SidebarProps`, `SidebarItem`.

## 5. Sidebar com Lucide React

Cada item aceita `icon` como `ReactNode`. Passe componentes do Lucide com tamanho coerente com a sidebar (ícones internos usam ~`1.125rem`).

### Campos de `SidebarItem`

| Campo | Obrigatório | Descrição |
|-------|-------------|-----------|
| `href` | sim | URL do link |
| `label` | sim | Título do item |
| `subtitle` | não | Linha auxiliar abaixo do título (descrição curta) |
| `icon` | não | Ícone à esquerda (ex.: Lucide) |
| `selected` | não | Destaca o item ativo (cor de fundo `#8ACEFE`) |

### Exemplo estático

```tsx
import { LayoutDashboard, Users } from "lucide-react";
import { AppLayout } from "@poc/base-ui";

const sidebarItems = [
  {
    href: "/",
    label: "Dashboard",
    subtitle: "Visão geral",
    icon: <LayoutDashboard className="size-[1.125rem] shrink-0" aria-hidden />,
    selected: true,
  },
  {
    href: "/usuarios",
    label: "Usuários",
    subtitle: "Gestão de contas",
    icon: <Users className="size-[1.125rem] shrink-0" aria-hidden />,
  },
];

export function Shell() {
  return (
    <AppLayout sidebarProps={{ items: sidebarItems }}>
      {/* children */}
    </AppLayout>
  );
}
```

### Boas práticas com Lucide

- Use `className="size-[1.125rem]"` (ou `size={18}` se preferir API do Lucide) para alinhar com o espaçamento da lista.
- Marque ícones decorativos com `aria-hidden` quando o texto do link já descreve o destino.
- Importe só os ícones usados (tree-shaking do pacote).

### Item ativo (`selected`)

Defina `selected: true` no item que corresponde à rota atual. Com **React Router**, derive do pathname:

```tsx
import { useLocation } from "react-router-dom";
import { LayoutDashboard, Users } from "lucide-react";
import { AppLayout, type SidebarItem } from "@poc/base-ui";

const paths = [
  { href: "/", label: "Dashboard", subtitle: "Visão geral", icon: LayoutDashboard },
  { href: "/usuarios", label: "Usuários", subtitle: "Gestão de contas", icon: Users },
] as const;

export function Shell() {
  const { pathname } = useLocation();

  const items: SidebarItem[] = paths.map(({ href, label, subtitle, icon: Icon }) => ({
    href,
    label,
    subtitle,
    icon: <Icon className="size-[1.125rem] shrink-0" aria-hidden />,
    selected: pathname === href || (href !== "/" && pathname.startsWith(href)),
  }));

  return <AppLayout sidebarProps={{ items }}>{/* rotas */}</AppLayout>;
}
```

Ajuste a regra de `selected` conforme nesting de rotas do seu app.

## 6. Navbar

Principais props (`NavbarProps`):

| Prop | Descrição |
|------|-----------|
| `brand` | Texto ou `false` para ocultar |
| `logo` / `logoSrc` / `logoAlt` | Marca visual |
| `toolbarCenter` | Slot central (busca, filtros) |
| `actions` | Botões à direita (ex.: `Button` da lib ou links) |

```tsx
import { AppLayout, Button } from "@poc/base-ui";

<AppLayout
  navbarProps={{
    brand: "Minha App",
    actions: <Button variant="outline">Sair</Button>,
  }}
>
  ...
</AppLayout>
```

## 7. Checklist de integração

1. [ ] Peer deps instaladas (`@mui/material`, `@emotion/react`, `@emotion/styled`, React 19).
2. [ ] `lucide-react` instalado no app consumidor.
3. [ ] `import "@poc/base-ui/styles.css"` no entry.
4. [ ] App envolvido em `BaseThemeProvider`.
5. [ ] `AppLayout` (ou `Navbar` / `Sidebar` avulsos) com `sidebarProps.items` usando ícones Lucide.
6. [ ] `selected` dos itens da sidebar sincronizado com a rota ativa.

## 8. Exportações principais

```ts
import {
  BaseThemeProvider,
  createBaseTheme,
  AppLayout,
  Navbar,
  Sidebar,
  Button,
} from "@poc/base-ui";
```

Tipos: `BaseThemeProviderProps`, `AppLayoutProps`, `NavbarProps`, `SidebarProps`, `SidebarItem`, `ButtonProps`, etc.
