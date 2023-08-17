import { AppRouter } from "./providers";
import { useTheme } from "@shared/theme";

function App() {
  useTheme();

  return <AppRouter />;
}

export default App;
