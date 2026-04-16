import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const AddCustomer = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleSave = (e) => {
    e.preventDefault();
    navigate('/search');
  };

  const measurementFields = [
    { label: t('measurements.neck'), key: 'neck' },
    { label: t('measurements.chest'), key: 'chest' },
    { label: t('measurements.waist'), key: 'waist' },
    { label: t('measurements.shoulder'), key: 'shoulder' },
    { label: t('measurements.sleeve'), key: 'sleeve' },
    { label: t('measurements.arm'), key: 'arm' },
    { label: t('measurements.back'), key: 'back' },
  ];

  return (
    <div className="max-w-6xl mx-auto w-full">
      <header className="mb-12">
        <h1 className="text-5xl font-extrabold text-on-background tracking-tighter mb-2">{t('add_customer.title')}</h1>
        <p className="text-on-surface-variant text-lg">{t('add_customer.sub')}</p>
      </header>

      <div className="space-y-16">
        {/* Basic Info Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <div className="group relative">
              <label className="block text-sm font-bold text-primary mb-2 tracking-wide uppercase">{t('add_customer.full_name')}</label>
              <input 
                className="w-full p-6 text-2xl bg-surface-container-highest border-0 border-b-2 border-transparent focus:ring-0 focus:bg-surface-container-lowest focus:border-primary transition-all duration-300 placeholder:text-outline-variant" 
                placeholder="e.g. Karwan Ahmed" 
                type="text"
              />
            </div>
            <div className="group relative">
              <label className="block text-sm font-bold text-primary mb-2 tracking-wide uppercase">{t('add_customer.phone')}</label>
              <input 
                className="w-full p-6 text-2xl bg-surface-container-highest border-0 border-b-2 border-transparent focus:ring-0 focus:bg-surface-container-lowest focus:border-primary transition-all duration-300 placeholder:text-outline-variant" 
                placeholder="+964 --- --- ----" 
                type="tel"
              />
            </div>
          </div>
          <div className="bg-surface-container rounded-xl p-8 flex flex-col justify-center items-center text-center">
            <div className="w-24 h-24 bg-surface-container-low rounded-full flex items-center justify-center mb-4 border-2 border-dashed border-outline-variant">
              <span className="material-symbols-outlined text-4xl text-outline">add_a_photo</span>
            </div>
            <p className="text-sm text-on-surface-variant">{t('add_customer.photo_desc')}</p>
          </div>
        </div>

        {/* Measurements Section */}
        <div>
          <div className="flex items-baseline gap-4 mb-8">
            <h2 className="text-3xl font-bold text-on-background">{t('add_customer.measurements')}</h2>
            <span className="h-px flex-1 bg-surface-container-high"></span>
            <span className="text-sm font-medium text-on-surface-variant uppercase tracking-widest">{t('add_customer.unit_info')}</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
            {measurementFields.map((field) => (
              <div key={field.key} className="space-y-3">
                <div className="flex justify-between items-end">
                  <label className="text-sm font-bold text-primary uppercase">{field.label}</label>
                </div>
                <input className="w-full p-5 text-xl bg-surface-container-highest border-0 border-b-2 border-transparent focus:ring-0 focus:bg-surface-container-lowest focus:border-primary transition-all" type="text"/>
              </div>
            ))}
            <div className="space-y-3">
              <div className="flex justify-between items-end">
                <label className="text-sm font-bold text-primary uppercase">{t('measurements.fit_type')}</label>
              </div>
              <select className="w-full p-5 text-xl bg-surface-container-highest border-0 border-b-2 border-transparent focus:ring-0 focus:bg-surface-container-lowest focus:border-primary transition-all appearance-none cursor-pointer">
                <option>{t('measurements.classic')}</option>
                <option>{t('measurements.slim')}</option>
                <option>{t('measurements.relaxed')}</option>
              </select>
            </div>
          </div>
        </div>

        {/* Additional Notes */}
        <div className="bg-surface-container-low p-8 rounded-xl">
          <label className="block text-sm font-bold text-primary mb-4 tracking-wide uppercase">{t('add_customer.notes')}</label>
          <textarea 
            className="w-full p-6 text-lg bg-surface-container-lowest border-0 focus:ring-0 transition-all placeholder:text-outline-variant min-h-[150px]" 
            placeholder={t('add_customer.notes_placeholder')}
          ></textarea>
        </div>

        {/* Action Footer */}
        <div className="flex justify-between items-center pt-8 border-t border-surface-container-high">
          <button 
            type="button"
            onClick={() => navigate('/search')}
            className="text-on-surface-variant font-bold uppercase tracking-widest hover:text-primary transition-colors flex items-center gap-2"
          >
            <span className="material-symbols-outlined">close</span>
            {t('add_customer.cancel')}
          </button>
          <button 
            onClick={handleSave}
            className="px-12 py-5 bg-gradient-to-br from-primary to-primary-dim text-on-primary text-xl font-bold rounded shadow-lg hover:opacity-90 active:scale-95 transition-all flex items-center gap-3"
          >
            <span className="material-symbols-outlined">save</span>
            {t('add_customer.save')}
          </button>
        </div>
      </div>

    </div>
  );
};

export default AddCustomer;
