import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { routeConfig } from "@shared/config";

function AppRouter() {
  return (
    <Suspense fallback="loading...">
      <Routes>
        {Object.values(routeConfig).map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </Suspense>
  );
}

export default AppRouter;
