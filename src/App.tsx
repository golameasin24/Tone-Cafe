
import FooterSection from "./layouts/Footer";
import Navigation from "./layouts/Navigation";

import TopBar from "./layouts/TopBar";
import { Outlet } from 'react-router'
function AppLaout() {
  return (
    <>
       <TopBar/>
        <Navigation/>
            <Outlet />
    
       <FooterSection/>
    </>
  );
}

export default AppLaout;
