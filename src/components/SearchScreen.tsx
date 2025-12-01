import { useState } from 'react';
import svgPaths from "../imports/svg-4uyj5h7o85";
import { imgMain1 } from "../imports/svg-4o5lf";
import imgMain2 from "figma:asset/db4e58fac23dd6eaeefc5f9b23a040409692e76a.png";
import { Filter, Search, Mic as MicIcon } from 'lucide-react';
import { toast } from 'sonner@2.0.3';
import { useLanguage } from '../contexts/LanguageContext';
import { startVoiceInput, isSpeechRecognitionSupported } from '../utils/voiceInput';
import { useCart } from '../contexts/CartContext';
import { Product, categoryProducts } from '../data/categoryProducts';
import { ImageWithFallback } from './figma/ImageWithFallback';
import FilterModal, { FilterState } from './FilterModal';
import BottomNavigation from './BottomNavigation';
import { ShoppingCart } from 'lucide-react';
import { ArrowLeft } from 'lucide-react';

interface SearchScreenProps {
  onBack: () => void;
  onNavigateHome?: () => void;
  onNavigateCart?: () => void;
  onNavigateNotifications?: () => void;
  onNavigateAccount?: () => void;
}

function MaskGroup() {
  return (
    <div className="absolute bottom-0 contents left-[0.03%] right-[-0.02%] top-[0.02%]" data-name="Mask Group">
      <div className="absolute contents inset-[-15.21%_-58.02%_73.97%_-7.26%]">
        <div className="absolute flex inset-[-15.21%_-58.02%_73.97%_-7.26%] items-center justify-center">
          <div className="flex-none h-[588.878px] rotate-[261.236deg] w-[248.041px]">
            <div className="mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[27.34px_123.671px] mask-size-[374.954px_811.834px] opacity-80 relative size-full" data-name="main (1)" style={{ maskImage: `url('${imgMain1}')` }}>
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[333.28%] left-[-725%] max-w-none top-[-109.86%] w-[1406.64%]" src={imgMain2} />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute backdrop-blur-[45px] backdrop-filter bg-gradient-to-b from-[rgba(252,252,252,0.6)] inset-[0.02%_-0.16%_73.97%_-0.01%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.16px_0px] mask-size-[374.954px_811.834px] to-[rgba(255,255,255,0.6)]" style={{ maskImage: `url('${imgMain1}')` }} />
      </div>
      <div className="absolute contents inset-[66.22%_-0.06%_-0.03%_0.03%]">
        <div className="absolute contents inset-[81.29%_-0.06%_-0.03%_0.03%]">
          <div className="absolute flex inset-[81.29%_-0.06%_-0.03%_0.03%] items-center justify-center">
            <div className="flex-none h-[375.153px] rotate-[90deg] skew-x-[359.139deg] w-[146.533px]">
              <div className="mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-659.933px] mask-size-[374.954px_811.834px] relative size-full" data-name="main (1)" style={{ maskImage: `url('${imgMain1}')` }}>
                <div className="absolute inset-0 opacity-75 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-[415.76%] left-[-1201.44%] max-w-none top-[-144.82%] w-[1987.8%]" src={imgMain2} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute backdrop-blur-[45px] backdrop-filter bg-[rgba(254,254,254,0.55)] bottom-0 left-[0.03%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-537.513px] mask-size-[374.954px_811.834px] right-[-0.02%] top-[66.22%]" style={{ maskImage: `url('${imgMain1}')` }} />
      </div>
    </div>
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
    <div className="absolute bottom-[94.58%] left-0 right-0 top-0" data-name="Bars / Status Bar / iPhone / Light">
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

function ComponentsMobileAppbarPrimary() {
  return (
    <div className="absolute h-[88px] left-px top-0 w-[375px]" data-name="components/mobile/appbar/primary">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[normal] left-[16px] not-italic text-[#37474f] text-[12px] text-nowrap top-[calc(50%+7.5px)] whitespace-pre">&nbsp;</p>
    </div>
  );
}

function ActionSearch24Px() {
  return (
    <div className="absolute bottom-[15.38%] left-0 right-[88.46%] top-[23.08%]" data-name="action/search_24px">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="action/search_24px">
          <path clipRule="evenodd" d={svgPaths.p308c8f70} fill="var(--fill-0, #37474F)" fillRule="evenodd" id="icon/action/search_24px" />
        </g>
      </svg>
    </div>
  );
}

function Mic({ onClick }: { onClick?: () => void }) {
  return (
    <button onClick={onClick} className="absolute h-[24px] left-[18px] top-[74px] w-[28px]" data-name="Mic">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 24">
        <g id="Mic">
          <path d={svgPaths.p2767ba00} id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </button>
  );
}

function NavigationArrowBackward24Px({ onClick }: { onClick: () => void }) {
  return (
    <button onClick={onClick} className="absolute left-[16px] size-[24px] top-[47.32px]" data-name="navigation/arrow_backward_24px">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="navigation/arrow_backward_24px">
          <path d={svgPaths.p6a58300} fill="var(--fill-0, #37474F)" id="icon/navigation/arrow_backward_24px" />
        </g>
      </svg>
    </button>
  );
}

function ComponentsMobileAppbarSecondery({ onBack }: { onBack: () => void }) {
  return (
    <div className="absolute h-[88px] left-[-10px] top-[-11px] w-[375px]" data-name="components/mobile/appbar/secondery">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[normal] left-[58px] not-italic text-[#37474f] text-[16px] text-nowrap top-[47.32px] whitespace-pre">&nbsp;</p>
      <NavigationArrowBackward24Px onClick={onBack} />
    </div>
  );
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const { language } = useLanguage();
  
  return (
    <div className="h-[164px] relative shrink-0 w-[376px]" data-name="list/product/normal">
      <div className="absolute inset-[12.8%_64.89%_13.41%_4.52%]" data-name="Rectangle">
        <img alt={product.name} className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[9px] size-full" src={product.image} />
      </div>
      <div className="absolute bottom-0 left-[0.27%] right-0 top-[98.78%]" data-name="divider">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 376 2">
          <path d={svgPaths.pcffcb00} id="divider" stroke="var(--stroke-0, #F0F0F0)" strokeLinecap="square" />
        </svg>
      </div>
      {/* Product name - single line */}
      <p className="absolute font-['Poppins:Medium',sans-serif] left-[149px] top-[27px] leading-[normal] not-italic text-[#37474f] text-[16px] tracking-[0.6px]">
        {language === 'urdu' ? product.nameUrdu : product.name}
      </p>
      {/* Price - below name */}
      <p className="absolute font-['Poppins:SemiBold',sans-serif] left-[149px] top-[107px] leading-[normal] not-italic text-[#f37a20] text-[20px] text-nowrap whitespace-pre">Rs {product.price}</p>
      {/* Add to Cart button - longer */}
      <button 
        onClick={() => onAddToCart(product)}
        className="absolute bg-[#ffd037] left-[292px] top-[98px] w-[68px] h-[35px] rounded-[7px] flex items-center justify-center gap-1 hover:bg-[#ffc020] transition-colors border-none cursor-pointer"
        data-name="buttons/web/solid/text + symbol/symbol → text"
      >
        <ShoppingCart className="w-[16px] h-[16px] text-[#37474f]" strokeWidth={2} />
        <p className="font-['Poppins:Medium',sans-serif] text-[11px] text-black">Add to Cart</p>
      </button>
    </div>
  );
}

function BackgroundSimpleInject() {
  return (
    <div className="absolute inset-[27.27%_17.21%_48.17%_13.95%]" data-name="background simple  inject 77">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 259 200">
        <g id="background simple  inject 77">
          <path d={svgPaths.p2c921880} fill="var(--fill-0, #F37A20)" id="Vector" />
          <path d={svgPaths.p2c921880} fill="var(--fill-0, white)" id="Vector_2" opacity="0.9" />
        </g>
      </svg>
    </div>
  );
}

function ShadowInject() {
  return (
    <div className="absolute inset-[56.57%_10.48%_41.33%_11.55%]" data-name="Shadow  inject 77">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 293 18">
        <g id="Shadow  inject 77">
          <path d={svgPaths.p16794700} fill="var(--fill-0, #F5F5F5)" id="path  inject 77" />
        </g>
      </svg>
    </div>
  );
}

function CharacterInject() {
  return (
    <div className="absolute inset-[27.05%_59.77%_42.38%_20.23%]" data-name="Character  inject 77">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 76 249">
        <g id="Character  inject 77">
          <path d={svgPaths.p1c821a00} fill="var(--fill-0, #F37A20)" id="Vector" />
          <path d={svgPaths.p11e6fc40} fill="var(--fill-0, #F37A20)" id="Vector_2" />
          <path d={svgPaths.pce64500} fill="var(--fill-0, #263238)" id="Vector_3" />
          <path d={svgPaths.p19b44880} fill="var(--fill-0, #F37A20)" id="Vector_4" />
          <path d={svgPaths.p3694bf00} fill="var(--fill-0, #F37A20)" id="Vector_5" />
          <path d={svgPaths.pd5876f0} fill="var(--fill-0, #263238)" id="Vector_6" />
          <path d={svgPaths.p31402c00} fill="var(--fill-0, #F37A20)" id="Vector_7" />
          <path d={svgPaths.p225a7c00} fill="var(--fill-0, black)" id="Vector_8" opacity="0.3" />
          <path d={svgPaths.p30e30b00} fill="var(--fill-0, #F37A20)" id="Vector_9" />
          <path d={svgPaths.p1bb84500} fill="var(--fill-0, #FFC3BD)" id="Vector_10" />
          <path d={svgPaths.p2c3f0b70} fill="var(--fill-0, #FFC3BD)" id="Vector_11" />
          <path d={svgPaths.p2ec4d700} fill="var(--fill-0, #FFC3BD)" id="Vector_12" />
          <path d={svgPaths.p1126cbf0} fill="var(--fill-0, #263238)" id="Vector_13" />
          <path d={svgPaths.p13d63b80} fill="var(--fill-0, #ED847E)" id="Vector_14" />
          <path d={svgPaths.p1f617600} fill="var(--fill-0, #FFC3BD)" id="Vector_15" />
          <path d={svgPaths.p249ea00} fill="var(--fill-0, #FFC3BD)" id="Vector_16" />
          <path d={svgPaths.p13729880} fill="var(--fill-0, #F37A20)" id="Vector_17" />
          <path d={svgPaths.p3c20fe80} fill="var(--fill-0, #F37A20)" id="Vector_18" />
          <path d={svgPaths.p2d5de5c0} fill="var(--fill-0, white)" id="Vector_19" />
          <path d={svgPaths.p8167c80} fill="var(--fill-0, #F37A20)" id="Vector_20" />
          <path d={svgPaths.p25522a00} fill="var(--fill-0, #FFC3BD)" id="Vector_21" />
          <path d={svgPaths.p144a8580} fill="var(--fill-0, #263238)" id="Vector_22" />
          <path d={svgPaths.p38b39c00} fill="var(--fill-0, #FFC3BD)" id="Vector_23" />
          <path d={svgPaths.p89d86b0} fill="var(--fill-0, #F37A20)" id="Vector_24" />
          <path d={svgPaths.p1938b000} fill="var(--fill-0, #263238)" id="Vector_25" />
          <path d={svgPaths.p1938b000} fill="var(--fill-0, white)" id="Vector_26" opacity="0.1" />
          <path d={svgPaths.p15545500} fill="var(--fill-0, #FFC3BD)" id="Vector_27" />
          <path d={svgPaths.p1881fa80} fill="var(--fill-0, #263238)" id="Vector_28" opacity="0.4" />
          <path d={svgPaths.p21687580} fill="var(--fill-0, #F37A20)" id="Vector_29" />
          <path d={svgPaths.p197c8ef0} fill="var(--fill-0, #263238)" id="Vector_30" />
          <path d={svgPaths.p197c8ef0} fill="var(--fill-0, white)" id="Vector_31" opacity="0.1" />
          <path d={svgPaths.p116abc00} fill="var(--fill-0, #263238)" id="Vector_32" opacity="0.4" />
          <path d={svgPaths.pd69e440} fill="var(--fill-0, #FFC3BD)" id="Vector_33" />
          <path d={svgPaths.p14eb7700} fill="var(--fill-0, #263238)" id="Vector_34" />
          <path d={svgPaths.p19d30b00} fill="var(--fill-0, #F37A20)" id="Vector_35" />
          <path d={svgPaths.p19d30b00} fill="var(--fill-0, white)" id="Vector_36" opacity="0.2" />
          <path d={svgPaths.p180e5000} fill="var(--fill-0, #F37A20)" id="Vector_37" />
          <path d={svgPaths.p18d6e700} fill="var(--fill-0, #FFC3BD)" id="Vector_38" />
          <path d={svgPaths.p1ca15c00} fill="var(--fill-0, #263238)" id="Vector_39" />
          <path d={svgPaths.p1ca15c00} fill="var(--fill-0, white)" id="Vector_40" opacity="0.1" />
          <path d={svgPaths.p3e680600} fill="var(--fill-0, #F37A20)" id="Vector_41" />
        </g>
      </svg>
    </div>
  );
}

function SmartphoneInject() {
  return (
    <div className="absolute inset-[29.2%_20.53%_42.98%_42.59%]" data-name="Smartphone  inject 77">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 139 226">
        <g id="Smartphone  inject 77">
          <path d={svgPaths.p6bf6600} fill="var(--fill-0, #263238)" id="Vector" />
          <path d={svgPaths.p20901800} fill="var(--fill-0, #F37A20)" id="Vector_2" />
          <path d={svgPaths.p5571b00} fill="var(--fill-0, #F37A20)" id="Vector_3" />
          <path d={svgPaths.pf088480} fill="var(--fill-0, #F37A20)" id="Vector_4" />
          <path d={svgPaths.p28fb1680} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p4a31e80} fill="var(--fill-0, #F37A20)" id="Vector_6" opacity="0.2" />
          <path d={svgPaths.p2fcefc00} fill="var(--fill-0, #F37A20)" id="Vector_7" />
          <path d={svgPaths.p1ab14e00} fill="var(--fill-0, white)" id="Vector_8" opacity="0.5" />
          <path d={svgPaths.p3aa9c7f0} fill="var(--fill-0, #F37A20)" id="Vector_9" />
          <path d={svgPaths.pff7aa40} fill="var(--fill-0, #F37A20)" id="Vector_10" />
          <path d={svgPaths.p17361b00} fill="var(--fill-0, #F37A20)" id="Vector_11" />
          <path d={svgPaths.p5620280} fill="var(--fill-0, #F37A20)" id="Vector_12" />
          <path d={svgPaths.p5c5f1f0} fill="var(--fill-0, white)" id="Vector_13" />
          <path d={svgPaths.p196c0b00} fill="var(--fill-0, #F37A20)" id="Vector_14" />
          <path d={svgPaths.p392db580} fill="var(--fill-0, #FF5552)" id="Vector_15" />
        </g>
      </svg>
    </div>
  );
}

function NavigationClose24Px() {
  return (
    <div className="absolute inset-[52.22%_37.07%_44.83%_56.53%]" data-name="navigation/close_24px">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="navigation/close_24px">
          <path d={svgPaths.p3e370b00} fill="var(--fill-0, white)" id="icon/navigation/close_24px" />
        </g>
      </svg>
    </div>
  );
}

function AddToBagRafiki() {
  return (
    <div className="absolute contents inset-[27.05%_10.48%_41.33%_11.55%]" data-name="Add to Bag-rafiki 1">
      <BackgroundSimpleInject />
      <ShadowInject />
      <CharacterInject />
      <SmartphoneInject />
      <NavigationClose24Px />
    </div>
  );
}

export default function SearchScreen({ 
  onBack, 
  onNavigateHome, 
  onNavigateCart, 
  onNavigateNotifications, 
  onNavigateAccount 
}: SearchScreenProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    minPrice: '',
    maxPrice: '',
    categories: []
  });
  const { addToCart } = useCart();
  const { t, language } = useLanguage();

  // Voice input handler
  const handleVoiceInput = () => {
    if (!isSpeechRecognitionSupported()) {
      toast.info(t('voiceNotSupported') || 'Voice search not supported in this browser');
      return;
    }

    toast.info(t('listening') || 'Listening...');

    startVoiceInput({
      onResult: (transcript) => {
        setSearchQuery(transcript);
        setIsSearching(true);
        toast.success(`${t('searchingFor') || 'Searching for'}: ${transcript}`);
      },
      onError: (error) => {
        // Show microphone access errors as warning, not error
        if (error.includes('Microphone access denied')) {
          toast.warning(error);
        } else {
          toast.error(error);
        }
      },
      language: language === 'urdu' ? 'ur-PK' : 'en-US'
    });
  };

  // Get all products from all categories
  const allProducts: Product[] = Object.values(categoryProducts).flat();

  // Filter products based on search query and filters
  const applyFilters = (products: Product[]) => {
    let filtered = products;
    
    // Apply price filter
    if (filters.minPrice) {
      filtered = filtered.filter(p => p.price >= parseInt(filters.minPrice));
    }
    if (filters.maxPrice) {
      filtered = filtered.filter(p => p.price <= parseInt(filters.maxPrice));
    }
    
    // Apply category filter
    if (filters.categories.length > 0) {
      filtered = filtered.filter(p => filters.categories.includes(p.category));
    }
    
    return filtered;
  };

  // Filter products based on search query
  const searchResults = searchQuery.trim() === '' 
    ? [] 
    : applyFilters(allProducts.filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      ));

  const popularSearches = [t('popularSearch1'), t('popularSearch2'), t('popularSearch3'), t('popularSearch4')];

  const handlePopularSearchClick = (search: string) => {
    setSearchQuery(search);
    setIsSearching(true);
  };

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    toast.success(`${product.name} ${t('addedToCart') || 'added to cart'}!`);
  };

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    if (value.trim() !== '') {
      setIsSearching(true);
    }
  };

  const handleApplyFilter = (newFilters: FilterState) => {
    setFilters(newFilters);
    toast.success(t('filtersApplied') || 'Filters applied!');
  };

  const showResults = isSearching && searchQuery.trim() !== '';
  const showNoResults = showResults && searchResults.length === 0;
  const showPopularSearches = !isSearching || searchQuery.trim() === '';

  return (
    <div className="bg-white relative size-full" data-name="Search">
      <MaskGroup />
      <ComponentsMobileAppbarPrimary />
      <BarsStatusBarIPhoneLight />
      
      {/* Back Button - highly visible */}
      <button
        onClick={onBack}
        className="absolute left-[16px] top-[55px] z-50 bg-white rounded-full p-2 shadow-md border-none cursor-pointer hover:bg-gray-100 transition-colors"
        aria-label="Go back"
      >
        <ArrowLeft className="w-[24px] h-[24px] text-[#37474f]" strokeWidth={2.5} />
      </button>
      
      {/* Search Input */}
      <div className="absolute h-[52px] left-[56px] top-[55px] w-[304px]">
        <div className="absolute inset-0 overflow-clip">
          <div className="absolute bg-[#f0f1f2] bottom-[3.45%] left-0 right-0 rounded-tl-[8px] rounded-tr-[8px] top-0" data-name="Rectangle" />
          <div className="absolute bottom-0 left-[0.3%] right-[0.3%] top-[96.55%]" data-name="Line">
            <div className="absolute inset-[-5.77%_-0.33%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 307 2">
                <path d="M1 1H305.134" id="Line" stroke="var(--stroke-0, #FFD037)" strokeLinecap="square" strokeWidth="2" />
              </svg>
            </div>
          </div>
          <div className="absolute h-[39px] left-[16px] overflow-clip top-[calc(50%-2.5px)] translate-y-[-50%] w-[250px]" data-name="Group">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              placeholder="Search"
              className="absolute font-['Poppins:Regular',sans-serif] leading-[normal] left-[8px] not-italic text-[#37474f] text-[16px] top-[50%] translate-y-[-50%] bg-transparent outline-none border-none w-[220px] placeholder:text-[#ffd037] placeholder:text-[16px] placeholder:opacity-[0.87]"
            />
          </div>
          {/* Voice Search Button - inside search bar */}
          <button 
            onClick={handleVoiceInput}
            className="absolute right-[12px] top-[50%] translate-y-[-50%] p-0 bg-transparent border-none cursor-pointer z-20"
            aria-label="Voice search"
          >
            <MicIcon className="w-[20px] h-[20px] text-[#37474f]" strokeWidth={2} />
          </button>
        </div>
      </div>

      {/* Filter Button */}
      {showResults && (
        <button
          onClick={() => setIsFilterOpen(true)}
          className="absolute right-[16px] top-[62px] bg-[#FFD037] rounded-[8px] p-[10px] flex items-center justify-center z-10"
        >
          <Filter className="w-5 h-5 text-[#37474f]" />
        </button>
      )}

      {/* Filter Modal */}
      <FilterModal
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        onApplyFilter={handleApplyFilter}
        currentFilters={filters}
      />

      {/* Popular Searches */}
      {showPopularSearches && (
        <>
          <p className="absolute font-['Poppins:Medium',sans-serif] leading-[normal] left-[16px] not-italic text-[#37474f] text-[20px] text-nowrap top-[137px] whitespace-pre">{t('popularSearches')}</p>
          
          <div className="absolute left-[16px] right-[16px] top-[180px]">
            {popularSearches.map((search, index) => (
              <button
                key={index}
                onClick={() => handlePopularSearchClick(search)}
                className="flex items-center w-full py-4 border-b border-[#F0F0F0]"
              >
                <svg className="size-[24px] mr-4" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <path clipRule="evenodd" d={svgPaths.p308c8f70} fill="#37474F" fillRule="evenodd" />
                </svg>
                <p className="font-['Poppins:Regular',sans-serif] text-[16px] text-[#37474f]">{search}</p>
              </button>
            ))}
          </div>
        </>
      )}

      {/* Search Results */}
      {showResults && !showNoResults && (
        <>
          <p className="absolute font-['Poppins:Medium',sans-serif] leading-[normal] left-[16px] not-italic text-[#37474f] text-[20px] text-nowrap top-[137px] whitespace-pre">Search Result</p>
          
          <div className="absolute content-stretch flex flex-col gap-[3px] items-center left-[-1px] overflow-y-auto top-[190px] bottom-[120px]">
            {searchResults.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </>
      )}

      {/* No Results */}
      {showNoResults && (
        <>
          <AddToBagRafiki />
          <p className="absolute font-['Poppins:Medium',sans-serif] leading-[normal] left-[188px] not-italic text-[#37474f] text-[16px] text-center top-[566px] tracking-[0.6px] translate-x-[-50%] w-[310px]">Oops! We can't find your product!</p>
        </>
      )}

      {/* Bottom Navigation */}
      <BottomNavigation 
        currentPage="search"
        onNavigateHome={onNavigateHome || (() => {})}
        onNavigateSearch={() => {}}
        onNavigateCart={onNavigateCart || (() => {})}
        onNavigateNotifications={onNavigateNotifications || (() => {})}
        onNavigateAccount={onNavigateAccount || (() => {})}
      />
    </div>
  );
}