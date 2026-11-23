import { Routes, Route } from "react-router";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import HomePage from "./pages/HomePage.jsx";
import PostsPage from "./pages/PostsPage.jsx";
import { profileData } from "./data/portfolioData.js";

export default function App() {
  return (
    <div className="app">
      <Navbar fullName={profileData.fullName} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/posts" element={<PostsPage />} />
        </Routes>
      </main>
      <Footer profile={profileData} />
    </div>
  );
}