import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const CustomerDetails = () => {
  const { t, i18n } = useTranslation();
  const { id } = useParams();
  const navigate = useNavigate();

  const isRtl = i18n.language === 'ckb';

  // Mock data for the specific customer
  const customer = {
    name: 'Aram Khalil Jaf',
    id: '#TM-8829',
    phone: '+964 770 123 4567',
    location: 'Sulaymaniyah, Kurdistan',
    memberType: 'Premium Member',
    notes: 'Prefers a slightly slimmer fit around the waist for formal shirts. Usually selects heavy linen for summer patterns. Last fitting was 2 weeks ago.',
    measurements: [
      { label: t('measurements.neck'), sub: 'Circumference', value: '42.5', unit: 'cm' },
      { label: t('measurements.chest'), sub: 'Full chest width', value: '104.0', unit: 'cm' },
      { label: t('measurements.waist'), sub: 'Natural waistline', value: '92.5', unit: 'cm' },
      { label: t('measurements.shoulder'), sub: 'Seam to seam', value: '48.0', unit: 'cm' },
      { label: t('measurements.sleeve'), sub: 'Shoulder to cuff', value: '64.5', unit: 'cm' },
      { label: t('measurements.length'), sub: 'Total garment height', value: '78.0', unit: 'cm' },
      { label: t('measurements.hip'), sub: 'Widest point', value: '106.5', unit: 'cm' },
    ],
    fabric: {
      name: 'Navy Herringbone',
      type: 'Italian Wool Blend',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDs_tJZVo1oQycEfTn5N2wwg6cdEkYizRqSBhHhv2lwhsqzZ6F7DF1HnH9wWuaJgB2Vg7-FMB3AdNJqy3oyJvj8zkovk6kDf5q-mk578hXXpY8ZoHG1eXCqEG_NX_lKWY9prQa1jE84hQ0--rMEkgU02GG1qGOxaXbClqagN9hs8ABOUd_9U2Mz_l-4SPAdw8BgOgm7nJ6-_CR0LGh1Yca2y_1hX6mNt5zaSja1jZP6SyXg_gBw44fTEBXrN4bGClR0IuxJG52bhg'
    },
    activity: {
      lastOrder: 'May 12, 2024',
      totalOrders: '14 Designs'
    }
  };

  return (
    <div className="max-w-6xl mx-auto w-full">
      {/* Header Section */}
      <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <nav className="flex items-center gap-2 text-on-surface-variant text-sm mb-4">
            <Link to="/search" className="hover:text-primary transition-colors">{t('nav.clients')}</Link>
            <span className={`material-symbols-outlined text-xs ${isRtl ? 'rotate-180' : ''}`}>chevron_right</span>
            <span className="text-primary font-medium">Profile Details</span>
          </nav>
          <h1 className="text-[2.75rem] font-bold leading-tight tracking-tight text-on-background">{customer.name}</h1>
          <p className="text-on-surface-variant text-lg mt-2">{customer.memberType} • ID: {customer.id}</p>
        </div>
        <div className="flex gap-4">
          <button className="px-6 py-3 border-2 border-primary text-primary font-bold rounded-md hover:bg-primary-container transition-colors flex items-center gap-2">
            <span className="material-symbols-outlined">edit</span> EDIT PROFILE
          </button>
          <button className="px-6 py-3 bg-error text-on-error font-bold rounded-md hover:bg-error-dim transition-colors flex items-center gap-2">
            <span className="material-symbols-outlined">delete</span> DELETE
          </button>
        </div>
      </header>

      {/* Bento Grid Content */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Profile Summary Card */}
        <div className="md:col-span-4 space-y-8">
          <div className={`bg-surface-container-lowest p-8 rounded-xl shadow-sm ${isRtl ? 'border-r-4' : 'border-l-4'} border-primary`}>
            <div className="w-24 h-24 rounded-full overflow-hidden mb-6 bg-surface-container mx-auto">
              <img 
                className="w-full h-full object-cover" 
                alt="Customer profile"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4x8jLsZusAhu3Z9fWLgDvMVKmUXYQ4Vx51BfTiHGAljXfkgrocvJaXFUws1k8u2Ou5YpIYBqFibenEdWVEfXEBAtF-AkTSYpANpbTAOUD1inSsjj7wzy1K5uhIMzSJmm2LGq8KFT5aQvYzt9vGo3ecByzJHMaOciENy2Urb7EkW_tOYkNyAraH4Nt_jsGfTeioOIcASB8bFCGEhoJ802JDeeatuo1_a_yHegKSVI_xugUG8J8i5jv49CGRZ5hsi7CMJRKUVOr8Q"
              />
            </div>
            <div className="text-center">
              <h3 className="font-bold text-xl mb-1">Contact Info</h3>
              <p className="text-on-surface-variant text-sm flex items-center justify-center gap-2 mb-2">
                <span className="material-symbols-outlined text-sm">call</span> {customer.phone}
              </p>
              <p className="text-on-surface-variant text-sm flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-sm">location_on</span> {customer.location}
              </p>
            </div>
          </div>
          {/* Internal Notes */}
          <div className="bg-surface-container p-8 rounded-xl">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">sticky_note_2</span> 
              {t('add_customer.notes')}
            </h3>
            <p className="text-on-surface-variant leading-relaxed text-sm italic">
              "{customer.notes}"
            </p>
          </div>
        </div>

        {/* Measurement Grid Section */}
        <div className="md:col-span-8">
          <div className="bg-surface-container-lowest p-1 rounded-xl shadow-sm">
            <div className="p-6 border-b border-surface-variant flex justify-between items-center">
              <h2 className="text-xl font-bold text-on-background">{t('add_customer.measurements')}</h2>
              <span className="text-xs font-bold bg-primary-container text-on-primary-container px-3 py-1 rounded-full uppercase tracking-widest">Standard CM</span>
            </div>
            <div className="divide-y divide-surface-variant/20">
              {customer.measurements.map((m, idx) => (
                <div key={m.label} className={`flex items-center justify-between p-5 ${idx % 2 === 1 ? 'bg-surface-container-low' : ''}`}>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-primary">{m.label}</span>
                    <span className="text-xs text-on-surface-variant uppercase tracking-tighter">{m.sub}</span>
                  </div>
                  <span className="text-xl font-mono font-bold text-on-background">
                    {m.value} <span className="text-xs font-sans text-on-surface-variant">{m.unit}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Order History Teaser */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/10">
              <h4 className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-4">Preferred Fabric</h4>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded bg-surface-variant overflow-hidden">
                  <img 
                    className="w-full h-full object-cover" 
                    alt="Fabric"
                    src={customer.fabric.image}
                  />
                </div>
                <div>
                  <p className="font-bold text-on-background">{customer.fabric.name}</p>
                  <p className="text-xs text-on-surface-variant">{customer.fabric.type}</p>
                </div>
              </div>
            </div>
            <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/10">
              <h4 className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-4">Recent Activity</h4>
              <div className="flex flex-col gap-2 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-on-surface-variant">Last Order</span>
                  <span className="font-medium">{customer.activity.lastOrder}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-on-surface-variant">Total Orders</span>
                  <span className="font-medium">{customer.activity.totalOrders}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default CustomerDetails;
