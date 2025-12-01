import svgPaths from "../imports/svg-zx22j04097";
import imgMain2 from "figma:asset/db4e58fac23dd6eaeefc5f9b23a040409692e76a.png";
import imgImage31 from "figma:asset/d1a81c329997884332855549bf84957646c3655b.png";
import { imgMain1 } from "../imports/svg-par9f";
import { Product, getCategoryProducts } from '../data/categoryProducts';
import { useCart } from '../contexts/CartContext';
import { useState } from 'react';
import Toast from './Toast';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { speak } from '../utils/textToSpeech';
import { ttsMessages } from '../utils/ttsMessages';
import { useLanguage } from '../contexts/LanguageContext';

function Group2() {
  return (
    <div className="absolute contents inset-[-17.28%_-58.14%_74.67%_-7.58%]">
      <div className="absolute flex inset-[-17.28%_-58.14%_74.67%_-7.58%] items-center justify-center">
        <div className="flex-none h-[604.908px] rotate-[265.027deg] skew-x-[10.142deg] w-[437.128px]">
          <div className="mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[28.414px_143.236px] mask-size-[382px_1494px] opacity-80 relative size-full" data-name="main (1)" style={{ maskImage: `url('${imgMain1}')` }}>
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[333.28%] left-[-725%] max-w-none top-[-109.86%] w-[1406.64%]" src={imgMain2} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[-17.28%_-58.14%_74.67%_-7.58%]">
      <Group2 />
      <div className="absolute backdrop-blur-[45px] backdrop-filter bg-gradient-to-b from-[rgba(252,252,252,0.6)] inset-[-1.54%_-0.13%_74.67%_-0.31%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[1.163px_-76.457px] mask-size-[382px_1494px] to-[rgba(255,255,255,0.6)]" style={{ maskImage: `url('${imgMain1}')` }} />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[82.43%_-0.02%_-1.8%_-0.27%]">
      <div className="absolute flex inset-[82.43%_-0.02%_-1.8%_-0.27%] items-center justify-center">
        <div className="flex-none h-[376.229px] rotate-[90deg] skew-x-[358.475deg] w-[260.307px]">
          <div className="mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[1.002px_-1248.78px] mask-size-[382px_1494px] relative size-full" data-name="main (1)" style={{ maskImage: `url('${imgMain1}')` }}>
            <div className="absolute inset-0 opacity-75 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[415.76%] left-[-1201.44%] max-w-none top-[-144.82%] w-[1987.8%]" src={imgMain2} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-[66.86%_-0.02%_-1.8%_-0.27%]">
      <Group1 />
      <div className="absolute backdrop-blur-[45px] backdrop-filter bg-[rgba(254,254,254,0.55)] inset-[66.86%_0.02%_-1.76%_-0.27%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[1.002px_-1031.31px] mask-size-[382px_1494px]" style={{ maskImage: `url('${imgMain1}')` }} />
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute bottom-0 contents left-0 right-[-1.87%] top-[-7.02%]" data-name="Mask Group">
      <Group3 />
      <Group4 />
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
    <div className="absolute bottom-[96.85%] left-0 right-0 top-0" data-name="Bars / Status Bar / iPhone / Light">
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

interface ProductDetailsProps {
  product: Product;
  productImage: string;
  onBack: () => void;
  relatedProductImages: Record<string, string>;
  onProductClick: (product: Product) => void;
}

export default function ProductDetails({ product, productImage, onBack, relatedProductImages, onProductClick }: ProductDetailsProps) {
  const { addToCart } = useCart();
  const { language } = useLanguage();
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);
  
  // Get related products from the same category (excluding current product)
  const categoryProducts = getCategoryProducts(product.category);
  const relatedProducts = categoryProducts.filter(p => p.id !== product.id).slice(0, 2);

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: productImage,
      category: product.category,
    });
    setToastMessage(`${product.name} added to cart!`);
    setShowToast(true);
  };

  const handleSpeakerClick = () => {
    // Create a detailed message with product information
    let message = '';
    
    if (language === 'english') {
      message = `${product.name}. ${product.description}. Price: ${product.price} rupees. High quality ${product.name.toLowerCase()} available at KraveMart. Fresh and carefully selected for the best quality.`;
    } else {
      // Use Urdu product info if available
      const productNameUrdu = product.nameUrdu || product.name;
      const productDescUrdu = product.descriptionUrdu || product.description;
      message = `${productNameUrdu}۔ ${productDescUrdu}۔ قیمت: ${product.price} روپے۔ کریو مارٹ پر اعلیٰ معیار کی ${productNameUrdu} دستیاب ہے۔ تازہ اور بہترین معیار کے لیے احتیاط سے منتخب کیا گیا۔`;
    }
    
    speak(message, language);
  };

  return (
    <div className="bg-white relative size-full overflow-hidden max-w-[375px] mx-auto" data-name="Product Details home">
      <MaskGroup />
      
      {/* Fixed Header - App Bar */}
      <div className="fixed h-[88px] left-0 right-0 top-[3px] max-w-[375px] mx-auto z-20 bg-white/95 backdrop-blur-sm">
        <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[normal] left-[58px] not-italic text-[#37474f] text-[20px] text-nowrap top-[47.32px] whitespace-pre">Product Details</p>
        <button onClick={onBack} className="absolute left-[16px] size-[24px] top-[47.32px] cursor-pointer bg-transparent border-none p-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <g id="navigation/arrow_backward_24px">
              <path d={svgPaths.p6a58300} fill="var(--fill-0, #37474F)" id="icon/navigation/arrow_backward_24px" />
            </g>
          </svg>
        </button>
        
        {/* Speaker Icon - Fixed in header */}
        <button 
          onClick={handleSpeakerClick}
          className="absolute left-[339px] size-[16px] top-[54px] cursor-pointer bg-transparent border-none p-0 z-30"
          aria-label="Read product details information"
        >
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage31} />
        </button>
      </div>

      <BarsStatusBarIPhoneLight />

      {/* Scrollable Content Area */}
      <div className="absolute top-[91px] left-0 right-0 bottom-[81px] overflow-y-auto overflow-x-hidden">
        {/* Main Product Image */}
        <div className="mt-[13px] mx-[41px] h-[180px] rounded-[9px]">
          <ImageWithFallback 
            alt={product.name}
            className="w-full h-full object-contain rounded-[9px]" 
            src={productImage}
          />
        </div>

        {/* Product Name */}
        <div className="mt-[16px] mx-[16px]">
          <p className="font-['Poppins:Medium',sans-serif] text-[20px] text-black text-center leading-[1.3]">{product.name}</p>
        </div>

        {/* Thumbnail with Description next to it */}
        <div className="mx-[16px] mt-[54px] flex items-center gap-4">
          <div className="pointer-events-none rounded-[7px] size-[66px] shrink-0 relative">
            <ImageWithFallback 
              alt={product.name}
              className="w-full h-full object-contain rounded-[7px]"
              src={productImage}
            />
            <div aria-hidden="true" className="absolute border-2 border-[#ffd037] border-solid inset-[-1px] rounded-[8px]" />
          </div>
          
          {/* Product Description next to thumbnail */}
          <div className="flex-1">
            <p className="font-['Poppins:Bold',sans-serif] text-[#3e3e3e] text-[24px] leading-[1.2]">{product.description}</p>
          </div>
        </div>

        {/* Price */}
        <p className="font-['Poppins:Bold',sans-serif] leading-[normal] text-right mr-[16px] mt-[28px] text-[#ffd037] text-[29px]">Rs. {product.price}</p>

        {/* Category Icon */}
        <div className="mx-[16px] mt-[20px] flex items-center gap-3">
          <div className="size-[24px] shrink-0">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <g id="icon/action/query_builder_24px copy">
                <path clipRule="evenodd" d={svgPaths.p2502f00} fill="var(--fill-0, #37474F)" fillRule="evenodd" id="icon/content/sort_24px" />
              </g>
            </svg>
          </div>
          <p className="font-['Poppins:Medium',sans-serif] text-[#3e3e3e] text-[16px] tracking-[0.6px]">{product.category}</p>
        </div>

        {/* Product Description/Details */}
        <div className="mx-[16px] mr-[19px] mt-[24px]">
          <div className="flex items-start gap-3">
            <div className="size-[24px] shrink-0 mt-1">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <g id="icon/action/query_builder_24px copy">
                  <path clipRule="evenodd" d={svgPaths.pfbc9c00} fill="var(--fill-0, #37474F)" fillRule="evenodd" id="icon/navigation/menu_24px" />
                </g>
              </svg>
            </div>
            <p className="font-['Poppins:Medium',sans-serif] leading-[1.5] text-[#3e3e3e] text-[16px] tracking-[0.6px] flex-1">
              High quality {product.name.toLowerCase()} available at KraveMart. Fresh and carefully selected for the best quality. {product.description}
            </p>
          </div>
        </div>

        {/* Related Products Title */}
        <p className="font-['Poppins:Medium',sans-serif] leading-[normal] mx-[17px] mt-[52px] not-italic text-[#37474f] text-[16px] tracking-[0.6px]">You can also check this items</p>

        {/* Related Products */}
        <div className="mt-[10px] mb-[20px]">
          {relatedProducts.map((relatedProduct, index) => (
            <button
              key={relatedProduct.id}
              onClick={() => onProductClick(relatedProduct)}
              className="relative h-[164px] w-full cursor-pointer bg-transparent border-none p-0 text-left mb-[1px]"
            >
              <div className="absolute inset-[12.8%_64.89%_13.41%_4.52%] rounded-[9px]">
                <ImageWithFallback
                  alt={relatedProduct.name}
                  className="absolute inset-0 max-w-none object-contain object-center pointer-events-none rounded-[9px] size-full"
                  src={relatedProductImages[relatedProduct.id] || ''}
                />
              </div>
              <div className="absolute bottom-0 left-[0.27%] right-0 h-[2px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 376 2">
                  <path d={svgPaths.pcffcb00} id="divider" stroke="var(--stroke-0, #F0F0F0)" strokeLinecap="square" />
                </svg>
              </div>
              <p className="absolute font-['Poppins:Medium',sans-serif] leading-[normal] left-[39.63%] top-[27px] right-[6.38%] not-italic text-[#37474f] text-[16px] tracking-[0.6px]">{relatedProduct.name}</p>
              <p className="absolute font-['Poppins:SemiBold',sans-serif] left-[39.63%] top-[107px] leading-[normal] not-italic text-[#f37a20] text-[20px] text-nowrap whitespace-pre">Rs. {relatedProduct.price}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Fixed Add to Cart Button - Always visible at bottom */}
      <div className="fixed bottom-0 left-0 right-0 max-w-[375px] mx-auto z-30 bg-white pt-2 pb-[33px]">
        <button
          onClick={handleAddToCart}
          className="h-[48px] mx-[16px] w-[calc(100%-32px)] cursor-pointer border-none p-0 bg-[#ffd037] rounded-[8px] shadow-lg relative"
        >
          <div className="absolute flex items-center gap-2 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="size-[20px]">
              <svg className="block size-full" fill="none" viewBox="0 0 24 24">
                <path 
                  d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" 
                  fill="#37474F" 
                />
              </svg>
            </div>
            <p className="font-['Poppins:Medium',sans-serif] text-[16px] text-black whitespace-nowrap">Add to Cart</p>
          </div>
        </button>
      </div>

      <Toast message={toastMessage} isVisible={showToast} onHide={() => setShowToast(false)} />
    </div>
  );
}