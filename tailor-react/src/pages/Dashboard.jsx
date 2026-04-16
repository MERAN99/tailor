import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Dashboard = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      {/* Welcome Section */}
      <div className="text-center mb-16 max-w-2xl mx-auto">
        <h1 className="text-[2.75rem] font-bold tracking-tight text-on-background mb-4 leading-tight">
          {t('dashboard.welcome')}
        </h1>
        <p className="text-on-surface-variant text-lg leading-relaxed">
          {t('dashboard.sub')}
        </p>
      </div>

      {/* Hero Actions (Bento Style) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mx-auto">
        {/* Add Customer Card */}
        <Link 
          to="/add-customer"
          className="group relative overflow-hidden bg-surface-container-lowest p-10 rounded-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border border-transparent hover:border-primary/20"
        >
          <div className="absolute top-0 left-0 w-1 h-full bg-primary transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
          <div className="flex flex-col h-full">
            <div className="w-16 h-16 bg-primary-container rounded-lg flex items-center justify-center mb-8">
              <span className="material-symbols-outlined text-primary text-4xl">person_add</span>
            </div>
            <h2 className="text-3xl font-bold text-on-surface mb-4">{t('dashboard.add_customer')}</h2>
            <p className="text-on-surface-variant mb-10 flex-1">{t('dashboard.add_customer_desc')}</p>
            <div className="flex items-center text-primary font-bold tracking-tight group-hover:translate-x-2 rtl:group-hover:-translate-x-2 transition-transform">
              {t('dashboard.create_profile')}
              <span className="material-symbols-outlined ml-2 rtl:mr-2 rtl:ml-0 rtl:rotate-180">arrow_forward</span>
            </div>
          </div>
        </Link>

        {/* Search Customers Card */}
        <Link 
          to="/search"
          className="group relative overflow-hidden bg-surface-container-lowest p-10 rounded-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border border-transparent hover:border-primary/20"
        >
          <div className="absolute top-0 left-0 w-1 h-full bg-secondary transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
          <div className="flex flex-col h-full">
            <div className="w-16 h-16 bg-secondary-container rounded-lg flex items-center justify-center mb-8">
              <span className="material-symbols-outlined text-secondary text-4xl">manage_search</span>
            </div>
            <h2 className="text-3xl font-bold text-on-surface mb-4">{t('dashboard.search_customers')}</h2>
            <p className="text-on-surface-variant mb-10 flex-1">{t('dashboard.search_customers_desc')}</p>
            <div className="flex items-center text-secondary font-bold tracking-tight group-hover:translate-x-2 rtl:group-hover:-translate-x-2 transition-transform">
              {t('dashboard.browse_directory')}
              <span className="material-symbols-outlined ml-2 rtl:mr-2 rtl:ml-0 rtl:rotate-180">arrow_forward</span>
            </div>
          </div>
        </Link>
      </div>

      {/* Secondary Information / Recent Activity */}
      <div className="mt-20 w-full max-w-4xl mx-auto">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-2">{t('dashboard.today_fittings')}</h3>
            <p className="text-on-surface-variant">{t('dashboard.fittings_desc')}</p>
          </div>
          <button className="text-primary font-semibold text-sm hover:underline">{t('dashboard.view_schedule')}</button>
        </div>
        <div className="space-y-4">
          {/* Asymmetric List Items (No Borders Rule) */}
          <div className="flex items-center p-6 bg-surface-container-low rounded-lg transition-all hover:bg-surface-container-high">
            <div className={`w-12 h-12 bg-white rounded-full flex items-center justify-center ${i18n.language === 'ckb' ? 'ml-6' : 'mr-6'} font-bold text-primary`}>JD</div>
            <div className="flex-1">
              <p className="font-bold text-on-surface">James D. Harrison</p>
              <p className="text-sm text-on-surface-variant">Navy Cashmere Overcoat • Final Fitting</p>
            </div>
            <div className={`${i18n.language === 'ckb' ? 'text-left' : 'text-right'}`}>
              <p className="font-medium text-on-surface">14:30</p>
              <p className="text-xs text-on-surface-variant">Pattern #2241</p>
            </div>
          </div>
          <div className="flex items-center p-6 bg-surface-container-lowest rounded-lg transition-all hover:bg-surface-container-high">
            <div className={`w-12 h-12 bg-white rounded-full flex items-center justify-center ${i18n.language === 'ckb' ? 'ml-6' : 'mr-6'} font-bold text-primary`}>EL</div>
            <div className="flex-1">
              <p className="font-bold text-on-surface">Eleanor Lancaster</p>
              <p className="text-sm text-on-surface-variant">Linen Summer Suit • Measurement Capture</p>
            </div>
            <div className={`${i18n.language === 'ckb' ? 'text-left' : 'text-right'}`}>
              <p className="font-medium text-on-surface">16:00</p>
              <p className="text-xs text-on-surface-variant">New Pattern</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
