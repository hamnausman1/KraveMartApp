import { useState, useEffect } from 'react';
import svgPaths from '../imports/svg-7nfdeea9xv';
import imgImage1 from "figma:asset/e2e06a9e7dd6f12d8dec5c7cce0f96d75cdac16f.png";
import imgImage2 from "figma:asset/86af9e1cd21eb9f2c0fcaaf5b2d58f0c9bb8e2d4.png";
import imgImage8 from "figma:asset/a2e96c0cdc74e5e7f9b31068a3a9de15f6f68c9c.png";
import imgImage9 from "figma:asset/3b56ed3cd3f0f1b9c05231d1a6aa3b82d5c3a7e4.png";
import imgImage10 from "figma:asset/a46ef0f3ee948fff800e94a29f4bfff9e3da0c87.png";
import imgImage32 from "figma:asset/d1a81c329997884332855549bf84957646c3655b.png";
import imgImage46 from "figma:asset/1d0a3a59ecca4f8f1d8962e20e01c7b47ebe4d74.png";
import { useLanguage } from '../contexts/LanguageContext';
import { categories as categoriesData, Category } from '../data/categories';
import { brands } from '../data/brands';
import { speak } from '../utils/textToSpeech';
import BottomNavigation from './BottomNavigation';

interface HomeScreenProps {
  onCategoryClick: (categoryName: string) => void;
  onCategoriesClick: () => void;
  onBrandsClick?: () => void;
  onBrandClick?: (brandName: string) => void; // Added brand click handler
  onLocationClick: () => void;
  selectedAddress: string;
  onNavigateCart?: () => void;
  onNavigateNotifications?: () => void;
  onNavigateAccount?: () => void;
  onNavigateSearch?: () => void;
}

// Promotional banners data
const banners = [
  {
    id: 1,
    title: 'AVAIL',
    subtitle: '20% OFF',
    color: '#c6d7ae',
    description: 'On all fresh fruits & vegetables',
  },
  {
    id: 2,
    title: 'FREE',
    subtitle: 'DELIVERY',
    color: '#f9c5d1',
    description: 'On orders above PKR 1999',
  },
  {
    id: 3,
    title: 'BUY 1',
    subtitle: 'GET 1',
    color: '#ffd9a8',
    description: 'On selected dairy products',
  },
  {
    id: 4,
    title: 'SAVE',
    subtitle: '30%',
    color: '#b8d4f1',
    description: 'On household essentials',
  },
];

function Chevron() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Chevron">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Chevron">
          <circle cx="10" cy="10" fill="var(--fill-0, #F5F5F5)" id="Container" r="10" />
          <g id="Icon/Chevron">
            <path d={svgPaths.p3c73f180} fill="var(--fill-0, black)" id="chevron_right_slim" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Search() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="search">
          <path d={svgPaths.p19568f00} id="Vector" stroke="var(--stroke-0, #828282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2614b00} id="Vector_2" stroke="var(--stroke-0, #828282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Search1({ onClick, placeholder }: { onClick?: () => void; placeholder: string }) {
  return (
    <button 
      onClick={onClick}
      className="absolute bg-neutral-100 box-border content-stretch flex gap-[12px] h-[40px] items-center left-[16px] pl-[12px] pr-[16px] py-[8px] rounded-[8px] top-[122px] w-[343px] cursor-pointer border-none" 
      data-name="Search"
    >
      <Search />
      <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#828282] text-[16px] text-nowrap">{placeholder}</p>
    </button>
  );
}

function Battery() {
  return (
    <div className="absolute inset-[39.39%_3.82%_34.85%_89.69%]" data-name="Battery">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 12">
        <g id="Battery">
          <rect height="10.3333" id="Border" opacity="0.35" rx="2.16667" stroke="var(--stroke-0, black)" width="21" x="0.5" y="0.5" />
          <path d={svgPaths.p9ed9280} fill="var(--fill-0, black)" id="Cap" opacity="0.4" />
          <rect fill="var(--fill-0, black)" height="7.33333" id="Capacity" rx="1.33333" width="18" x="2" y="2" />
        </g>
      </svg>
    </div>
  );
}

function TimeStyle() {
  return (
    <div className="absolute inset-[15.91%_80%_36.36%_5.6%]" data-name="Time Style">
      <p className="absolute font-['SF_Pro_Text:Semibold',sans-serif] leading-[20px] left-0 not-italic right-0 text-[15px] text-black text-center top-[calc(50%-4.5px)] tracking-[-0.24px]">9:41</p>
    </div>
  );
}

function BarsStatusBarIPhoneLight() {
  return (
    <div className="absolute bg-[#ffd037] inset-[-0.37%_0.53%_94.95%_-0.53%]" data-name="Bars / Status Bar / iPhone / Light">
      <Battery />
      <div className="absolute inset-[39.39%_11.64%_35.61%_84.27%]" data-name="Wifi">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 11">
          <path d={svgPaths.p39712400} fill="var(--fill-0, black)" id="Wifi" />
        </svg>
      </div>
      <div className="absolute inset-[40.15%_17.07%_35.61%_78.4%]" data-name="Cellular Connection">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 11">
          <path d={svgPaths.p26d17600} fill="var(--fill-0, black)" id="Cellular Connection" />
        </svg>
      </div>
      <TimeStyle />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-0 top-0">
      <div className="absolute bg-white inset-0 rounded-tl-[20px] rounded-tr-[20px] shadow-[0px_2px_7px_0px_rgba(0,0,0,0.24)]" data-name="Rectangle" />
    </div>
  );
}

function BarsHomeIndicatorIPhoneLightPortrait() {
  return (
    <div className="absolute bottom-0 left-[32.53%] right-[31.73%] top-[72.36%]" data-name="Bars / Home Indicator / iPhone / Light - Portrait">
      <div className="absolute bg-black bottom-[12.07px] h-[5px] left-1/2 rounded-[100px] translate-x-[-50%] w-[134px]" data-name="Home Indicator" />
    </div>
  );
}

function Navbar() {
  return (
    <div className="absolute h-[116px] left-[2px] top-[700px] w-[375px]" data-name="navbar">
      <Group2 />
      <BarsHomeIndicatorIPhoneLightPortrait />
    </div>
  );
}

function IconTabHomeFill() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon_Tab/Home_Fill">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon_Tab/Home_Fill">
          <path clipRule="evenodd" d={svgPaths.pee438f0} fill="var(--fill-0, black)" fillRule="evenodd" id="home_fill" />
        </g>
      </svg>
    </div>
  );
}

function TabBarItem() {
  return (
    <div className="absolute box-border content-stretch flex gap-[10px] items-start left-[calc(50%-149.5px)] pb-[8px] pt-[12px] px-[26px] top-[2px] translate-x-[-50%]" data-name="Tab Bar Item">
      <IconTabHomeFill />
    </div>
  );
}

function IconmonstrShoppingCart({ onClick }: { onClick?: () => void }) {
  return (
    <button onClick={onClick} className="relative shrink-0 size-[24px] cursor-pointer bg-transparent border-none p-0" data-name="iconmonstr-shopping-cart-2 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="iconmonstr-shopping-cart-2 1">
          <path d={svgPaths.p3de6f800} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </button>
  );
}

function TabBarItem1({ onClick }: { onClick?: () => void }) {
  return (
    <div className="absolute box-border content-stretch flex gap-[10px] items-start left-[calc(50%+0.5px)] opacity-40 pb-[8px] pt-[12px] px-[26px] top-0 translate-x-[-50%]" data-name="Tab Bar Item">
      <IconmonstrShoppingCart onClick={onClick} />
    </div>
  );
}

function Search2({ onClick }: { onClick?: () => void }) {
  return (
    <button onClick={onClick} className="absolute inset-[27.27%_66.67%_18.18%_26.93%] cursor-pointer bg-transparent border-none p-0" data-name="search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="search" opacity="0.56">
          <path d={svgPaths.pc423380} fill="var(--fill-0, #1D1B20)" id="icon" />
        </g>
      </svg>
    </button>
  );
}

function Icon3PtBell({ onClick }: { onClick?: () => void }) {
  return (
    <button onClick={onClick} className="relative shrink-0 size-[24px] cursor-pointer bg-transparent border-none p-0" data-name="Icon_3pt/Bell">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon_3pt/Bell">
          <path d={svgPaths.p27eac080} fill="var(--fill-0, black)" id="bell" />
        </g>
      </svg>
    </button>
  );
}

function TabBarItem2({ onClick }: { onClick?: () => void }) {
  return (
    <div className="absolute box-border content-stretch flex gap-[10px] items-start left-[calc(50%+75.5px)] opacity-[0.32] pb-[8px] pt-[12px] px-[26px] top-0 translate-x-[-50%]" data-name="Tab Bar Item">
      <Icon3PtBell onClick={onClick} />
    </div>
  );
}

function IconPerson({ onClick }: { onClick?: () => void }) {
  return (
    <button onClick={onClick} className="relative shrink-0 size-[24px] cursor-pointer bg-transparent border-none p-0" data-name="Icon/Person">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon/Person">
          <path d={svgPaths.p3d834a00} fill="var(--fill-0, black)" id="person" />
        </g>
      </svg>
    </button>
  );
}

function TabBarItem3({ onClick }: { onClick?: () => void }) {
  return (
    <div className="absolute box-border content-stretch flex gap-[10px] items-start left-[calc(50%+150.5px)] opacity-[0.24] pb-[8px] pt-[12px] px-[26px] top-0 translate-x-[-50%]" data-name="Tab Bar Item">
      <IconPerson onClick={onClick} />
    </div>
  );
}

function Tabs({ onNavigateCart, onNavigateNotifications, onNavigateAccount, onNavigateSearch }: { onNavigateCart?: () => void; onNavigateNotifications?: () => void; onNavigateAccount?: () => void; onNavigateSearch?: () => void }) {
  return (
    <div className="absolute h-[44px] left-[2px] overflow-clip right-[-2px] top-[719px]" data-name="Tabs">
      <TabBarItem />
      <TabBarItem1 onClick={onNavigateCart} />
      <Search2 onClick={onNavigateSearch} />
      <TabBarItem2 onClick={onNavigateNotifications} />
      <TabBarItem3 onClick={onNavigateAccount} />
    </div>
  );
}

function Menu() {
  return (
    <div className="absolute left-[18px] size-[54px] top-[718px]" data-name="menu">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54 54">
        <g id="menu">
          <rect fill="white" height="54" width="54" />
          <circle cx="27" cy="27" fill="var(--fill-0, #F37A20)" id="Ellipse 18" r="27" />
          <g id="action/home_24px">
            <path clipRule="evenodd" d={svgPaths.p35ff0100} fill="var(--fill-0, white)" fillRule="evenodd" id="icon/action/home_24px" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[50px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 50">
        <g id="Icon">
          <path d={svgPaths.p3fab4980} fill="var(--fill-0, black)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function StateLayer() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
      <Icon />
    </div>
  );
}

function Content() {
  return (
    <div className="absolute bg-[#ffd037] box-border content-stretch flex flex-col items-center justify-center left-[280px] overflow-clip rounded-[100px] shadow-[0px_4px_5px_5px_rgba(0,0,0,0.25)] size-[80px] top-[606px]" data-name="Content">
      <StateLayer />
    </div>
  );
}

function Group3() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Chevron">
          <circle cx="10" cy="10" fill="var(--fill-0, #F5F5F5)" id="Container" r="10" />
          <g id="Icon/Chevron">
            <path d={svgPaths.p3c73f180} fill="var(--fill-0, black)" id="chevron_right_slim" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Header() {
  const { t } = useLanguage();
  
  return (
    <div className="absolute box-border content-stretch flex gap-[10px] items-center left-0 overflow-clip px-[16px] py-[8px] top-[535px] w-[375px]" data-name="Header">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black text-nowrap tracking-[-0.32px]">
        <p className="leading-[1.4] whitespace-pre">{t('shopByBrand')}</p>
      </div>
      <Group3 />
      <div className="relative shrink-0 size-[16px]" data-name="image 31">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage32} />
      </div>
    </div>
  );
}

function Info() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Info">
      <div className="-webkit-box flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-black w-full">
        <p className="leading-[1.4]">Unilever</p>
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[180px] items-start justify-center overflow-clip relative shrink-0 w-[131px]" data-name="Card">
      <div className="relative shrink-0 size-[131px]" data-name="image 8">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage8} />
      </div>
      <Info />
    </div>
  );
}

function Info1() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Info">
      <div className="-webkit-box flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-black w-full">
        <p className="leading-[1.4]">Kolson</p>
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start justify-center overflow-clip relative shrink-0" data-name="Card">
      <div className="h-[153px] relative shrink-0 w-[149px]" data-name="image 9">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[142.48%] left-[-21.82%] max-w-none top-[-22.12%] w-[146.36%]" src={imgImage9} />
        </div>
      </div>
      <Info1 />
    </div>
  );
}

function Carousel1() {
  return (
    <div className="absolute box-border content-stretch flex gap-[12px] items-center left-0 px-[16px] py-[8px] top-[562px]" data-name="Carousel">
      <Card />
      <Card1 />
      <div className="relative shrink-0 size-[155px]" data-name="image 10">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage10} />
        </div>
      </div>
    </div>
  );
}

function Row1({ onBrandsClick, onBrandsSpeakerClick, onBrandClick }: { onBrandsClick: () => void; onBrandsSpeakerClick: () => void; onBrandClick?: (brandName: string) => void }) {
  const { t, language } = useLanguage();
  
  return (
    <div className="absolute left-0 top-[535px] w-[375px]" data-name="Row">
      {/* Header with Title, Arrow, and Speaker */}
      <div className="box-border content-stretch flex gap-[10px] items-center overflow-clip px-[16px] py-[8px]">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black text-nowrap tracking-[-0.32px]">
          <p className="leading-[1.4] whitespace-pre">{t('shopByBrand')}</p>
        </div>
        <button 
          onClick={onBrandsSpeakerClick}
          className="relative shrink-0 size-[16px] cursor-pointer bg-transparent border-none p-0"
          aria-label="Read shop by brand text"
        >
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage32} />
        </button>
        <button onClick={onBrandsClick} className="cursor-pointer bg-transparent border-none p-0">
          <Group3 />
        </button>
      </div>

      {/* Scrollable Brand Carousel */}
      <div className="relative mt-2 overflow-hidden">
        <div 
          className="flex gap-3 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-4 pb-2"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {brands && brands.length > 0 && brands.map((brand) => (
            <button
              key={brand.id}
              onClick={() => onBrandClick?.(brand.name)}
              className="flex flex-col items-center gap-2 min-w-[120px] shrink-0 snap-center cursor-pointer bg-transparent border-none p-0"
            >
              <div className="w-[120px] h-[120px] flex items-center justify-center rounded-lg bg-gray-50 overflow-hidden border border-gray-200">
                <img 
                  src={brand.image} 
                  alt={brand.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-['Inter:Regular',sans-serif] text-[14px] text-black text-center leading-tight max-w-[120px]">
                {language === 'ur' ? brand.nameUrdu : brand.name}
              </p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function Chevron1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Chevron">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Chevron">
          <circle cx="10" cy="10" fill="var(--fill-0, #F5F5F5)" id="Container" r="10" />
          <g id="Icon/Chevron">
            <path d={svgPaths.p3c73f180} fill="var(--fill-0, black)" id="chevron_right_slim" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Title1() {
  const { t } = useLanguage();
  
  return (
    <div className="absolute box-border content-stretch flex gap-[10px] items-center left-0 overflow-clip px-[16px] py-[8px] top-[767px] w-[375px]" data-name="Title">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black text-nowrap tracking-[-0.32px]">
        <p className="leading-[1.4] whitespace-pre">{t('title')}</p>
      </div>
      <Chevron1 />
    </div>
  );
}

function Carousel2() {
  return (
    <div className="absolute box-border content-stretch flex gap-[12px] items-center left-0 px-[16px] py-[8px] top-[805px]" data-name="Carousel">
      <div className="relative rounded-[8px] shrink-0 size-[96px]" data-name="Image">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
          <div className="absolute bg-[#f7f7f7] inset-0 rounded-[8px]" />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgImage1} />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgImage46} />
        </div>
      </div>
    </div>
  );
}

function Row2() {
  return (
    <div className="absolute contents left-0 top-[767px]" data-name="Row">
      <Title1 />
      <Carousel2 />
    </div>
  );
}

export default function HomeScreen({ onCategoryClick, onCategoriesClick, onBrandsClick, onBrandClick, onLocationClick, selectedAddress, onNavigateCart, onNavigateNotifications, onNavigateAccount, onNavigateSearch }: HomeScreenProps) {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  const nextBanner = () => {
    setCurrentBannerIndex((currentBannerIndex + 1) % banners.length);
  };

  const prevBanner = () => {
    setCurrentBannerIndex((currentBannerIndex - 1 + banners.length) % banners.length);
  };

  const { t, language } = useLanguage();

  // Update banner dots when scrolling
  useEffect(() => {
    const carouselElement = document.querySelector('[data-banner-carousel]');
    if (!carouselElement) return;

    const handleScroll = () => {
      const scrollLeft = carouselElement.scrollLeft;
      const itemWidth = carouselElement.clientWidth;
      const newIndex = Math.round(scrollLeft / itemWidth);
      setCurrentBannerIndex(newIndex);
    };

    carouselElement.addEventListener('scroll', handleScroll);
    return () => carouselElement.removeEventListener('scroll', handleScroll);
  }, []);

  // Map category names to translation keys
  const getCategoryKey = (name: string): string => {
    const keyMap: Record<string, string> = {
      'Fruits & Vegetables': 'fruits',
      'Snacks & Confectioneries': 'snacksConfectioneries',
      'Dairy & Bakery': 'dairyBakery',
      'Beverages': 'beverages',
      'Cooking Essentials': 'cookingEssentials',
      'Household Items': 'household',
      'Personal Care': 'personalCare',
      'Frozen Food': 'frozenFood',
    };
    return keyMap[name] || name;
  };

  const handleCategoriesSpeakerClick = () => {
    const text = language === 'english' 
      ? "Categories of products"
      : "مصنوعات کی اقسام";
    speak(text, language);
  };

  const handleBrandsSpeakerClick = () => {
    const brandsText = brands.map(brand => 
      language === 'ur' ? brand.nameUrdu : brand.name
    ).join(', ');
    
    const text = language === 'ur' 
      ? `برانڈز کے مطابق خریداری کریں۔ ${brandsText}`
      : `Shop by Brand. ${brandsText}`;
    
    speak(text, language);
  };

  return (
    <div className="bg-white relative size-full overflow-hidden" data-name="Home Screen">
      {/* Scrollable Content Area */}
      <div 
        className="absolute inset-0 overflow-y-auto pb-[116px]" 
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <style dangerouslySetInnerHTML={{ __html: `
          [data-name="Home Screen"] > div::-webkit-scrollbar {
            display: none;
          }
        `}} />
        <div className="relative min-h-[950px]">
      {/* Yellow Background Header */}
      <div className="absolute top-0 left-0 right-0 h-[140px] bg-[#ffd037] rounded-b-[20px]" />
      
      {/* Status Bar */}
      <div className="absolute top-0 left-0 right-0 h-[44px]" data-name="Bars / Status Bar / iPhone / Light">
        <Battery />
        <div className="absolute inset-[39.39%_11.64%_35.61%_84.27%]" data-name="Wifi">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 11">
            <path d={svgPaths.p39712400} fill="var(--fill-0, black)" id="Wifi" />
          </svg>
        </div>
        <div className="absolute inset-[40.15%_17.07%_35.61%_78.4%]" data-name="Cellular Connection">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 11">
            <path d={svgPaths.p26d17600} fill="var(--fill-0, black)" id="Cellular Connection" />
          </svg>
        </div>
        <TimeStyle />
      </div>
      
      {/* Location Section */}
      <div className="absolute left-[16px] top-[52px] flex items-center gap-2 w-[calc(100%-32px)] justify-between z-10">
        {/* Left side - Location info with black circle and icon */}
        <div className="flex items-center gap-2">
          {/* Black Circle with Location Icon */}
          <div className="relative size-[48px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
              <circle cx="24" cy="24" fill="black" r="24" />
            </svg>
            {/* Yellow Location Pin Icon */}
            <div className="absolute left-[12px] size-[24px] top-[12px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <path clipRule="evenodd" d={svgPaths.p36683780} fill="#FFD037" fillRule="evenodd" />
              </svg>
            </div>
          </div>
          {/* Location Text */}
          <div className="flex flex-col">
            <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic text-[#37474f] text-[11px]">{t('yourLocation')}</p>
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.3] not-italic text-[16px] text-black">{selectedAddress}</p>
          </div>
        </div>
        
        {/* Right side - Arrow (clickable) */}
        <button 
          onClick={onLocationClick}
          className="size-[20px] cursor-pointer bg-transparent border-none p-0 shrink-0"
          data-name="navigation/arrow_forword_ios_24px"
        >
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <g id="navigation/arrow_forword_ios_24px">
              <path d={svgPaths.p63a0100} fill="var(--fill-0, #37474F)" id="icon/navigation/arrow_forword_ios_24px" />
            </g>
          </svg>
        </button>
      </div>

      {/* Search Bar */}
      <Search1 onClick={onNavigateSearch} placeholder={t('search')} />

      {/* Banner Carousel - Swipeable */}
      <div className="absolute left-[16px] top-[175px] w-[343px] h-[131px]">
        <div className="relative w-full h-full overflow-hidden">
          {/* Banners Container - Scrollable */}
          <div 
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide h-full"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            data-banner-carousel
          >
            {banners.map((banner, index) => (
              <div
                key={banner.id}
                className="min-w-full h-full snap-center rounded-[10px] flex flex-col justify-center px-5 shrink-0"
                style={{ backgroundColor: banner.color }}
              >
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.4] text-[20px] text-black tracking-[-0.4px] mb-1">
                  {banner.title}
                </p>
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.4] text-[20px] text-black tracking-[-0.4px] mb-2">
                  {banner.subtitle}
                </p>
                <p className="font-['Inter:Regular',sans-serif] text-[14px] text-black/70">
                  {banner.description}
                </p>
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10 pointer-events-none">
            {banners.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentBannerIndex ? 'bg-black w-5' : 'bg-black/20'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Categories Section with Title and Arrow */}
      <div className="absolute left-0 top-[326px] w-[375px]">
        {/* Title with "See All" Button */}
        <div className="box-border content-stretch flex gap-[10px] items-center overflow-clip px-[16px] py-[8px]">
          <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black text-nowrap tracking-[-0.32px]">
            <p className="leading-[1.4] whitespace-pre">{t('categories')}</p>
          </div>
          <button 
            onClick={handleCategoriesSpeakerClick}
            className="relative shrink-0 size-[16px] cursor-pointer bg-transparent border-none p-0"
            aria-label="Read categories text"
          >
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage32} />
          </button>
          <button onClick={onCategoriesClick} className="cursor-pointer bg-transparent border-none p-0">
            <Chevron />
          </button>
        </div>

        {/* Category Carousel - Scrollable by dragging */}
        <div className="relative mt-2 overflow-hidden">
          <div 
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-4 pb-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {categoriesData.map((category: Category, index) => (
              <button
                key={index}
                onClick={() => onCategoryClick(category.name)}
                className="flex flex-col items-center gap-2 min-w-[100px] shrink-0 snap-center cursor-pointer bg-transparent border-none"
              >
                <div className="w-[90px] h-[90px] flex items-center justify-center rounded-lg bg-gray-50">
                  {category.image ? (
                    <img 
                      src={category.image} 
                      alt={category.name}
                      className={category.imageStyle || "w-full h-full object-contain"}
                    />
                  ) : (category as any).placeholder ? (
                    <img
                      src={(category as any).placeholder}
                      alt={category.name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  ) : (
                    <div className="w-16 h-16 bg-gray-200 rounded-full animate-pulse" />
                  )}
                </div>
                <p className="font-['Inter:Medium',sans-serif] font-medium text-[12px] text-[#161823] text-center leading-tight max-w-[100px]">
                  {t(getCategoryKey(category.name))}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Shop by Brand Section */}
      <Row1 
        onBrandsClick={onBrandsClick || onCategoriesClick}
        onBrandsSpeakerClick={handleBrandsSpeakerClick}
        onBrandClick={onBrandClick}
      />

      </div>
      </div>
      
      {/* Bottom Navigation - Fixed at bottom of parent container */}
      <div className="absolute bottom-0 left-0 right-0 z-50">
        <BottomNavigation
          currentPage="home"
          onNavigateHome={() => {}}
          onNavigateSearch={onNavigateSearch || (() => {})}
          onNavigateCart={onNavigateCart || (() => {})}
          onNavigateNotifications={onNavigateNotifications || (() => {})}
          onNavigateAccount={onNavigateAccount || (() => {})}
        />
      </div>
    </div>
  );
}