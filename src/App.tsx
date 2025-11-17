import WrapperLayout from "@/components/layout/WrapperLayout/WrapperLayout";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <WrapperLayout>
      <Outlet />
    </WrapperLayout>
  );
}

export default App;
