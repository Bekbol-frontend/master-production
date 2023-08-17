import { Outlet } from "react-router-dom";
import { Header } from "@widgets/header";
import { Sidebar } from "@widgets/siderbar";
import { useAppSelector } from "@app/store/hooks";
import { classNames } from "@shared/lib";

function RootLayout() {
  const { collapsed } = useAppSelector((state) => state.collepsedSlice);

  return (
    <>
      <Header />
      <div className="main-container">
        <Sidebar />
        <div
          className={classNames("main-content", {
            ["main-content-collapsed"]: collapsed,
          })}
        >
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default RootLayout;
