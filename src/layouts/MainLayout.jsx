import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navber from "../components/Navber";

const MainLayout = () => {
  return (
    <div>
      {/* Navber */}
      <Navber></Navber>
      {/* Daynamic section*/}
      <div className="bg-gray-100 py-10">
        <div className="min-h-[calc(100vh-418px)] w-11/12 mx-auto">
          <Outlet></Outlet>
        </div>
      </div>
      {/* Footer */}
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
