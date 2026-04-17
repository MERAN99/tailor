import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const SearchCustomers = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ckb';
  const [query, setQuery] = useState('');

  const customers = [
    {
      id: 1,
      name: isRtl ? 'جولیانا داڤینپۆرت' : 'Julianna Davenport',
      phone: '+964 (750) 012-9934',
      lastVisit: isRtl ? '٢٤ی تشرینی یەکەم ٢٠٢٣' : 'Oct 24, 2023',
      initials: 'جد',
      orders: 7,
      color: 'from-secondary to-secondary-dim',
    },
    {
      id: 2,
      name: isRtl ? 'مارکوس ڕێد' : 'Marcus Reed',
      phone: '+964 (751) 014-2287',
      lastVisit: isRtl ? '١٢ی تشرینی دووەم ٢٠٢٣' : 'Nov 12, 2023',
      initials: 'مر',
      orders: 3,
      color: 'from-tertiary to-tertiary-dim',
    },
    {
      id: 3,
      name: isRtl ? 'ئیلینا ستیرلینگ' : 'Elena Sterling',
      phone: '+964 (752) 019-8812',
      lastVisit: isRtl ? '١ی کانونی یەکەم ٢٠٢٣' : 'Dec 01, 2023',
      initials: 'ئس',
      orders: 12,
      color: 'from-primary to-primary-dim',
    },
    {
      id: 4,
      name: isRtl ? 'تۆبیاس ڤانس' : 'Tobias Vance',
      phone: '+964 (753) 010-4456',
      lastVisit: isRtl ? '١٨ی کانونی یەکەم ٢٠٢٣' : 'Dec 18, 2023',
      initials: 'تڤ',
      orders: 5,
      color: 'from-[#7C3AED] to-[#6D28D9]',
    },
  ];

  const filtered = customers.filter((c) =>
    c.name.toLowerCase().includes(query.toLowerCase()) ||
    c.phone.includes(query)
  );

  return (
    <div className="max-w-3xl mx-auto w-full pb-24 md:pb-10">
      {/* Header */}
      <div className="mb-7">
        <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-on-background mb-1">
          {t('search.title')}
        </h1>
        <p className="text-on-surface-variant">{t('search.sub')}</p>
      </div>

      {/* Search Input */}
      <div className="relative mb-8">
        <span className={`material-symbols-outlined absolute ${isRtl ? 'right-4' : 'left-4'} top-1/2 -translate-y-1/2 text-primary text-2xl pointer-events-none`}>
          search
        </span>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t('search.placeholder')}
          className={`w-full ${isRtl ? 'pr-14 pl-4' : 'pl-14 pr-4'} py-4 sm:py-5 rounded-xl bg-surface-container-lowest border-2 border-outline-variant/30 focus:border-primary text-base sm:text-lg text-on-background placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-sm`}
        />
        {query && (
          <button
            onClick={() => setQuery('')}
            className={`absolute ${isRtl ? 'left-4' : 'right-4'} top-1/2 -translate-y-1/2 text-on-surface-variant/60 hover:text-on-surface transition-colors`}
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        )}
      </div>

      {/* Results count */}
      {query && (
        <p className="text-sm text-on-surface-variant mb-4">
          {isRtl ? `${filtered.length} کڕیار دۆزرایەوە` : `${filtered.length} client(s) found`}
        </p>
      )}

      {/* Customer List */}
      <div className="space-y-3">
        {filtered.map((customer) => (
          <Link
            key={customer.id}
            to={`/customer/${customer.id}`}
            className="card-hover flex items-center gap-4 p-4 sm:p-5 group"
          >
            {/* Avatar */}
            <div className={`w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-xl bg-gradient-to-br ${customer.color} flex items-center justify-center text-white font-bold text-base sm:text-lg shadow-md`}>
              {customer.initials}
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-on-surface text-base sm:text-lg truncate">{customer.name}</h3>
              <p className="text-on-surface-variant text-sm font-mono truncate">{customer.phone}</p>
            </div>

            {/* Meta */}
            <div className={`hidden sm:flex flex-col items-${isRtl ? 'start' : 'end'} gap-1 shrink-0`}>
              <span className="badge bg-surface-container text-on-surface-variant text-[10px]">
                <span className="material-symbols-outlined text-xs">calendar_today</span>
                {customer.lastVisit}
              </span>
              <span className="text-xs text-on-surface-variant">
                {isRtl ? `${customer.orders} داواکاری` : `${customer.orders} orders`}
              </span>
            </div>

            {/* Arrow */}
            <span className={`material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors ${isRtl ? 'rotate-180' : ''}`}>
              chevron_right
            </span>
          </Link>
        ))}

        {filtered.length === 0 && (
          <div className="card p-10 flex flex-col items-center text-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-surface-container flex items-center justify-center">
              <span className="material-symbols-outlined text-on-surface-variant text-3xl">person_search</span>
            </div>
            <div>
              <p className="font-bold text-on-surface mb-1">
                {isRtl ? 'کڕیارێک نەدۆزرایەوە' : 'No clients found'}
              </p>
              <p className="text-sm text-on-surface-variant">{t('search.not_seen')}</p>
            </div>
            <Link to="/add-customer" className="btn-primary px-6 py-2.5 text-sm rounded-lg mt-2">
              <span className="material-symbols-outlined">person_add</span>
              {t('search.register_new')}
            </Link>
          </div>
        )}
      </div>

      {/* Empty state CTA when no search */}
      {!query && filtered.length > 0 && (
        <div className="mt-10 text-center">
          <p className="text-on-surface-variant text-sm mb-4">{t('search.not_seen')}</p>
          <Link to="/add-customer" className="btn-primary inline-flex px-8 py-3 text-sm rounded-xl">
            <span className="material-symbols-outlined">person_add</span>
            {t('search.register_new')}
          </Link>
        </div>
      )}
    </div>
  );
};

export default SearchCustomers;
