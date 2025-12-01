import { useState, useEffect } from 'react';
import svgPaths from "../imports/svg-iixdc2yb2g";
import imgMain2 from "figma:asset/db4e58fac23dd6eaeefc5f9b23a040409692e76a.png";
import imgImage31 from "figma:asset/d1a81c329997884332855549bf84957646c3655b.png";
import { imgMain1 } from "../imports/svg-gdvmf";
import { getCategoryProducts, Product } from '../data/categoryProducts';
import { useCart } from '../contexts/CartContext';
import { useLanguage } from '../contexts/LanguageContext';
import Toast from './Toast';
import { BottomNav } from './BottomNav';
import { speak } from '../utils/textToSpeech';
import { ttsMessages } from '../utils/ttsMessages';
import { ArrowLeft } from 'react-feather';

function Group3() {
  return (
    <div className="absolute contents inset-[-15.23%_-58.02%_73.99%_-7.26%]">
      <div className="absolute flex inset-[-15.23%_-58.02%_73.99%_-7.26%] items-center justify-center">
        <div className="flex-none h-[588.878px] rotate-[261.236deg] w-[248.041px]">
          <div className="mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[27.34px_123.671px] mask-size-[374.954px_811.834px] opacity-80 relative size-full" data-name="main (1)" style={{ maskImage: `url('${imgMain1}')` }}>
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[333.28%] left-[-725%] max-w-none top-[-109.86%] w-[1406.64%]" src={imgMain2} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-[-15.23%_-58.02%_73.99%_-7.26%]">
      <Group3 />
      <div className="absolute backdrop-blur-[45px] backdrop-filter bg-gradient-to-b bottom-[73.99%] from-[rgba(252,252,252,0.6)] left-[-0.01%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.16px_0px] mask-size-[374.954px_811.834px] right-[-0.16%] to-[rgba(255,255,255,0.6)] top-0" style={{ maskImage: `url('${imgMain1}')` }} />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[81.27%_-0.06%_-0.01%_0.03%]">
      <div className="absolute flex inset-[81.27%_-0.06%_-0.01%_0.03%] items-center justify-center">
        <div className="flex-none h-[375.153px] rotate-[90deg] skew-x-[359.139deg] w-[146.533px]">
          <div className="mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-659.933px] mask-size-[374.954px_811.834px] relative size-full" data-name="main (1)" style={{ maskImage: `url('${imgMain1}')` }}>
            <div className="absolute inset-0 opacity-75 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[415.76%] left-[-1201.44%] max-w-none top-[-144.82%] w-[1987.8%]" src={imgMain2} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents inset-[66.2%_-0.06%_-0.01%_0.03%]">
      <Group2 />
      <div className="absolute backdrop-blur-[45px] backdrop-filter bg-[rgba(254,254,254,0.55)] inset-[66.2%_-0.02%_0.02%_0.03%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-537.513px] mask-size-[374.954px_811.834px]" style={{ maskImage: `url('${imgMain1}')` }} />
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute bottom-0 contents left-[0.03%] right-[-0.02%] top-[0.02%]" data-name="Mask Group">
      <Group4 />
      <Group5 />
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

interface ProductCardProps {
  product: Product;
  imageUrl: string;
  onAddToCart: () => void;
  onProductClick: () => void;
}

function ProductCard({ product, imageUrl, onAddToCart, onProductClick }: ProductCardProps) {
  const { language } = useLanguage();
  
  return (
    <div 
      className="bg-white rounded-[12px] p-4 w-[164px] flex-shrink-0 cursor-pointer hover:shadow-md transition-shadow"
      style={{ minWidth: '164px' }}
    >
      <div onClick={onProductClick}>
        <div className="w-full h-[120px] mb-3 rounded-[8px] overflow-hidden bg-gray-100">
          <img
            src={imageUrl}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
        <p className="font-['Poppins:SemiBold',sans-serif] text-[14px] text-[#37474f] mb-2 line-clamp-2 h-[40px]">
          {language === 'urdu' ? product.nameUrdu : product.name}
        </p>
        <div className="flex items-center gap-2 mb-3">
          <span className="font-['Poppins:SemiBold',sans-serif] text-[18px] text-[#f37a20]">
            Rs {product.price}
          </span>
          {product.originalPrice && (
            <span className="font-['Poppins:Regular',sans-serif] text-[14px] text-[#9e9e9e] line-through">
              Rs {product.originalPrice}
            </span>
          )}
        </div>
      </div>
      <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#9e9e9e] mb-3">
        {language === 'urdu' ? product.weightUrdu : product.weight}
      </p>
      <button
        onClick={onAddToCart}
        className="flex items-center justify-center gap-2 bg-[#ffd037] rounded-[8px] h-[44px] w-full cursor-pointer hover:bg-[#ffc020] transition-colors border-none"
      >
        <div className="size-[20px]">
          <svg className="block size-full" fill="none" viewBox="0 0 24 24">
            <path 
              d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" 
              fill="#37474F" 
            />
          </svg>
        </div>
        <p className="font-['Poppins:Medium',sans-serif] text-[14px] text-black">
          Add To Cart
        </p>
      </button>
    </div>
  );
}

interface CategoryProductsScreenProps {
  categoryName: string;
  onBack: () => void;
  productImages: Record<string, string>;
  onProductClick: (product: Product) => void;
  onNavigateHome?: () => void;
  onNavigateCart?: () => void;
  onNavigateSearch?: () => void;
  onNavigateNotifications?: () => void;
  onNavigateAccount?: () => void;
}

export default function CategoryProductsScreen({ 
  categoryName, 
  onBack, 
  productImages, 
  onProductClick,
  onNavigateHome,
  onNavigateCart,
  onNavigateSearch,
  onNavigateNotifications,
  onNavigateAccount
}: CategoryProductsScreenProps) {
  const products = getCategoryProducts(categoryName);
  const { addToCart } = useCart();
  const { t, language } = useLanguage();
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);
  
  // Get translated category name
  const getCategoryNameTranslated = (name: string) => {
    const categoryMap: Record<string, string> = {
      'Fruits & Vegetables': language === 'urdu' ? 'پھل اور سبزیاں' : 'Fruits & Vegetables',
      'Snacks & Confectioneries': language === 'urdu' ? 'نمکین اور مٹھائیاں' : 'Snacks & Confectioneries',
      'Dairy & Bakery': language === 'urdu' ? 'ڈیری اور بیکری' : 'Dairy & Bakery',
      'Rice & Grains': language === 'urdu' ? 'چاول اور اناج' : 'Rice & Grains',
      'Cooking Essentials': language === 'urdu' ? 'کھانا پکانے کی ضروریات' : 'Cooking Essentials',
      'Beverages': language === 'urdu' ? 'مشروبات' : 'Beverages',
      'Personal Care': language === 'urdu' ? 'ذاتی نگہداشت' : 'Personal Care',
      'Household Items': language === 'urdu' ? 'گھریلو اشیاء' : 'Household Items',
    };
    return categoryMap[name] || name;
  };

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: productImages[product.id] || '',
      category: product.category,
    });
    setToastMessage('Item added to Cart!');
    setShowToast(true);
  };

  const handleSpeakerClick = () => {
    const message = language === 'english' ? ttsMessages.categoryProducts.english : ttsMessages.categoryProducts.urdu;
    speak(message, language);
  };

  return (
    <div className="bg-white relative size-full overflow-hidden" data-name="Snacks & Confectioneries home">
      <MaskGroup />
      <BarsStatusBarIPhoneLight />
      
      {/* Header */}
      <div className="absolute left-0 right-0 top-[44px] h-[44px] flex items-center justify-center z-20">
        <button
          onClick={onBack}
          className="absolute left-[16px] bg-white rounded-full p-2 shadow-md cursor-pointer border-none hover:bg-gray-100 transition-colors"
          aria-label="Go back"
        >
          <ArrowLeft className="w-[24px] h-[24px] text-[#37474f]" strokeWidth={2.5} />
        </button>
        <p className="font-['Poppins:SemiBold',sans-serif] text-[20px] text-[#37474f] truncate max-w-[250px]">
          {getCategoryNameTranslated(categoryName)}
        </p>
        <div className="absolute right-[16px] size-[24px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <g>
              <path clipRule="evenodd" d={svgPaths.pe9c65980} fill="var(--fill-0, #37474F)" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>

      {/* Scrollable Products Grid */}
      <div className="absolute left-0 right-0 top-[104px] bottom-[80px] overflow-y-auto">
        <div className="grid grid-cols-2 gap-4 p-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              imageUrl={productImages[product.id] || ''}
              onAddToCart={() => handleAddToCart(product)}
              onProductClick={() => onProductClick(product)}
            />
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNav 
        activeTab="home" 
        onHomeClick={onNavigateHome || onBack}
        onCartClick={onNavigateCart}
        onSearchClick={onNavigateSearch}
        onNotificationsClick={onNavigateNotifications}
        onAccountClick={onNavigateAccount}
      />

      {/* Speaker icon - clickable */}
      <button 
        onClick={handleSpeakerClick}
        className="absolute left-[347px] size-[14px] top-[55px] cursor-pointer bg-transparent border-none p-0 z-30"
        aria-label="Read category products information"
      >
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage31} />
      </button>

      <Toast
        message={toastMessage}
        isVisible={showToast}
        onHide={() => setShowToast(false)}
      />
    </div>
  );
}