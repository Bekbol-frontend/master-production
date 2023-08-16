import { Header } from "@widgets/header";
import { AppRouter } from "./providers";
import { useTheme } from "@shared/theme";

function App() {
  useTheme();

  return (
    <>
      <Header />
      <AppRouter />
    </>
  );
}

export default App;
