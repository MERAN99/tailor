import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Register = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const isRtl = i18n.language === 'ckb';

  const handleRegister = (e) => {
    e.preventDefault();
    navigate('/login');
  };

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ckb' : 'en');
    document.documentElement.dir = i18n.language === 'en' ? 'ltr' : 'rtl';
    document.documentElement.lang = i18n.language === 'en' ? 'en' : 'ckb';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-tertiary-container/20 to-primary-container/30 flex items-center justify-center p-4" dir={isRtl ? 'rtl' : 'ltr'}>

      {/* Language Toggle */}
      <button
        onClick={toggleLanguage}
        className="fixed top-4 end-4 z-50 flex items-center gap-1.5 px-3 py-2 rounded-full bg-surface-container-lowest/90 backdrop-blur border border-outline-variant/30 text-xs font-bold text-on-surface-variant hover:text-primary hover:border-primary/40 transition-all shadow-sm"
      >
        <span className="material-symbols-outlined text-base">translate</span>
        {isRtl ? 'English' : 'کوردی'}
      </button>

      <div className="w-full max-w-4xl animate-slide-up">
        <div className="grid grid-cols-1 md:grid-cols-2 bg-surface-container-lowest rounded-2xl shadow-card-lg overflow-hidden border border-outline-variant/20">

          {/* ── Brand Panel ── */}
          <div className="hidden md:flex relative bg-gradient-to-br from-tertiary via-tertiary-dim to-[#047857] flex-col justify-between p-10 overflow-hidden">
            <div className="absolute -top-16 -end-16 w-56 h-56 rounded-full bg-white/5 border border-white/10" />
            <div className="absolute -bottom-10 -start-10 w-40 h-40 rounded-full bg-white/5 border border-white/10" />

            {/* Logo */}
            <div className="relative z-10 flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-white/20 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-lg">content_cut</span>
              </div>
              <span className="text-white font-black text-xl">TailorMaster</span>
            </div>

            {/* Text */}
            <div className="relative z-10">
              <h1 className="text-white text-4xl font-black leading-tight mb-4 tracking-tight">
                {t('register.title')}
              </h1>
              <p className="text-white/70 text-sm leading-relaxed max-w-xs">
                {t('register.sub')}
              </p>

              {/* Features */}
              <div className="mt-8 space-y-3">
                {[
                  { icon: 'straighten', text: isRtl ? 'بەڕێوەبردنی پێوانەکان' : 'Measurement Management' },
                  { icon: 'group', text: isRtl ? 'پرۆفایلی کڕیار' : 'Client Profiles' },
                  { icon: 'calendar_today', text: isRtl ? 'خشتەی کاتەکان' : 'Appointment Scheduling' },
                ].map((f) => (
                  <div key={f.text} className="flex items-center gap-3 text-white/80">
                    <div className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-sm">{f.icon}</span>
                    </div>
                    <span className="text-sm font-medium">{f.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Form Panel ── */}
          <div className="flex flex-col justify-center p-8 sm:p-10">
            {/* Mobile logo */}
            <div className="flex items-center gap-2 mb-8 md:hidden">
              <div className="w-8 h-8 rounded-lg bg-tertiary flex items-center justify-center">
                <span className="material-symbols-outlined text-on-tertiary text-base">content_cut</span>
              </div>
              <span className="font-black text-lg text-tertiary">TailorMaster</span>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-black text-on-background tracking-tight mb-1">
                {t('register.welcome')}
              </h2>
              <p className="text-on-surface-variant text-sm">{t('register.welcome_sub')}</p>
            </div>

            <form className="space-y-5" onSubmit={handleRegister}>
              {/* Full Name */}
              <div>
                <label className="block section-label mb-1.5" htmlFor="reg-name">
                  {t('register.full_name')}
                </label>
                <div className="relative">
                  <span className={`material-symbols-outlined absolute ${isRtl ? 'right-3' : 'left-3'} top-1/2 -translate-y-1/2 text-on-surface-variant/60 text-lg pointer-events-none`}>
                    storefront
                  </span>
                  <input
                    id="reg-name"
                    type="text"
                    placeholder={isRtl ? 'خیاطخانەی ئەحمەد' : 'Ahmed Tailoring'}
                    className={`input-field ${isRtl ? 'pr-10' : 'pl-10'}`}
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block section-label mb-1.5" htmlFor="reg-email">
                  {t('register.email')}
                </label>
                <div className="relative">
                  <span className={`material-symbols-outlined absolute ${isRtl ? 'right-3' : 'left-3'} top-1/2 -translate-y-1/2 text-on-surface-variant/60 text-lg pointer-events-none`}>
                    mail
                  </span>
                  <input
                    id="reg-email"
                    type="email"
                    placeholder="master@tailor.com"
                    className={`input-field ${isRtl ? 'pr-10' : 'pl-10'}`}
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block section-label mb-1.5" htmlFor="reg-password">
                  {t('register.password')}
                </label>
                <div className="relative">
                  <span className={`material-symbols-outlined absolute ${isRtl ? 'right-3' : 'left-3'} top-1/2 -translate-y-1/2 text-on-surface-variant/60 text-lg pointer-events-none`}>
                    lock
                  </span>
                  <input
                    id="reg-password"
                    type="password"
                    placeholder="••••••••"
                    className={`input-field ${isRtl ? 'pr-10' : 'pl-10'}`}
                  />
                </div>
              </div>

              {/* Submit */}
              <button type="submit" className="btn-primary w-full py-3.5 text-sm rounded-lg mt-2 bg-tertiary hover:bg-tertiary-dim shadow-md">
                <span className="material-symbols-outlined text-lg">how_to_reg</span>
                {t('register.button')}
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-on-surface-variant">
              {t('register.have_account')}{' '}
              <Link to="/login" className="text-primary font-bold hover:underline underline-offset-2">
                {t('register.login')}
              </Link>
            </p>

            <p className="mt-8 text-center text-[10px] text-outline/60">
              v2.4.0 • TailorMaster © 2024
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
