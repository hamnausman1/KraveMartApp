import { useState } from 'react';
import svgPaths from '../imports/svg-2h47n1ddb9';
import imgImage16 from "figma:asset/d1a81c329997884332855549bf84957646c3655b.png";
import imgMain2 from "figma:asset/db4e58fac23dd6eaeefc5f9b23a040409692e76a.png";
import { imgMain1 } from "../imports/svg-g538o";
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface HelpScreenProps {
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

const faqs = [
  {
    question: 'How do I place an order?',
    answer: 'Browse products, add items to your cart, select delivery address, choose payment method, and confirm your order.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept Cash on Delivery (COD), JazzCash, EasyPaisa, and major debit/credit cards.'
  },
  {
    question: 'How long does delivery take?',
    answer: 'Standard delivery takes 1-2 business days within the city and 3-5 business days for other areas.'
  },
  {
    question: 'Can I track my order?',
    answer: 'Yes! Go to My Orders section to track your order status in real-time.'
  },
  {
    question: 'What is your return policy?',
    answer: 'You can return products within 7 days of delivery if they are unused and in original packaging.'
  },
  {
    question: 'How do I cancel my order?',
    answer: 'You can cancel your order from My Orders section before it is dispatched.'
  },
  {
    question: 'Do you deliver to my area?',
    answer: 'We deliver to most areas in Pakistan. Enter your address during checkout to check availability.'
  },
  {
    question: 'How can I contact customer support?',
    answer: 'You can reach us through the Contact Us page via phone, email, or WhatsApp.'
  }
];

export default function HelpScreen({ onBack }: HelpScreenProps) {
  const { t, language } = useLanguage();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="bg-white relative size-full">
      <MaskGroup />
      <BarsStatusBarIPhoneLight />

      {/* Header */}
      <div className="absolute h-[88px] left-px top-0 w-[375px] z-10">
        <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[normal] left-[58px] not-italic text-[#37474f] text-[20px] text-nowrap top-[calc(50%+7.5px)] whitespace-pre">Help & FAQs</p>
      </div>

      {/* Back Button */}
      <button onClick={onBack} className="absolute left-[16px] size-[24px] top-[47px] z-20">
        <svg className="block size-full" fill="none" viewBox="0 0 24 24">
          <path d={svgPaths.p6a58300} fill="#37474F" />
        </svg>
      </button>

      {/* FAQs List */}
      <div className="absolute left-[16px] right-[16px] top-[120px] bottom-[40px] overflow-y-auto">
        <p className="font-['Poppins:Medium',sans-serif] text-[16px] text-[#37474f] mb-4">
          Frequently Asked Questions
        </p>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-[12px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.12)] overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full p-[16px] flex items-center justify-between"
              >
                <p className="font-['Poppins:Medium',sans-serif] text-[14px] text-[#37474f] text-left pr-4">
                  {faq.question}
                </p>
                {expandedIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-[#F37A20] flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-[#37474f] flex-shrink-0" />
                )}
              </button>
              
              {expandedIndex === index && (
                <div className="px-[16px] pb-[16px] border-t border-[#f0f1f2]">
                  <p className="font-['Poppins:Regular',sans-serif] text-[13px] text-[#555555] mt-3 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Support */}
        <div className="mt-8 bg-[#FFF8E1] rounded-[12px] p-[16px] border border-[#FFD037]">
          <p className="font-['Poppins:Medium',sans-serif] text-[14px] text-[#37474f] mb-2">
            Still need help?
          </p>
          <p className="font-['Poppins:Regular',sans-serif] text-[13px] text-[#555555] mb-3">
            Our customer support team is here to assist you.
          </p>
          <button
            onClick={onBack}
            className="bg-[#FFD037] px-[16px] py-[8px] rounded-[6px] w-full"
          >
            <p className="font-['Poppins:Medium',sans-serif] text-[14px] text-[#37474f]">
              Contact Support
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}