import svgPaths from "../imports/svg-7nfdeea9xv";
import imgImage1 from "figma:asset/29ed300ccff6824a03df80ebe2d191d2ea97bba5.png";
import imgImage16 from "figma:asset/d1a81c329997884332855549bf84957646c3655b.png";
import imgMain2 from "figma:asset/db4e58fac23dd6eaeefc5f9b23a040409692e76a.png";
import { imgMain1 } from "../imports/svg-mxxjq";
import { useCart } from '../contexts/CartContext';
import { useAddress } from '../contexts/AddressContext';
import { useOrders } from '../contexts/OrderContext';
import { Trash2, Plus, Minus, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useState } from 'react';
import { toast } from 'sonner@2.0.3';
import BottomNavigation from './BottomNavigation';
import { speak } from '../utils/textToSpeech';

interface CartScreenProps {
  onBack: () => void;
  onNavigateHome: () => void;
  onNavigateSearch: () => void;
  onNavigateNotifications: () => void;
  onNavigateAccount: () => void;
  onSelectAddress: () => void;
  onAddMoreProducts: () => void;
  onNavigatePaymentMethod?: () => void;
  onOrderPlaced?: (orderDetails: { orderId: string; date: string; time: string; total: number; paymentMethod: string; }) => void;
  selectedPaymentMethod?: string;
}

function MaskGroup() {
  return (
    <div className="absolute bottom-0 contents left-[0.03%] right-[-0.02%] top-[0.01%]">
      <div className="absolute contents inset-[-15.22%_-58.02%_73.98%_-7.26%]">
        <div className="absolute flex inset-[-15.22%_-58.02%_73.98%_-7.26%] items-center justify-center">
          <div className="flex-none h-[605.241px] rotate-[265.239deg] skew-x-[10.962deg] w-[455.372px]">
            <div className="mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[27.34px_228.934px] mask-size-[374.954px_1502.83px] opacity-80 relative size-full" style={{ maskImage: `url('${imgMain1}')` }}>
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[333.28%] left-[-725%] max-w-none top-[-109.86%] w-[1406.64%]" src={imgMain2} />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute backdrop-blur-[45px] backdrop-filter bg-gradient-to-b from-[rgba(252,252,252,0.6)] inset-[0.01%_-0.16%_73.98%_-0.01%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.16px_0px] mask-size-[374.954px_1502.83px] to-[rgba(255,255,255,0.6)]" style={{ maskImage: `url('${imgMain1}')` }} />
      </div>
      <div className="absolute contents inset-[66.21%_-0.06%_-0.03%_0.03%]">
        <div className="absolute contents inset-[81.29%_-0.06%_-0.03%_0.03%]">
          <div className="absolute flex inset-[81.29%_-0.06%_-0.03%_0.03%] items-center justify-center">
            <div className="flex-none h-[375.256px] rotate-[90deg] skew-x-[358.406deg] w-[271.256px]">
              <div className="mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-1221.64px] mask-size-[374.954px_1502.83px] relative size-full" style={{ maskImage: `url('${imgMain1}')` }}>
                <div className="absolute inset-0 opacity-75 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-[415.76%] left-[-1201.44%] max-w-none top-[-144.82%] w-[1987.8%]" src={imgMain2} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute backdrop-blur-[45px] backdrop-filter bg-[rgba(254,254,254,0.55)] bottom-0 left-[0.03%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-995.023px] mask-size-[374.954px_1502.83px] right-[-0.02%] top-[66.21%]" style={{ maskImage: `url('${imgMain1}')` }} />
      </div>
    </div>
  );
}

function Battery() {
  return (
    <div className="absolute inset-[39.39%_3.82%_34.85%_89.69%]">
      <svg className="block size-full" fill="none" viewBox="0 0 25 12">
        <rect height="10.3333" opacity="0.35" rx="2.16667" stroke="black" width="21" x="0.5" y="0.5" />
        <path d={svgPaths.p9ed9280} fill="black" opacity="0.4" />
        <rect fill="black" height="7.33333" rx="1.33333" width="18" x="2" y="2" />
      </svg>
    </div>
  );
}

function TimeStyle() {
  return (
    <div className="absolute inset-[15.91%_80%_36.36%_5.6%]">
      <p className="absolute font-['SF_Pro_Text:Semibold',sans-serif] leading-[20px] left-0 not-italic right-0 text-[15px] text-black text-center top-[calc(50%-4.5px)] tracking-[-0.24px]">9:41</p>
    </div>
  );
}

function BarsStatusBarIPhoneLight() {
  return (
    <div className="absolute bottom-[97.07%] left-0 right-0 top-0">
      <Battery />
      <div className="absolute inset-[39.39%_11.64%_35.61%_84.27%]">
        <svg className="block size-full" fill="none" viewBox="0 0 16 11">
          <path d={svgPaths.p39712400} fill="black" />
        </svg>
      </div>
      <div className="absolute inset-[40.15%_17.07%_35.61%_78.4%]">
        <svg className="block size-full" fill="none" viewBox="0 0 17 11">
          <path d={svgPaths.p26d17600} fill="black" />
        </svg>
      </div>
      <TimeStyle />
    </div>
  );
}

export default function CartScreen({
  onBack,
  onNavigateHome,
  onNavigateSearch,
  onNavigateNotifications,
  onNavigateAccount,
  onSelectAddress,
  onAddMoreProducts,
  onNavigatePaymentMethod,
  onOrderPlaced,
  selectedPaymentMethod
}: CartScreenProps) {
  const { cart, updateQuantity, removeFromCart, getTotalPrice, clearCart } = useCart();
  const { selectedAddress } = useAddress();
  const { addOrder } = useOrders();
  const { t, language } = useLanguage();
  const [selectedTime, setSelectedTime] = useState('11AM - 2 PM');
  const [selectedDate, setSelectedDate] = useState('Select Date');

  const deliveryCharge = 100;
  const subtotal = getTotalPrice();
  const total = subtotal + deliveryCharge;

  const timeSlots = [
    '8 AM - 11 AM',
    '11AM - 2 PM',
    '12 PM - 2 PM',
    '2 PM - 4 PM',
    '4 PM - 6 PM',
    '6 PM - 8 PM'
  ];

  // Generate next 7 days for date selection
  const getNextDays = (count: number) => {
    const days = [];
    const today = new Date();
    for (let i = 0; i < count; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
      const dayNum = date.getDate();
      const monthName = date.toLocaleDateString('en-US', { month: 'short' });
      days.push({
        label: `${dayName}, ${monthName} ${dayNum}`,
        value: `${monthName} ${dayNum}`,
        fullDate: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
      });
    }
    return days;
  };

  const availableDates = getNextDays(7);
  const [showDatePicker, setShowDatePicker] = useState(false);
  
  // Get payment method display name
  const getPaymentMethodName = (method: string) => {
    const methodMap: Record<string, { english: string; urdu: string }> = {
      'cod': { english: 'Cash on Delivery', urdu: 'ڈیلیوری پر نقد رقم' },
      'card': { english: 'Credit / Debit Card', urdu: 'کریڈٹ / ڈیبٹ کارڈ' },
      'jazzcash': { english: 'JazzCash', urdu: 'جاز کیش' },
      'easypaisa': { english: 'EasyPaisa', urdu: 'ایزی پیسہ' },
    };
    const methodInfo = methodMap[method] || methodMap['cod'];
    return language === 'urdu' ? methodInfo.urdu : methodInfo.english;
  };

  const handleSpeakerClick = () => {
    const text = language === 'english' 
      ? "This is your shopping cart. You can review items, select delivery time and address, choose payment method, and place your order."
      : "یہ آپ کی شاپنگ کارٹ ہے۔ آپ اشیاء کا جائزہ لے سکتے ہیں، ڈیلیوری کا وقت اور پتہ منتخب کر سکتے ہیں، ادائیگی  طریقہ منتخب کر سکتے ہیں، اور اپنا آرڈر دے سکتے ہیں۔";
    speak(text, language);
  };

  const handlePlaceOrder = () => {
    if (cart.length === 0) {
      toast.error(t('emptyCart'));
      return;
    }
    
    // Get current date
    const currentDate = new Date();
    const dateString = currentDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    
    // Create order in the orders context
    const orderId = addOrder({
      date: dateString,
      time: selectedTime,
      total: total,
      deliveryCharge: deliveryCharge,
      subtotal: subtotal,
      status: 'pending',
      paymentMethod: selectedPaymentMethod || 'cod',
      deliveryAddress: selectedAddress?.label || 'IBA Main Campus',
      items: cart.map(item => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        image: item.image
      }))
    });
    
    toast.success(t('orderPlaced'));
    
    const orderDetails = {
      orderId: orderId,
      date: dateString,
      time: selectedTime,
      total: total,
      paymentMethod: selectedPaymentMethod || t('cashOnDelivery')
    };
    
    clearCart();
    
    if (onOrderPlaced) {
      onOrderPlaced(orderDetails);
    } else {
      setTimeout(() => onNavigateHome(), 1500);
    }
  };

  return (
    <div className="bg-white relative size-full" dir={language === 'urdu' ? 'rtl' : 'ltr'}>
      <MaskGroup />
      <BarsStatusBarIPhoneLight />

      {/* Header */}
      <div className="absolute h-[88px] left-0 top-0 w-[375px] z-10">
        <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[normal] left-[58px] not-italic text-[#37474f] text-[20px] text-nowrap top-[47.32px] whitespace-pre">{t('myCart')}</p>
        <button 
          onClick={onBack} 
          className="absolute left-[16px] top-[47.32px] z-50 bg-white rounded-full p-1 shadow-lg border-none cursor-pointer hover:bg-gray-100 transition-colors w-[32px] h-[32px] flex items-center justify-center"
          aria-label="Go back"
        >
          <ArrowLeft className="w-[20px] h-[20px] text-[#37474F]" />
        </button>
        <button 
          onClick={handleSpeakerClick}
          className="absolute left-[342px] size-[16px] top-[51px] cursor-pointer bg-transparent border-none p-0"
          aria-label="Read cart screen information"
        >
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage16} />
        </button>
      </div>

      {/* Scrollable Content */}
      <div className="absolute left-0 right-0 top-[88px] bottom-[116px] overflow-y-auto px-4">
        {/* Products Section */}
        <div className="mt-4">
          <p className="font-['Poppins:SemiBold',sans-serif] text-[#37474f] text-[14px] mb-3">{t('products')}</p>
          
          {cart.length === 0 ? (
            <div className="bg-white rounded-[12px] p-8 text-center">
              <p className="font-['Poppins:Medium',sans-serif] text-[#37474f] text-[16px] mb-2">{t('emptyCart')}</p>
              <p className="font-['Poppins:Regular',sans-serif] text-[#757575] text-[14px]">{t('addProducts')}</p>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="bg-white rounded-[12px] p-4 mb-3 flex items-center gap-3">
                <img src={item.image} alt={item.name} className="w-[60px] h-[60px] rounded-[8px] object-cover" />
                <div className="flex-1">
                  <p className="font-['Poppins:Medium',sans-serif] text-[#37474f] text-[14px] line-clamp-2">{item.name}</p>
                  <p className="font-['Poppins:SemiBold',sans-serif] text-[#F37A20] text-[16px] mt-1">Rs {item.price}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="w-[32px] h-[32px] bg-[#F37A20] rounded-[8px] flex items-center justify-center"
                  >
                    <Minus className="text-white text-[18px]" />
                  </button>
                  <span className="font-['Poppins:Medium',sans-serif] text-[#37474f] text-[16px] w-[24px] text-center">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="w-[32px] h-[32px] bg-[#FFD037] rounded-[8px] flex items-center justify-center"
                  >
                    <Plus className="text-white text-[18px]" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Add More Product Button */}
        <button
          onClick={onAddMoreProducts}
          className="w-full bg-[#FFD037] rounded-[12px] h-[48px] flex items-center justify-center gap-2 mt-4 mb-6"
        >
          <span className="font-['Poppins:SemiBold',sans-serif] text-[#37474f] text-[16px]">{t('addMoreProduct')}</span>
          <span className="text-[#37474f] text-[24px]">+</span>
        </button>

        {/* Expected Date & Time */}
        <div className="mb-6">
          <p className="font-['Poppins:SemiBold',sans-serif] text-[#37474f] text-[14px] mb-3">{t('expectedDateTime')}</p>
          
          <button 
            onClick={() => setShowDatePicker(!showDatePicker)}
            className="w-full bg-white rounded-[12px] h-[48px] px-4 flex items-center justify-between mb-3"
          >
            <div className="flex items-center gap-2">
              <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
                <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM5 8V6h14v2H5zm2 4h10v2H7v-2z" fill="#37474F" />
              </svg>
              <span className="font-['Poppins:Regular',sans-serif] text-[#37474f] text-[14px]">{selectedDate === 'Select Date' ? t('selectDate') : selectedDate}</span>
            </div>
            <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
              <path d={showDatePicker ? "M7 14l5-5 5 5z" : "M7 10l5 5 5-5z"} fill="#37474F" />
            </svg>
          </button>

          {/* Date Picker Dropdown */}
          {showDatePicker && (
            <div className="mb-3 bg-white rounded-[12px] p-3 max-h-[200px] overflow-y-auto">
              {availableDates.map((date) => (
                <button
                  key={date.value}
                  onClick={() => {
                    setSelectedDate(date.value);
                    setShowDatePicker(false);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-[8px] mb-2 font-['Poppins:Medium',sans-serif] text-[14px] ${
                    selectedDate === date.value
                      ? 'bg-[#FFD037] text-[#37474f]'
                      : 'bg-[#F5F5F5] text-[#37474f] hover:bg-[#E8E8E8]'
                  }`}
                >
                  {date.label}
                </button>
              ))}
            </div>
          )}

          <div className="flex gap-2 overflow-x-auto pb-2">
            {timeSlots.map((slot) => (
              <button
                key={slot}
                onClick={() => setSelectedTime(slot)}
                className={`px-4 py-2 rounded-[8px] whitespace-nowrap font-['Poppins:Medium',sans-serif] text-[14px] ${
                  selectedTime === slot
                    ? 'bg-[#FFD037] text-[#37474f] border-2 border-[#FFD037]'
                    : 'bg-white text-[#37474f] border-2 border-[#E8E8E8]'
                }`}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>

        {/* Delivery Location */}
        <div className="mb-6">
          <p className="font-['Poppins:SemiBold',sans-serif] text-[#37474f] text-[14px] mb-3">{t('deliveryLocation')}</p>
          <button
            onClick={onSelectAddress}
            className="w-full bg-white rounded-[12px] h-[48px] px-4 flex items-center justify-between"
          >
            <div className="flex items-center gap-2">
              <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#37474F" />
              </svg>
              <span className="font-['Poppins:Regular',sans-serif] text-[#37474f] text-[14px]">
                {selectedAddress?.label || 'IBA Main Campus'}
              </span>
            </div>
            <span className="font-['Poppins:SemiBold',sans-serif] text-[#FFD037] text-[14px]">{t('changeAddress')}</span>
          </button>
        </div>

        {/* Price Summary */}
        <div className="bg-white rounded-[12px] p-4 mb-6">
          <div className="flex justify-between mb-2">
            <span className="font-['Poppins:Regular',sans-serif] text-[#37474f] text-[14px]">{t('subtotal')}</span>
            <span className="font-['Poppins:SemiBold',sans-serif] text-[#37474f] text-[14px]">Rs {subtotal}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="font-['Poppins:Regular',sans-serif] text-[#37474f] text-[14px]">{t('deliveryFee')}</span>
            <span className="font-['Poppins:SemiBold',sans-serif] text-[#37474f] text-[14px]">Rs {deliveryCharge}</span>
          </div>
          <div className="border-t border-[#E8E8E8] pt-2 flex justify-between">
            <span className="font-['Poppins:SemiBold',sans-serif] text-[#37474f] text-[16px]">{t('total')}</span>
            <span className="font-['Poppins:SemiBold',sans-serif] text-[#37474f] text-[16px]">Rs {total}</span>
          </div>
        </div>

        {/* Payment Method */}
        <div className="mb-6">
          <p className="font-['Poppins:SemiBold',sans-serif] text-[#37474f] text-[14px] mb-3">{t('paymentMethod')}</p>
          <button
            onClick={onNavigatePaymentMethod}
            className="w-full bg-[#E8F5E9] rounded-[12px] h-[48px] px-4 flex items-center justify-between"
          >
            <span className="font-['Poppins:Regular',sans-serif] text-[#37474f] text-[14px]">
              {selectedPaymentMethod 
                ? `${getPaymentMethodName(selectedPaymentMethod)} ${language === 'urdu' ? 'منتخب ہے۔ تبدیل کرنے کے لیے ٹیپ کریں' : 'selected. Tap to change payment method.'}` 
                : t('tapToSelectPaymentMethod')}
            </span>
            <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" fill="#37474F" />
            </svg>
          </button>
        </div>

        {/* Place Order Button */}
        <button
          onClick={handlePlaceOrder}
          disabled={cart.length === 0}
          className="w-full bg-[#FFD037] rounded-[12px] h-[56px] flex items-center justify-center gap-2 mb-8 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span className="font-['Poppins:SemiBold',sans-serif] text-[#37474f] text-[18px]">{t('placeOrder')}</span>
          <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" fill="#37474F" />
          </svg>
        </button>
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation
        currentPage="cart"
        onNavigateHome={onNavigateHome}
        onNavigateSearch={onNavigateSearch}
        onNavigateCart={() => {}}
        onNavigateNotifications={onNavigateNotifications}
        onNavigateAccount={onNavigateAccount}
      />
    </div>
  );
}