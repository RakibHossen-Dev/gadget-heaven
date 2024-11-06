import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navber from "../components/Navber";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MainLayout = () => {
  return (
    <div>
      <ToastContainer></ToastContainer>
      {/* Navber */}
      <Navber></Navber>
      {/* Daynamic section*/}
      <div className="bg-gray-100 pb-10">
        <div className="min-h-[calc(100vh-418px)]  ">
          <Outlet></Outlet>
        </div>
      </div>
      {/* Footer */}
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
