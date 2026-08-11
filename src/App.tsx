import { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { CustomCursor, Footer, Navigation, Preloader } from '@/components/SiteChrome';
import { useLenis } from '@/hooks/useLenis';
import HomePage from '@/pages/HomePage';
import { BookingPage, ContactPage, DiningPage, ExperiencesPage, GalleryPage, JournalPage, JournalArticlePage, RoomDetailPage, RoomsPage, WellnessPage } from '@/pages/SubPages';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo(0, 0), [pathname]);
  return null;
}

function AppShell() {
  useLenis();
  return <><Preloader /><CustomCursor /><Navigation /><ScrollToTop /><Routes><Route path="/" element={<HomePage />} /><Route path="/rooms" element={<RoomsPage />} /><Route path="/rooms/:slug" element={<RoomDetailPage />} /><Route path="/dining" element={<DiningPage />} /><Route path="/experiences" element={<ExperiencesPage />} /><Route path="/wellness" element={<WellnessPage />} /><Route path="/gallery" element={<GalleryPage />} /><Route path="/journal" element={<JournalPage />} /><Route path="/journal/:slug" element={<JournalArticlePage />} /><Route path="/contact" element={<ContactPage />} /><Route path="/booking" element={<BookingPage />} /></Routes><Footer /></>;
}

function App() {
  return <BrowserRouter><AppShell /></BrowserRouter>;
}

export default App;
