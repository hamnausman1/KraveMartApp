import svgPaths from "../imports/svg-29twn7ecrz";
import imgMain2 from "figma:asset/db4e58fac23dd6eaeefc5f9b23a040409692e76a.png";
import { imgMain1 } from "../imports/svg-jhi8g";
import { CheckCircle2 } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { useAddress } from '../contexts/AddressContext';

interface OrderConfirmationScreenProps {
  onContinueShopping: () => void;
  onViewOrders: () => void;
  orderDetails: {
    orderId: string;
    date: string;
    time: string;
    total: number;
    paymentMethod: string;
  };
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

export default function OrderConfirmationScreen({
  onContinueShopping,
  onViewOrders,
  orderDetails
}: OrderConfirmationScreenProps) {
  const { selectedAddress } = useAddress();

  return (
    <div className="bg-white relative size-full">
      <MaskGroup />
      <BarsStatusBarIPhoneLight />

      {/* Content */}
      <div className="absolute left-0 right-0 top-[88px] bottom-[0px] overflow-y-auto px-6 flex flex-col items-center justify-center">
        
        {/* Success Icon */}
        <div className="w-[120px] h-[120px] bg-[#4CAF50] rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 size={80} className="text-white" strokeWidth={2} />
        </div>

        {/* Success Message */}
        <h2 className="font-['Poppins:SemiBold',sans-serif] text-[#37474f] text-[24px] mb-2 text-center">
          Order Placed Successfully!
        </h2>
        <p className="font-['Poppins:Regular',sans-serif] text-[#757575] text-[14px] mb-8 text-center">
          Your order has been confirmed and will be delivered soon
        </p>

        {/* Order Details Card */}
        <div className="w-full bg-white rounded-[16px] shadow-[0px_4px_12px_rgba(0,0,0,0.08)] p-6 mb-6">
          <p className="font-['Poppins:SemiBold',sans-serif] text-[#37474f] text-[16px] mb-4">Order Details</p>
          
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="font-['Poppins:Regular',sans-serif] text-[#757575] text-[14px]">Order ID</span>
              <span className="font-['Poppins:Medium',sans-serif] text-[#37474f] text-[14px]">{orderDetails.orderId}</span>
            </div>
            
            <div className="flex justify-between">
              <span className="font-['Poppins:Regular',sans-serif] text-[#757575] text-[14px]">Date</span>
              <span className="font-['Poppins:Medium',sans-serif] text-[#37474f] text-[14px]">{orderDetails.date}</span>
            </div>
            
            <div className="flex justify-between">
              <span className="font-['Poppins:Regular',sans-serif] text-[#757575] text-[14px]">Delivery Time</span>
              <span className="font-['Poppins:Medium',sans-serif] text-[#37474f] text-[14px]">{orderDetails.time}</span>
            </div>
            
            <div className="flex justify-between">
              <span className="font-['Poppins:Regular',sans-serif] text-[#757575] text-[14px]">Payment Method</span>
              <span className="font-['Poppins:Medium',sans-serif] text-[#37474f] text-[14px]">
                {orderDetails.paymentMethod === 'cod' ? 'Cash on Delivery' : 
                 orderDetails.paymentMethod === 'card' ? 'Card' :
                 orderDetails.paymentMethod === 'jazzcash' ? 'JazzCash' :
                 'EasyPaisa'}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="font-['Poppins:Regular',sans-serif] text-[#757575] text-[14px]">Delivery Address</span>
              <span className="font-['Poppins:Medium',sans-serif] text-[#37474f] text-[14px] text-right max-w-[180px]">
                {selectedAddress?.label || 'IBA Main Campus'}
              </span>
            </div>
            
            <div className="border-t border-[#E8E8E8] pt-3 flex justify-between">
              <span className="font-['Poppins:SemiBold',sans-serif] text-[#37474f] text-[16px]">Total Amount</span>
              <span className="font-['Poppins:SemiBold',sans-serif] text-[#F37A20] text-[18px]">Rs {orderDetails.total}</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <button
          onClick={onViewOrders}
          className="w-full bg-[#F37A20] rounded-[12px] h-[56px] flex items-center justify-center mb-3"
        >
          <span className="font-['Poppins:SemiBold',sans-serif] text-white text-[16px]">View My Orders</span>
        </button>

        <button
          onClick={onContinueShopping}
          className="w-full bg-[#FFD037] rounded-[12px] h-[56px] flex items-center justify-center mb-8"
        >
          <span className="font-['Poppins:SemiBold',sans-serif] text-[#37474f] text-[16px]">Continue Shopping</span>
        </button>
      </div>

      {/* Home Indicator */}
      <div className="absolute bottom-0 left-[32.53%] right-[31.73%] top-[95.81%]">
        <div className="absolute bg-black bottom-[12px] h-[5px] left-1/2 rounded-[100px] translate-x-[-50%] w-[134px]" />
      </div>
    </div>
  );
}
