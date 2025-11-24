import svgPaths from "../imports/svg-jei2jwozjz";
import imgMain2 from "figma:asset/db4e58fac23dd6eaeefc5f9b23a040409692e76a.png";
import imgImage11 from "figma:asset/735941631474ed96b368ad9a65a12316d8d201b8.png";
import imgImage12 from "figma:asset/14cb38b00c547455ae5a57deef8095bc3aaaeb10.png";
import imgImage15 from "figma:asset/d03302e0f3e2f3fa46271f24a22a8ff38ac65bc0.png";
import { imgMain1 } from "../imports/svg-78ed8";
import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface PaymentMethodScreenProps {
  onBack: () => void;
  onSelectPaymentMethod: (method: string) => void;
  selectedMethod?: string;
}

type PaymentMethod = 'card' | 'jazzcash' | 'easypaisa' | 'cod';

function MaskGroup() {
  return (
    <div className="absolute bottom-0 contents left-[0.03%] right-[-0.02%] top-[0.02%]">
      <div className="absolute contents inset-[-15.21%_-58.02%_73.97%_-7.26%]">
        <div className="absolute flex inset-[-15.21%_-58.02%_73.97%_-7.26%] items-center justify-center">
          <div className="flex-none h-[588.878px] rotate-[261.236deg] w-[248.041px]">
            <div className="mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[27.34px_123.67px] mask-size-[374.954px_811.834px] opacity-80 relative size-full" style={{ maskImage: `url('${imgMain1}')` }}>
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[333.28%] left-[-725%] max-w-none top-[-109.86%] w-[1406.64%]" src={imgMain2} />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute backdrop-blur-[45px] backdrop-filter bg-gradient-to-b from-[rgba(252,252,252,0.6)] inset-[0.02%_-0.16%_73.97%_-0.01%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.16px_0px] mask-size-[374.954px_811.834px] to-[rgba(255,255,255,0.6)]" style={{ maskImage: `url('${imgMain1}')` }} />
      </div>
      <div className="absolute contents inset-[66.22%_-0.06%_-0.03%_0.03%]">
        <div className="absolute contents inset-[81.29%_-0.06%_-0.03%_0.03%]">
          <div className="absolute flex inset-[81.29%_-0.06%_-0.03%_0.03%] items-center justify-center">
            <div className="flex-none h-[375.153px] rotate-[90deg] skew-x-[359.139deg] w-[146.533px]">
              <div className="mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-659.933px] mask-size-[374.954px_811.834px] relative size-full" style={{ maskImage: `url('${imgMain1}')` }}>
                <div className="absolute inset-0 opacity-75 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-[415.76%] left-[-1201.44%] max-w-none top-[-144.82%] w-[1987.8%]" src={imgMain2} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute backdrop-blur-[45px] backdrop-filter bg-[rgba(254,254,254,0.55)] bottom-0 left-[0.03%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-537.513px] mask-size-[374.954px_811.834px] right-[-0.02%] top-[66.22%]" style={{ maskImage: `url('${imgMain1}')` }} />
      </div>
    </div>
  );
}

function Battery() {
  return (
    <div className="absolute inset-[39.39%_3.82%_34.85%_89.69%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 12">
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
    <div className="absolute bottom-[94.58%] left-0 right-0 top-0">
      <Battery />
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
      <TimeStyle />
    </div>
  );
}

export default function PaymentMethodScreen({ onBack, onSelectPaymentMethod, selectedMethod = 'cod' }: PaymentMethodScreenProps) {
  const [selected, setSelected] = useState<PaymentMethod>(selectedMethod as PaymentMethod);
  const { t } = useLanguage();

  const handleSelect = (method: PaymentMethod) => {
    setSelected(method);
    onSelectPaymentMethod(method);
    // Auto navigate back after selection
    setTimeout(() => onBack(), 300);
  };

  return (
    <div className="bg-white relative size-full">
      <MaskGroup />
      <BarsStatusBarIPhoneLight />

      {/* Header */}
      <div className="absolute h-[88px] left-0 top-0 w-[375px]">
        <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[normal] left-[58px] not-italic text-[#37474f] text-[20px] text-nowrap top-[47.32px] whitespace-pre">Payment Method</p>
        <button onClick={onBack} className="absolute left-[16px] size-[24px] top-[47.32px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <path d={svgPaths.p6a58300} fill="#37474F" />
          </svg>
        </button>
      </div>

      {/* Credit / Debit Card */}
      <button
        onClick={() => handleSelect('card')}
        className={`absolute h-[67px] left-[16px] right-[16px] top-[116px] ${selected === 'card' ? 'bg-[#ffd037]' : 'bg-white'} rounded-[8px] border border-[#f0f0f0]`}
      >
        <div className="flex items-center h-full px-4">
          <img alt="" className="w-[30px] h-[21px] mr-4 object-contain" src={imgImage12} />
          <p className="font-['Poppins:Medium',sans-serif] text-[14px] text-[#37474f]">Credit / Debit Card</p>
        </div>
      </button>

      {/* Jazzcash */}
      <button
        onClick={() => handleSelect('jazzcash')}
        className={`absolute h-[67px] left-[16px] right-[16px] top-[195px] ${selected === 'jazzcash' ? 'bg-[#ffd037]' : 'bg-white'} rounded-[8px] border border-[#f0f0f0]`}
      >
        <div className="flex items-center h-full px-4">
          <img alt="" className="w-[27px] h-[27px] mr-4 object-contain" src={imgImage11} />
          <p className="font-['Poppins:Medium',sans-serif] text-[14px] text-[#37474f]">JazzCash</p>
        </div>
      </button>

      {/* EasyPaisa */}
      <button
        onClick={() => handleSelect('easypaisa')}
        className={`absolute h-[67px] left-[16px] right-[16px] top-[274px] ${selected === 'easypaisa' ? 'bg-[#ffd037]' : 'bg-white'} rounded-[8px] border border-[#f0f0f0]`}
      >
        <div className="flex items-center h-full px-4">
          <div className="w-[27px] h-[27px] mr-4 bg-[#00a650] rounded flex items-center justify-center">
            <span className="text-white text-xs">EP</span>
          </div>
          <p className="font-['Poppins:Medium',sans-serif] text-[14px] text-[#37474f]">EasyPaisa</p>
        </div>
      </button>

      {/* Cash on Delivery */}
      <button
        onClick={() => handleSelect('cod')}
        className={`absolute h-[67px] left-[16px] right-[16px] top-[353px] ${selected === 'cod' ? 'bg-[#ffd037]' : 'bg-white'} rounded-[8px] border border-[#f0f0f0]`}
      >
        <div className="flex items-center h-full px-4">
          <img alt="" className="w-[42px] h-[28px] mr-4 object-contain" src={imgImage15} />
          <p className="font-['Poppins:Medium',sans-serif] text-[14px] text-[#37474f]">Cash on Delivery</p>
        </div>
      </button>

      {/* Home Indicator */}
      <div className="absolute bottom-0 left-[32.53%] right-[31.73%] top-[95.81%]">
        <div className="absolute bg-black bottom-[12px] h-[5px] left-1/2 rounded-[100px] translate-x-[-50%] w-[134px]" />
      </div>
    </div>
  );
}