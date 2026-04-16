import React from 'react';
import { useTranslation } from 'react-i18next';

const MeasuredMinimal = () => {
  const { t } = useTranslation();

  const measurements = [
    { label: t('measurements.neck'), value: '42.5', unit: 'cm' },
    { label: t('measurements.chest'), value: '104.0', unit: 'cm' },
    { label: t('measurements.waist'), value: '92.5', unit: 'cm' },
    { label: t('measurements.shoulder'), value: '48.0', unit: 'cm' },
    { label: t('measurements.sleeve'), value: '64.5', unit: 'cm' },
    { label: t('measurements.length'), value: '78.0', unit: 'cm' },
  ];

  return (
    <div className="max-w-4xl mx-auto w-full py-12">
      <header className="mb-20 text-center">
        <h1 className="text-5xl font-black tracking-tighter text-on-background mb-4">Precision Patterns</h1>
        <p className="text-on-surface-variant text-lg max-w-lg mx-auto italic">
          "The beauty of a garment lies in the precision of the invisible lines."
        </p>
      </header>

      <section className="bg-surface-container-low p-12 rounded-xl mb-16">
        <div className="flex items-center justify-between mb-8 border-b-0">
          <h2 className="text-2xl font-bold text-primary">{t('add_customer.measurements')}</h2>
          <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Technical Data</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {measurements.map((m) => (
            <div key={m.label} className="flex justify-between items-end border-b-2 border-outline-variant/10 pb-4 group hover:border-primary transition-colors">
              <span className="text-sm font-bold text-on-surface-variant uppercase tracking-wide group-hover:text-primary transition-colors">
                {m.label}
              </span>
              <span className="text-3xl font-mono font-bold text-on-background">
                {m.value} <span className="text-sm font-sans font-medium text-outline">/ {m.unit}</span>
              </span>
            </div>
          ))}
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 bg-surface-container-highest p-10 rounded-lg">
          <h3 className="text-lg font-bold text-primary uppercase mb-6 tracking-widest">Fabric Analysis</h3>
          <p className="text-on-surface-variant leading-relaxed text-lg">
            Our proprietary measurement system ensures a 0.5mm variance tolerance. 
            Each pattern is digitally drafted before the first cut is made. 
            This is the intersection of tradition and technology.
          </p>
        </div>
        <div className="bg-primary p-10 rounded-lg flex flex-col justify-between text-on-primary">
          <span className="material-symbols-outlined text-4xl">architecture</span>
          <div>
            <h4 className="font-black text-2xl leading-none mb-1">TM-Bespoke</h4>
            <p className="text-xs opacity-70 uppercase tracking-widest font-bold">Utility Version 2.4.0</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeasuredMinimal;
