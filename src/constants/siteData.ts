
export type Language = 'en' | 'hi';

export interface TranslatedText {
  en: string;
  hi: string;
}

export const navbarContent = {
  siteName: {
    en: "Cozy Cow Shelter",
    hi: "आरामदायक गाय आश्रय"
  },
  links: {
    home: {
      en: "Home",
      hi: "होम"
    },
    about: {
      en: "About Us",
      hi: "हमारे बारे में"
    },
    gallery: {
      en: "Gallery",
      hi: "गैलरी"
    },
    blog: {
      en: "Blog",
      hi: "ब्लॉग"
    },
    donate: {
      en: "Donate",
      hi: "दान करें"
    }
  },
  languageToggle: {
    en: "हिंदी",
    hi: "English"
  }
};

export const homeContent = {
  // Add translated content for the home page here
};

export const aboutContent = {
  // Add translated content for the about page here
};

export const galleryContent = {
  // Add translated content for the gallery page here
};

export const blogContent = {
  featuredPost: {
    id: '1',
    title: {
      en: 'The Hidden Intelligence of Cows: What Science Is Discovering',
      hi: 'गायों की छिपी हुई बुद्धिमत्ता: विज्ञान क्या खोज रहा है'
    },
    excerpt: {
      en: 'Recent studies are revealing that cows have complex emotional lives and cognitive abilities that rival those of many other mammals. In this article, we explore the fascinating research into bovine intelligence and what it means for how we should treat these gentle creatures.',
      hi: 'हाल के अध्ययन से पता चल रहा है कि गायों का जटिल भावनात्मक जीवन और संज्ञानात्मक क्षमताएं कई अन्य स्तनधारियों के समान हैं। इस लेख में, हम गौवंशीय बुद्धिमत्ता के बारे में आकर्षक शोध और इसका क्या मतलब है, इसके बारे में जानेंगे कि हमें इन सौम्य प्राणियों के साथ कैसे व्यवहार करना चाहिए।'
    },
    image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?auto=format&fit=crop&q=80',
    date: {
      en: 'June 15, 2023',
      hi: '15 जून, 2023'
    },
    author: {
      en: 'Dr. Emma Chen',
      hi: 'डॉ. एम्मा चेन'
    }
  },
  blogPosts: [
    {
      id: '2',
      title: {
        en: 'A Day in the Life: Caring for Sanctuary Cows',
        hi: 'जीवन में एक दिन: अभयारण्य गायों की देखभाल'
      },
      excerpt: {
        en: 'Ever wonder what goes into caring for our sanctuary residents? From morning feedings to evening tuck-ins, this post walks you through our daily routine.',
        hi: 'क्या आप कभी सोचते हैं कि हमारे अभयारण्य निवासियों की देखभाल में क्या होता है? सुबह के भोजन से लेकर शाम के आराम तक, यह पोस्ट आपको हमारी दैनिक दिनचर्या से अवगत कराती है।'
      },
      image: 'https://images.unsplash.com/photo-1529944618158-c5a0990d92d6?auto=format&fit=crop&q=80',
      date: {
        en: 'May 28, 2023',
        hi: '28 मई, 2023'
      },
      author: {
        en: 'Sarah Johnson',
        hi: 'सारा जॉनसन'
      }
    },
    {
      id: '3',
      title: {
        en: "Milo's Journey: From Dairy Farm to Sanctuary",
        hi: "मिलो की यात्रा: डेयरी फार्म से अभयारण्य तक"
      },
      excerpt: {
        en: 'This heartwarming story follows Milo, one of our youngest residents, from his rescue from a dairy farm to his new life at our sanctuary.',
        hi: 'यह दिल को छूने वाली कहानी मिलो, हमारे सबसे युवा निवासियों में से एक के बारे में है, उसके डेयरी फार्म से बचाव से लेकर हमारे अभयारण्य में उसके नए जीवन तक।'
      },
      image: 'https://images.unsplash.com/photo-1615272957558-527e556ef6db?auto=format&fit=crop&q=80',
      date: {
        en: 'April 10, 2023',
        hi: '10 अप्रैल, 2023'
      },
      author: {
        en: 'Michael Rodriguez',
        hi: 'माइकल रोड्रिगेज'
      }
    }
    // Add more blog posts with translations here
  ]
};

export const donateContent = {
  // Add translated content for the donate page here
};

export const images = {
  logo: {
    src: "/path/to/logo.png",
    alt: {
      en: "Cozy Cow Shelter Logo",
      hi: "आरामदायक गाय आश्रय लोगो"
    }
  },
  hero: {
    home: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?auto=format&fit=crop&q=80",
    about: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?auto=format&fit=crop&q=80",
    gallery: "https://images.unsplash.com/photo-1517022812141-23620dba5c23?auto=format&fit=crop&q=80",
    blog: "https://images.unsplash.com/photo-1600158331218-adf131984036?auto=format&fit=crop&q=80",
    donate: "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?auto=format&fit=crop&q=80"
  }
};
