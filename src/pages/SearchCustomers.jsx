import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const SearchCustomers = () => {
  const { t } = useTranslation();
  
  const customers = [
    { id: 1, name: 'Julianna Davenport', phone: '+1 (555) 012-9934', lastVisit: 'Oct 24, 2023', initials: 'JD', color: 'bg-secondary-container text-on-secondary-container' },
    { id: 2, name: 'Marcus Reed', phone: '+1 (555) 014-2287', lastVisit: 'Nov 12, 2023', initials: 'MR', color: 'bg-tertiary-container text-on-tertiary-container' },
    { id: 3, name: 'Elena Sterling', phone: '+1 (555) 019-8812', lastVisit: 'Dec 01, 2023', initials: 'ES', color: 'bg-primary-container text-on-primary-container' },
    { id: 4, name: 'Tobias Vance', phone: '+1 (555) 010-4456', lastVisit: 'Dec 18, 2023', initials: 'TC', color: 'bg-surface-container-high text-on-surface' },
  ];

  return (
    <div className="max-w-4xl mx-auto w-full">
      {/* Editorial Header */}
      <div className="mb-12">
        <h1 className="text-5xl font-black tracking-tight text-on-background mb-2">{t('search.title')}</h1>
        <p className="text-on-surface-variant text-lg">{t('search.sub')}</p>
      </div>

      {/* Prominent Search Bar (Bespoke Utility Style) */}
      <div className="relative mb-16 group">
        <div className="absolute inset-y-0 left-6 rtl:left-auto rtl:right-6 flex items-center pointer-events-none text-primary">
          <span className="material-symbols-outlined text-3xl">search</span>
        </div>
        <input 
          className="w-full py-8 pl-20 pr-8 rtl:pr-20 rtl:pl-8 bg-surface-container-highest border-none rounded-none focus:ring-0 focus:bg-surface-container-lowest transition-colors text-xl font-medium text-on-surface placeholder:text-outline-variant" 
          placeholder={t('search.placeholder')} 
          type="text"
        />
        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-focus-within:w-full transition-all duration-300"></div>
      </div>

      {/* Results Section (Bento Grid Inspired / Asymmetric Precision) */}
      <div className="grid grid-cols-1 gap-6">
        {customers.map((customer) => (
          <Link
            key={customer.id}
            to={`/customer/${customer.id}`}
            className="group flex items-center justify-between p-8 bg-surface-container-lowest hover:bg-surface-container-low transition-all scale-100 active:scale-[0.98] cursor-pointer"
          >
            <div className="flex items-center gap-6">
              <div className={`w-16 h-16 ${customer.color} flex items-center justify-center text-2xl font-bold`}>
                {customer.initials}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-on-surface tracking-tight">{customer.name}</h3>
                <p className="text-on-surface-variant font-mono">{customer.phone}</p>
              </div>
            </div>
            <div className="flex items-center gap-10">
              <div className="hidden sm:block text-right rtl:text-left">
                <p className="text-xs uppercase tracking-widest text-outline mb-1">Last Visit</p>
                <p className="font-semibold">{customer.lastVisit}</p>
              </div>
              <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors rtl:rotate-180">chevron_right</span>
            </div>
          </Link>
        ))}
      </div>

      {/* Empty State Suggestion */}
      <div className="mt-24 text-center border-t border-outline-variant/10 pt-12">
        <p className="text-on-surface-variant mb-6">{t('search.not_seen')}</p>
        <Link 
          to="/add-customer"
          className="inline-block bg-primary text-on-primary px-10 py-5 font-bold tracking-tight text-lg hover:bg-primary-dim transition-colors"
        >
          {t('search.register_new')}
        </Link>
      </div>

    </div>
  );
};

export default SearchCustomers;
