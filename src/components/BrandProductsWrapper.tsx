import { useState, useEffect } from 'react';
import { getProductsByBrand } from '../data/brandProducts';
import { Product } from '../data/categoryProducts';
import { useCart } from '../contexts/CartContext';
import { useLanguage } from '../contexts/LanguageContext';
import { speak } from '../utils/textToSpeech';
import { toast } from 'sonner@2.0.3';
import BottomNavigation from './BottomNavigation';
import imgImage32 from "figma:asset/d1a81c329997884332855549bf84957646c3655b.png";

interface BrandProductsWrapperProps {
  brandName: string;
  onBack: () => void;
  onProductClick: (product: Product) => void;
  onNavigateHome: () => void;
  onNavigateCart: () => void;
  onNavigateSearch: () => void;
  onNavigateNotifications: () => void;
  onNavigateAccount: () => void;
}

export default function BrandProductsWrapper({
  brandName,
  onBack,
  onProductClick,
  onNavigateHome,
  onNavigateCart,
  onNavigateSearch,
  onNavigateNotifications,
  onNavigateAccount
}: BrandProductsWrapperProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const { addToCart } = useCart();
  const { t, language } = useLanguage();

  useEffect(() => {
    const brandProducts = getProductsByBrand(brandName);
    setProducts(brandProducts);
  }, [brandName]);

  const handleSpeakerClick = () => {
    const productNames = products.map(p => 
      language === 'ur' ? (p.nameUrdu || p.name) : p.name
    ).join(', ');
    
    const text = language === 'ur'
      ? `${brandName} کی مصنوعات: ${productNames}`
      : `${brandName} products: ${productNames}`;
    
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
          {brandName}
        </h1>
        <button
          onClick={handleSpeakerClick}
          className="w-6 h-6 cursor-pointer bg-transparent border-none p-0"
          aria-label="Read brand products"
        >
          <img alt="" className="w-full h-full object-cover" src={imgImage32} />
        </button>
      </div>

      {/* Products Grid */}
      <div className="px-4 py-6 flex gap-4 overflow-x-auto pb-24">
        {products.length === 0 ? (
          <div className="w-full text-center py-12">
            <p className="font-['Inter:Regular',sans-serif] text-[16px] text-gray-500">
              {language === 'ur' ? 'کوئی مصنوعات نہیں ملیں' : 'No products found'}
            </p>
          </div>
        ) : (
          products.map((product) => (
            <div 
              key={product.id}
              className="bg-white rounded-[12px] p-4 w-[164px] flex-shrink-0 hover:shadow-md transition-shadow"
              style={{ minWidth: '164px' }}
            >
              <div onClick={() => onProductClick(product)} className="cursor-pointer">
                <div className="w-full h-[120px] mb-3 rounded-[8px] overflow-hidden bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="font-['Poppins:SemiBold',sans-serif] text-[14px] text-[#37474f] mb-2 line-clamp-2 h-[40px]">
                  {language === 'ur' ? (product.nameUrdu || product.name) : product.name}
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
                {language === 'ur' ? (product.weightUrdu || product.weight) : product.weight}
              </p>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  addToCart(product);
                  toast.success(t('productAddedToCart'));
                }}
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
                  {t('addToCart')}
                </p>
              </button>
            </div>
          ))
        )}
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