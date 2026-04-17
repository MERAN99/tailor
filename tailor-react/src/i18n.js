import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "nav": {
        "dashboard": "Dashboard",
        "clients": "Clients",
        "add_client": "Add Client",
        "messages": "Messages",
        "logout": "Logout",
        "help": "Help",
        "quick_find": "Quick find...",
        "privacy": "Privacy",
        "docs": "Documentation",
        "support": "Support"
      },
      "dashboard": {
        "welcome": "Master's Workspace",
        "sub": "Seamlessly manage your bespoke creations. Start by selecting an action from your specialized utility patterns below.",
        "add_customer": "Add Customer",
        "add_customer_desc": "Capture precise measurements, fabric preferences, and initial sketches for a new bespoke journey.",
        "search_customers": "Search Customers",
        "search_customers_desc": "Retrieve historical patterns, update measurements, or check current order status across your clientele.",
        "today_fittings": "Today's Fittings",
        "fittings_desc": "Active sessions scheduled for this afternoon.",
        "view_schedule": "View Schedule",
        "create_profile": "Create New Profile",
        "browse_directory": "Browse Directory"
      },
      "search": {
        "title": "Customer Search",
        "sub": "Manage your bespoke clients and their measurements.",
        "placeholder": "Search by name or phone number...",
        "not_seen": "Don't see your client? Start a new measurement profile.",
        "register_new": "Register New Customer"
      },
      "add_customer": {
        "title": "New Profile",
        "sub": "Create a bespoke measurement profile for your customer.",
        "full_name": "Full Name",
        "phone": "Phone Number",
        "measurements": "Measurements",
        "unit_info": "Inches/CM",
        "notes": "Additional Notes & Style Requirements",
        "notes_placeholder": "Special fabric handling, pocket styles, or vent preferences...",
        "save": "Save Customer",
        "cancel": "Cancel",
        "photo_desc": "Attach customer photo or fabric reference"
      },
      "measurements": {
        "neck": "Neck",
        "chest": "Chest",
        "waist": "Waist",
        "shoulder": "Shoulder",
        "sleeve": "Sleeve Length",
        "arm": "Arm Width",
        "back": "Back Length",
        "hip": "Hip",
        "length": "Length",
        "fit_type": "Fit Type",
        "classic": "Classic",
        "slim": "Slim Fit",
        "relaxed": "Relaxed"
      },
      "login": {
        "title": "Precision in Every Stitch.",
        "sub": "Access your bespoke dashboard and manage patterns, measurements, and staff with surgical precision.",
        "welcome": "Welcome Back",
        "welcome_sub": "Continue to your master pattern",
        "email": "Email",
        "password": "Password",
        "forgot": "Forgot?",
        "remember": "Keep me logged in",
        "button": "Login",
        "new_user": "New to the shop?",
        "create_account": "Create an account"
      },
      "register": {
        "title": "Start Your Legacy.",
        "sub": "Create a master account to begin managing your bespoke atelier and apprentice network.",
        "welcome": "Join the Elite",
        "welcome_sub": "Establish your pattern registry",
        "full_name": "Atelier Name / Full Name",
        "email": "Email Address",
        "password": "Create Password",
        "confirm": "Confirm Password",
        "button": "Create Account",
        "have_account": "Already have an account?",
        "login": "Join the elite circle"
      }
    }
  },
  ckb: {
    translation: {
      "nav": {
        "dashboard": "داشبۆرد",
        "clients": "کڕیارەکان",
        "add_client": "زیادکردنی کڕیار",
        "messages": "نامەکان",
        "logout": "چوونەدەرەوە",
        "help": "یارمەتی",
        "quick_find": "گەڕانی خێرا...",
        "privacy": "پاراستنی زانیاری",
        "docs": "بەڵگەنامەکان",
        "support": "پشتگیری"
      },
      "dashboard": {
        "welcome": "شوێنی کار",
        "sub": "بە ئاسانی کارەکانت بەڕێوەببەرە. لە خوارەوە دەست پێ بکە بە هەڵبژاردنی یەکێک لە کارەکان.",
        "add_customer": "زیادکردنی کڕیار",
        "add_customer_desc": "پێوانەکان و جۆری قوماش بۆ کڕیارێکی نوێ تۆمار بکە.",
        "search_customers": "گەڕان بۆ کڕیار",
        "search_customers_desc": "پێوانە کۆنەکان و دۆخی داواکارییەکان لێرە بدۆزەرەوە.",
        "today_fittings": "پێوانەکانی ئەمڕۆ",
        "fittings_desc": "ئەو کڕیارانەی ئەمڕۆ کاتیان هەیە.",
        "view_schedule": "خشتەی کاتەکان",
        "create_profile": "دروستکردنی پڕۆفایلی نوێ",
        "browse_directory": "گەڕان لە ناو لیستەکە"
      },
      "search": {
        "title": "گەڕان بۆ کڕیار",
        "sub": "کڕیارەکان و پێوانەکانیان لێرە بەڕێوەببەرە.",
        "placeholder": "بگەڕێ بەپێی ناو یان ژمارەی تەلەفۆن...",
        "not_seen": "کڕیارەکەت نابینی؟ لێرە کڕیارێکی نوێ تۆمار بکە.",
        "register_new": "تۆمارکردنی کڕیاری نوێ"
      },
      "add_customer": {
        "title": "پڕۆفایلی نوێ",
        "sub": "پڕۆفایلێکی نوێ بۆ پێوانەکانی کڕیار دروست بکە.",
        "full_name": "ناوی تەواو",
        "phone": "ژمارەی تەلەفۆن",
        "measurements": "پێوانەکان",
        "unit_info": "ئینج/سانتیمەتر",
        "notes": "تێبینی زیاتر و جۆری ستایل",
        "notes_placeholder": "تێبینی تایبەت لەسەر قوماش، جۆری گیرفان و هتد...",
        "save": "پاشەکەوتکردنی کڕیار",
        "cancel": "پاشگەزبوونەوە",
        "photo_desc": "وێنەی کڕیار یان جۆری قوماش لێرە دابنێ"
      },
      "measurements": {
        "neck": "مل",
        "chest": "سنگ",
        "waist": "ناوقەد",
        "shoulder": "شان",
        "sleeve": "درێژی قۆڵ",
        "arm": "پانی قۆڵ",
        "back": "درێژی پشت",
        "hip": "سمت",
        "length": "درێژی",
        "fit_type": "جۆری دورین",
        "classic": "کلاسیک",
        "slim": "تەسک (Slim)",
        "relaxed": "فراوان (Relaxed)"
      },
      "login": {
        "title": "وردی لە هەموو تەقەڵێکدا.",
        "sub": "بچۆ ناو داشبۆردەکەت و پێوانەکان و کارمەندەکانت بە وردی بەڕێوەببەرە.",
        "welcome": "بەخێربێیتەوە",
        "welcome_sub": "بەردەوام بە لەسەر کارەکانت",
        "email": "ئیمەیڵ",
        "password": "وشەی تێپەڕ",
        "forgot": "لەبیرت چووە؟",
        "remember": "بمێنمەوە لەناو هەژمارەکەمدا",
        "button": "چوونەژوورەوە",
        "new_user": "هەژمارت نییە؟",
        "create_account": "هەژمارێکی نوێ دروست بکە"
      },
      "register": {
        "title": "دەست بکە بە مێژووی خۆت.",
        "sub": "هەژمارێکی سەرەکی دروست بکە بۆ بەڕێوەبردنی کارگەکەت و شاگردەکانت.",
        "welcome": "ببە بە بەشێک لە ئێمە",
        "welcome_sub": "تۆمارکردنی کارەکەت",
        "full_name": "ناوی کارگە / ناوی تەواو",
        "email": "ناونیشانی ئیمەیڵ",
        "password": "وشەی تێپەڕی نوێ",
        "confirm": "دووبارەکردنەوەی وشەی تێپەڕ",
        "button": "دروستکردنی هەژمار",
        "have_account": "پێشتر هەژمارت هەبووە؟",
        "login": "بچۆ ناو هەژمارەکەت"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ckb',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
