import { useState } from 'react';
import svgPaths from '../imports/svg-2h47n1ddb9';
import imgImage16 from "figma:asset/d1a81c329997884332855549bf84957646c3655b.png";
import imgMain2 from "figma:asset/db4e58fac23dd6eaeefc5f9b23a040409692e76a.png";
import { imgMain1 } from "../imports/svg-g538o";
import imgOval from "figma:asset/6b7d77eaeddf8ebbf8ae87f61d1caeb7a4bf72d0.png";
import { toast } from 'sonner@2.0.3';
import { useLanguage } from '../contexts/LanguageContext';
import BottomNavigation from './BottomNavigation';

interface EditProfileScreenProps {
  onBack: () => void;
  onNavigateHome: () => void;
  onNavigateCart: () => void;
  onNavigateNotifications: () => void;
  onNavigateSearch: () => void;
}

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

export default function EditProfileScreen({
  onBack,
  onNavigateHome,
  onNavigateCart,
  onNavigateNotifications,
  onNavigateSearch
}: EditProfileScreenProps) {
  const [fullName, setFullName] = useState('Hamna Usman');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('03XX-XXXXXXX');
  const [showPassword, setShowPassword] = useState(false);

  const handleSave = () => {
    toast.success('Profile updated successfully!');
  };

  const { language } = useLanguage();

  return (
    <div className="bg-white relative size-full">
      <MaskGroup />
      <BarsStatusBarIPhoneLight />

      {/* Header */}
      <div className="absolute h-[88px] left-px top-0 w-[375px] z-10">
        <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[normal] left-[58px] not-italic text-[#37474f] text-[20px] text-nowrap top-[47.32px] whitespace-pre">Edit Profile</p>
        <button onClick={onBack} className="absolute left-[16px] size-[24px] top-[47.32px] z-20">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <path d={svgPaths.p6a58300} fill="#37474F" />
          </svg>
        </button>
      </div>

      {/* Profile Image */}
      <div className="absolute left-[119px] size-[138px] top-[139px]">
        <img alt="" className="block max-w-none size-full" height="138" src={imgOval} width="138" />
      </div>
      <button className="absolute left-[225px] size-[33px] top-[235px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 33">
          <circle cx="16.5" cy="16.5" fill="#F37A20" r="16.5" />
        </svg>
        <div className="absolute left-[7.5px] size-[18px] top-[7.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <path clipRule="evenodd" d={svgPaths.p1b9992c0} fill="white" fillRule="evenodd" />
          </svg>
        </div>
      </button>

      {/* Full Name Field */}
      <div className="absolute inset-[39.9%_4.27%_53.69%_4.27%]">
        <div className="absolute inset-0 overflow-clip">
          <div className="absolute bg-[#f0f1f2] inset-0 rounded-[8px]" />
          <div className="absolute content-stretch flex items-center left-[6px] overflow-clip top-[6px]">
            <div className="box-border content-stretch flex gap-[10px] items-center overflow-clip p-[10px] relative shrink-0">
              <svg className="block size-[24px]" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <path clipRule="evenodd" d={svgPaths.pa35dc80} fill="#37474F" fillRule="evenodd" />
              </svg>
            </div>
            <div className="box-border content-stretch flex flex-col font-['Poppins:Regular',sans-serif] items-start leading-[normal] not-italic overflow-clip px-[10px] py-0 relative shrink-0 text-[#37474f] text-nowrap whitespace-pre">
              <p className="relative shrink-0 text-[12px]">Full Name</p>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="relative shrink-0 text-[16px] bg-transparent border-none outline-none"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Password Field */}
      <div className="absolute inset-[48.15%_4%_45.44%_4.53%]">
        <div className="absolute inset-0 overflow-clip">
          <div className="absolute bg-[#f0f1f2] inset-0 rounded-[8px]" />
          <button
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-[14.42px] size-[24px] top-1/2 translate-y-[-50%]"
          >
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <path clipRule="evenodd" d={svgPaths.pb3f0d80} fill="#37474F" fillRule="evenodd" />
            </svg>
          </button>
          <div className="absolute content-stretch flex items-center left-[6px] overflow-clip top-[6px]">
            <div className="box-border content-stretch flex gap-[10px] items-center overflow-clip p-[10px] relative shrink-0">
              <svg className="block size-[24px]" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <path clipRule="evenodd" d={svgPaths.p30734500} fill="#37474F" fillRule="evenodd" />
              </svg>
            </div>
            <div className="box-border content-stretch flex flex-col font-['Poppins:Regular',sans-serif] items-start leading-[normal] not-italic overflow-clip px-[10px] py-0 relative shrink-0 text-[#37474f] text-nowrap whitespace-pre">
              <p className="relative shrink-0 text-[12px]">Password</p>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="• • • • • • •"
                className="relative shrink-0 text-[16px] bg-transparent border-none outline-none w-[200px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Phone Number Field */}
      <div className="absolute inset-[56.4%_4.27%_37.19%_4.27%]">
        <div className="absolute inset-0 overflow-clip">
          <div className="absolute bg-[#f0f1f2] inset-0 rounded-[8px]" />
          <div className="absolute content-stretch flex items-center left-[6px] overflow-clip top-[6px]">
            <div className="box-border content-stretch flex gap-[10px] items-center overflow-clip p-[10px] relative shrink-0">
              <svg className="block size-[24px]" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <path clipRule="evenodd" d={svgPaths.p1ab7d640} fill="#37474F" fillRule="evenodd" />
              </svg>
            </div>
            <div className="box-border content-stretch flex flex-col font-['Poppins:Regular',sans-serif] items-start leading-[normal] not-italic overflow-clip px-[10px] py-0 relative shrink-0 text-[#37474f] text-nowrap whitespace-pre">
              <p className="relative shrink-0 text-[12px]">Phone Number</p>
              <input
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="relative shrink-0 text-[16px] bg-transparent border-none outline-none"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <button onClick={handleSave} className="absolute inset-[77.71%_4%_16.38%_4.53%]">
        <div className="absolute bg-[#ffd037] inset-0 rounded-[8px]" />
        <div className="absolute flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] left-[164px] not-italic text-[16px] text-black text-center text-nowrap top-1/2 translate-x-[-50%] translate-y-[-50%]">
          <p className="leading-[normal] whitespace-pre">Save</p>
        </div>
        <div className="absolute right-[16px] size-[24px] top-1/2 translate-y-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <path clipRule="evenodd" d={svgPaths.p3b1b9870} fill="black" fillRule="evenodd" />
          </svg>
        </div>
      </button>

      {/* Bottom Navigation Bar */}
      <BottomNavigation
        currentPage="account"
        onNavigateHome={onNavigateHome}
        onNavigateSearch={onNavigateSearch}
        onNavigateCart={onNavigateCart}
        onNavigateNotifications={onNavigateNotifications}
        onNavigateAccount={() => {}}
      />

      {/* Volume Icon */}
      <div className="absolute left-[346px] size-[14px] top-[52px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage16} />
      </div>
    </div>
  );
}