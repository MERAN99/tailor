import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Sidebar = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const menuItems = [
    { name: t('nav.dashboard'), icon: 'dashboard', path: '/dashboard' },
    { name: t('nav.clients'), icon: 'group', path: '/search' },
    { name: t('measurements.title') || 'Measurements', icon: 'straighten', path: '/measurements' },
    { name: 'Fabric Patterns', icon: 'texture', path: '/fabrics' },
    { name: 'Schedule', icon: 'calendar_today', path: '/schedule' },
    { name: 'Staff', icon: 'badge', path: '/staff' },
    { name: 'Reports', icon: 'analytics', path: '/reports' },
  ];

  const secondaryItems = [
    { name: 'Settings', icon: 'settings', path: '/settings' },
    { name: 'Help', icon: 'help', path: '/help' },
  ];

  const isRtl = i18n.language === 'ckb';

  return (
    <aside className={`h-[calc(100vh-76px)] w-64 fixed ${isRtl ? 'right-0 border-l' : 'left-0 border-r'} top-[76px] hidden md:flex flex-col py-6 ${isRtl ? 'pr-4' : 'pl-4'} bg-surface-container-low border-outline-variant/10 transition-all`}>
      <div className="mb-10 px-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary-container rounded-lg flex items-center justify-center text-primary">
            <span className="material-symbols-outlined">straighten</span>
          </div>
          <div>
            <h2 className="text-xl font-bold text-primary">TailorMaster</h2>
            <p className="text-xs text-on-surface-variant font-medium">Bespoke Utility</p>
          </div>
        </div>
      </div>
      
      <nav className="flex-grow space-y-1">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-4 py-3 px-4 font-['Inter'] font-medium text-sm transition-transform ${isRtl ? 'hover:-translate-x-1' : 'hover:translate-x-1'} ${
              location.pathname === item.path
                ? 'text-primary bg-surface-container-high'
                : 'text-on-surface-variant hover:bg-surface-container-high'
            }`}
          >
            <span className="material-symbols-outlined">{item.icon}</span>
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>

      <div className="mt-auto space-y-1 pb-10">
        {secondaryItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-4 py-3 px-4 font-['Inter'] font-medium text-sm transition-transform ${isRtl ? 'hover:-translate-x-1' : 'hover:translate-x-1'} ${
              location.pathname === item.path
                ? 'text-primary bg-surface-container-high'
                : 'text-on-surface-variant hover:bg-surface-container-high'
            }`}
          >
            <span className="material-symbols-outlined">{item.icon}</span>
            <span>{item.name}</span>
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
