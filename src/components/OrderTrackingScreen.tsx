import svgPaths from "../imports/svg-jrnbnpx9o8";
import imgMain2 from "figma:asset/db4e58fac23dd6eaeefc5f9b23a040409692e76a.png";
import imgImage14 from "figma:asset/d03302e0f3e2f3fa46271f24a22a8ff38ac65bc0.png";
import { imgMain1 } from "../imports/svg-7dh31";
import { useOrders, OrderStage } from '../contexts/OrderContext';
import { Phone } from 'lucide-react';
import { useState, useEffect } from 'react';

interface OrderTrackingScreenProps {
  orderId: string;
  onBack: () => void;
  onViewOrderDetails?: () => void;
  onViewDeliveryDetails?: () => void;
  onViewRealTimeTracking?: () => void;
  onContactSupport?: () => void;
}

function MaskGroup() {
  return (
    <div className="absolute bottom-0 contents left-[0.03%] right-[-0.02%] top-[0.02%]">
      <div className="absolute contents inset-[-15.22%_-58.02%_73.97%_-7.26%]">
        <div className="absolute flex inset-[-15.22%_-58.02%_73.97%_-7.26%] items-center justify-center">
          <div className="flex-none h-[593.695px] rotate-[263.271deg] skew-x-[4.646deg] w-[322.555px]">
            <div className="mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[27.34px_161.602px] mask-size-[374.954px_1060.83px] opacity-80 relative size-full" data-name="main (1)" style={{ maskImage: `url('${imgMain1}')` }}>
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[333.28%] left-[-725%] max-w-none top-[-109.86%] w-[1406.64%]" src={imgMain2} />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute backdrop-blur-[45px] backdrop-filter bg-gradient-to-b from-[rgba(252,252,252,0.6)] inset-[0.02%_-0.16%_73.97%_-0.01%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.16px_0px] mask-size-[374.954px_1060.83px] to-[rgba(255,255,255,0.6)]" style={{ maskImage: `url('${imgMain1}')` }} />
      </div>
      <div className="absolute contents inset-[81.29%_-0.06%_-0.03%_0.03%]">
        <div className="absolute flex inset-[81.29%_-0.06%_-0.03%_0.03%] items-center justify-center">
          <div className="flex-none h-[375.183px] rotate-[90deg] skew-x-[358.875deg] w-[191.477px]">
            <div className="mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-862.343px] mask-size-[374.954px_1060.83px] relative size-full" data-name="main (1)" style={{ maskImage: `url('${imgMain1}')` }}>
              <div className="absolute inset-0 opacity-75 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[415.76%] left-[-1201.44%] max-w-none top-[-144.82%] w-[1987.8%]" src={imgMain2} />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute backdrop-blur-[45px] backdrop-filter bg-[rgba(254,254,254,0.55)] bottom-0 left-[0.03%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-862.343px] mask-size-[374.954px_1060.83px] right-[-0.02%] top-[66.22%]" style={{ maskImage: `url('${imgMain1}')` }} />
      </div>
    </div>
  );
}

function Battery() {
  return (
    <div className="absolute inset-[39.39%_3.82%_34.85%_89.69%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 13">
        <rect height="11.6314" opacity="0.35" rx="2.16667" stroke="black" width="21" x="0.5" y="0.5" />
        <path d={svgPaths.p24100ad8} fill="black" opacity="0.4" />
        <rect fill="black" height="8.17323" rx="1.33333" width="18" x="2" y="2.22906" />
      </svg>
    </div>
  );
}

function TimeStyle() {
  return (
    <div className="absolute inset-[15.91%_80%_36.36%_5.6%]">
      <p className="absolute font-['SF_Pro_Text:Semibold',sans-serif] leading-[20px] left-0 not-italic right-0 text-[15px] text-black text-center top-[calc(50%-4.7px)] tracking-[-0.24px]">9:41</p>
    </div>
  );
}

function BarsStatusBarIPhoneLight() {
  return (
    <div className="absolute bottom-[95.38%] left-0 right-0 top-0">
      <Battery />
      <div className="absolute inset-[39.39%_11.64%_35.61%_84.27%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 13">
          <path d={svgPaths.p2897e100} fill="black" />
        </svg>
      </div>
      <div className="absolute inset-[40.15%_17.07%_35.61%_78.4%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 12">
          <path d={svgPaths.p11ae0c00} fill="black" />
        </svg>
      </div>
      <TimeStyle />
    </div>
  );
}

function BarsHomeIndicatorIPhoneLightPortrait() {
  return (
    <div className="absolute inset-[96.42%_31.73%_0.01%_32.53%]">
      <div className="absolute bg-black bottom-[11.89px] h-[5px] left-1/2 rounded-[100px] translate-x-[-50%] w-[134px]" />
    </div>
  );
}

interface ProgressBarProps {
  stage: OrderStage;
}

function ProgressBar({ stage }: ProgressBarProps) {
  const stages: OrderStage[] = ['confirmed', 'packaging', 'dispatched', 'delivered'];
  const currentIndex = stages.indexOf(stage);

  return (
    <div className="absolute inset-[21.49%_4.13%_78.42%_4.53%]">
      <div className="absolute inset-[-50%_-0.29%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 345 2">
          <g>
            {[0, 1, 2, 3].map((index) => {
              const isActive = index <= currentIndex;
              const xStart = 1 + index * 87.5;
              const xEnd = xStart + 80;
              return (
                <path
                  key={index}
                  d={`M${xStart} 1H${xEnd}`}
                  stroke={isActive ? '#FFD037' : 'rgba(55,71,79,0.14)'}
                  strokeLinecap="round"
                  strokeWidth="2"
                />
              );
            })}
          </g>
        </svg>
      </div>
    </div>
  );
}

const getStageText = (stage: OrderStage): string => {
  switch (stage) {
    case 'confirmed':
      return 'Your order is confirmed';
    case 'packaging':
      return 'We are packaging your products';
    case 'dispatched':
      return 'We are on the way';
    case 'delivered':
      return 'Order delivered';
    default:
      return 'Processing...';
  }
};

export default function OrderTrackingScreen({ 
  orderId, 
  onBack, 
  onViewOrderDetails,
  onViewDeliveryDetails,
  onViewRealTimeTracking,
  onContactSupport 
}: OrderTrackingScreenProps) {
  const { getOrderById, updateOrderStage } = useOrders();
  const order = getOrderById(orderId);

  // Demo: Auto-progress through stages for testing
  useEffect(() => {
    if (!order) return;
    
    const timer = setTimeout(() => {
      const currentStage = order.stage || 'confirmed';
      if (currentStage === 'confirmed') {
        updateOrderStage(orderId, 'packaging');
      } else if (currentStage === 'packaging') {
        updateOrderStage(orderId, 'dispatched');
      }
    }, 5000); // Progress every 5 seconds for demo

    return () => clearTimeout(timer);
  }, [order?.stage, orderId, updateOrderStage]);

  if (!order) {
    return (
      <div className="bg-white relative size-full flex items-center justify-center">
        <p className="font-['Poppins:Regular',sans-serif] text-[#37474f] text-[16px]">Order not found</p>
      </div>
    );
  }

  const currentStage = order.stage || 'confirmed';
  const showDeliveryRider = currentStage === 'dispatched' && order.deliveryRider;
  const stages: OrderStage[] = ['confirmed', 'packaging', 'dispatched', 'delivered'];

  const handleCallRider = () => {
    if (order.deliveryRider) {
      window.location.href = `tel:${order.deliveryRider.phone}`;
    }
  };

  return (
    <div className="bg-white relative size-full overflow-hidden">
      <MaskGroup />
      <BarsStatusBarIPhoneLight />
      <BarsHomeIndicatorIPhoneLightPortrait />

      {/* Header */}
      <div className="absolute h-[88px] left-px top-0 w-[375px] z-10 bg-white/80 backdrop-blur-sm">
        <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[normal] left-[58px] not-italic text-[#37474f] text-[20px] text-nowrap top-[47.32px] whitespace-pre">
          Order #{order.id.slice(-3)}
        </p>
        <button
          onClick={onBack}
          className="absolute left-[16px] size-[24px] top-[47.32px] cursor-pointer"
        >
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <path d={svgPaths.p6a58300} fill="#37474F" />
          </svg>
        </button>
      </div>

      {/* Scrollable Content */}
      <div className="absolute left-0 right-0 top-[88px] bottom-[34px] overflow-y-auto px-4">
        <div className="py-4">
          {/* Estimated Delivery */}
          <p className="font-['Poppins:Medium',sans-serif] text-[#37474f] text-[16px] mb-2">
            Estimated Delivery
          </p>
          <div className="flex items-center gap-3 mb-4">
            <div className="size-[28px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
                <path clipRule="evenodd" d={svgPaths.pfa57800} fill="#37474F" fillRule="evenodd" />
              </svg>
            </div>
            <p className="font-['Poppins:Regular',sans-serif] text-[#37474f] text-[32px]">
              {order.estimatedDeliveryTime || '50 - 60 mins'}
            </p>
          </div>
          <p className="font-['Poppins:Medium',sans-serif] text-[#f37a20] text-[17px] text-right mb-2">
            {order.scheduledTime || '6:30 pm'}
          </p>

          {/* Status Text */}
          <p className="font-['Poppins:Regular',sans-serif] text-[#777777] text-[16px] mb-4">
            {getStageText(currentStage)}
          </p>

          {/* Progress Bar */}
          <div className="relative h-[2px] w-full mb-6">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 345 2">
              <g>
                {[0, 1, 2, 3].map((index) => {
                  const isActive = index <= stages.indexOf(currentStage);
                  const xStart = 1 + index * 87.5;
                  const xEnd = xStart + 80;
                  return (
                    <path
                      key={index}
                      d={`M${xStart} 1H${xEnd}`}
                      stroke={isActive ? '#FFD037' : 'rgba(55,71,79,0.14)'}
                      strokeLinecap="round"
                      strokeWidth="2"
                    />
                  );
                })}
              </g>
            </svg>
          </div>

          {/* View Delivery Details Button */}
          <button
            onClick={onViewDeliveryDetails}
            className="w-full h-[48px] bg-[#ffd037] rounded-[8px] flex items-center justify-center mb-3 cursor-pointer"
          >
            <p className="font-['Poppins:Medium',sans-serif] text-[16px] text-black">View Delivery Details</p>
          </button>

          {/* View Order Details Button */}
          <button
            onClick={onViewOrderDetails}
            className="w-full h-[48px] bg-[#ffd037] rounded-[8px] flex items-center justify-center mb-6 cursor-pointer"
          >
            <p className="font-['Poppins:Medium',sans-serif] text-[16px] text-black">View Order Details</p>
          </button>

          {/* Delivery Man Section - Only show when dispatched */}
          {showDeliveryRider && order.deliveryRider && (
            <div className="mb-6">
              <p className="font-['Poppins:Medium',sans-serif] text-[#37474f] text-[16px] mb-3">
                Delivery Man
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="size-[50px] rounded-full overflow-hidden">
                    <img 
                      src={order.deliveryRider.photo} 
                      alt={order.deliveryRider.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-['Poppins:Medium',sans-serif] text-[#37474f] text-[14px]">
                      {order.deliveryRider.name}
                    </p>
                    <p className="font-['Poppins:Regular',sans-serif] text-[#37474f] text-[14px]">
                      {order.deliveryRider.phone}
                    </p>
                  </div>
                </div>
                <button
                  onClick={handleCallRider}
                  className="size-[50px] cursor-pointer"
                >
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 50">
                    <circle cx="25" cy="25" fill="#F37A20" fillOpacity="0.14" r="25" />
                    <g>
                      <path clipRule="evenodd" d={svgPaths.p2bd31fa0} fill="#F37A20" fillRule="evenodd" />
                    </g>
                  </svg>
                </button>
              </div>
            </div>
          )}

          {/* Delivery Location */}
          <p className="font-['Poppins:Medium',sans-serif] text-[#37474f] text-[16px] mb-3">
            Delivery Location
          </p>
          <div className="flex items-center gap-3 mb-6">
            <div className="size-[42px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 42">
                <path clipRule="evenodd" d={svgPaths.p99cfc00} fill="#236CD9" fillOpacity="0.121039" fillRule="evenodd" />
                <g>
                  <path clipRule="evenodd" d={svgPaths.p28e25700} fill="#37474F" fillRule="evenodd" />
                </g>
              </svg>
            </div>
            <p className="font-['Poppins:Regular',sans-serif] text-[#37474f] text-[14px] flex-1">
              {order.deliveryAddress}
            </p>
          </div>

          {/* Order Summary */}
          <div className="border-t border-[#E1E1E1] pt-4 mb-4">
            <div className="flex justify-between mb-3">
              <p className="font-['Poppins:Regular',sans-serif] text-[#37474f] text-[15px]">Subtotal</p>
              <p className="font-['Poppins:Regular',sans-serif] text-[#37474f] text-[15px]">Rs {order.subtotal}</p>
            </div>
            
            <div className="flex justify-between mb-3">
              <p className="font-['Poppins:Regular',sans-serif] text-[#37474f] text-[15px]">Delivery Charge</p>
              <p className="font-['Poppins:Regular',sans-serif] text-[#37474f] text-[15px]">Rs {order.deliveryCharge}</p>
            </div>
            
            <div className="flex justify-between mb-4">
              <p className="font-['Poppins:Medium',sans-serif] text-[#37474f] text-[15px]">Total</p>
              <p className="font-['Poppins:Medium',sans-serif] text-[#37474f] text-[15px]">Rs {order.total}</p>
            </div>
          </div>

          {/* Payment Method */}
          <p className="font-['Poppins:Medium',sans-serif] text-[#37474f] text-[16px] mb-3">Payment Method</p>
          <div className="bg-[rgba(94,196,1,0.17)] rounded-[12px] p-3 flex items-center gap-3 mb-3">
            <div className="h-[28px] w-[42px]">
              <img alt="" className="w-full h-full object-cover" src={imgImage14} />
            </div>
            <div>
              <p className="font-['Poppins:Regular',sans-serif] text-[rgba(55,71,79,0.72)] text-[14px]">You selected</p>
              <p className="font-['Poppins:SemiBold',sans-serif] text-[#37474f] text-[14px]">
                {order.paymentMethod === 'cod' ? 'Cash on Delivery' : order.paymentMethod}
              </p>
            </div>
          </div>
          <p className="font-['Poppins:Regular',sans-serif] text-[rgba(55,71,79,0.72)] text-[14px] leading-[20px] mb-6">
            Cash on delivery has some potential risks of spreading contamination. You can select other payment methods for a contactless safe delivery.
          </p>

          {/* Contact with Support Button */}
          <button
            onClick={onContactSupport}
            className="w-full h-[48px] bg-[#f37a20] rounded-[8px] flex items-center justify-center gap-2 cursor-pointer mb-4"
          >
            <p className="font-['Poppins:Medium',sans-serif] text-[16px] text-white">Contact with Support</p>
            <div className="size-[24px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <path clipRule="evenodd" d={svgPaths.p262f4d00} fill="white" fillRule="evenodd" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}