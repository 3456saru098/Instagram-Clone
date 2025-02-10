import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes } from "react-router";
import { Route } from "react-router";
import MobileMenu from "./components/MobileMenu.jsx";
import MobileHeader from "./components/MobileHeader.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import MessagesPage from "./pages/MessagesPage.jsx";
import ReelsPage from "./pages/ReelsPage.jsx";
import ExplorePage from "./pages/ExplorePage.jsx";
import CreatePage from "./pages/CreatePage.jsx";
import NotificationsPage from "./pages/NotificationsPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <MobileHeader/>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/profile" element={ProfilePage} />
        <Route path="/notifications" element={NotificationsPage} />
        <Route path="/messages" element={MessagesPage} />
        <Route path="/reels" element={ReelsPage} />
        <Route path="/explore" element={ExplorePage} />
        <Route path="/create" element={CreatePage} />
      </Routes>
      <MobileMenu/>
    </BrowserRouter>
  </StrictMode>
);
