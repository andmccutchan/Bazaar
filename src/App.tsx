import "./App.css";
import Home from "./pages/Home";
import Bazaar from "./pages/Bazaar";
import Account from "./pages/Account";
import ListingView from "./pages/ListingView";
import { BrowserRouter, Route, Routes, Link } from "react-router";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Layout from "./layouts/layout";
import { House, Store, CircleUserRound } from "lucide-react";
import Inbox from "./pages/Inbox";
import Notifications from "./pages/Notifications";
import Settings from "./pages/Settings";
import SellItem from "./pages/SellItem";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <div className="flex justify-center w-full">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/">
                    <House size={48} />
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/bazaar">
                    <Store size={48} />
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink>
                  <Link to="/account">
                    <CircleUserRound size={48} />
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bazaar" element={<Bazaar />} />
          <Route path="/account" element={<Account />} />
          <Route path="/item" element={<ListingView />} />
          <Route path="/inbox" element={<Inbox />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/sell" element={<SellItem />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
