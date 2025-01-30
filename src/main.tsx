import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import App from './App.tsx'
import AboutPage from './page/About.tsx';
import Services from './page/Services.tsx';
import Contact from './page/Contact.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
   <Routes>
      <Route path="/" element={<App />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="services" element={<Services />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>,
)
