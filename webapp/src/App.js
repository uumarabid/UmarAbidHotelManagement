import PrivateRoutes from "./components/Routes/PrivateRoutes";
import { UserProvider } from "./components/userContext";

function App() {
  return (
    <UserProvider>
      <PrivateRoutes />
    </UserProvider>
  );
}

export default App;
