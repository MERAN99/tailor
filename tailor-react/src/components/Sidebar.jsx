import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Sidebar = ({ mobileOpen = false, onClose }) => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const isRtl = i18n.language === 'ckb';

  const menuItems = [
    { name: t('nav.dashboard'), icon: 'dashboard', path: '/dashboard' },
    { name: t('nav.clients'), icon: 'group', path: '/search' },
    { name: t('nav.add_client'), icon: 'person_add', path: '/add-customer' },
    { name: t('measurements.fit_type') !== 'measurements.fit_type' ? 'پێوانەکان' : 'Measurements', icon: 'straighten', path: '/measurements' },
  ];

  const secondaryItems = [
    { name: isRtl ? 'ڕێکخستنەکان' : 'Settings', icon: 'settings', path: '/settings' },
    { name: t('nav.help'), icon: 'help_outline', path: '/help' },
    { name: t('nav.logout'), icon: 'logout', path: '/login' },
  ];

  const sidebarClass = `
    h-[calc(100vh-72px)] w-64 fixed top-[72px] z-40
    ${isRtl ? 'right-0 border-l' : 'left-0 border-r'}
    border-outline-variant/20
    flex flex-col py-4
    bg-surface-container-lowest shadow-lg md:shadow-none
    transition-transform duration-300 ease-in-out
    ${mobileOpen ? 'translate-x-0' : (isRtl ? 'translate-x-full md:translate-x-0' : '-translate-x-full md:translate-x-0')}
  `;

  const isActive = (path) =>
    location.pathname === path ||
    (path === '/search' && location.pathname.startsWith('/customer'));

  return (
    <aside className={sidebarClass}>
      {/* Brand */}
      <div className="px-4 pb-4 mb-2 border-b border-outline-variant/20">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-on-primary text-lg">straighten</span>
          </div>
          <div>
            <p className="font-black text-primary text-base leading-none">TailorMaster</p>
            <p className="text-[10px] text-on-surface-variant mt-0.5">
              {isRtl ? 'سیستەمی خیاط' : 'Tailor Management'}
            </p>
          </div>
        </div>
      </div>

      {/* Primary Nav */}
      <nav className="flex-grow px-3 space-y-0.5 overflow-y-auto">
        {menuItems.map((item) => {
          const active = isActive(item.path);
          return (
            <Link
              key={item.path}
              to={item.path}
              onClick={onClose}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-semibold transition-all duration-150 group ${
                active
                  ? 'bg-primary-container text-primary'
                  : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface'
              }`}
            >
              <span
                className="material-symbols-outlined text-xl shrink-0"
                style={{ fontVariationSettings: active ? "'FILL' 1" : "'FILL' 0" }}
              >
                {item.icon}
              </span>
              <span>{item.name}</span>
              {active && (
                <span className={`${isRtl ? 'mr-auto' : 'ml-auto'} w-1.5 h-1.5 rounded-full bg-primary`} />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Divider */}
      <div className="mx-4 my-3 border-t border-outline-variant/20" />

      {/* Secondary Nav */}
      <div className="px-3 space-y-0.5 pb-4">
        {secondaryItems.map((item) => {
          const active = isActive(item.path);
          return (
            <Link
              key={item.path}
              to={item.path}
              onClick={onClose}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-semibold transition-all duration-150 ${
                active
                  ? 'bg-primary-container text-primary'
                  : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface'
              }`}
            >
              <span className="material-symbols-outlined text-xl shrink-0">{item.icon}</span>
              <span>{item.name}</span>
            </Link>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
