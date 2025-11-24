import { useState } from 'react';
import svgPaths from "../imports/svg-blqsscfat7";
import imgMain2 from "figma:asset/db4e58fac23dd6eaeefc5f9b23a040409692e76a.png";
import imgImage31 from "figma:asset/d1a81c329997884332855549bf84957646c3655b.png";
import { imgMain1 } from "../imports/svg-obtoi";
import { useLanguage } from '../contexts/LanguageContext';
import { toast } from 'sonner@2.0.3';
import { speak } from '../utils/textToSpeech';

interface PasswordScreenProps {
  onBack: () => void;
  onFinish: () => void;
}

function Group4() {
  return (
    <div className="absolute contents h-[calc(1px*((var(--transform-inner-width)*0.15237344801425934)+(var(--transform-inner-height)*0.9883230328559875)))] left-[-65.03px] top-[-368.65px] w-[calc(1px*((var(--transform-inner-height)*0.15237344801425934)+(var(--transform-inner-width)*0.9883230328559875)))]">
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.9883230261239031)+(var(--transform-inner-height)*0.15237349167983347)))] items-center justify-center left-[-27.23px] top-[-123.5px] w-[calc(1px*((var(--transform-inner-height)*0.9883230261239031)+(var(--transform-inner-width)*0.15237349167983347)))]" style={{ "--transform-inner-width": "248.03125", "--transform-inner-height": "588.875" } as React.CSSProperties}>
        <div className="flex-none rotate-[261.236deg]">
          <div className="h-[588.878px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[27.34px_123.671px] mask-size-[374.954px_811.834px] opacity-80 relative w-[248.041px]" data-name="main (1)" style={{ maskImage: `url('${imgMain1}')` }}>
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[333.28%] left-[-725%] max-w-none top-[-109.86%] w-[1406.64%]" src={imgMain2} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.9883230261239031)+(var(--transform-inner-height)*0.15237349167983347)))] items-center justify-center left-[-65.03px] top-[-368.65px] w-[calc(1px*((var(--transform-inner-height)*0.9883230261239031)+(var(--transform-inner-width)*0.15237349167983347)))]" style={{ "--transform-inner-width": "248.03125", "--transform-inner-height": "588.875" } as React.CSSProperties}>
        <div className="flex-none rotate-[261.236deg]">
          <div className="h-[588.878px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[65.135px_368.815px] mask-size-[374.954px_811.834px] opacity-80 relative w-[248.041px]" data-name="main (1)" style={{ maskImage: `url('${imgMain1}')` }}>
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[333.28%] left-[-866.5%] max-w-none top-[-110.7%] w-[1406.64%]" src={imgMain2} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents left-[-65.03px] top-[-368.65px]">
      <Group4 />
      <div className="absolute backdrop-blur-[45px] backdrop-filter bg-gradient-to-b from-[rgba(252,252,252,0.6)] h-[211.203px] left-[-0.05px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.16px_0px] mask-size-[374.954px_811.834px] to-[rgba(255,255,255,0)] top-[0.17px] w-[375.655px]" style={{ maskImage: `url('${imgMain1}')` }} />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[0.11px] top-[660.1px]">
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1.0000002384185933)+(var(--transform-inner-height)*0.015032863173825906)))] items-center justify-center left-[0.11px] top-[660.1px] w-[calc(1px*((var(--transform-inner-height)*0.9998872279986273)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "146.53125", "--transform-inner-height": "375.140625" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg] skew-x-[359.139deg]">
          <div className="h-[375.153px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-659.934px] mask-size-[374.954px_811.834px] relative w-[146.533px]" data-name="main (1)" style={{ maskImage: `url('${imgMain1}')` }}>
            <div className="absolute inset-0 opacity-75 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[415.76%] left-[-1201.44%] max-w-none top-[-144.82%] w-[1987.8%]" src={imgMain2} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents left-[0.11px] top-[537.68px]">
      <Group3 />
      <div className="absolute backdrop-blur-[45px] backdrop-filter bg-[rgba(254,254,254,0.55)] h-[274.32px] left-[0.11px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-537.514px] mask-size-[374.954px_811.834px] top-[537.68px] w-[374.954px]" style={{ maskImage: `url('${imgMain1}')` }} />
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute contents left-[0.11px] top-[0.17px]" data-name="Mask Group">
      <Group5 />
      <Group6 />
    </div>
  );
}

function Battery() {
  return (
    <div className="absolute inset-[39.39%_3.82%_34.85%_89.69%]" data-name="Battery">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 13">
        <g id="Battery">
          <rect height="11.6314" id="Border" opacity="0.35" rx="2.16667" stroke="var(--stroke-0, black)" width="21" x="0.5" y="0.5" />
          <path d={svgPaths.p24100ad8} fill="var(--fill-0, black)" id="Cap" opacity="0.4" />
          <rect fill="var(--fill-0, black)" height="8.17323" id="Capacity" rx="1.33333" width="18" x="2" y="2.22906" />
        </g>
      </svg>
    </div>
  );
}

function TimeStyle() {
  return (
    <div className="absolute inset-[15.91%_80%_36.36%_5.6%]" data-name="Time Style">
      <p className="absolute font-['SF_Pro_Text:Semibold',sans-serif] leading-[20px] left-0 not-italic right-0 text-[15px] text-black text-center top-[calc(50%-4.7px)] tracking-[-0.24px]">9:41</p>
    </div>
  );
}

function BarsStatusBarIPhoneLight() {
  return (
    <div className="absolute bottom-[93.96%] left-0 right-0 top-0" data-name="Bars / Status Bar / iPhone / Light">
      <Battery />
      <div className="absolute inset-[39.39%_11.64%_35.61%_84.27%]" data-name="Wifi">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 13">
          <path d={svgPaths.p2897e100} fill="var(--fill-0, black)" id="Wifi" />
        </svg>
      </div>
      <div className="absolute inset-[40.15%_17.07%_35.61%_78.4%]" data-name="Cellular Connection">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 12">
          <path d={svgPaths.p11ae0c00} fill="var(--fill-0, black)" id="Cellular Connection" />
        </svg>
      </div>
      <TimeStyle />
    </div>
  );
}

function BarsHomeIndicatorIPhoneLightPortrait() {
  return (
    <div className="absolute inset-[106.79%_31.73%_-11.45%_32.53%]" data-name="Bars / Home Indicator / iPhone / Light - Portrait">
      <div className="absolute bg-black bottom-[11.89px] h-[5px] left-1/2 rounded-[100px] translate-x-[-50%] w-[134px]" data-name="Home Indicator" />
    </div>
  );
}

function NavigationArrowBackward24Px({ onClick }: { onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="absolute block cursor-pointer left-[16px] size-[24px] top-[47.32px] bg-transparent border-none p-0" 
      data-name="navigation/arrow_backward_24px"
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="navigation/arrow_backward_24px">
          <path d={svgPaths.p6a58300} fill="var(--fill-0, #37474F)" id="icon/navigation/arrow_backward_24px" />
        </g>
      </svg>
    </button>
  );
}

function ComponentsMobileAppbarSecondery({ onBack }: { onBack: () => void }) {
  const { t } = useLanguage();
  
  return (
    <div className="absolute h-[88px] left-px top-0 w-[375px]" data-name="components/mobile/appbar/secondery">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[normal] left-[58px] not-italic text-[#37474f] text-[20px] text-nowrap top-[47.32px] whitespace-pre">{t('choosePassword')}</p>
      <NavigationArrowBackward24Px onClick={onBack} />
    </div>
  );
}

function BarsHomeIndicatorIPhoneLightPortrait1() {
  return (
    <div className="absolute inset-[95.32%_31.73%_0.01%_32.53%]" data-name="Bars / Home Indicator / iPhone / Light - Portrait">
      <div className="absolute bg-black bottom-[11.89px] h-[5px] left-1/2 rounded-[100px] translate-x-[-50%] w-[134px]" data-name="Home Indicator" />
    </div>
  );
}

function SocialVisibility24Px({ onClick, showPassword }: { onClick: () => void; showPassword: boolean }) {
  return (
    <button
      onClick={onClick}
      className="absolute right-[17px] size-[24px] top-1/2 translate-y-[-50%] bg-transparent border-none p-0 cursor-pointer"
      data-name="social/visibility_24px"
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="social/visibility_24px">
          <path clipRule="evenodd" d={svgPaths.pb3f0d80} fill="var(--fill-0, #37474F)" fillRule="evenodd" id="icon/social/visibility_24px" />
        </g>
      </svg>
    </button>
  );
}

function ActionLock24Px() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="action/lock_24px">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="action/lock_24px">
          <path clipRule="evenodd" d={svgPaths.p30734500} fill="var(--fill-0, #37474F)" fillRule="evenodd" id="icon/action/lock_24px" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center overflow-clip p-[10px] relative shrink-0">
      <ActionLock24Px />
    </div>
  );
}

function Frame({ label }: { label: string }) {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center overflow-clip p-[10px] relative shrink-0">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic opacity-[0.87] relative shrink-0 text-[16px] text-[rgba(55,71,79,0.72)] text-nowrap">
        <p className="leading-[normal] whitespace-pre">{label}</p>
      </div>
    </div>
  );
}

function Group({ label }: { label: string }) {
  return (
    <div className="absolute content-stretch flex items-center left-[6px] overflow-clip top-1/2 translate-y-[-50%]" data-name="Group">
      <Frame1 />
      <Frame label={label} />
    </div>
  );
}

function Group7Copy({ 
  value, 
  onChange, 
  showPassword, 
  onTogglePassword, 
  label, 
  placeholder 
}: { 
  value: string; 
  onChange: (value: string) => void; 
  showPassword: boolean; 
  onTogglePassword: () => void; 
  label: string;
  placeholder: string;
}) {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="Group 7 Copy">
      <div className="absolute bg-[#f0f1f2] inset-0 rounded-[8px]" data-name="Rectangle" />
      <SocialVisibility24Px onClick={onTogglePassword} showPassword={showPassword} />
      <Group label={label} />
      <input
        type={showPassword ? "text" : "password"}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="absolute left-[110px] top-1/2 translate-y-[-50%] bg-transparent border-none outline-none font-['Poppins:Regular',sans-serif] text-[16px] text-[#37474f] w-[calc(100%-140px)]"
      />
    </div>
  );
}

function FormElementsMobileInputFieldsActiveEmpty({ 
  value, 
  onChange, 
  showPassword, 
  onTogglePassword 
}: { 
  value: string; 
  onChange: (value: string) => void; 
  showPassword: boolean; 
  onTogglePassword: () => void;
}) {
  const { t } = useLanguage();
  
  return (
    <div className="absolute inset-[71.06%_4.27%_22.54%_4.27%]" data-name="form elements/mobile/input fields/active/empty">
      <Group7Copy 
        value={value} 
        onChange={onChange} 
        showPassword={showPassword} 
        onTogglePassword={onTogglePassword}
        label={t('password')}
        placeholder={t('enterPassword')}
      />
    </div>
  );
}

function FormElementsMobileInputFieldsActiveEmpty1({ 
  value, 
  onChange, 
  showPassword, 
  onTogglePassword 
}: { 
  value: string; 
  onChange: (value: string) => void; 
  showPassword: boolean; 
  onTogglePassword: () => void;
}) {
  const { t } = useLanguage();
  
  return (
    <div className="absolute inset-[79.68%_4.27%_13.92%_4.27%]" data-name="form elements/mobile/input fields/active/empty">
      <Group7Copy 
        value={value} 
        onChange={onChange} 
        showPassword={showPassword} 
        onTogglePassword={onTogglePassword}
        label={t('confirmPassword')}
        placeholder={t('confirmPasswordPlaceholder')}
      />
    </div>
  );
}

function NavigationArrowForward24Px() {
  return (
    <div className="absolute right-[16px] size-[24px] top-1/2 translate-y-[-50%]" data-name="navigation/arrow_forward_24px">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="navigation/arrow_forward_24px">
          <path d={svgPaths.p1ee0b380} fill="var(--fill-0, white)" id="icon/navigation/arrow_forward_24px" />
        </g>
      </svg>
    </div>
  );
}

function ButtonsMobileSolidTextSymbolTextSymbol({ onClick, disabled }: { onClick: () => void; disabled?: boolean }) {
  const { t } = useLanguage();
  
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="absolute inset-[89.9%_4%_4.19%_4.53%] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
      data-name="buttons/mobile/solid/text + symbol/text → symbol"
    >
      <div className="absolute bg-[#f37a20] inset-0 rounded-[8px]" data-name="Rectangle" />
      <div className="absolute flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] left-[164.5px] not-italic text-[16px] text-center text-nowrap text-white top-1/2 translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[normal] whitespace-pre">{t('finishGoodToGo')}</p>
      </div>
      <NavigationArrowForward24Px />
    </button>
  );
}

function Illustration() {
  return (
    <div className="absolute inset-[13.3%_7.73%_50.62%_7.73%]">
      <div className="absolute inset-[18.27%_10.71%_11.02%_10.58%]" data-name="background simple  inject 207">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 257 240">
          <g id="background simple  inject 207">
            <path d={svgPaths.p1e526400} fill="var(--fill-0, #F0F0F0)" id="Vector" />
          </g>
        </svg>
      </div>
      <div className="absolute inset-[52.06%_9%_6.37%_9.05%]" data-name="Floor  inject 207">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 257 1">
          <g id="Floor  inject 207">
            <path d={svgPaths.p2b19e800} fill="var(--fill-0, #263238)" id="Vector" />
          </g>
        </svg>
      </div>
      <div className="absolute inset-[29.77%_9.66%_14.16%_71.91%]" data-name="Plant  inject 207">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 69 119">
          <g id="Plant  inject 207">
            <path d={svgPaths.p29ae4680} fill="var(--fill-0, #F37A20)" id="Vector" />
            <path d={svgPaths.p25445c00} fill="var(--fill-0, #263238)" id="Vector_2" />
            <path d={svgPaths.p21235500} fill="var(--fill-0, #263238)" id="Vector_3" />
            <path d={svgPaths.p32bb1400} fill="var(--fill-0, #263238)" id="Vector_4" />
            <path d={svgPaths.pc8cb680} fill="var(--fill-0, #263238)" id="Vector_5" />
            <path d={svgPaths.p353aac80} fill="var(--fill-0, #263238)" id="Vector_6" />
          </g>
        </svg>
      </div>
      <div className="absolute inset-[0%_9.64%_37.59%_70.97%]" data-name="Padlock  inject 207">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 69 83">
          <g id="Padlock  inject 207">
            <path d={svgPaths.p2571bc00} fill="var(--fill-0, #F37A20)" id="Vector" />
            <path d={svgPaths.p1c4d2a00} fill="var(--fill-0, #263238)" id="Vector_2" />
            <path d={svgPaths.p36990d30} fill="var(--fill-0, #263238)" id="Vector_3" />
            <path d={svgPaths.pa450500} fill="var(--fill-0, #263238)" id="Vector_4" />
            <path d={svgPaths.p35337300} fill="var(--fill-0, #263238)" id="Vector_5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default function PasswordScreen({ onBack, onFinish }: PasswordScreenProps) {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const { t, language } = useLanguage();

  // Validate password (min 8 chars + must contain a number)
  const validatePassword = (): boolean => {
    if (password.length < 8) {
      const msg = language === 'urdu' ? 'پاس ورڈ کم از کم 8 حروف کا ہونا چاہیے' : 'Password must be at least 8 characters';
      setError(msg);
      toast.error(msg);
      return false;
    }
    
    if (!/\d/.test(password)) {
      const msg = language === 'urdu' ? 'پاس ورڈ میں کم از کم ایک نمبر ہونا چاہیے' : 'Password must contain at least one number';
      setError(msg);
      toast.error(msg);
      return false;
    }
    
    if (password !== confirmPassword) {
      const msg = language === 'urdu' ? 'پاس ورڈ مماثل نہیں ہیں' : 'Passwords do not match';
      setError(msg);
      toast.error(msg);
      return false;
    }
    
    setError('');
    return true;
  };

  const handleFinish = () => {
    if (validatePassword()) {
      onFinish();
    }
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    if (error) setError('');
  };

  const handleConfirmPasswordChange = (value: string) => {
    setConfirmPassword(value);
    if (error) setError('');
  };

  const handleSpeakText = () => {
    const pageText = `${t('choosePassword')}. ${t('password_screen.security_message')}`;
    speak(pageText, language === 'urdu' ? 'urdu' : 'english');
  };

  const isValid = password.length >= 8 && /\d/.test(password) && password === confirmPassword;

  return (
    <div className="bg-white relative size-full" data-name="New Registration--Password">
      <MaskGroup />
      <BarsStatusBarIPhoneLight />
      <BarsHomeIndicatorIPhoneLightPortrait />
      <ComponentsMobileAppbarSecondery onBack={onBack} />
      <BarsHomeIndicatorIPhoneLightPortrait1 />
      <FormElementsMobileInputFieldsActiveEmpty 
        value={password}
        onChange={handlePasswordChange}
        showPassword={showPassword}
        onTogglePassword={() => setShowPassword(!showPassword)}
      />
      <FormElementsMobileInputFieldsActiveEmpty1 
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
        showPassword={showConfirmPassword}
        onTogglePassword={() => setShowConfirmPassword(!showConfirmPassword)}
      />
      
      {/* Error Message */}
      {error && (
        <p className="absolute left-[4.27%] right-[4.27%] top-[85%] font-['Poppins:Regular',sans-serif] text-[12px] text-red-500 text-center">
          {error}
        </p>
      )}
      
      <ButtonsMobileSolidTextSymbolTextSymbol onClick={handleFinish} disabled={!isValid} />
      <Illustration />
      
      {/* Speaker Icon - image 31 made clickable */}
      <button
        onClick={handleSpeakText}
        className="absolute left-[342px] size-[16px] top-[44px] cursor-pointer bg-transparent border-none p-0"
        data-name="image 31"
        aria-label="Listen to page content"
      >
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage31} />
      </button>
      
      <p className="absolute font-['Poppins:Regular',sans-serif] font-normal leading-[1.5] left-[16px] not-italic text-[#828282] text-[14px] top-[112px] w-[343px]">
        {t('password_screen.security_message')}
      </p>
    </div>
  );
}