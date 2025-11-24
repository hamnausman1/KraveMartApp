import svgPaths from "../imports/svg-kw6sld9u5g";
import imgImage28 from "figma:asset/d1a81c329997884332855549bf84957646c3655b.png";
import imgImage1 from "figma:asset/29ed300ccff6824a03df80ebe2d191d2ea97bba5.png";
import { imgSurfaceColor } from "../imports/svg-q3t8b";
import { useOrders } from '../contexts/OrderContext';
import { MessageCircle, Phone, MapPin } from 'lucide-react';

interface RealTimeTrackingScreenProps {
  orderId: string;
  onBack: () => void;
  onViewDeliveryDetails?: () => void;
  onViewOrderDetails?: () => void;
}

function BarsStatusBarIPhoneLight() {
  return (
    <div className="absolute bottom-[94.58%] left-0 right-0 top-0">
      <div className="absolute inset-[39.39%_3.82%_34.85%_89.69%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 12">
          <rect height="10.3333" opacity="0.35" rx="2.16667" stroke="black" width="21" x="0.5" y="0.5" />
          <path d={svgPaths.p9ed9280} fill="black" opacity="0.4" />
          <rect fill="black" height="7.33333" rx="1.33333" width="18" x="2" y="2" />
        </svg>
      </div>
      <div className="absolute inset-[39.39%_11.64%_35.61%_84.27%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 11">
          <path d={svgPaths.p39712400} fill="black" />
        </svg>
      </div>
      <div className="absolute inset-[40.15%_17.07%_35.61%_78.4%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 11">
          <path d={svgPaths.p26d17600} fill="black" />
        </svg>
      </div>
      <div className="absolute inset-[15.91%_80%_36.36%_5.6%]">
        <p className="absolute font-['SF_Pro_Text:Semibold',sans-serif] leading-[20px] left-0 not-italic right-0 text-[15px] text-black text-center top-[calc(50%-4.5px)] tracking-[-0.24px]">9:41</p>
      </div>
    </div>
  );
}

function BarsHomeIndicatorIPhoneLightPortrait() {
  return (
    <div className="absolute bottom-0 left-[32.53%] right-[31.73%] top-[95.81%]">
      <div className="absolute bg-black bottom-[12px] h-[5px] left-1/2 rounded-[100px] translate-x-[-50%] w-[134px]" />
    </div>
  );
}

export default function RealTimeTrackingScreen({ 
  orderId, 
  onBack, 
  onViewDeliveryDetails,
  onViewOrderDetails 
}: RealTimeTrackingScreenProps) {
  const { getOrderById } = useOrders();
  const order = getOrderById(orderId);

  if (!order) {
    return (
      <div className="bg-white relative size-full flex items-center justify-center">
        <p className="font-['Poppins:Regular',sans-serif] text-[#37474f] text-[16px]">Order not found</p>
      </div>
    );
  }

  const isDispatched = order.stage === 'dispatched';
  const rider = order.deliveryRider;

  const handleCallRider = () => {
    if (rider) {
      window.location.href = `tel:${rider.phone}`;
    }
  };

  return (
    <div className="bg-white relative size-full overflow-hidden">
      {/* Map Background */}
      <div className="absolute h-[812px] left-px top-[-159px] w-[375px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage1} />
      </div>

      <BarsStatusBarIPhoneLight />
      <BarsHomeIndicatorIPhoneLightPortrait />

      {/* Back Button */}
      <button 
        onClick={onBack}
        className="absolute block cursor-pointer left-[20px] size-[47px] top-[56px] z-10"
      >
        <div className="absolute inset-[-10.64%_-14.89%_-19.15%_-14.89%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 61 61">
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="61" id="filter0_d" width="61" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="2" />
                <feGaussianBlur stdDeviation="3.5" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.24 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow" mode="normal" result="shape" />
              </filter>
            </defs>
            <circle cx="30.5" cy="28.5" fill="white" r="23.5" filter="url(#filter0_d)" />
            <path d={svgPaths.p15172780} fill="#37474F" />
          </svg>
        </div>
      </button>

      {/* Destination Pin (Red) */}
      <div className="absolute left-[162px] size-[41px] top-[143px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 41 41">
          <path clipRule="evenodd" d={svgPaths.p35ceb000} fill="#E90808" fillRule="evenodd" />
        </svg>
      </div>

      {/* Current Location Pin (Yellow) */}
      <div className="absolute h-[26px] left-[83px] top-[366px] w-[28px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 26">
          <path clipRule="evenodd" d={svgPaths.p3ed5f500} fill="#FFD037" fillRule="evenodd" />
        </svg>
      </div>

      {/* Delivery Route Lines */}
      <div className="absolute h-[68.09px] left-[80.54px] top-[204.62px] w-[105.432px]">
        <div className="absolute inset-[-2.94%_-1.9%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 110 73">
            <path d={svgPaths.p31a1e40} stroke="black" strokeLinecap="round" strokeWidth="4" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[21.835px] left-[79.25px] top-[272.77px] w-[4.32px]">
        <div className="absolute inset-[-9.16%_-46.31%_-9.16%_-46.3%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 26">
            <path d={svgPaths.p2cf87c80} stroke="black" strokeLinecap="round" strokeWidth="4" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[36.586px] left-[83.71px] top-[294.19px] w-[17.652px]">
        <div className="absolute inset-[-5.47%_-11.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 41">
            <path d={svgPaths.p1da57100} stroke="black" strokeLinecap="round" strokeWidth="4" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[38.755px] left-[101.21px] top-[330.94px] w-[16.031px]">
        <div className="absolute inset-[-5.16%_-12.48%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 43">
            <path d={svgPaths.p3f1a5400} stroke="black" strokeLinecap="round" strokeWidth="4" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[20.935px] left-[97.72px] top-[369.32px] w-[20.325px]">
        <div className="absolute inset-[-9.55%_-9.84%_-9.56%_-9.84%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
            <path d={svgPaths.p1b260d00} stroke="black" strokeLinecap="round" strokeWidth="4" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[23.054px] left-[179.69px] top-[181.16px] w-[6.554px]">
        <div className="absolute inset-[-8.68%_-30.52%_-8.68%_-30.51%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 28">
            <path d={svgPaths.p308f13c0} stroke="black" strokeLinecap="round" strokeWidth="4" />
          </svg>
        </div>
      </div>

      {/* Rider Avatar (if dispatched) */}
      {isDispatched && rider && (
        <div className="absolute h-[36px] left-[79px] top-[calc(50%-39px)] translate-y-[-50%] w-[33px]">
          <img alt={rider.name} className="block max-w-none size-full rounded-full object-cover" src={rider.photo} />
        </div>
      )}

      {/* Bottom Sheet */}
      <div className="absolute inset-[56.77%_-0.27%_-21.43%_0.27%] overflow-clip">
        <div className="absolute bg-neutral-50 inset-0 rounded-tl-[6px] rounded-tr-[6px] shadow-[0px_-6px_10px_0px_rgba(0,0,0,0.14),0px_-3px_5px_0px_rgba(25,170,248,0.2)]" />
        
        {/* Surface Content */}
        <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-10px_-16px] mask-size-[395px_545px]" style={{ maskImage: `url('${imgSurfaceColor}')` }}>
          <div className="absolute bg-white inset-0 shadow-[0px_-4px_12px_0px_rgba(55,71,79,0.17)]" />
          
          {/* KraveMart Logo */}
          <div className="absolute aspect-[222/227] left-[91.47%] right-[4.27%] top-[10px]">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage28} />
          </div>

          {/* Scrollable Content */}
          <div className="absolute left-[16px] right-[16px] top-[30px] bottom-[180px] overflow-y-auto">
            {/* Estimated Arrival */}
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="size-[34px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
                    <path clipRule="evenodd" d={svgPaths.p359abcc0} fill="#37474F" fillRule="evenodd" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="font-['Poppins:Medium',sans-serif] text-[#37474f] text-[16px]">Estimated Arrival</p>
                  <p className="font-['Poppins:Medium',sans-serif] text-[#f37a20] text-[17px]">{order.scheduledTime || '6:30 pm'}</p>
                </div>
              </div>
              <p className="font-['Poppins:Regular',sans-serif] text-[#37474f] text-[32px]">&lt; {order.estimatedDeliveryTime || '10 mins'}</p>
            </div>

            {/* Status Message */}
            <p className="font-['Poppins:Regular',sans-serif] text-[#777777] text-[16px] mb-4">
              {isDispatched ? 'We are delivering this order to you' : 'Your order is being prepared'}
            </p>

            {/* Progress Bar */}
            <div className="relative h-[2px] w-full mb-6">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 345 2">
                <path d="M1 1H81" stroke="#FFD037" strokeLinecap="round" strokeWidth="2" />
                <path d="M88.5 1H168.5" stroke="#FFD037" strokeLinecap="round" strokeWidth="2" />
                <path d="M176 1H256" stroke="#FFD037" strokeLinecap="round" strokeWidth="2" />
                <path d="M263.5 1H343.5" stroke={isDispatched ? '#FFD037' : 'rgba(55,71,79,0.14)'} strokeLinecap="round" strokeWidth="2" />
              </svg>
            </div>

            {/* Delivery Man Section (if dispatched) */}
            {isDispatched && rider && (
              <div className="mb-6 bg-[rgba(255,208,55,0.1)] rounded-[12px] p-4">
                <p className="font-['Poppins:Medium',sans-serif] text-[#37474f] text-[16px] mb-3">Delivery Man</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="size-[50px] rounded-full overflow-hidden">
                      <img src={rider.photo} alt={rider.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="font-['Poppins:Medium',sans-serif] text-[#37474f] text-[14px]">{rider.name}</p>
                      <p className="font-['Poppins:Regular',sans-serif] text-[#37474f] text-[14px]">{rider.phone}</p>
                    </div>
                  </div>
                  <button
                    onClick={handleCallRider}
                    className="size-[50px] bg-[rgba(243,122,32,0.14)] rounded-full flex items-center justify-center cursor-pointer"
                  >
                    <Phone size={24} color="#F37A20" />
                  </button>
                </div>
              </div>
            )}

            {/* Delivery Location */}
            <p className="font-['Poppins:Medium',sans-serif] text-[#37474f] text-[16px] mb-3">Delivery Location</p>
            <div className="flex gap-3 mb-4">
              <div className="size-[42px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 42">
                  <circle cx="21" cy="21" fill="#236CD9" fillOpacity="0.121039" r="21" />
                  <path d="M21 11.375C17.5482 11.375 14.75 14.1732 14.75 17.625C14.75 22.3125 21 30.625 21 30.625C21 30.625 27.25 22.3125 27.25 17.625C27.25 14.1732 24.4518 11.375 21 11.375ZM21 19.875C19.7574 19.875 18.75 18.8676 18.75 17.625C18.75 16.3824 19.7574 15.375 21 15.375C22.2426 15.375 23.25 16.3824 23.25 17.625C23.25 18.8676 22.2426 19.875 21 19.875Z" fill="#37474F" />
                </svg>
              </div>
              <p className="font-['Poppins:Regular',sans-serif] text-[#37474f] text-[14px] flex-1">{order.deliveryAddress}</p>
            </div>

            {/* Payment Status */}
            <p className="font-['Poppins:Medium',sans-serif] text-[#37474f] text-[16px] mb-2">Payment Status</p>
            <p className="font-['Poppins:Regular',sans-serif] text-[#37474f] text-[15px] mb-4">
              Unpaid ({order.paymentMethod === 'cod' ? 'Cash on Delivery' : order.paymentMethod})
            </p>

            <div className="h-px w-full bg-[#E1E1E1] my-4" />

            {/* Order Summary */}
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <p className="font-['Poppins:Regular',sans-serif] text-[#37474f] text-[15px]">Subtotal</p>
                <p className="font-['Poppins:Regular',sans-serif] text-[#37474f] text-[15px]">Rs {order.subtotal}</p>
              </div>
              <div className="flex justify-between">
                <p className="font-['Poppins:Regular',sans-serif] text-[#37474f] text-[15px]">Delivery Charge</p>
                <p className="font-['Poppins:Regular',sans-serif] text-[#37474f] text-[15px]">Rs {order.deliveryCharge}</p>
              </div>
              <div className="flex justify-between">
                <p className="font-['Poppins:Medium',sans-serif] text-[#37474f] text-[15px]">Total</p>
                <p className="font-['Poppins:Medium',sans-serif] text-[#37474f] text-[15px]">Rs {order.total}</p>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="absolute left-[16px] right-[16px] bottom-[20px] space-y-3">
            <button
              onClick={onViewDeliveryDetails}
              className="w-full h-[48px] bg-[#ffd037] rounded-[8px] flex items-center justify-center cursor-pointer"
            >
              <p className="font-['Poppins:Medium',sans-serif] text-[16px] text-black">View Delivery Details</p>
            </button>
            <button
              onClick={onViewOrderDetails}
              className="w-full h-[48px] bg-[#ffd037] rounded-[8px] flex items-center justify-center cursor-pointer"
            >
              <p className="font-['Poppins:Medium',sans-serif] text-[16px] text-black">View Order Details</p>
            </button>
          </div>
        </div>

        {/* Bottom Sheet Pill */}
        <div className="absolute h-[5px] left-1/2 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-187.5px_-28px] mask-size-[395px_545px] top-[12px] translate-x-[-50%] w-[20px]" style={{ maskImage: `url('${imgSurfaceColor}')` }}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 5">
            <path d={svgPaths.p28085900} fill="#37474F" fillOpacity="0.37" />
          </svg>
        </div>
      </div>
    </div>
  );
}