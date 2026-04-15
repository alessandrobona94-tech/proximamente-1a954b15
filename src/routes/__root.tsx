import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">
          Page not found
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "robots", content: "index, follow" },
      { title: "ProXimaMenTe APS | Cittadinanza Attiva" },
      { name: "description", content: "Proximamente APS – Associazione di promozione sociale a Rivarolo Canavese. Cultura, dialogo e benessere nel Canavese." },
      { name: "author", content: "Proximamente APS" },
      { property: "og:title", content: "ProXimaMenTe APS | Cittadinanza Attiva" },
      { property: "og:description", content: "Proximamente APS – Associazione di promozione sociale a Rivarolo Canavese. Cultura, dialogo e benessere nel Canavese." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://proximamente.lovable.app/" },
      { property: "og:locale", content: "it_IT" },
      { property: "og:site_name", content: "ProXimaMenTe APS" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "ProXimaMenTe APS | Cittadinanza Attiva" },
      { name: "twitter:description", content: "Proximamente APS – Associazione di promozione sociale a Rivarolo Canavese. Cultura, dialogo e benessere nel Canavese." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/3Aiwai5xOXYSlYOpmpXuwKI8SX93/social-images/social-1776098957439-LOGO_Proximamente.webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/3Aiwai5xOXYSlYOpmpXuwKI8SX93/social-images/social-1776098957439-LOGO_Proximamente.webp" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,200..800;1,6..72,200..800&family=Be+Vietnam+Pro:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
