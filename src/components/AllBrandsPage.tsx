import { useState, useEffect } from 'react';
import svgPaths from '../imports/svg-xwv6wzkpqg';
import imgImage31 from "figma:asset/d1a81c329997884332855549bf84957646c3655b.png";
import { brands, Brand } from '../data/brands';
import { useLanguage } from '../contexts/LanguageContext';
import { speak } from '../utils/textToSpeech';

interface AllBrandsPageProps {
  onBack: () => void;
  onBrandClick?: (brand: Brand) => void;
}

function BarsStatusBarIPhoneLight() {
  return (
    <div className="absolute h-[47px] inset-[0_0_auto] z-[999]" data-name="Bars / Status Bar / iPhone / Light">
      <div className="absolute box-border flex font-['SF_Pro_Text:Semibold',sans-serif] gap-[5px] h-[14.21px] items-center justify-end left-[252.5px] not-italic pr-[14.7px] pt-[1px] right-[15.34px] text-[15px] text-black text-nowrap top-[18.5px] tracking-[-0.5px] whitespace-pre" data-name="Right Side">
        <div className="flex gap-[5px] items-center justify-end relative shrink-0">
          <svg className="relative shrink-0" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 18 13" width="18">
            <g id="Mobile Signal">
              <path clipRule="evenodd" d={svgPaths.pb24d500} fill="var(--fill-0, black)" fillRule="evenodd" id="Icon" />
            </g>
          </svg>
          <svg className="relative shrink-0" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 17 13" width="17">
            <g id="Wifi">
              <path clipRule="evenodd" d={svgPaths.p77a6b200} fill="var(--fill-0, black)" fillRule="evenodd" id="Icon_2" />
            </g>
          </svg>
          <svg className="relative shrink-0" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 25 12" width="25">
            <g id="Battery">
              <rect fill="var(--fill-0, black)" height="7.66" id="Border" opacity="0.35" rx="1.33" width="22" x="0.5" y="2.17" />
              <path d={svgPaths.pb70ef80} fill="var(--fill-1, black)" id="Cap" opacity="0.4" />
              <rect fill="var(--fill-2, black)" height="7" id="Capacity" rx="1" width="18" x="2" y="2.5" />
            </g>
          </svg>
        </div>
      </div>
      <div className="absolute box-border flex font-['SF_Pro_Text:Semibold',sans-serif] gap-[4.24px] h-[21.08px] items-center left-[21px] not-italic pt-[1.17px] text-[17px] text-black text-nowrap top-[13.67px] tracking-[-0.41px] w-[54px] whitespace-pre" data-name="Time Style">
        <p className="leading-[normal] relative shrink-0">9:41</p>
      </div>
    </div>
  );
}

function NavigationArrowBackward24Px({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="absolute left-[16px] size-[24px] top-[47.32px] cursor-pointer bg-transparent border-none p-0"
      data-name="navigation/arrow_backward_24px"
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="navigation/arrow_backward_24px">
          <path d={svgPaths.p6a58300} fill="var(--fill-0, #37474F)" id="icon/navigation/arrow_backward_24px" />
        </g>
      </svg>
    </button>
  );
}

function ComponentsMobileAppbarSecondery({ onBack, onSpeakerClick }: { onBack: () => void; onSpeakerClick: () => void }) {
  const { t } = useLanguage();
  
  return (
    <div className="absolute h-[88px] left-px top-0 w-[375px] z-10" data-name="components/mobile/appbar/secondery">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[normal] left-[58px] not-italic text-[#37474f] text-[20px] text-nowrap top-[47.32px] whitespace-pre">{t('allBrands')}</p>
      <NavigationArrowBackward24Px onClick={onBack} />
      
      {/* Speaker Icon for TTS */}
      <button 
        onClick={onSpeakerClick}
        className="absolute left-[339px] size-[16px] top-[54px] cursor-pointer bg-transparent border-none p-0 z-30"
        aria-label="Read all brands information"
      >
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage31} />
      </button>
    </div>
  );
}

export default function AllBrandsPage({ onBack, onBrandClick }: AllBrandsPageProps) {
  const { t, language } = useLanguage();
  const [brandImages, setBrandImages] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Pre-load all brand images
    const imageMap: Record<string, string> = {};
    brands.forEach((brand) => {
      imageMap[brand.id] = brand.image;
    });
    
    setBrandImages(imageMap);
    setLoading(false);
  }, []);

  const handleSpeakerClick = () => {
    const brandsText = brands.map(brand => 
      language === 'ur' ? brand.nameUrdu : brand.name
    ).join(', ');
    
    const message = language === 'ur' 
      ? `تمام برانڈز۔ ${brandsText}`
      : `All Brands. ${brandsText}`;
    
    speak(message, language);
  };

  return (
    <div className="bg-white relative size-full overflow-hidden" data-name="All Brands Page">
      <BarsStatusBarIPhoneLight />
      <ComponentsMobileAppbarSecondery onBack={onBack} onSpeakerClick={handleSpeakerClick} />
      
      {/* Scrollable Grid */}
      <div className="absolute top-[88px] left-0 right-0 bottom-0 overflow-y-auto overflow-x-hidden px-4 pb-4">
        <div className="grid grid-cols-2 gap-4 pt-4">
          {brands.map((brand) => (
            <button
              key={brand.id}
              onClick={() => onBrandClick?.(brand)}
              className="flex flex-col items-center gap-3 p-4 bg-white rounded-lg border border-gray-200 hover:border-[#ffd037] transition-colors cursor-pointer"
            >
              <div className="w-full h-32 flex items-center justify-center rounded-lg bg-gray-50 overflow-hidden">
                {loading ? (
                  <div className="w-20 h-20 bg-gray-200 rounded-full animate-pulse" />
                ) : (
                  <img
                    src={brandImages[brand.id]}
                    alt={brand.name}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <div className="text-center">
                <p className="font-['Poppins:Medium',sans-serif] text-[14px] text-[#37474f] mb-1">
                  {language === 'ur' ? brand.nameUrdu : brand.name}
                </p>
                <p className="font-['Poppins:Regular',sans-serif] text-[11px] text-gray-500 line-clamp-2">
                  {language === 'ur' ? brand.descriptionUrdu : brand.description}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
