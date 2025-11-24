import svgPaths from "../imports/svg-1lijmwusm3";
import imgMain2 from "figma:asset/db4e58fac23dd6eaeefc5f9b23a040409692e76a.png";
import imgImage29 from "figma:asset/d1a81c329997884332855549bf84957646c3655b.png";
import { imgMain1 } from "../imports/svg-7tixi";
import { useOrders, OrderStage } from '../contexts/OrderContext';
import { Check } from 'lucide-react';

interface DeliveryDetailsScreenProps {
  orderId: string;
  onBack: () => void;
  onContactSupport?: () => void;
}

interface TimelineEvent {
  stage: OrderStage | 'waiting';
  title: string;
  timestamp: string;
  isCompleted: boolean;
  isActive: boolean;
}

function MaskGroup() {
  return (
    <div className="absolute bottom-0 contents left-[0.03%] right-[-0.02%] top-[0.02%]">
      <div className="absolute contents inset-[-15.21%_-58.02%_73.97%_-7.26%]">
        <div className="absolute flex inset-[-15.21%_-58.02%_73.97%_-7.26%] items-center justify-center">
          <div className="flex-none h-[589.013px] rotate-[261.32deg] skew-x-[0.169deg] w-[250.428px]">
            <div className="mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[27.34px_124.889px] mask-size-[374.954px_819.834px] opacity-80 relative size-full" style={{ maskImage: `url('${imgMain1}')` }}>
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[333.28%] left-[-725%] max-w-none top-[-109.86%] w-[1406.64%]" src={imgMain2} />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute backdrop-blur-[45px] backdrop-filter bg-gradient-to-b from-[rgba(252,252,252,0.6)] inset-[0.02%_-0.16%_73.97%_-0.01%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.16px_0px] mask-size-[374.954px_819.834px] to-[rgba(255,255,255,0.6)]" style={{ maskImage: `url('${imgMain1}')` }} />
      </div>
      <div className="absolute contents inset-[81.29%_-0.06%_-0.03%_0.03%]">
        <div className="absolute flex inset-[81.29%_-0.06%_-0.03%_0.03%] items-center justify-center">
          <div className="flex-none h-[375.154px] rotate-[90deg] skew-x-[359.13deg] w-[147.977px]">
            <div className="mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-666.437px] mask-size-[374.954px_819.834px] relative size-full" style={{ maskImage: `url('${imgMain1}')` }}>
              <div className="absolute inset-0 opacity-75 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[415.76%] left-[-1201.44%] max-w-none top-[-144.82%] w-[1987.8%]" src={imgMain2} />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute backdrop-blur-[45px] backdrop-filter bg-[rgba(254,254,254,0.55)] bottom-0 left-[0.03%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-542.811px] mask-size-[374.954px_819.834px] right-[-0.02%] top-[66.22%]" style={{ maskImage: `url('${imgMain1}')` }} />
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

const getBackgroundColor = (isCompleted: boolean, isActive: boolean): string => {
  if (isCompleted) return 'bg-[#ffd037]';
  if (isActive) return 'bg-[#ffd037]';
  return 'bg-[rgba(55,71,79,0.14)]';
};

const getIconColor = (isCompleted: boolean): string => {
  if (isCompleted) return '#5EC401';
  return '#FFD037';
};

export default function DeliveryDetailsScreen({ orderId, onBack, onContactSupport }: DeliveryDetailsScreenProps) {
  const { getOrderById } = useOrders();
  const order = getOrderById(orderId);

  if (!order) {
    return (
      <div className="bg-white relative size-full flex items-center justify-center">
        <p className="font-['Poppins:Regular',sans-serif] text-[#37474f] text-[16px]">Order not found</p>
      </div>
    );
  }

  const currentStage = order.stage || 'confirmed';

  // Generate timeline events based on current order state
  const generateTimeline = (): TimelineEvent[] => {
    const baseTime = new Date(order.date);
    const events: TimelineEvent[] = [
      {
        stage: 'waiting',
        title: 'Waiting for Confirmation',
        timestamp: new Date(baseTime.getTime()).toLocaleString('en-US', { 
          month: 'long', 
          day: 'numeric', 
          year: 'numeric',
          hour: 'numeric',
          minute: '2-digit',
          hour12: true 
        }),
        isCompleted: currentStage !== 'confirmed',
        isActive: false,
      },
      {
        stage: 'confirmed',
        title: 'Preparing your order',
        timestamp: new Date(baseTime.getTime() + 10 * 60000).toLocaleString('en-US', { 
          month: 'long', 
          day: 'numeric', 
          year: 'numeric',
          hour: 'numeric',
          minute: '2-digit',
          hour12: true 
        }),
        isCompleted: currentStage === 'packaging' || currentStage === 'dispatched' || currentStage === 'delivered',
        isActive: currentStage === 'confirmed',
      },
      {
        stage: 'packaging',
        title: 'Your order is being packaged',
        timestamp: new Date(baseTime.getTime() + 20 * 60000).toLocaleString('en-US', { 
          month: 'long', 
          day: 'numeric', 
          year: 'numeric',
          hour: 'numeric',
          minute: '2-digit',
          hour12: true 
        }),
        isCompleted: currentStage === 'dispatched' || currentStage === 'delivered',
        isActive: currentStage === 'packaging',
      },
      {
        stage: 'dispatched',
        title: 'Out for Delivery',
        timestamp: new Date(baseTime.getTime() + 25 * 60000).toLocaleString('en-US', { 
          month: 'long', 
          day: 'numeric', 
          year: 'numeric',
          hour: 'numeric',
          minute: '2-digit',
          hour12: true 
        }),
        isCompleted: currentStage === 'delivered',
        isActive: currentStage === 'dispatched',
      },
      {
        stage: 'delivered',
        title: 'Delivered!',
        timestamp: new Date(baseTime.getTime() + 50 * 60000).toLocaleString('en-US', { 
          month: 'long', 
          day: 'numeric', 
          year: 'numeric',
          hour: 'numeric',
          minute: '2-digit',
          hour12: true 
        }),
        isCompleted: currentStage === 'delivered',
        isActive: currentStage === 'delivered',
      },
    ];

    return events;
  };

  const timeline = generateTimeline();
  const deliveryDate = new Date(order.date).toLocaleDateString('en-US', { 
    month: 'long', 
    day: 'numeric', 
    year: 'numeric' 
  });

  return (
    <div className="bg-white relative size-full overflow-hidden">
      <MaskGroup />
      <BarsHomeIndicatorIPhoneLightPortrait />

      {/* Header */}
      <div className="absolute h-[88px] left-0 top-[3px] w-[375px]">
        <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[normal] left-[58px] not-italic text-[#37474f] text-[20px] text-nowrap top-[47.32px] whitespace-pre">
          Delivery Details
        </p>
        <button
          onClick={onBack}
          className="absolute block cursor-pointer left-[16px] size-[24px] top-[47.32px]"
        >
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <path d={svgPaths.p6a58300} fill="#37474F" />
          </svg>
        </button>
      </div>

      {/* KraveMart Logo */}
      <div className="absolute aspect-[222/227] left-[91.73%] right-[4%] top-[54px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage29} />
      </div>

      {/* Delivery Info */}
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[normal] left-[17px] not-italic text-[#37474f] text-[16px] text-nowrap top-[121px] tracking-[0.6px] whitespace-pre">
        {currentStage === 'delivered' ? 'Delivered on' : 'Estimated Delivery'}
      </p>
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[32px] left-[359px] not-italic text-[#f37a20] text-[17px] text-nowrap text-right top-[121px] tracking-[0.9775px] translate-x-[-100%] whitespace-pre">
        {order.scheduledTime || '6:30 pm'}
      </p>

      {/* Delivery Date */}
      <div className="absolute left-[17px] size-[28px] top-[169px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
          <path clipRule="evenodd" d={svgPaths.pfa57800} fill="#37474F" fillRule="evenodd" />
        </svg>
      </div>
      <p className="absolute font-['Poppins:Regular',sans-serif] h-[48px] leading-[normal] left-[58px] not-italic text-[#37474f] text-[24px] top-[169px] tracking-[1.28px] w-[259px]">
        {deliveryDate}
      </p>

      {/* Timeline */}
      <div className="absolute left-[16px] right-[16px] top-[238px] bottom-[120px] overflow-y-auto">
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[11px] top-[35px] bottom-[35px] w-px">
            <svg className="w-full h-full" preserveAspectRatio="none">
              <line 
                x1="0" 
                y1="0" 
                x2="0" 
                y2="100%" 
                stroke="#C6C6C6" 
                strokeWidth="1.5" 
                strokeDasharray="5 10"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Timeline Events */}
          <div className="space-y-3">
            {timeline.map((event, index) => (
              <div key={index} className="relative flex gap-3">
                {/* Icon */}
                <div className="flex-shrink-0 size-[17px] mt-[8px]">
                  {event.stage === 'waiting' ? (
                    <svg className="block size-full" fill="none" viewBox="0 0 17 17">
                      <circle cx="8.5" cy="8.5" fill="white" r="8" stroke="#37474F" />
                    </svg>
                  ) : event.stage === 'delivered' && event.isCompleted ? (
                    <svg className="block size-full" fill="none" viewBox="0 0 17 17">
                      <circle cx="8.5" cy="8.5" fill="#5EC401" r="8.5" />
                      <path d={svgPaths.p309a5900} fill="white" />
                    </svg>
                  ) : (
                    <svg className="block size-full" fill="none" viewBox="0 0 17 17">
                      <circle cx="8.5" cy="8.5" fill="#FFD037" r="8.5" />
                      <path d={svgPaths.p309a5900} fill="white" />
                    </svg>
                  )}
                </div>

                {/* Event Card */}
                <div className={`flex-1 ${getBackgroundColor(event.isCompleted, event.isActive)} rounded-[12px] p-4`}>
                  <p className="font-['Poppins:Medium',sans-serif] text-[#37474f] text-[16px] mb-1">
                    {event.title}
                  </p>
                  <p className="font-['Poppins:Regular',sans-serif] text-[#37474f] text-[14px]">
                    {event.timestamp}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact with Support Button */}
      <button
        onClick={onContactSupport}
        className="absolute h-[48px] left-[17px] bottom-[50px] w-[343px] cursor-pointer"
      >
        <div className="absolute bg-[#f37a20] inset-0 rounded-[8px]" />
        <div className="absolute flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] left-[164px] not-italic text-[16px] text-center text-nowrap text-white top-1/2 translate-x-[-50%] translate-y-[-50%]">
          <p className="leading-[normal] whitespace-pre">Contact with Support</p>
        </div>
        <div className="absolute right-[16px] size-[24px] top-1/2 translate-y-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <path clipRule="evenodd" d={svgPaths.p262f4d00} fill="white" fillRule="evenodd" />
          </svg>
        </div>
      </button>
    </div>
  );
}
