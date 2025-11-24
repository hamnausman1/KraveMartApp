import svgPaths from "../imports/svg-p5i178k9tk";
import imgMain2 from "figma:asset/db4e58fac23dd6eaeefc5f9b23a040409692e76a.png";
import imgImage29 from "figma:asset/d1a81c329997884332855549bf84957646c3655b.png";
import { imgMain1 } from "../imports/svg-fc035";
import { useOrders } from '../contexts/OrderContext';
import { Plus, Minus } from 'lucide-react';

interface OrderDetailsScreenProps {
  orderId: string;
  onBack: () => void;
}

function MaskGroup() {
  return (
    <div className="absolute bottom-0 contents left-[0.03%] right-[-0.02%] top-[0.02%]">
      <div className="absolute contents inset-[-15.22%_-58.02%_73.97%_-7.26%]">
        <div className="absolute flex inset-[-15.22%_-58.02%_73.97%_-7.26%] items-center justify-center">
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

export default function OrderDetailsScreen({ orderId, onBack }: OrderDetailsScreenProps) {
  const { getOrderById } = useOrders();
  const order = getOrderById(orderId);

  if (!order) {
    return (
      <div className="bg-white relative size-full flex items-center justify-center">
        <p className="font-['Poppins:Regular',sans-serif] text-[#37474f] text-[16px]">Order not found</p>
      </div>
    );
  }

  return (
    <div className="bg-white relative size-full overflow-hidden">
      <MaskGroup />
      <BarsHomeIndicatorIPhoneLightPortrait />

      {/* Header */}
      <div className="absolute h-[88px] left-0 top-[9px] w-[375px]">
        <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[normal] left-[58px] not-italic text-[#37474f] text-[20px] text-nowrap top-[47.32px] whitespace-pre">
          Order Details
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
      <div className="absolute aspect-[222/227] left-[91.2%] right-[4.53%] top-[60px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage29} />
      </div>

      {/* Scrollable Content */}
      <div className="absolute left-0 right-0 top-[105px] bottom-[34px] overflow-y-auto px-4">
        <div className="py-4">
          {/* Products Section */}
          <p className="font-['Poppins:Medium',sans-serif] text-[#37474f] text-[16px] mb-4">Products</p>

          {/* Product List */}
          <div className="space-y-4 mb-6">
            {order.items.map((item, index) => (
              <div key={index} className="relative">
                {/* Product Item */}
                <div className="flex gap-3 pb-4">
                  {/* Product Image */}
                  <div className="w-[115px] h-[115px] rounded-[9px] overflow-hidden flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 flex flex-col justify-between">
                    <p className="font-['Poppins:Medium',sans-serif] text-[#37474f] text-[16px] leading-[22px]">
                      {item.name}
                    </p>
                    <div className="flex items-center justify-between">
                      <p className="font-['Poppins:SemiBold',sans-serif] text-[#f37a20] text-[20px]">
                        Rs {item.price}
                      </p>
                      
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-3">
                        <button className="bg-[#f37a20] rounded-[7px] size-[35px] flex items-center justify-center">
                          <Minus size={14} color="white" />
                        </button>
                        <p className="font-['Poppins:Medium',sans-serif] text-[#37474f] text-[14px] w-[20px] text-center">
                          {item.quantity}
                        </p>
                        <button className="bg-[#ffd037] rounded-[7px] size-[35px] flex items-center justify-center">
                          <Plus size={14} color="black" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                {index < order.items.length - 1 && (
                  <div className="h-px w-full bg-[#F0F0F0]" />
                )}
              </div>
            ))}
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

          {/* Order Info */}
          <div className="space-y-3 mb-4">
            <div>
              <p className="font-['Poppins:Medium',sans-serif] text-[#37474f] text-[14px] mb-1">Order ID</p>
              <p className="font-['Poppins:Regular',sans-serif] text-[#777777] text-[14px]">{order.id}</p>
            </div>
            
            <div>
              <p className="font-['Poppins:Medium',sans-serif] text-[#37474f] text-[14px] mb-1">Order Date & Time</p>
              <p className="font-['Poppins:Regular',sans-serif] text-[#777777] text-[14px]">{order.date} {order.time}</p>
            </div>
            
            <div>
              <p className="font-['Poppins:Medium',sans-serif] text-[#37474f] text-[14px] mb-1">Delivery Address</p>
              <p className="font-['Poppins:Regular',sans-serif] text-[#777777] text-[14px]">{order.deliveryAddress}</p>
            </div>
            
            <div>
              <p className="font-['Poppins:Medium',sans-serif] text-[#37474f] text-[14px] mb-1">Payment Method</p>
              <p className="font-['Poppins:Regular',sans-serif] text-[#777777] text-[14px]">
                {order.paymentMethod === 'cod' ? 'Cash on Delivery' : order.paymentMethod}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
