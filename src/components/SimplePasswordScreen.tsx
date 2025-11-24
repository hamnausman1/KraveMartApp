import { useState } from 'react';
import svgPaths from "../imports/svg-1au87wbkdu";
import imgMain2 from "figma:asset/db4e58fac23dd6eaeefc5f9b23a040409692e76a.png";
import imgImage31 from "figma:asset/d1a81c329997884332855549bf84957646c3655b.png";
import { imgMain1 } from "../imports/svg-m1cfk";
import { useLanguage } from '../contexts/LanguageContext';
import { toast } from 'sonner@2.0.3';
import { speak } from '../utils/textToSpeech';

interface SimplePasswordScreenProps {
  onBack: () => void;
  onSubmit: (password: string) => void;
  onForgotPassword?: () => void;
}

function Group3() {
  return (
    <div className="absolute contents inset-[-45.4%_-58.02%_73.97%_-17.34%]">
      <div className="absolute flex inset-[-15.21%_-58.02%_73.97%_-7.26%] items-center justify-center">
        <div className="flex-none h-[588.878px] rotate-[261.236deg] w-[248.041px]">
          <div className="mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[27.34px_123.67px] mask-size-[374.954px_811.834px] opacity-80 relative size-full" data-name="main (1)" style={{ maskImage: `url('${imgMain1}')` }}>
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[333.28%] left-[-725%] max-w-none top-[-109.86%] w-[1406.64%]" src={imgMain2} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[-45.4%_-47.94%_104.16%_-17.34%] items-center justify-center">
        <div className="flex-none h-[588.878px] rotate-[261.236deg] w-[248.041px]">
          <div className="mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[65.135px_368.815px] mask-size-[374.954px_811.834px] opacity-80 relative size-full" data-name="main (1)" style={{ maskImage: `url('${imgMain1}')` }}>
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[333.28%] left-[-866.5%] max-w-none top-[-110.7%] w-[1406.64%]" src={imgMain2} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-[-45.4%_-58.02%_73.97%_-17.34%]">
      <Group3 />
      <div className="absolute backdrop-blur-[45px] backdrop-filter bg-[rgba(252,252,252,0.6)] inset-[0.02%_-0.16%_73.97%_-0.01%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.16px_0px] mask-size-[374.954px_811.834px]" style={{ maskImage: `url('${imgMain1}')` }} />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[81.29%_-0.06%_-0.03%_0.03%]">
      <div className="absolute flex inset-[81.29%_-0.06%_-0.03%_0.03%] items-center justify-center">
        <div className="flex-none h-[375.153px] rotate-[90deg] skew-x-[359.139deg] w-[146.533px]">
          <div className="mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-659.934px] mask-size-[374.954px_811.834px] relative size-full" data-name="main (1)" style={{ maskImage: `url('${imgMain1}')` }}>
            <div className="absolute inset-0 opacity-75 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[415.76%] left-[-1201.44%] max-w-none top-[-144.82%] w-[1987.8%]" src={imgMain2} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents inset-[66.22%_-0.06%_-0.03%_0.03%]">
      <Group2 />
      <div className="absolute backdrop-blur-[45px] backdrop-filter bg-[rgba(254,254,254,0.55)] bottom-0 left-[0.03%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-537.514px] mask-size-[374.954px_811.834px] right-[-0.02%] top-[66.22%]" style={{ maskImage: `url('${imgMain1}')` }} />
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute bottom-0 contents left-[0.03%] right-[-0.02%] top-[0.02%]" data-name="Mask Group">
      <Group4 />
      <Group5 />
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

function SocialVisibility24Px({ onClick }: { onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="absolute right-[17px] size-[24px] top-1/2 translate-y-[-50%] cursor-pointer bg-transparent border-none p-0" 
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

function Group7Copy({ 
  value, 
  onChange, 
  showPassword, 
  togglePassword 
}: { 
  value: string; 
  onChange: (value: string) => void; 
  showPassword: boolean; 
  togglePassword: () => void;
}) {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="Group 7 Copy">
      <div className="absolute bg-[#f0f1f2] inset-0 rounded-[8px]" data-name="Rectangle" />
      <SocialVisibility24Px onClick={togglePassword} />
      <div className="absolute content-stretch flex items-center left-[6px] overflow-clip top-1/2 translate-y-[-50%]" data-name="Group">
        <Frame1 />
        <input
          type={showPassword ? "text" : "password"}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Password"
          className="ml-[10px] bg-transparent border-none outline-none font-['Poppins:Regular',sans-serif] text-[16px] text-[#37474f] placeholder:text-[rgba(55,71,79,0.72)] w-[200px]"
        />
      </div>
    </div>
  );
}

function FormElementsMobileInputFieldsActiveEmpty({ 
  value, 
  onChange, 
  showPassword, 
  togglePassword 
}: { 
  value: string; 
  onChange: (value: string) => void; 
  showPassword: boolean; 
  togglePassword: () => void;
}) {
  return (
    <div className="absolute inset-[70.57%_4.27%_23.03%_4.27%]" data-name="form elements/mobile/input fields/active/empty">
      <Group7Copy 
        value={value} 
        onChange={onChange} 
        showPassword={showPassword} 
        togglePassword={togglePassword} 
      />
    </div>
  );
}

function NavigationArrowForward24Px() {
  return (
    <div className="absolute right-[16px] size-[24px] top-1/2 translate-y-[-50%]" data-name="navigation/arrow_forward_24px">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="navigation/arrow_forward_24px">
          <path d={svgPaths.p1ee0b380} fill="var(--fill-0, black)" id="icon/navigation/arrow_forward_24px" />
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
      <div className="absolute bg-[#ffd037] inset-0 rounded-[8px]" data-name="Rectangle" />
      <div className="absolute flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] left-[164px] not-italic text-[16px] text-black text-center text-nowrap top-1/2 translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[normal] whitespace-pre">{t('submit')}</p>
      </div>
      <NavigationArrowForward24Px />
    </button>
  );
}

function BackgroundSimpleInject() {
  return (
    <div className="absolute inset-[11.51%_12.29%_60.27%_8.2%]" data-name="background simple  inject 171">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 299 230">
        <g id="background simple  inject 171">
          <path d={svgPaths.p22c4f580} fill="var(--fill-0, #F37A20)" id="Vector" />
          <path d={svgPaths.p22c4f580} fill="var(--fill-0, white)" id="Vector_2" opacity="0.9" />
        </g>
      </svg>
    </div>
  );
}

function ShadowInject() {
  return (
    <div className="absolute inset-[46.04%_2.79%_51.55%_7.86%]" data-name="Shadow  inject 171">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 336 20">
        <g id="Shadow  inject 171">
          <path d={svgPaths.p2c2c0f80} fill="var(--fill-0, #F5F5F5)" id="path  inject 171" />
        </g>
      </svg>
    </div>
  );
}

function LoginInject() {
  return (
    <div className="absolute inset-[16.32%_45.84%_58.63%_18.02%]" data-name="Login  inject 171">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 136 204">
        <g id="Login  inject 171">
          <path d={svgPaths.p3bbe0930} fill="var(--fill-0, #F37A20)" id="Vector" />
          <path d={svgPaths.p38204ef0} fill="var(--fill-0, #F37A20)" id="Vector_2" />
          <path d={svgPaths.p38204ef0} fill="var(--fill-0, white)" id="Vector_3" opacity="0.3" />
          <path d={svgPaths.p9113080} fill="var(--fill-0, #F37A20)" id="Vector_4" />
          <path d={svgPaths.p33180100} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p10bbdb00} fill="var(--fill-0, #F37A20)" id="Vector_6" opacity="0.6" />
          <path d={svgPaths.p2eb1b270} fill="var(--fill-0, #F37A20)" id="Vector_7" opacity="0.6" />
          <path d={svgPaths.p1313a880} fill="var(--fill-0, white)" id="Vector_8" />
          <path d={svgPaths.p1b746400} fill="var(--fill-0, white)" id="Vector_9" />
          <path d={svgPaths.pb287a00} fill="var(--fill-0, #F37A20)" id="Vector_10" />
          <path d={svgPaths.p21ce4900} fill="var(--fill-0, #F37A20)" id="Vector_11" />
          <path d={svgPaths.p27003780} fill="var(--fill-0, #F37A20)" id="Vector_12" />
          <path d={svgPaths.p17e3e400} fill="var(--fill-0, #263238)" id="Vector_13" />
          <path d={svgPaths.p1802700} fill="var(--fill-0, #263238)" id="Vector_14" />
          <path d={svgPaths.p151fcb00} fill="var(--fill-0, #263238)" id="Vector_15" />
          <path d={svgPaths.p17e4d100} fill="var(--fill-0, #263238)" id="Vector_16" />
          <path d={svgPaths.p3b4d64f0} fill="var(--fill-0, #263238)" id="Vector_17" />
        </g>
      </svg>
    </div>
  );
}

function CharacterInject() {
  return (
    <div className="absolute inset-[16.53%_20.97%_52.75%_58.6%]" data-name="Character  inject 171">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 77 250">
        <g id="Character  inject 171">
          <path d={svgPaths.p5c37600} fill="var(--fill-0, #FF8B7B)" id="Vector" />
          <path d={svgPaths.p12673cd0} fill="var(--fill-0, #FF8B7B)" id="Vector_2" />
          <path d={svgPaths.p2f355000} fill="var(--fill-0, #FF8B7B)" id="Vector_3" />
          <path d={svgPaths.p1ba9dc00} fill="var(--fill-0, #263238)" id="Vector_4" />
          <path d={svgPaths.pba0e000} fill="var(--fill-0, #FF5652)" id="Vector_5" />
          <path d={svgPaths.p16811f00} fill="var(--fill-0, #FF8B7B)" id="Vector_6" />
          <path d={svgPaths.p2f2a8900} fill="var(--fill-0, #FF8B7B)" id="Vector_7" />
          <path d={svgPaths.p23012e80} fill="var(--fill-0, black)" id="Vector_8" opacity="0.2" />
          <path d={svgPaths.p2c3cab80} fill="var(--fill-0, #263238)" id="Vector_9" />
          <path d={svgPaths.p3c761000} fill="var(--fill-0, #FF8B7B)" id="Vector_10" />
          <path d={svgPaths.p2adefb80} fill="var(--fill-0, #F37A20)" id="Vector_11" />
          <path d={svgPaths.p19f5e180} fill="var(--fill-0, #F37A20)" id="Vector_12" />
          <path d={svgPaths.p1fe56960} fill="var(--fill-0, #F37A20)" id="Vector_13" />
          <path d={svgPaths.p12039800} fill="var(--fill-0, #F37A20)" id="Vector_14" />
          <path d={svgPaths.p20cd2ef0} fill="var(--fill-0, #F37A20)" id="Vector_15" />
          <path d={svgPaths.p1730f38} fill="var(--fill-0, #FF8B7B)" id="Vector_16" />
          <path d={svgPaths.p7dea900} fill="var(--fill-0, #FF8B7B)" id="Vector_17" />
          <path d={svgPaths.p1718bf0} fill="var(--fill-0, #263238)" id="Vector_18" />
          <path d={svgPaths.pfed8700} fill="var(--fill-0, #263238)" id="Vector_19" />
          <path d={svgPaths.p31e52f00} fill="var(--fill-0, #236CD9)" id="Vector_20" />
          <path d={svgPaths.p31e52f00} fill="var(--fill-0, black)" id="Vector_21" opacity="0.4" />
          <path d={svgPaths.p7c48880} fill="var(--fill-0, #FF8B7B)" id="Vector_22" />
          <path d={svgPaths.p28382300} fill="var(--fill-0, black)" id="Vector_23" opacity="0.2" />
          <path d={svgPaths.p11418c00} fill="var(--fill-0, #236CD9)" id="Vector_24" />
          <path d={svgPaths.p11418c00} fill="var(--fill-0, black)" id="Vector_25" opacity="0.4" />
          <path d={svgPaths.p38757200} fill="var(--fill-0, black)" id="Vector_26" opacity="0.2" />
          <path d={svgPaths.p3490eaf0} fill="var(--fill-0, black)" id="Vector_27" opacity="0.2" />
          <path d={svgPaths.p19ab6900} fill="var(--fill-0, black)" id="Vector_28" opacity="0.2" />
          <path d={svgPaths.p14134800} fill="var(--fill-0, #FF8B7B)" id="Vector_29" />
          <path d={svgPaths.p338ed380} fill="var(--fill-0, #263238)" id="Vector_30" />
          <path d={svgPaths.p10598a00} fill="var(--fill-0, #263238)" id="Vector_31" />
          <path d={svgPaths.pcc2300} fill="var(--fill-0, #263238)" id="Vector_32" />
          <path d={svgPaths.p2930e600} fill="var(--fill-0, #FF8B7B)" id="Vector_33" />
          <path d={svgPaths.p1c360c80} fill="var(--fill-0, #FFD037)" id="Vector_34" />
          <path d={svgPaths.pb23bd80} fill="var(--fill-0, #263238)" id="Vector_35" />
          <path d={svgPaths.p3bac80a0} fill="var(--fill-0, black)" id="Vector_36" opacity="0.3" />
          <path d={svgPaths.p3f66d100} fill="var(--fill-0, #FFD037)" id="Vector_37" />
          <path d={svgPaths.pd082980} fill="var(--fill-0, #263238)" id="Vector_38" />
          <path d={svgPaths.p2dc96d00} fill="var(--fill-0, #236CD9)" id="Vector_39" />
          <path d={svgPaths.p2dc96d00} fill="var(--fill-0, black)" id="Vector_40" opacity="0.4" />
        </g>
      </svg>
    </div>
  );
}

function ThinkingInject() {
  return (
    <div className="absolute inset-[9.69%_8.77%_83.65%_70.68%]" data-name="Thinking  inject 171">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 78 55">
        <g id="Thinking  inject 171">
          <path d={svgPaths.p995e880} fill="var(--fill-0, #F37A20)" id="Vector" />
          <path d={svgPaths.p14e81900} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p63c0770} fill="var(--fill-0, #F37A20)" id="Vector_3" opacity="0.6" />
          <path d={svgPaths.p14018e00} fill="var(--fill-0, #F37A20)" id="Vector_4" opacity="0.3" />
        </g>
      </svg>
    </div>
  );
}

function ForgotPasswordRafiki() {
  return (
    <div className="absolute contents inset-[9.69%_2.79%_51.55%_7.86%]" data-name="Forgot password-rafiki (2) 1">
      <BackgroundSimpleInject />
      <ShadowInject />
      <LoginInject />
      <CharacterInject />
      <ThinkingInject />
    </div>
  );
}

function NavigationArrowBackward24Px() {
  return (
    <div className="absolute left-0 size-[24px] top-1/2 translate-y-[-50%]" data-name="navigation/arrow_backward_24px">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="navigation/arrow_backward_24px">
          <path d={svgPaths.p6a58300} fill="var(--fill-0, #37474F)" id="icon/navigation/arrow_backward_24px" />
        </g>
      </svg>
    </div>
  );
}

function Group1({ onClick }: { onClick: () => void }) {
  return (
    <button className="absolute block cursor-pointer inset-[4.56%_47.2%_91.63%_4.27%] bg-transparent border-none" data-name="Group" onClick={onClick}>
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[normal] left-[42px] not-italic text-[#37474f] text-[24px] text-nowrap top-[calc(50%-15.5px)] whitespace-pre">&nbsp;</p>
      <NavigationArrowBackward24Px />
    </button>
  );
}

export default function SimplePasswordScreen({ onBack, onSubmit, onForgotPassword }: SimplePasswordScreenProps) {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { t, language } = useLanguage();

  const handleSubmit = () => {
    if (password.trim()) {
      onSubmit(password);
    } else {
      toast.error(t('passwordRequired') || 'Password is required');
    }
  };

  const handleSpeakText = () => {
    const pageText = `${t('enterThePassword')}. ${t('pleaseEnterPasswordToProceed')}`;
    speak(pageText, language === 'urdu' ? 'urdu' : 'english');
  };

  return (
    <div className="bg-white relative size-full" data-name="Splash--Phone Number--Preregisterd">
      <MaskGroup />
      <BarsStatusBarIPhoneLight />
      <BarsHomeIndicatorIPhoneLightPortrait />
      <FormElementsMobileInputFieldsActiveEmpty 
        value={password} 
        onChange={setPassword} 
        showPassword={showPassword}
        togglePassword={() => setShowPassword(!showPassword)}
      />
      <div className="absolute flex flex-col font-['Poppins:Medium',sans-serif] inset-[55.67%_44%_40.64%_4.27%] justify-center leading-[0] not-italic text-[#37474f] text-[20px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">{t('enterThePassword')}</p>
      </div>
      <p className="absolute font-['Poppins:Regular',sans-serif] inset-[60.59%_4.27%_32.88%_4.27%] leading-[normal] not-italic text-[14px] text-[rgba(55,71,79,0.72)]">{t('pleaseEnterPasswordToProceed')}</p>
      {onForgotPassword && (
        <button 
          onClick={onForgotPassword}
          className="absolute font-['Poppins:Regular',sans-serif] inset-[81.28%_61.87%_16.13%_4.27%] leading-[normal] not-italic text-[#f37a20] text-[14px] text-nowrap whitespace-pre cursor-pointer bg-transparent border-none"
        >
          {t('forgotPassword')}
        </button>
      )}
      <ButtonsMobileSolidTextSymbolTextSymbol onClick={handleSubmit} disabled={!password.trim()} />
      <ForgotPasswordRafiki />
      <Group1 onClick={onBack} />
      
      {/* Speaker Icon - image 31 made clickable */}
      <button
        onClick={handleSpeakText}
        className="absolute aspect-[222/227] left-[91.73%] right-[4%] top-[44px] cursor-pointer bg-transparent border-none p-0"
        data-name="image 31"
        aria-label="Listen to page content"
      >
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage31} />
      </button>
    </div>
  );
}