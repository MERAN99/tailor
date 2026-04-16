import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Login = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  const isRtl = i18n.language === 'ckb';

  return (
    <div className="bg-surface text-on-background min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-12 bg-surface-container-lowest overflow-hidden shadow-[0px_24px_48px_rgba(45,51,53,0.06)] border border-outline-variant/10">
        {/* Left Panel: Brand Imagery (Editorial Style) */}
        <div className="hidden md:flex md:col-span-7 relative flex-col justify-between p-12 bg-primary overflow-hidden">
          <div className="relative z-10">
            <span className="text-on-primary font-black text-2xl tracking-tight">TailorMaster</span>
          </div>
          <div className="relative z-10">
            <h1 className="text-on-primary text-5xl font-black leading-tight mb-6 tracking-tighter">{t('login.title')}</h1>
            <p className="text-primary-container text-lg max-w-md font-medium opacity-90 leading-relaxed">
              {t('login.sub')}
            </p>
          </div>
          <div className="absolute inset-0 z-0">
            <img 
              className="w-full h-full object-cover opacity-40 mix-blend-multiply" 
              alt="Close-up of a high-end bespoke navy suit jacket"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXkg8-wi7DJRWiZbeqttD9VV-w8iMAg6in-LpSJU_oeGqKRqlFJ80eK7SyTKM5SZD5tyLNp8_pJdIBWT_-zagLog_IUKVI-k0ARjvO9O0G1w9vBxnci_Eo95aOXmmwPWGqF8bX2kIqzKkyws92XoU9ooaHUV5i3nzvxAExbDRhAXP6sRxntXeV_tznI2wltuQUxGszZI5_Pe0OyHhSmnmN-30eB_yfz2MeMdPQbVGlso4qE6DBko4hguWJ8yjEDpsGFVHvDOYDAA"
            />
          </div>
          {/* Floating Decorative Element */}
          <div className={`absolute ${isRtl ? '-left-20' : '-right-20'} bottom-20 w-64 h-64 border-[1px] border-on-primary/10 rounded-full`}></div>
          <div className={`absolute ${isRtl ? '-left-10' : '-right-10'} bottom-10 w-64 h-64 border-[1px] border-on-primary/20 rounded-full`}></div>
        </div>

        {/* Right Panel: Login Form */}
        <div className="col-span-1 md:col-span-5 flex flex-col justify-center p-8 md:p-16 lg:p-20 bg-surface-container-lowest">
          {/* Mobile Header */}
          <div className="md:hidden mb-12">
            <span className="text-primary font-black text-xl tracking-tight">TailorMaster</span>
          </div>
          <div className="mb-12">
            <h2 className="text-3xl font-black text-on-background tracking-tighter mb-2">{t('login.welcome')}</h2>
            <p className="text-on-surface-variant text-sm font-medium">{t('login.welcome_sub')}</p>
          </div>
          <form className="space-y-8" onSubmit={handleLogin}>
            {/* Email Field */}
            <div className="space-y-2">
              <label className="text-primary font-bold text-xs tracking-widest uppercase" htmlFor="email">{t('login.email')}</label>
              <div className="relative group">
                <input 
                  className="w-full bg-surface-container-highest border-none p-4 text-on-background placeholder:text-outline/50 focus:ring-0 focus:bg-surface-container-lowest transition-all border-b-2 border-transparent focus:border-primary" 
                  id="email" 
                  name="email" 
                  placeholder="master@tailormaster.com" 
                  type="email"
                />
              </div>
            </div>
            {/* Password Field */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-primary font-bold text-xs tracking-widest uppercase" htmlFor="password">{t('login.password')}</label>
                <a className="text-on-surface-variant hover:text-primary text-xs font-semibold transition-colors" href="#">{t('login.forgot')}</a>
              </div>
              <div className="relative group">
                <input 
                  className="w-full bg-surface-container-highest border-none p-4 text-on-background placeholder:text-outline/50 focus:ring-0 focus:bg-surface-container-lowest transition-all border-b-2 border-transparent focus:border-primary" 
                  id="password" 
                  name="password" 
                  placeholder="••••••••" 
                  type="password"
                />
              </div>
            </div>
            {/* Remember Me */}
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <input className="w-4 h-4 rounded-sm border-outline-variant text-primary focus:ring-primary/20" id="remember" type="checkbox"/>
              <label className="text-on-surface-variant text-xs font-medium" htmlFor="remember">{t('login.remember')}</label>
            </div>
            {/* Primary Action */}
            <div className="pt-4">
              <button className="w-full bg-gradient-to-br from-primary to-primary-dim text-on-primary py-4 px-6 font-bold text-sm tracking-widest uppercase hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-2" type="submit">
                <span>{t('login.button')}</span>
                <span className="material-symbols-outlined text-base rtl:rotate-180">arrow_forward</span>
              </button>
            </div>
          </form>
          <div className="mt-12 text-center">
            <p className="text-on-surface-variant text-xs font-medium">
              {t('login.new_user')} 
              <Link to="/register" className="text-primary font-bold hover:underline ml-1 rtl:mr-1">{t('login.create_account')}</Link>
            </p>
          </div>
          {/* Technical/Utility Footer */}
          <div className="mt-auto pt-12 flex items-center justify-between border-t border-surface-variant/50">
            <span className="text-[10px] text-outline font-medium tracking-tighter">v2.4.0-Bespoke</span>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <span className="material-symbols-outlined text-outline text-sm">security</span>
              <span className="material-symbols-outlined text-outline text-sm">language</span>
            </div>
          </div>
        </div>
      </div>
      {/* Background Decoration (Subtle) */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
        <div className={`absolute top-[-10%] ${isRtl ? 'left-[-5%]' : 'right-[-5%]'} w-[40%] h-[60%] bg-secondary-container/20 blur-[120px] rounded-full`}></div>
        <div className={`absolute bottom-[-10%] ${isRtl ? 'right-[-5%]' : 'left-[-5%]'} w-[40%] h-[60%] bg-primary-container/10 blur-[120px] rounded-full`}></div>
      </div>
    </div>
  );
};

export default Login;
