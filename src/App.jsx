import { AuthProvider } from "./components/context/auth";
import { AppRouter } from "./routes";

export const App = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
};
