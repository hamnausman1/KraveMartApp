import { useState, useEffect } from 'react';
import svgPaths from "../imports/svg-2s8qzoadls";
import imgMain2 from "figma:asset/db4e58fac23dd6eaeefc5f9b23a040409692e76a.png";
import imgImage44 from "figma:asset/d1a81c329997884332855549bf84957646c3655b.png";
import imgMap from "figma:asset/29ed300ccff6824a03df80ebe2d191d2ea97bba5.png";
import { imgMain1, imgSurfaceColor } from "../imports/svg-c7x2m";
import { useAddresses } from "../contexts/AddressContext";
import { useLanguage } from '../contexts/LanguageContext';
import { speak } from '../utils/textToSpeech';

function Group10() {
  return (
    <div className="absolute contents inset-[-15.21%_-58.02%_73.97%_-7.26%]">
      <div className="absolute flex inset-[-15.21%_-58.02%_73.97%_-7.26%] items-center justify-center">
        <div className="flex-none h-[588.878px] rotate-[261.236deg] w-[248.041px]">
          <div className="mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[27.34px_123.67px] mask-size-[374.954px_811.834px] opacity-80 relative size-full" data-name="main (1)" style={{ maskImage: `url('${imgMain1}')` }}>
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[333.28%] left-[-725%] max-w-none top-[-109.86%] w-[1406.64%]" src={imgMain2} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute contents inset-[-15.21%_-58.02%_73.97%_-7.26%]">
      <Group10 />
      <div className="absolute backdrop-blur-[45px] backdrop-filter bg-gradient-to-b from-[rgba(252,252,252,0.6)] inset-[0.02%_-0.16%_73.97%_-0.01%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.16px_0px] mask-size-[374.954px_811.834px] to-[rgba(255,255,255,0.6)]" style={{ maskImage: `url('${imgMain1}')` }} />
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents inset-[81.29%_-0.06%_-0.03%_0.03%]">
      <div className="absolute flex inset-[81.29%_-0.06%_-0.03%_0.03%] items-center justify-center">
        <div className="flex-none h-[375.153px] rotate-[90deg] skew-x-[359.139deg] w-[146.533px]">
          <div className="mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-659.933px] mask-size-[374.954px_811.834px] relative size-full" data-name="main (1)" style={{ maskImage: `url('${imgMain1}')` }}>
            <div className="absolute inset-0 opacity-75 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[415.76%] left-[-1201.44%] max-w-none top-[-144.82%] w-[1987.8%]" src={imgMain2} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute contents inset-[66.22%_-0.06%_-0.03%_0.03%]">
      <Group9 />
      <div className="absolute backdrop-blur-[45px] backdrop-filter bg-[rgba(254,254,254,0.55)] bottom-0 left-[0.03%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-537.513px] mask-size-[374.954px_811.834px] right-[-0.02%] top-[66.22%]" style={{ maskImage: `url('${imgMain1}')` }} />
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute bottom-0 contents left-[0.03%] right-[-0.02%] top-[0.02%]" data-name="Mask Group">
      <Group11 />
      <Group12 />
    </div>
  );
}

function Battery() {
  return (
    <div className="absolute inset-[39.39%_3.82%_34.85%_89.69%]" data-name="Battery">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 12">
        <g id="Battery">
          <rect height="10.3333" id="Border" opacity="0.35" rx="2.16667" stroke="var(--stroke-0, black)" width="21" x="0.5" y="0.5" />
          <path d={svgPaths.p9ed9280} fill="var(--fill-0, black)" id="Cap" opacity="0.4" />
          <rect fill="var(--fill-0, black)" height="7.33333" id="Capacity" rx="1.33333" width="18" x="2" y="2" />
        </g>
      </svg>
    </div>
  );
}

function TimeStyle() {
  return (
    <div className="absolute inset-[15.91%_80%_36.36%_5.6%]" data-name="Time Style">
      <p className="absolute font-['SF_Pro_Text:Semibold',sans-serif] leading-[20px] left-0 not-italic right-0 text-[15px] text-black text-center top-[calc(50%-4.5px)] tracking-[-0.24px]">9:41</p>
    </div>
  );
}

function BarsStatusBarIPhoneLight() {
  return (
    <div className="absolute bottom-[94.58%] left-0 right-0 top-0" data-name="Bars / Status Bar / iPhone / Light">
      <Battery />
      <div className="absolute inset-[39.39%_11.64%_35.61%_84.27%]" data-name="Wifi">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 11">
          <path d={svgPaths.p39712400} fill="var(--fill-0, black)" id="Wifi" />
        </svg>
      </div>
      <div className="absolute inset-[40.15%_17.07%_35.61%_78.4%]" data-name="Cellular Connection">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 11">
          <path d={svgPaths.p26d17600} fill="var(--fill-0, black)" id="Cellular Connection" />
        </svg>
      </div>
      <TimeStyle />
    </div>
  );
}

function BarsHomeIndicatorIPhoneLightPortrait() {
  return (
    <div className="absolute bottom-0 left-[32.53%] right-[31.73%] top-[95.81%]" data-name="Bars / Home Indicator / iPhone / Light - Portrait">
      <div className="absolute bg-black bottom-[12px] h-[5px] left-1/2 rounded-[100px] translate-x-[-50%] w-[134px]" data-name="Home Indicator" />
    </div>
  );
}

function NavigationArrowBackward({ onClick }: { onClick: () => void }) {
  return (
    <div className="absolute cursor-pointer left-[21px] size-[47px] top-[61px]" onClick={onClick}>
      <div className="absolute inset-[-10.64%_-14.89%_-19.15%_-14.89%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 61 61">
          <g id="Group 124">
            <g filter="url(#filter0_d_8_742)" id="Ellipse 14">
              <circle cx="30.5" cy="28.5" fill="var(--fill-0, white)" r="23.5" />
            </g>
            <g id="navigation/arrow_backward_24px">
              <path d={svgPaths.p15172780} fill="var(--fill-0, #37474F)" id="icon/navigation/arrow_backward_24px" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="61" id="filter0_d_8_742" width="61" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="3.5" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.24 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_8_742" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_8_742" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function MapsPin24Px() {
  return (
    <div className="absolute left-[142px] size-[56px] top-[108px]" data-name="maps/pin_24px">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 56">
        <g id="maps/pin_24px">
          <path clipRule="evenodd" d={svgPaths.p3d863200} fill="var(--fill-0, #E90808)" fillRule="evenodd" id="icon/maps/pin_24px" />
        </g>
      </svg>
    </div>
  );
}

function BottomSheetPill() {
  return (
    <div className="absolute h-[5px] left-1/2 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-187.5px_-28px] mask-size-[395px_576px] top-[12px] translate-x-[-50%] w-[20px]" data-name="bottom-sheet-pill" style={{ maskImage: `url('${imgSurfaceColor}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 5">
        <g id="bottom-sheet-pill">
          <path d={svgPaths.p28085900} fill="var(--fill-0, #37474F)" fillOpacity="0.37" id="Line" />
        </g>
      </svg>
    </div>
  );
}

interface AddressFormProps {
  address: string;
  selectedLabel: string;
  onAddressChange: (value: string) => void;
  onLabelChange: (value: string) => void;
  onSave: () => void;
}

function AddressForm({ address, selectedLabel, onAddressChange, onLabelChange, onSave }: AddressFormProps) {
  return (
    <div className="absolute bottom-[-28.2%] left-0 overflow-clip right-0 top-[59.73%]">
      <div className="absolute bg-neutral-50 inset-0 rounded-tl-[6px] rounded-tr-[6px] shadow-[0px_-6px_10px_0px_rgba(0,0,0,0.14),0px_-3px_5px_0px_rgba(25,170,248,0.2)]" />
      
      <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-10px_-16px] mask-size-[395px_576px]" style={{ maskImage: `url('${imgSurfaceColor}')` }}>
        <div className="absolute bg-white inset-0" />
        
        {/* Address Input */}
        <div className="absolute h-[56px] left-[16px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-26px_-55px] mask-size-[395px_576px] top-[39px] w-[343px]" style={{ maskImage: `url('${imgSurfaceColor}')` }}>
          <div className="absolute inset-0 overflow-clip">
            <div className="absolute bg-[#f0f1f2] inset-0 rounded-[8px]" />
            <input
              type="text"
              value={address}
              onChange={(e) => onAddressChange(e.target.value)}
              placeholder="Enter your address"
              className="absolute left-[46px] right-[16px] top-1/2 translate-y-[-50%] bg-transparent font-['Poppins:Regular',sans-serif] text-[16px] text-[#37474f] opacity-[0.87] outline-none placeholder:text-[rgba(55,71,79,0.72)]"
            />
            <div className="absolute left-[16px] size-[24px] top-1/2 translate-y-[-50%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <g id="action/search_24px">
                  <path clipRule="evenodd" d={svgPaths.p308c8f70} fill="var(--fill-0, #37474F)" fillRule="evenodd" id="icon/action/search_24px" />
                </g>
              </svg>
            </div>
          </div>
        </div>

        {/* Label Buttons */}
        <div className="absolute left-[16px] top-[117px] flex gap-[16px]">
          <button
            onClick={() => onLabelChange('Home')}
            className={`h-[52px] w-[103px] rounded-[9px] font-['Poppins:Regular',sans-serif] text-[12px] capitalize ${
              selectedLabel === 'Home'
                ? 'bg-[#f0f1f2] text-[#ffd037] border-2 border-[#ffd037]'
                : 'bg-[#f0f1f2] text-[rgba(55,71,79,0.72)]'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => onLabelChange('Work')}
            className={`h-[52px] w-[103px] rounded-[9px] font-['Poppins:Regular',sans-serif] text-[12px] capitalize ${
              selectedLabel === 'Work'
                ? 'bg-[#f0f1f2] text-[#ffd037] border-2 border-[#ffd037]'
                : 'bg-[#f0f1f2] text-[rgba(55,71,79,0.72)]'
            }`}
          >
            Work
          </button>
          <button
            onClick={() => onLabelChange('Other')}
            className={`h-[52px] w-[103px] rounded-[9px] font-['Poppins:Regular',sans-serif] text-[12px] capitalize ${
              selectedLabel === 'Other'
                ? 'bg-[#f0f1f2] text-[#ffd037] border-2 border-[#ffd037]'
                : 'bg-[#f0f1f2] text-[rgba(55,71,79,0.72)]'
            }`}
          >
            Other
          </button>
        </div>

        {/* Save Button */}
        <div className="absolute cursor-pointer inset-[32.73%_4.27%_58.63%_4.27%]" onClick={onSave}>
          <div className="absolute bg-[#ffd037] inset-0 rounded-[8px]" />
          <div className="absolute flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] left-[50%] not-italic text-[16px] text-black text-center text-nowrap top-1/2 translate-x-[-50%] translate-y-[-50%]">
            <p className="leading-[normal] whitespace-pre">Save This Location</p>
          </div>
          <div className="absolute right-[16px] size-[24px] top-1/2 translate-y-[-50%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <g id="file/save_24px">
                <path clipRule="evenodd" d={svgPaths.p3b1b9870} fill="var(--fill-0, black)" fillRule="evenodd" id="icon/content/save_24px" />
              </g>
            </svg>
          </div>
        </div>

        <div className="absolute aspect-[222/227] left-[91.47%] right-[4.8%] top-[14px]">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage44} />
        </div>
      </div>
      
      <BottomSheetPill />
    </div>
  );
}

interface AddAddressProps {
  onBack: () => void;
  editId?: string;
}

export default function AddAddress({ onBack, editId }: AddAddressProps) {
  const { addAddress, updateAddress, getAddress } = useAddresses();
  const [address, setAddress] = useState('');
  const [selectedLabel, setSelectedLabel] = useState('Home');
  const { language } = useLanguage();

  useEffect(() => {
    if (editId) {
      const existingAddress = getAddress(editId);
      if (existingAddress) {
        setAddress(existingAddress.address);
        setSelectedLabel(existingAddress.label);
      }
    }
  }, [editId, getAddress]);

  const handleSave = () => {
    if (!address.trim()) {
      alert('Please enter an address');
      return;
    }

    if (editId) {
      updateAddress(editId, {
        address: address.trim(),
        label: selectedLabel,
      });
    } else {
      addAddress({
        address: address.trim(),
        label: selectedLabel,
      });
    }

    onBack();
  };

  const handleSpeakerClick = () => {
    const text = language === 'english'
      ? `${editId ? 'Edit' : 'Add'} Address. Enter your address in the search field. Select a label: Home, Work, or Other. Then save your location. Currently selected label is ${selectedLabel}. ${address ? `Address is ${address}` : 'No address entered yet'}.`
      : `${editId ? 'پتہ ترمیم کریں' : 'پتہ شامل کریں'}۔ تلاش کے خانے میں اپنا پتہ درج کریں۔ لیبل منتخب کریں: گھر، دفتر، یا دیگر۔ پھر اپنا مقام محفوظ کریں۔ فی وقت منتخب شدہ لیبل ${selectedLabel} ہے۔ ${address ? `پتہ ${address} ہے` : 'ابھی تک کوئی پتہ درج نہیں ہوا'}۔`;
    
    speak(text, language);
  };

  return (
    <div className="bg-white relative size-full" data-name="Select Location home">
      <MaskGroup />
      <div className="absolute bottom-[11.33%] left-[-4.27%] right-0 top-[-27.96%]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[102.63%] left-0 max-w-none top-[-1.31%] w-full" src={imgMap} />
        </div>
      </div>
      <BarsStatusBarIPhoneLight />
      <BarsHomeIndicatorIPhoneLightPortrait />
      <NavigationArrowBackward onClick={onBack} />
      <MapsPin24Px />
      
      {/* Speaker Icon */}
      <button 
        onClick={handleSpeakerClick}
        className="absolute left-[342px] size-[14px] top-[68px] cursor-pointer bg-transparent border-none p-0 z-30"
        aria-label="Read address information"
      >
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage44} />
      </button>
      
      <AddressForm
        address={address}
        selectedLabel={selectedLabel}
        onAddressChange={setAddress}
        onLabelChange={setSelectedLabel}
        onSave={handleSave}
      />
    </div>
  );
}