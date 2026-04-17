import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const MobileNav = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const navItems = [
    { name: t('nav.dashboard'), icon: 'dashboard', path: '/dashboard' },
    { name: t('nav.add_client'), icon: 'person_add', path: '/add-customer' },
    { name: t('nav.clients'), icon: 'group', path: '/search' },
    { name: t('nav.logout'), icon: 'logout', path: '/login' },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-surface-container-lowest/95 backdrop-blur-xl border-t border-outline-variant/20 safe-area-inset-bottom">
      <div className="flex justify-around items-center py-2 px-2">
        {navItems.map((item) => {
          const isActive =
            location.pathname === item.path ||
            (item.path === '/search' && location.pathname.startsWith('/customer'));
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl min-w-[60px] transition-all duration-200 ${
                isActive
                  ? 'text-primary bg-primary-container'
                  : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
              }`}
            >
              <span
                className="material-symbols-outlined text-2xl"
                style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}
              >
                {item.icon}
              </span>
              <span className="text-[10px] font-bold leading-none">{item.name}</span>
            </Link>
          );
        })}
      </div>
      {/* iOS safe area padding */}
      <div className="h-safe-area-inset-bottom bg-surface-container-lowest" />
    </nav>
  );
};

export default MobileNav;
