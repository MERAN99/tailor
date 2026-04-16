import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Register = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    navigate('/login');
  };

  const isRtl = i18n.language === 'ckb';

  return (
    <div className="bg-surface text-on-surface flex min-h-screen overflow-hidden">
      <div className={`hidden lg:flex lg:w-1/2 relative bg-surface-container-low overflow-hidden ${isRtl ? 'order-2' : ''}`}>
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover grayscale opacity-30 mix-blend-multiply" 
            alt="Tailoring atelier"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3CYy8fZOS-pETI5n8vGsqdqQp3-LET0OmPcPNfRDdfQs7HV5_OohuDYqMd7TooUt0_b07iubb5Eox99dbwnJcUDkZEDTCo6N6Ypmdyfml13b-0qPI2SZdA2b3Rbe8KB5z2ImP15S8_hEvH-1VgfZjsfEleqIdi5Bh3nviV_dtQ5HXqS3CR4Lf5O1RJZ2JrRAXFGWVf4Az-WH-4fFHtVeRo2s6-k_Ljgg03Kvz592YjSfhbzZK4iJGRv5kF6ePCov0TLFCJeAdtg"
          />
        </div>
        <div className="relative z-10 flex flex-col justify-between p-16 w-full">
          <div>
            <h1 className="text-primary font-black text-3xl tracking-tight">TailorMaster</h1>
          </div>
          <div className="max-w-md">
            <p className="text-4xl font-bold leading-tight tracking-tighter text-on-background mb-6">
              {t('register.title')}
            </p>
            <div className={`flex items-center ${isRtl ? 'space-x-reverse' : ''} space-x-4`}>
              <div className="h-px w-12 bg-primary"></div>
              <p className="text-on-surface-variant font-medium tracking-wide uppercase text-xs">Est. MMXXIV</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center px-6 md:px-24 bg-surface">
        <div className="w-full max-sm:max-w-xs max-w-sm">
          <div className="mb-12">
            <h2 className="text-3xl font-black text-on-background tracking-tighter mb-2">{t('register.welcome')}</h2>
            <p className="text-on-surface-variant font-medium text-sm">{t('register.welcome_sub')}</p>
          </div>
          <form className="space-y-8" onSubmit={handleRegister}>
            <div className="space-y-6">
              <div className="relative group">
                <label className="block text-primary text-xs font-bold uppercase tracking-widest mb-2 px-1">{t('register.full_name')}</label>
                <input 
                  className="w-full bg-surface-container-highest border-none focus:ring-0 focus:bg-surface-container-lowest text-on-background py-5 px-6 transition-all duration-300 border-b-2 border-transparent focus:border-primary placeholder:text-outline-variant" 
                  placeholder="Arthur Pendragon" 
                  type="text"
                />
              </div>
              <div className="relative group">
                <label className="block text-primary text-xs font-bold uppercase tracking-widest mb-2 px-1">{t('register.email')}</label>
                <input 
                  className="w-full bg-surface-container-highest border-none focus:ring-0 focus:bg-surface-container-lowest text-on-background py-5 px-6 transition-all duration-300 border-b-2 border-transparent focus:border-primary placeholder:text-outline-variant" 
                  placeholder="master@tailor.com" 
                  type="email"
                />
              </div>
              <div className="relative group">
                <label className="block text-primary text-xs font-bold uppercase tracking-widest mb-2 px-1">{t('register.password')}</label>
                <input 
                  className="w-full bg-surface-container-highest border-none focus:ring-0 focus:bg-surface-container-lowest text-on-background py-5 px-6 transition-all duration-300 border-b-2 border-transparent focus:border-primary placeholder:text-outline-variant" 
                  placeholder="••••••••" 
                  type="password"
                />
              </div>
            </div>
            <div className="pt-4">
              <button 
                className="w-full bg-primary hover:bg-primary-dim text-on-primary font-bold py-5 px-8 rounded-md transition-all duration-300 active:scale-95 shadow-lg shadow-primary/10" 
                type="submit"
              >
                {t('register.button')}
              </button>
            </div>
          </form>
          <div className="mt-12 text-center">
            <p className="text-on-surface-variant font-medium text-sm">
              {t('register.have_account')} 
              <Link to="/login" className="text-primary font-bold ml-1 rtl:mr-1 hover:underline underline-offset-4 decoration-2 decoration-primary-container">
                {t('register.login')}
              </Link>
            </p>
          </div>
          <div className="mt-24 flex justify-between items-center opacity-30">
            <div className={`flex ${isRtl ? 'space-x-reverse' : ''} space-x-6`}>
              <span className="material-symbols-outlined text-on-surface-variant text-xl">straighten</span>
              <span className="material-symbols-outlined text-on-surface-variant text-xl">texture</span>
              <span className="material-symbols-outlined text-on-surface-variant text-xl">content_cut</span>
            </div>
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant">
              Precision Utility
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
