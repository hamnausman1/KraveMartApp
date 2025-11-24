import svgPaths from '../imports/svg-2h47n1ddb9';
import imgImage16 from "figma:asset/d1a81c329997884332855549bf84957646c3655b.png";
import imgMain2 from "figma:asset/db4e58fac23dd6eaeefc5f9b23a040409692e76a.png";
import { imgMain1 } from "../imports/svg-g538o";
import { useOrders } from '../contexts/OrderContext';
import { useLanguage } from '../contexts/LanguageContext';
import { Package, Clock, CheckCircle2, XCircle } from 'lucide-react';

interface MyOrdersScreenProps {
  onBack: () => void;
  onOrderClick?: (orderId: string) => void;
}

function MaskGroup() {
  return (
    <div className="absolute bottom-0 contents left-[0.03%] right-[-0.02%] top-[0.02%]">
      <div className="absolute contents inset-[-15.21%_-58.02%_73.97%_-7.26%]">
        <div className="absolute flex inset-[-15.21%_-58.02%_73.97%_-7.26%] items-center justify-center">
          <div className="flex-none h-[591.473px] rotate-[262.524deg] skew-x-[2.788deg] w-[290.492px]">
            <div className="mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[27.34px_145.302px] mask-size-[374.954px_953.834px] opacity-80 relative size-full" style={{ maskImage: `url('${imgMain1}')` }}>
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[333.28%] left-[-725%] max-w-none top-[-109.86%] w-[1406.64%]" src={imgMain2} />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute backdrop-blur-[45px] backdrop-filter bg-gradient-to-b from-[rgba(252,252,252,0.6)] inset-[0.02%_-0.16%_73.97%_-0.01%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.16px_0px] mask-size-[374.954px_953.834px] to-[rgba(255,255,255,0.6)]" style={{ maskImage: `url('${imgMain1}')` }} />
      </div>
      <div className="absolute contents inset-[66.22%_-0.06%_-0.03%_0.03%]">
        <div className="absolute contents inset-[81.29%_-0.06%_-0.03%_0.03%]">
          <div className="absolute flex inset-[81.29%_-0.06%_-0.03%_0.03%] items-center justify-center">
            <div className="flex-none h-[375.169px] rotate-[90deg] skew-x-[358.988deg] w-[172.164px]">
              <div className="mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-775.364px] mask-size-[374.954px_953.834px] relative size-full" style={{ maskImage: `url('${imgMain1}')` }}>
                <div className="absolute inset-0 opacity-75 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-[415.76%] left-[-1201.44%] max-w-none top-[-144.82%] w-[1987.8%]" src={imgMain2} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute backdrop-blur-[45px] backdrop-filter bg-[rgba(254,254,254,0.55)] bottom-0 left-[0.03%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-631.531px] mask-size-[374.954px_953.834px] right-[-0.02%] top-[66.22%]" style={{ maskImage: `url('${imgMain1}')` }} />
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
    <div className="absolute bottom-[95.39%] left-0 right-0 top-0">
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

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'pending':
      return <Clock size={20} className="text-[#FFA726]" />;
    case 'confirmed':
      return <Package size={20} className="text-[#42A5F5]" />;
    case 'delivered':
      return <CheckCircle2 size={20} className="text-[#66BB6A]" />;
    case 'cancelled':
      return <XCircle size={20} className="text-[#EF5350]" />;
    default:
      return <Package size={20} className="text-[#37474f]" />;
  }
};

const getStatusText = (status: string) => {
  switch (status) {
    case 'pending':
      return 'Pending';
    case 'confirmed':
      return 'Confirmed';
    case 'delivered':
      return 'Delivered';
    case 'cancelled':
      return 'Cancelled';
    default:
      return status;
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'pending':
      return 'bg-[#FFF3E0] text-[#F57C00]';
    case 'confirmed':
      return 'bg-[#E3F2FD] text-[#1976D2]';
    case 'delivered':
      return 'bg-[#E8F5E9] text-[#388E3C]';
    case 'cancelled':
      return 'bg-[#FFEBEE] text-[#C62828]';
    default:
      return 'bg-gray-100 text-gray-600';
  }
};

export default function MyOrdersScreen({ onBack, onOrderClick }: MyOrdersScreenProps) {
  const { orders } = useOrders();
  const { t, language } = useLanguage();

  return (
    <div className="bg-white relative size-full" dir={language === 'urdu' ? 'rtl' : 'ltr'}>
      <MaskGroup />
      <BarsStatusBarIPhoneLight />

      {/* Header */}
      <div className="absolute h-[88px] left-0 top-0 w-[375px] z-10">
        <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[normal] left-[58px] not-italic text-[#37474f] text-[20px] text-nowrap top-[47.32px] whitespace-pre">My Orders</p>
        <button onClick={onBack} className="absolute cursor-pointer left-[16px] size-[24px] top-[47.32px] z-20">
          <svg className="block size-full" fill="none" viewBox="0 0 24 24">
            <path d={svgPaths.p6a58300} fill="#37474F" />
          </svg>
        </button>
      </div>

      {/* Orders List */}
      <div className="absolute left-0 right-0 top-[88px] bottom-[40px] overflow-y-auto px-4 pt-4">
        {orders.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full">
            <div className="w-[120px] h-[120px] bg-[#F5F5F5] rounded-full flex items-center justify-center mb-4">
              <Package size={60} className="text-[#BDBDBD]" />
            </div>
            <p className="font-['Poppins:SemiBold',sans-serif] text-[#37474f] text-[18px] mb-2">No Orders Yet</p>
            <p className="font-['Poppins:Regular',sans-serif] text-[#757575] text-[14px] text-center px-8">
              Start shopping and your orders will appear here
            </p>
          </div>
        ) : (
          <div className="space-y-3 pb-4">
            {orders.map((order) => (
              <button
                key={order.id}
                onClick={() => onOrderClick?.(order.id)}
                className="w-full bg-white rounded-[12px] shadow-[0px_2px_8px_rgba(0,0,0,0.08)] p-4 hover:shadow-[0px_4px_12px_rgba(0,0,0,0.12)] transition-shadow"
              >
                {/* Order Header */}
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <p className="font-['Poppins:SemiBold',sans-serif] text-[#37474f] text-[14px] mb-1">
                      Order #{order.id}
                    </p>
                    <p className="font-['Poppins:Regular',sans-serif] text-[#757575] text-[12px]">
                      {order.date} • {order.time}
                    </p>
                  </div>
                  <div className={`px-3 py-1 rounded-[6px] ${getStatusColor(order.status)}`}>
                    <p className="font-['Poppins:Medium',sans-serif] text-[12px]">
                      {getStatusText(order.status)}
                    </p>
                  </div>
                </div>

                {/* Order Items Preview */}
                <div className="flex gap-2 mb-3 overflow-x-auto">
                  {order.items.slice(0, 3).map((item, index) => (
                    <div key={index} className="flex-shrink-0 w-[60px] h-[60px] rounded-[8px] overflow-hidden">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                  ))}
                  {order.items.length > 3 && (
                    <div className="flex-shrink-0 w-[60px] h-[60px] rounded-[8px] bg-[#F5F5F5] flex items-center justify-center">
                      <p className="font-['Poppins:SemiBold',sans-serif] text-[#757575] text-[14px]">
                        +{order.items.length - 3}
                      </p>
                    </div>
                  )}
                </div>

                {/* Order Footer */}
                <div className="flex justify-between items-center pt-3 border-t border-[#E8E8E8]">
                  <div className="flex items-center gap-2">
                    {getStatusIcon(order.status)}
                    <p className="font-['Poppins:Regular',sans-serif] text-[#757575] text-[12px]">
                      {order.items.length} item{order.items.length !== 1 ? 's' : ''}
                    </p>
                  </div>
                  <p className="font-['Poppins:SemiBold',sans-serif] text-[#F37A20] text-[16px]">
                    Rs {order.total}
                  </p>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Home Indicator */}
      <div className="absolute bottom-0 left-[32.53%] right-[31.73%] top-[95.81%]">
        <div className="absolute bg-black bottom-[12px] h-[5px] left-1/2 rounded-[100px] translate-x-[-50%] w-[134px]" />
      </div>
    </div>
  );
}