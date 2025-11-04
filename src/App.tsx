import "./App.css";
import Home from "./pages/Home";
import Bazaar from "./pages/Bazaar";
import Account from "./pages/Account";
import ListingView from "./pages/ListingView";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./layouts/Layout";
import Inbox from "./pages/Inbox";
import Notifications from "./pages/Notifications";
import Settings from "./pages/Settings";
import SellItem from "./pages/SellItem";

function App() {
  return (
    <BrowserRouter>
      <Layout>
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
