import { brands } from '../data/brands';
import { useLanguage } from '../contexts/LanguageContext';
import { speak } from '../utils/textToSpeech';
import BottomNavigation from './BottomNavigation';
import imgImage32 from "figma:asset/d1a81c329997884332855549bf84957646c3655b.png";

interface AllBrandsScreenProps {
  onBrandSelect: (brandName: string) => void;
  onBack: () => void;
  onNavigateHome: () => void;
  onNavigateSearch: () => void;
  onNavigateCart: () => void;
  onNavigateNotifications: () => void;
  onNavigateAccount: () => void;
}

export default function AllBrandsScreen({
  onBrandSelect,
  onBack,
  onNavigateHome,
  onNavigateSearch,
  onNavigateCart,
  onNavigateNotifications,
  onNavigateAccount,
}: AllBrandsScreenProps) {
  const { t, language } = useLanguage();

  const handleSpeakerClick = () => {
    const brandNames = brands.map(b => 
      language === 'ur' ? b.nameUrdu : b.name
    ).join(', ');
    
    const text = language === 'ur'
      ? `تمام برانڈز: ${brandNames}`
      : `All brands: ${brandNames}`;
    
    speak(text, language);
  };

  return (
    <div className="bg-white relative size-full overflow-y-auto">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-[#ffd037] px-4 py-4 flex items-center gap-3">
        <button
          onClick={onBack}
          className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer border-none bg-transparent"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
            <path d="M15 18l-6-6 6-6" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <h1 className="flex-1 font-['Inter:Semi_Bold',sans-serif] font-semibold text-[20px] text-black">
          {t('allBrands')}
        </h1>
        <button
          onClick={handleSpeakerClick}
          className="w-6 h-6 cursor-pointer bg-transparent border-none p-0"
          aria-label="Read all brands"
        >
          <img alt="" className="w-full h-full object-cover" src={imgImage32} />
        </button>
      </div>

      {/* Brands Grid */}
      <div className="px-4 py-6 grid grid-cols-2 gap-4 pb-24">
        {brands.map((brand) => (
          <button
            key={brand.id}
            onClick={() => onBrandSelect(brand.name)}
            className="bg-white rounded-lg border border-gray-200 p-4 flex flex-col items-center gap-3 cursor-pointer hover:shadow-md transition-shadow"
          >
            <div className="w-full h-[100px] rounded-lg overflow-hidden bg-gray-100">
              <img
                src={brand.image}
                alt={brand.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center">
              <h3 className="font-['Inter:Medium',sans-serif] font-medium text-[14px] text-black mb-1">
                {language === 'ur' ? brand.nameUrdu : brand.name}
              </h3>
              <p className="font-['Inter:Regular',sans-serif] text-[12px] text-gray-500">
                {language === 'ur' ? brand.descriptionUrdu : brand.description}
              </p>
            </div>
          </button>
        ))}
      </div>

      {/* Bottom Navigation - Fixed positioning to stay at bottom while scrolling */}
      <div className="fixed bottom-0 left-0 right-0 z-30 max-w-[375px] mx-auto">
        <BottomNavigation
          currentPage="search"
          onNavigateHome={onNavigateHome}
          onNavigateSearch={onNavigateSearch}
          onNavigateCart={onNavigateCart}
          onNavigateNotifications={onNavigateNotifications}
          onNavigateAccount={onNavigateAccount}
        />
      </div>
    </div>
  );
}