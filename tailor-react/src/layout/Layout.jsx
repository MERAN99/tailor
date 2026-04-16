import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Sidebar from '../components/Sidebar';
import MobileNav from '../components/MobileNav';

const Layout = ({ children }) => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  
  const navLinks = [
    { name: t('nav.dashboard'), path: '/dashboard' },
    { name: t('nav.clients'), path: '/search' },
    { name: t('nav.add_client'), path: '/add-customer' },
    { name: t('nav.messages'), path: '/messages' },
  ];

  useEffect(() => {
    document.documentElement.dir = i18n.language === 'ckb' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ckb' : 'en';
    i18n.changeLanguage(newLang);
  };

  // Logic to determine if we should show the sidebar
  const isDashboard = location.pathname === '/dashboard' || location.pathname === '/';
  const showSidebar = !isDashboard;

  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col pb-20 md:pb-0 font-body">
      {/* TopNavBar */}
      <header className="w-full h-[76px] border-b-0 bg-surface-container-low transition-colors duration-300 flex justify-between items-center px-8 py-4 sticky top-0 z-50">
        <div className="flex items-center gap-8">
          <Link to="/dashboard" className="text-2xl font-black text-primary">TailorMaster</Link>
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path || (link.path === '/search' && location.pathname.startsWith('/customer'));
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-['Inter'] font-semibold text-lg tracking-tight transition-all pb-1 ${
                    isActive 
                      ? 'text-primary border-b-2 border-primary' 
                      : 'text-on-surface-variant hover:text-primary'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>
        <div className="flex items-center gap-6">
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container-highest text-on-surface font-bold text-xs uppercase tracking-widest hover:bg-primary hover:text-on-primary transition-all"
          >
            <span className="material-symbols-outlined text-sm">language</span>
            {i18n.language === 'en' ? 'Kurdish' : 'English'}
          </button>
          
          <div className="hidden md:block relative">
            <span className={`material-symbols-outlined absolute ${i18n.language === 'ckb' ? 'right-3' : 'left-3'} top-1/2 -translate-y-1/2 text-outline`}>search</span>
            <input
              className={`bg-surface-container-high border-none rounded-lg ${i18n.language === 'ckb' ? 'pr-10 pl-4' : 'pl-10 pr-4'} py-2 text-sm focus:ring-2 focus:ring-primary w-64`}
              placeholder={t('nav.quick_find')}
              type="text"
            />
          </div>
          <Link to="/login" className="font-['Inter'] font-semibold text-lg tracking-tight text-on-surface-variant hover:text-primary scale-95 active:opacity-80 transition-transform">{t('nav.logout')}</Link>
          <img
            alt="Tailor Profile"
            className="w-10 h-10 rounded-full object-cover border-2 border-primary-container"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCd51UWwu4i05EwYmBfBOPYHArKeVIdD4Wojl6zOFhC9yVQclM2f53G_ybIxINBFnEWPDUqpNutU1PHtc_UiE1Wje8D1H5Yj532SSj8TeUMArZazsOFpwzszfYP9vJSoGzvv61VDuuQPdqj_zD60-0aPa2mRAn4lTylKGuOAj4AC7cBlaqTQRC1vJzUt2G0EipALqROKyr7rS1eu69HRz9ENQEW__n5y7-9Uv0cpzwC8A3MEAjMVATVtwDLVcwQzrXHwkISU36Euw"
          />
        </div>
      </header>

      <div className="flex flex-1">
        {showSidebar && <Sidebar />}
        <main className={`flex-1 flex flex-col p-8 lg:p-12 w-full ${showSidebar ? (i18n.language === 'ckb' ? 'md:mr-64' : 'md:ml-64') : 'max-w-7xl mx-auto'}`}>
          {children}
        </main>
      </div>

      <footer className="mt-auto p-8 border-t-0 bg-surface-container-lowest z-10 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-on-surface-variant text-sm">
          <div className="flex items-center gap-4">
            <span className="font-bold text-primary">TailorMaster</span>
            <span>© 2024 Bespoke Utility Systems</span>
          </div>
          <div className="flex gap-6">
            <a className="hover:text-primary transition-colors" href="#">{t('nav.privacy')}</a>
            <a className="hover:text-primary transition-colors" href="#">{t('nav.docs')}</a>
            <a className="hover:text-primary transition-colors" href="#">{t('nav.support')}</a>
          </div>
        </div>
      </footer>

      {/* Global Mobile Navigation */}
      <MobileNav />
    </div>
  );
};

export default Layout;
