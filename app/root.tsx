import type { MetaFunction, LinksFunction } from "@remix-run/node";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { ReactNode } from "react";
import stylesheet from "~/tailwind.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export const meta: MetaFunction = () => [
  {
    charset: "utf-8",
    title: "New Remix App",
    viewport: "width=device-width,initial-scale=1",
  },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Layout>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </Layout>
      </body>
    </html>
  );
}

function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <nav className="px-10 pt-5">
        <Link to="/" prefetch="intent" className="text-2xl font-semibold">
          Move<span className="text-teal-500">DB</span>
        </Link>
      </nav>
      <main>{children}</main>
    </>
  );
}
