import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const CustomerDetails = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const isRtl = i18n.language === 'ckb';

  const customer = {
    name: isRtl ? 'ئارام خەلیل جاف' : 'Aram Khalil Jaf',
    id: '#TM-8829',
    phone: '+964 770 123 4567',
    location: isRtl ? 'سلێمانی، کوردستان' : 'Sulaymaniyah, Kurdistan',
    memberType: isRtl ? 'ئەندامی پریمیەم' : 'Premium Member',
    notes: isRtl
      ? 'حەزی بە دورینێکی تەسکتر لە ناوقەد هەیە بۆ کراسی فەرمی. زۆرجار قوماشی کتان بۆ نەخشەکانی هاوینی هەڵدەبژێرێت.'
      : 'Prefers a slightly slimmer fit around the waist for formal shirts. Usually selects heavy linen for summer patterns.',
    measurements: [
      { label: t('measurements.neck'), sub: isRtl ? 'دەوری مل' : 'Circumference', value: '42.5', unit: 'cm' },
      { label: t('measurements.chest'), sub: isRtl ? 'پانی سنگ' : 'Full chest width', value: '104.0', unit: 'cm' },
      { label: t('measurements.waist'), sub: isRtl ? 'هێڵی ناوقەد' : 'Natural waistline', value: '92.5', unit: 'cm' },
      { label: t('measurements.shoulder'), sub: isRtl ? 'لە درزدا بۆ درز' : 'Seam to seam', value: '48.0', unit: 'cm' },
      { label: t('measurements.sleeve'), sub: isRtl ? 'لە شانەوە بۆ کمند' : 'Shoulder to cuff', value: '64.5', unit: 'cm' },
      { label: t('measurements.length'), sub: isRtl ? 'قەدی گشتی' : 'Total height', value: '78.0', unit: 'cm' },
      { label: t('measurements.hip'), sub: isRtl ? 'فراوانترین نوقتە' : 'Widest point', value: '106.5', unit: 'cm' },
    ],
    fabric: {
      name: isRtl ? 'هیرینگبۆن شین' : 'Navy Herringbone',
      type: isRtl ? 'خەڵتی پەشمی ئیتالی' : 'Italian Wool Blend',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDs_tJZVo1oQycEfTn5N2wwg6cdEkYizRqSBhHhv2lwhsqzZ6F7DF1HnH9wWuaJgB2Vg7-FMB3AdNJqy3oyJvj8zkovk6kDf5q-mk578hXXpY8ZoHG1eXCqEG_NX_lKWY9prQa1jE84hQ0--rMEkgU02GG1qGOxaXbClqagN9hs8ABOUd_9U2Mz_l-4SPAdw8BgOgm7nJ6-_CR0LGh1Yca2y_1hX6mNt5zaSja1jZP6SyXg_gBw44fTEBXrN4bGClR0IuxJG52bhg'
    },
    activity: {
      lastOrder: isRtl ? '١٢ی ئایاری ٢٠٢٤' : 'May 12, 2024',
      totalOrders: isRtl ? '١٤ نەخشە' : '14 Designs',
    },
  };

  return (
    <div className="max-w-5xl mx-auto w-full pb-24 md:pb-10">

      {/* Breadcrumb + Header */}
      <div className="mb-7">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-sm text-on-surface-variant mb-4">
          <Link to="/search" className="hover:text-primary transition-colors font-medium">
            {t('nav.clients')}
          </Link>
          <span className={`material-symbols-outlined text-sm ${isRtl ? 'rotate-180' : ''}`}>chevron_right</span>
          <span className="text-primary font-semibold">
            {isRtl ? 'وردەکاری پڕۆفایل' : 'Profile Details'}
          </span>
        </nav>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-black text-on-background tracking-tight mb-1">
              {customer.name}
            </h1>
            <p className="text-on-surface-variant">
              <span className="badge bg-primary-container text-primary me-2">{customer.memberType}</span>
              {customer.id}
            </p>
          </div>
          <div className="flex gap-3">
            <button className="btn-secondary text-sm px-4 py-2.5 rounded-lg">
              <span className="material-symbols-outlined text-base">edit</span>
              {isRtl ? 'دەستکاری' : 'Edit'}
            </button>
            <button className="flex items-center gap-1.5 bg-error-container text-error border border-error/20 hover:bg-error hover:text-on-error font-bold px-4 py-2.5 rounded-lg text-sm transition-all">
              <span className="material-symbols-outlined text-base">delete</span>
              {isRtl ? 'سڕینەوە' : 'Delete'}
            </button>
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Left Column */}
        <div className="space-y-5">
          {/* Profile Card */}
          <div className="card p-6 text-center">
            <div className="w-20 h-20 rounded-2xl overflow-hidden mx-auto mb-4 shadow-md ring-4 ring-primary-container">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4x8jLsZusAhu3Z9fWLgDvMVKmUXYQ4Vx51BfTiHGAljXfkgrocvJaXFUws1k8u2Ou5YpIYBqFibenEdWVEfXEBAtF-AkTSYpANpbTAOUD1inSsjj7wzy1K5uhIMzSJmm2LGq8KFT5aQvYzt9vGo3ecByzJHMaOciENy2Urb7EkW_tOYkNyAraH4Nt_jsGfTeioOIcASB8bFCGEhoJ802JDeeatuo1_a_yHegKSVI_xugUG8J8i5jv49CGRZ5hsi7CMJRKUVOr8Q"
                alt={customer.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-bold text-on-surface mb-3">
              {isRtl ? 'زانیاری پەیوەندی' : 'Contact Info'}
            </h3>
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2 text-sm text-on-surface-variant">
                <span className="material-symbols-outlined text-primary text-base">call</span>
                <span className="font-mono">{customer.phone}</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-sm text-on-surface-variant">
                <span className="material-symbols-outlined text-primary text-base">location_on</span>
                <span>{customer.location}</span>
              </div>
            </div>
          </div>

          {/* Notes */}
          <div className="card p-6">
            <h3 className="font-bold text-on-surface flex items-center gap-2 mb-3">
              <span className="material-symbols-outlined text-primary text-lg">sticky_note_2</span>
              {t('add_customer.notes')}
            </h3>
            <p className="text-sm text-on-surface-variant leading-relaxed italic">
              "{customer.notes}"
            </p>
          </div>

          {/* Activity */}
          <div className="card p-6">
            <h3 className="section-label mb-4">{isRtl ? 'چالاکی دواین' : 'Recent Activity'}</h3>
            <div className="space-y-3">
              {[
                { label: isRtl ? 'دوایین داواکاری' : 'Last Order', val: customer.activity.lastOrder, icon: 'shopping_bag' },
                { label: isRtl ? 'کۆی داواکارییەکان' : 'Total Orders', val: customer.activity.totalOrders, icon: 'format_list_numbered' },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between py-2 border-b border-outline-variant/20 last:border-0">
                  <div className="flex items-center gap-2 text-sm text-on-surface-variant">
                    <span className="material-symbols-outlined text-base">{item.icon}</span>
                    {item.label}
                  </div>
                  <span className="text-sm font-bold text-on-surface">{item.val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Measurements */}
        <div className="md:col-span-2 space-y-5">
          {/* Measurements Table */}
          <div className="card overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-outline-variant/20 bg-surface-container-low">
              <h2 className="font-bold text-on-surface">{t('add_customer.measurements')}</h2>
              <span className="badge bg-primary-container text-primary text-[10px] tracking-widest">
                {isRtl ? 'سم' : 'Standard CM'}
              </span>
            </div>
            <div className="divide-y divide-outline-variant/10">
              {customer.measurements.map((m, idx) => (
                <div
                  key={m.label}
                  className={`flex items-center justify-between px-6 py-4 transition-colors hover:bg-surface-container-low ${idx % 2 === 1 ? 'bg-surface-container-low/50' : ''}`}
                >
                  <div>
                    <p className="text-sm font-bold text-primary">{m.label}</p>
                    <p className="text-xs text-on-surface-variant">{m.sub}</p>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xl font-mono font-black text-on-background">{m.value}</span>
                    <span className="text-xs text-on-surface-variant font-medium">{m.unit}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Preferred Fabric */}
          <div className="card p-5">
            <h4 className="section-label mb-4">
              {isRtl ? 'قوماشی خواست' : 'Preferred Fabric'}
            </h4>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 shadow-md">
                <img src={customer.fabric.image} alt="Fabric" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="font-bold text-on-surface">{customer.fabric.name}</p>
                <p className="text-sm text-on-surface-variant">{customer.fabric.type}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDetails;
