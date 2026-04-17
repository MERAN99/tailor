import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Sidebar from '../components/Sidebar';
import MobileNav from '../components/MobileNav';

const Layout = ({ children }) => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const isRtl = i18n.language === 'ckb';

  const navLinks = [
    { name: t('nav.dashboard'), path: '/dashboard', icon: 'dashboard' },
    { name: t('nav.clients'), path: '/search', icon: 'group' },
    { name: t('nav.add_client'), path: '/add-customer', icon: 'person_add' },
  ];

  useEffect(() => {
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language, isRtl]);

  // Close mobile sidebar on route change
  useEffect(() => {
    setMobileSidebarOpen(false);
  }, [location.pathname]);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ckb' : 'en';
    i18n.changeLanguage(newLang);
  };

  const isDashboard = location.pathname === '/dashboard' || location.pathname === '/';
  const showSidebar = !isDashboard;

  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col font-body" dir={isRtl ? 'rtl' : 'ltr'}>

      {/* ── Top Navigation Bar ── */}
      <header className="glass-header w-full h-16 sm:h-[72px] sticky top-0 z-50 border-b border-outline-variant/20 shadow-sm">
        <div className="max-w-screen-2xl mx-auto h-full flex items-center justify-between px-4 sm:px-6 lg:px-8 gap-3">

          {/* Left: Logo + Desktop Nav */}
          <div className="flex items-center gap-6 min-w-0">
            {/* Mobile hamburger (only on sidebar pages) */}
            {showSidebar && (
              <button
                onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
                className="md:hidden p-2 rounded-lg text-on-surface-variant hover:bg-primary-container/50 hover:text-primary transition-colors"
                aria-label="فێرستی ناڤیگاسیۆن"
              >
                <span className="material-symbols-outlined">
                  {mobileSidebarOpen ? 'close' : 'menu'}
                </span>
              </button>
            )}

            <Link
              to="/dashboard"
              className="flex items-center gap-2 shrink-0"
            >
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-on-primary text-sm">straighten</span>
              </div>
              <span className="text-lg sm:text-xl font-black gradient-text hidden xs:block sm:block">TailorMaster</span>
            </Link>

            {/* Desktop nav links */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive =
                  location.pathname === link.path ||
                  (link.path === '/search' && location.pathname.startsWith('/customer'));
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-150 ${
                      isActive
                        ? 'bg-primary-container text-primary'
                        : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[1.1rem]"
                      style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}>
                      {link.icon}
                    </span>
                    {link.name}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Right: Search + Language + Avatar */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search bar – hidden on small phones */}
            <div className="hidden sm:flex relative items-center">
              <span className={`material-symbols-outlined absolute ${isRtl ? 'right-3' : 'left-3'} text-on-surface-variant text-lg pointer-events-none`}>
                search
              </span>
              <input
                className={`bg-surface-container border border-outline-variant/30 rounded-lg ${isRtl ? 'pr-9 pl-3' : 'pl-9 pr-3'} py-2 text-sm text-on-background placeholder:text-on-surface-variant/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all w-40 lg:w-52`}
                placeholder={t('nav.quick_find')}
                type="text"
              />
            </div>

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-outline-variant/40 bg-surface-container-low text-on-surface-variant hover:bg-primary-container hover:text-primary hover:border-primary/40 text-xs font-bold uppercase tracking-wider transition-all duration-200"
            >
              <span className="material-symbols-outlined text-base">translate</span>
              <span className="hidden sm:inline">{isRtl ? 'English' : 'کوردی'}</span>
            </button>

            {/* Logout */}
            <Link
              to="/login"
              className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm font-semibold text-on-surface-variant hover:text-primary hover:bg-primary-container/50 transition-all duration-150"
            >
              <span className="material-symbols-outlined text-[1.1rem]">logout</span>
              <span>{t('nav.logout')}</span>
            </Link>

            {/* Avatar */}
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-tertiary flex items-center justify-center text-on-primary font-bold text-sm shrink-0 cursor-pointer ring-2 ring-primary/20 hover:ring-primary/50 transition-all">
              TM
            </div>
          </div>
        </div>
      </header>

      {/* ── Body ── */}
      <div className="flex flex-1 relative">
        {/* Mobile sidebar overlay */}
        {showSidebar && mobileSidebarOpen && (
          <div
            className="fixed inset-0 bg-black/30 z-40 md:hidden backdrop-blur-sm"
            onClick={() => setMobileSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        {showSidebar && (
          <Sidebar mobileOpen={mobileSidebarOpen} onClose={() => setMobileSidebarOpen(false)} />
        )}

        {/* Main content */}
        <main
          className={`flex-1 min-w-0 p-4 sm:p-6 lg:p-10 w-full transition-all duration-300 ${
            showSidebar ? (isRtl ? 'md:mr-64' : 'md:ml-64') : 'max-w-5xl mx-auto'
          }`}
        >
          <div className="animate-fade-in">
            {children}
          </div>
        </main>
      </div>

      {/* ── Footer (desktop only) ── */}
      <footer className="hidden md:block border-t border-outline-variant/20 bg-surface-container-low py-5 px-8">
        <div className="max-w-screen-2xl mx-auto flex items-center justify-between text-xs text-on-surface-variant">
          <div className="flex items-center gap-3">
            <span className="font-black gradient-text text-sm">TailorMaster</span>
            <span>© 2024</span>
          </div>
          <div className="flex gap-5">
            <a className="animated-underline hover:text-primary transition-colors" href="#">{t('nav.privacy')}</a>
            <a className="animated-underline hover:text-primary transition-colors" href="#">{t('nav.docs')}</a>
            <a className="animated-underline hover:text-primary transition-colors" href="#">{t('nav.support')}</a>
          </div>
        </div>
      </footer>

      {/* Global Mobile Navigation */}
      <MobileNav />
    </div>
  );
};

export default Layout;
