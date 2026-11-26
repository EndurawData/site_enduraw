import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { REDIRECTS, ROUTES } from "@/routes/manifest";
import { notFound, pages } from "@/routes/pages";

/** Ancienne URL : redirection immédiate, ancre comprise, sans entrée d'historique. */
function Redirect({ to }: { to: string }) {
  const { search } = useLocation();
  const [pathname, hash] = to.split("#");
  return <Navigate to={{ pathname, search, hash: hash ? `#${hash}` : "" }} replace />;
}

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        {ROUTES.map((route) => {
          const { Page } = pages.get(route.path)!;
          return <Route key={route.path} path={route.path} element={<Page />} />;
        })}
        {Object.entries(REDIRECTS).map(([from, to]) => (
          <Route key={from} path={from} element={<Redirect to={to} />} />
        ))}
        <Route path="*" element={<notFound.Page />} />
      </Route>
    </Routes>
  );
}
