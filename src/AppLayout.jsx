import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "./UI/Navbar";
import CartOverview from "./features/cart/CartOverview";
import Loader from "./UI/Loader";
import styles from "./styles";
function AppLayout() {
  const appStatus = useNavigation();
  const isLoading = appStatus.state === "loading";
  return (
    <div className=" bg-bgLight">
      {isLoading && <Loader />}
      <Navbar />
      <main className={`${styles.sectionPadding} text-text`}>
        <Outlet />
      </main>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
