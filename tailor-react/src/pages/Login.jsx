import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Login = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const isRtl = i18n.language === 'ckb';

  useEffect(() => {
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language, isRtl]);

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ckb' : 'en');
  };

  return (
    <div
      className="min-h-screen bg-background flex items-center justify-center p-4"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      {/* Language toggle */}
      <button
        onClick={toggleLanguage}
        className="fixed top-4 end-4 z-50 flex items-center gap-1.5 px-3 py-2 rounded-full bg-surface-container-lowest border border-outline-variant/40 text-xs font-bold text-on-surface-variant hover:text-primary hover:border-primary/40 transition-all shadow-sm"
      >
        <span className="material-symbols-outlined text-base">translate</span>
        {isRtl ? 'English' : 'کوردی'}
      </button>

      {/* Card */}
      <div className="w-full max-w-sm bg-surface-container-lowest rounded-2xl shadow-card-lg border border-outline-variant/20 p-8 sm:p-10 animate-slide-up">

        {/* Logo */}
        <div className="flex items-center gap-2.5 mb-8">
          <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center shadow-md">
            <span className="material-symbols-outlined text-on-primary text-lg">straighten</span>
          </div>
          <span className="text-xl font-black gradient-text">TailorMaster</span>
        </div>

        {/* Heading */}
        <div className="mb-7">
          <h1 className="text-2xl font-black text-on-background tracking-tight mb-1">
            {t('login.welcome')}
          </h1>
          <p className="text-sm text-on-surface-variant">{t('login.welcome_sub')}</p>
        </div>

        {/* Form */}
        <form className="space-y-5" onSubmit={handleLogin}>
          {/* Email */}
          <div>
            <label className="block section-label mb-1.5" htmlFor="login-email">
              {t('login.email')}
            </label>
            <div className="relative">
              <span className={`material-symbols-outlined absolute ${isRtl ? 'right-3' : 'left-3'} top-1/2 -translate-y-1/2 text-on-surface-variant/50 text-lg pointer-events-none`}>
                mail
              </span>
              <input
                id="login-email"
                type="email"
                placeholder="master@tailormaster.com"
                className={`input-field ${isRtl ? 'pr-10' : 'pl-10'}`}
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="section-label" htmlFor="login-password">
                {t('login.password')}
              </label>
              <a href="#" className="text-xs font-semibold text-primary hover:underline">
                {t('login.forgot')}
              </a>
            </div>
            <div className="relative">
              <span className={`material-symbols-outlined absolute ${isRtl ? 'right-3' : 'left-3'} top-1/2 -translate-y-1/2 text-on-surface-variant/50 text-lg pointer-events-none`}>
                lock
              </span>
              <input
                id="login-password"
                type="password"
                placeholder="••••••••"
                className={`input-field ${isRtl ? 'pr-10' : 'pl-10'}`}
              />
            </div>
          </div>

          {/* Remember me */}
          <div className="flex items-center gap-2.5">
            <input
              id="login-remember"
              type="checkbox"
              className="w-4 h-4 rounded border-outline-variant text-primary focus:ring-primary/20 cursor-pointer"
            />
            <label htmlFor="login-remember" className="text-sm text-on-surface-variant cursor-pointer select-none">
              {t('login.remember')}
            </label>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="btn-primary w-full py-3.5 text-sm rounded-xl"
          >
            <span className="material-symbols-outlined text-lg">login</span>
            {t('login.button')}
          </button>
        </form>

        {/* Register link */}
        <p className="mt-6 text-center text-sm text-on-surface-variant">
          {t('login.new_user')}{' '}
          <Link to="/register" className="text-primary font-bold hover:underline underline-offset-2">
            {t('login.create_account')}
          </Link>
        </p>

        {/* Footer */}
        <p className="mt-8 text-center text-[10px] text-outline/50">
          v2.4.0 • TailorMaster © 2024
        </p>
      </div>
    </div>
  );
};

export default Login;
