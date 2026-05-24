import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const AddCustomer = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const isRtl = i18n.language === 'ckb';
  const fileRef = useRef(null);

  const handleSave = (e) => {
    e.preventDefault();
    navigate('/search');
  };

  const qatFields = [
    { label: t('measurements.sharwal'), key: 'sharwal', icon: '👖' },
    { label: t('measurements.drezhi'), key: 'drezhi', icon: '📏' },
    { label: t('measurements.pani_pisht'), key: 'pani_pisht', icon: '🔙' },
    { label: t('measurements.qol'), key: 'qol', icon: '📐' },
    { label: t('measurements.sing'), key: 'sing', icon: '👔' },
    { label: t('measurements.kamar'), key: 'kamar', icon: '📏' },
    { label: t('measurements.yakha'), key: 'yakha', icon: '🧣' },
    { label: t('measurements.daling'), key: 'daling', icon: '🦵' },
  ];

  const pantolFields = [
    { label: t('measurements.drezhi'), key: 'drezhi', icon: '📏' },
    { label: t('measurements.sarj'), key: 'sarj', icon: '👖' },
    { label: t('measurements.kamar'), key: 'kamar', icon: '📏' },
    { label: t('measurements.qaida'), key: 'qaida', icon: '🪑' },
    { label: t('measurements.chok'), key: 'chok', icon: '🦵' },
    { label: t('measurements.daling'), key: 'daling', icon: '🦵' },
  ];

  return (
    <div className="max-w-4xl mx-auto w-full pb-24 md:pb-10">
      {/* Page header */}
      <div className="mb-8">
        <button
          onClick={() => navigate(-1)}
          className="btn-ghost text-sm mb-4 -ms-2"
        >
          <span className={`material-symbols-outlined text-base ${isRtl ? 'rotate-180' : ''}`}>arrow_back</span>
          {isRtl ? 'گەڕانەوە' : 'Back'}
        </button>
        <h1 className="text-3xl sm:text-4xl font-black text-on-background tracking-tight mb-1">
          {t('add_customer.title')}
        </h1>
        <p className="text-on-surface-variant">{t('add_customer.sub')}</p>
      </div>

      <form onSubmit={handleSave} className="space-y-8">
        {/* ── Basic Info Card ── */}
        <div className="card p-6 sm:p-8">
          <h2 className="section-label mb-5">
            {isRtl ? 'زانیاری سەرەکی' : 'Basic Information'}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* Name + Phone */}
            <div className="sm:col-span-2 space-y-5">
              <div>
                <label className="block section-label mb-1.5" htmlFor="cust-name">
                  {t('add_customer.full_name')}
                </label>
                <div className="relative">
                  <span className={`material-symbols-outlined absolute ${isRtl ? 'right-3' : 'left-3'} top-1/2 -translate-y-1/2 text-on-surface-variant/60 text-lg pointer-events-none`}>
                    person
                  </span>
                  <input
                    id="cust-name"
                    type="text"
                    placeholder={isRtl ? 'بۆ نموونە: کارزان ئەحمەد' : 'e.g. Karwan Ahmed'}
                    className={`input-field ${isRtl ? 'pr-10' : 'pl-10'} text-lg`}
                  />
                </div>
              </div>
              <div>
                <label className="block section-label mb-1.5" htmlFor="cust-phone">
                  {t('add_customer.phone')}
                </label>
                <div className="relative">
                  <span className={`material-symbols-outlined absolute ${isRtl ? 'right-3' : 'left-3'} top-1/2 -translate-y-1/2 text-on-surface-variant/60 text-lg pointer-events-none`}>
                    call
                  </span>
                  <input
                    id="cust-phone"
                    type="tel"
                    placeholder="+964 --- --- ----"
                    className={`input-field ${isRtl ? 'pr-10' : 'pl-10'} text-lg`}
                  />
                </div>
              </div>
            </div>

            {/* Photo Upload */}
            <div
              onClick={() => fileRef.current?.click()}
              className="flex flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed border-outline-variant/50 bg-surface-container p-6 cursor-pointer hover:border-primary/50 hover:bg-primary-container/20 transition-all group min-h-[140px]"
            >
              <input ref={fileRef} type="file" accept="image/*" className="hidden" />
              <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary text-2xl">add_a_photo</span>
              </div>
              <p className="text-xs text-on-surface-variant text-center leading-relaxed">
                {t('add_customer.photo_desc')}
              </p>
            </div>
          </div>
        </div>

        {/* ── Measurements Card ── */}
        <div className="card p-6 sm:p-8 space-y-8">
          <div className="flex items-center justify-between pb-4 border-b border-outline-variant/20">
            <h2 className="section-label">{t('add_customer.measurements')}</h2>
            <span className="badge bg-primary-container text-primary">
              {t('add_customer.unit_info')}
            </span>
          </div>

          {/* ── Qat Section ── */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-outline-variant/10">
              <span className="text-xl">🧥</span>
              <h3 className="font-bold text-lg text-primary">
                {t('measurements.type_qat')}
              </h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6">
              {qatFields.map((field) => (
                <div key={`qat-${field.key}`}>
                  <label className="block text-xs font-bold text-on-surface-variant mb-1.5 uppercase tracking-wide" htmlFor={`qat-${field.key}`}>
                    <span className="me-1">{field.icon}</span>{field.label}
                  </label>
                  <div className="relative">
                    <input
                      id={`qat-${field.key}`}
                      type="number"
                      min="0"
                      step="0.5"
                      placeholder="0.0"
                      className="input-field text-lg font-mono"
                    />
                    <span className={`absolute ${isRtl ? 'left-3' : 'right-3'} top-1/2 -translate-y-1/2 text-xs text-on-surface-variant/70 font-medium pointer-events-none`}>
                      {isRtl ? 'سم' : 'cm'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Pantol Section ── */}
          <div className="space-y-4 pt-4">
            <div className="flex items-center gap-2 pb-2 border-b border-outline-variant/10">
              <span className="text-xl">👖</span>
              <h3 className="font-bold text-lg text-primary">
                {t('measurements.type_pantol')}
              </h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6">
              {pantolFields.map((field) => (
                <div key={`pantol-${field.key}`}>
                  <label className="block text-xs font-bold text-on-surface-variant mb-1.5 uppercase tracking-wide" htmlFor={`pantol-${field.key}`}>
                    <span className="me-1">{field.icon}</span>{field.label}
                  </label>
                  <div className="relative">
                    <input
                      id={`pantol-${field.key}`}
                      type="number"
                      min="0"
                      step="0.5"
                      placeholder="0.0"
                      className="input-field text-lg font-mono"
                    />
                    <span className={`absolute ${isRtl ? 'left-3' : 'right-3'} top-1/2 -translate-y-1/2 text-xs text-on-surface-variant/70 font-medium pointer-events-none`}>
                      {isRtl ? 'سم' : 'cm'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Fit Type Section ── */}
          <div className="pt-4 border-t border-outline-variant/20">
            <div className="w-full sm:w-1/3">
              <label className="block text-xs font-bold text-on-surface-variant mb-1.5 uppercase tracking-wide" htmlFor="fit-type">
                ✂️ {t('measurements.fit_type')}
              </label>
              <div className="relative">
                <select id="fit-type" className="input-field cursor-pointer appearance-none pr-8">
                  <option value="classic">{t('measurements.classic')}</option>
                  <option value="slim">{t('measurements.slim')}</option>
                  <option value="relaxed">{t('measurements.relaxed')}</option>
                </select>
                <span className={`material-symbols-outlined absolute ${isRtl ? 'left-3' : 'right-3'} top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none`}>
                  unfold_more
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Notes Card ── */}
        <div className="card p-6 sm:p-8">
          <label className="block section-label mb-3" htmlFor="cust-notes">
            {t('add_customer.notes')}
          </label>
          <textarea
            id="cust-notes"
            rows={4}
            placeholder={t('add_customer.notes_placeholder')}
            className="input-field resize-none leading-relaxed"
          />
        </div>

        {/* ── Action Row ── */}
        <div className="flex flex-col-reverse sm:flex-row gap-3 sm:justify-between items-stretch sm:items-center pt-2">
          <button
            type="button"
            onClick={() => navigate('/search')}
            className="btn-ghost justify-center sm:justify-start"
          >
            <span className="material-symbols-outlined">close</span>
            {t('add_customer.cancel')}
          </button>

          <button type="submit" className="btn-primary px-8 py-3.5 text-base rounded-xl shadow-lg">
            <span className="material-symbols-outlined">save</span>
            {t('add_customer.save')}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCustomer;
