// src/Router.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import PublicInvitationPage from "./pages/PublicInvitationPage";
import LandingPage from "./pages/LandingPage";
import GuestEditorPage from "./pages/GuestEditorPage"; // <-- Import the new page
import SubhalekhaClassic from './invitation-templates/SubhalekhaClassic';

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<App />} />
        <Route path="/invite/:slug" element={<PublicInvitationPage />} />
        <Route path="/editor" element={<GuestEditorPage />} />{" "}
        <Route path="/preview/classic" element={<SubhalekhaClassic />} />
        {/* <-- Add the new route */}
      </Routes>
    </BrowserRouter>
  );
}
