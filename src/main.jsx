import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, useLocation } from "react-router";
import { Route } from "react-router";
import MobileMenu from "./components/MobileMenu.jsx";
import MobileHeader from "./components/MobileHeader.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import MessagesPage from "./pages/MessagesPage.jsx";
import ReelsPage from "./pages/ReelsPage.jsx";
import ExplorePage from "./pages/ExplorePage.jsx";
import CreatePage from "./pages/CreatePage.jsx";
import NotificationsPage from "./pages/NotificationsPage.jsx";
import LeftSide from "./components/LeftSide.jsx";
import RightSide from "./components/RightSide.jsx";

// createRoot(document.getElementById("root")).render(
 export function Root(){
    const location = useLocation();
    console.log(location.pathname);


  return(
  <StrictMode>
   
    <MobileHeader/>
      
<div className="flex  relative h-screen">
        <div className="sticky top-0 h-screen w-3/12 lg:w-2/12 hidden sm:block ">
          <LeftSide />
        </div>

        <div className="overflow-y-auto h-screen w-12/12  sm:w-9/12  lg:6/12">
          <Routes>
         <Route path="/" element={<App />} />
        <Route path="/profile" element={<ProfilePage/>} />
        <Route path="/notifications" element={<NotificationsPage/>} />
        <Route path="/messages" element={<MessagesPage/>} />
        <Route path="/reels" element={<ReelsPage/>} />
        <Route path="/explore" element={<ExplorePage/>} />
        <Route path="/create" element={<CreatePage/>} />
      </Routes>
        </div>

        <div className="sticky top-0 h-screen bg-gray-50 w-3/12 lg:w-4/12 hidden lg:block ">
        { location.pathname==="/" && <RightSide />}
        </div>
      </div>
      <MobileMenu/>
    
  </StrictMode>
);
 }

 createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  
  <Root/>
  </BrowserRouter>
 );
