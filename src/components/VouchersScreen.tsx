import svgPaths from "../imports/svg-2h47n1ddb9";
import imgImage16 from "figma:asset/d1a81c329997884332855549bf84957646c3655b.png";
import imgMain2 from "figma:asset/db4e58fac23dd6eaeefc5f9b23a040409692e76a.png";
import { imgMain1 } from "../imports/svg-g538o";
import { Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface VouchersScreenProps {
  onBack: () => void;
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

const vouchers = [
  {
    id: '1',
    code: 'SAVE10',
    discount: '10% OFF',
    description: 'On your next purchase',
    minAmount: 'Min order Rs 500',
    expiry: 'Valid till Dec 31, 2024',
    color: '#FFD037'
  },
  {
    id: '2',
    code: 'SAVE50',
    discount: 'Rs 50 OFF',
    description: 'On orders above Rs 1000',
    minAmount: 'Min order Rs 1000',
    expiry: 'Valid till Dec 31, 2024',
    color: '#F37A20'
  },
  {
    id: '3',
    code: 'FREESHIP',
    discount: 'FREE DELIVERY',
    description: 'On all orders',
    minAmount: 'No minimum order',
    expiry: 'Valid till Dec 31, 2024',
    color: '#4CAF50'
  }
];

export default function VouchersScreen({ onBack }: VouchersScreenProps) {
  const { t, language } = useLanguage();
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  
  const handleCopyCode = async (code: string) => {
    try {
      // Try modern clipboard API first
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(code);
        setCopiedCode(code);
        setTimeout(() => setCopiedCode(null), 2000);
      } else {
        // Fallback for older browsers or when clipboard API is blocked
        const textArea = document.createElement('textarea');
        textArea.value = code;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
          document.execCommand('copy');
          setCopiedCode(code);
          setTimeout(() => setCopiedCode(null), 2000);
        } catch (err) {
          console.error('Fallback copy failed:', err);
        }
        document.body.removeChild(textArea);
      }
    } catch (err) {
      console.error('Failed to copy code:', err);
      // Still show copied state to user even if copy failed
      setCopiedCode(code);
      setTimeout(() => setCopiedCode(null), 2000);
    }
  };

  return (
    <div className="bg-white relative size-full" dir={language === 'urdu' ? 'rtl' : 'ltr'}>
      <MaskGroup />
      <BarsStatusBarIPhoneLight />

      {/* Header */}
      <div className="absolute h-[88px] left-px top-0 w-[375px] z-10">
        <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[normal] left-[58px] not-italic text-[#37474f] text-[20px] text-nowrap top-[calc(50%+7.5px)] whitespace-pre">My Vouchers</p>
      </div>

      {/* Back Button */}
      <button onClick={onBack} className="absolute left-[16px] size-[24px] top-[47px] z-20">
        <svg className="block size-full" fill="none" viewBox="0 0 24 24">
          <path d={svgPaths.p6a58300} fill="#37474F" />
        </svg>
      </button>

      {/* Vouchers List */}
      <div className="absolute left-[16px] right-[16px] top-[120px] bottom-[40px] overflow-y-auto">
        <div className="space-y-4">
          {vouchers.map((voucher) => (
            <div
              key={voucher.id}
              className="bg-white rounded-[12px] p-[16px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.12)] relative"
              style={{ borderLeft: `4px solid ${voucher.color}` }}
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="font-['Poppins:SemiBold',sans-serif] text-[18px]" style={{ color: voucher.color }}>
                    {voucher.discount}
                  </p>
                  <p className="font-['Poppins:Regular',sans-serif] text-[14px] text-[#555555] mt-1">
                    {voucher.description}
                  </p>
                </div>
                <button
                  onClick={() => handleCopyCode(voucher.code)}
                  className="bg-[#f0f1f2] px-[12px] py-[6px] rounded-[6px]"
                >
                  <p className="font-['Poppins:Medium',sans-serif] text-[12px] text-[#37474f]">Copy</p>
                </button>
              </div>
              
              <div className="bg-[#f0f1f2] px-[12px] py-[8px] rounded-[6px] mb-2">
                <p className="font-['Poppins:Medium',sans-serif] text-[16px] text-[#37474f] text-center">
                  {voucher.code}
                </p>
              </div>

              <div className="flex justify-between items-center">
                <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#888888]">
                  {voucher.minAmount}
                </p>
                <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#888888]">
                  {voucher.expiry}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}