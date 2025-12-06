
import AppLaout from "@/App";
import Contact from "@/components/pages/Contact";
import Homepage from "@/components/pages/Homepage";
import Menu from "@/components/pages/Menu";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
     path: '/',
        Component: AppLaout,
        children: [
            {
                index: true,
                Component: Homepage
            },
            {
                path: 'menu',
                Component: Menu
            },
               {
                path: 'contact',
                Component: Contact
            }
              
            
        ]
  },
]);