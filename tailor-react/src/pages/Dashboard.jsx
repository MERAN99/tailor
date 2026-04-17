import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Dashboard = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ckb';

  const quickActions = [
    {
      to: '/add-customer',
      icon: 'person_add',
      iconBg: 'bg-primary',
      iconColor: 'text-on-primary',
      title: t('dashboard.add_customer'),
      desc: t('dashboard.add_customer_desc'),
      cta: t('dashboard.create_profile'),
      ctaColor: 'text-primary',
      gradient: 'from-primary-container/60 to-transparent',
      border: 'border-primary/20 hover:border-primary/50',
    },
    {
      to: '/search',
      icon: 'manage_search',
      iconBg: 'bg-secondary',
      iconColor: 'text-on-secondary',
      title: t('dashboard.search_customers'),
      desc: t('dashboard.search_customers_desc'),
      cta: t('dashboard.browse_directory'),
      ctaColor: 'text-secondary',
      gradient: 'from-secondary-container/60 to-transparent',
      border: 'border-secondary/20 hover:border-secondary/50',
    },
  ];

  const recentFittings = [
    {
      initials: 'ئا.خ',
      name: isRtl ? 'ئارام خەلیل' : 'Aram Khalil',
      detail: isRtl ? 'کراسی کلاسیک • پێوانەی کۆتایی' : 'Classic Shirt • Final Fitting',
      time: '14:30',
      pattern: isRtl ? 'نووسخە #٢٢٤١' : 'Pattern #2241',
      badge: isRtl ? 'چالاک' : 'Active',
      badgeBg: 'bg-tertiary-container text-on-tertiary-container',
    },
    {
      initials: 'ش.ع',
      name: isRtl ? 'شیلان عەلی' : 'Shilan Ali',
      detail: isRtl ? 'جلی هاوینی • گرتنی پێوانە' : 'Summer Suit • Measurement',
      time: '16:00',
      pattern: isRtl ? 'نووسخەی نوێ' : 'New Pattern',
      badge: isRtl ? 'نوێ' : 'New',
      badgeBg: 'bg-primary-container text-primary',
    },
    {
      initials: 'ک.م',
      name: isRtl ? 'کارزان محمد' : 'Karzan Mohammed',
      detail: isRtl ? 'کات کراو • یەکەمین پێوانە' : 'Tailored Suit • First Fitting',
      time: '17:30',
      pattern: isRtl ? 'نووسخە #٣٠١٢' : 'Pattern #3012',
      badge: isRtl ? 'بەپێچەوانە' : 'Pending',
      badgeBg: 'bg-error-container text-error',
    },
  ];

  return (
    <div className="pb-6 sm:pb-10">
      {/* ── Hero Section ── */}
      <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary via-primary-dim to-[#312E81] p-6 sm:p-10 mb-8 shadow-card-lg">
        {/* Background decoration */}
        <div className="absolute top-0 end-0 w-64 h-64 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 start-0 w-32 h-32 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/2" />
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)',
            backgroundSize: '12px 12px'
          }}
        />

        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-tertiary animate-pulse-soft" />
            <span className="text-white/70 text-xs font-semibold tracking-widest uppercase">
              {isRtl ? 'سیستەمی بەڕێوەبردن' : 'Management System'}
            </span>
          </div>
          <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-3">
            {t('dashboard.welcome')} 👋
          </h1>
          <p className="text-white/70 text-sm sm:text-base max-w-lg leading-relaxed">
            {t('dashboard.sub')}
          </p>

          {/* Quick stats */}
          <div className="mt-6 flex flex-wrap gap-3">
            {[
              { icon: 'group', val: '١٢٤', label: isRtl ? 'کڕیار' : 'Clients' },
              { icon: 'calendar_today', val: '٣', label: isRtl ? 'پێوانەی ئەمڕۆ' : "Today's Fittings" },
              { icon: 'assignment', val: '٨', label: isRtl ? 'داواکاری چالاک' : 'Active Orders' },
            ].map((s) => (
              <div key={s.label} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2.5 border border-white/15">
                <span className="material-symbols-outlined text-white/80 text-base">{s.icon}</span>
                <div>
                  <p className="text-white font-black text-lg leading-none">{s.val}</p>
                  <p className="text-white/60 text-[10px] mt-0.5">{s.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Quick Actions Grid ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
        {quickActions.map((action) => (
          <Link
            key={action.to}
            to={action.to}
            className={`group relative card-hover p-6 sm:p-8 border ${action.border} overflow-hidden`}
          >
            {/* Gradient top */}
            <div className={`absolute top-0 end-0 w-32 h-32 bg-gradient-to-bl ${action.gradient} rounded-full translate-x-1/2 -translate-y-1/2 blur-xl transition-all duration-300 group-hover:scale-125`} />

            <div className="relative z-10 flex flex-col h-full gap-4">
              <div className={`w-12 h-12 ${action.iconBg} rounded-xl flex items-center justify-center shadow-md`}>
                <span className={`material-symbols-outlined ${action.iconColor} text-2xl`}>{action.icon}</span>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-on-surface mb-1.5">{action.title}</h2>
                <p className="text-on-surface-variant text-sm leading-relaxed">{action.desc}</p>
              </div>

              <div className={`mt-auto flex items-center gap-1.5 ${action.ctaColor} font-bold text-sm group-hover:gap-3 transition-all duration-200`}>
                <span>{action.cta}</span>
                <span className={`material-symbols-outlined text-base ${isRtl ? 'rotate-180' : ''}`}>arrow_forward</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* ── Today's Fittings ── */}
      <div>
        <div className="flex items-center justify-between mb-5">
          <div>
            <p className="section-label mb-1">{t('dashboard.today_fittings')}</p>
            <p className="text-on-surface-variant text-sm">{t('dashboard.fittings_desc')}</p>
          </div>
          <button className="btn-ghost text-sm px-3 py-2">
            <span>{t('dashboard.view_schedule')}</span>
            <span className={`material-symbols-outlined text-base ${isRtl ? 'rotate-180' : ''}`}>chevron_right</span>
          </button>
        </div>

        <div className="space-y-3">
          {recentFittings.map((f, i) => (
            <div
              key={i}
              className="card flex items-center gap-4 p-4 sm:p-5 hover:shadow-card-lg transition-all duration-200 cursor-pointer"
            >
              {/* Avatar */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-primary to-tertiary flex items-center justify-center text-on-primary font-bold text-sm shrink-0">
                {f.initials}
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <p className="font-bold text-on-surface truncate">{f.name}</p>
                <p className="text-xs text-on-surface-variant truncate">{f.detail}</p>
              </div>

              {/* Badge + Time */}
              <div className={`flex flex-col items-${isRtl ? 'start' : 'end'} gap-1 shrink-0`}>
                <span className={`badge ${f.badgeBg}`}>{f.badge}</span>
                <p className="text-sm font-bold text-on-surface">{f.time}</p>
                <p className="text-[10px] text-on-surface-variant">{f.pattern}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
