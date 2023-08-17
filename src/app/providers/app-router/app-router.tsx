import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { routeConfig, routePath } from "@shared/config";
import RootLayout from "../root-layout/root-layout";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        {Object.values(routeConfig).map(({ path, element }) =>
          path === routePath.main ? (
            <Route
              key={path}
              index
              element={<Suspense fallback="loading...">{element}</Suspense>}
            />
          ) : (
            <Route
              key={path}
              path={path}
              element={<Suspense fallback="loading...">{element}</Suspense>}
            />
          )
        )}
      </Route>
    </Routes>
  );
}

export default AppRouter;
