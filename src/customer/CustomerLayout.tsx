import { Outlet, useNavigate, useNavigation } from "react-router-dom";
import Navbar from "../components/bar/Navbar";
import Footer from "../components/Footer";
import Loading from "@/components/Loading";

const Layout = () => {
  const navigation = useNavigation();

  if ((navigation.state == "loading")) {
    return <Loading />;
  }
  return (
    <>
      <header className="shadow-sm sticky top-0 left-0 z-10 bg-white">
        <Navbar />
      </header>
      <main className="container md:min-h-[430px]">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
